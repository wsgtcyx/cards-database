import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Krookodile",
        "fr": "Crocorible",
        "es": "krookodile",
        "it": "Krookodile",
        "de": "Krookodile",
        "pt-br": "Crookodile",
        "zh-tw": "流氓鱷",
    },
    illustrator: "Naoki Saito",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Darkness"],
    evolveFrom: {
        en: "Krokorok",
        "fr": "Krokorok",
        "es": "krokorok",
        "it": "Krokorok",
        "de": "Krokorok",
        "pt-br": "Crokorok",
        "zh-tw": "克羅科羅克"
    },
    description: {
        en: "After clamping down with its powerful jaws, it\ntwists its body around to rip its prey in half.",
        "fr": "Après avoir serré avec ses puissantes mâchoires, il\ntourne son corps pour déchirer sa proie en deux.",
        "es": "Después de tomar medidas drásticas con sus poderosas mandíbulas,\nGira su cuerpo para partir a su presa por la mitad.",
        "it": "Dopo aver stretto con le sue potenti mascelle, esso\ngira il suo corpo per squarciare la preda a metà.",
        "de": "Nachdem er es mit seinen kräftigen Backen festgeklemmt hat\ndreht seinen Körper herum, um seine Beute in zwei Hälften zu zerreißen.",
        "pt-br": "Depois de apertar com suas poderosas mandíbulas, ele\ntorce seu corpo para rasgar sua presa ao meio.",
        "zh-tw": "用其強大的鉗口鉗住後，\n扭轉身體將獵物撕成兩半。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Poaching Fangs",
                "fr": "Crocs de braconnage",
                "es": "Colmillos de caza furtiva",
                "it": "Zanne da bracconaggio",
                "de": "Reißzähne wildern",
                "pt-br": "Presas de caça furtiva",
                "zh-tw": "偷獵尖牙"
            },
            damage: 90,
            cost: ["Darkness", "Darkness", "Colorless"],
            effect: {
                en: "Flip 3 coins. For each heads, a card is chosen at random from your opponent's hand. Your opponent reveals that card and shuffles it into their deck.",
                "fr": "Lancez 3 pièces. Pour chaque face, une carte est choisie au hasard dans la main de votre adversaire. Votre adversaire révèle cette carte et la mélange dans son deck.",
                "es": "Lanza 3 monedas. Por cada cara, se elige una carta al azar de la mano de tu oponente. Tu oponente revela esa carta y la baraja en su mazo.",
                "it": "Lancia 3 monete. Per ogni testa viene scelta una carta a caso dalla mano del tuo avversario. Il tuo avversario rivela quella carta e la mischia nel suo mazzo.",
                "de": "Wirf 3 Münzen. Für jeden Kopf wird eine zufällige Karte aus der Hand deines Gegners ausgewählt. Dein Gegner deckt diese Karte auf und mischt sie in sein Deck.",
                "pt-br": "Jogue 3 moedas. Para cada cara, uma carta é escolhida aleatoriamente da mão do seu oponente. Seu oponente revela aquela carta e embaralha-a em seu baralho.",
                "zh-tw": "翻轉 3 個硬幣。對於每個頭，從對手的手上隨機選擇一張牌。你的對手展示該牌並將其洗入他們的牌庫中。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 3
};
export default card;
