import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/029",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/029"
    },
    name: {
        en: "Hypno",
        fr: "Hypnomade",
        es: "Hypno",
        it: "Hypno",
        de: "Hypno",
        "pt-br": "Hypno",
        "zh-tw": "引夢貘人",
        ko: "슬리퍼",
        ja: "スリーパー"
    },
    illustrator: "OOYAMA",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Psychic"],
    dexId: [97],
    evolveFrom: {
        en: "Drowzee",
        fr: "Soporifik",
        es: "Drowzee",
        it: "Drowzee",
        de: "Traumato",
        "pt-br": "Drowzee",
        "zh-tw": "催眠貘",
        ko: "슬리프",
        ja: "スリープ"
    },
    stage: "Stage1",
    description: {
        en: "Always holding a pendulum that it swings at a steady rhythm, it causes drowsiness in anyone nearby.",
        fr: "Tenant toujours un pendule qui oscille à un rythme régulier, il provoque la somnolence chez toute personne à proximité.",
        es: "Siempre sosteniendo un péndulo que oscila a un ritmo constante, provoca somnolencia en cualquiera que esté cerca.",
        it: "Tenendo sempre in mano un pendolo che fa oscillare a ritmo costante, provoca sonnolenza in chiunque si trovi nelle vicinanze.",
        de: "Halten Sie immer ein Pendel in der Hand, damit es in einem gleichmäßigen Rhythmus schwingt, was bei jedem in der Nähe Schläfrigkeit hervorruft.",
        "pt-br": "Sempre segurando um pêndulo que balança em um ritmo constante, causa sonolência em quem estiver por perto.",
        "zh-tw": "總是拿著一個以穩定節奏擺動的鐘擺，它會導致附近的任何人昏昏欲睡。"
    },
    attacks: [
        {
            cost: ["Psychic", "Colorless", "Colorless"],
            name: {
                en: "Hypnoblast",
                fr: "Hypnoblast",
                es: "Hipnorrayo",
                it: "Ipnobomba",
                de: "Hypnoschuss",
                "pt-br": "Borrifada Hipnótica",
                "zh-tw": "催眠波動"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Asleep.",
                fr: "Le Pokémon Actif de votre adversaire est désormais Endormi.",
                es: "El Pokémon Activo de tu rival ahora está Dormido.",
                it: "Il Pokémon attivo del tuo avversario è addormentato.",
                de: "Das aktive Pokémon deines Gegners schläft jetzt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Adormecido.",
                "zh-tw": "你對手的活躍寶可夢現在處於睡眠狀態。"
            },
            damage: 60
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
