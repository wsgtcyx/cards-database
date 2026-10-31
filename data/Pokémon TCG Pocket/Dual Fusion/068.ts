import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/068",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/068",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/068",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/068",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/068",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/068",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/068",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/068"
    },
    name: {
        en: "Dugtrio",
        fr: "Triopikeur",
        es: "Dugtrio",
        "pt-br": "Dugtrio",
        "zh-tw": "三地鼠",
        ja: "ダグトリオ",
        ko: "닥트리오",
        it: "Dugtrio",
        de: "Digdri"
    },
    illustrator: "Yukiko Baba",
    rarity: "Two Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 90,
    types: [
        "Fighting"
    ],
    stage: "Stage1",
    retreat: 1,
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Diglett",
        fr: "Taupiqueur",
        es: "Diglett",
        it: "Diglett",
        de: "Digda",
        "pt-br": "Diglett",
        "zh-tw": "地鼠",
        ja: "ディグダ",
        ko: "Diglett"
    },
    attacks: [
        {
            name: {
                en: "Triple Smash",
                fr: "Triple Éclate",
                es: "Golpe Triple",
                it: "Tripla Schiacciata",
                de: "Dreifachschmetterer",
                "pt-br": "Pancada Tripla",
                "zh-tw": "三重粉碎",
                ja: "トリプルスマッシュ",
                ko: "Triple Smash"
            },
            cost: [
                "Fighting"
            ],
            damage: "30x",
            effect: {
                en: "Flip 3 coins. This attack does 30 damage for each heads.",
                fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
                es: "Lanza 3 monedas. Este ataque hace 30 puntos de daño por cada cara.",
                it: "Lancia 3 volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
                de: "Wirf 3 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu.",
                "pt-br": "Jogue 3 moedas. Este ataque causa 30 pontos de dano para cada cara.",
                "zh-tw": "擲3次硬幣,造成正面出現的次數×30點傷害。",
                ja: "コインを3回投げ、オモテの数×30ダメージ。",
                ko: "Flip 3 coins. This attack does 30 damage for each heads."
            }
        }
    ],
    abilities: [],
    description: {
        en: "Its three heads bob separately up and down to loosen the soil nearby, making it easier for it to burrow.",
        fr: "Ses trois têtes pilonnent le sol pour le rendre friable et ainsi faciliter l’excavation.",
        es: "Sus tres cabezas suben y bajan para remover la tierra cercana y facilitar así la excavación.",
        it: "Le tre teste si muovono alternativamente per ammorbidire il terreno e renderlo così più facile da scavare.",
        de: "Seine drei Köpfe bewegen sich abwechselnd hinauf und hinunter, um das Erdreich um sich herum zu lockern und leichter graben zu können.",
        "pt-br": "Suas três cabeças movem-se separadamente pra cima e pra baixo para amaciarem o solo ao redor, facilitando a escavação.",
        "zh-tw": "三顆頭會輪流活動，是為了讓周圍的土壤變得更鬆更好挖。",
        ja: "３つの 頭が 互い違いに 動くのは まわりの 土を 柔らかくして 掘りやすくするため。",
        ko: "Its three heads bob separately up and down to loosen the soil nearby, making it easier for it to burrow."
    }
};

export default card;
