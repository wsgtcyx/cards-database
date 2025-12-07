import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Boltund",
        "fr": "Boltund",
        "es": "Boltund",
        "it": "Boltund",
        "de": "Boltund",
        "pt-br": "Boltund",
        "zh-tw": "博爾通德"
    },
    illustrator: "Tomomi Ozaki",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Lightning"],
    evolveFrom: {
        en: "Yamper",
        "fr": "Yamper",
        "es": "Yamper",
        "it": "Yamper",
        "de": "Yamper",
        "pt-br": "Yamper",
        "zh-tw": "雅珀"
    },
    description: {
        en: "This Pokémon generates electricity and channels\nit into its legs to keep them going strong.\nBoltund can run nonstop for three full days.",
        "fr": "Ce Pokémon génère de l'électricité et des canaux\nil dans ses jambes pour les maintenir forts.\nBoltund peut fonctionner sans interruption pendant trois jours complets.",
        "es": "Este Pokémon genera electricidad y canales.\nen sus piernas para mantenerlas fuertes.\nBoltund puede correr sin parar durante tres días completos.",
        "it": "Questo Pokémon genera elettricità e canalizza\nnelle sue gambe per mantenerle forti.\nBoltund può correre senza sosta per tre giorni interi.",
        "de": "Dieses Pokémon erzeugt Elektrizität und Kanäle\nes in seine Beine, um sie stark zu halten.\nBoltund kann drei volle Tage lang ununterbrochen laufen.",
        "pt-br": "Este Pokémon gera eletricidade e canaliza\nem suas pernas para mantê-las fortes.\nBoltund pode funcionar sem parar por três dias inteiros.",
        "zh-tw": "這個神奇寶貝會產生電力和通道\n它進入它的腿以保持它們的力量。\nBoltund 可以不間斷地運行三天。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Defiant Spark",
                "fr": "Étincelle provocante",
                "es": "Chispa desafiante",
                "it": "Scintilla ribelle",
                "de": "Trotziger Funke",
                "pt-br": "Faísca desafiadora",
                "zh-tw": "挑釁火花"
            },
            damage: 70,
            cost: ["Lightning", "Colorless", "Colorless"],
            effect: {
                en: "If this Pokémon has damage on it, this attack can be used for 1 {L} Energy.",
                "fr": "Si ce Pokémon subit des dégâts, cette attaque peut être utilisée pour 1 {L} Énergie.",
                "es": "Si este Pokémon tiene daño, este ataque puede usarse por 1 {L} de Energía.",
                "it": "Se questo Pokémon ha dei danni, questo attacco può essere usato per 1 Energia {L}.",
                "de": "Wenn dieses Pokémon Schaden hat, kann dieser Angriff für 1 {L} Energie verwendet werden.",
                "pt-br": "Se este Pokémon sofrer dano, este ataque poderá ser usado por 1 {L} Energia.",
                "zh-tw": "如果該神奇寶貝受到傷害，則該攻擊可消耗 1 {L} 點能量。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
