import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/037",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/037",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/037",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/037",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/037",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/037",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3a/037"
    },
    name: {
        en: "Umbreon",
        fr: "Noctali",
        es: "Umbreon",
        it: "Umbreon",
        de: "Nachtara",
        "pt-br": "Umbreon",
        "zh-tw": "月亮伊布",
        ko: "블래키",
        ja: "ブラッキー"
    },
    illustrator: "rika",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Darkness"],
    dexId: [197],
    evolveFrom: {
        en: "Eevee",
        fr: "Évoli",
        es: "Eevee",
        it: "Eevee",
        de: "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布",
        ko: "이브이",
        ja: "イーブイ"
    },
    stage: "Stage1",
    description: {
        en: "When darkness falls, the rings on the body begin to glow, striking fear in the hearts of anyone nearby.",
        fr: "Lorsque l’obscurité tombe, les anneaux sur le corps commencent à briller, semant la peur dans le cœur de quiconque se trouve à proximité.",
        es: "Cuando cae la oscuridad, los anillos del cuerpo comienzan a brillar, infundiendo miedo en los corazones de cualquiera que esté cerca.",
        it: "Quando cala l'oscurità, gli anelli sul corpo iniziano a brillare, incutendo timore nei cuori di chiunque si trovi nelle vicinanze.",
        de: "Wenn die Dunkelheit hereinbricht, beginnen die Ringe am Körper zu leuchten und lösen bei jedem in der Nähe Angst und Schrecken aus.",
        "pt-br": "Quando a escuridão cai, os anéis do corpo começam a brilhar, causando medo nos corações de qualquer pessoa próxima.",
        "zh-tw": "當夜幕降臨時，身體上的光環開始發光，引起附近任何人心中的恐懼。"
    },
    attacks: [
        {
            cost: ["Darkness", "Colorless"],
            name: {
                en: "Confuse Ray",
                fr: "Onde Folie",
                es: "Rayo Confuso",
                it: "Stordiraggio",
                de: "Konfusstrahl",
                "pt-br": "Raio da Confusão",
                "zh-tw": "奇異之光"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Confused.",
                fr: "Le Pokémon Actif de votre adversaire est désormais Confus.",
                es: "El Pokémon Activo de tu rival ahora está Confundido.",
                it: "Il Pokémon attivo del tuo avversario è ora confuso.",
                de: "Das aktive Pokémon deines Gegners ist jetzt verwirrt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Confuso.",
                "zh-tw": "你對手的戰鬥寶可夢現在處於混亂狀態。"
            },
            damage: 50
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
