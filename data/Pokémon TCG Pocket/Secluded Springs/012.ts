import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4a/012",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4a/012",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4a/012",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4a/012",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4a/012",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4a/012",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4a/012",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4a/012",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4a/012"
    },
    name: {
        en: "Talonflame",
        "fr": "Flambusard",
        "es": "Talonflame",
        "it": "Talonflame",
        "de": "Fiaro",
        "pt-br": "Talonflame",
        "zh-tw": "烈箭鷹",
        ja: "ファイアロー",
        ko: "파이어로",
    },
    illustrator: "5ban Graphics",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Fire"],
    evolveFrom: {
        en: "Fletchinder",
        "fr": "Braisillon",
        "es": "Fletchinder",
        "it": "Fletchinder",
        "de": "Dartignis",
        "pt-br": "Fletchinder",
        "zh-tw": "火箭雀",
        ja: "ヒノヤコマ",
        ko: "불화살빈",
    },
    description: {
        en: "It has top-notch flying capabilities. It flies\naround easily, even while carrying prey\nthat weighs more than 220 lbs.",
        "fr": "Il possède des capacités de vol de premier ordre. Ça vole\nse déplacer facilement, même en transportant une proie\nqui pèse plus de 220 livres.",
        "es": "Tiene capacidades de vuelo de primer nivel. Vuela\nmoverse fácilmente, incluso mientras lleva presas\nque pesa más de 220 libras.",
        "it": "Ha capacità di volo di prim'ordine. Vola\nmuoversi facilmente, anche mentre trasporta la preda\nche pesa più di 220 libbre.",
        "de": "Es verfügt über erstklassige Flugfähigkeiten. Es fliegt\nleicht herumlaufen, selbst beim Tragen von Beute\ndas mehr als 220 Pfund wiegt.",
        "pt-br": "Possui capacidades de vôo de alto nível. Ele voa\nfacilmente, mesmo carregando uma presa\nque pesa mais de 220 libras.",
        "zh-tw": "它具有一流的飛行能力。它飛\n即使攜帶獵物，也能輕鬆四處走動\n重量超過 220 磅。",
        ja: "飛翔力は トップクラス。 100キロ以上の 獲物を 掴んだまま 楽々 飛びまわる。",
        ko: "비행 능력은 톱클래스다.\n100kg 이상의 먹이를 잡은 채로도\n가뿐히 날아다닌다."
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Searing Flame",
                "fr": "Flamme brûlante",
                "es": "Llama abrasadora",
                "it": "Fiamma Ardente",
                "de": "Sengende Flamme",
                "pt-br": "Chama Abrasadora",
                "zh-tw": "灼熱火焰",
                ja: "やきこがす",
                ko: "태워그을리기"
            },
            damage: 50,
            cost: ["Fire"],
            effect: {
                en: "Your opponent's Active Pokémon is now Burned.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Brûlé.",
                "es": "El Pokémon Activo de tu rival ahora está Quemado.",
                "it": "Il Pokémon attivo del tuo avversario è ora bruciato.",
                "de": "Das aktive Pokémon deines Gegners ist jetzt verbrannt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Queimado.",
                "zh-tw": "你對手的活躍神奇寶貝現在被燒毀了。",
                ja: "相手のバトルポケモンをやけどにする。",
                ko: "상대의 배틀 포켓몬을 화상으로 만든다."
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
