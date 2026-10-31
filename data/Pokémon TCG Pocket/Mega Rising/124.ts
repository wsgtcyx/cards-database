import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/124",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/124",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/124",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/124",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/124",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/124",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/124",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/124",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/124"
    },
    name: {
        en: "Hitmonchan ex",
        "fr": "Tygnon-ex",
        "es": "Hitmonchan ex",
        "it": "Hitmonchan-ex",
        "de": "Nockchan-ex",
        "pt-br": "Hitmonchan ex",
        "zh-tw": "快拳郎ex",
        ja: "エビワラーex",
        ko: "홍수몬 ex",
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Fighting"],
    stage: "Basic",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Quick Straight",
                "fr": "Ligne droite rapide",
                "es": "Recta rápida",
                "it": "Dritto veloce",
                "de": "Schnell geradeaus",
                "pt-br": "Direto rápido",
                "zh-tw": "快速直行",
                ja: "クイックストレート",
                ko: "퀵스트레이트"
            },
            damage: 50,
            cost: ["Fighting"],
            effect: {
                en: "This attack's damage isn't affected by Weakness.",
                "fr": "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse.",
                "es": "El daño de este ataque no se ve afectado por la debilidad.",
                "it": "Il danno di questo attacco non è influenzato dalla debolezza.",
                "de": "Der Schaden dieses Angriffs wird durch Schwäche nicht beeinflusst.",
                "pt-br": "O dano deste ataque não é afetado pela Fraqueza.",
                "zh-tw": "該攻擊的傷害不受虛弱影響。",
                ja: "このワザのダメージは弱点を計算しない。",
                ko: "이 기술의 데미지는 약점 계산을 하지 않는다."
            }
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 1,
	boosters: [
		"mega-blaziken"
	]
};
export default card;
