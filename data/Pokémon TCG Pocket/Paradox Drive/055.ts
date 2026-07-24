import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/055",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/055"
    },
    name: {
        en: "Raging Bolt",
        fr: "Ire-Foudre",
        es: "Electrofuria",
        it: "Furiatonante",
        de: "Furienblitz",
        "pt-br": "Raio Fúria",
        "zh-tw": "猛雷鼓",
        ko: "날뛰는우레",
        ja: "タケルライコ"
    },
    illustrator: "matazo",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Dragon"],
    dexId: [1021],
    stage: "Basic",
    description: {
        en: "It bears resemblance to a Pokémon that became a hot topic for a short while after a paranormal magazine touted it as Raikou’s ancestor.",
        fr: "Il ressemble à un Pokémon qui est devenu un sujet brûlant pendant une courte période après qu'un magazine paranormal l'ait présenté comme l'ancêtre de Raikou.",
        es: "Se parece a un Pokémon que se convirtió en un tema candente durante un tiempo después de que una revista paranormal lo promocionara como el antepasado de Raikou.",
        it: "Assomiglia a un Pokémon che è diventato un argomento caldo per un breve periodo dopo che una rivista sul paranormale lo ha pubblicizzato come l'antenato di Raikou.",
        de: "Es hat Ähnlichkeit mit einem Pokémon, das für kurze Zeit ein heißes Thema wurde, nachdem ein paranormales Magazin es als Raikous Vorfahren angepriesen hatte.",
        "pt-br": "Ele se parece com um Pokémon que se tornou um tema quente por um curto período de tempo depois que uma revista paranormal o considerou o ancestral de Raikou.",
        "zh-tw": "它與一隻寶可夢很相似，在超自然雜誌將其吹捧為 雷公 的祖先後，該寶可夢一度成為熱門話題。"
    },
    attacks: [
        {
            cost: ["Water", "Water", "Lightning", "Lightning", "Colorless"],
            name: {
                en: "Baneful Boom",
                fr: "Boum funeste",
                es: "Auge funesto",
                it: "Boom dannoso",
                de: "Verhängnisvoller Boom",
                "pt-br": "Boom Nefasto",
                "zh-tw": "轟雷必殺"
            },
            effect: {
                en: "Discard all Energy from this Pokémon. Knock Out your opponent's Active Pokémon.",
                fr: "Défaussez toute l'énergie de ce Pokémon. Mettez KO le Pokémon Actif de votre adversaire.",
                es: "Descarta toda la Energía de este Pokémon. Noquea al Pokémon activo de tu rival.",
                it: "Scarta tutte le Energie da questo Pokémon. Metti KO il Pokémon attivo del tuo avversario.",
                de: "Lege die gesamte Energie dieses Pokémon ab. Knocke das aktive Pokémon deines Gegners aus.",
                "pt-br": "Descarte todas as Energias deste Pokémon. Nocauteie o Pokémon Ativo do seu oponente.",
                "zh-tw": "丟棄該寶可夢的所有能量。擊倒對手的活躍寶可夢。"
            }
        }
    ],
    retreat: 3
};

export default card;
