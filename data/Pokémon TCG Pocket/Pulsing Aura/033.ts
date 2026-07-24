import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/033",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/033"
    },
    name: {
        en: "Poliwag",
        fr: "Ptitard",
        es: "Poliwag",
        it: "Poliwag",
        de: "Quapsel",
        "pt-br": "Poliwag",
        "zh-tw": "蚊香蝌蚪",
        ko: "발챙이",
        ja: "ニョロモ"
    },
    illustrator: "Kurata So",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    dexId: [60],
    stage: "Basic",
    description: {
        en: "Its legs are newly grown, and it can’t walk very well. It seems to prefer swimming through the water instead.",
        fr: "Ses pattes viennent de pousser et il ne peut pas très bien marcher. Il semble préférer nager dans l’eau.",
        es: "Sus piernas recién crecieron y no puede caminar muy bien. Parece preferir nadar en el agua.",
        it: "Le sue zampe sono appena cresciute e non riesce a camminare molto bene. Sembra che preferisca invece nuotare nell'acqua.",
        de: "Seine Beine sind neu ausgewachsen und er kann nicht sehr gut laufen. Stattdessen scheint es lieber durch das Wasser zu schwimmen.",
        "pt-br": "Suas pernas cresceram recentemente e ele não consegue andar muito bem. Parece preferir nadar na água.",
        "zh-tw": "它的腿是新長出來的，走路不太好。它似乎更喜歡在水中游泳。"
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Rain Splash",
                fr: "Pluie Éclaboussante",
                es: "Golpe de Lluvia",
                it: "Spruzzapioggia",
                de: "Regenplatscher",
                "pt-br": "Chuva Borrifante",
                "zh-tw": "潑水"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
