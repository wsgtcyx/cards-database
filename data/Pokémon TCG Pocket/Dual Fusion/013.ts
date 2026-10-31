import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/013",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/013",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/013",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/013",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/013",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/013",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/013",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/013"
    },
    name: {
        en: "Genesect",
        fr: "Genesect",
        es: "Genesect",
        "pt-br": "Genesect",
        "zh-tw": "蓋諾賽克特",
        ja: "ゲノセクト",
        ko: "게노세크트",
        it: "Genesect",
        de: "Genesect"
    },
    illustrator: "Masakazu Fukuda",
    rarity: "Two Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 110,
    types: [
        "Grass"
    ],
    stage: "Basic",
    retreat: 2,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Signal Beam",
                fr: "Rayon Signal",
                es: "Rayo Señal",
                it: "Segnoraggio",
                de: "Ampelleuchte",
                "pt-br": "Feixe Sinalizador",
                "zh-tw": "信號光束",
                ja: "シグナルビーム",
                ko: "Signal Beam"
            },
            cost: [
                "Colorless",
                "Colorless",
                "Grass"
            ],
            damage: 60,
            effect: {
                en: "Your opponent's Active Pokémon is now Confused.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
                es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
                it: "Il Pokémon attivo del tuo avversario viene confuso.",
                de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Confuso.",
                "zh-tw": "將對手的戰鬥寶可夢混亂。",
                ja: "相手のバトルポケモンをこんらんにする。",
                ko: "Your opponent's Active Pokémon is now Confused."
            }
        }
    ],
    abilities: [],
    description: {
        en: "This ancient bug Pokémon was altered by Team Plasma. They upgraded the cannon on its back.",
        fr: "Un Pokémon Insecte des temps anciens modifié par la Team Plasma. Le canon dans son dos a été grandement amélioré.",
        es: "Pokémon de tipo Bicho de la antigüedad, modificado por el Equipo Plasma. El cañón de su lomo ha sido mejorado.",
        it: "Antico Pokémon Coleottero modificato dal Team Plasma, che ne ha notevolmente potenziato il cannone sulla schiena.",
        de: "Ein von Team Plasma modifiziertes Käfer-Pokémon aus dem Altertum. Die Kanone auf seinem Rücken ist nun noch stärker.",
        "pt-br": "Este antigo Pokémon Inseto foi alterado pela Equipe Plasma. Eles aprimoraram o canhão nas suas costas.",
        "zh-tw": "被等離子隊改造的古代的蟲寶可夢。背上的大砲力量得到了提升。",
        ja: "プラズマ団によって 改造された 古代の むしポケモン。 背中の 大砲が パワーアップした。",
        ko: "This ancient bug Pokémon was altered by Team Plasma. They upgraded the cannon on its back."
    }
};

export default card;
