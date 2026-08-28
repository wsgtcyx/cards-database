import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/057",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/057",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/057",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/057",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/057",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/057",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/057"
    },
    name: {
        en: "Regidrago",
        fr: "Regidrago",
        es: "Regidrago",
        it: "Regidrago",
        de: "Regidrago",
        "pt-br": "Regidrago",
        "zh-tw": "雷吉鐸拉戈",
        ko: "레지드래고",
        ja: "レジドラゴ"
    },
    illustrator: "Kouki Saitou",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Dragon"],
    dexId: [895],
    stage: "Basic",
    description: {
        en: "Its body is composed of crystallized dragon energy. Regidrago is said to have the powers of every dragon Pokémon.",
        fr: "Son corps est entièrement composé de cristaux d'énergie draconique. Il posséderait les pouvoirs de tous les Pokémon Dragon.",
        es: "Todo su cuerpo es una gema de energía dragón cristalizada. Se cree que posee los poderes de todos los Pokémon dragón.",
        it: "Il suo corpo è formato da energia Drago cristallizzata. Pare che possieda i poteri di tutti i Pokémon di tipo Drago.",
        de: "Sein ganzer Körper besteht aus kristallisierter Drachen-Energie. Es soll über die Kräfte aller Drachen-Pokémon verfügen.",
        "pt-br": "Seu corpo é composto por energia de dragão cristalizada. Dizem que Regidrago possui os poderes de todos os Pokémon dragão.",
        "zh-tw": "全身是由龍之能量的結晶打造而成。據說牠擁有所有的龍寶可夢的力量。"
    },
    attacks: [
        {
            cost: ["Grass", "Fire", "Colorless"],
            name: {
                en: "Draconic Slam",
                fr: "Écrasement Draconique",
                es: "Golpe Dragontino",
                it: "Schianto del Drago",
                de: "Dracowucht",
                "pt-br": "Pancada Dracônica",
                "zh-tw": "龍之重擊"
            },
            effect: {
                en: "If this Pokémon has damage on it, this attack does -100 damage.",
                fr: "Si ce Pokémon a subi des dégâts, cette attaque inflige - 100 dégâts.",
                es: "Si este Pokémon ya tiene daño, este ataque hace ‐100 puntos de daño.",
                it: "Se questo Pokémon è danneggiato, questo attacco infligge -100 danni.",
                de: "Wenn diesem Pokémon bereits Schaden zugefügt wurde, fügt diese Attacke – 100 Schadenspunkte zu.",
                "pt-br": "Se este Pokémon estiver danificado, este ataque causará -100 pontos de dano.",
                "zh-tw": "若這隻寶可夢有受到傷害,則這個招式的傷害-100點。"
            },
            damage: 140
        }
    ],
    retreat: 2
};

export default card;
