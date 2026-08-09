import { Card } from "../../../interfaces";
import Set from "../Genetic Apex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A1/215",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A1/215",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A1/215",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A1/215",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A1/215",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A1/215",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A1/215"
    },
    name: {
        en: "Dubwool",
        fr: "Moumouflon",
        es: "Dubwool",
        it: "Dubwool",
        de: "Zwollock",
        'pt-br': "Dubwool",
        ko: "배우르",
        "zh-tw": "毛毛角羊",
    },
    illustrator: "saino misaki",
    category: "Pokemon",
    hp: 120,
    types: ["Colorless"],
    stage: "Stage1",
    evolveFrom: {
        en: "Wooloo",
        "fr": "Moumouton",
        "es": "Wooloo",
        "it": "Wooloo",
        "de": "Wolly",
        "pt-br": "Wooloo",
        "zh-tw": "毛辮羊"
    },
    attacks: [{
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Rolling Tackle",
                fr: "Roulé-Boulé",
                es: "Placaje Giro",
                it: "Rollazione",
                de: "Rolltackle",
                'pt-br': "Golpe de Colisão Rolante",
                ko: "구르기 태클",
                "zh-tw": "滾動釣具"
            },
            damage: "80"
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2,
    rarity: "One Diamond",
    description: {
        en: "Weave a carpet from its springy wool, and you end up with something closer to a trampoline. You'll start to bounce the moment you set foot on it.",
        fr: "La texture de sa laine est si élastique que\nla surface des tapis fabriqués avec ce matériau\nest aussi rebondissante que celle d'un trampoline.",
        es: "Su lana es muy flexible. Las alfombras tejidas con ella\nadoptan una textura similar a la de las camas elásticas.",
        it: "I tappeti realizzati con i suoi peli sono\ntalmente elastici che saltandoci sopra\nsi rimbalza come su un trampolino.",
        de: "Spannt man einen aus den elastischen Haaren\nvon Zwollock gewobenen Teppich auf, kann man\ndarauf hüpfen wie auf einem Trampolin.",
        'pt-br': "Tece um tapete feito de sua lã elástica, e o resultado\né algo semelhante a um trampolim. Você começará\na pular assim que pisar nele.",
        ko: "탄력 있는 털로 짜낸\n카펫은 트램펄린 같아서\n올라가면 통통 튀어 오르게 된다.",
        "zh-tw": "用有彈性的羊毛編織地毯，最終會得到更接近蹦床的東西。當你踏上它的那一刻，你就會開始彈跳。"
    },
    boosters: ["charizard", "mewtwo", "pikachu"]
};
export default card;
