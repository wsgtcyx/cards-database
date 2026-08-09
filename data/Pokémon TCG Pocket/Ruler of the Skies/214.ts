import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/214",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/214",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/214",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/214",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/214",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/214",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/214"
    },
    name: {
        en: "Boldore",
        fr: "Géolithe",
        es: "Boldore",
        it: "Boldore",
        de: "Sedimantur",
        "pt-br": "Boldore",
        "zh-tw": "地幔岩",
        ko: "암트르",
        ja: "ガントル"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 100,
    types: ["Fighting"],
    dexId: [525],
    evolveFrom: {
        en: "Roggenrola",
        fr: "Nodulithe",
        es: "Roggenrola",
        it: "Roggenrola",
        de: "Kiesling",
        "pt-br": "Roggenrola",
        "zh-tw": "石丸子",
        ko: "단굴",
        ja: "ダンゴロ"
    },
    stage: "Stage1",
    description: {
        en: "It relies on sound in order to monitor what’s in its vicinity. When angered, it will attack without ever changing the direction it’s facing.",
        fr: "Il sonde les environs grâce au son. Lorsqu’un\nimportun le met en colère, il se lance à sa\npoursuite sans changer l’orientation de son corps.",
        es: "Se vale del sonido para percibir el entorno. Si\nalguien despierta su ira, lo perseguirá sin cambiar\nla orientación del cuerpo.",
        it: "Perlustra la zona intorno a sé servendosi dei\nrumori. Se irritato, insegue chi lo ha importunato\nsenza cambiare orientamento del corpo.",
        de: "Es nimmt die Umgebung über akustische Reize\nwahr. Ärgerliche Störenfriede kann es verfolgen,\nohne sich ihnen zuwenden zu müssen.",
        "pt-br": "Depende de sons para monitorar as proximidades. Quando enraivecido, ataca sem sequer mudar de direção.",
        "zh-tw": "透過聲音來探測四周。\n要是惹牠生氣了，牠會連\n身體方向也不轉就朝你追來。"
    },
    attacks: [
        {
            cost: ["Fighting", "Fighting", "Colorless"],
            name: {
                en: "Power Gem",
                fr: "Rayon Gemme",
                es: "Joya de Luz",
                it: "Gemma del potere",
                de: "Kraftjuwel",
                "pt-br": "Gema Poderosa",
                "zh-tw": "力量寶石"
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
