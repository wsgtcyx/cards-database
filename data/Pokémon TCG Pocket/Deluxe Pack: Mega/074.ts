import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/074",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/074",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/074",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/074",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/074",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/074",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/074"
    },
    name: {
        en: "Sobble",
        fr: "Larméléon",
        es: "Sobble",
        it: "Sobble",
        de: "Memmeon",
        "pt-br": "Sobble",
        "zh-tw": "淚眼蜥",
        ja: "メッソン",
        ko: "울머기"
    },
    illustrator: "Hitoshi Ariga",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: [
        "Water"
    ],
    dexId: [
        816
    ],
    stage: "Basic",
    description: {
        en: "It’s a very cautious Pokémon. When it has no choice but to battle, it hides itself before attacking.",
        fr: "Ce Pokémon est très prudent. Quand il ne peut pas échapper au combat, il se camoufle avant d'attaquer.",
        es: "Es tan precavido que, cuando no le queda más remedio que combatir, siempre se camufla antes de atacar.",
        it: "È molto cauto. Quando è costretto a lottare, sferra i suoi attacchi solo dopo essersi mimetizzato.",
        de: "Es ist extrem vorsichtig. Wenn sich ein Kampf nicht vermeiden lässt, greift es erst an, nachdem es sich getarnt hat.",
        "pt-br": "É um Pokémon muito cauteloso. Quando não tem outra saída a não ser batalhar, esconde-se antes de atacar.",
        "zh-tw": "警戒心十分強。遇到無論如何都得戰鬥時，會先讓身影消失再發動攻擊。",
        ja: "It’s a very cautious Pokémon. When it has no choice but to battle, it hides itself before attacking.",
        ko: "It’s a very cautious Pokémon. When it has no choice but to battle, it hides itself before attacking."
    },
    attacks: [
        {
            cost: [
                "Colorless"
            ],
            name: {
                en: "Find a Friend",
                fr: "Trouver un Ami",
                es: "Encontrar un Amigo",
                it: "Trovamico",
                de: "Freunde finden",
                "pt-br": "Encontre um Amigo",
                "zh-tw": "尋找朋友",
                ja: "Find a Friend",
                ko: "Find a Friend"
            },
            effect: {
                en: "Put a random Pokémon from your deck into your hand.",
                fr: "Ajoutez au hasard un Pokémon de votre deck à votre main.",
                es: "Pon Pokémon aleatorio de tu baraja en tu mano.",
                it: "Prendi un Pokémon a caso dal tuo mazzo e aggiungilo alle carte che hai in mano.",
                de: "Nimm 1 zufälliges Pokémon aus deinem Deck auf deine Hand.",
                "pt-br": "Coloque Pokémon aleatório do seu baralho na sua mão.",
                "zh-tw": "從自己的牌庫隨機將張寶可夢卡加入手牌。",
                ja: "Put a random Pokémon from your deck into your hand.",
                ko: "Put a random Pokémon from your deck into your hand."
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
