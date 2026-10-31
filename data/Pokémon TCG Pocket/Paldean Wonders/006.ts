import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/006",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/006",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/006",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/006",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/006",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/006",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/006",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2a/006",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2a/006"
    },
    name: {
        en: "Nymble",
        fr: "Lilliterelle",
        es: "Nymble",
        it: "Nymble",
        de: "Micrick",
        "pt-br": "Nymble",
        "zh-tw": "豆蟋蟀",
        ja: "マメバッタ",
        ko: "콩알뚜기",
        pt: "Nymble",
        'es-mx': "Nymble"
    },
    illustrator: "Kouki Saitou",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 40,
    types: ["Grass"],
    dexId: [919],
    description: {
        en: "It's highly skilled at a fighting style in which it uses its jumping capabilities to dodge incoming attacks while also dealing damage to opponents.",
        "fr": "Il est très doué dans un style de combat dans lequel il utilise ses capacités de saut pour esquiver les attaques entrantes tout en infligeant des dégâts aux adversaires.",
        "es": "Es muy hábil en un estilo de lucha en el que utiliza sus capacidades de salto para esquivar los ataques entrantes y al mismo tiempo infligir daño a los oponentes.",
        "it": "È molto abile in uno stile di combattimento in cui usa le sue capacità di salto per schivare gli attacchi in arrivo e allo stesso tempo infliggere danni agli avversari.",
        "de": "Es ist äußerst geschickt in einem Kampfstil, bei dem es seine Sprungfähigkeiten nutzt, um eingehenden Angriffen auszuweichen und gleichzeitig Gegnern Schaden zuzufügen.",
        "pt-br": "É altamente habilidoso em um estilo de luta no qual usa suas capacidades de salto para evitar ataques e, ao mesmo tempo, causar danos aos oponentes.",
        "zh-tw": "它擅長利用跳躍能力來躲避攻擊，同時對對手造成傷害。",
        ja: "ジャンプ力を 活かして 相手の 攻撃を かわしながら ダメージを 与える 戦い方が 得意。",
        ko: "점프력을 이용하여\n상대의 공격을 피하며\n데미지를 주는 전법이 특기다."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "U-turn",
                fr: "Demi-Tour",
                es: "Ida y Vuelta",
                it: "Retromarcia",
                de: "Kehrtwende",
                "pt-br": "Retorno",
                "zh-tw": "調頭",
                ja: "とんぼがえり",
                ko: "유턴",
                pt: "Fazer Retorno",
                'es-mx': "Ida y Vuelta"
            },
            damage: "10",
            cost: ["Colorless"],
            effect: {
                en: "Switch this Pokémon with 1 of your Benched Pokémon.",
                fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
                "es": "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
                "it": "Scambia questo Pokémon con 1 dei tuoi Pokémon in panchina.",
                "de": "Tausche dieses Pokémon gegen eines deiner Bank-Pokémon aus.",
                "pt-br": "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
                "zh-tw": "將此寶可夢與你的 1 個備戰寶可夢交換。",
                ja: "このポケモンをベンチポケモンと入れ替える。",
                ko: "이 포켓몬을 벤치 포켓몬과 교체한다."
            },
        },
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
