import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/203",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/203"
    },
    name: {
        en: "Sobble",
        fr: "Larméléon",
        es: "Sobble",
        it: "Sobble",
        de: "Memmeon",
        "pt-br": "Sobble",
        "zh-tw": "淚眼蜥",
        ko: "울머기",
        ja: "メッソン"
    },
    illustrator: "Narumi Sato",
    rarity: "Three Star",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    dexId: [816],
    stage: "Basic",
    description: {
        en: "It’s a very cautious Pokémon. When it has no choice but to battle, it hides itself before attacking.",
        fr: "C'est un Pokémon très prudent. Lorsqu’il n’a d’autre choix que de se battre, il se cache avant d’attaquer.",
        es: "Es un Pokémon muy cauteloso. Cuando no tiene más remedio que luchar, se esconde antes de atacar.",
        it: "È un Pokémon molto cauto. Quando non ha altra scelta che combattere, si nasconde prima di attaccare.",
        de: "Es ist ein sehr vorsichtiges Pokémon. Wenn es keine andere Wahl hat, als zu kämpfen, versteckt es sich, bevor es angreift.",
        "pt-br": "É um Pokémon muito cauteloso. Quando não tem escolha a não ser lutar, ele se esconde antes de atacar.",
        "zh-tw": "是非常謹慎的寶可夢。當它別無選擇只能戰鬥時，它會在攻擊前隱藏自己。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Find a Friend",
                fr: "Trouver un Ami",
                es: "Encontrar un Amigo",
                it: "Trovamico",
                de: "Freunde finden",
                "pt-br": "Encontre um Amigo",
                "zh-tw": "尋找朋友"
            },
            effect: {
                en: "Put a random Pokémon from your deck into your hand.",
                fr: "Mettez un Pokémon aléatoire de votre deck dans votre main.",
                es: "Pon un Pokémon aleatorio de tu mazo en tu mano.",
                it: "Metti nella tua mano un Pokémon casuale dal tuo mazzo.",
                de: "Nimm ein zufälliges Pokémon aus deinem Deck auf deine Hand.",
                "pt-br": "Coloque um Pokémon aleatório do seu baralho na sua mão.",
                "zh-tw": "從你的牌組中隨機將一隻寶可夢放入你的手牌。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
