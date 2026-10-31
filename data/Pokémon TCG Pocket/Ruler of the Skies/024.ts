import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/024",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/024",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/024",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/024",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/024",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/024",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/024",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4/024",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4/024"
    },
    name: {
        en: "Cyndaquil",
        fr: "Héricendre",
        es: "Cyndaquil",
        it: "Cyndaquil",
        de: "Feurigel",
        "pt-br": "Cyndaquil",
        "zh-tw": "火球鼠",
        ko: "브케인",
        ja: "ヒノアラシ"
    },
    illustrator: "Teeziro",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    dexId: [155],
    stage: "Basic",
    description: {
        en: "The fire that spouts from its back burns hottest when it is angry. The flaring flames intimidate foes.",
        "fr": "Les flammes qui émanent de son dos atteignent leur pic d'intensité lorsqu'il est en colère. Elles lui permettent ainsi d'intimider ses adversaires.",
        es: "Cuando se enfada, las llamas que emite por el lomo arden con más vigor que nunca, lo cual intimida a sus rivales.",
        it: "Quando è adirato, le fiamme sul dorso raggiungono la massima intensità e intimoriscono i nemici.",
        de: "Die Flammen auf seinem Rücken lodern am stärksten, wenn es zornig ist. Dadurch schüchtert es seine Feinde ein.",
        "pt-br": "O fogo que sai de suas costas queima mais forte quando este Pokémon está com raiva. As chamas intimidam os inimigos.",
        "zh-tw": "從背上噴出的火焰會在\n生氣時燃燒得最強烈，\n令敵手大吃一驚。",
        ja: "背中から 吹き出す 炎は 怒ったときが いちばん 強く 燃え上がり 敵を 驚かせる。",
        ko: "등에서 내뿜는 불꽃은\n화났을 때 가장 강하게 타오르며\n적을 놀라게 한다."
    },
    attacks: [
        {
            cost: ["Fire"],
            name: {
                en: "Singe",
                fr: "Roussi",
                es: "Quemadura",
                it: "Scottata",
                de: "Versengung",
                "pt-br": "Chamuscada",
                "zh-tw": "灼熱",
                ja: "こがす",
                ko: "그을리기"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Burned.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
                es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
                it: "Il Pokémon attivo del tuo avversario è ora bruciato.",
                de: "Das aktive Pokémon deines Gegners ist jetzt verbrannt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Queimado.",
                "zh-tw": "將對手的戰鬥寶可夢灼傷。",
                ja: "相手のバトルポケモンをやけどにする。",
                ko: "상대의 배틀 포켓몬을 화상으로 만든다."
            }
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1
};
export default card;
