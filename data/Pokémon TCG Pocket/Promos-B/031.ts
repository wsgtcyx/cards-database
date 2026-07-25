import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/031",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/031",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/031",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/031",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/031",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/031"
    },
    name: {
        en: "Cinderace",
        fr: "Pyrobut",
        es: "Cinderace",
        it: "Cinderace",
        de: "Liberlo",
        "pt-br": "Cinderace",
        "zh-tw": "閃焰王牌",
        ko: "에이스번",
        ja: "エースバーン"
    },
    illustrator: "Shin Nagasawa",
    rarity: "None",
    category: "Pokemon",
    hp: 130,
    types: ["Fire"],
    dexId: [815],
    evolveFrom: {
        en: "Raboot",
        fr: "Lapyro",
        es: "Raboot",
        it: "Raboot",
        de: "Kickerlo",
        "pt-br": "Raboot",
        "zh-tw": "騰蹴小將",
        ko: "래비풋",
        ja: "ラビフット"
    },
    stage: "Stage2",
    description: {
        en: "Using a ball that it made out of flames, Cinderace blinds its opponents and keeps them at bay.",
        fr: "À l'aide d'une balle qu'il a fabriquée avec des flammes, Pyrobut aveugle ses adversaires et les tient à distance.",
        es: "Usando una bola que hizo con llamas, Cinderace ciega a sus oponentes y los mantiene a raya.",
        it: "Usando una palla creata con le fiamme, Cinderace acceca i suoi avversari e li tiene a bada.",
        de: "Mit einem aus Flammen geformten Ball blendet Liberlo seine Gegner und hält sie auf Distanz.",
        "pt-br": "Usando uma bola feita de chamas, Cinderace cega seus oponentes e os mantém afastados.",
        "zh-tw": "閃焰王牌 使用由​​火焰製成的球來蒙蔽對手並將其拒之門外。"
    },
    attacks: [
        {
            cost: ["Fire", "Fire"],
            name: {
                en: "Fireball Shot",
                fr: "Tir Boule de Feu",
                es: "Balonazo de Fuego",
                it: "Colpo Palladifuoco",
                de: "Feuerballschuss",
                "pt-br": "Bicada de Bola de Fogo",
                "zh-tw": "火球射擊"
            },
            effect: {
                en: "During your next turn, this Pokémon can't attack.",
                fr: "Lors de votre prochain tour, ce Pokémon ne peut pas attaquer.",
                es: "Durante tu próximo turno, este Pokémon no puede atacar.",
                it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
                de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
                "pt-br": "Durante o seu próximo turno, este Pokémon não poderá atacar.",
                "zh-tw": "在你的下一個回合中，這隻寶可夢無法攻擊。"
            },
            damage: 120
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 0,
    boosters: []
};

export default card;
