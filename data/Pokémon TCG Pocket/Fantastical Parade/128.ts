import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/128",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/128",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/128",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/128",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/128"
    },
    name: {
        en: "Sentret",
        "fr": "Sentret",
        "es": "Sentret",
        "it": "Sentret",
        "de": "Sentret",
        "pt-br": "Sentido",
        "zh-tw": "森特雷"
    },
    illustrator: "Midori Harada",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "If it encounters a foe, it will stand up on its tail,\nmaking itself look bigger than usual to intimidate\nthem.",
        "fr": "S'il rencontre un ennemi, il se dresse sur sa queue,\nse faisant paraître plus grand que d'habitude pour intimider\neux.",
        "es": "Si encuentra un enemigo, se pondrá de pie sobre su cola,\nhacerse parecer más grande de lo habitual para intimidar\nellos.",
        "it": "Se incontra un nemico, si alzerà sulla coda,\nfacendosi sembrare più grande del solito per intimidire\nloro.",
        "de": "Wenn es auf einen Feind trifft, stellt es sich auf seinen Schwanz und\nEs lässt sich größer erscheinen als sonst, um einzuschüchtern\nsie.",
        "pt-br": "Se encontrar um inimigo, ele ficará em pé,\nfazendo-se parecer maior do que o normal para intimidar\neles.",
        "zh-tw": "如果遇到敵人，它會用尾巴站立起來，\n讓自己看起來比平時更大以嚇人\n他們。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Tail Rap",
                "fr": "Coup de queue",
                "es": "Rap de cola",
                "it": "Rap di coda",
                "de": "Tail Rap",
                "pt-br": "Rap de cauda",
                "zh-tw": "尾部說唱"
            },
            damage: 20,
            cost: ["Colorless"],
            effect: {
                en: "Flip 2 coins. This attack does 20 damage for each heads.",
                "fr": "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque tête.",
                "es": "Lanza 2 monedas. Este ataque hace 20 daños por cada cabeza.",
                "it": "Lancia 2 monete. Questo attacco infligge 20 danni per ogni testa.",
                "de": "Wirf 2 Münzen. Dieser Angriff verursacht 20 Schaden pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 20 de dano para cada cabeça.",
                "zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
