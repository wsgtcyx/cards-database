import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/100",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/100",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/100",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/100",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/100",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/100"
    },
    name: {
        en: "Klawf",
        fr: "Craparoi",
        es: "Klawf",
        it: "Klawf",
        de: "Klibbe",
        "pt-br": "Klawf",
        "zh-tw": "毛崖蟹",
        ko: "절벼게",
        ja: "ガケガニ"
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 100,
    types: ["Fighting"],
    dexId: [950],
    stage: "Basic",
    description: {
        en: "This Pokémon lives on sheer cliffs. It sidesteps opponents’ attacks, then lunges for their weak spots with its claws.",
        fr: "Ce Pokémon vit sur des falaises abruptes. Il évite les attaques de ses adversaires, puis se jette sur leurs points faibles avec ses griffes.",
        es: "Este Pokémon vive en acantilados escarpados. Esquiva los ataques de sus oponentes y luego ataca sus puntos débiles con sus garras.",
        it: "Questo Pokémon vive su scogliere a picco. Evita gli attacchi degli avversari, quindi si lancia verso i loro punti deboli con i suoi artigli.",
        de: "Dieses Pokémon lebt auf steilen Klippen. Es weicht den Angriffen der Gegner aus und stürzt sich dann mit seinen Krallen auf deren Schwachstellen.",
        "pt-br": "Este Pokémon vive em penhascos íngremes. Ele evita os ataques dos oponentes e depois ataca seus pontos fracos com suas garras.",
        "zh-tw": "這隻寶可夢住在陡峭的懸崖上。它會避開對手的攻擊，然後用爪子刺向他們的弱點。"
    },
    attacks: [
        {
            cost: ["Fighting", "Fighting"],
            name: {
                en: "Adrenaline Hammer",
                fr: "Marteau Adrénaline",
                es: "Martillo Adrenalina",
                it: "Martello Adrenalinico",
                de: "Adrenalinhammer",
                "pt-br": "Martelo de Adrenalina",
                "zh-tw": "腎上腺錘"
            },
            effect: {
                en: "This Pokémon is now Confused.",
                fr: "Ce Pokémon est maintenant Confus.",
                es: "Este Pokémon pasa a estar Confundido.",
                it: "Questo Pokémon viene confuso.",
                de: "Dieses Pokémon ist jetzt verwirrt.",
                "pt-br": "Este Pokémon agora está Confuso.",
                "zh-tw": "這隻寶可夢現在處於混亂狀態。"
            },
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
