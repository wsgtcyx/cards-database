import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/140",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/140",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/140",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/140",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/140",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/140",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/140",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B3/140",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B3/140"
    },
    name: {
        en: "Audino",
        fr: "Nanméouïe",
        es: "Audino",
        it: "Audino",
        de: "Ohrdoch",
        "pt-br": "Audino",
        "zh-tw": "差不多娃娃",
        ko: "다부니",
        ja: "タブンネ"
    },
    illustrator: "Naoki Saito",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Colorless"],
    dexId: [531],
    stage: "Basic",
    description: {
        en: "This Pokémon has a kind heart. By touching with its feelers, Audino can gauge other creatures’ feelings and physical conditions.",
        fr: "Ce Pokémon gentil est capable de deviner\nles émotions et l’état de santé des autres\nrien qu’en les touchant avec ses antennes.",
        es: "Un Pokémon gentil que es capaz de comprender\nlos sentimientos y averiguar el estado de salud\nde todo aquel que toque con sus antenas.",
        it: "Questo Pokémon dal cuore tenero è in grado di\npercepire le condizioni fisiche e mentali\ndi chi tocca con le antenne.",
        de: "Berührt dieses herzensgute Pokémon jemanden\nmit seinen Fühlern, kann es dessen körperliche\nVerfassung und Gemütszustand ertasten.",
        "pt-br": "Este Pokémon tem um coração bondoso. Ao tocar com seus sensores, Audino pode avaliar os sentimentos e condições físicas de outras criaturas.",
        "zh-tw": "心地善良的寶可夢。透過\n用觸角觸碰，就能了解\n對方的情緒和身體狀況。",
        ja: "心優しい ポケモン。 触角を 押し当て 相手の 気持ちや 体調を 理解する。",
        ko: "마음 착한 포켓몬이다.\n더듬이를 갖다 대어 상대의\n마음과 몸 상태를 파악한다."
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Healing Light",
                fr: "Lumière Soignante",
                es: "Luz Sanadora",
                it: "Luce Curativa",
                de: "Heilendes Licht",
                "pt-br": "Luz de Cura",
                "zh-tw": "治癒之光",
                ja: "いやしのひかり",
                ko: "치유의빛"
            },
            effect: {
                en: "Heal 10 damage from each of your Pokémon.",
                fr: "Soignez 10 dégâts de chacun de vos Pokémon.",
                es: "Cura 10 daños de cada uno de tus Pokémon.",
                it: "Cura 10 danni da ciascuno dei tuoi Pokémon.",
                de: "Heile 10 Schadenspunkte bei jedem deiner Pokémon.",
                "pt-br": "Cure 10 pontos de dano de cada um dos seus Pokémon.",
                "zh-tw": "治療每隻寶可夢造成的 10 點傷害。",
                ja: "自分のポケモン全員のHPを10回復。",
                ko: "자신의 포켓몬 전원의 HP를 10회복."
            },
            damage: 40
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
