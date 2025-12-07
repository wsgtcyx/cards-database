import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Frogadier",
        "fr": "Frogadier",
        "es": "ranadier",
        "it": "Frogadier",
        "de": "Frogadier",
        "pt-br": "Sapo",
        "zh-tw": "呱頭蛙",
    },
    illustrator: "Akira Komayama",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Water"],
    evolveFrom: {
        en: "Froakie",
        "fr": "Froakie",
        "es": "Froakie",
        "it": "Froakie",
        "de": "Froakie",
        "pt-br": "Froakie",
        "zh-tw": "弗羅阿基"
    },
    description: {
        en: "It can throw bubble-covered pebbles with precise\ncontrol, hitting empty cans up to a hundred feet away.",
        "fr": "Il peut lancer des cailloux recouverts de bulles avec précision\ncontrôle, frappant des canettes vides jusqu'à une centaine de mètres.",
        "es": "Puede lanzar piedras cubiertas de burbujas con precisión.\ncontrol, golpeando latas vacías hasta a treinta metros de distancia.",
        "it": "Può lanciare con precisione ciottoli ricoperti di bolle\ncontrollo, colpendo lattine vuote fino a trenta metri di distanza.",
        "de": "Es kann mit Blasen bedeckte Kieselsteine präzise werfen\nKontrolle und trifft leere Dosen aus einer Entfernung von bis zu dreißig Metern.",
        "pt-br": "Ele pode lançar pedras cobertas de bolhas com precisão\ncontrole, atingindo latas vazias a até trinta metros de distância.",
        "zh-tw": "它可以精確地投擲覆蓋著氣泡的鵝卵石\n控制，擊中一百英尺外的空罐。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Water Drip",
                "fr": "Goutte d'eau",
                "es": "Goteo de agua",
                "it": "Gocciolamento dell'acqua",
                "de": "Wassertropfen",
                "pt-br": "Gotejamento de água",
                "zh-tw": "水滴"
            },
            damage: 30,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
