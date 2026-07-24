import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/034",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/034"
    },
    name: {
        en: "Poliwhirl",
        fr: "Têtarte",
        es: "Poliwhirl",
        it: "Poliwhirl",
        de: "Quaputzi",
        "pt-br": "Poliwhirl",
        "zh-tw": "蚊香君",
        ko: "슈륙챙이",
        ja: "ニョロゾ"
    },
    illustrator: "Atsuko Nishida",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Water"],
    dexId: [61],
    evolveFrom: {
        en: "Poliwag",
        fr: "Ptitard",
        es: "Poliwag",
        it: "Poliwag",
        de: "Quapsel",
        "pt-br": "Poliwag",
        "zh-tw": "蚊香蝌蚪",
        ko: "발챙이",
        ja: "ニョロモ"
    },
    stage: "Stage1",
    description: {
        en: "Its skin is moist all over its body. The skin on its belly spiral also feels smooth.",
        fr: "Sa peau est humide sur tout son corps. La peau de sa spirale ventrale est également lisse.",
        es: "Su piel está húmeda en todo su cuerpo. La piel de la espiral del vientre también se siente suave.",
        it: "La sua pelle è umida su tutto il corpo. Anche la pelle sulla spirale del ventre è liscia.",
        de: "Die Haut am ganzen Körper ist feucht. Auch die Haut an der Bauchspirale fühlt sich glatt an.",
        "pt-br": "Sua pele está úmida por todo o corpo. A pele da espiral abdominal também é macia.",
        "zh-tw": "它全身的皮膚都是濕潤的。它腹部螺旋上的皮膚也感覺光滑。"
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Hit Twice",
                fr: "Double Frappe",
                es: "Doble Redoble",
                it: "Doppia Botta",
                de: "Zweimal zuschlagen",
                "pt-br": "Batida Dupla",
                "zh-tw": "二連敲"
            },
            effect: {
                en: "Flip 2 coins. This attack does 30 damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque tête.",
                es: "Lanza 2 monedas. Este ataque hace 30 daños por cada cabeza.",
                it: "Lancia 2 monete. Questo attacco infligge 30 danni per ogni testa.",
                de: "Wirf 2 Münzen. Dieser Angriff verursacht 30 Schaden pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 30 de dano para cada cabeça.",
                "zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 30 點傷害。"
            },
            damage: "30x"
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
