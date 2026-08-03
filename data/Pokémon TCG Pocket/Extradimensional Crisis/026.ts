import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3a/026",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3a/026",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3a/026",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3a/026",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3a/026",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3a/026"
    },
    name: {
        en: "Morelull",
        "fr": "Spododo",
        "es": "Morelull",
        "it": "Morelull",
        "de": "Bubungus",
        "pt-br": "Morelull",
        "zh-tw": "睡睡菇",
    },
    illustrator: "Midori Harada",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Psychic"],
    description: {
        en: "It scatters spores that flicker and glow. Anyone\nseeing these lights falls into a deep slumber.",
        "fr": "Il disperse des spores qui scintillent et brillent. N'importe qui\nvoir ces lumières tombe dans un profond sommeil.",
        "es": "Esparce esporas que parpadean y brillan. cualquiera\nAl ver estas luces cae en un profundo sueño.",
        "it": "Disperde spore che tremolano e brillano. Chiunque\nvedendo queste luci cado in un sonno profondo.",
        "de": "Es verstreut Sporen, die flackern und leuchten. Jedermann\nBeim Anblick dieser Lichter fällt man in einen tiefen Schlaf.",
        "pt-br": "Ele espalha esporos que tremeluzem e brilham. Qualquer um\nver essas luzes cai em um sono profundo.",
        "zh-tw": "它會散佈閃爍和發光的孢子。任何人\n看到這些燈光就陷入了沉睡。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Hook",
                "fr": "Crochet",
                "es": "Gancho",
                "it": "Gancio",
                "de": "Haken",
                "pt-br": "Gancho",
                "zh-tw": "鉤"
            },
            damage: 20,
            cost: ["Psychic"]
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1
};
export default card;
