import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Chingling",
        "fr": "Chingling",
        "es": "tintineo",
        "it": "Chingling",
        "de": "Chingling",
        "pt-br": "Chingling",
        "zh-tw": "鈴噹響",
    },
    illustrator: "Kagemaru Himeno",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 30,
    types: ["Psychic"],
    description: {
        en: "There is an orb inside its mouth. When it hops,\nthe orb bounces all over and makes a\nringing sound.",
        "fr": "Il y a un orbe dans sa bouche. Quand ça sautille,\nl'orbe rebondit partout et fait un\nsonnerie.",
        "es": "Hay un orbe dentro de su boca. Cuando salta,\nel orbe rebota por todas partes y hace un\nsonido de timbre.",
        "it": "C'è una sfera nella sua bocca. Quando salta,\nla sfera rimbalza dappertutto e fa a\nsuono squillante.",
        "de": "In seinem Mund befindet sich eine Kugel. Wenn es hüpft,\nDie Kugel springt überall herum und macht ein\nKlingelton.",
        "pt-br": "Há um orbe dentro de sua boca. Quando ele pula,\no orbe salta por todo lado e faz um\nsom de toque.",
        "zh-tw": "它的嘴裡有一個球體。當它跳躍時，\n球體到處彈跳並形成一個\n鈴聲響起。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Jingly Noise",
                "fr": "Bruit Jingly",
                "es": "Ruido tintineante",
                "it": "Rumore tintinnante",
                "de": "Klirrendes Geräusch",
                "pt-br": "Barulho tinido",
                "zh-tw": "叮噹噪音"
            },
            damage: 10,
            effect: {
                en: "During your opponent's next turn, they can't play any Item cards from their hand.",
                "fr": "Lors du prochain tour de votre adversaire, il ne pourra jouer aucune carte Objet de sa main.",
                "es": "Durante el próximo turno de tu oponente, no puede jugar ninguna carta de Objeto de su mano.",
                "it": "Durante il prossimo turno del tuo avversario, questi non potrà giocare alcuna carta Oggetto dalla sua mano.",
                "de": "Während des nächsten Zuges deines Gegners kann er keine Gegenstandskarten aus seiner Hand spielen.",
                "pt-br": "Durante o próximo turno do seu oponente, ele não poderá jogar nenhuma carta de Item da sua mão.",
                "zh-tw": "在對手的下一個回合中，他們不能從手上打出任何物品卡。"
            }
        }],
    weaknesses: [{
            type: "Colorless",
            value: "+20"
        }],
    retreat: 0
};
export default card;
