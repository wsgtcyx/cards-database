import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/037/0474808b283b311c",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/037/0474808b283b311c",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/037/0474808b283b311c",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/037/0474808b283b311c",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/037/0474808b283b311c",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/037/0474808b283b311c",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/037/0474808b283b311c",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/037/0474808b283b311c",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/037/0474808b283b311c"
    },
    name: {
        en: "Frigibax",
        fr: "Frigodo",
        es: "Frigibax",
        it: "Frigibax",
        de: "Frospino",
        "pt-br": "Frigibax",
        "zh-tw": "涼脊龍",
        ko: "드니차",
        ja: "セビエ"
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    dexId: [996],
    stage: "Basic",
    description: {
        en: "This Pokémon lives in forests and craggy areas. Using the power of its dorsal fin, it cools the inside of its nest like a refrigerator.",
        fr: "Il vit dans les zones rocheuses et les forêts. Sa crête dorsale lui permet de refroidir l'intérieur de son nid à la manière d'un congélateur.",
        es: "Vive en bosques y entornos pedregosos. Se vale del poder de su placa dorsal para refrigerar su madriguera como si fuera un frigorífico.",
        it: "Vive nelle foreste e in aree rocciose. Usa la cresta dorsale per raffreddare l'interno della tana quasi come fosse un frigorifero.",
        de: "Es lebt in Wäldern und Felsgebieten. Mit der Kraft seiner Rückenflosse kühlt es sein Nest wie eine Gefriertruhe herunter.",
        "pt-br": "Este Pokémon vive em florestas e áreas escarpadas. Usando o poder de sua barbatana dorsal, resfria seu ninho da mesma forma que um refrigerador.",
        "zh-tw": "棲息在岩石地帶或森林裡。會用背鰭的力量將巢穴裡的溫度降到如冷凍庫般寒冷。",
        ja: "岩場や 森林に 生息する。 背びれの 力で 巣穴の中を 冷凍庫のように 冷やしている。",
        ko: "암석 지대나 삼림에 서식한다.\n등지느러미의 힘으로 굴 안을\n냉장고처럼 차갑게 만든다."
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Stiffen",
                fr: "Raidissement",
                es: "Endurecimiento",
                it: "Indurimento",
                de: "Verhärten",
                "pt-br": "Fortificar",
                "zh-tw": "凝固",
                ja: "かたまる",
                ko: "딱딱해지기"
            },
            effect: {
                en: "During your opponent's next turn, this Pokémon takes -20 damage from attacks.",
                fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit - 20 dégâts provenant des attaques.",
                es: "Durante el próximo turno de tu rival, los ataques hacen -20 puntos de daño a este Pokémon.",
                it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -20 danni dagli attacchi.",
                de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken - 20 Schadenspunkte zugefügt.",
                "pt-br": "Durante o próximo turno do seu oponente, este Pokémon receberá -20 pontos de dano de ataques.",
                "zh-tw": "在下個對手的回合,這隻寶可夢受到招式的傷害-20點。",
                ja: "次の相手の番、このポケモンが受けるワザのダメージを-20する。",
                ko: "상대의 다음 차례에 이 포켓몬이 받는 기술의 데미지를 -20한다."
            }
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol5"]
};

export default card;
