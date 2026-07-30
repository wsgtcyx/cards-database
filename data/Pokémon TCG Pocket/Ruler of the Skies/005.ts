import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/005"
    },
    name: {
        en: "Dustox",
        fr: "Papinox",
        es: "Dustox",
        it: "Dustox",
        de: "Pudox",
        "pt-br": "Dustox",
        "zh-tw": "毒粉蛾",
        ko: "독케일",
        ja: "ドクケイル"
    },
    illustrator: "Midori Harada",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Grass"],
    dexId: [269],
    evolveFrom: {
        en: "Cascoon",
        fr: "Blindalys",
        es: "Cascoon",
        it: "Cascoon",
        de: "Panekon",
        "pt-br": "Cascoon",
        "zh-tw": "盾甲繭",
        ko: "카스쿤",
        ja: "マユルド"
    },
    stage: "Stage2",
    description: {
        en: "It violently flutters its wings to scatter toxic dust when attacked. It becomes active after sunset.",
        fr: "Quand on l’attaque, il bat des ailes pour répandre sa\npoudre toxique. Il sort après le coucher du soleil.",
        es: "Cuando se le ataca, bate las alas con fuerza para\nesparcir polvo tóxico. Es un Pokémon nocturno.",
        it: "Se attaccato, sbatte con forza le ali e sparge una\npolvere tossica. Lo si vede in giro dopo il tramonto.",
        de: "Wird es angegriffen, flattert es mit den Flügeln\nund verteilt giftigen Puder. Es ist nachtaktiv."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Variety Powder"
            },
            effect: {
                en: "Once during your turn, you may use this Ability. 1 Special Condition from among Burned, Confused, and Poisoned is chosen at random, and your opponent's Active Pokémon is now affected by that Special Condition. Any Special Conditions already affecting that Pokémon will not be chosen."
            }
        }
    ],
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Cutting Wind",
                fr: "Vent Glacial",
                es: "Viento Helado",
                it: "Vento Tagliente",
                de: "Schneidender Wind",
                "pt-br": "Vento Dilacerante",
                "zh-tw": "利刃之風"
            },
            damage: 60
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
