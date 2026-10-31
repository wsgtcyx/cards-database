import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/086",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/086",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/086",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/086",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/086",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/086",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/086",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4b/086",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4b/086"
    },
    name: {
        en: "Wartortle",
        "fr": "Carabaffe",
        "es": "Wartortle",
        "it": "Wartortle",
        "de": "Schillok",
        "pt-br": "Wartortle",
        "zh-tw": "卡咪龜",
        ja: "カメール",
        ko: "어니부기",
    },
    illustrator: "Nelnal",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Water"],
    evolveFrom: {
        en: "Squirtle",
        "fr": "Carapuce",
        "es": "Squirtle",
        "it": "Squirtle",
        "de": "Schiggy",
        "pt-br": "Squirtle",
        "zh-tw": "傑尼龜",
        ja: "ゼニガメ",
        ko: "꼬부기"
    },
    description: {
        en: "It is recognized as a symbol of longevity. If its\nshell has algae on it, that Wartortle is very old.",
        "fr": "Il est reconnu comme un symbole de longévité. Si c'est\nla coquille contient des algues, ce Wartortle est très vieux.",
        "es": "Es reconocido como un símbolo de longevidad. si es\nEl caparazón tiene algas, ese Wartortle es muy viejo.",
        "it": "È riconosciuto come simbolo di longevità. Se è\nla conchiglia ha delle alghe sopra, quel Wartortle è molto antico.",
        "de": "Es gilt als Symbol für Langlebigkeit. Wenn es so ist\nAuf der Schale sind Algen, die Wartortle ist sehr alt.",
        "pt-br": "É reconhecido como um símbolo de longevidade. Se for\nconcha contém algas, que Wartortle é muito antigo.",
        "zh-tw": "它被認為是長壽的象徵。如果它的\n殼上有藻類，那疣龜很老了。",
        ja: "長生きの シンボルと されている。 甲羅に 苔が ついているのは とくに 長生きの カメールだ。",
        ko: "장수의 상징으로 여겨진다.\n등껍질에 이끼가 붙어 있는 것은\n특히 장수한 어니부기다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Wave Splash",
                "fr": "Éclaboussure de vague",
                "es": "Salpicadura de onda",
                "it": "Spruzzo dell'onda",
                "de": "Wellenspritzer",
                "pt-br": "Respingo de onda",
                "zh-tw": "波浪飛濺",
                ja: "スプラッシュ",
                ko: "스플래시"
            },
            damage: 40,
            cost: ["Water", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
