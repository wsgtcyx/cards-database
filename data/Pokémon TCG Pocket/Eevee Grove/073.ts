import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Glaceon",
        "fr": "Glacéon",
        "es": "Glaceón",
        "it": "Glaceon",
        "de": "Glaceon",
        "pt-br": "Glacêon",
        "zh-tw": "格拉西翁"
    },
    illustrator: "Fujimoto Gold",
    rarity: "One Star",
    category: "Pokemon",
    hp: 100,
    types: ["Water"],
    evolveFrom: {
        en: "Eevee",
        "fr": "Évoli",
        "es": "Eevee",
        "it": "Eevee",
        "de": "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布"
    },
    description: {
        en: "It can control its body temperature at will.\nThis enables it to freeze the moisture in the\natmosphere, creating flurries of diamond dust.",
        "fr": "Il peut contrôler sa température corporelle à volonté.\nCela lui permet de geler l'humidité dans le\natmosphère, créant des rafales de poussière de diamant.",
        "es": "Puede controlar su temperatura corporal a voluntad.\nEsto le permite congelar la humedad en el\natmósfera, creando ráfagas de polvo de diamante.",
        "it": "Può controllare la temperatura corporea a piacimento.\nCiò gli consente di congelare l'umidità nel\natmosfera, creando raffiche di polvere di diamante.",
        "de": "Es kann seine Körpertemperatur nach Belieben steuern.\nDadurch kann die Feuchtigkeit im Inneren gefrieren\nAtmosphäre, die Wirbel aus Diamantstaub erzeugt.",
        "pt-br": "Ele pode controlar a temperatura corporal à vontade.\nIsso permite congelar a umidade no\natmosfera, criando rajadas de pó de diamante.",
        "zh-tw": "它可以隨意控制自己的體溫。\n這使得它能夠凍結內部的水分\n大氣層，產生鑽石塵埃。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Ice Blade",
                "fr": "Lame de glace",
                "es": "Hoja de hielo",
                "it": "Lama di ghiaccio",
                "de": "Eisklinge",
                "pt-br": "Lâmina de Gelo",
                "zh-tw": "冰刃"
            },
            cost: ["Water", "Water"],
            effect: {
                en: "This attack does 50 damage to 1 of your opponent's Pokémon.",
                "fr": "Cette attaque inflige 50 dégâts à 1 des Pokémon de votre adversaire.",
                "es": "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival.",
                "it": "Questo attacco infligge 50 danni a 1 dei Pokémon del tuo avversario.",
                "de": "Dieser Angriff fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente.",
                "zh-tw": "這次攻擊對對手的 1 只神奇寶貝造成 50 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 2
};
export default card;
