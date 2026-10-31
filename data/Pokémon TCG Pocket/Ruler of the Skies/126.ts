import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/126",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/126",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/126",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/126",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/126",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/126",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/126",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4/126",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4/126"
    },
    name: {
        en: "Dipplin",
        fr: "Pomdramour",
        es: "Dipplin",
        it: "Dipplin",
        de: "Sirapfel",
        "pt-br": "Dipplin",
        "zh-tw": "裹蜜蟲",
        ko: "과미르",
        ja: "カミッチュ"
    },
    illustrator: "Tomomi Ozaki",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Dragon"],
    dexId: [1011],
    evolveFrom: {
        en: "Applin",
        fr: "Verpom",
        es: "Applin",
        it: "Applin",
        de: "Knapfel",
        "pt-br": "Applin",
        "zh-tw": "啃果蟲",
        ko: "과사삭벌레",
        ja: "カジッチュ"
    },
    stage: "Stage1",
    description: {
        en: "The head sticking out belongs to the fore-wyrm, while the tail belongs to the core-wyrm. The two share one apple and help each other out.",
        fr: "À l'intérieur de la pomme vivent « Ver-dehors » et « Ver-dedans ». La tête du premier et la queue du second sortent du fruit.",
        "es": "Exterappli, el que saca la cabeza, e Interappli, el que saca la cola, viven juntos dentro de la manzana y se ayudan el uno al otro.",
        it: "L'Applitesta, che fa capolino, e l'Applicoda, di cui invece sbuca solo la parte posteriore, vivono nel pomo aiutandosi a vicenda.",
        de: "Im Apfel leben die sich gegenseitig helfenden „Kopfel“ und „Schwanzel“. Beim Ersten ragt der Kopf heraus, beim Zweiten der Schwanz.",
        "pt-br": "A cabeça que aponta para fora pertence à criatura frontal, enquanto a cauda pertence à criatura central. As duas compartilham uma maçã e ajudam uma à outra.",
        "zh-tw": "由露出了頭部的外頭蟲與\n露出了尾巴的裡頭蟲相扶相持，\n一起在蘋果裡面生活。",
        ja: "頭を 出している そとッチュと 尻尾を 出している なかッチュが 助け合い りんごのなかで 暮らす。※ キタカミの里での冒険で出会うことができます。",
        ko: "머리를 내밀고 있는 외미르와\n꼬리를 내밀고 있는 내미르가\n사과 안에서 서로 도우며 지낸다."
    },
    attacks: [
        {
            cost: ["Grass", "Fire"],
            name: {
                en: "Double Hit",
                fr: "Coup Double",
                es: "Doble Golpe",
                it: "Doppiosmash",
                de: "Doppelschlag",
                "pt-br": "Golpe Duplo",
                "zh-tw": "二連擊",
                ja: "ダブルアタック",
                ko: "더블어택"
            },
            effect: {
                en: "Flip 2 coins. This attack does 60 damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 60 dégâts pour chaque côté face.",
                es: "Lanza 2 monedas. Este ataque hace 60 puntos de daño por cada cara.",
                it: "Lancia 2 monete. Questo attacco infligge 60 danni per ogni testa.",
                de: "Wirf 2 Münzen. Dieser Angriff verursacht 60 Schaden pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 60 pontos de dano para cada cara.",
                "zh-tw": "擲2次硬幣,造成正面出現的次數×60點傷害。",
                ja: "コインを2回投げ、オモテの数×60ダメージ。",
                ko: "동전을 2번 던져서 앞면이 나온 수 × 60데미지를 준다."
            },
            damage: "60x"
        }
    ],
    retreat: 1
};
export default card;
