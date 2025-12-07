import { Card } from "../../../interfaces";
import Set from "../Space-Time Smackdown";
const card: Card = {
    set: Set,
    name: {
        en: "Rhyperior",
        fr: "Rhinastoc",
        es: "Rhyperior",
        it: "Rhyperior",
        de: "Rihornior",
        'pt-br': "Rhyperior",
        ko: "거대코뿌리",
        "zh-tw": "超鐵暴龍",
    },
    illustrator: "Naoki Saito",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 160,
    types: ["Fighting"],
    evolveFrom: {
        en: "Rhydon",
        "fr": "Rhydon",
        "es": "rhydon",
        "it": "Rhydon",
        "de": "Rhydon",
        "pt-br": "Rhydon",
        "zh-tw": "鑽角犀獸",
    },
    description: {
        en: "It can load up to three projectiles per arm into the holes in its hands. What launches out of those holes could be either rocks or Roggenrola.",
        fr: "Il met des rochers ou des Nodulithe dans le creux de ses mains\net les tire comme des obus. Il peut ainsi en charger trois par bras.",
        es: "Introduce rocas o Roggenrola en las cavidades\nde las manos y los dispara con fuerza. Es capaz\nde cargar hasta tres proyectiles en cada brazo.",
        it: "Inserisce delle rocce o dei Roggenrola nelle cavità dei suoi\npalmi e poi li lancia. Può caricarne fino a tre per braccio.",
        de: "Es bestückt die Vertiefungen in seinen Händen\nmit Felsen oder Kiesling und feuert sie daraus ab.\nIn jeder Hand hat es Platz für drei Geschosse.",
        'pt-br': "Pode carregar até três projéteis por braço dentro\ndos buracos em suas mãos, de onde dispara tanto pedras\nquanto Roggenrola.",
        ko: "손에 난 구멍에 바위나 단굴을\n끼운 뒤 발사한다. 장전할 수 있는\n수는 한쪽 팔당 3개씩이다.",
        "zh-tw": "它每隻手臂最多可以將三枚射彈裝入其手中的孔中。從這些洞中噴出的可能是岩石，也可能是羅根羅拉。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Mountain Swing",
                fr: "Frappe Montagneuse",
                es: "Embestida Montaña",
                it: "Oscillamonte",
                de: "Bergschwinger",
                'pt-br': "Tacada Montanhosa",
                ko: "마운틴스윙",
                "zh-tw": "山地鞦韆"
            },
            damage: 150,
            cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
            effect: {
                en: "Discard the top 3 cards of your deck.",
                fr: "Défaussez les 3 premières cartes du dessus de votre deck.",
                es: "Descarta las 3 primeras cartas de tu baraja.",
                it: "Scarta le prime 3 carte del tuo mazzo.",
                de: "Lege die obersten 3 Karten deines Decks ab.",
                ko: "자신의 덱을 위에서부터 3장 트래쉬한다.",
                'pt-br': "Descarte as 3 cartas de cima do seu baralho.",
                "zh-tw": "丟棄你牌組頂的 3 張牌。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 4,
    boosters: ["palkia"]
};
export default card;
