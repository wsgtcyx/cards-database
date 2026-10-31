import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/018",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/018",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/018",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/018",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/018",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/018",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3a/018",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B3a/018",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B3a/018"
    },
    name: {
        en: "Iron Thorns",
        fr: "Épine-de-Fer",
        es: "Ferropúas",
        it: "Spineferree",
        de: "Eisendorn",
        "pt-br": "Espinhos Férreos",
        "zh-tw": "鐵荊棘",
        ko: "무쇠가시",
        ja: "テツノイバラ"
    },
    illustrator: "matazo",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Lightning"],
    dexId: [995],
    stage: "Basic",
    description: {
        en: "Some of its notable features match those of an object named within a certain expedition journal as Iron Thorns.",
        fr: "Certaines de ses caractéristiques notables correspondent à celles d'un objet nommé dans un certain journal d'expédition comme Épine-de-Fer.",
        es: "Algunas de sus características notables coinciden con las de un objeto nombrado en un determinado diario de expedición como Ferropúas.",
        it: "Alcune delle sue caratteristiche degne di nota corrispondono a quelle di un oggetto nominato all'interno di un certo diario di spedizione come Spineferree.",
        de: "Einige seiner bemerkenswerten Merkmale stimmen mit denen eines Objekts überein, das in einem bestimmten Expeditionstagebuch als Eisendorn bezeichnet wird.",
        "pt-br": "Algumas de suas características notáveis ​​correspondem às de um objeto nomeado em um determinado diário de expedição como Espinhos Férreos.",
        "zh-tw": "它的一些顯著特徵與某個探險日誌中命名為 鐵荊棘 的物體的特徵相符。",
        ja: "ある 探検記で テツノイバラと 紹介されている 物体と 一致する 特徴が ある。",
        ko: "어느 탐험기에서\n\"무쇠가시\"라고 소개했던 물체와\n일치하는 특징이 있다."
    },
    attacks: [
        {
            cost: ["Lightning", "Lightning"],
            name: {
                en: "Binary Thunder",
                fr: "Tonnerre binaire",
                es: "Trueno binario",
                it: "Tuono binario",
                de: "Binärer Donner",
                "pt-br": "Trovão Binário",
                "zh-tw": "雙雷電",
                ja: "バイナリサンダー",
                ko: "바이너리썬더"
            },
            effect: {
                en: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 40 more damage.",
                fr: "Si le Pokémon Actif de votre adversaire est un ex Pokémon, cette attaque inflige 40 dégâts supplémentaires.",
                es: "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 40 daños más.",
                it: "Se il Pokémon attivo del tuo avversario è un Pokémon ex, questo attacco infligge 40 danni in più.",
                de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-Ex ist, fügt dieser Angriff 40 weitere Schadenspunkte zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este ataque causará 40 de dano a mais.",
                "zh-tw": "如果對手的現役寶可夢是前寶可夢，則此攻擊造成的傷害增加 40 點。",
                ja: "相手のバトルポケモンが「ポケモンex」なら、40ダメージ追加。",
                ko: "상대의 배틀 포켓몬이 「포켓몬 ex」라면 40데미지를 추가한다."
            },
            damage: "40+"
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
