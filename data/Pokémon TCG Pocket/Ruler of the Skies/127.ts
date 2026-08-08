import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/127",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/127",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/127",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/127",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/127",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/127",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/127"
    },
    name: {
        en: "Hydrapple",
        fr: "Pomdorochi",
        es: "Hydrapple",
        it: "Hydrapple",
        de: "Hydrapfel",
        "pt-br": "Hydrapple",
        "zh-tw": "蜜集大蛇",
        ko: "과미드라",
        ja: "カミツオロチ"
    },
    illustrator: "Kuroimori",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Dragon"],
    dexId: [1019],
    evolveFrom: {
        en: "Dipplin",
        fr: "Pomdramour",
        es: "Dipplin",
        it: "Dipplin",
        de: "Sirapfel",
        "pt-br": "Dipplin",
        "zh-tw": "裹蜜蟲",
        ko: "과미르",
        ja: "カミッチュ"
    },
    stage: "Stage2",
    description: {
        en: "These capricious syrpents have banded together. On the rare occasion that their moods align, their true power is unleashed.",
        "es": "Unos Viborappli caprichosos que comparten morada. En raras ocasiones se ponen de acuerdo y son capaces de mostrar su verdadera fuerza.",
        "it": "Un gruppo di Appliserpi capricciose che occupa un unica dimora. Nelle rare occasioni in cui si trovano d'accordo, sfoderano la loro vera forza."
    },
    attacks: [
        {
            cost: ["Grass", "Fire"],
            name: {
                en: "Fickle Beam",
                fr: "Laser Hasard",
                es: "Láser Veleidoso",
                it: "Irregolaser",
                de: "Launenlaser",
                "zh-tw": "隨機光",
                "pt-br": "Feixe Volúvel"
            },
            effect: {
                en: "Flip 2 coins. If all of them are heads, this attack does 100 more damage.",
                fr: "Lancez 2 pièces. Si toutes sont côté face, cette attaque inflige 100 dégâts de plus.",
                es: "Lanza 2 monedas. Si en todas sale cara, este ataque hace 100 puntos de daño más.",
                "pt-br": "Jogue 2 moedas. Se todas elas saírem cara, este ataque causará 100 pontos de dano a mais.",
                "zh-tw": "擲2次硬幣,若全部為正面,則增加100點傷害。",
                "de": "Wirf 2 Münzen. Zeigen beide Münzen Kopf, fügt diese Attacke 100 Schadenspunkte mehr zu."
            },
            damage: "100+"
        }
    ],
    retreat: 2
};
export default card;
