import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/081",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/081",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/081",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/081",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/081",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/081",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/081",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/081",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/081"
    },
    name: {
        en: "Gastly",
        fr: "Fantominus",
        es: "Gastly",
        "pt-br": "Gastly",
        "zh-tw": "鬼斯",
        ja: "ゴース",
        ko: "고오스",
        it: "Gastly",
        de: "Nebulak"
    },
    illustrator: "Shibuzoh.",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 60,
    types: [
        "Darkness"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Severe Gas",
                fr: "Gaz Intense",
                es: "Gas Grave",
                it: "Gas Infestante",
                de: "Übler Gestank",
                "pt-br": "Gás Severo",
                "zh-tw": "惡毒氣體",
                ja: "ひどいガス",
                ko: "독한가스"
            },
            cost: [
                "Darkness"
            ],
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
                es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
                it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
                de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Envenenado.",
                "zh-tw": "將對手的戰鬥寶可夢中毒。",
                ja: "相手のバトルポケモンをどくにする。",
                ko: "상대의 배틀 포켓몬을 독으로 만든다."
            }
        }
    ],
    abilities: [],
    description: {
        en: "It wraps its opponent in its gas-like body, slowly weakening its prey by poisoning it through the skin.",
        fr: "Il enveloppe ses proies dans le nuage de gaz que forme son corps et les empoisonne à travers leur peau afin de les affaiblir petit à petit.",
        es: "Su estrategia consiste en envolver al rival con su cuerpo gaseoso y envenenarlo a través de la piel.",
        it: "Avvolge le prede nel corpo gassoso e le indebolisce lentamente facendo penetrare il veleno nella loro pelle.",
        de: "Es hüllt seine Beute in seinen Gaskörper ein und schwächt sie, indem es sie nach und nach über die Haut vergiftet.",
        "pt-br": "Envolve o oponente em seu corpo gasoso, enfraquecendo sua presa lentamente e a envenenando pela pele.",
        "zh-tw": "會用氣體狀的身體包住獵物，再從身體表面注入毒素，使其逐漸衰弱。",
        ja: "ガス状の 体で まとわりつき 獲物の 皮膚から 少しずつ 毒を 送り込んで 弱らせる。",
        ko: "가스로 된 몸으로 휘감은 다음\n먹이의 피부를 통해 조금씩\n독을 흘려보내어 약하게 만든다."
    }
};

export default card;
