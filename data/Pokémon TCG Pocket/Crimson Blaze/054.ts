import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Genesect",
        "fr": "Genesect",
        "es": "Genesect",
        "it": "Genesect",
        "de": "Genesect",
        "pt-br": "Genesect",
        "zh-tw": "蓋諾賽克特"
    },
    illustrator: "kawayoo",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Metal"],
    description: {
        en: "This ancient bug Pokémon was altered by Team\nPlasma. They upgraded the cannon on its back.",
        "fr": "Cet ancien Pokémon bug a été modifié par l'équipe\nPlasma. Ils ont amélioré le canon sur le dos.",
        "es": "Este antiguo Pokémon insecto fue alterado por el Equipo\nPlasma. Mejoraron el cañón en su espalda.",
        "it": "Questo antico Pokémon insetto è stato alterato dal Team\nPlasma. Hanno potenziato il cannone sul dorso.",
        "de": "Dieses uralte Käfer-Pokémon wurde vom Team verändert\nPlasma. Sie haben die Kanone auf der Rückseite verbessert.",
        "pt-br": "Este antigo Pokémon bug foi alterado pela equipe\nPlasma. Eles atualizaram o canhão nas costas.",
        "zh-tw": "這個古老的昆蟲神奇寶貝被團隊改變了\n血漿。他們升級了背上的大砲。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Metal Blast",
                "fr": "Explosion de métal",
                "es": "Explosión de metal",
                "it": "Esplosione di metallo",
                "de": "Metallexplosion",
                "pt-br": "Explosão Metálica",
                "zh-tw": "金屬爆破"
            },
            damage: 10,
            cost: ["Colorless", "Colorless", "Colorless"],
            effect: {
                en: "This attack does 20 more damage for each {M} Energy attached to this Pokémon.",
                "fr": "Cette attaque inflige 20 dégâts supplémentaires pour chaque {M} Énergie attachée à ce Pokémon.",
                "es": "Este ataque hace 20 daños más por cada {M} Energía unida a este Pokémon.",
                "it": "Questo attacco infligge 20 danni in più per ogni Energia {M} assegnata a questo Pokémon.",
                "de": "Dieser Angriff fügt 20 weitere Schadenspunkte für jede an dieses Pokémon angelegte {M}-Energie zu.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada Energia {M} ligada a este Pokémon.",
                "zh-tw": "該神奇寶貝每附加 {M} 點能量，此攻擊就會造成 20 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
