import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/066",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/066",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/066",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/066",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/066",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/066",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/066"
    },
    name: {
        en: "Drowzee",
        fr: "Soporifik",
        es: "Drowzee",
        it: "Drowzee",
        de: "Traumato",
        "pt-br": "Drowzee",
        "zh-tw": "催眠貘",
        ko: "슬리프",
        ja: "スリープ"
    },
    illustrator: "Tomokazu Komiya",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Psychic"],
    dexId: [96],
    stage: "Basic",
    description: {
        en: "When it twitches its nose, it can tell where someone is sleeping and what that person is dreaming about.",
        fr: "Lorsqu'il remue le nez, il peut dire où quelqu'un dort et de quoi cette personne rêve.",
        es: "Cuando mueve la nariz, puede saber dónde está durmiendo alguien y con qué está soñando esa persona.",
        it: "Quando muove il naso, può dire dove sta dormendo qualcuno e cosa sta sognando.",
        de: "Wenn es mit der Nase zuckt, kann es erkennen, wo jemand schläft und wovon diese Person träumt.",
        "pt-br": "Quando torce o nariz, ele consegue dizer onde alguém está dormindo e com o que essa pessoa está sonhando.",
        "zh-tw": "當它抽動鼻子時，它可以知道某人在哪裡睡覺以及那個人在做什麼夢。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Ram",
                fr: "Collision",
                es: "Apisonar",
                it: "Carica",
                de: "Ramme",
                "pt-br": "Aríete",
                "zh-tw": "衝撞"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
