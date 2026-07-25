import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/029",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/029",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/029",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/029",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/029",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/029"
    },
    name: {
        en: "Musharna",
        fr: "Mushana",
        es: "Musharna",
        it: "Musharna",
        de: "Somnivora",
        "pt-br": "Musharna",
        "zh-tw": "夢夢蝕",
        ko: "몽얌나",
        ja: "ムシャーナ"
    },
    illustrator: "Tika Matsuno",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Psychic"],
    dexId: [518],
    evolveFrom: {
        en: "Munna",
        fr: "Munna",
        es: "Munna",
        it: "Munna",
        de: "Somniam",
        "pt-br": "Munna",
        "zh-tw": "食夢夢",
        ko: "몽나",
        ja: "ムンナ"
    },
    stage: "Stage1",
    description: {
        en: "It drowses and dreams all the time. It’s best to leave it be if it’s just woken up, as it’s a terrible grump when freshly roused from sleep.",
        fr: "Il est sans cesse assoupi, plongé dans ses rêves.\nIl vaut mieux éviter de le déranger, car il est\ntoujours mal luné au réveil.",
        es: "Siempre está soñando o adormecido. Se pone de\nmuy mal humor al despertar, por lo que es mejor\nno perturbarlo.",
        it: "Sonnecchia costantemente, sognando.\nQuando si sveglia è di pessimo umore,\nquindi è meglio tenersi a debita distanza.",
        de: "Es schlummert und träumt immerzu. Wenn es\ngeweckt wird, bekommt es schlechte Laune.\nDeshalb sollte man es lieber in Ruhe lassen.",
        "pt-br": "Ele dorme e sonha o tempo todo. É melhor deixar assim se ele acabou de acordar, pois é um mau humor terrível quando recém-acordado.",
        "zh-tw": "總是在打瞌睡作夢。\n剛睡醒的時候會鬧脾氣，\n所以最好別去招惹牠。"
    },
    attacks: [
        {
            cost: ["Psychic"],
            name: {
                en: "Zen Headbutt",
                fr: "Psykoud'Boul",
                es: "Cabezazo Zen",
                it: "Cozzata Zen",
                de: "Zen-Kopfstoß",
                "pt-br": "Cabeçada Zen",
                "zh-tw": "意念頭錘"
            },
            damage: 50
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
