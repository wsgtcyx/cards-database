import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/123",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/123",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/123",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/123",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/123",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/123",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/123"
    },
    name: {
        en: "Hitmonchan ex",
        fr: "Tygnon-ex",
        es: "Hitmonchan ex",
        it: "Hitmonchan-ex",
        de: "Nockchan-ex",
        "pt-br": "Hitmonchan ex",
        "zh-tw": "快拳郎ex",
        ja: "エビワラーex",
        ko: "홍수몬 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 130,
    types: [
        "Fighting"
    ],
    stage: "Basic",
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Quick Straight",
                fr: "Droite Directe",
                es: "Directo Raudo",
                it: "Diretto Repentino",
                de: "Schneller Boxschlag",
                "pt-br": "Golpe Lépido",
                "zh-tw": "快速直拳",
                ja: "Quick Straight",
                ko: "Quick Straight"
            },
            damage: 50,
            cost: [
                "Fighting"
            ],
            effect: {
                en: "This attack's damage isn't affected by Weakness.",
                fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse.",
                es: "El daño de este ataque no se ve afectado por Debilidad.",
                it: "I danni di questo attacco non sono influenzati dalla debolezza.",
                de: "Der Schaden dieser Attacke wird durch Schwäche nicht verändert.",
                "pt-br": "O dano deste ataque não é afetado por Fraqueza.",
                "zh-tw": "這個招式的傷害不計算弱點。",
                ja: "This attack's damage isn't affected by Weakness.",
                ko: "This attack's damage isn't affected by Weakness."
            }
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
