import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/036"
    },
    name: {
        en: "Wailmer",
        fr: "Wailmer",
        es: "Wailmer",
        it: "Wailmer",
        de: "Wailmer",
        "pt-br": "Wailmer",
        "zh-tw": "吼吼鯨",
        ko: "고래왕자",
        ja: "ホエルコ"
    },
    illustrator: "kodama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Water"],
    dexId: [320],
    stage: "Basic",
    description: {
        en: "When it sucks in a large volume of seawater, it becomes like a big, bouncy ball. It eats a ton of food daily.",
        fr: "Il ressemble à un énorme ballon quand il avale\nde très grandes quantités d’eau de mer.\nIl dévore une tonne de nourriture par jour.",
        es: "Cuando traga una gran cantidad de agua marina,\nse hincha hasta parecer una pelota. Necesita una\ntonelada de alimento al día.",
        it: "Se inghiotte molta acqua diventa una specie\ndi palla rimbalzante. Ha bisogno di una\ntonnellata di cibo al giorno.",
        de: "Verschluckt es eine große Menge Meerwasser,\nwird sein Körper elastisch wie ein Ball. Es frisst\ntäglich eine Tonne Nahrung.",
        "zh-tw": "喝入大量的海水之後，\n身體會鼓成像球一樣。\n每天要吃掉１噸的食物。"
    },
    attacks: [
        {
            cost: ["Water", "Water", "Water"],
            name: {
                en: "Wave Splash",
                fr: "Grosse Vague",
                es: "Chapoteo Ondulante",
                it: "Schizzi d'Onda",
                de: "Wellenplatscher",
                "pt-br": "Onda Borrifante",
                "zh-tw": "飛濺"
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
