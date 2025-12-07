import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Scizor",
        "fr": "Ciseleur",
        "es": "scizor",
        "it": "Scizor",
        "de": "Scherz",
        "pt-br": "Scizor",
        "zh-tw": "巨鉗螳螂",
    },
    illustrator: "Ryuta Fuse",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Metal"],
    evolveFrom: {
        en: "Scyther",
        "fr": "Faucheur",
        "es": "Guadaña",
        "it": "Scyther",
        "de": "Sense",
        "pt-br": "Foice",
        "zh-tw": "鐮刀"
    },
    description: {
        en: "This Pokémon's pincers, which contain steel, can\ncrush any hard object they get ahold of into bits.",
        "fr": "Les pinces de ce Pokémon, qui contiennent de l'acier, peuvent\nécraser tout objet dur qu’ils trouvent en morceaux.",
        "es": "Las pinzas de este Pokémon, que contienen acero, pueden\ntriture en pedazos cualquier objeto duro que encuentre.",
        "it": "Le chele di questo Pokémon, che contengono acciaio, possono farlo\nschiacciano in pezzetti qualsiasi oggetto duro che trovano.",
        "de": "Die Zangen dieses Pokémon, die Stahl enthalten, können das\nZerquetschen Sie alle harten Gegenstände, die ihnen in die Hände fallen.",
        "pt-br": "As pinças deste Pokémon, que contêm aço, podem\nesmague qualquer objeto duro que eles pegarem em pedaços.",
        "zh-tw": "該神奇寶貝的鉗子含有鋼，可以\n將他們抓住的任何堅硬物體壓成碎片。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Gale Thrust",
                "fr": "Coup de vent",
                "es": "Empuje de vendaval",
                "it": "Spinta di burrasca",
                "de": "Sturmstoß",
                "pt-br": "Impulso do vendaval",
                "zh-tw": "強風推力"
            },
            damage: 50,
            cost: ["Metal", "Metal"],
            effect: {
                en: "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 50 more damage.",
                "fr": "Si ce Pokémon est passé de votre Banc au Point Actif ce tour-ci, cette attaque inflige 50 dégâts supplémentaires.",
                "es": "Si este Pokémon se movió de tu Banca al Punto Activo este turno, este ataque hace 50 puntos de daño más.",
                "it": "Se questo Pokémon è passato dalla tua panchina al posto attivo in questo turno, questo attacco infligge 50 danni in più.",
                "de": "Wenn dieses Pokémon in diesem Zug von deiner Bank auf den aktiven Platz verschoben wurde, fügt dieser Angriff 50 weitere Schadenspunkte zu.",
                "pt-br": "Se este Pokémon for movido do seu Banco para o Local Ativo neste turno, este ataque causará 50 de dano a mais.",
                "zh-tw": "如果本回合這只神奇寶貝從你的替補席移動到活躍位置，則這次攻擊造成的傷害增加 50 點。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
