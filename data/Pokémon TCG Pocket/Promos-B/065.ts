import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/065/d0e5e7155ce640ee",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/065/d0e5e7155ce640ee",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/065/d0e5e7155ce640ee",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/065/d0e5e7155ce640ee",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/065/d0e5e7155ce640ee",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/065/d0e5e7155ce640ee",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/065/d0e5e7155ce640ee",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/065/d0e5e7155ce640ee",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/065/d0e5e7155ce640ee"
    },
    name: {
        en: "Vaporeon",
        fr: "Aquali",
        es: "Vaporeon",
        it: "Vaporeon",
        de: "Aquana",
        "pt-br": "Vaporeon",
        "zh-tw": "水伊布",
        ko: "샤미드",
        ja: "シャワーズ"
    },
    illustrator: "kodama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Water"],
    dexId: [134],
    evolveFrom: {
        en: "Eevee",
        fr: "Évoli",
        es: "Eevee",
        it: "Eevee",
        de: "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布",
        ko: "이브이",
        ja: "イーブイ"
    },
    stage: "Stage1",
    description: {
        en: "Its cell composition is similar to water molecules. As a result, it can’t be seen when it melts away into water.",
        fr: "Sa composition moléculaire est proche de celle de l'eau, ce qui lui permet de s'y fondre complètement.",
        es: "La composición celular de su cuerpo es tan similar a la estructura molecular del agua que se vuelve invisible al fundirse en ella.",
        it: "La sua composizione cellulare è simile a quella delle molecole d'acqua, in cui si può dissolvere diventando invisibile.",
        de: "Seine Zellstruktur ist der von Wassermolekülen ähnlich. Daher kann es mit Wasser verschmelzen und so unsichtbar werden.",
        "pt-br": "A composição das suas células é semelhante às moléculas da água. Como resultado, ele não pode ser visto quando se derrete na água.",
        "zh-tw": "身體細胞的結構與水分子相似，因此當牠與水融為一體時將無法看見牠的身影。",
        ja: "体の 細胞の つくりが 水の 分子に 似ているため 水に 溶けると 見えなくなる。",
        ko: "몸의 세포 구조가\n물 분자와 닮았기 때문에\n물에 녹아들면 보이지 않는다."
    },
    attacks: [
        {
            cost: ["Water", "Water"],
            name: {
                en: "Impound",
                fr: "Confiscation",
                es: "Confiscar",
                it: "Isolamento",
                de: "Festsetzen",
                "pt-br": "Apreensão",
                "zh-tw": "圍困",
                ja: "かこいこむ",
                ko: "가둬두기"
            },
            effect: {
                en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
                fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
                es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
                it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
                de: "Während des nächsten Zuges deines Gegners kann sich das verteidigende Pokémon nicht zurückziehen.",
                "pt-br": "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
                "zh-tw": "在下個對手的回合,受到這個招式的寶可夢無法撤退。",
                ja: "次の相手の番、このワザを受けたポケモンはにげるができない。",
                ko: "상대의 다음 차례에 이 기술을 받은 포켓몬은 후퇴할 수 없다."
            },
            damage: 60
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 2,
    boosters: ["vol9"]
};

export default card;
