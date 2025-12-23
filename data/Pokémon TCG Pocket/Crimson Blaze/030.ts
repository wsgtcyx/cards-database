import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Misdreavus",
        "fr": "Feuforêve",
        "es": "Misdreavus",
        "it": "Misdreavus",
        "de": "Traunfugil",
        "pt-br": "Misdreavus",
        "zh-tw": "夢妖"
    },
    illustrator: "sui",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Psychic"],
    description: {
        en: "It loves to bite and yank people's hair from\nbehind without warning, just to see their\nshocked reactions.",
        "fr": "Il adore mordre et arracher les cheveux des gens.\nderrière sans prévenir, juste pour voir leur\nréactions choquées.",
        "es": "Le encanta morder y arrancarle el pelo a la gente.\ndetrás sin previo aviso, sólo para ver sus\nreacciones de sorpresa.",
        "it": "Ama mordere e strappare i capelli alle persone\ndietro senza preavviso, solo per vederli\nreazioni scioccate.",
        "de": "Es liebt es, Menschen in die Haare zu beißen und auszureißen\nohne Vorwarnung zurück, nur um sie zu sehen\nschockierte Reaktionen.",
        "pt-br": "Ele adora morder e arrancar o cabelo das pessoas\natrás sem avisar, só para ver seus\nreações chocadas.",
        "zh-tw": "牠喜歡咬人並拉扯人的頭髮\n毫無徵兆的落後，只是為了看到他們\n震驚的反應。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Lead",
                "fr": "Plomb",
                "es": "Dirigir",
                "it": "Guida",
                "de": "Führen",
                "pt-br": "Liderar",
                "zh-tw": "帶領"
            },
            cost: ["Psychic"],
            effect: {
                en: "Put a random Supporter card from your deck into your hand.",
                "fr": "Mettez une carte Supporter aléatoire de votre deck dans votre main.",
                "es": "Pon una carta de Partidario aleatoria de tu mazo en tu mano.",
                "it": "Metti nella tua mano una carta Aiuto casuale dal tuo mazzo.",
                "de": "Nimm eine zufällige Unterstützerkarte aus deinem Deck auf deine Hand.",
                "pt-br": "Coloque uma carta de Apoiador aleatória do seu baralho na sua mão.",
                "zh-tw": "將你牌庫中的一張隨機支持者卡置入你的手牌。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
