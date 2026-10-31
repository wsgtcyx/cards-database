import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/072",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/072",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/072",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/072",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/072",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/072",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/072",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/072",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/072"
    },
    name: {
        en: "Sudowoodo",
        fr: "Simularbre",
        es: "Sudowoodo",
        "pt-br": "Sudowoodo",
        "zh-tw": "樹才怪",
        ja: "ウソッキー",
        ko: "꼬지모",
        it: "Sudowoodo",
        de: "Mogelbaum"
    },
    illustrator: "Jerky",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 100,
    types: [
        "Fighting"
    ],
    stage: "Basic",
    retreat: 2,
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Elbow Strike",
                fr: "Coup de Coude",
                es: "Codazo",
                it: "Colpogomito",
                de: "Ellbogenstoß",
                "pt-br": "Golpe de Cotovelo",
                "zh-tw": "肘擊",
                ja: "ひじうち",
                ko: "팔꿈치치기"
            },
            cost: [
                "Colorless",
                "Colorless"
            ],
            damage: 40
        }
    ],
    abilities: [],
    description: {
        en: "Although it always pretends to be a tree, its composition appears more similar to rock than to vegetation.",
        fr: "Bien qu'il fasse semblant d'être un arbre, par sa composition, il semble plus proche d'un minéral que d'un végétal.",
        es: "Aunque pretende ser un árbol, en su composición se parece más a una roca que a una planta.",
        it: "Sebbene finga di essere un albero, il suo corpo ha una composizione più simile a quella di una roccia che a quella di un vegetale.",
        de: "Obwohl es vorgibt, ein Baum zu sein, kommt seine Zusammensetzung einem Stein näher als einer Pflanze.",
        "pt-br": "Apesar de sempre fingir ser uma árvore, sua composição tem mais semelhanças com pedras do que com vegetação.",
        "zh-tw": "總是偽裝成樹的樣子。身體構造比較接近礦物系，好像更接近石頭或岩石之類的東西。",
        ja: "いつも 木のふりを している。 体の つくりは 植物より 石や 岩などに 近いようだ。",
        ko: "항상 나무인 척하고 있다.\n몸의 구조는 식물보다\n돌이나 바위에 가까운 듯하다."
    }
};

export default card;
