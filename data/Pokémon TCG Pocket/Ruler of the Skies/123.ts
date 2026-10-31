import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/123",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/123",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/123",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/123",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/123",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/123",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/123",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4/123",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4/123"
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
        "pt-br": "Os compostos explosivos no seu casco são resultado da sua dieta de enxofre do seu habitat vulcânico. Suas fezes também são perigosamente explosivas.",
        "zh-tw": "在火山上生活，吃下的硫磺\n就是甲殼上炸藥的原料。\n連糞便也會爆炸，十分危險。",
        ja: "火山で 暮らし 食べた 硫黄が 甲羅の 爆薬の もとになる。 フンも 爆発する 危険物。",
        ko: "화산에서 살며 먹은 유황이\n등껍질에 있는 폭약의 원료가 된다.\n위험하게도 배설물 역시 폭발물이다."
    },
    attacks: [
        {
            cost: ["Fire", "Fighting", "Colorless"],
            name: {
                en: "Searing Flame",
                fr: "Flammes Calcinantes",
                es: "Llama Abrasadora",
                it: "Fiamma Ardente",
                de: "Sengende Flamme",
                "pt-br": "Chama Cauterizante",
                "zh-tw": "灼燒",
                ja: "やきこがす",
                ko: "태워그을리기"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Burned.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
                es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
                it: "Il Pokémon attivo del tuo avversario è ora bruciato.",
                de: "Das aktive Pokémon deines Gegners ist jetzt verbrannt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Queimado.",
                "zh-tw": "將對手的戰鬥寶可夢灼傷。",
                ja: "相手のバトルポケモンをやけどにする。",
                ko: "상대의 배틀 포켓몬을 화상으로 만든다."
            },
            damage: 70
        }
    ],
    retreat: 3
};

export default card;
