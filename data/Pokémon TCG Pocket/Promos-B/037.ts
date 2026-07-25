import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/037",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/037",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/037",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/037",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/037",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/037"
    },
    name: {
        en: "Frigibax",
        fr: "Frigodo",
        es: "Frigibax",
        it: "Frigibax",
        de: "Frospino",
        "pt-br": "Frigibax",
        "zh-tw": "涼脊龍",
        ko: "드니차",
        ja: "セビエ"
    },
    illustrator: "Akira Komayama",
    rarity: "None",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    dexId: [996],
    stage: "Basic",
    description: {
        en: "This Pokémon lives in forests and craggy areas. Using the power of its dorsal fin, it cools the inside of its nest like a refrigerator.",
        fr: "Ce Pokémon vit dans les forêts et les zones escarpées. Grâce à la puissance de sa nageoire dorsale, il refroidit l’intérieur de son nid comme un réfrigérateur.",
        es: "Este Pokémon vive en bosques y zonas escarpadas. Utilizando el poder de su aleta dorsal, enfría el interior de su nido como si fuera un frigorífico.",
        it: "Questo Pokémon vive nelle foreste e nelle zone scoscese. Usando la potenza della sua pinna dorsale, raffredda l'interno del suo nido come un frigorifero.",
        de: "Dieses Pokémon lebt in Wäldern und felsigen Gebieten. Mit der Kraft seiner Rückenflosse kühlt es das Innere seines Nestes wie ein Kühlschrank.",
        "pt-br": "Este Pokémon vive em florestas e áreas escarpadas. Usando o poder de sua barbatana dorsal, ele resfria o interior do ninho como uma geladeira.",
        "zh-tw": "這種寶可夢生活在森林和崎嶇的地區。它利用背鰭的力量，像冰箱一樣冷卻巢穴內部。"
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Stiffen",
                fr: "Raidissement",
                es: "Endurecimiento",
                it: "Indurimento",
                de: "Verhärten",
                "pt-br": "Fortificar",
                "zh-tw": "凝固"
            },
            effect: {
                en: "During your opponent's next turn, this Pokémon takes -20 damage from attacks.",
                fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit - 20 dégâts provenant des attaques.",
                es: "Durante el próximo turno de tu rival, los ataques hacen -20 puntos de daño a este Pokémon.",
                it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -20 danni dagli attacchi.",
                de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken - 20 Schadenspunkte zugefügt.",
                "pt-br": "Durante o próximo turno do seu oponente, este Pokémon receberá -20 pontos de dano de ataques.",
                "zh-tw": "在對手的下一個回合中，這只寶可夢受到的攻擊傷害為-20。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol5"]
};

export default card;
