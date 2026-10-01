import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/414",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/414",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/414",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/414",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/414",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/414",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/414"
    },
    name: {
        en: "Mega Blastoise ex",
        fr: "Méga-Tortank-ex",
        es: "Mega-Blastoise ex",
        it: "Mega Blastoise-ex",
        de: "Mega-Turtok-ex",
        "pt-br": "Mega Blastoise ex",
        "zh-tw": "超級水箭龜ex",
        ja: "メガカメックスex",
        ko: "메가거북왕 ex"
    },
    illustrator: "5ban Graphics",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 230,
    types: [
        "Water"
    ],
    evolveFrom: {
        en: "Wartortle",
        fr: "Carabaffe",
        es: "Wartortle",
        it: "Wartortle",
        de: "Schillok",
        "pt-br": "Wartortle",
        "zh-tw": "卡咪龜",
        ja: "Wartortle",
        ko: "Wartortle"
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Triple Bombardment",
                fr: "Triple Bombardement",
                es: "Bombardeo Triple",
                it: "Triplo Bombardamento",
                de: "Dreifachbeschuss",
                "pt-br": "Bombardeio Triplo",
                "zh-tw": "三重轟裂",
                ja: "Triple Bombardment",
                ko: "Triple Bombardment"
            },
            damage: 130,
            cost: [
                "Water",
                "Water",
                "Colorless"
            ],
            effect: {
                en: "If this Pokémon has at least 3 extra {W} Energy attached, this attack also does 50 damage to 2 of your opponent's Benched Pokémon.",
                fr: "Si ce Pokémon a au moins 3 Énergies {W} de plus, cette attaque inflige également 50 dégâts à deux des Pokémon de Banc de votre adversaire.",
                es: "Si este Pokémon tiene por lo menos 3 Energías {W} adicionales unidas a él, este ataque también hace 50 puntos de daño a 2 de los Pokémon en Banca de tu rival.",
                it: "Se questo Pokémon ha almeno 3 Energie {W} extra assegnate, questo attacco infligge anche 50 danni a due dei Pokémon nella panchina del tuo avversario.",
                de: "Wenn an dieses Pokémon mindestens 3 extra {W}-Energien angelegt sind, fügt diese Attacke auch 2 Pokémon auf der Bank deines Gegners 50 Schadenspunkte zu.",
                "pt-br": "Se este Pokémon tiver pelo menos 3 Energias {W} extras ligadas a ele, este ataque também causará 50 pontos de dano a 2 dos Pokémon no Banco do seu oponente.",
                "zh-tw": "若額外附有3個{W}能量,則對手的2隻備戰寶可夢也各受到50點傷害。",
                ja: "If this Pokémon has at least 3 extra {W} Energy attached, this attack also does 50 damage to 2 of your opponent's Benched Pokémon.",
                ko: "If this Pokémon has at least 3 extra {W} Energy attached, this attack also does 50 damage to 2 of your opponent's Benched Pokémon."
            }
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
