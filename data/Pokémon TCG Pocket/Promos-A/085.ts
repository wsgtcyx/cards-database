import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/085/8f69c52905a0e767",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/085/8f69c52905a0e767",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/085/8f69c52905a0e767",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/085/8f69c52905a0e767",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/085/8f69c52905a0e767",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/085/8f69c52905a0e767",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/085/8f69c52905a0e767",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/085/8f69c52905a0e767",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/085/8f69c52905a0e767"
    },
    name: {
        en: "Vanillite",
        es: "Vanillite",
        "fr": "Sorbébé",
        "it": "Vanillite",
        "de": "Gelatini",
        "pt-br": "Vanillite",
        "zh-tw": "迷你冰",
        ja: "バニプッチ",
        ko: "바닐프티",
    },
    illustrator: "OOYAMA",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "Unable to survive in hot areas, it makes itself\ncomfortable by breathing out air cold enough to\ncause snow. It burrows into the snow to sleep.",
        es: "No puede vivir en lugares muy cálidos. Provoca\nnevadas exhalando un vaho gélido y luego se\nacurruca en la nieve acumulada para dormir.",
        "fr": "Il ne peut pas vivre dans les contrées chaudes. Il souffle un air glacial pour faire tomber la neige, puis s'y plonge pour dormir.",
        "it": "Non può vivere nei luoghi caldi. Fa nevicare esalando un alito gelido e poi si addormenta immerso nella neve che si è accumulata.",
        "de": "Gelatini kann nicht an warmen Orten leben. Es erzeugt Schnee, indem es kalte Luft ausatmet, und vergräbt sich dann darin, um zu schlafen.",
        "pt-br": "Por ser incapaz de sobreviver em regiões quentes, expira ar gelado para fazer nevar e tornar o ambiente ao seu redor mais confortável. Enterra-se na neve para dormir.",
        "zh-tw": "無法在炎熱的地方生存。會吐出冷氣來降雪，然後窩在積雪裡睡覺。",
        ja: "暑い 土地では 暮らせない。 冷気を 吐いて 雪を 降らせ 積もった 中に 潜って 眠る。",
        ko: "더운 곳에서는 살 수 없다.\n냉기를 뿜어 눈을 내리게 한 뒤\n쌓인 눈 속에 들어가 잠든다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Sweets Relay",
                es: "Relevo Dulce",
                "fr": "Saupoudrage Sucré",
                "it": "Dolce Staffetta",
                "de": "Süße Staffel",
                "pt-br": "Revezamento Doce",
                "zh-tw": "甜點砸砸砸",
                ja: "スイーツリレー",
                ko: "스위트릴레이"
            },
            damage: "10+",
            cost: ["Water"],
            effect: {
                en: "If 1 of your Pokémon used Sweets Relay during your last turn, this attack does 20 more damage.",
                es: "Si 1 de tus Pokémon usó Relevo Dulce durante tu último turno, este ataque hace 20 puntos de daño más.",
                "fr": "Si un de vos Pokémon a utilisé Saupoudrage Sucré lors de votre dernier tour, cette attaque inflige 20 dégâts supplémentaires.",
                "it": "Se uno dei tuoi Pokémon ha usato Dolce Staffetta durante il tuo ultimo turno, questo attacco infligge 20 danni in più.",
                "de": "Wenn 1 deiner Pokémon während deines letzten Zuges Süße Staffel eingesetzt hat, fügt diese Attacke 20 Schadenspunkte mehr zu.",
                "pt-br": "Se 1 dos seus Pokémon usou Revezamento Doce durante o seu último turno, este ataque causará 20 pontos de dano a mais.",
                "zh-tw": "在上個自己的回合,若自己的寶可夢使用了「甜點砸砸砸」,則增加20點傷害。",
                ja: "前の自分の番、自分のポケモンが「スイーツリレー」を使っていたなら、20ダメージ追加。",
                ko: "자신의 이전 차례에 자신의 포켓몬이 「스위트릴레이」를 사용했다면 20데미지를 추가한다."
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["vol10"]
};
export default card;
