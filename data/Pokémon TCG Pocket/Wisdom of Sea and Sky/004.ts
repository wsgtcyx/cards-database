import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/004",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/004",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/004",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/004",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/004",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/004",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/004",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4/004",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4/004"
    },
    name: {
        en: "Tangela",
        "fr": "Saquedeneu",
        "es": "Tangela",
        "it": "Tangela",
        "de": "Tangela",
        "pt-br": "Tangela",
        "zh-tw": "蔓藤怪",
        ja: "モンジャラ",
        ko: "덩쿠리",
    },
    illustrator: "OOYAMA",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    description: {
        en: "Hidden beneath a tangle of vines that grows\nnonstop even if the vines are torn off, this\nPokémon's true appearance remains a mystery.",
        "fr": "Caché sous un enchevêtrement de vignes qui poussent\nnon-stop même si les vignes sont arrachées, cela\nLa véritable apparence de Pokémon reste un mystère.",
        "es": "Escondido debajo de una maraña de enredaderas que crece\nsin parar incluso si las enredaderas son arrancadas, esto\nLa verdadera apariencia de Pokémon sigue siendo un misterio.",
        "it": "Nascosto sotto un groviglio di viti che cresce\nsenza sosta anche se le viti vengono strappate, questo\nIl vero aspetto dei Pokémon rimane un mistero.",
        "de": "Versteckt unter einem Gewirr von Weinreben, das wächst\nununterbrochen, auch wenn die Reben abgerissen werden\nDas wahre Aussehen des Pokémon bleibt ein Rätsel.",
        "pt-br": "Escondido sob um emaranhado de vinhas que cresce\nsem parar, mesmo que as vinhas sejam arrancadas, isso\nA verdadeira aparência do Pokémon permanece um mistério.",
        "zh-tw": "隱藏在生長的藤蔓下面\n即使藤蔓被扯斷也不停歇，這\n神奇寶貝的真實面貌仍然是個謎。",
        ja: "ちぎれても 無限に 伸びる ツルの 奥の 正体は いまだ 解明されていない。",
        ko: "잘려도 잘려도 무한으로 늘어나는\n덩굴 속의 정체는\n아직 밝혀지지 않았다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Sleep Powder",
                "fr": "Poudre de sommeil",
                "es": "Polvo para dormir",
                "it": "Polvere per dormire",
                "de": "Schlafpulver",
                "pt-br": "Pó para dormir",
                "zh-tw": "睡眠粉",
                ja: "ねむりごな",
                ko: "수면가루"
            },
            damage: 20,
            cost: ["Grass", "Colorless"],
            effect: {
                en: "Your opponent's Active Pokémon is now Asleep.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Endormi.",
                "es": "El Pokémon Activo de tu rival ahora está Dormido.",
                "it": "Il Pokémon attivo del tuo avversario è addormentato.",
                "de": "Das aktive Pokémon deines Gegners schläft jetzt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Adormecido.",
                "zh-tw": "你對手的活躍神奇寶貝現在處於睡眠狀態。",
                ja: "相手のバトルポケモンをねむりにする。",
                ko: "상대의 배틀 포켓몬을 잠듦으로 만든다."
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["ho-oh"]
};
export default card;
