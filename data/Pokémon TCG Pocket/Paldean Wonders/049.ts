import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/049",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/049",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/049",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/049",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/049",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/049",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/049"
    },
    name: {
        en: "Rabsca",
        fr: "Bérasca",
        es: "Rabsca",
        it: "Rabsca",
        de: "Skarabaks",
        "pt-br": "Rabsca",
        "zh-tw": "蟲甲聖",
        pt: "Rabsca"
    },
    illustrator: "Oswaldo KATO",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Psychic"],
    dexId: [954],
    evolveFrom: {
        en: "Rellor",
        fr: "Léboulérou",
        es: "Rellor",
        it: "Rellor",
        de: "Relluk",
        "pt-br": "Rellor",
        "zh-tw": "蟲滾泥",
        pt: "Rellor",
        'es-mx': "Rellor"
    },
    description: {
        en: "An infant sleeps inside the ball. Rabsca rolls the ball soothingly with its legs to ensure the infant sleeps comfortably.",
        "fr": "Un bébé dort à l'intérieur du ballon. Bérasca fait rouler le ballon de manière apaisante avec ses jambes pour garantir que le bébé dort confortablement.",
        "es": "Un bebé duerme dentro de la pelota. Rabsca hace rodar la pelota suavemente con sus piernas para garantizar que el bebé duerma cómodamente.",
        "it": "Un bambino dorme dentro la palla. Rabsca fa rotolare dolcemente la palla con le gambe per garantire che il bambino dorma comodamente.",
        "de": "Ein Kleinkind schläft im Ball. Skarabaks rollt den Ball beruhigend mit seinen Beinen, um sicherzustellen, dass das Kind bequem schläft.",
        "pt-br": "Uma criança dorme dentro da bola. Rabsca rola a bola suavemente com as pernas para garantir que o bebê durma confortavelmente.",
        "zh-tw": "嬰兒睡在球內。 蟲甲聖 用腿舒緩地滾動球，確保嬰兒舒適睡眠。"
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Psybeam",
                fr: "Rafale Psy",
                es: "Psicorrayo",
                it: "Psicoraggio",
                de: "Psystrahl",
                "pt-br": "Raio Psíquico",
                "zh-tw": "心電束",
                pt: "Feixe Psíquico"
            },
            damage: "80",
            cost: ["Psychic", "Psychic"],
            effect: {
                en: "Your opponent's Active Pokémon is now Confused.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
                es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
                it: "Il Pokémon attivo del tuo avversario viene confuso.",
                de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Confuso.",
                "zh-tw": "你對手的戰鬥寶可夢現在處於混亂狀態。",
                pt: "O Pokémon Ativo do seu oponente agora está Confuso."
            },
        },
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
