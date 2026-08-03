import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/232",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/232",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/232",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/232",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/232",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/232",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/232"
    },
    name: {
        en: "Mega Steelix ex",
        fr: "Méga-Steelix-ex",
        es: "Mega-Steelix ex",
        it: "Mega Steelix-ex",
        de: "Mega-Stahlos-ex",
        "pt-br": "Mega Steelix ex",
        "zh-tw": "超級大鋼蛇ex",
        ko: "메가강철톤 ex",
        ja: "メガハガネールex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 220,
    types: ["Metal"],
    dexId: [208],
    evolveFrom: {
        en: "Onix",
        fr: "Onix",
        es: "Onix",
        it: "Onix",
        de: "Onix",
        "pt-br": "Onix",
        "zh-tw": "大岩蛇",
        ko: "롱스톤",
        ja: "イワーク"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: ["Metal", "Metal", "Colorless", "Colorless"],
            name: {
                en: "Adamantine Rolling",
                fr: "Roulade Diamantine",
                es: "Rotación Adamantina",
                it: "Rotolata Adamantina",
                de: "Stahlhartes Rollen",
                "pt-br": "Rolagem Adamantina",
                "zh-tw": "堅身回轉"
            },
            effect: {
                en: "During your opponent's next turn, this Pokémon takes -20 damage from attacks and has no Weakness.",
                fr: "Lors du prochain tour de votre adversaire, ce Pokémon subit -20 dégâts des attaques et n'a aucune Faiblesse.",
                es: "Durante el próximo turno de tu rival, este Pokémon recibe -20 de daño por ataques y no tiene Debilidad.",
                it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -20 danni dagli attacchi e non ha debolezza.",
                de: "Während des nächsten Zuges deines Gegners erleidet dieses Pokémon -20 Schaden durch Angriffe und hat keine Schwäche.",
                "pt-br": "Durante o próximo turno do seu oponente, este Pokémon sofrerá -20 de dano de ataques e não terá Fraqueza.",
                "zh-tw": "在對手的下一個回合中，這隻寶可夢受到的攻擊傷害為-20，並且沒有弱點。"
            },
            damage: 120
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 4
};

export default card;
