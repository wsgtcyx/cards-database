import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Wishiwashi",
        "fr": "Wishiwashi",
        "es": "Wishiwashi",
        "it": "Wishiwashi",
        "de": "Wishiwashi",
        "pt-br": "Wishiwashi",
        "zh-tw": "弱丁魚",
    },
    illustrator: "Kouki Saitou",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 30,
    types: ["Water"],
    description: {
        en: "Individually, they're incredibly weak. It's by gathering\nup into schools that they're able to confront opponents.",
        "fr": "Individuellement, ils sont incroyablement faibles. It's by gathering\ndans les écoles pour pouvoir affronter leurs adversaires.",
        "es": "Individualmente, son increíblemente débiles. es reuniendo\nen las escuelas donde pueden enfrentarse a sus oponentes.",
        "it": "Individualmente, sono incredibilmente deboli. È raccogliendo\nnelle scuole che sono in grado di affrontare gli avversari.",
        "de": "Einzeln sind sie unglaublich schwach. Es geschieht durch Sammeln\nbis in die Schulen, dass sie in der Lage sind, Gegner zu konfrontieren.",
        "pt-br": "Individualmente, eles são incrivelmente fracos. É reunindo\nnas escolas para que sejam capazes de enfrentar adversários.",
        "zh-tw": "就個人而言，他們非常弱。是通過聚集\n進入學校，他們能夠對抗對手。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Call for Family",
                "fr": "Appel à la famille",
                "es": "Llamada para la familia",
                "it": "Chiamata per la famiglia",
                "de": "Aufruf zur Familie",
                "pt-br": "Ligue para a família",
                "zh-tw": "呼叫家人"
            },
            cost: ["Water"],
            effect: {
                en: "Put 1 random Wishiwashi or Wishiwashi ex from your deck onto your Bench.",
                "fr": "Placez 1 Wishiwashi ou Wishiwashi ex aléatoire de votre deck sur votre banc.",
                "es": "Coloca 1 Wishiwashi o Wishiwashi ex aleatorio de tu mazo en tu Banca.",
                "it": "Metti 1 Wishiwashi o Wishiwashi ex casuale dal tuo mazzo nella tua panchina.",
                "de": "Lege 1 zufälligen Wishiwashi oder Wishiwashi-Ex aus deinem Deck auf deine Bank.",
                "pt-br": "Coloque 1 Wishiwashi ou ex Wishiwashi aleatório do seu deck no seu Banco.",
                "zh-tw": "將 1 名隨機的 Wishiwashi 或 Wishiwashi ex 從你的牌組放到你的替補席上。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
