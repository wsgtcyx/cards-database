import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/148",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/148",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/148",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/148",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/148",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/148",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/148",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/148"
    },
    name: {
        en: "Gengar",
        fr: "Ectoplasma",
        es: "Gengar",
        "pt-br": "Gengar",
        "zh-tw": "耿鬼",
        ja: "ゲンガー",
        ko: "팬텀",
        it: "Gengar",
        de: "Gengar"
    },
    illustrator: "Fujimoto Gold",
    rarity: "One Star",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 130,
    types: [
        "Darkness"
    ],
    stage: "Stage2",
    retreat: 1,
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Haunter",
        fr: "Spectrum",
        es: "Haunter",
        it: "Haunter",
        de: "Alpollo",
        "pt-br": "Haunter",
        "zh-tw": "鬼斯通",
        ja: "ゴースト",
        ko: "Haunter"
    },
    attacks: [
        {
            name: {
                en: "Twilight Poison",
                fr: "Poison Nocturne",
                es: "Veneno Ocaso",
                it: "Veleno Crepuscolare",
                de: "Dämmergift",
                "pt-br": "Veneno do Crepúsculo",
                "zh-tw": "薄暮之毒",
                ja: "ゆうやみどく",
                ko: "Twilight Poison"
            },
            cost: [
                "Darkness"
            ],
            damage: 50,
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned and Asleep.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné et Endormi.",
                es: "El Pokémon Activo de tu rival pasa a estar Envenenado y Dormido.",
                it: "Il Pokémon attivo del tuo avversario viene avvelenato e addormentato.",
                de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet und schläft.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Envenenado e Adormecido.",
                "zh-tw": "將對手的戰鬥寶可夢中毒與睡眠。",
                ja: "相手のバトルポケモンをどくとねむりにする。",
                ko: "Your opponent's Active Pokémon is now Poisoned and Asleep."
            }
        }
    ],
    abilities: [],
    description: {
        en: "To steal the life of its target, it slips into the prey's shadow and silently waits for an opportunity.",
        fr: "Il se cache dans l’ombre de sa victime et attend patiemment le bon moment pour lui voler sa vie.",
        es: "Para quitarle la vida a su presa, se desliza en su sombra y espera su oportunidad en silencio.",
        it: "Per sottrarre energie alla vittima si nasconde nella sua ombra e attende in silenzio il momento opportuno.",
        de: "Um Beute zu erlegen, versteckt es sich in deren Schatten und wartet still auf eine günstige Gelegenheit.",
        "pt-br": "Este Pokémon aguarda pela oportunidade perfeita para se esconder na sombra de sua presa e roubar a vida dela.",
        "zh-tw": "會躲進獵物的影子裡，然後靜靜地等待奪取性命的絕佳時機。",
        ja: "命を 奪おうと 決めた 獲物の 影に 潜り込み じっと チャンスを 狙ってる。",
        ko: "To steal the life of its target, it slips into the prey's shadow and silently waits for an opportunity."
    }
};

export default card;
