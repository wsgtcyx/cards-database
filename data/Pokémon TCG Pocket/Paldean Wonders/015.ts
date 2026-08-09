import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/015",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/015",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/015",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/015",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/015",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/015",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/015"
    },
    name: {
        en: "Wo-Chien",
        fr: "Chongjian",
        es: "Wo-Chien",
        it: "Wo-Chien",
        de: "Chongjian",
        "pt-br": "Wo-Chien",
        "zh-tw": "古簡蝸",
        pt: "Wo-Chien"
    },
    illustrator: "Kouki Saitou",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Grass"],
    dexId: [1001],
    description: {
        en: "It drains the life-force from vegetation, causing nearby forests to instantly wither and fields to turn barren.",
        "fr": "Il draine la force vitale de la végétation, provoquant le dépérissement instantané des forêts voisines et la stérilité des champs.",
        "es": "Drena la fuerza vital de la vegetación, provocando que los bosques cercanos se marchiten instantáneamente y los campos se vuelvan estériles.",
        "it": "Prosciuga la forza vitale dalla vegetazione, facendo appassire istantaneamente le foreste vicine e rendendo sterili i campi.",
        "de": "Es entzieht der Vegetation die Lebenskraft, wodurch umliegende Wälder sofort verdorren und Felder unfruchtbar werden.",
        "pt-br": "Ele drena a força vital da vegetação, fazendo com que as florestas próximas murchem instantaneamente e os campos fiquem áridos.",
        "zh-tw": "它會耗盡植被的生命力，導致附近的森林立即枯萎，田野變得貧瘠。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Binding Greed",
                fr: "Avidité Contraignante",
                es: "Avaricia Vinculante",
                it: "Vincolo Avido",
                de: "Fesselnde Gier",
                "pt-br": "Ganância Vinculante",
                "zh-tw": "束縛貪婪",
                pt: "Gula Aprisionante"
            },
            damage: "90",
            cost: ["Grass", "Grass", "Grass", "Colorless"],
            effect: {
                en: "During your opponent's next turn, attacks used by the Defending Pokémon cost {C}{C} more.",
                fr: "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur coûtent {C}{C} de plus.",
                es: "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor cuestan {C}{C} más.",
                it: "Durante il prossimo turno del tuo avversario, il costo degli attacchi usati dal Pokémon difensore aumenta di {C}{C}.",
                de: "Während des nächsten Zuges deines Gegners erhöhen sich die Kosten der vom Verteidigenden Pokémon eingesetzten Attacken um {C}{C}.",
                "pt-br": "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor custarão {C}{C} a mais.",
                "zh-tw": "在對手的下一個回合中，防禦寶可夢使用的攻擊會花費更多 {C}{C} 的費用。",
                pt: "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor custarão {C}{C} a mais."
            },
        },
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20",
        },
    ],
    retreat: 3,
};
export default card;
