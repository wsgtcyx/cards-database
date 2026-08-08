import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/047",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/047",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/047",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/047",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/047",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/047",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/047"
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
        en: "It launches sticky water bubbles. Foes who lose consciousness while trapped inside these bubbles will get torn apart by Araquanid's gnashing jaws.",
        "it": "Lancia delle bolle d'acqua appiccicose per inglobare il nemico. Quando questi perde i sensi, lo fa a pezzi con le grosse mandibole.",
        "de": "Es verschießt klebrige Wasserblasen, um Feinde darin einzuschließen. Werden diese bewusstlos. zerlegt es sie mit seinem großen Mundwerkzeug."
    },
    attacks: [
        {
            cost: ["Water", "Colorless"],
            name: {
                en: "Corner",
                fr: "Coinçage",
                es: "Arrinconar",
                it: "Angolo",
                de: "Ecke",
                "pt-br": "Quina",
                "zh-tw": "窮追不捨"
            },
            effect: {
                en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
                fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
                es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
                it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
                de: "Während des nächsten Zuges deines Gegners kann sich das verteidigende Pokémon nicht zurückziehen.",
                "pt-br": "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
                "zh-tw": "在下個對手的回合,受到這個招式的寶可夢無法撤退。"
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
