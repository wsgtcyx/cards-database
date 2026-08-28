import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/009",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/009",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/009",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/009",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/009",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/009",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/009"
    },
    name: {
        en: "Team Rocket's Houndoom",
        fr: "Démolosse de la Team Rocket",
        es: "Houndoom del Team Rocket",
        it: "Houndoom del Team Rocket",
        de: "Team Rockets Hundemon",
        "pt-br": "Houndoom da Equipe Rocket",
        "zh-tw": "火箭隊的黑魯加",
        ko: "로켓단의 헬가",
        ja: "ロケット団のヘルガー"
    },
    illustrator: "toriyufu",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Fire"],
    evolveFrom: {
        en: "Team Rocket's Houndour",
        fr: "Malosse de la Team Rocket",
        es: "Houndour del Team Rocket",
        it: "Houndour del Team Rocket",
        de: "Team Rockets Hunduster",
        "pt-br": "Houndour da Equipe Rocket",
        "zh-tw": "火箭隊的戴魯比",
        ko: "로켓단의 델빌",
        ja: "ロケット団のデルビル"
    },
    stage: "Stage1",
    description: {
        en: "Upon hearing its eerie howls, other Pokémon get the shivers and head straight back to their nests.",
        fr: "Lorsqu'ils entendent ses hurlements sinistres, les autres Pokémon prennent peur et fuient vers leur nid.",
        es: "Al oír sus siniestros aullidos, los otros Pokémon se estremecen y huyen a sus nidos.",
        it: "I suoi terrificanti latrati fanno tremare gli altri Pokémon, che si precipitano così nelle proprie tane.",
        de: "Wenn andere Pokémon sein gruseliges Geheul hören, erschaudern sie und eilen Hals über Kopf zurück in ihren Unterschlupf.",
        "pt-br": "Quando ouvem seus uivos misteriosos, outros Pokémon ficam assustados e voltam imediatamente para seus ninhos.",
        "zh-tw": "聽見牠恐怖長嚎的寶可夢會渾身發抖，一溜煙地回到自己的巢裡。"
    },
    attacks: [
        {
            cost: ["Fire"],
            name: {
                en: "Toxfire Fang",
                fr: "Croc Toxifeu",
                es: "Colmillo Pirotóxico",
                it: "Zanne Pirotossiche",
                de: "Giftfeuerfänge",
                "pt-br": "Presa de Fogo Tóxico",
                "zh-tw": "毒熱牙"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned and Burned.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné et Brûlé.",
                es: "El Pokémon Activo de tu rival pasa a estar Envenenado y Quemado.",
                it: "Il Pokémon attivo del tuo avversario viene avvelenato e bruciato.",
                de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet und ist verbrannt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Envenenado e Queimado.",
                "zh-tw": "將對手的戰鬥寶可夢中毒與灼傷。"
            },
            damage: 20
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
