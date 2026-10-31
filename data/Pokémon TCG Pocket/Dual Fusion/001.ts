import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/001",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/001",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/001",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/001",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/001",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/001",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/001",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/001"
    },
    name: {
        en: "Bulbasaur",
        fr: "Bulbizarre",
        es: "Bulbasaur",
        "pt-br": "Bulbasaur",
        "zh-tw": "妙蛙種子",
        ja: "フシギダネ",
        ko: "이상해씨",
        it: "Bulbasaur",
        de: "Bisasam"
    },
    illustrator: "OKACHEKE",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 70,
    types: [
        "Grass"
    ],
    stage: "Basic",
    retreat: 2,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Leech Seed",
                fr: "Vampigraine",
                es: "Drenadoras",
                it: "Parassiseme",
                de: "Egelsamen",
                "pt-br": "Semente Sanguessuga",
                "zh-tw": "寄生種子",
                ja: "やどりぎのタネ",
                ko: "Leech Seed"
            },
            cost: [
                "Colorless",
                "Grass"
            ],
            damage: 30,
            effect: {
                en: "Heal 10 damage from this Pokémon.",
                fr: "Soignez 10 dégâts de ce Pokémon.",
                es: "Cura 10 puntos de daño a este Pokémon.",
                it: "Cura questo Pokémon da 10 danni.",
                de: "Heile 10 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 10 pontos de dano deste Pokémon.",
                "zh-tw": "將這隻寶可夢恢復10HP。",
                ja: "このポケモンのHPを10回復。",
                ko: "Heal 10 damage from this Pokémon."
            }
        }
    ],
    abilities: [],
    description: {
        en: "For some time after its birth, it uses the nutrients that are packed into the seed on its back in order to grow.",
        fr: "Au début de sa vie, il se nourrit des nutriments accumulés dans la graine sur son dos. Cela lui permet de grandir.",
        es: "Tras nacer, crece alimentándose durante un tiempo de los nutrientes que contiene el bulbo de su lomo.",
        it: "Dopo la nascita, per un periodo di tempo cresce assorbendo i nutrienti stipati nel bulbo sul dorso.",
        de: "Nach der Geburt nutzt es für eine Weile die Nährstoffe im Samen auf seinem Rücken, um zu wachsen.",
        "pt-br": "Durante algum tempo após nascer, usa os nutrientes armazenados na semente em suas costas para crescer.",
        "zh-tw": "在出生後的一段時間內，牠會吸收背上種子裡儲存的營養成長。",
        ja: "生まれて しばらくの あいだ 背中の タネに 詰まった 栄養を 取って 育つ。",
        ko: "For some time after its birth, it uses the nutrients that are packed into the seed on its back in order to grow."
    }
};

export default card;
