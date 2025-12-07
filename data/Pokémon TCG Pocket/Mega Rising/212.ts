import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Dubwool",
        "fr": "Dubwool",
        "es": "Dubwool",
        "it": "Dubwool",
        "de": "Dubwool",
        "pt-br": "Dublã",
        "zh-tw": "毛毛角羊",
    },
    illustrator: "You Iribi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Colorless"],
    evolveFrom: {
        en: "Wooloo",
        "fr": "Wooloo",
        "es": "lanaoo",
        "it": "Wooloo",
        "de": "Wooloo",
        "pt-br": "Lãoo",
        "zh-tw": "烏魯"
    },
    description: {
        en: "Its majestic horns are meant only to impress the\nopposite gender. They never see use in battle.",
        "fr": "Ses cornes majestueuses ne sont destinées qu'à impressionner le\nsexe opposé. Ils n’en voient jamais l’utilité au combat.",
        "es": "Sus majestuosos cuernos están destinados únicamente a impresionar al\ngénero opuesto. Nunca ven utilidad en la batalla.",
        "it": "Le sue maestose corna hanno il solo scopo di impressionare\ngenere opposto. Non vedono mai l'uso in battaglia.",
        "de": "Seine majestätischen Hörner sollen nur beeindrucken\nanderes Geschlecht. Im Kampf kommen sie nie zum Einsatz.",
        "pt-br": "Seus majestosos chifres servem apenas para impressionar o\nsexo oposto. Eles nunca veem uso em batalha.",
        "zh-tw": "它雄偉的角只是為了給人們留下深刻的印象\n異性。他們從來沒有在戰鬥中看到過用處。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Boundless Power",
                "fr": "Une puissance illimitée",
                "es": "Poder ilimitado",
                "it": "Potere illimitato",
                "de": "Grenzenlose Macht",
                "pt-br": "Poder ilimitado",
                "zh-tw": "力量無限"
            },
            damage: 100,
            cost: ["Colorless", "Colorless", "Colorless"],
            effect: {
                en: "During your next turn, this Pokémon can't attack.",
                "fr": "Lors de votre prochain tour, ce Pokémon ne peut pas attaquer.",
                "es": "Durante tu próximo turno, este Pokémon no puede atacar.",
                "it": "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
                "de": "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
                "pt-br": "Durante o seu próximo turno, este Pokémon não poderá atacar.",
                "zh-tw": "在你的下一個回合中，這只神奇寶貝無法攻擊。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
