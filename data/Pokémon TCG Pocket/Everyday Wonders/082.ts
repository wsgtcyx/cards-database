import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/082",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/082",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/082",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/082",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/082",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/082"
    },
    name: {
        en: "Hisuian Zoroark ex",
        fr: "Zoroark de Hisui-ex",
        es: "Zoroark de Hisui ex",
        it: "Zoroark di Hisui-ex",
        de: "Hisui-Zoroark ex",
        "pt-br": "Zoroark de Hisui ex",
        "zh-tw": "洗翠 索羅亞克ex",
        ko: "히스이 조로아크 ex",
        ja: "ヒスイ ゾロアークex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 150,
    types: ["Colorless"],
    dexId: [571],
    evolveFrom: {
        en: "Zorua",
        fr: "Zorua",
        es: "Zorua",
        it: "Zorua",
        de: "Zorua",
        "pt-br": "Zorua",
        "zh-tw": "洗翠 索羅亞",
        ko: "히스이 조로아",
        ja: "ヒスイ ゾロア"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Spiteful Illusion",
                fr: "Illusion malveillante",
                es: "Ilusión rencorosa",
                it: "Illusione dispettosa",
                de: "Boshafte Illusion",
                "pt-br": "Ilusão Maliciosa",
                "zh-tw": "怨恨幻影"
            },
            effect: {
                en: "This attack does 20 more damage for each Pokémon in your discard pile.",
                fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon dans votre pile de défausse.",
                es: "Este ataque hace 20 daños más por cada Pokémon en tu pila de descarte.",
                it: "Questo attacco infligge 20 danni in più per ogni Pokémon nella tua pila degli scarti.",
                de: "Dieser Angriff fügt jedem Pokémon in deinem Ablagestapel 20 weitere Schadenspunkte zu.",
                "pt-br": "Este ataque causa 20 danos a mais para cada Pokémon na sua pilha de descarte.",
                "zh-tw": "此攻擊對你棄牌堆中的每個寶可夢造成 20 點額外傷害。"
            },
            damage: "80+"
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
