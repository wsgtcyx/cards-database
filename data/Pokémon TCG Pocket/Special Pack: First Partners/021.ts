import { Card } from "../../../interfaces";
import Set from "../Special Pack: First Partners";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/SP1/021",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/SP1/021",
        es: "https://game.pokemontcgpocket.app/es/tcgp/SP1/021",
        it: "https://game.pokemontcgpocket.app/it/tcgp/SP1/021",
        de: "https://game.pokemontcgpocket.app/de/tcgp/SP1/021",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/SP1/021",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/SP1/021",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/SP1/021",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/SP1/021"
    },
    name: {
        en: "Popplio",
        fr: "Otaquin",
        es: "Popplio",
        "pt-br": "Popplio",
        "zh-tw": "球球海獅",
        ja: "アシマリ",
        ko: "누리공",
        it: "Popplio",
        de: "Robball"
    },
    illustrator: "Saboteri",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: [
        "Water"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Disarming Voice",
                fr: "Voix Enjôleuse",
                es: "Voz Cautivadora",
                it: "Incantavoce",
                de: "Säuselstimme",
                "pt-br": "Voz Desarmante",
                "zh-tw": "魅惑之聲",
                ja: "チャームボイス",
                ko: "차밍보이스"
            },
            cost: [
                "Colorless",
                "Water"
            ],
            damage: 30,
            effect: {
                en: "Your opponent's Active Pokémon is now Confused.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
                es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
                it: "Il Pokémon attivo del tuo avversario viene confuso.",
                de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Confuso.",
                "zh-tw": "將對手的戰鬥寶可夢混亂。",
                ja: "相手のバトルポケモンをこんらんにする。",
                ko: "상대의 배틀 포켓몬을 혼란으로 만든다."
            }
        }
    ],
    abilities: [],
    description: {
        en: "This Pokémon snorts body fluids from its nose, blowing balloons to smash into its foes. It’s famous for being a hard worker.",
        fr: "Connu pour son tempérament de battant, il rassemble l’eau de son corps au bout de son museau en un ballon qu’il projette sur l’ennemi.",
        es: "Es conocido por su diligencia y predisposición. Segrega agua por la nariz para formar globos con los que golpea a sus rivales.",
        it: "È conosciuto per la sua forza di volontà. Lancia sul nemico dei palloncini pieni d’acqua che gonfia con il naso.",
        de: "Dieses Pokémon ist für seine Willensstärke bekannt. Bläst es Körperflüssigkeit durch die Nase, entsteht eine Blase, die als Waffe fungiert.",
        "pt-br": "Este Pokémon expele fluidos corporais de seu nariz, enchendo balões para tacar em seus inimigos. É conhecido por ser trabalhador.",
        "zh-tw": "因勤奮的性格而聞名。 會用鼻子將體液吹成氣球， 然後扔向敵人。",
        ja: "頑張り屋な 性質で 有名。 体液を 鼻で 膨らませた バルーンを 敵に ぶつける。",
        ko: "노력하는 성질로 유명하다.\n체액을 코로 부풀린\n풍선을 적에게 부딪힌다."
    }
};

export default card;
