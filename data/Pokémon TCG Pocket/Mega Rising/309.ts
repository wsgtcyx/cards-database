import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Golem",
        "fr": "Golem",
        "es": "gólem",
        "it": "Golem",
        "de": "Golem",
        "pt-br": "Golem",
        "zh-tw": "魔像"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 160,
    types: ["Fighting"],
    evolveFrom: {
        en: "Graveler",
        "fr": "Graveur",
        "es": "Graveler",
        "it": "Graveler",
        "de": "Schotter",
        "pt-br": "Cascalho",
        "zh-tw": "碎石者"
    },
    description: {
        en: "When Golem grow old, they stop shedding their\nshells. Those that have lived a long, long time\nhave shells green with moss.",
        "fr": "Quand les Golem vieillissent, ils arrêtent de perdre leurs\ncoquilles. Ceux qui ont vécu très, très longtemps\nont des coquilles vertes avec de la mousse.",
        "es": "Cuando los Golem envejecen, dejan de perder su\nconchas. Aquellos que han vivido mucho, mucho tiempo.\ntienen conchas verdes con musgo.",
        "it": "Quando i Golem invecchiano, smettono di perdere i loro\nconchiglie. Quelli che hanno vissuto molto, molto tempo\nhanno conchiglie verdi di muschio.",
        "de": "Wenn Golems älter werden, hören sie auf, ihre Haare zu verlieren\nMuscheln. Diejenigen, die schon sehr lange gelebt haben\nhaben Muscheln, die grün mit Moos sind.",
        "pt-br": "Quando o Golem envelhece, ele para de se livrar de seus\nconchas. Aqueles que viveram muito, muito tempo\ntêm conchas verdes com musgo.",
        "zh-tw": "當傀儡變老時，他們會停止脫落\n貝殼。那些活了很久很久的人\n貝殼綠色，長滿青苔。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Guard Press",
                "fr": "Presse de garde",
                "es": "Prensa de guardia",
                "it": "Stampa della Guardia",
                "de": "Gardepresse",
                "pt-br": "Imprensa da Guarda",
                "zh-tw": "守衛壓力機"
            },
            damage: 120,
            cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
            effect: {
                en: "During your opponent's next turn, this Pokémon takes −30 damage from attacks.",
                "fr": "Lors du prochain tour de votre adversaire, ce Pokémon subit -30 dégâts des attaques.",
                "es": "Durante el próximo turno de tu rival, este Pokémon recibe -30 de daño por ataques.",
                "it": "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -30 danni dagli attacchi.",
                "de": "Während des nächsten Zuges deines Gegners erleidet dieses Pokémon −30 Schadenspunkte durch Angriffe.",
                "pt-br": "Durante o próximo turno do seu oponente, este Pokémon sofrerá -30 de dano de ataques.",
                "zh-tw": "在對手的下一個回合中，這只神奇寶貝受到的攻擊傷害為-30。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 3
};
export default card;
