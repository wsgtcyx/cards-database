import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/337",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/337",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/337",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/337",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/337",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/337",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/337",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4b/337",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4b/337"
    },
    name: {
        en: "Metang",
        fr: "Métang",
        es: "Metang",
        it: "Metang",
        de: "Metang",
        "pt-br": "Metang",
        "zh-tw": "金屬怪",
        ja: "メタング",
        ko: "메탕구"
    },
    illustrator: "Kazuma Koda",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: [
        "Metal"
    ],
    dexId: [
        375
    ],
    evolveFrom: {
        en: "Beldum",
        fr: "Terhal",
        es: "Beldum",
        it: "Beldum",
        de: "Tanhel",
        "pt-br": "Beldum",
        "zh-tw": "鐵啞鈴",
        ja: "ダンバル",
        ko: "메탕"
    },
    stage: "Stage1",
    description: {
        en: "It adores magnetic minerals, so it pursues Nosepass at speeds exceeding 60 mph.",
        fr: "Ce Pokémon raffole des minéraux qui émettent des ondes magnétiques. Il peut pourchasser un Tarinor à une vitesse de 100 km/h.",
        es: "Le encanta comer minerales con propiedades magnéticas. Se desplaza a más de 100 km/h rastreando Nosepass.",
        it: "È ghiotto di minerali dotati di proprietà magnetiche. Quando dà la caccia ai Nosepass, può raggiungere i 100 km/h.",
        de: "Es liebt Mineralien, die Magnetfelder erzeugen, weshalb es Nasgnet mit einem Tempo von 100 km/h hinterherjagt.",
        "pt-br": "Adora minerais magnéticos, então persegue Nosepass a velocidades que ultrapassam 100 km/h.",
        "zh-tw": "非常喜歡能放出磁力的礦物。會以１００公里的時速窮追朝北鼻。",
        ja: "磁力を 放つ 鉱物が 好物。 時速 １００キロで ノズパスを 追いつめるぞ。",
        ko: "자력을 발산하는 광물을\n좋아한다. 시속 100km로\n코코파스를 몰아넣는다."
    },
    attacks: [
        {
            cost: [
                "Metal",
                "Colorless"
            ],
            name: {
                en: "Bullet Punch",
                fr: "Pisto-Poing",
                es: "Puño Bala",
                it: "Pugnoscarica",
                de: "Patronenhieb",
                "zh-tw": "子彈拳",
                "pt-br": "Soco Projétil",
                ja: "バレットパンチ",
                ko: "불릿펀치"
            },
            effect: {
                en: "Flip 2 coins. This attack does 20 more damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
                es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño más por cada cara.",
                it: "Lancia 2 volte una moneta. Questo attacco infligge 20 danni in più ogni volta che esce testa.",
                de: "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte mehr pro Kopf zu.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 20 pontos de dano a mais para cada cara.",
                "zh-tw": "擲2次硬幣,增加正面出現的次數×20點傷害。",
                ja: "コインを2回投げ、オモテの数×20ダメージ追加。",
                ko: "동전을 2번 던져서 앞면이 나온 수 × 20데미지를 추가한다."
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
