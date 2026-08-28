import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/046",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/046",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/046",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/046",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/046",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/046",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/046"
    },
    name: {
        en: "Cufant",
        fr: "Charibari",
        es: "Cufant",
        it: "Cufant",
        de: "Kupfanti",
        "pt-br": "Cufant",
        "zh-tw": "銅象",
        ko: "끼리동",
        ja: "ゾウドウ"
    },
    illustrator: "kirisAki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Metal"],
    dexId: [878],
    stage: "Basic",
    description: {
        en: "Cufant can lift loads weighing five tons. In the mornings, it heads into caves with its herd, in search of the ore on which these Pokémon feed.",
        fr: "Il peut soulever des charges de cing tonnes. Le matin, il se rend dans les grottes avec son troupeau, en quéte du minerai dont il se nourrit.",
        es: "Puede levantar cargas de cinco toneladas. Al amanecer, se dirigen en manada a las cuevas en busca de los minerales de los que se alimentan.",
        it: "Può sollevare carichi di cinque tonnellate. Al mattino si dirige in gruppo con i suoi simili verso le grotte, in cerca del minerali di cui sí nutre.",
        de: "Kupfanti kann ein Gewicht von 5 t stemmen. Morgens macht es sich mit seiner Herde auf den Weg zu Höhlen, wo es Erz zum Fressen sucht.",
        "pt-br": "Cufant consegue levantar cinco toneladas de carga. Pela manhã, parte para as cavernas com sua manada em busca do minério do qual se alimentam.",
        "zh-tw": "能夠舉起重達５噸的貨物。天一亮就會成群結隊前往洞窟找礦石來吃。"
    },
    attacks: [
        {
            cost: ["Metal", "Colorless"],
            name: {
                en: "Rollout",
                fr: "Roulade",
                es: "Rodar",
                it: "Rotolamento",
                de: "Walzer",
                "pt-br": "Rolagem",
                "zh-tw": "滾動"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
