import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/072",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/072",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/072",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/072",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/072",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/072",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/072"
    },
    name: {
        en: "Frogadier",
        fr: "Croâporal",
        es: "Frogadier",
        it: "Frogadier",
        de: "Amphizel",
        "pt-br": "Frogadier",
        "zh-tw": "呱頭蛙",
        ja: "ゲコガシラ",
        ko: "개굴반장"
    },
    illustrator: "5ban Graphics",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: [
        "Water"
    ],
    evolveFrom: {
        en: "Froakie",
        fr: "Grenousse",
        es: "Froakie",
        it: "Froakie",
        de: "Froxy",
        "pt-br": "Froakie",
        "zh-tw": "呱呱泡蛙",
        ja: "Froakie",
        ko: "Froakie"
    },
    description: {
        en: "Its swiftness is unparalleled.\nIt can scale a tower of more\nthan 2,000 feet in a minute's time.",
        fr: "Son agilité est incomparable. Il peut gravir une tour de 600 m de haut en moins d'une minute.",
        es: "Su agilidad no tiene parangón. De hecho, es capaz de escalar una torre de más de 600 metros en tan solo un minuto.",
        it: "Grazie alla sua straordinaria agilità, è in grado di scalare una torre alta più di 600 m in meno di un minuto.",
        de: "Seine Flinkheit sucht ihresgleichen. Es kann einen 600 m hohen Turm in weniger als einer Minute erklimmen.",
        "pt-br": "Sua velocidade é incomparável. Pode escalar uma torre de mais de 600 metros em um minuto.",
        "zh-tw": "靈巧的動作不會輸給任何人。只需1分鐘就能登上超過600公尺高的塔頂。",
        ja: "Its swiftness is unparalleled.\nIt can scale a tower of more\nthan 2,000 feet in a minute's time.",
        ko: "Its swiftness is unparalleled.\nIt can scale a tower of more\nthan 2,000 feet in a minute's time."
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Bounce",
                fr: "Rebond",
                es: "Bote",
                it: "Rimbalzo",
                de: "Sprungfeder",
                "pt-br": "Ricochete",
                "zh-tw": "彈跳",
                ja: "Bounce",
                ko: "Bounce"
            },
            damage: 40,
            cost: [
                "Water",
                "Water"
            ],
            effect: {
                en: "Switch this Pokémon with 1 of your Benched Pokémon.",
                fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
                es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
                it: "Scambia questo Pokémon con uno della tua panchina.",
                de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
                "pt-br": "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
                "zh-tw": "將這隻寶可夢與備戰寶可夢互換。",
                ja: "Switch this Pokémon with 1 of your Benched Pokémon.",
                ko: "Switch this Pokémon with 1 of your Benched Pokémon."
            }
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
