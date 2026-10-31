import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/102",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/102",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/102",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/102",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/102",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/102",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/102",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/102"
    },
    name: {
        en: "Pidgey",
        fr: "Roucool",
        es: "Pidgey",
        "pt-br": "Pidgey",
        "zh-tw": "波波",
        ja: "ポッポ",
        ko: "구구",
        it: "Pidgey",
        de: "Taubsi"
    },
    illustrator: "Naoyo Kimura",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 60,
    types: [
        "Colorless"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Find a Friend",
                fr: "Trouver un Ami",
                es: "Encontrar un Amigo",
                it: "Trovamico",
                de: "Freunde finden",
                "pt-br": "Encontre um Amigo",
                "zh-tw": "尋找朋友",
                ja: "ともだちをさがす",
                ko: "Find a Friend"
            },
            cost: [
                "Colorless"
            ],
            effect: {
                en: "Put 1 random {C} Pokémon from your deck into your hand.",
                fr: "Ajoutez au hasard un Pokémon {C} de votre deck à votre main.",
                es: "Pon 1 Pokémon {C} aleatorio de tu baraja en tu mano.",
                it: "Prendi un Pokémon {C} a caso dal tuo mazzo e aggiungilo alle carte che hai in mano.",
                de: "Nimm 1 zufälliges {C}-Pokémon aus deinem Deck auf deine Hand.",
                "pt-br": "Coloque 1 Pokémon {C} aleatório do seu baralho na sua mão.",
                "zh-tw": "從自己的牌庫隨機將1張{C}寶可夢卡加入手牌。",
                ja: "自分の山札から{C}ポケモンをランダムに1枚、手札に加える。",
                ko: "Put 1 random {C} Pokémon from your deck into your hand."
            }
        }
    ],
    abilities: [],
    description: {
        en: "A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.",
        fr: "On l’aperçoit souvent dans les forêts. Avec ses ailes, il brasse l’air près du sol pour projeter du sable.",
        es: "Muy común en bosques y selvas. Aletea al nivel del suelo para levantar la gravilla.",
        it: "Molto comune in boschi e foreste, sbatte le ali a livello del suolo per sollevare sabbia accecante.",
        de: "Ein vorwiegend in Wäldern lebendes Pokémon, das zur Verteidigung mit den Flügeln Sand aufwirbelt.",
        "pt-br": "Uma visão comum nas florestas. Ele agita suas asas no chão para levantar uma areia cegante.",
        "zh-tw": "大量分布在森林或樹叢中。即使停在地上，有時也會用力拍打翅膀激起沙子。",
        ja: "森や 林に 多く 分布。 地上でも 激しく はばたいて 砂を かけたりする。",
        ko: "A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand."
    }
};

export default card;
