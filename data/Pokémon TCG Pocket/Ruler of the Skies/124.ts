import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/124"
    },
    name: {
        en: "Drampa",
        fr: "Draïeul",
        es: "Drampa",
        it: "Drampa",
        de: "Sen-Long",
        "pt-br": "Drampa",
        "zh-tw": "老翁龍",
        ko: "할비롱",
        ja: "ジジーロン"
    },
    illustrator: "match",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Dragon"],
    dexId: [780],
    stage: "Basic",
    description: {
        en: "Drampa is a kind and friendly Pokémon—up until it’s angered. When that happens, it stirs up a gale and flattens everything around.",
        fr: "Il est d’un naturel sociable et aimable, mais quand\nil se met en colère, il déchaîne des bourrasques\nqui emportent tout sur leur passage.",
        es: "Es de naturaleza mansa y amable, pero, si se\nenfurece, puede desatar fuertes vientos capaces\nde llevarse cualquier cosa por delante.",
        it: "È socievole e di indole gentile ma quando\nsi arrabbia provoca venti dalla terribile\nforza distruttiva.",
        de: "Ein zutrauliches und gutmütiges Pokémon. Wird\nes jedoch wütend, beschwört es heftige Stürme\nherauf, die alles und jeden davonfegen.",
        "zh-tw": "心地善良愛親近人，\n但只要生氣就會\n颳起強風吹倒一切。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Power Blast",
                fr: "Violente Déflagration",
                es: "Estallido Vigoroso",
                it: "Forzacolpo",
                de: "Powerschuss",
                "pt-br": "Explosão Poderosa",
                "zh-tw": "力量爆破"
            },
            effect: {
                en: "Discard a random Energy from this Pokémon.",
                fr: "Défaussez une Énergie aléatoire de ce Pokémon.",
                es: "Descarta una Energía aleatoria de este Pokémon.",
                it: "Scarta un'Energia casuale da questo Pokémon.",
                de: "Lege eine zufällige Energie von diesem Pokémon ab.",
                "pt-br": "Descarte uma Energia aleatória deste Pokémon.",
                "zh-tw": "丟棄該寶可夢的隨機能量。"
            },
            damage: 70
        }
    ],
    retreat: 1
};

export default card;
