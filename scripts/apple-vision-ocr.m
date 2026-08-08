#import <Foundation/Foundation.h>
#import <ImageIO/ImageIO.h>
#import <Vision/Vision.h>

static NSDictionary *recognize(NSString *path, NSString *language) {
    CGImageSourceRef source = CGImageSourceCreateWithURL(
        (__bridge CFURLRef)[NSURL fileURLWithPath:path], NULL
    );
    if (!source) {
        return @{ @"path": path, @"error": @"cannot load image" };
    }

    CGImageRef image = CGImageSourceCreateImageAtIndex(source, 0, NULL);
    CFRelease(source);
    if (!image) {
        return @{ @"path": path, @"error": @"cannot decode image" };
    }

    VNRecognizeTextRequest *request = [[VNRecognizeTextRequest alloc] init];
    request.recognitionLevel = VNRequestTextRecognitionLevelAccurate;
    request.recognitionLanguages = @[language, @"en-US"];
    request.usesLanguageCorrection = YES;
    request.minimumTextHeight = 0.008;

    VNImageRequestHandler *handler = [[VNImageRequestHandler alloc]
        initWithCGImage:image options:@{}
    ];
    NSError *error = nil;
    BOOL ok = [handler performRequests:@[request] error:&error];
    CGImageRelease(image);
    if (!ok) {
        return @{
            @"path": path,
            @"error": error.localizedDescription ?: @"Vision request failed"
        };
    }

    NSMutableArray *lines = [NSMutableArray array];
    for (VNRecognizedTextObservation *observation in request.results) {
        VNRecognizedText *candidate = [observation topCandidates:1].firstObject;
        if (!candidate) continue;
        CGRect box = observation.boundingBox;
        [lines addObject:@{
            @"text": candidate.string,
            @"confidence": @(candidate.confidence),
            @"box": @{
                @"x": @(box.origin.x),
                @"y": @(box.origin.y),
                @"width": @(box.size.width),
                @"height": @(box.size.height)
            }
        }];
    }
    return @{ @"path": path, @"language": language, @"lines": lines };
}

int main(int argc, const char *argv[]) {
    @autoreleasepool {
        if (argc < 4) {
            fprintf(stderr, "usage: apple-vision-ocr <language> <output.json> <image>...\n");
            return 2;
        }

        NSString *language = [NSString stringWithUTF8String:argv[1]];
        NSString *output = [NSString stringWithUTF8String:argv[2]];
        NSMutableArray *results = [NSMutableArray array];
        for (int i = 3; i < argc; i++) {
            NSString *path = [NSString stringWithUTF8String:argv[i]];
            [results addObject:recognize(path, language)];
        }

        NSError *error = nil;
        NSData *json = [NSJSONSerialization dataWithJSONObject:results
                                                       options:NSJSONWritingPrettyPrinted
                                                         error:&error];
        if (!json || ![json writeToFile:output options:NSDataWritingAtomic error:&error]) {
            fprintf(stderr, "cannot write output: %s\n", error.localizedDescription.UTF8String);
            return 1;
        }
    }
    return 0;
}
