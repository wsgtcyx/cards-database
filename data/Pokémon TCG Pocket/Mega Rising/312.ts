import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Meowth",
        "fr": "Miaouss",
        "es": "maullido",
        "it": "Miaoth",
        "de": "Miau",
        "pt-br": "Miau",
        "zh-tw": "喵喵"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "All it does is sleep during the daytime. At night,\nit patrols its territory with its eyes aglow.",
        "fr": "Tout ce qu'il fait, c'est dormir pendant la journée. La nuit,\nil patrouille son territoire les yeux brillants.",
        "es": "Lo único que hace es dormir durante el día. Por la noche,\npatrulla su territorio con los ojos brillantes.",
        "it": "Non fa altro che dormire durante il giorno. Di notte,\npattuglia il suo territorio con gli occhi accesi.",
        "de": "Tagsüber schläft es nur. Nachts,\nMit leuchtenden Augen patrouilliert es durch sein Revier.",
        "pt-br": "Tudo o que faz é dormir durante o dia. À noite,\npatrulha seu território com os olhos brilhantes.",
        "zh-tw": "它所做的就是在白天睡覺。晚上，\n它眼睛發光，在自己的領地巡邏。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Pay Day",
                "fr": "Jour de paie",
                "es": "día de pago",
                "it": "Giorno di paga",
                "de": "Zahltag",
                "pt-br": "Dia de pagamento",
                "zh-tw": "發薪日"
            },
            damage: 10,
            cost: ["Colorless"],
            effect: {
                en: "Draw a card.",
                "fr": "Piochez une carte.",
                "es": "Saca una carta.",
                "it": "Pesca una carta.",
                "de": "Ziehe eine Karte.",
                "pt-br": "Compre uma carta.",
                "zh-tw": "畫一張卡片。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
