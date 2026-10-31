import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/121",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/121",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/121",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/121",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/121",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/121",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/121",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4/121",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4/121"
    },
    name: {
        en: "Noibat",
        fr: "Sonistrelle",
        es: "Noibat",
        it: "Noibat",
        de: "eF-eM",
        "pt-br": "Noibat",
        "zh-tw": "嗡蝠",
        ko: "음뱃",
        ja: "オンバット"
    },
    illustrator: "UKUMO uiti",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Dragon"],
    dexId: [714],
    stage: "Basic",
    description: {
        en: "Noibat can change the frequency of its sound waves at will, and it generates ultrasonic waves of up to 200,000 hertz.",
        fr: "Il est capable de modifier la fréquence de ses ondes sonores à volonté et produit des ultrasons allant jusqu'à 200 000 Hz.",
        es: "Es capaz de modificar a su antojo la frecuencia de las ondas ultrasónicas que emite, las cuales pueden alcanzar hasta 200 000 Hz.",
        it: "Può cambiare a piacimento la frequenza delle proprie onde sonore, fino a raggiungere ultrasuoni di un massimo di 200.000 hertz.",
        de: "Es kann die Frequenz seiner Schallwellen nach Belieben ändern und sogar Ultraschallwellen von bis zu 200 000 Hz freisetzen.",
        "pt-br": "Noibat pode mudar a frequência de suas ondas sonoras à vontade e gera ondas ultrassônicas de até 200.000 hertz.",
        "zh-tw": "可以自由自在地改變\n音波的頻率，最高能夠\n發出20萬赫茲的超音波。",
        ja: "音波の 周波数を 自在に 変える。 最大 20万ヘルツの 超音波を 出すことができる。",
        ko: "음파의 주파수를 자유자재로 바꿀 수 있다.\n최대 20만 Hz의 초음파를 내보낼 수 있다."
    },
    attacks: [
        {
            cost: ["Psychic", "Darkness"],
            name: {
                en: "Wing Attack",
                fr: "Cru-Ailes",
                es: "Ataque Ala",
                it: "Attacco d'ala",
                de: "Flügelangriff",
                "pt-br": "Ataque de Asa",
                "zh-tw": "翅膀攻擊",
                ja: "つばさでうつ",
                ko: "날개치기"
            },
            damage: 40
        }
    ],
    retreat: 1
};

export default card;
