import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/125",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/125",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/125",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/125",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/125",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/125",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/125"
    },
    name: {
        en: "Vibrava",
        fr: "Vibraninf",
        es: "Vibrava",
        it: "Vibrava",
        de: "Vibrava",
        "pt-br": "Vibrava",
        "zh-tw": "超音波幼蟲",
        ko: "비브라바",
        ja: "ビブラーバ"
    },
    illustrator: "Tomokazu Komiya",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Dragon"],
    dexId: [329],
    evolveFrom: {
        en: "Trapinch",
        fr: "Kraknoix",
        es: "Trapinch",
        it: "Trapinch",
        de: "Knacklion",
        "pt-br": "Trapinch",
        "zh-tw": "大顎蟻",
        ko: "톱치",
        ja: "ナックラー"
    },
    stage: "Stage1",
    description: {
        en: "It generates ultrasonic waves by vigorously vibrating its wings. After making its prey faint, it dissolves the prey with its digestive juices.",
        fr: "Il génère des ondes ultrasonores en faisant vibrer vigoureusement ses ailes. Après avoir fait évanouir sa proie, il la dissout avec ses sucs digestifs.",
        es: "Genera ondas ultrasónicas al hacer vibrar vigorosamente sus alas. Después de desmayar a su presa, la disuelve con sus jugos digestivos.",
        it: "Genera onde ultrasoniche facendo vibrare vigorosamente le sue ali. Dopo aver fatto svenire la preda, la dissolve con i suoi succhi digestivi.",
        de: "Es erzeugt Ultraschallwellen, indem es seine Flügel kräftig vibrieren lässt. Nachdem es seine Beute ohnmächtig gemacht hat, löst es die Beute mit seinen Verdauungssäften auf.",
        "pt-br": "Ele gera ondas ultrassônicas vibrando vigorosamente suas asas. Depois de desmaiar sua presa, ele a dissolve com seus sucos digestivos.",
        "zh-tw": "它透過劇烈振動翅膀來產生超音波。使獵物暈倒後，用消化液溶解獵物。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Sand Wind",
                fr: "Vent Sablonneux",
                es: "Viento Arena",
                it: "Vento di Sabbia",
                de: "Flugsand",
                "pt-br": "Vento de Areia",
                "zh-tw": "沙風"
            },
            effect: {
                en: "This attack does 10 damage to each of your opponent's Pokémon.",
                fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire.",
                es: "Este ataque hace 10 puntos de daño a cada uno de los Pokémon de tu rival.",
                it: "Questo attacco infligge 10 danni a ciascuno dei Pokémon del tuo avversario.",
                de: "Diese Attacke fügt jedem Pokémon deines Gegners 10 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 10 pontos de dano a cada um dos Pokémon do seu oponente.",
                "zh-tw": "這次攻擊對對手的每隻寶可夢造成 10 點傷害。"
            }
        }
    ],
    retreat: 1
};

export default card;
