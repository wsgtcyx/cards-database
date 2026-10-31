import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/030",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/030",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/030",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/030",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/030",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/030",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/030",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4b/030",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4b/030"
    },
    name: {
        en: "Shaymin",
        "fr": "Shaymin",
        "es": "Shaymin",
        "it": "Shaymin",
        "de": "Shaymin",
        "pt-br": "Shaymin",
        "zh-tw": "謝米",
        ja: "シェイミ",
        ko: "쉐이미",
    },
    illustrator: "Narumi Sato",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    description: {
        en: "It can dissolve toxins in the air to instantly\ntransform ruined land into a lush field of flowers.",
        "fr": "Il peut dissoudre instantanément les toxines dans l'air.\ntransformez une terre en ruine en un champ de fleurs luxuriant.",
        "es": "Puede disolver toxinas en el aire al instante.\ntransforma la tierra en ruinas en un exuberante campo de flores.",
        "it": "Può dissolvere istantaneamente le tossine nell'aria\ntrasformare la terra in rovina in un rigoglioso campo di fiori.",
        "de": "Es kann Giftstoffe in der Luft sofort auflösen\nVerwandeln Sie zerstörtes Land in ein üppiges Blumenfeld.",
        "pt-br": "Pode dissolver toxinas no ar instantaneamente\ntransformar terras em ruínas em um exuberante campo de flores.",
        "zh-tw": "能瞬間溶解空氣中的毒素\n將荒蕪的土地變成鬱鬱蔥蔥的花田。",
        ja: "大気の 毒素を 分解して 荒れた 大地を 一瞬のうちに 花畑にする 力を 持つ。",
        ko: "대기의 독소를 분해해서\n거칠어진 대지를 일순간에\n꽃밭으로 만드는 힘을 가지고 있다."
    },
    stage: "Basic",
    abilities: [{
            type: "Ability",
            name: {
                en: "Fragrant Flower Garden",
                "fr": "Jardin de fleurs parfumées",
                "es": "Jardín de flores fragantes",
                "it": "Giardino fiorito profumato",
                "de": "Duftender Blumengarten",
                "pt-br": "Jardim de flores perfumadas",
                "zh-tw": "香花園",
                ja: "かおるはなぞの",
                ko: "향기로운 화원"
            },
            effect: {
                en: "Once during your turn, you may heal 10 damage from each of your Pokémon.",
                "fr": "Une fois pendant votre tour, vous pouvez soigner 10 dégâts de chacun de vos Pokémon.",
                "es": "Una vez durante tu turno, puedes curar 10 daños de cada uno de tus Pokémon.",
                "it": "Una sola volta durante il tuo turno, puoi curare 10 danni a ciascuno dei tuoi Pokémon.",
                "de": "Einmal während deines Zuges kannst du 10 Schadenspunkte bei jedem deiner Pokémon heilen.",
                "pt-br": "Uma vez durante o seu turno, você pode curar 10 pontos de dano de cada um dos seus Pokémon.",
                "zh-tw": "在你的回合中，你可以治療每隻神奇寶貝造成的 10 點傷害。",
                ja: "自分の番に1回使える。自分のポケモン全員のHPを10回復。",
                ko: "자신의 차례에 1번 사용할 수 있다. 자신의 포켓몬 전원의 HP를 10회복."
            }
        }],
    attacks: [{
            name: {
                en: "Flop",
                "fr": "Fiasco",
                "es": "Fracaso",
                "it": "Flop",
                "de": "Flop",
                "pt-br": "Fracasso",
                "zh-tw": "翻牌",
                ja: "はねまわる",
                ko: "돌아다니며 뛰기"
            },
            damage: 30,
            cost: ["Grass", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
