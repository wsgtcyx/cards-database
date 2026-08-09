import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/028",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/028",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/028",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/028",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/028",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/028",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/028"
    },
    name: {
        en: "Houndoom",
        fr: "Démolosse",
        es: "Houndoom",
        it: "Houndoom",
        de: "Hundemon",
        "pt-br": "Houndoom",
        "zh-tw": "黑魯加",
        ko: "헬가",
        ja: "ヘルガー"
    },
    illustrator: "hncl",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fire"],
    dexId: [229],
    evolveFrom: {
        en: "Houndour",
        fr: "Malosse",
        es: "Houndour",
        it: "Houndour",
        de: "Hunduster",
        "pt-br": "Houndour",
        "zh-tw": "戴魯比",
        ko: "델빌",
        ja: "デルビル"
    },
    stage: "Stage1",
    description: {
        en: "Upon hearing its eerie howls, other POKéMON get the shivers and head straight back to their nests.",
        fr: "Lorsqu'ils entendent ses hurlements sinistres, les autres Pokémon prennent peur et fuient vers leur nid.",
        es: "Al oír sus siniestros aullidos, los otros Pokémon se estremecen y huyen a sus nidos.",
        it: "I suoi terrificanti latrati fanno tremare gli altri Pokémon, che si precipitano così nelle proprie tane.",
        de: "Wenn andere Pokémon sein gruseliges Geheul hören, erschaudern sie und eilen Hals über Kopf zurück in ihren Unterschlupf.",
        "pt-br": "Quando ouvem seus uivos misteriosos, outros Pokémon ficam assustados e voltam imediatamente para seus ninhos.",
        "zh-tw": "聽見牠恐怖長嚎的\n寶可夢會渾身發抖，\n一溜煙地回到自己的巢裡。"
    },
    attacks: [
        {
            cost: ["Fire", "Fire"],
            name: {
                en: "Crunch",
                fr: "Mâchouille",
                es: "Triturar",
                it: "Crunch",
                de: "Knirschen",
                "pt-br": "Mastigada",
                "zh-tw": "咬碎"
            },
            effect: {
                en: "Flip a coin. If heads, discard a random Energy from your opponent's Active Pokémon.",
                fr: "Lancez une pièce. Si c'est face, défaussez au hasard une Énergie du Pokémon Actif de votre adversaire.",
                es: "Lanza 1 moneda. Si sale cara, descarta Energía aleatoria del Pokémon Activo de tu rival.",
                it: "Lancia una moneta. Se esce testa, scarta un'Energia casuale dal Pokémon attivo del tuo avversario.",
                de: "Wirf eine Münze. Bei „Kopf“ wirf eine zufällige Energie vom Aktiven Pokémon deines Gegners ab.",
                "pt-br": "Jogue uma moeda. Se sair cara, descarte Energia aleatória do Pokémon Ativo do seu oponente.",
                "zh-tw": "擲1次硬幣若為正面,則將對手的戰鬥寶可夢身上的隨機個能量丟棄。"
            },
            damage: 60
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
