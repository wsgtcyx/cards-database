import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/047"
    },
    name: {
        en: "Araquanid",
        fr: "Tarenbulle",
        es: "Araquanid",
        it: "Araquanid",
        de: "Aranestro",
        "pt-br": "Araquanid",
        "zh-tw": "滴蛛霸",
        ko: "깨비물거미",
        ja: "オニシズクモ"
    },
    illustrator: "match",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Water"],
    dexId: [752],
    evolveFrom: {
        en: "Dewpider",
        fr: "Araqua",
        es: "Dewpider",
        it: "Dewpider",
        de: "Araqua",
        "pt-br": "Dewpider",
        "zh-tw": "滴蛛",
        ko: "물거미",
        ja: "シズクモ"
    },
    stage: "Stage1",
    description: {
        en: "It launches sticky water bubbles. Foes who lose consciousness while trapped inside these bubbles will get torn apart by Araquanid's gnashing jaws."
    },
    attacks: [
        {
            cost: ["Water", "Colorless"],
            name: {
                en: "Corner",
                fr: "Coin",
                es: "Esquina",
                it: "Angolo",
                de: "Ecke",
                "pt-br": "Canto",
                "zh-tw": "窮追不捨"
            },
            effect: {
                en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
                fr: "Lors du prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
                es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
                it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
                de: "Während des nächsten Zuges deines Gegners kann sich das verteidigende Pokémon nicht zurückziehen.",
                "pt-br": "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
                "zh-tw": "在對手的下一個回合中，守方寶可夢不能撤退。"
            },
            damage: 60
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
