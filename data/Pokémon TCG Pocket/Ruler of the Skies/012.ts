import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/012",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/012",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/012",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/012",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/012",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/012",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/012",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4/012",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4/012"
    },
    name: {
        en: "Karrablast",
        fr: "Carabing",
        es: "Karrablast",
        it: "Karrablast",
        de: "Laukaps",
        "pt-br": "Karrablast",
        "zh-tw": "蓋蓋蟲",
        ko: "딱정곤",
        ja: "カブルモ"
    },
    illustrator: "sowsow",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    dexId: [588],
    stage: "Basic",
    description: {
        en: "It spits a liquid from its mouth to melt through Shelmet’s shell. Karrablast doesn’t eat the shell— it eats only the contents.",
        fr: "Il crache un liquide qui dissout les coquilles\ndes Escargaume pour se régaler de leur contenu.",
        es: "Escupe un líquido corrosivo con el que disuelve\nel caparazón de los Shelmet para luego devorar\nel contenido.",
        it: "Scioglie la conchiglia di Shelmet con il liquido\nche spruzza dalla bocca e ne mangia il contenuto.",
        de: "Es nutzt die Flüssigkeit aus seinem Mund,\num die Muschel von Schnuthelm aufzulösen.\nDann verspeist es den Inhalt.",
        "pt-br": "Cospe um líquido de sua boca para derreter a concha de Shelmet. Karrablast não come a concha, apenas o conteúdo dela.",
        "zh-tw": "用嘴裡吐出的液體\n來融化小嘴蝸的殼，\n只會去吃裡面的身體。",
        ja: "口から 吐き出す 液体で チョボマキの 殻を 溶かす。 中身 だけを いただくのだ。",
        ko: "입에서 내뿜는 액체로\n쪼마리의 껍질을 녹여서\n내용물만 먹어 치운다."
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Peck",
                fr: "Picpic",
                es: "Picotazo",
                it: "Beccata",
                de: "Pikser",
                "pt-br": "Bicada",
                "zh-tw": "啄",
                ja: "つつく",
                ko: "쪼기"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
