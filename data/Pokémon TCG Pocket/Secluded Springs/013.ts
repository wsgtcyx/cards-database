import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Poliwag",
        "fr": "Poliwag",
        "es": "Poliwag",
        "it": "Poliwag",
        "de": "Poliwag",
        "pt-br": "Poliwag",
        "zh-tw": "蚊香蝌蚪",
    },
    illustrator: "Yuka Morii",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "For Poliwag, swimming is easier than walking.\nThe swirl pattern on its belly is actually part of\nthe Pokémon's innards showing through the skin.",
        "fr": "Pour Poliwag, nager est plus facile que marcher.\nLe motif tourbillonnant sur son ventre fait en fait partie de\nles entrailles du Pokémon visibles à travers la peau.",
        "es": "Para Poliwag, nadar es más fácil que caminar.\nEl patrón de remolino en su vientre es en realidad parte de\nLas entrañas del Pokémon se ven a través de la piel.",
        "it": "Per Poliwag nuotare è più facile che camminare.\nIl motivo a vortice sulla sua pancia ne è in realtà parte\nle viscere del Pokémon si vedono attraverso la pelle.",
        "de": "Für Poliwag ist Schwimmen einfacher als Gehen.\nDas Wirbelmuster auf seinem Bauch ist tatsächlich ein Teil davon\nDie Innereien des Pokémon sind durch die Haut sichtbar.",
        "pt-br": "Para Poliwag, nadar é mais fácil do que caminhar.\nO padrão de redemoinho em sua barriga é na verdade parte\nas entranhas do Pokémon aparecendo através da pele.",
        "zh-tw": "對於 Poliwag 來說，游泳比走路更容易。\n它腹部的漩渦圖案實際上是\n神奇寶貝的內臟透過皮膚顯現出來。"
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
            cost: ["Colorless"],
            effect: {
                en: "Put 1 random Poliwag from your deck onto your Bench.",
                "fr": "Placez 1 Poliwag aléatoire de votre deck sur votre Banc.",
                "es": "Pon 1 Poliwag aleatorio de tu mazo en tu Banca.",
                "it": "Metti 1 Poliwag casuale dal tuo mazzo nella tua panchina.",
                "de": "Lege 1 zufälligen Poliwag aus deinem Deck auf deine Bank.",
                "pt-br": "Coloque 1 Poliwag aleatório do seu baralho no seu Banco.",
                "zh-tw": "從你的牌組中隨機將 1 個 Poliwag 放到你的替補席上。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
