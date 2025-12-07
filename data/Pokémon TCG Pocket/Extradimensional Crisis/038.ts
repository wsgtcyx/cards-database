import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Alolan Persian",
        "fr": "Persan alolan",
        "es": "Persa de Alola",
        "it": "Persiano di Alola",
        "de": "Alolan-Persisch",
        "pt-br": "Persa de Alola",
        "zh-tw": "阿羅拉貓老大",
    },
    illustrator: "ryoma uratsuka",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Darkness"],
    evolveFrom: {
        en: "Alolan Meowth",
        "fr": "Miaouss d'Alola",
        "es": "Meowth de Alola",
        "it": "Meowth di Alola",
        "de": "Alola-Miau",
        "pt-br": "Meowth de Alola",
        "zh-tw": "阿羅拉喵喵",
    },
    description: {
        en: "The round face of Alolan Persian is considered\nto be a symbol of prosperity in the Alola region,\nso these Pokémon are very well cared for.",
        "fr": "Le visage rond d'Alolan Persan est considéré\nêtre un symbole de prospérité dans la région d'Alola,\ndonc ces Pokémon sont très bien soignés.",
        "es": "La cara redonda del persa de Alola se considera\nser un símbolo de prosperidad en la región de Alola,\npor lo que estos Pokémon están muy bien cuidados.",
        "it": "Viene considerata la faccia rotonda del persiano di Alola\nessere un simbolo di prosperità nella regione di Alola,\nquindi questi Pokémon sono molto ben curati.",
        "de": "Das runde Gesicht des Alola-Perser wird berücksichtigt\nein Symbol des Wohlstands in der Alola-Region zu sein,\nDaher sind diese Pokémon sehr gut aufgehoben.",
        "pt-br": "A face redonda do Alolan Persian é considerada\nser um símbolo de prosperidade na região de Alola,\nentão esses Pokémon são muito bem cuidados.",
        "zh-tw": "阿羅拉波斯人的圓臉被認為是\n成為阿羅拉地區繁榮的象徵，\n所以這些神奇寶貝都得到了很好的照顧。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Fake Out",
                "fr": "Faux",
                "es": "Falsificar",
                "it": "Falso",
                "de": "Fake-Out",
                "pt-br": "Falsificação",
                "zh-tw": "假出"
            },
            damage: 50,
            cost: ["Darkness", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, le Pokémon Actif de votre adversaire est désormais Paralysé.",
                "es": "Lanza una moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
                "it": "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario è paralizzato.",
                "de": "Wirf eine Münze. Bei „Kopf“ ist das Aktive Pokémon deines Gegners jetzt gelähmt.",
                "pt-br": "Jogue uma moeda. Se der cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
                "zh-tw": "拋一枚硬幣。如果正面，則對手的活躍神奇寶貝現在處於麻痺狀態。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
