import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Ampharos",
        "fr": "Ampharos",
        "es": "Amfaros",
        "it": "Ampharos",
        "de": "Ampharos",
        "pt-br": "Ampharos",
        "zh-tw": "電龍",
    },
    illustrator: "Kouki Saitou",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Lightning"],
    evolveFrom: {
        en: "Flaaffy",
        "fr": "Flaaffy",
        "es": "flaco",
        "it": "Flaaffy",
        "de": "Flaaffy",
        "pt-br": "Flaaffy",
        "zh-tw": "綿綿",
    },
    description: {
        en: "The bright light on its tail can be seen far\naway. It has been treasured since ancient\ntimes as a beacon.",
        "fr": "La lumière vive sur sa queue est visible de loin\nloin. Il est précieux depuis l’Antiquité\nfois comme un phare.",
        "es": "La luz brillante de su cola se puede ver a lo lejos.\nlejos. Ha sido atesorado desde la antigüedad.\nveces como un faro.",
        "it": "La luce brillante sulla sua coda può essere vista da lontano\nlontano. È stato apprezzato fin dall'antichità\nvolte come un faro.",
        "de": "Das helle Licht an seinem Schwanz ist weithin sichtbar\nweg. Es wird seit der Antike geschätzt\nMal als Leuchtturm.",
        "pt-br": "A luz brilhante em sua cauda pode ser vista de longe\nembora. É valorizado desde a antiguidade\nvezes como um farol.",
        "zh-tw": "尾巴上的亮光遠遠就能看見\n離開。自古以來就被人們珍藏\n時代如燈塔。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Thunder Punch",
                "fr": "Coup de tonnerre",
                "es": "Golpe de trueno",
                "it": "Pugno di tuono",
                "de": "Donnerschlag",
                "pt-br": "Soco Trovão",
                "zh-tw": "雷霆拳"
            },
            damage: 80,
            cost: ["Lightning", "Lightning"],
            effect: {
                en: "Flip a coin. If heads, this attack does 40 more damage. If tails, this Pokémon also does 20 damage to itself.",
                "fr": "Lancez une pièce de monnaie. Si c’est face, cette attaque inflige 40 dégâts supplémentaires. Si c'est pile, ce Pokémon s'inflige également 20 dégâts.",
                "es": "Lanza una moneda. Si sale cara, este ataque hace 40 puntos de daño más. Si sale cruz, este Pokémon también se hace 20 puntos de daño a sí mismo.",
                "it": "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più. Se esce croce, questo Pokémon infligge anche 20 danni a se stesso.",
                "de": "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 40 Schadenspunkte mehr zu. Bei „Zahl“ fügt sich dieses Pokémon außerdem selbst 20 Schadenspunkte zu.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 40 de dano a mais. Se sair coroa, este Pokémon também causa 20 de dano a si mesmo.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 40 點額外傷害。如果是反面，這只神奇寶貝也會對自己造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["lugia"]
};
export default card;
