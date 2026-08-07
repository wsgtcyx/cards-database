import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/031",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/031",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/031",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/031",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/031",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/031",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/031"
    },
    name: {
        en: "Galarian Mr. Rime",
        "fr": "M. Glaquette de Galar",
        "es": "Mr. Rime de Galar",
        "it": "Mr. Rime di Galar",
        "de": "Galar-Pantifrost",
        "pt-br": "Mr. Rime de Galar",
        "zh-tw": "伽勒爾踏冰人偶"
    },
    illustrator: "Naoki Saito",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Water"],
    evolveFrom: {
        en: "Galarian Mr. Mime",
        "fr": "Galarien M. Mime",
        "es": "Señor Mimo de Galar",
        "it": "Il signor Mime di Galar",
        "de": "Galarischer Mr. Mime",
        "pt-br": "Galarian Sr. Mime",
        "zh-tw": "伽勒安啞劇先生"
    },
    description: {
        en: "Its amusing movements make it very popular.\nIt releases its psychic power from the pattern\non its belly.",
        "fr": "Ses mouvements amusants le rendent très populaire.\nIl libère son pouvoir psychique du modèle\nsur son ventre.",
        "es": "Sus divertidos movimientos lo hacen muy popular.\nLibera su poder psíquico del patrón.\nsobre su vientre.",
        "it": "I suoi movimenti divertenti lo rendono molto popolare.\nLibera il suo potere psichico dallo schema\nsulla sua pancia.",
        "de": "Seine lustigen Bewegungen machen ihn sehr beliebt.\nEs setzt seine psychische Kraft aus dem Muster frei\nauf seinem Bauch.",
        "pt-br": "Seus movimentos divertidos o tornam muito popular.\nEle libera seu poder psíquico do padrão\nem sua barriga.",
        "zh-tw": "其有趣的動作使其深受人們喜愛。\n它從圖案中釋放出精神力量\n在它的肚子上。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Triple Spin",
                "fr": "Triple rotation",
                "es": "Triple giro",
                "it": "Triplo giro",
                "de": "Dreifacher Spin",
                "pt-br": "Giro Triplo",
                "zh-tw": "三重旋轉"
            },
            damage: 60,
            cost: ["Water", "Water", "Water"],
            effect: {
                en: "Flip 3 coins. This attack does 60 damage for each heads.",
                "fr": "Lancez 3 pièces. Cette attaque inflige 60 dégâts pour chaque tête.",
                "es": "Lanza 3 monedas. Este ataque hace 60 de daño por cada cabeza.",
                "it": "Lancia 3 monete. Questo attacco infligge 60 danni per ogni testa.",
                "de": "Wirf 3 Münzen. Dieser Angriff verursacht 60 Schaden pro Kopf.",
                "pt-br": "Jogue 3 moedas. Este ataque causa 60 de dano para cada cabeça.",
                "zh-tw": "翻轉 3 個硬幣。這次攻擊對每個頭造成 60 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 2
};
export default card;
