import { Card } from "../../../interfaces";
import Set from "../Triumphant Light";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A2a/032",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A2a/032",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A2a/032",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A2a/032",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A2a/032",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A2a/032",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A2a/032"
    },
    name: {
        en: "Haunter",
        fr: "Spectrum",
        es: "Haunter",
        it: "Haunter",
        de: "Alpollo",
        'pt-br': "Haunter",
        ko: "고우스트",
        "zh-tw": "鬼斯通",
    },
    illustrator: "Eri Yamaki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Psychic"],
    evolveFrom: {
        en: "Gastly",
        "fr": "Gastly",
        "es": "gastly",
        "it": "Gastly",
        "de": "Gastly",
        "pt-br": "Gastosamente",
        "zh-tw": "鬼斯",
    },
    description: {
        en: "It likes to lurk in the dark and tap shoulders with a gaseous hand. Its touch causes endless shuddering.",
        fr: "Il adore se tapir dans l'ombre et faire frissonner\nses proies pour l'éternité en leur touchant l'épaule.",
        es: "Le gusta acechar en la oscuridad y tocarles el\nhombro a sus víctimas con su mano gaseosa.\nEstas se quedan temblando para siempre.",
        it: "Adora stare in agguato nei luoghi bui e toccare\nle spalle delle vittime con le sue mani gassose.\nIl suo tocco causa brividi incontenibili.",
        de: "Es lauert gern im Dunkeln und tippt Leuten mit\nseiner gasförmigen Hand auf die Schulter.\nSeine Berührung erzeugt endloses Schaudern.",
        'pt-br': "Gosta de se esconder no escuro e bater nos\nombros dos outros com sua mão gasosa.\nSeu toque causa arrepios que não acabam mais.",
        ko: "어둠을 틈타 가스로 된 손을 뻗쳐\n사람의 어깨를 두드리기 좋아한다.\n그 손에 닿으면 떨림이 멈추지 않는다.",
        "zh-tw": "牠喜歡潛伏在黑暗中，用氣態的手輕拍肩膀。它的觸碰引起無盡的顫抖。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Mumble",
                fr: "Murmure",
                es: "Farfullar",
                it: "Borbottio",
                de: "Grummeln",
                'pt-br': "Resmungo",
                ko: "중얼거리기",
                "zh-tw": "咕噥"
            },
            damage: 40,
            cost: ["Psychic", "Psychic"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
