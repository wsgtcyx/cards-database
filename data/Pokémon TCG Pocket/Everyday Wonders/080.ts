import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/080",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/080",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/080",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/080",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/080",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/080"
    },
    name: {
        en: "Mega Diancie ex",
        fr: "Méga-Diancie-ex",
        es: "Mega-Diancie ex",
        it: "Mega Diancie-ex",
        de: "Mega-Diancie-ex",
        "pt-br": "Mega Diancie ex",
        "zh-tw": "超級蒂安希ex",
        ko: "메가디안시 ex",
        ja: "メガディアンシーex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 170,
    types: ["Psychic"],
    dexId: [719],
    stage: "Basic",
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Brilliant Storm",
                fr: "Tempête brillante",
                es: "Tormenta brillante",
                it: "Tempesta brillante",
                de: "Brillanter Sturm",
                "pt-br": "Tempestade Brilhante",
                "zh-tw": "晶燦風暴"
            },
            effect: {
                en: "This attack does 20 more damage for each {P} Energy attached to all of your Pokémon.",
                fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque {P} Énergie attachée à tous vos Pokémon.",
                es: "Este ataque hace 20 daños más por cada {P} Energía unida a todos tus Pokémon.",
                it: "Questo attacco infligge 20 danni in più per ogni Energia {P} assegnata a tutti i tuoi Pokémon.",
                de: "Dieser Angriff fügt 20 weitere Schadenspunkte für jede {P}-Energie zu, die an alle deine Pokémon angelegt ist.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada energia {P} ligada a todos os seus Pokémon.",
                "zh-tw": "你所有的寶可夢每有一個 {P} 能量，此攻擊就會造成 20 點額外傷害。"
            },
            damage: "40+"
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
