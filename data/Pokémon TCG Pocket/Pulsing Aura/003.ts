import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/003",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/003",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/003",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/003",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/003",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/003",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/003",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B3/003",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B3/003"
    },
    name: {
        en: "Heracross",
        fr: "Scarhino",
        es: "Heracross",
        it: "Heracross",
        de: "Skaraborn",
        "pt-br": "Heracross",
        "zh-tw": "赫拉克羅斯",
        ko: "헤라크로스",
        ja: "ヘラクロス"
    },
    illustrator: "Taira Akitsu",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    dexId: [214],
    stage: "Basic",
    description: {
        en: "With its herculean powers, it can easily throw around an object that is 100 times its own weight.",
        fr: "Grâce à ses pouvoirs herculéens, il peut facilement lancer un objet pesant 100 fois son propre poids.",
        es: "Con sus poderes hercúleos, puede lanzar fácilmente un objeto que pesa 100 veces su propio peso.",
        it: "Con i suoi poteri erculei, può facilmente lanciare in giro un oggetto che pesa 100 volte il suo stesso peso.",
        de: "Mit seinen Herkuleskräften kann er problemlos einen Gegenstand herumwerfen, der das Hundertfache seines Eigengewichts hat.",
        "pt-br": "Com seus poderes hercúleos, ele pode facilmente arremessar um objeto com 100 vezes seu próprio peso.",
        "zh-tw": "憑藉其巨大的力量，它可以輕鬆地拋擲自身重量 100 倍的物體。",
        ja: "ものすごい 怪力の 持ち主。 自分の 体重の １００倍の 重さでも 楽に ぶん投げる。",
        ko: "엄청난 괴력의 소유자.\n자신 체중의 100배나 되는\n무게도 가뿐히 내던진다."
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Powerful Friends",
                fr: "Force de l'Amitié",
                es: "Amigos Poderosos",
                it: "Spallecoperte",
                de: "Einflussreiche Freunde",
                "pt-br": "Amigos Poderosos",
                "zh-tw": "百人之力",
                ja: "ひゃくにんりき",
                ko: "일당백"
            },
            effect: {
                en: "If you have any Stage 2 Pokémon on your Bench, this attack does 50 more damage.",
                fr: "Si vous avez un Pokémon de niveau 2 sur votre banc, cette attaque inflige 50 dégâts supplémentaires.",
                es: "Si tienes algún Pokémon de Etapa 2 en tu Banca, este ataque hace 50 daños más.",
                it: "Se hai dei Pokémon di Fase 2 in panchina, questo attacco infligge 50 danni in più.",
                de: "Wenn du ein Pokémon der Stufe 2 auf deiner Bank hast, fügt dieser Angriff 50 Schadenspunkte mehr zu.",
                "pt-br": "Se você tiver qualquer Pokémon de Estágio 2 em seu Banco, este ataque causará 50 de dano a mais.",
                "zh-tw": "如果你的替補席上有任何 2 階段寶可夢，則此攻擊造成的傷害增加 50 點。",
                ja: "自分のベンチに2進化ポケモンがいるなら、50ダメージ追加。",
                ko: "자신의 벤치에 2진화 포켓몬이 있다면 50데미지를 추가한다."
            },
            damage: "30+"
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
