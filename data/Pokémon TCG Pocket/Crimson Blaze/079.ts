import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1a/079",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1a/079",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1a/079",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1a/079",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1a/079",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1a/079",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1a/079",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1a/079",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1a/079"
    },
    name: {
        en: "Mega Lopunny ex",
        "fr": "Méga-Lockpin-ex",
        "es": "Mega-Lopunny ex",
        "it": "Mega Lopunny-ex",
        "de": "Mega-Schlapor-ex",
        "pt-br": "Mega Lopunny ex",
        "zh-tw": "超級長耳兔ex",
        ja: "メガミミロップex",
        ko: "메가이어롭 ex"
    },
    illustrator: "PLANETA Yamashita",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 190,
    types: ["Fighting"],
    evolveFrom: {
        en: "Buneary",
        "fr": "Laporeille",
        "es": "Buneary",
        "it": "Buneary",
        "de": "Haspiror",
        "pt-br": "Buneary",
        "zh-tw": "捲捲耳",
        ja: "ミミロル",
        ko: "이어롤"
    },
    description: {
        en: "It swings its ears like whips and strikes its\nenemies with them. It has an intensely\ncombative disposition.",
        "fr": "Il balance ses oreilles comme des fouets et frappe\nennemis avec eux. Il a un effet intense\ndisposition combative.",
        "es": "Agita sus orejas como látigos y golpea sus\nenemigos con ellos. Tiene una intensa\ndisposición combativa.",
        "it": "Fa oscillare le orecchie come fruste e le percuote\nnemici con loro. Ha un intenso\ndisposizione combattiva.",
        "de": "Es schwingt seine Ohren wie eine Peitsche und schlägt mit seinen Ohren\nFeinde mit ihnen. Es hat eine intensive\nkämpferische Gesinnung.",
        "pt-br": "Ele balança as orelhas como chicotes e bate\ninimigos com eles. Tem uma intensidade intensamente\ndisposição combativa.",
        "zh-tw": "它像鞭子一樣擺動耳朵並擊打它\n與他們為敵。它有一種強烈的\n好鬥的性格。",
        ja: "耳を ムチのように しならせて 敵に 打ちつける。 気性は 激しく 好戦的な 気質。",
        ko: "귀를 채찍처럼 휘둘러서 적을 때린다.\n격렬하고 호전적인 기질을 타고났다."
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Rapid Smashers",
                "fr": "Smashers rapides",
                "es": "Aplastadores rápidos",
                "it": "Distruttori rapidi",
                "de": "Schnelle Zertrümmerer",
                "pt-br": "Esmagadores Rápidos",
                "zh-tw": "快速粉碎機",
                ja: "ラピッドスマッシャー",
                ko: "래피드스매셔"
            },
            damage: "90×",
            cost: ["Fighting", "Fighting"],
            effect: {
                en: "Flip 2 coins. This attack does 90 damage for each heads. Your opponent's Active Pokémon is now Confused.",
                "fr": "Lancez 2 pièces. Cette attaque inflige 90 dégâts pour chaque tête. Le Pokémon Actif de votre adversaire est désormais Confus.",
                "es": "Lanza 2 monedas. Este ataque hace 90 daños por cada cabeza. El Pokémon Activo de tu rival ahora está Confundido.",
                "it": "Lancia 2 monete. Questo attacco infligge 90 danni per ogni testa. Il Pokémon attivo del tuo avversario è ora confuso.",
                "de": "Wirf 2 Münzen. Dieser Angriff verursacht 90 Schaden pro Kopf. Das aktive Pokémon deines Gegners ist jetzt verwirrt.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 90 de dano para cada cabeça. O Pokémon Ativo do seu oponente agora está Confuso.",
                "zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 90 點傷害。你對手的活躍神奇寶貝現在處於混亂狀態。",
                ja: "コインを2回投げ、オモテの数×90ダメージ。相手のバトルポケモンをこんらんにする。",
                ko: "동전을 2번 던져서 앞면이 나온 수 × 90데미지를 준다. 상대의 배틀 포켓몬을 혼란으로 만든다."
            }
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 1
};
export default card;
