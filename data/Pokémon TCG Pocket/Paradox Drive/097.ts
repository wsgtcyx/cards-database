import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/097",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/097",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/097",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/097",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/097",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/097",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3a/097",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B3a/097",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B3a/097"
    },
    name: {
        en: "Rabsca",
        fr: "Bérasca",
        es: "Rabsca",
        it: "Rabsca",
        de: "Skarabaks",
        "pt-br": "Rabsca",
        "zh-tw": "蟲甲聖",
        ko: "베라카스",
        ja: "ベラカス"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
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
        ko: "구르데",
        ja: "シガロコ"
    },
    stage: "Stage1",
    description: {
        en: "An infant sleeps inside the ball. Rabsca rolls the ball soothingly with its legs to ensure the infant sleeps comfortably.",
        fr: "Un bébé dort à l'intérieur du ballon. Bérasca fait rouler le ballon de manière apaisante avec ses jambes pour garantir que le bébé dort confortablement.",
        es: "Un bebé duerme dentro de la pelota. Rabsca hace rodar la pelota suavemente con sus piernas para garantizar que el bebé duerma cómodamente.",
        it: "Un bambino dorme dentro la palla. Rabsca fa rotolare dolcemente la palla con le gambe per garantire che il bambino dorma comodamente.",
        de: "Ein Kleinkind schläft im Ball. Skarabaks rollt den Ball beruhigend mit seinen Beinen, um sicherzustellen, dass das Kind bequem schläft.",
        "pt-br": "Uma criança dorme dentro da bola. Rabsca rola a bola suavemente com as pernas para garantir que o bebê durma confortavelmente.",
        "zh-tw": "嬰兒睡在球內。 蟲甲聖 用腿舒緩地滾動球，確保嬰兒舒適睡眠。",
        ja: "玉の中に 赤ん坊が 眠る。 心地よく 眠れるように 脚で 玉を まわして あやしているのだ。",
        ko: "구슬 안에는 아이가 잠들어 있다.\n편하게 잠들 수 있게\n다리로 구슬을 굴려서 달랜다."
    },
    attacks: [
        {
            cost: ["Psychic", "Psychic"],
            name: {
                en: "Psybeam",
                fr: "Rafale Psy",
                es: "Psicorrayo",
                it: "Psicoraggio",
                de: "Psystrahl",
                "pt-br": "Feixe Psíquico",
                "zh-tw": "幻象光線",
                ja: "サイケこうせん",
                ko: "환상빔"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Confused.",
                fr: "Le Pokémon Actif de votre adversaire est désormais Confus.",
                es: "El Pokémon Activo de tu rival ahora está Confundido.",
                it: "Il Pokémon attivo del tuo avversario è ora confuso.",
                de: "Das aktive Pokémon deines Gegners ist jetzt verwirrt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Confuso.",
                "zh-tw": "你對手的戰鬥寶可夢現在處於混亂狀態。",
                ja: "相手のバトルポケモンをこんらんにする。",
                ko: "상대의 배틀 포켓몬을 혼란으로 만든다."
            },
            damage: 80
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
