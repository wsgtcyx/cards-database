import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/009",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/009"
    },
    name: {
        en: "Ninetales",
        fr: "Feunard",
        es: "Ninetales",
        it: "Ninetales",
        de: "Vulnona",
        "pt-br": "Ninetales",
        "zh-tw": "九尾",
        ko: "나인테일",
        ja: "キュウコン"
    },
    illustrator: "Ken Sugimori",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fire"],
    dexId: [38],
    evolveFrom: {
        en: "Vulpix",
        fr: "Goupix",
        es: "Vulpix",
        it: "Vulpix",
        de: "Vulpix",
        "pt-br": "Vulpix",
        "zh-tw": "六尾",
        ko: "식스테일",
        ja: "ロコン"
    },
    stage: "Stage1",
    description: {
        en: "It has nine long tails and fur that gleams gold. It is said to live for 1,000 years.",
        fr: "Il a neuf longues queues et une fourrure qui brille\ncomme de l’or. On dit qu’il peut vivre 1 000 ans.",
        es: "Tiene nueve colas y un pelaje de color dorado.\nDicen que este Pokémon llega a vivir 1000 años.",
        it: "Dotato di nove code e di una pelliccia dorata,\nsi dice che viva 1000 anni.",
        de: "Es hat neun lange Schweife und sein Fell glänzt\ngülden. Man sagt, es soll 1 000 Jahre alt werden.",
        "pt-br": "Tem nove caudas longas e pêlo que brilha em ouro. Diz-se que vive 1.000 anos.",
        "zh-tw": "它有九條長尾巴，毛皮閃閃發光。據說可以活一千年。"
    },
    attacks: [
        {
            cost: ["Fire", "Colorless", "Colorless"],
            name: {
                en: "Ember Dance",
                fr: "Danse des braises",
                es: "Danza de ascuas",
                it: "Danza della brace",
                de: "Gluttanz",
                "pt-br": "Dança da Brasa",
                "zh-tw": "火花舞"
            },
            effect: {
                en: "Flip 9 coins. This attack does 20 damage for each heads.",
                fr: "Lancez 9 pièces. Cette attaque inflige 20 dégâts pour chaque tête.",
                es: "Lanza 9 monedas. Este ataque hace 20 daños por cada cabeza.",
                it: "Lancia 9 monete. Questo attacco infligge 20 danni per ogni testa.",
                de: "Wirf 9 Münzen. Dieser Angriff verursacht 20 Schaden pro Kopf.",
                "pt-br": "Jogue 9 moedas. Este ataque causa 20 de dano para cada cabeça.",
                "zh-tw": "翻轉 9 個硬幣。這次攻擊對每個頭造成 20 點傷害。"
            },
            damage: "20x"
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
