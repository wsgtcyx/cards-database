import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/257",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/257",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/257",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/257",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/257",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/257",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/257"
    },
    name: {
        en: "Teal Mask Ogerpon",
        fr: "Ogerpon Masque Turquoise",
        es: "Ogerpon Máscara Turquesa",
        it: "Ogerpon Maschera Turchese",
        de: "Türkisgrüne-Maske-Ogerpon",
        "pt-br": "Ogerpon Máscara Turquesa",
        "zh-tw": "厄鬼椪碧草面具",
        ja: "オーガポンみどりのめん",
        ko: "오거폰벽록의 가면"
    },
    illustrator: "Naoyo Kimura",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 90,
    types: [
        "Grass"
    ],
    stage: "Basic",
    description: {
        en: "This mischief-loving Pokémon is full of curiosity. It battles by drawing out the type-based energy contained within its masks.",
        fr: "Ce Pokémon est curieux et facétieux. Lorsqu'il se bat, il puise dans l'énergie de son masque. Cette énergie est du même type que ce dernier.",
        es: "Es bromista y extremadamente curioso. A la hora de combatir, se sirve del tipo de energía que contenga la máscara que lleve puesta.",
        it: "È dispettoso e ha una spiccata curiosità. Il tipo dell'energia che sfrutta per lottare dipende da quella contenuta nella maschera.",
        de: "Es liebt Streiche und steckt voller Neugier. Zum Kämpfen nutzt es die typenspezifische Energie der Maske, die es trägt.",
        "pt-br": "Este Pokémon adora pregar peças e é muito curioso. Batalha sugando o tipo de energia contido em suas máscaras.",
        "zh-tw": "喜歡惡作劇，好奇心旺盛。能激發出面具蘊藏的屬性的能量來戰鬥。",
        ja: "This mischief-loving Pokémon is full of curiosity. It battles by drawing out the type-based energy contained within its masks.",
        ko: "This mischief-loving Pokémon is full of curiosity. It battles by drawing out the type-based energy contained within its masks."
    },
    attacks: [
        {
            cost: [
                "Grass",
                "Grass",
                "Colorless"
            ],
            name: {
                en: "Ogre's Whip",
                fr: "Fouet du Monstre",
                es: "Látigo del Ogro",
                "pt-br": "Chicote de Ogro",
                "zh-tw": "厄鬼鞭打",
                it: "Frustata dell'Orco",
                de: "Ogerpeitsche",
                ja: "Ogre's Whip",
                ko: "Ogre's Whip"
            },
            effect: {
                en: "This attack does damage to your opponent's Active Pokémon equal to this Pokémon's remaining HP.",
                fr: "Cette attaque inflige au Pokémon Actif de votre adversaire des dégâts équivalents aux PV restants de ce Pokémon.",
                es: "Este ataque hace una cantidad de daño al Pokémon Activo de tu rival igual a los PS que le queden a este Pokémon.",
                "pt-br": "Este ataque causa dano ao Pokémon Ativo do seu oponente equivalente ao PS restante deste Pokémon.",
                "zh-tw": "對對手的戰鬥寶可夢造成與這隻寶可夢的剩餘HP相同數值的傷害。",
                it: "Questo attacco infligge al Pokémon attivo dell'avversario danni pari alla quantità di PS rimasti a questo Pokémon.",
                de: "Diese Attacke fügt dem Aktiven Pokémon deines Gegners Schaden in Höhe der verbleibenden KP dieses Pokémon zu.",
                ja: "This attack does damage to your opponent's Active Pokémon equal to this Pokémon's remaining HP.",
                ko: "This attack does damage to your opponent's Active Pokémon equal to this Pokémon's remaining HP."
            }
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
