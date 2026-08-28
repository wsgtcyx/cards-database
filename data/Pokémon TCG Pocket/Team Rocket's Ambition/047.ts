import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/047",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/047",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/047",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/047",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/047",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/047",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/047"
    },
    name: {
        en: "Copperajah",
        fr: "Pachyradjah",
        es: "Copperajah",
        it: "Copperajah",
        de: "Patinaraja",
        "pt-br": "Copperajah",
        "zh-tw": "大王銅象",
        ko: "대왕끼리동",
        ja: "ダイオウドウ"
    },
    illustrator: "Kouki Saitou",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 160,
    types: ["Metal"],
    dexId: [879],
    evolveFrom: {
        en: "Cufant",
        fr: "Charibari",
        es: "Cufant",
        it: "Cufant",
        de: "Kupfanti",
        "pt-br": "Cufant",
        "zh-tw": "銅象",
        ko: "끼리동",
        ja: "ゾウドウ"
    },
    stage: "Stage1",
    description: {
        en: "Copperajah are prideful, cantankerous Pokémon. Specimens with vibrant green skin command the respect of others of their kind.",
        fr: "Ce Pokémon très fier a plutôt mauvais caractère. Le vert éclatant de sa peau lui vaut le respect de ses congénères.",
        es: "Es orgulloso y dificil de tratar. Aquellos con un tono de piel verde más vivo se ganan el respeto de sus congéneres.",
        it: "Ha un'indole orgogliosa e stizzosa. I Copperajah con la pelle di colore verde acceso sono riveriti dai propri simili.",
        de: "Es ist sehr stolz und mürrisch. Exemplare mit leuchtend grüner Haut werden von ihren Artgenossen besonders stark respektiert.",
        "pt-br": "Copperajah são Pokémon orgulhosos e rabugentos. Os espécimes de pele verde vibrante impõem o respeito aos outros Copperajah.",
        "zh-tw": "自尊心強，脾氣刁鑽。皮膚的綠色越是鮮豔，就越受到同伴的尊敬。"
    },
    attacks: [
        {
            cost: ["Metal", "Metal", "Colorless"],
            name: {
                en: "Heavy Impact",
                fr: "Gros Impact",
                es: "Impacto Pesado",
                it: "Impatto Pesante",
                de: "Schwerer Einschlag",
                "pt-br": "Impacto Pesado",
                "zh-tw": "重磅衝擊"
            },
            damage: 80
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 4
};

export default card;
