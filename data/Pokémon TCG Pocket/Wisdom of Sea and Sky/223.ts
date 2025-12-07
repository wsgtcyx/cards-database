import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Nidoran♀",
        "fr": "Nidoran♀",
        "es": "Nidoran♀",
        "it": "Nidoran♀",
        "de": "Nidoran♀",
        "pt-br": "Nidoran♀",
        "zh-tw": "尼多蘭",
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    description: {
        en: "Females are more sensitive to smells than males.\nWhile foraging, they'll use their whiskers to check\nwind direction and stay downwind of predators.",
        "fr": "Les femelles sont plus sensibles aux odeurs que les mâles.\nEn cherchant de la nourriture, ils utiliseront leurs moustaches pour vérifier\ndirection du vent et rester sous le vent des prédateurs.",
        "es": "Las hembras son más sensibles a los olores que los machos.\nMientras buscan comida, usarán sus bigotes para comprobar\ndirección del viento y mantenerse a favor del viento de los depredadores.",
        "it": "Le femmine sono più sensibili agli odori rispetto ai maschi.\nMentre vanno in cerca di cibo, usano i baffi per controllare\ndirezione del vento e rimanere sottovento rispetto ai predatori.",
        "de": "Weibchen reagieren empfindlicher auf Gerüche als Männchen.\nBei der Nahrungssuche nutzen sie ihre Schnurrhaare zur Kontrolle\nAchten Sie auf die Windrichtung und bleiben Sie windabgewandt von Raubtieren.",
        "pt-br": "As mulheres são mais sensíveis aos cheiros do que os homens.\nEnquanto procuram alimentos, eles usam os bigodes para verificar\ndireção do vento e fique na direção do vento dos predadores.",
        "zh-tw": "女性比男性對氣味更敏感。\n覓食時，它們會用鬍鬚檢查\n風向並保持捕食者的下風向。"
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
            cost: ["Darkness"],
            effect: {
                en: "Put 1 random Nidoran♂ from your deck onto your Bench.",
                "fr": "Mettez 1 Nidoran♂ aléatoire de votre deck sur votre banc.",
                "es": "Coloca 1 Nidoran♂ aleatorio de tu mazo en tu Banca.",
                "it": "Metti 1 Nidoran♂ casuale dal tuo mazzo nella tua panchina.",
                "de": "Lege 1 zufälligen Nidoran♂ aus deinem Deck auf deine Bank.",
                "pt-br": "Coloque 1 Nidoran♂ aleatório do seu deck no seu Banco.",
                "zh-tw": "從你的牌組中隨機將 1 張 Nidoran♂ 放到你的替補席上。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
