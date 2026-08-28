import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/056",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/056",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/056",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/056",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/056",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/056",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/056"
    },
    name: {
        en: "Archaludon",
        fr: "Pondralugon",
        es: "Archaludon",
        it: "Archaludon",
        de: "Briduradon",
        "pt-br": "Archaludon",
        "zh-tw": "鋁鋼橋龍",
        ko: "브리두라스",
        ja: "ブリジュラス"
    },
    illustrator: "Shiburingaru",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Dragon"],
    dexId: [1018],
    evolveFrom: {
        en: "Duraludon",
        fr: "Duralugon",
        es: "Duraludon",
        it: "Duraludon",
        de: "Duraludon",
        "pt-br": "Duraludon",
        "zh-tw": "鋁鋼龍",
        ko: "두랄루돈",
        ja: "ジュラルドン"
    },
    stage: "Stage1",
    description: {
        en: "It digs holes on mountains, searching for food. It's so durable that being caught in a cave-in won't faze it.",
        fr: "Ce Pokémon creuse dans les montagnes à la recherche de nourriture. Il est si robuste qu'être piégé dans un effondrement le laisse indifférent.",
        es: "Excava hoyos en las montañas para procurarse alimento. Su robustez es tal que apenas se inmuta aunque lo afecte de lleno un derrumbe.",
        it: "Scava buchi nelle montagne in cerca di cibo. È talmente robusto che non si fa un graffio neanche se viene travolto da una frana.",
        de: "Auf der Suche nach Futter gräbt es in den Bergen Löcher. Es ist so robust, dass es ihm auch nichts ausmacht, wenn diese über ihm einstürzen.",
        "pt-br": "Cava buracos em montanhas em busca de comida. É tão robusto que, mesmo que fique preso em uma caverna, não ficará incomodado.",
        "zh-tw": "會在山裡挖洞來尋找食物。身體非常堅硬，即使遇到洞穴坍塌也絲毫不會在意。"
    },
    attacks: [
        {
            cost: ["Fighting", "Metal", "Colorless", "Colorless"],
            name: {
                en: "Protect Charge",
                fr: "Recharge Protectrice",
                es: "Carga Protectora",
                it: "Carica Protettiva",
                de: "Schützender Sturmangriff",
                "pt-br": "Carga Protetora",
                "zh-tw": "防護充能"
            },
            effect: {
                en: "During your opponent's next turn, this Pokémon takes -30 damage from attacks.",
                fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit - 30 dégâts provenant des attaques.",
                es: "Durante el próximo turno de tu rival, los ataques hacen ‐30 puntos de daño a este Pokémon.",
                it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -30 danni dagli attacchi.",
                de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken -30 Schadenspunkte zugefügt.",
                "pt-br": "Durante o próximo turno do seu oponente, este Pokémon receberá -30 pontos de dano de ataques.",
                "zh-tw": "在下個對手的回合,這隻寶可夢受到招式的傷害-30點。"
            },
            damage: 110
        }
    ],
    retreat: 3
};

export default card;
