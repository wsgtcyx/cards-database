import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/140",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/140",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/140",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/140",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/140",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/140",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/140"
    },
    name: {
        en: "Diggersby",
        "fr": "Excavarenne",
        "es": "Diggersby",
        "it": "Diggersby",
        "de": "Grebbit",
        "pt-br": "Diggersby",
        "zh-tw": "掘地兔"
    },
    illustrator: "Mina Nakai",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Colorless"],
    evolveFrom: {
        en: "Bunnelby",
        "fr": "Sapereau",
        "es": "Bunnelby",
        "it": "Bunnelby",
        "de": "Scoppel",
        "pt-br": "Bunnelby",
        "zh-tw": "掘掘兔"
    },
    description: {
        en: "The fur on its belly retains heat exceptionally\nwell. People used to make heavy winter clothing\nfrom fur shed by this Pokémon.",
        "fr": "La fourrure sur son ventre retient exceptionnellement la chaleur\neh bien. Les gens fabriquaient de lourds vêtements d’hiver\nde la fourrure perdue par ce Pokémon.",
        "es": "El pelaje de su vientre retiene el calor excepcionalmente.\nbueno. La gente solía hacer ropa pesada de invierno.\ndel pelaje que desprende este Pokémon.",
        "it": "La pelliccia sul ventre trattiene il calore in modo eccezionale\nbene. Un tempo le persone confezionavano pesanti abiti invernali\ndal pelo perso da questo Pokémon.",
        "de": "Das Fell am Bauch speichert die Wärme hervorragend\nNaja. Früher stellte man schwere Winterkleidung her\naus dem Fell dieses Pokémon.",
        "pt-br": "O pêlo da barriga retém o calor excepcionalmente\nbem. As pessoas costumavam fazer roupas pesadas de inverno\nda pele derramada por este Pokémon.",
        "zh-tw": "腹部的毛皮具有出色的保暖能力\n好吧。人們過去常常製作厚重的冬衣\n來自這只神奇寶貝脫落的毛皮。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Earthquake",
                "fr": "Tremblement de terre",
                "es": "Terremoto",
                "it": "Terremoto",
                "de": "Erdbeben",
                "pt-br": "Terremoto",
                "zh-tw": "地震"
            },
            damage: 70,
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "This attack also does 10 damage to each of your Benched Pokémon.",
                "fr": "Cette attaque inflige également 10 dégâts à chacun de vos Pokémon de Banc.",
                "es": "Este ataque también hace 10 puntos de daño a cada uno de tus Pokémon en Banca.",
                "it": "Questo attacco infligge anche 10 danni a ciascuno dei tuoi Pokémon in panchina.",
                "de": "Dieser Angriff fügt außerdem jedem Pokémon auf deiner Bank 10 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 10 de dano a cada um dos seus Pokémon no Banco.",
                "zh-tw": "這次攻擊還會對你的每隻後備神奇寶貝造成 10 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
