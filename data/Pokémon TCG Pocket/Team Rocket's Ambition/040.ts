import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/040",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/040",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/040",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/040",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/040",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/040",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/040"
    },
    name: {
        en: "Team Rocket's Grimer",
        fr: "Tadmorv de la Team Rocket",
        es: "Grimer del Team Rocket",
        it: "Grimer del Team Rocket",
        de: "Team Rockets Sleima",
        "pt-br": "Grimer da Equipe Rocket",
        "zh-tw": "火箭隊的阿羅拉 臭泥",
        ko: "로켓단의 알로라 질퍽이",
        ja: "ロケット団のベトベター"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    stage: "Basic",
    description: {
        en: "When two of these Pokémon's bodies are combined together, new poisons are created.",
        fr: "Quand les corps de deux Tadmorv se combinent, de nouveaux poisons sont créés.",
        es: "Cuando se une a otro compañero de su especie, se generan nuevos tipos de sustancia venenosa.",
        it: "Quando due esemplan combinano i propri corpi, creano nuovi tipi di veleno.",
        de: "Wenn die Körper von zwei Sleima mitenander kombiniert werden, so entstehen vollig neue Arten von Gift.",
        "pt-br": "Quando dois corpos deste Pakémon se unem. novos vemenos são criados.",
        "zh-tw": "當臭泥彼此黏在一起，身體就會互相融合，進而產生新種毒素。"
    },
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Sludge",
                fr: "Détritus",
                es: "Residuos",
                it: "Fango",
                de: "Schlammbad",
                "pt-br": "Ataque de Lama",
                "zh-tw": "污泥攻擊"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
                es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
                it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
                de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Envenenado.",
                "zh-tw": "將對手的戰鬥寶可夢中毒。"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
