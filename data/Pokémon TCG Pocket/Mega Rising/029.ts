import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Arcanine",
        "fr": "Arcanin",
        "es": "arcanino",
        "it": "Arcano",
        "de": "Arkani",
        "pt-br": "Arcano",
        "zh-tw": "阿爾卡寧"
    },
    illustrator: "Yuu Nishida",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Fire"],
    evolveFrom: {
        en: "Growlithe",
        "fr": "Growlithe",
        "es": "crecer",
        "it": "Growlithe",
        "de": "Growlithe",
        "pt-br": "Growlithe",
        "zh-tw": "成長"
    },
    description: {
        en: "Its magnificent bark conveys a sense of majesty.\nAnyone hearing it can't help but grovel before it.",
        "fr": "Sa magnifique écorce transmet un sentiment de majesté.\nQuiconque l’entend ne peut s’empêcher de ramper devant lui.",
        "es": "Su magnífica corteza transmite una sensación de majestuosidad.\nCualquiera que lo escuche no puede evitar humillarse ante él.",
        "it": "La sua magnifica corteccia trasmette un senso di maestosità.\nChiunque lo ascolti non può fare a meno di umiliarsi davanti ad esso.",
        "de": "Seine prächtige Rinde vermittelt ein Gefühl von Majestät.\nWer es hört, kann nicht anders, als davor zu kriechen.",
        "pt-br": "A sua magnífica casca transmite uma sensação de majestade.\nQualquer um que ouça isso não pode deixar de rastejar diante disso.",
        "zh-tw": "其雄偉的樹皮給人一種威嚴的感覺。\n任誰聽了都會忍不住跪拜。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Fire Fang",
                "fr": "Croc de Feu",
                "es": "colmillo de fuego",
                "it": "Zanna di fuoco",
                "de": "Feuerzahn",
                "pt-br": "Presa de Fogo",
                "zh-tw": "火牙"
            },
            damage: 50,
            cost: ["Fire", "Fire"],
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Burned.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, le Pokémon Actif de votre adversaire est désormais Brûlé.",
                "es": "Lanza una moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Quemado.",
                "it": "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario è bruciato.",
                "de": "Wirf eine Münze. Bei „Kopf“ ist das Aktive Pokémon deines Gegners jetzt verbrannt.",
                "pt-br": "Jogue uma moeda. Se der cara, o Pokémon Ativo do seu oponente agora está Queimado.",
                "zh-tw": "拋一枚硬幣。如果正面，則對手的活躍神奇寶貝現在被燒毀。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 3
};
export default card;
