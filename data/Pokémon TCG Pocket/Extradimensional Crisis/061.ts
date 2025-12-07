import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Silvally",
        "fr": "Silvallie",
        "es": "Silvally",
        "it": "Silvalmente",
        "de": "Silvally",
        "pt-br": "Silvally",
        "zh-tw": "銀伴戰獸",
    },
    illustrator: "Eske Yoshinob",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Colorless"],
    evolveFrom: {
        en: "Type: Null",
        "fr": "Type : Nul",
        "es": "Tipo: nulo",
        "it": "Tipo: nullo",
        "de": "Typ: Null",
        "pt-br": "Tipo: Nulo",
        "zh-tw": "屬性：空",
    },
    description: {
        en: "This is its form once it has awakened and\nevolved. Freed from its heavy mask, its speed is\ngreatly increased.",
        "fr": "C'est sa forme une fois qu'il s'est réveillé et\névolué. Libérée de son lourd masque, sa vitesse est\nfortement augmenté.",
        "es": "Esta es su forma una vez que ha despertado y\nevolucionado. Liberado de su pesada máscara, su velocidad es\naumentó mucho.",
        "it": "Questa è la sua forma una volta che si è risvegliato e\nevoluto. Liberata dalla sua pesante maschera, la sua velocità è\nnotevolmente aumentato.",
        "de": "Dies ist seine Form, sobald es erwacht ist und\nweiterentwickelt. Von seiner schweren Maske befreit, ist seine Geschwindigkeit\nstark erhöht.",
        "pt-br": "Esta é a sua forma, uma vez que ele despertou e\nevoluiu. Livre de sua máscara pesada, sua velocidade é\naumentou muito.",
        "zh-tw": "這是它覺醒後的形態\n進化了。擺脫了沉重的面具，它的速度是\n大大增加。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Brave Buddies",
                "fr": "Copains courageux",
                "es": "Amigos valientes",
                "it": "Amici coraggiosi",
                "de": "Tapfere Freunde",
                "pt-br": "Bravos amigos",
                "zh-tw": "勇敢的伙伴"
            },
            damage: 50,
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "If you played a Supporter card from your hand during this turn, this attack does 50 more damage.",
                "fr": "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 50 dégâts supplémentaires.",
                "es": "Si jugaste una carta de Partidario de tu mano durante este turno, este ataque causa 50 puntos de daño más.",
                "it": "Se hai giocato una carta Aiuto dalla tua mano durante questo turno, questo attacco infligge 50 danni in più.",
                "de": "Wenn du in diesem Zug eine Unterstützerkarte aus deiner Hand gespielt hast, fügt dieser Angriff 50 Schadenspunkte mehr zu.",
                "pt-br": "Se você jogou uma carta de Apoiador da sua mão durante este turno, este ataque causará 50 de dano a mais.",
                "zh-tw": "如果你在本回合中從手牌中打出了支持者卡，則此攻擊造成的傷害增加 50 點。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
