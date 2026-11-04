import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/082/00b8831c7ffcb95e",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/082/00b8831c7ffcb95e",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/082/00b8831c7ffcb95e",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/082/00b8831c7ffcb95e",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/082/00b8831c7ffcb95e",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/082/00b8831c7ffcb95e",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/082/00b8831c7ffcb95e",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/082/00b8831c7ffcb95e",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/082/00b8831c7ffcb95e"
    },
    name: {
        en: "Poipole",
        es: "Poipole",
        "fr": "Vémini",
        "it": "Poipole",
        "de": "Venicro",
        "pt-br": "Poipole",
        "zh-tw": "毒貝比",
        ja: "ベベノム",
        ko: "베베놈",
    },
    illustrator: "Megumi Mizutani",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    description: {
        en: "This Ultra Beast is well enough liked to be\nchosen as a first partner in its own world.",
        es: "En su mundo, este Ultraente se considera tan entrañable\ncomo para ser elegido compañero de viaje.",
        "fr": "Dans son monde, cette Ultra-Chimère est fort appréciée pour son naturel conciliant, qui fait d'elle un compagnon de voyage idéal.",
        "it": "Un'Ultracreatura talmente socievole da essere spesso scelta come compagno di viaggio nel mondo da cui proviene.",
        "de": "Diese Ultrabestie wird in der Welt, aus der sie kommt, so gemocht, dass sie oft als Partner für Reisen gewählt wird.",
        "pt-br": "Esta Ultracriatura é admirada o bastante para ser escolhida como parceiro inicial em seu próprio mundo.",
        "zh-tw": "在異世界是人們十分熟悉的究極異獸，有時甚至會被選為踏上旅程時的夥伴。",
        ja: "異世界に おいては 旅立ちの パートナーに 選ばれるほど 親しまれている ウルトラビースト。",
        ko: "다른 세계에서는 여행\n파트너로 삼을 정도로\n친근한 울트라비스트다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "2-Step",
                es: "2-Step",
                "fr": "Two-Step",
                "it": "2-Step",
                "de": "2-Step",
                "pt-br": "2-Step",
                "zh-tw": "倍倍舞曲",
                ja: "ツーステップ",
                ko: "투스텝"
            },
            damage: "20×",
            cost: ["Darkness"],
            effect: {
                en: "Flip 2 coins. This attack does 20 damage for each heads.",
                es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
                "fr": "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
                "it": "Lancia 2 volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
                "de": "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara.",
                "zh-tw": "擲2次硬幣,造成正面出現的次數×20點傷害。",
                ja: "コインを2回投げ、オモテの数×20ダメージ。",
                ko: "동전을 2번 던져서 앞면이 나온 수 × 20데미지를 준다."
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: []
};
export default card;
