import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/130",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/130",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/130",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/130",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/130",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/130",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/130"
    },
    name: {
        en: "Boldore",
        fr: "Géolithe",
        es: "Boldore",
        it: "Boldore",
        de: "Sedimantur",
        "pt-br": "Boldore",
        "zh-tw": "地幔岩",
        ja: "ガントル",
        ko: "암트르"
    },
    illustrator: "Masakazu Fukuda",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: [
        "Fighting"
    ],
    evolveFrom: {
        en: "Roggenrola",
        fr: "Nodulithe",
        es: "Roggenrola",
        it: "Roggenrola",
        de: "Kiesling",
        "pt-br": "Roggenrola",
        "zh-tw": "石丸子",
        ja: "Roggenrola",
        ko: "Roggenrola"
    },
    description: {
        en: "It relies on sound in order to monitor what's in its\nvicinity. When angered, it will attack without ever\nchanging the direction it's facing.",
        fr: "Il sonde les environs grâce au son. Lorsqu'un importun le met en colère, il se lance à sa poursuite sans changer l'orientation de son corps.",
        es: "Se vale del sonido para percibir el entorno. Si alguien despierta su ira, lo perseguirá sin cambiar la orientación del cuerpo.",
        it: "Perlustra la zona intorno a sé servendosi dei rumori. Se irritato, insegue chi lo ha importunato senza cambiare orientamento del corpo.",
        de: "Es nimmt die Umgebung über akustische Reize wahr. Ärgerliche Störenfriede kann es verfolgen, ohne sich ihnen zuwenden zu müssen.",
        "pt-br": "Depende de sons para monitorar as proximidades. Quando enraivecido, ataca sem sequer mudar de direção.",
        "zh-tw": "透過聲音來探測四周。要是惹牠生氣了，牠會連身體方向也不轉就朝你追來。",
        ja: "It relies on sound in order to monitor what's in its\nvicinity. When angered, it will attack without ever\nchanging the direction it's facing.",
        ko: "It relies on sound in order to monitor what's in its\nvicinity. When angered, it will attack without ever\nchanging the direction it's facing."
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Power Gem",
                fr: "Rayon Gemme",
                es: "Joya de Luz",
                it: "Gemmoforza",
                de: "Juwelenkraft",
                "pt-br": "Gema Poderosa",
                "zh-tw": "力量寶石",
                ja: "Power Gem",
                ko: "Power Gem"
            },
            damage: 70,
            cost: [
                "Fighting",
                "Fighting",
                "Colorless"
            ]
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
