import { Card } from "../../../interfaces";
import Set from "../Space-Time Smackdown";
const card: Card = {
    set: Set,
    name: {
        en: "Torterra",
        fr: "Torterra",
        es: "Torterra",
        it: "Torterra",
        de: "Chelterrar",
        'pt-br': "Torterra",
        ko: "토대부기",
        "zh-tw": "托特拉"
    },
    illustrator: "kawayoo",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 160,
    types: ["Grass"],
    evolveFrom: {
        en: "Grotle",
        "fr": "Grotle",
        "es": "Grotle",
        "it": "Grotle",
        "de": "Grotle",
        "pt-br": "Grotle",
        "zh-tw": "格羅特爾"
    },
    description: {
        en: "Ancient people imagined that beneath the ground dwelt a gigantic Torterra.",
        fr: "Autrefois, les gens croyaient que le monde\nreposait sur le dos d'un gigantesque Torterra.",
        es: "Las gentes de antaño creían que la superficie\nterrestre se encontraba sobre un gran Torterra.",
        it: "In tempi antichissimi si credeva che\nsottoterra dimorasse un gigantesco Torterra.",
        de: "In alten Zeiten malten die Menschen sich aus, dass sich\nein riesiges Chelterrar unter der Erde befinde.",
        'pt-br': "Povos antigos acreditavam que um Torterra gigante\nvivia embaixo da terra.",
        ko: "오랜 옛날 사람들은 대지\n밑에 거대한 토대부기가\n있다고 공상했었다.",
        "zh-tw": "古人想像地下有一個巨大的托爾特拉。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Frenzy Plant",
                fr: "Végé-Attaque",
                es: "Planta Feroz",
                it: "Radicalbero",
                de: "Flora-Statue",
                'pt-br': "Planta Mortal",
                ko: "하드플랜트",
                "zh-tw": "瘋狂植物"
            },
            damage: 150,
            cost: ["Grass", "Grass", "Colorless", "Colorless"],
            effect: {
                en: "During your next turn, this Pokémon can't use Frenzy Plant.",
                fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Végé-Attaque.",
                es: "Durante tu próximo turno, este Pokémon no puede usar Planta Feroz.",
                it: "Durante il tuo prossimo turno, questo Pokémon non può usare Radicalbero.",
                de: "Während deines nächsten Zuges kann dieses Pokémon Flora-Statue nicht einsetzen.",
                'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Planta Mortal.",
                ko: "자신의 다음 차례에 이 포켓몬은 「하드플랜트」 사용할 수 없다.",
                "zh-tw": "在你的下一個回合中，這只神奇寶貝無法使用瘋狂植物。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 4,
    boosters: ["palkia"]
};
export default card;
