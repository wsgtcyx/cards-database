import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/123"
    },
    name: {
        en: "Turtonator",
        fr: "Boumata",
        es: "Turtonator",
        it: "Turtonator",
        de: "Tortunator",
        "pt-br": "Turtonator",
        "zh-tw": "爆焰龜獸",
        ko: "폭거북스",
        ja: "バクガメス"
    },
    illustrator: "Anesaki Dynamic",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Dragon"],
    dexId: [776],
    stage: "Basic",
    description: {
        en: "Eating sulfur in its volcanic habitat is what causes explosive compounds to develop in its shell. Its droppings are also dangerously explosive.",
        fr: "Il vit dans les volcans. Le soufre dont il se nourrit\nrend sa carapace explosive. Même ses selles\nsont dangereuses, car elles sont instables.",
        es: "El material explosivo de su caparazón está\ncompuesto por el azufre del que se alimenta.\nSus excrementos explosivos son muy peligrosos.",
        it: "Vive nei vulcani. Lo zolfo di cui si nutre rende\nesplosivo il suo carapace e i suoi escrementi.\nQuesti ultimi sono molto pericolosi.",
        de: "Da es in Vulkanen lebt, nimmt es mit der Nahrung\nviel Schwefel auf, was seinen Panzer und seinen\nKot explosiv macht. Letzterer ist ein Gefahrengut.",
        "zh-tw": "在火山上生活，吃下的硫磺\n就是甲殼上炸藥的原料。\n連糞便也會爆炸，十分危險。"
    },
    attacks: [
        {
            cost: ["Fire", "Fighting", "Colorless"],
            name: {
                en: "Searing Flame",
                fr: "Flamme brûlante",
                es: "Llama abrasadora",
                it: "Fiamma Ardente",
                de: "Sengende Flamme",
                "pt-br": "Chama Abrasadora",
                "zh-tw": "灼燒"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Burned.",
                fr: "Le Pokémon Actif de votre adversaire est désormais Brûlé.",
                es: "El Pokémon Activo de tu rival ahora está Quemado.",
                it: "Il Pokémon attivo del tuo avversario è ora bruciato.",
                de: "Das aktive Pokémon deines Gegners ist jetzt verbrannt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Queimado.",
                "zh-tw": "你對手的活躍寶可夢現在被燒毀了。"
            },
            damage: 70
        }
    ],
    retreat: 3
};

export default card;
