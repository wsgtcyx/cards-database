import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/005",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/005",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/005",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/005",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/005"
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
                en: "Variety Powder",
                fr: "Poudres Variées",
                es: "Polvo Variado",
                "pt-br": "Pó Variado",
                "zh-tw": "多變粉"
            },
            effect: {
                en: "Once during your turn, you may use this Ability. 1 Special Condition from among Burned, Confused, and Poisoned is chosen at random, and your opponent's Active Pokémon is now affected by that Special Condition. Any Special Conditions already affecting that Pokémon will not be chosen.",
                fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Le Pokémon Actif de votre adversaire est maintenant affecté par un État Spécial choisi au hasard parmi Brûlé, Confus et Empoisonné. Tout État Spécial qui affecte déjà ce Pokémon ne sera pas choisi.",
                es: "Una vez durante tu turno, puedes usar esta habilidad. Se elige 1 Condición Especial aleatoria de entre Quemado, Confundido y Envenenado. El Pokémon Activo de tu rival pasa a estar afectado por esa Condición Especial. No se elegirá ninguna Condición Especial que ya esté afectando a ese Pokémon.",
                "pt-br": "Uma vez durante o seu turno, você poderá usar esta Habilidade. 1 Condição Especial dentre Queimado, Confuso e Envenenado será escolhida aleatoriamente, e o Pokémon Ativo do seu oponente agora estará afetado por aquela Condição Especial. Nenhuma Condição Especial que já estiver afetando aquele Pokémon será escolhida.",
                "zh-tw": "在自己的回合時,可使用1次。從中毒、灼傷、混亂中會隨機被選出1種,讓對手的戰鬥寶可夢陷入該特殊狀態。不會選出已經受到的特殊狀態。"
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
