import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/036",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/036",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/036",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/036",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/036",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/036",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/036"
    },
    name: {
        en: "Cyndaquil",
        fr: "Héricendre",
        es: "Cyndaquil",
        it: "Cyndaquil",
        de: "Feurigel",
        "pt-br": "Cyndaquil",
        "zh-tw": "火球鼠",
        ja: "ヒノアラシ",
        ko: "브케인"
    },
    illustrator: "Teeziro",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: [
        "Fire"
    ],
    dexId: [
        155
    ],
    stage: "Basic",
    description: {
        en: "The fire that spouts from its back burns hottest when it is angry. The flaring flames intimidate foes.",
        fr: "Les flammes qui émanent de son dos atteignent leur pic d'intensité lorsqu'il est en colère. Elles lui permettent ainsi d'intimider ses adversaires.",
        es: "Cuando se enfada, las llamas que emite por el lomo arden con más vigor que nunca, lo cual intimida a sus rivales.",
        it: "Quando è adirato, le fiamme sul dorso raggiungono la massima intensità e intimoriscono i nemici.",
        de: "Die Flammen auf seinem Rücken lodern am stärksten, wenn es zornig ist. Dadurch schüchtert es seine Feinde ein.",
        "pt-br": "O fogo que sai de suas costas queima mais forte quando este Pokémon está com raiva. As chamas intimidam os inimigos.",
        "zh-tw": "從背上噴出的火焰會在生氣時燃燒得最強烈，令敵手大吃一驚。",
        ja: "The fire that spouts from its back burns hottest when it is angry. The flaring flames intimidate foes.",
        ko: "The fire that spouts from its back burns hottest when it is angry. The flaring flames intimidate foes."
    },
    attacks: [
        {
            cost: [
                "Fire"
            ],
            name: {
                en: "Singe",
                fr: "Roussi",
                es: "Quemadura",
                it: "Scottata",
                de: "Versengung",
                "pt-br": "Chamuscada",
                "zh-tw": "灼熱",
                ja: "Singe",
                ko: "Singe"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Burned.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
                es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
                it: "Il Pokémon attivo del tuo avversario viene bruciato.",
                de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Queimado.",
                "zh-tw": "將對手的戰鬥寶可夢灼傷。",
                ja: "Your opponent's Active Pokémon is now Burned.",
                ko: "Your opponent's Active Pokémon is now Burned."
            }
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
