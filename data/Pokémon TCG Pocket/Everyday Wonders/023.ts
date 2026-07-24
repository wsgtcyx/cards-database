import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/023",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/023"
    },
    name: {
        en: "Emolga",
        fr: "Emolga",
        es: "Emolga",
        it: "Emolga",
        de: "Emolga",
        "pt-br": "Emolga",
        "zh-tw": "電飛鼠",
        ko: "에몽가",
        ja: "エモンガ"
    },
    illustrator: "Tomokazu Komiya",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Lightning"],
    dexId: [587],
    stage: "Basic",
    description: {
        en: "This Pokémon absolutely loves sweet berries. Sometimes it stuffs its cheeks full of so much food that it can’t fly properly.",
        fr: "Les Baies sucrées sont son péché mignon.\nIl lui arrive d’en conserver beaucoup trop dans\nses bajoues, ce qui l’empêche de bien planer.",
        es: "Le encantan las bayas dulces. A veces almacena\ntanta comida en los carrillos que no puede volar\nbien.",
        it: "Va ghiotto di bacche dolci. A volte accumula\ntroppo cibo nelle guance e fa fatica a volare.",
        de: "Emolga liebt süße Beeren. Manchmal hortet es\nso viel Futter in seinen Backentaschen, dass es\nnicht mehr richtig fliegen kann.",
        "pt-br": "Este Pokémon adora frutas doces. Às vezes, ele enche as bochechas com tanta comida que não consegue voar direito.",
        "zh-tw": "最喜歡甜甜的樹果。有時會\n因為在頰囊裡儲存了太多食物，\n結果讓自己無法好好飛行。"
    },
    attacks: [
        {
            cost: ["Lightning", "Lightning"],
            name: {
                en: "Windup Thunder",
                fr: "Tonnerre à remonter",
                es: "Trueno de cuerda",
                it: "Tuono a carica",
                de: "Aufziehdonner",
                "pt-br": "Trovão de encerramento",
                "zh-tw": "機關閃電"
            },
            effect: {
                en: "This attack does 30 damage for each Pokémon Tool attached to all of your Pokémon.",
                fr: "Cette attaque inflige 30 dégâts pour chaque Outil Pokémon attaché à tous vos Pokémon.",
                es: "Este ataque hace 30 daños por cada Herramienta Pokémon adjunta a todos tus Pokémon.",
                it: "Questo attacco infligge 30 danni per ogni Oggetto Pokémon assegnato a tutti i tuoi Pokémon.",
                de: "Dieser Angriff fügt 30 Schadenspunkte für jedes Pokémon-Werkzeug zu, das an alle deine Pokémon angelegt ist.",
                "pt-br": "Este ataque causa 30 de dano para cada Ferramenta Pokémon anexada a todos os seus Pokémon.",
                "zh-tw": "此攻擊對你所有寶可夢上附加的每個寶可夢工具造成 30 點傷害。"
            },
            damage: "30x"
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
