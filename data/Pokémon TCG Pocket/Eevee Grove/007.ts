import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3b/007",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3b/007",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3b/007",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3b/007",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3b/007",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3b/007",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3b/007",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3b/007",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3b/007"
    },
    name: {
        en: "Appletun",
        "fr": "Dratatin",
        "es": "Appletun",
        "it": "Appletun",
        "de": "Schlapfel",
        "pt-br": "Appletun",
        "zh-tw": "豐蜜龍",
        ja: "タルップル",
        ko: "단지래플",
    },
    illustrator: "Akira Komayama",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    evolveFrom: {
        en: "Applin",
        "fr": "Verpom",
        "es": "Applin",
        "it": "Applin",
        "de": "Knapfel",
        "pt-br": "Applin",
        "zh-tw": "啃果蟲",
        ja: "カジッチュ",
        ko: "과사삭벌레",
    },
    description: {
        en: "It feeds mainly on sweet apples. It will also eat\nsmall bug Pokémon that are attracted by its\nsweet nectar.",
        "fr": "Il se nourrit principalement de pommes sucrées. Il mangera aussi\npetits Pokémon insectes attirés par son\ndoux nectar.",
        "es": "Se alimenta principalmente de manzanas dulces. también comerá\npequeños Pokémon bicho que se sienten atraídos por su\ndulce néctar.",
        "it": "Si nutre principalmente di mele dolci. Mangerà anche\npiccoli Pokémon bug che sono attratti dai suoi\ndolce nettare.",
        "de": "Es ernährt sich hauptsächlich von süßen Äpfeln. Es wird auch fressen\nkleine Käfer-Pokémon, die davon angezogen werden\nsüßer Nektar.",
        "pt-br": "Alimenta-se principalmente de maçãs doces. Também vai comer\npequenos insetos Pokémon que são atraídos por seu\ndoce néctar.",
        "zh-tw": "它主要以甜蘋果為食。它也會吃\n被其吸引的小蟲子神奇寶貝\n甜蜜的花蜜。",
        ja: "主食は 甘い りんご。 甘い 蜜に 誘われ 寄ってくる 小型の 虫ポケモンも 食べる。",
        ko: "달콤한 사과가 주식이다.\n달콤한 꿀에 이끌려 찾아오는\n작은 벌레포켓몬을 먹을 때도 있다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Sweets Relay",
                "fr": "Relais des Bonbons",
                "es": "Relevo de dulces",
                "it": "Relè dei dolci",
                "de": "Süßigkeiten-Staffel",
                "pt-br": "Revezamento de Doces",
                "zh-tw": "糖果接力賽",
                ja: "スイーツリレー",
                ko: "스위트릴레이"
            },
            damage: "40+",
            cost: ["Grass"],
            effect: {
                en: "If 1 of your Pokémon used Sweets Relay during your last turn, this attack does 30 more damage.",
                "fr": "Si 1 de vos Pokémon a utilisé Relais Bonbons lors de votre dernier tour, cette attaque inflige 30 dégâts supplémentaires.",
                "es": "Si 1 de tus Pokémon usó Sweets Relay durante tu último turno, este ataque hace 30 daños más.",
                "it": "Se 1 dei tuoi Pokémon ha utilizzato Sweets Relay durante il tuo ultimo turno, questo attacco infligge 30 danni in più.",
                "de": "Wenn eines deiner Pokémon in deinem letzten Zug „Sweet Relay“ verwendet hat, fügt dieser Angriff 30 weitere Schadenspunkte zu.",
                "pt-br": "Se 1 dos seus Pokémon usou Sweets Relay durante seu último turno, este ataque causará 30 de dano a mais.",
                "zh-tw": "如果你的 1 個神奇寶貝在你的最後回合中使用了糖果接力，則此攻擊造成的傷害增加 30 點。",
                ja: "前の自分の番、自分のポケモンが「スイーツリレー」を使っていたなら、30ダメージ追加。",
                ko: "자신의 이전 차례에 자신의 포켓몬이 「스위트릴레이」를 사용했다면 30데미지를 추가한다."
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 3
};
export default card;
