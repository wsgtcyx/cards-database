import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/140",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/140",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/140",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/140",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/140",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/140",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/140"
    },
    name: {
        en: "Ducklett",
        fr: "Couaneton",
        es: "Ducklett",
        it: "Ducklett",
        de: "Piccolente",
        "pt-br": "Ducklett",
        "zh-tw": "鴨寶寶",
        ko: "꼬지보리",
        ja: "コアルヒー"
    },
    illustrator: "Shinya Komatsu",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    dexId: [580],
    stage: "Basic",
    description: {
        en: "It strengthens its body by diving into the depths of ponds, swimming around while looking for bog moss to eat.",
        fr: "Ce Pokémon muscle son corps en nageant dans les profondeurs des lacs. Il y recherche des sphaignes pour se nourrir.",
        es: "Fortalece su musculatura buceando por el lecho de los lagos en busca del musgo acuático del que se alimenta.",
        it: "Allena la muscolatura nuotando nelle profondità degli specchi d'acqua in cerca di muschi acquatici con cui nutrirsi.",
        de: "Auf der Suche nach Torfmoos, seiner Nahrung, schwimmt es tief unten in Teichen umher und stählt so seinen Körper.",
        "pt-br": "Fortalece o seu corpo ao mergulhar nas profundezas de lagoas, nadando enquanto procura musgo para comer.",
        "zh-tw": "會在池塘水深的地方\n四處游動找水苔來吃，\n順便鍛鍊身體。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Wing Attack",
                fr: "Cru-Ailes",
                es: "Ataque Ala",
                it: "Attacco d'ala",
                de: "Flügelangriff",
                "pt-br": "Ataque de Asa",
                "zh-tw": "翅膀攻擊"
            },
            damage: 30
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
