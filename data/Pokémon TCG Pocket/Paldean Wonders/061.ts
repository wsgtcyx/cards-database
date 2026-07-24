import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    name: {
        en: "Klawf",
        fr: "Craparoi",
        es: "Klawf",
        it: "Klawf",
        de: "Klibbe",
        "pt-br": "Klawf",
        "zh-tw": "毛崖蟹",
        pt: "Klawf",
        'es-mx': "Klawf"
    },
    illustrator: "nagimiso",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fighting"],
    dexId: [950],
    description: {
        en: "This Pokémon lives on sheer cliffs. It sidesteps opponents’ attacks, then lunges for their weak spots with its claws.",
        "fr": "Ce Pokémon vit sur des falaises abruptes. Il évite les attaques de ses adversaires, puis se jette sur leurs points faibles avec ses griffes.",
        "es": "Este Pokémon vive en acantilados escarpados. Esquiva los ataques de sus oponentes y luego ataca sus puntos débiles con sus garras.",
        "it": "Questo Pokémon vive su scogliere a picco. Evita gli attacchi degli avversari, quindi si lancia verso i loro punti deboli con i suoi artigli.",
        "de": "Dieses Pokémon lebt auf steilen Klippen. Es weicht den Angriffen der Gegner aus und stürzt sich dann mit seinen Krallen auf deren Schwachstellen.",
        "pt-br": "Este Pokémon vive em penhascos íngremes. Ele evita os ataques dos oponentes e depois ataca seus pontos fracos com suas garras.",
        "zh-tw": "這隻寶可夢住在陡峭的懸崖上。它會避開對手的攻擊，然後用爪子刺向他們的弱點。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Adrenaline Hammer",
                fr: "Marteau Adrénaline",
                es: "Martillo Adrenalina",
                it: "Martello Adrenalinico",
                de: "Adrenalinhammer",
                "pt-br": "Martelo de adrenalina",
                "zh-tw": "腎上腺素錘",
                pt: "Martelo de Adrenalina"
            },
            damage: "70",
            cost: ["Fighting", "Fighting"],
            effect: {
                en: "This Pokémon is now Confused.",
                fr: "Ce Pokémon est maintenant Confus.",
                es: "Este Pokémon pasa a estar Confundido.",
                it: "Questo Pokémon viene confuso.",
                de: "Dieses Pokémon ist jetzt verwirrt.",
                "pt-br": "Este Pokémon agora está Confuso.",
                "zh-tw": "這隻寶可夢現在處於混亂狀態。",
                pt: "Este Pokémon agora está Confuso."
            },
        },
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20",
        },
    ],
    retreat: 3,
};
export default card;
