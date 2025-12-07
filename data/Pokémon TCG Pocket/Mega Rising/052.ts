import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Mega Gyarados ex",
        "fr": "Méga Léviator ex",
        "es": "Mega Gyarados ex",
        "it": "Mega Gyarados es",
        "de": "Mega Gyarados ex",
        "pt-br": "Mega Gyarados ex",
        "zh-tw": "巨型暴鯉龍EX"
    },
    illustrator: "PLANETA Igarashi",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 210,
    types: ["Water"],
    evolveFrom: {
        en: "Magikarp",
        "fr": "Magikarpe",
        "es": "Magikarp",
        "it": "Magikarp",
        "de": "Karpador",
        "pt-br": "Magikarp",
        "zh-tw": "鯉魚王"
    },
    description: {
        en: "Mega Evolution also affects its brain, leaving\nno other function except its destructive instinct\nto burn everything to cinders.",
        "fr": "Mega Evolution affecte également son cerveau, laissant\npas d'autre fonction que son instinct destructeur\npour tout réduire en cendres.",
        "es": "La Mega Evolución también afecta su cerebro, dejando\nninguna otra función excepto su instinto destructivo\nquemarlo todo hasta convertirlo en cenizas.",
        "it": "La megaevoluzione colpisce anche il suo cervello, uscendone\nnessun'altra funzione tranne il suo istinto distruttivo\nridurre tutto in cenere.",
        "de": "Mega Evolution beeinflusst auch sein Gehirn und verlässt es\nkeine andere Funktion außer seinem Zerstörungsinstinkt\nalles zu Asche verbrennen.",
        "pt-br": "A Mega Evolução também afeta seu cérebro, deixando\nnenhuma outra função exceto seu instinto destrutivo\nqueimar tudo em cinzas.",
        "zh-tw": "超級進化也會影響它的大腦，留下\n除了破壞本能之外沒有其他功能\n把一切都燒成灰燼。"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Mega Blaster",
                "fr": "Méga Blaster",
                "es": "Megadesintegrador",
                "it": "Megablaster",
                "de": "Mega-Blaster",
                "pt-br": "Mega Blaster",
                "zh-tw": "超級衝擊波"
            },
            damage: 140,
            cost: ["Water", "Water", "Water", "Colorless"],
            effect: {
                en: "Discard the top 3 cards of your opponent's deck.",
                "fr": "Défaussez les 3 premières cartes du deck de votre adversaire.",
                "es": "Descarta las 3 primeras cartas del mazo de tu oponente.",
                "it": "Scarta le prime 3 carte del mazzo del tuo avversario.",
                "de": "Wirf die obersten 3 Karten des Decks deines Gegners ab.",
                "pt-br": "Descarte as 3 primeiras cartas do baralho do seu oponente.",
                "zh-tw": "丟棄對手牌組頂的 3 張牌。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 3
};
export default card;
