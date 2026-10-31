import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3a/032",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3a/032",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3a/032",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3a/032",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3a/032",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3a/032",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3a/032",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3a/032",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3a/032"
    },
    name: {
        en: "Rockruff",
        "fr": "Rocabot",
        "es": "Rockruff",
        "it": "Rockruff",
        "de": "Wuffels",
        "pt-br": "Rockruff",
        "zh-tw": "岩狗狗",
        ja: "イワンコ",
        ko: "암멍이",
    },
    illustrator: "match",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    description: {
        en: "This Pokémon is very friendly when it's young.\nIts disposition becomes vicious once it matures,\nbut it never forgets the kindness of its master.",
        "fr": "Ce Pokémon est très sympathique lorsqu'il est jeune.\nSon caractère devient vicieux une fois qu'il mûrit,\nmais il n'oublie jamais la gentillesse de son maître.",
        "es": "Este Pokémon es muy amigable cuando es joven.\nSu disposición se vuelve viciosa una vez que madura,\npero nunca olvida la bondad de su amo.",
        "it": "Questo Pokémon è molto amichevole quando è giovane.\nLa sua indole diventa viziosa una volta maturata,\nma non dimentica mai la gentilezza del suo padrone.",
        "de": "Dieses Pokémon ist sehr freundlich, wenn es jung ist.\nSeine Veranlagung wird bösartig, sobald es erwachsen wird,\naber es vergisst nie die Freundlichkeit seines Meisters.",
        "pt-br": "Este Pokémon é muito amigável quando jovem.\nSua disposição se torna viciosa quando amadurece,\nmas nunca esquece a bondade do seu mestre.",
        "zh-tw": "這只神奇寶貝年輕時非常友好。\n成熟後性情就變得惡毒，\n但它永遠不會忘記主人的恩德。",
        ja: "小さいころは よく 懐く。 育つと 気性が 荒くなるが 主への 恩は 忘れない。",
        ko: "어렸을 때는 매우 잘 따른다.\n자라면서 성질이 사나워지지만\n주인에게 입은 은혜는 잊지 않는다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Rock Throw",
                "fr": "Lancer de pierre",
                "es": "Lanzamiento de piedras",
                "it": "Lancio di roccia",
                "de": "Steinwurf",
                "pt-br": "Lançamento de pedra",
                "zh-tw": "扔石頭",
                ja: "いわおとし",
                ko: "돌떨구기"
            },
            damage: 40,
            cost: ["Fighting", "Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
