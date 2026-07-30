import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/107"
    },
    name: {
        en: "Metang",
        fr: "Métang",
        es: "Metang",
        it: "Metang",
        de: "Metang",
        "pt-br": "Metang",
        "zh-tw": "金屬怪",
        ko: "메탕구",
        ja: "メタング"
    },
    illustrator: "Kazuma Koda",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Metal"],
    dexId: [375],
    evolveFrom: {
        en: "Beldum",
        fr: "Terhal",
        es: "Beldum",
        it: "Beldum",
        de: "Tanhel",
        "pt-br": "Beldum",
        "zh-tw": "鐵啞鈴",
        ko: "메탕",
        ja: "ダンバル"
    },
    stage: "Stage1",
    description: {
        en: "It adores magnetic minerals, so it pursues Nosepass at speeds exceeding 60 mph.",
        fr: "Il raffole des minéraux qui émettent des ondes\nmagnétiques. Il peut s’élancer à la poursuite\nd’un Tarinor à 100 km/h.",
        es: "Le encanta comer minerales con propiedades\nmagnéticas. Puede rastrear a un Nosepass\ndesplazándose a más de 100 km/h.",
        it: "È ghiotto di minerali dotati di proprietà\nmagnetiche. Quando dà la caccia ai Nosepass,\npuò raggiungere i 100 km/h.",
        de: "Es liebt Mineralien, die Magnetfelder erzeugen.\nKein Wunder, dass es Nasgnet mit 100 km/h\nhinterherjagt.",
        "zh-tw": "非常喜歡能放出磁力的礦物。\n會以１００公里的時速窮追朝北鼻。"
    },
    attacks: [
        {
            cost: ["Metal", "Colorless"],
            name: {
                en: "Bullet Punch",
                fr: "Pisto-Poing",
                es: "Puño Bala",
                it: "Pugnoscarica",
                de: "Patronenhieb",
                "zh-tw": "子彈拳"
            },
            effect: {
                en: "Flip 2 coins. This attack does 20 more damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque tête.",
                es: "Lanza 2 monedas. Este ataque hace 20 daños más por cada cabeza.",
                it: "Lancia 2 monete. Questo attacco infligge 20 danni in più per ogni testa.",
                de: "Wirf 2 Münzen. Dieser Angriff verursacht 20 weitere Schadenspunkte pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa mais 20 danos para cada cabeça.",
                "zh-tw": "翻轉 2 個硬幣。此攻擊對每個頭造成 20 點額外傷害。"
            },
            damage: "30+"
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
