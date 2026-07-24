import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    name: {
        en: "Tinkatuff",
        fr: "Forgella",
        es: "Tinkatuff",
        it: "Tinkatuff",
        de: "Tafforgita",
        'pt-br': "Tinkatuff",
        "zh-tw": "巧鍛匠",
        ko: "벼리짱"
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Metal"],
    dexId: [958],
    evolveFrom: {
        en: "Tinkatink",
        fr: "Forgerette",
        es: "Tinkatink",
        it: "Tinkatink",
        de: "Forgita",
        "pt-br": "Tinkatink",
        "zh-tw": "小鍛匠",
        pt: "Tinkatink",
        'es-mx': "Tinkatink"
    },
    description: {
        en: "These Pokémon make their homes in piles of scrap metal. They test the strength of each other's hammers by smashing them together.",
        "fr": "Ces Pokémon ont élu domicile dans des tas de ferraille. Ils testent la force de leurs marteaux respectifs en les brisant les uns contre les autres.",
        "es": "Estos Pokémon construyen sus hogares entre montones de chatarra. Ponen a prueba la fuerza de los martillos de los demás golpeándolos entre sí.",
        "it": "Questi Pokémon costruiscono le loro case tra cumuli di rottami metallici. Mettono alla prova la forza dei martelli l'uno dell'altro facendoli a pezzi.",
        "de": "Diese Pokémon bauen ihr Zuhause in Schrotthaufen. Sie testen die Stärke der Hämmer des anderen, indem sie sie zusammenschlagen.",
        "pt-br": "Esses Pokémon constroem suas casas em pilhas de sucata. Eles testam a força dos martelos um do outro, esmagando-os.",
        "zh-tw": "這些寶可夢在廢金屬堆裡安家。他們透過將彼此的錘子砸在一起來測試彼此的錘子的強度。"
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Light Punch",
                fr: "Poing Léger",
                es: "Puño Ligero",
                it: "Pugnetto",
                de: "Leichter Hieb",
                'pt-br': "Soco de Luz",
                "zh-tw": "輕拳",
                ko: "치기"
            },
            damage: "50",
            cost: ["Metal", "Colorless"],
        },
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
