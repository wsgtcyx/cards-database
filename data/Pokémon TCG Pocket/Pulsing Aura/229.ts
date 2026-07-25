import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/229",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/229",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/229",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/229",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/229",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/229"
    },
    name: {
        en: "Hitmonchan ex",
        fr: "Tygnon-ex",
        es: "Hitmonchan ex",
        it: "Hitmonchan-ex",
        de: "Nockchan-ex",
        "pt-br": "Hitmonchan ex",
        "zh-tw": "快拳郎ex",
        ko: "홍수몬 ex",
        ja: "エビワラーex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 130,
    types: ["Fighting"],
    dexId: [107],
    stage: "Basic",
    attacks: [
        {
            cost: ["Fighting"],
            name: {
                en: "Quick Straight",
                fr: "Droite Directe",
                es: "Directo Raudo",
                it: "Diretto Repentino",
                de: "Schneller Boxschlag",
                "pt-br": "Golpe Lépido",
                "zh-tw": "快速直拳"
            },
            effect: {
                en: "This attack's damage isn't affected by Weakness.",
                fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse.",
                es: "El daño de este ataque no se ve afectado por la debilidad.",
                it: "Il danno di questo attacco non è influenzato dalla debolezza.",
                de: "Der Schaden dieses Angriffs wird durch Schwäche nicht beeinflusst.",
                "pt-br": "O dano deste ataque não é afetado pela Fraqueza.",
                "zh-tw": "該攻擊的傷害不受虛弱影響。"
            },
            damage: 50
        }
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
