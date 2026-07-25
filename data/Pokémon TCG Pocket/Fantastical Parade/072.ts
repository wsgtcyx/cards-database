import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/072",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/072",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/072",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/072",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/072"
    },
    name: {
        en: "Gourgeist",
        "fr": "Gourgeiste",
        "es": "goloso",
        "it": "Gourgeist",
        "de": "Gourgeist",
        "pt-br": "Gourgeist",
        "zh-tw": "美食家"
    },
    illustrator: "kirisAki",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Psychic"],
    evolveFrom: {
        en: "Pumpkaboo",
        "fr": "Citrouille",
        "es": "calabaza",
        "it": "Pumpkaboo",
        "de": "Kürbis",
        "pt-br": "Abóbora",
        "zh-tw": "南瓜布"
    },
    description: {
        en: "In the darkness of a new-moon night, Gourgeist\nwill come knocking. Whoever answers the door\nwill be swept off to the afterlife.",
        "fr": "Dans l'obscurité d'une nuit de nouvelle lune, Gourgeist\nviendra frapper. Celui qui répond à la porte\nsera emporté vers l’au-delà.",
        "es": "En la oscuridad de una noche de luna nueva, Gourgeist\nvendrá a tocar. Quien abra la puerta\nserá arrastrado al más allá.",
        "it": "Nell'oscurità di una notte di luna nuova, Gourgeist\nverrà a bussare. Chiunque risponda alla porta\nverrà spazzato via nell'aldilà.",
        "de": "In der Dunkelheit einer Neumondnacht, Gourgeist\nwird anklopfen. Wer auch immer die Tür öffnet\nwird ins Jenseits geschwemmt.",
        "pt-br": "Na escuridão de uma noite de lua nova, Gourgeist\nvirá bater. Quem atende a porta\nserá levado para a vida após a morte.",
        "zh-tw": "在新月之夜的黑暗中，美食家\n會來敲門。誰來開門\n將會被掃到來世。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Soul Shot",
                "fr": "Tir d'âme",
                "es": "Disparo del alma",
                "it": "Colpo dell'anima",
                "de": "Seelenschuss",
                "pt-br": "Tiro de alma",
                "zh-tw": "靈魂射擊"
            },
            damage: 70,
            cost: ["Psychic"],
            effect: {
                en: "Discard a card from your hand. If you can't, this attack does nothing.",
                "fr": "Défaussez une carte de votre main. Si vous n’y parvenez pas, cette attaque ne fait rien.",
                "es": "Descarta una carta de tu mano. Si no puedes, este ataque no hace nada.",
                "it": "Scarta una carta dalla tua mano. Se non puoi, questo attacco non ha alcun effetto.",
                "de": "Wirf eine Karte aus deiner Hand ab. Wenn Sie das nicht können, bewirkt dieser Angriff nichts.",
                "pt-br": "Descarte uma carta da sua mão. Se não conseguir, este ataque não fará nada.",
                "zh-tw": "棄掉你手上的一張牌。如果你做不到，那麼這次攻擊就沒有任何作用。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 2
};
export default card;
