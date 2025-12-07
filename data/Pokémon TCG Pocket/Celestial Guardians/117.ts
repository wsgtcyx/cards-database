import { Card } from "../../../interfaces";
import Set from "../Celestial Guardians";
const card: Card = {
    set: Set,
    name: {
        en: "Alolan Diglett",
        fr: "Taupiqueurd'Alola",
        es: "Diglettde Alola",
        it: "Diglettdi Alola",
        de: "Alola-Digda",
        'pt-br': "Diglettde Alola",
        ko: "알로라디그다",
        "zh-tw": "阿羅拉地鼠",
    },
    illustrator: "Naoyo Kimura",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Metal"],
    description: {
        en: "The metal-rich geology of this Pokémon's habitat caused it to develop steel whiskers on its head.",
        fr: "À force d'être en contact avec des terres\nriches en métaux, des vibrisses en acier\nont poussé sur le sommet de sa tête.",
        es: "Debido al terreno rico en metales, le crecen\nen la cabeza unos filamentos metálicos.",
        it: "Il terreno ricco di metalli gli ha fatto\nspuntare dei peli d'acciaio sulla testa.",
        de: "Seine stählernen Haare auf dem Kopf sind ihm\ngewachsen, weil es sich in einem Boden mit\nhohem metallischen Anteil aufhielt.",
        'pt-br': "O habitat rico em metal deste Pokémon\nfez com que bigodes de aço se formassem em sua cabeça.",
        ko: "금속 성분이 많이 포함된\n지질의 영향으로 강철\n수염이 머리에 났다.",
        "zh-tw": "這種神奇寶貝棲息地富含金屬的地質導致它的頭上長出了鋼須。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Headbutt",
                fr: "Coup d'Boule",
                es: "Golpe Cabeza",
                it: "Bottintesta",
                de: "Kopfnuss",
                'pt-br': "Cabeçada",
                ko: "박치기",
                "zh-tw": "頭撞"
            },
            damage: 20,
            cost: ["Metal"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["solgaleo", "lunala"]
};
export default card;
