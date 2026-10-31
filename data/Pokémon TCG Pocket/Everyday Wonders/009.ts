import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/009",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/009",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/009",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/009",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/009",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/009",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3b/009",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B3b/009",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B3b/009"
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
        "zh-tw": "它有九條長尾巴，毛皮閃閃發光。據說可以活一千年。",
        ja: "黄金に 輝く 体毛と ９本の 長い 尻尾を 持つ。 １０００年は 生きると 言われる。",
        ko: "황금빛으로 빛나는 털과\n9개의 긴 꼬리를 지녔다.\n1000년을 산다고 한다."
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
                "zh-tw": "火花舞",
                ja: "ひのこのまい",
                ko: "불꽃세례춤"
            },
            effect: {
                en: "Flip 9 coins. This attack does 20 damage for each heads.",
                fr: "Lancez 9 pièces. Cette attaque inflige 20 dégâts pour chaque tête.",
                es: "Lanza 9 monedas. Este ataque hace 20 daños por cada cabeza.",
                it: "Lancia 9 monete. Questo attacco infligge 20 danni per ogni testa.",
                de: "Wirf 9 Münzen. Dieser Angriff verursacht 20 Schaden pro Kopf.",
                "pt-br": "Jogue 9 moedas. Este ataque causa 20 de dano para cada cabeça.",
                "zh-tw": "翻轉 9 個硬幣。這次攻擊對每個頭造成 20 點傷害。",
                ja: "コインを9回投げ、オモテの数×20ダメージ。",
                ko: "동전을 9번 던져서 앞면이 나온 수 × 20데미지를 준다."
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
