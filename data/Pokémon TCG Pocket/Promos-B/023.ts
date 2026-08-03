import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/023",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/023",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/023",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/023",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/023",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/023",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/023"
    },
    name: {
        en: "Genesect",
        fr: "Genesect",
        es: "Genesect",
        it: "Genesect",
        de: "Genesect",
        "pt-br": "Genesect",
        "zh-tw": "蓋諾賽克特",
        ko: "게노세크트",
        ja: "ゲノセクト"
    },
    illustrator: "Anesaki Dynamic",
    rarity: "None",
    category: "Pokemon",
    hp: 110,
    types: ["Metal"],
    dexId: [649],
    stage: "Basic",
    description: {
        en: "This ancient bug Pokémon was altered by Team Plasma. They upgraded the cannon on its back.",
        fr: "Un Pokémon Insecte des temps anciens modifié par\nla Team Plasma. Le canon dans son dos a été grandement\namélioré.",
        es: "Pokémon de tipo Bicho de la antigüedad, modificado por\nel Equipo Plasma. El cañón de su lomo ha sido mejorado.",
        it: "Antico Pokémon Coleottero modificato dal Team Plasma,\nche ne ha notevolmente potenziato il cannone sulla schiena.",
        de: "Ein von Team Plasma modifiziertes Käfer-Pokémon aus dem\nAltertum. Die Kanone auf seinem Rücken ist nun noch stärker.",
        "pt-br": "Este antigo Pokémon bug foi alterado pela Equipe Plasma. Eles atualizaram o canhão nas costas.",
        "zh-tw": "這種古老的昆蟲寶可夢被等離子隊改造了。他們升級了背上的大砲。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Metal Blast",
                fr: "Explosion Métallique",
                es: "Explosión Metálica",
                it: "Metalbomba",
                de: "Metallexplosion",
                "pt-br": "Explosão de Metal",
                "zh-tw": "金屬爆破"
            },
            effect: {
                en: "This attack does 20 more damage for each {M} Energy attached to this Pokémon.",
                fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque {M} Énergie attachée à ce Pokémon.",
                es: "Este ataque hace 20 daños más por cada {M} Energía unida a este Pokémon.",
                it: "Questo attacco infligge 20 danni in più per ogni Energia {M} assegnata a questo Pokémon.",
                de: "Dieser Angriff fügt 20 weitere Schadenspunkte für jede an dieses Pokémon angelegte {M}-Energie zu.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada Energia {M} ligada a este Pokémon.",
                "zh-tw": "該寶可夢每附加 {M} 點能量，此攻擊就會造成 20 點額外傷害。"
            },
            damage: "10+"
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 2,
    boosters: ["vol3"]
};

export default card;
