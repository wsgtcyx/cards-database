import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/090",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/090",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/090",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/090",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/090",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/090",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/090"
    },
    name: {
        en: "Stufful",
        fr: "Nounourson",
        es: "Stufful",
        it: "Stufful",
        de: "Velursi",
        "pt-br": "Stufful",
        "zh-tw": "童偶熊",
        ko: "포곰곰",
        ja: "ヌイコグマ"
    },
    illustrator: "Shigenori Negishi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    dexId: [759],
    stage: "Basic",
    description: {
        en: "The way it protects itself by flailing its arms may be an adorable sight, but stay well away. This is flailing that can snap thick tree trunks.",
        fr: "Sa façon de remuer les pattes pour se défendre\nsemble adorable, mais ce Pokémon est si puissant\nqu’il pourrait fendre un tronc de la sorte.",
        es: "Cuando patalea para tratar de defenderse\nresulta adorable, pero conviene no fiarse, ya\nque su fuerza sería capaz de derribar un árbol.",
        it: "Quando cerca di difendersi agitando le zampe\nanteriori fa tenerezza, ma in realtà possiede\nuna forza tale da spezzare grossi alberi.",
        de: "Strampelt es zum Schutz mit den Vorderbeinen,\nsieht das zwar niedlich aus, aber ein Treffer mit\nihnen ist stark genug, um große Bäume zu fällen.",
        "pt-br": "A maneira como ele se protege agitando os braços pode ser uma visão adorável, mas fique bem longe. Este é um movimento que pode quebrar troncos grossos de árvores.",
        "zh-tw": "為了保護自己的身體而\n胡亂揮舞前腳的樣子雖然可愛，\n威力卻大到能將大樹折斷。"
    },
    attacks: [
        {
            cost: ["Fighting", "Colorless"],
            name: {
                en: "Tackle",
                fr: "Charge",
                es: "Placaje",
                it: "Azione",
                de: "Tackle",
                "pt-br": "Investida",
                "zh-tw": "撞擊"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
