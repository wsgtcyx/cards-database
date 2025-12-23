import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Lopunny",
        "fr": "Lockpin",
        "es": "Lopunny",
        "it": "Lopunny",
        "de": "Schlapor",
        "pt-br": "Lopunny",
        "zh-tw": "長耳兔"
    },
    illustrator: "Ryuta Fuse",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Colorless"],
    evolveFrom: {
        en: "Buneary",
        "fr": "Laporeille",
        "es": "Buneary",
        "it": "Buneary",
        "de": "Haspiror",
        "pt-br": "Buneary",
        "zh-tw": "捲捲耳"
    },
    description: {
        en: "Once hot seasons are over, Lopunny's coat will\nbe replaced with fur that holds a lot of insulating\nair in preparation for colder weather.",
        "fr": "Une fois les saisons chaudes terminées, le manteau de Lopunny\nêtre remplacé par de la fourrure qui contient beaucoup d'isolant\nl'air en prévision d'un temps plus froid.",
        "es": "Una vez que terminen las estaciones calurosas, el abrigo de Lopunny\nser reemplazado con piel que contenga una gran cantidad de aislamiento\naire en preparación para el clima más frío.",
        "it": "Una volta finite le stagioni calde, il cappotto di Lopunny lo farà\nessere sostituito con pelliccia che contiene molto isolante\naria in preparazione al clima più freddo.",
        "de": "Sobald die heiße Jahreszeit vorbei ist, wird Lopunnys Fell vorbei sein\ndurch Fell ersetzt werden, das viel Isolierung enthält\nLuft zur Vorbereitung auf kälteres Wetter.",
        "pt-br": "Quando as estações quentes acabarem, o casaco de Lopunny\nser substituído por pele que contenha muito isolamento\nar em preparação para um clima mais frio.",
        "zh-tw": "一旦炎熱的季節結束，垂耳兔的外套就會\n被替換為具有大量隔熱功能的毛皮\n空氣，為寒冷的天氣做準備。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Double Kick",
                "fr": "Double coup de pied",
                "es": "Doble patada",
                "it": "Doppio calcio",
                "de": "Doppelter Tritt",
                "pt-br": "Chute Duplo",
                "zh-tw": "二連踢"
            },
            damage: 50,
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "Flip 2 coins. This attack does 50 damage for each heads.",
                "fr": "Lancez 2 pièces. Cette attaque inflige 50 dégâts pour chaque tête.",
                "es": "Lanza 2 monedas. Este ataque hace 50 daños por cada cabeza.",
                "it": "Lancia 2 monete. Questo attacco infligge 50 danni per ogni testa.",
                "de": "Wirf 2 Münzen. Dieser Angriff verursacht 50 Schaden pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 50 de dano para cada cabeça.",
                "zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 50 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
