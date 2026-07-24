import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/121",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/121"
    },
    name: {
        en: "Magearna",
        fr: "Magearna",
        es: "Magearna",
        it: "Magearna",
        de: "Magearna",
        "pt-br": "Magearna",
        "zh-tw": "瑪機雅娜",
        ko: "마기아나",
        ja: "マギアナ"
    },
    illustrator: "AKIRA EGAWA",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Metal"],
    dexId: [801],
    stage: "Basic",
    description: {
        en: "Built roughly 500 years ago by a scientist, the part called the Soul-Heart is the actual life-form.",
        fr: "Il a été créé par un scientifique il y a environ\n500 ans de cela. Sa véritable essence est\nun organe nommé Animacœur.",
        es: "Pokémon artificial creado por científicos hace\nunos 500 años. Su verdadera esencia es una\npieza llamada Coránima.",
        it: "Fu costruito circa 500 anni fa da uno scienziato.\nLa sua vera essenza si trova in un componente\nchiamato “Cuoreanima”.",
        de: "Es wurde vor ungefähr 500 Jahren von einem\nWissenschaftler erschaffen. Sein eigentlicher\nKörper ist der als „Seelenherz“ bezeichnete Teil.",
        "pt-br": "Construída há cerca de 500 anos por um cientista, a parte chamada Alma-Coração é a verdadeira forma de vida.",
        "zh-tw": "由大約５００年前的\n科學家所製造。\n本體是被稱為魂心的零件。"
    },
    attacks: [
        {
            cost: ["Metal", "Metal"],
            name: {
                en: "Windup Cannon",
                fr: "Canon à Remontoir",
                es: "Cañón de Cuerda",
                it: "Cannone Caricato",
                de: "Aufziehkanone",
                "pt-br": "Canhão de Corda",
                "zh-tw": "機關加農炮"
            },
            effect: {
                en: "This attack does 20 more damage for each of your opponent's Benched Pokémon.",
                fr: "Cette attaque inflige 20 dégâts supplémentaires pour chacun des Pokémon de Banc de votre adversaire.",
                es: "Este ataque hace 20 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
                it: "Questo attacco infligge 20 danni in più per ciascuno dei Pokémon nella panchina del tuo avversario.",
                de: "Dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners 20 weitere Schadenspunkte zu.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada Pokémon no Banco do seu oponente.",
                "zh-tw": "這次攻擊對對手的後備寶可夢每造成 20 點額外傷害。"
            },
            damage: "20+"
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
