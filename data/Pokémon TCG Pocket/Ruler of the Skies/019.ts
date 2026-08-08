import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/019",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/019",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/019",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/019",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/019",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/019",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/019"
    },
    name: {
        en: "Teal Mask Ogerpon",
        fr: "Ogerpon Masque Turquoise",
        es: "Ogerpon Máscara Turquesa",
        it: "Ogerpon Maschera Turchese",
        de: "Ogerpon (Türkisgrüne Maske)",
        "pt-br": "Ogerpon Máscara Turquesa",
        "zh-tw": "厄鬼椪碧草面具",
        ko: "오거폰 벽록의가면",
        ja: "オーガポン みどりのめん"
    },
    illustrator: "Naoyo Kimura",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    stage: "Basic",
    description: {
        en: "This mischief-loving Pokémon is full of curiosity. It battles by drawing out the type-based energy contained within its masks.",
        "es": "Es bromista y extremadamente curioso. A la hora de combatir, se sirve del tipo de energia que contenga la máscara que lleve puesta."
    },
    attacks: [
        {
            cost: ["Grass", "Grass", "Colorless"],
            name: {
                en: "Ogre's Whip",
                fr: "Fouet du Monstre",
                es: "Látigo del Ogro",
                "pt-br": "Chicote de Ogro",
                "zh-tw": "厄鬼鞭打",
                "it": "Frustata dell'Orco",
                "de": "Ogerpeitsche"
            },
            effect: {
                en: "This attack does damage to your opponent's Active Pokémon equal to this Pokémon's remaining HP.",
                fr: "Cette attaque inflige au Pokémon Actif de votre adversaire des dégâts équivalents aux PV restants de ce Pokémon.",
                es: "Este ataque hace una cantidad de daño al Pokémon Activo de tu rival igual a los PS que le queden a este Pokémon.",
                "pt-br": "Este ataque causa dano ao Pokémon Ativo do seu oponente equivalente ao PS restante deste Pokémon.",
                "zh-tw": "對對手的戰鬥寶可夢造成與這隻寶可夢的剩餘HP相同數值的傷害。",
                "it": "Questo attacco infligge al Pokémon attivo dell'avversario danni pari alla quantità di PS rimasti a questo Pokémon.",
                "de": "Diese Attacke fügt dem Aktiven Pokémon deines Gegners Schaden in Höhe der verbleibenden KP dieses Pokémon zu."
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
