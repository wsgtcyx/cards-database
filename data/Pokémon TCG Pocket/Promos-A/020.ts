import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/020/accf31bc04c14bc2",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/020/accf31bc04c14bc2",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/020/accf31bc04c14bc2",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/020/accf31bc04c14bc2",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/020/accf31bc04c14bc2",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/020/accf31bc04c14bc2",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/020/accf31bc04c14bc2",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/020/accf31bc04c14bc2",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/020/accf31bc04c14bc2"
    },
    name: {
        en: "Haunter",
        fr: "Spectrum",
        es: "Haunter",
        it: "Haunter",
        de: "Alpollo",
        'pt-br': "Haunter",
        ja: "ゴースト",
        ko: "고우스트",
        "zh-tw": "鬼斯通",
    },
    illustrator: "Mékayu",
    rarity: "One Diamond",
    category: "Pokemon",
    types: ["Psychic"],
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Surprise Attack",
                fr: "Attaque Surprise",
                es: "Ataque Sorpresa",
                it: "Attacco a Sorpresa",
                de: "Überraschungsangriff",
                'pt-br': "Ataque Surpresa",
                ja: "ふいをつく",
                ko: "허찌르기",
                "zh-tw": "偷襲"
            },
            cost: ["Psychic"],
            damage: 50,
            effect: {
                en: "Flip a coin. If tails, this attack does nothing.",
                fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
                es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
                it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
                de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
                'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
                ja: "コインを1回投げウラなら、このワザは失敗。",
                ko: "동전을 1번 던져서 뒷면이 나오면 이 기술은 실패한다.",
                "zh-tw": "擲1次硬幣若為反面,則這個招式失敗。"
            }
        }],
    hp: 70,
    evolveFrom: {
        en: "Gastly",
        "fr": "Fantominus",
        "es": "Gastly",
        "it": "Gastly",
        "de": "Nebulak",
        "pt-br": "Gastly",
        "zh-tw": "鬼斯",
        ja: "ゴース",
        ko: "고오스"
    },
    description: {
        en: "It likes to lurk in the dark and tap shoulders\nwith a gaseous hand. Its touch causes endless\nshuddering.",
        fr: "Il adore se tapir dans l’ombre et faire frissonner ses proies pour l’éternité en leur touchant l’épaule.",
        es: "Le gusta acechar en la oscuridad y tocarles el\nhombro a sus víctimas con su mano gaseosa.\nEstas se quedan temblando para siempre.",
        it: "Adora stare in agguato nei luoghi bui e toccare\nle spalle delle vittime con le sue mani gassose.\nIl suo tocco causa brividi incontenibili.",
        de: "Es lauert gern im Dunkeln und tippt Leuten mit\nseiner gasförmigen Hand auf die Schulter.\nSeine Berührung erzeugt endloses Schaudern.",
        'pt-br': "Gosta de se esconder no escuro e bater nos\nombros dos outros com sua mão gasosa.\nSeu toque causa arrepios que não acabam mais.",
        ja: "暗闇にまぎれ ガスの手を 伸ばし 人の肩を 叩くのが 好き。 触られると 震えが 止まらない。",
        ko: "어둠을 틈타 가스로 된 손을 뻗쳐\n사람의 어깨를 두드리기 좋아한다.\n그 손에 닿으면 떨림이 멈추지 않는다.",
        "zh-tw": "喜歡躲在黑暗中伸出氣體構成的手去拍人的肩膀。一旦被接觸到，身體便會抖個不停。"
    },
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["vol2"]
};
export default card;
