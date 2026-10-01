import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/311",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/311",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/311",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/311",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/311",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/311",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/311"
    },
    name: {
        en: "Klefki",
        fr: "Trousselin",
        es: "Klefki",
        it: "Klefki",
        de: "Clavion",
        "pt-br": "Klefki",
        "zh-tw": "鑰圈兒",
        ja: "クレッフィ",
        ko: "클레피"
    },
    illustrator: "Shigenori Negishi",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 50,
    types: [
        "Psychic"
    ],
    description: {
        en: "In the past, noble families entrusted their vault\nkeys to a Klefki. They passed the Klefki down\nthrough the generations, taking good care of it.",
        fr: "Autrefois, les familles nobles lui confiaient les clés de leurs coffres-forts et prenaient grand soin de lui de génération en génération.",
        es: "En el pasado, las familias pudientes confiaban las llaves de sus cajas fuertes a un Klefki y lo cuidaban de generación en generación.",
        it: "Tempo fa, le famiglie nobili affidavano ai Klefki le chiavi delle loro casseforti e si prendevano cura di questi Pokémon per generazioni.",
        de: "Früher wurden Clavion von Adelsfamilien als Wächter für Tresorschlüssel geschätzt und über Generationen hinweg weitergegeben und umhegt.",
        "pt-br": "Antigamente, famílias nobres confiavam as chaves de seus cofres a um Klefki. Este Klefki era passado de geração em geração, sendo sempre muito bem cuidado.",
        "zh-tw": "過去的貴族會將掌管金庫鑰匙的鑰圈兒一代代地傳承下去，並對其呵護備至。",
        ja: "In the past, noble families entrusted their vault\nkeys to a Klefki. They passed the Klefki down\nthrough the generations, taking good care of it.",
        ko: "In the past, noble families entrusted their vault\nkeys to a Klefki. They passed the Klefki down\nthrough the generations, taking good care of it."
    },
    stage: "Basic",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Dismantling Keys",
                fr: "Clés Séparatrices",
                es: "Llaves Desacopladoras",
                it: "Scasspartout",
                de: "Zerlegende Schlüssel",
                "pt-br": "Chaves do Desmantelamento",
                "zh-tw": "分解鑰匙",
                ja: "Dismantling Keys",
                ko: "Dismantling Keys"
            },
            effect: {
                en: "Once during your turn, if this Pokémon is on your Bench, you may discard all Pokémon Tools from your opponent's Active Pokémon. If you do, discard this Pokémon.",
                fr: "Une fois pendant votre tour, si ce Pokémon est sur votre Banc, vous pouvez défausser tous les Outils Pokémon du Pokémon Actif de votre adversaire. Dans ce cas, défaussez ce Pokémon.",
                es: "Una vez durante tu turno, si este Pokémon está en tu Banca, puedes descartar todas las Herramientas Pokémon del Pokémon Activo de tu rival. Si lo haces, descarta este Pokémon.",
                it: "Una sola volta durante il tuo turno, se questo Pokémon è nella tua panchina, puoi scartare tutti gli Oggetti Pokémon dal Pokémon attivo del tuo avversario. Se lo fai, scarta questo Pokémon.",
                de: "Einmal während deines Zuges, wenn sich dieses Pokémon auf deiner Bank befindet, kannst du alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel legen. Wenn du das machst, lege dieses Pokémon auf deinen Ablagestapel.",
                "pt-br": "Uma vez durante o seu turno, se este Pokémon estiver no seu Banco, você poderá descartar todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente. Se fizer isso, descarte este Pokémon.",
                "zh-tw": "若這隻寶可夢在備戰區,則在自己的回合時可使用1次。將對手的戰鬥寶可夢身上附加的「寶可夢道具」丟棄。然後,將這隻寶可夢丟棄。",
                ja: "Once during your turn, if this Pokémon is on your Bench, you may discard all Pokémon Tools from your opponent's Active Pokémon. If you do, discard this Pokémon.",
                ko: "Once during your turn, if this Pokémon is on your Bench, you may discard all Pokémon Tools from your opponent's Active Pokémon. If you do, discard this Pokémon."
            }
        }
    ],
    attacks: [
        {
            name: {
                en: "Hook",
                fr: "Crochet",
                es: "Garfio",
                it: "Uncino",
                de: "Haken",
                "pt-br": "Gancho",
                "zh-tw": "鉤住",
                ja: "Hook",
                ko: "Hook"
            },
            damage: 20,
            cost: [
                "Colorless"
            ]
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
