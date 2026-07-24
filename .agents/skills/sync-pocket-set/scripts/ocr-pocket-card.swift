import AppKit
import Foundation
import Vision

// Emits one JSON line per image for extract-zh-terms.mjs.

guard CommandLine.arguments.count >= 2 else {
    fputs("usage: swift ocr-pocket-card.swift [--output <jsonl>] <image>...\n", stderr)
    exit(2)
}

var arguments = Array(CommandLine.arguments.dropFirst())
var outputHandle = FileHandle.standardOutput
if arguments.first == "--output" {
    guard arguments.count >= 3 else {
        fputs("--output requires a path and at least one image\n", stderr)
        exit(2)
    }
    let outputPath = arguments[1]
    FileManager.default.createFile(atPath: outputPath, contents: nil)
    outputHandle = try FileHandle(forWritingTo: URL(fileURLWithPath: outputPath))
    arguments.removeFirst(2)
}

for imagePath in arguments {
    autoreleasepool {
        guard
            let image = NSImage(contentsOfFile: imagePath),
            let cgImage = image.cgImage(forProposedRect: nil, context: nil, hints: nil)
        else {
            fputs("unable to load image: \(imagePath)\n", stderr)
            return
        }

        let request = VNRecognizeTextRequest()
        request.recognitionLevel = .accurate
        request.recognitionLanguages = ["zh-Hant", "en-US"]
        request.usesLanguageCorrection = true

        do {
            let handler = VNImageRequestHandler(cgImage: cgImage)
            try handler.perform([request])
        } catch {
            fputs("OCR failed for \(imagePath): \(error)\n", stderr)
            return
        }

        let observations = (request.results ?? []).sorted {
            if abs($0.boundingBox.midY - $1.boundingBox.midY) > 0.01 {
                return $0.boundingBox.midY > $1.boundingBox.midY
            }
            return $0.boundingBox.minX < $1.boundingBox.minX
        }

        let lines = observations.compactMap { observation -> [String: Any]? in
            guard let candidate = observation.topCandidates(1).first else { return nil }
            let box = observation.boundingBox
            return [
                "x": box.minX,
                "y": box.minY,
                "width": box.width,
                "height": box.height,
                "text": candidate.string,
            ]
        }
        let payload: [String: Any] = ["file": imagePath, "lines": lines]
        if let data = try? JSONSerialization.data(withJSONObject: payload),
           var line = String(data: data, encoding: .utf8) {
            line.append("\n")
            outputHandle.write(line.data(using: .utf8)!)
        }
    }
}

if outputHandle !== FileHandle.standardOutput {
    try outputHandle.close()
}
