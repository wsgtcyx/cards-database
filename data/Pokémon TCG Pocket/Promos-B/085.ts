import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/085"
    },
    name: { en: "Pachirisu", fr: "Pachirisu", es: "Pachirisu", it: "Pachirisu", de: "Pachirisu", "pt-br": "Pachirisu", "zh-tw": "帕奇利茲", ko: "파치리스", ja: "パチリス" },
    illustrator: "Atsuko Nishida",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Lightning"],
    dexId: [417],
    stage: "Basic",
    attacks: [{
        cost: ["Lightning"],
        name: { en: "Crackling Snap", fr: "Crépitement Démolissant", es: "Chasquido Chispeante", it: "Scatto Crepitante", de: "Knisternder Knall", "pt-br": "Estalo Estalante", "zh-tw": "啪滋打亂" },
        effect: {
            en: "Discard the top card of your deck, and if that card is an Item, this attack does 30 more damage.",
            fr: "Défaussez la carte du dessus de votre deck. Si c'est une carte Objet, cette attaque inflige 30 dégâts supplémentaires.",
            es: "Descarta la primera carta de tu baraja. Si es una carta de Objeto, este ataque hace 30 puntos de daño más.",
            it: "Scarta la prima carta del tuo mazzo. Se è una carta Strumento, questo attacco infligge 30 danni in più.",
            de: "Lege die oberste Karte deines Decks auf deinen Ablagestapel. Wenn jene Karte eine Itemkarte ist, fügt diese Attacke 30 Schadenspunkte mehr zu.",
            "pt-br": "Descarte a carta de cima do seu baralho e, se aquela carta for uma carta de Item, este ataque causará 30 pontos de dano a mais.",
            "zh-tw": "將自己的牌庫上方1張卡丟棄，若那張卡為物品卡，則增加30點傷害。"
        },
        damage: "30+"
    }],
    weaknesses: [{ type: "Fighting", value: "+20" }],
    retreat: 1,
    boosters: []
};

export default card;
