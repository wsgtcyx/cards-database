import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Purrloin",
        "fr": "Pourrondi",
        "es": "ronroneo",
        "it": "Purrloin",
        "de": "Schnurren",
        "pt-br": "Purrloin",
        "zh-tw": "扒手貓",
    },
    illustrator: "Kouki Saitou",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    description: {
        en: "Opponents that get drawn in by its adorable\nbehavior come away with stinging scratches from\nits claws and stinging pride from its laughter.",
        "fr": "Des adversaires attirés par son adorable\nle comportement s'en va avec des égratignures cuisantes de\nses griffes et la fierté piquante de son rire.",
        "es": "Oponentes que se sienten atraídos por su adorable\ncomportamiento sale con rasguños punzantes de\nsus garras y el orgullo punzante de su risa.",
        "it": "Avversari che vengono attratti dalla sua adorabile\ncomportamento viene via con graffi pungenti\ni suoi artigli e l'orgoglio pungente delle sue risate.",
        "de": "Gegner, die sich von seiner Liebenswürdigkeit anziehen lassen\nVerhalten kommt mit stechenden Kratzern weg\nseine Krallen und der stechende Stolz seines Lachens.",
        "pt-br": "Oponentes que são atraídos por seu adorável\ncomportamento sai com arranhões dolorosos de\nsuas garras e o orgulho pungente de sua risada.",
        "zh-tw": "被其可愛所吸引的對手\n行為會隨著刺痛的划痕而消失\n它的爪子和笑聲帶來的刺痛的驕傲。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Playful Knockdown",
                "fr": "Renversement ludique",
                "es": "Derribo juguetón",
                "it": "Atterramento giocoso",
                "de": "Spielerischer Knockdown",
                "pt-br": "Nocaute brincalhão",
                "zh-tw": "有趣的擊倒"
            },
            cost: ["Darkness"],
            effect: {
                en: "Discard all Pokémon Tools from your opponent's Active Pokémon.",
                "fr": "Défaussez tous les outils Pokémon du Pokémon actif de votre adversaire.",
                "es": "Descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
                "it": "Scarta tutti gli Strumenti Pokémon dal Pokémon attivo del tuo avversario.",
                "de": "Lege alle Pokémon-Werkzeuge vom aktiven Pokémon deines Gegners ab.",
                "pt-br": "Descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente.",
                "zh-tw": "丟棄對手的活躍神奇寶貝中的所有神奇寶貝工具。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
