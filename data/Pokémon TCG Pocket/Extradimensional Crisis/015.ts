import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3a/015",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3a/015",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3a/015",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3a/015",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3a/015",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3a/015",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3a/015",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3a/015",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3a/015"
    },
    name: {
        en: "Luxray",
        "fr": "Luxray",
        "es": "Luxray",
        "it": "Luxray",
        "de": "Luxtra",
        "pt-br": "Luxray",
        "zh-tw": "倫琴貓",
        ja: "レントラー",
        ko: "렌트라",
    },
    illustrator: "Masakazu Fukuda",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Lightning"],
    evolveFrom: {
        en: "Luxio",
        "fr": "Luxio",
        "es": "Luxio",
        "it": "Luxio",
        "de": "Luxio",
        "pt-br": "Luxio",
        "zh-tw": "勒克貓",
        ja: "ルクシオ",
        ko: "럭시오",
    },
    description: {
        en: "It can see clearly through walls to track down its\nprey and seek its lost young.",
        "fr": "Il peut voir clairement à travers les murs pour retrouver sa trace.\nproie et chercher ses petits perdus.",
        "es": "Puede ver claramente a través de las paredes para localizar su\npresa y busca a sus crías perdidas.",
        "it": "Può vedere chiaramente attraverso i muri per rintracciarlo\npreda e cerca i suoi piccoli perduti.",
        "de": "Es kann deutlich durch Wände sehen, um es aufzuspüren\nBeute machen und seine verlorenen Jungen suchen.",
        "pt-br": "Ele pode ver claramente através das paredes para rastrear seu\ncaçar e procurar seus filhotes perdidos.",
        "zh-tw": "它可以透過牆壁清晰地看到它的踪跡\n捕食並尋找它失去的幼崽。",
        ja: "壁の向こうも 見える 力で 逃げた 獲物を 追いつめるほかにも 迷子の 子どもを 捜したりする。",
        ko: "벽 저편까지 볼 수 있는 힘으로\n도망친 먹이를 쫓는 것 이외에도\n미아가 된 아이를 찾기도 한다."
    },
    stage: "Stage2",
    abilities: [{
            type: "Ability",
            name: {
                en: "Intimidating Fang",
                "fr": "Croc intimidant",
                "es": "Colmillo intimidante",
                "it": "Zanna intimidatoria",
                "de": "Einschüchternder Fang",
                "pt-br": "Presa Intimidadora",
                "zh-tw": "恐嚇方",
                ja: "いかくのキバ",
                ko: "위협엄니"
            },
            effect: {
                en: "As long as this Pokémon is in the Active Spot, attacks used by your opponent's Active Pokémon do −20 damage.",
                "fr": "Tant que ce Pokémon est dans le Point Actif, les attaques utilisées par le Pokémon Actif de votre adversaire infligent -20 dégâts.",
                "es": "Mientras este Pokémon esté en el Punto Activo, los ataques utilizados por el Pokémon Activo de tu rival causan −20 de daño.",
                "it": "Fintanto che questo Pokémon è in posizione attiva, gli attacchi usati dal Pokémon attivo del tuo avversario infliggono -20 danni.",
                "de": "Solange sich dieses Pokémon an der aktiven Stelle befindet, verursachen Angriffe des aktiven Pokémon deines Gegners −20 Schadenspunkte.",
                "pt-br": "Enquanto este Pokémon estiver no Ponto Ativo, os ataques usados pelo Pokémon Ativo do seu oponente causarão -20 de dano.",
                "zh-tw": "只要這只神奇寶貝在活躍點，對手的活躍神奇寶貝使用的攻擊就會造成−20點傷害。",
                ja: "このポケモンがバトル場にいるかぎり、相手のバトルポケモンが使うワザのダメージを-20する。",
                ko: "이 포켓몬이 배틀필드에 있는 한, 상대의 배틀 포켓몬이 사용하는 기술의 데미지를 -20한다."
            }
        }],
    attacks: [{
            name: {
                en: "Electric Ball",
                "fr": "Boule électrique",
                "es": "Bola eléctrica",
                "it": "Palla elettrica",
                "de": "Elektrischer Ball",
                "pt-br": "Bola Elétrica",
                "zh-tw": "電動球",
                ja: "ライトニングボール",
                ko: "라이트닝볼"
            },
            damage: 90,
            cost: ["Lightning", "Lightning", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
