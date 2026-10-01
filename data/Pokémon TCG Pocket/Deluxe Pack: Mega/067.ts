import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/067",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/067",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/067",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/067",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/067",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/067",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/067"
    },
    name: {
        en: "Wailmer",
        fr: "Wailmer",
        es: "Wailmer",
        it: "Wailmer",
        de: "Wailmer",
        "pt-br": "Wailmer",
        "zh-tw": "吼吼鯨",
        ja: "ホエルコ",
        ko: "고래왕자"
    },
    illustrator: "kodama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: [
        "Water"
    ],
    dexId: [
        320
    ],
    stage: "Basic",
    description: {
        en: "When it sucks in a large volume of seawater, it becomes like a big, bouncy ball. It eats a ton of food daily.",
        fr: "Il ressemble à un énorme ballon quand il avale de très grandes quantités d'eau de mer. Il dévore une tonne de nourriture par jour.",
        es: "Cuando traga una gran cantidad de agua marina, se hincha hasta parecer una pelota. Necesita una tonelada de alimento al día.",
        it: "Se inghiotte molta acqua diventa una specie di palla rimbalzante. Ha bisogno di una tonnellata di cibo al giorno.",
        de: "Verschluckt es eine große Menge Meerwasser, wird sein Körper elastisch wie ein Ball. Es frisst täglich eine Tonne Nahrung.",
        "zh-tw": "喝入大量的海水之後，身體會鼓成像球一樣。每天要吃掉１噸的食物。",
        "pt-br": "Quando suga um grande volume de água do mar, transforma-se em uma bola grande e saltitante. Come uma tonelada de comida diariamente.",
        ja: "When it sucks in a large volume of seawater, it becomes like a big, bouncy ball. It eats a ton of food daily.",
        ko: "When it sucks in a large volume of seawater, it becomes like a big, bouncy ball. It eats a ton of food daily."
    },
    attacks: [
        {
            cost: [
                "Water",
                "Water",
                "Water"
            ],
            name: {
                en: "Wave Splash",
                fr: "Grosse Vague",
                es: "Chapoteo Ondulante",
                it: "Schizzi d'Onda",
                de: "Wellenplatscher",
                "pt-br": "Onda Borrifante",
                "zh-tw": "飛濺",
                ja: "Wave Splash",
                ko: "Wave Splash"
            },
            damage: 60
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
