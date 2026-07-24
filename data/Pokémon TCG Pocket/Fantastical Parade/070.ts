import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/070"
    },
    name: {
        en: "Meloetta",
        "fr": "Méloetta",
        "es": "meloeta",
        "it": "Meloetta",
        "de": "Meloetta",
        "pt-br": "Meloeta",
        "zh-tw": "梅洛埃塔"
    },
    illustrator: "REND",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Psychic"],
    description: {
        en: "Its melodies are sung with a special vocalization\nmethod that can control the feelings of those who\nhear it.",
        "fr": "Ses mélodies sont chantées avec une vocalisation particulière\nméthode qui peut contrôler les sentiments de ceux qui\nécoutez-le.",
        "es": "Sus melodías se cantan con una vocalización especial.\nmétodo que puede controlar los sentimientos de aquellos que\nescúchalo.",
        "it": "Le sue melodie sono cantate con una vocalizzazione speciale\nmetodo in grado di controllare i sentimenti di coloro che\nascoltalo.",
        "de": "Seine Melodien werden mit einer besonderen Vokalisierung gesungen\nMethode, die die Gefühle derjenigen kontrollieren kann, die\nhör es.",
        "pt-br": "Suas melodias são cantadas com uma vocalização especial\nmétodo que pode controlar os sentimentos daqueles que\nouça.",
        "zh-tw": "它的旋律是用特殊的發聲來演唱的\n可以控制他人情緒的方法\n聽到它。"
    },
    stage: "Basic",
    abilities: [{
            type: "Ability",
            name: {
                en: "Strange Singing",
                "fr": "Chant étrange",
                "es": "canto extraño",
                "it": "Canto strano",
                "de": "Seltsamer Gesang",
                "pt-br": "Canto Estranho",
                "zh-tw": "奇怪的歌聲"
            },
            effect: {
                en: "At the beginning of your turn, if this Pokémon is in the Active Spot, put a random {P} Pokémon from your deck into your hand.",
                "fr": "Au début de votre tour, si ce Pokémon est dans le Spot Actif, mettez dans votre main un Pokémon {P} aléatoire de votre deck.",
                "es": "Al comienzo de tu turno, si este Pokémon está en el Punto Activo, pon un {P} Pokémon aleatorio de tu mazo en tu mano.",
                "it": "All'inizio del tuo turno, se questo Pokémon è in posizione attiva, metti nella tua mano un Pokémon {P} casuale dal tuo mazzo.",
                "de": "Wenn sich dieses Pokémon zu Beginn deines Zuges an der aktiven Stelle befindet, nimm ein zufälliges {P}-Pokémon aus deinem Deck auf deine Hand.",
                "pt-br": "No início do seu turno, se este Pokémon estiver no Ponto Ativo, coloque um Pokémon {P} aleatório do seu baralho na sua mão.",
                "zh-tw": "在你的回合開始時，如果這只神奇寶貝位於活躍位置，則從你的牌組中隨機將一隻 {P} 神奇寶貝置入你的手牌。"
            }
        }],
    attacks: [{
            name: {
                en: "Psyshot",
                "fr": "Tir psychologique",
                "es": "Psicodisparo",
                "it": "Psicocolpo",
                "de": "Psyshot",
                "pt-br": "Psyshot",
                "zh-tw": "心理射擊"
            },
            damage: 50,
            cost: ["Psychic", "Psychic"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
