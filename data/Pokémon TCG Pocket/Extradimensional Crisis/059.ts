import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Oranguru",
        "fr": "Orangourou",
        "es": "orangurú",
        "it": "Oranguru",
        "de": "Oranguru",
        "pt-br": "Orangotango",
        "zh-tw": "奧蘭古魯"
    },
    illustrator: "Kouki Saitou",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Colorless"],
    description: {
        en: "It normally spends its time meditating in the\ntreetops. It throws Poké Balls and gives other\nPokémon orders as it pleases.",
        "fr": "Il passe normalement son temps à méditer dans\ncime des arbres. Il lance des Poké Balls et donne d'autres\nPokémon commande à sa guise.",
        "es": "Normalmente pasa su tiempo meditando en el\ncopas de los árboles. Lanza Poké Balls y da otras.\nPokémon ordena lo que quiere.",
        "it": "Normalmente trascorre il suo tempo meditando nel\ncime degli alberi. Lancia Poké Ball e ne dà altre\nI Pokémon ordinano come vogliono.",
        "de": "Normalerweise verbringt es seine Zeit mit Meditation\nBaumwipfel. Es wirft Pokébälle und gibt andere\nPokémon bestellt nach Belieben.",
        "pt-br": "Normalmente passa seu tempo meditando no\ncopas das árvores. Ele joga Pokébolas e dá outras\nPokémon ordena como quiser.",
        "zh-tw": "它通常花時間冥想\n樹梢。它會扔出精靈球並給予其他人\n神奇寶貝隨心所欲地命令。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Hammer In",
                "fr": "Marteler",
                "es": "Martillo adentro",
                "it": "Martella dentro",
                "de": "Einschlagen",
                "pt-br": "Martelo",
                "zh-tw": "錘入"
            },
            damage: 70,
            cost: ["Colorless", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
