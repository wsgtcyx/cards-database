import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Carbink",
        "fr": "Carabine",
        "es": "carabina",
        "it": "Carbink",
        "de": "Carbink",
        "pt-br": "Carabina",
        "zh-tw": "卡賓克"
    },
    illustrator: "5ban Graphics",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fighting"],
    description: {
        en: "When beset by attackers, Carbink wipes them all\nout by firing high-energy beams from the gems\nembedded in its body.",
        "fr": "Lorsqu'il est assailli par des attaquants, Carbink les efface tous\nen tirant des faisceaux à haute énergie à partir des pierres précieuses\nincrusté dans son corps.",
        "es": "Cuando los atacantes lo acosan, Carbink los elimina a todos.\nsalir disparando rayos de alta energía desde las gemas\nincrustado en su cuerpo.",
        "it": "Quando viene assalito dagli aggressori, Carbink li spazza via tutti\nfuori sparando raggi ad alta energia dalle gemme\nincastonato nel suo corpo.",
        "de": "Wenn er von Angreifern bedrängt wird, löscht Carbink sie alle aus\ndurch Abfeuern hochenergetischer Strahlen aus den Edelsteinen heraus\nin seinen Körper eingebettet.",
        "pt-br": "Quando assediado por agressores, Carbink elimina todos eles\ndisparando feixes de alta energia das gemas\nembutido em seu corpo.",
        "zh-tw": "當受到攻擊者圍攻時，Carbink 將其全部消滅\n通過從寶石中發射高能光束來釋放\n鑲嵌在它的身體裡。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Hard Roll",
                "fr": "Rouleau dur",
                "es": "Rollo duro",
                "it": "Rotolo duro",
                "de": "Harte Rolle",
                "pt-br": "Rolo Duro",
                "zh-tw": "硬捲"
            },
            damage: 30,
            cost: ["Fighting", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, lors du prochain tour de votre adversaire, prévenez tous les dégâts et effets des attaques infligées à ce Pokémon.",
                "es": "Lanza una moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y los efectos de los ataques realizados a este Pokémon.",
                "it": "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni tutti i danni e gli effetti degli attacchi inflitti a questo Pokémon.",
                "de": "Wirf eine Münze. Bei „Kopf“ verhindere im nächsten Zug deines Gegners jeglichen Schaden und alle Auswirkungen von Angriffen, die diesem Pokémon zugefügt werden.",
                "pt-br": "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, evite todos os danos e efeitos de ataques feitos a este Pokémon.",
                "zh-tw": "拋一枚硬幣。如果正面朝上，則在對手的下一回合中，阻止對該神奇寶貝造成的所有攻擊傷害及其效果。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
