import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Slowking",
        "fr": "Ralentissement",
        "es": "lento",
        "it": "Rallentando",
        "de": "Langsam",
        "pt-br": "Lentidão",
        "zh-tw": "河馬王",
    },
    illustrator: "Aya Kusube",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Water"],
    evolveFrom: {
        en: "Slowpoke",
        "fr": "Lambin",
        "es": "Perezoso",
        "it": "Slowpoke",
        "de": "Langweiler",
        "pt-br": "Slowpoke",
        "zh-tw": "呆呆獸"
    },
    description: {
        en: "When its head was bitten, toxins entered Slowpoke's\nhead and unlocked an extraordinary power.",
        "fr": "Quand sa tête a été mordue, des toxines ont pénétré dans l'intérieur de Slowpoke.\ntête et a débloqué un pouvoir extraordinaire.",
        "es": "Cuando le mordieron la cabeza, las toxinas entraron en la de Slowpoke.\ncabeza y desbloqueó un poder extraordinario.",
        "it": "Quando gli viene morsa la testa, le tossine entrano in quella di Slowpoke\ntesta e sbloccò un potere straordinario.",
        "de": "Als sein Kopf gebissen wurde, gelangten Giftstoffe in Slowpokes Körper\nKopf und setzte eine außergewöhnliche Kraft frei.",
        "pt-br": "Quando sua cabeça foi mordida, toxinas entraram no corpo de Slowpoke.\ncabeça e desbloqueou um poder extraordinário.",
        "zh-tw": "當它的頭被咬時，毒素就進入了呆呆獸的身體\n頭並釋放出非凡的力量。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Litter",
                "fr": "Litière",
                "es": "Basura",
                "it": "Rifiuti",
                "de": "Wurf",
                "pt-br": "Lixo",
                "zh-tw": "垃圾"
            },
            damage: 50,
            cost: ["Water"],
            effect: {
                en: "Discard up to 2 Pokémon Tool cards from your hand. This attack does 50 damage for each card you discarded in this way.",
                "fr": "Défaussez jusqu'à 2 cartes Outil Pokémon de votre main. Cette attaque inflige 50 dégâts pour chaque carte défaussée de cette manière.",
                "es": "Descarta hasta 2 cartas de Herramientas Pokémon de tu mano. Este ataque hace 50 puntos de daño por cada carta que descartes de esta manera.",
                "it": "Scarta fino a 2 carte Oggetto Pokémon dalla tua mano. Questo attacco infligge 50 danni per ogni carta che hai scartato in questo modo.",
                "de": "Wirf bis zu 2 Pokémon-Ausrüstungskarten aus deiner Hand ab. Dieser Angriff fügt 50 Schadenspunkte für jede auf diese Weise abgeworfene Karte zu.",
                "pt-br": "Descarte até 2 cartas de Ferramentas Pokémon da sua mão. Este ataque causa 50 de dano para cada carta descartada dessa forma.",
                "zh-tw": "從手牌捨棄最多2張寶可夢工具卡。你以這種方式丟棄的每張牌都會造成 50 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 3
};
export default card;
