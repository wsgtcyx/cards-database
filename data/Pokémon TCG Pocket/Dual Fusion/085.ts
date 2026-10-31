import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/085",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/085",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/085",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/085",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/085",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/085",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/085",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/085",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/085"
    },
    name: {
        en: "Mega Tyranitar ex",
        fr: "Méga-Tyranocif-ex",
        es: "Mega-Tyranitar ex",
        "pt-br": "Mega Tyranitar ex",
        "zh-tw": "超級班基拉斯ex",
        ja: "メガバンギラスex",
        ko: "메가마기라스 ex",
        it: "Mega Tyranitar-ex",
        de: "Mega-Despotar-ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 240,
    types: [
        "Darkness"
    ],
    stage: "Stage2",
    retreat: 4,
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Pupitar",
        fr: "Ymphect",
        es: "Pupitar",
        it: "Pupitar",
        de: "Pupitar",
        "pt-br": "Pupitar",
        "zh-tw": "沙基拉斯",
        ja: "サナギラス",
        ko: "데기라스"
    },
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Crushing Rampage",
                fr: "Saccage Écrasant",
                es: "Furia Demoledora",
                it: "Devastazione Furiosa",
                de: "Schmetternde Randale",
                "pt-br": "Fúria Esmagadora",
                "zh-tw": "亂暴粉碎",
                ja: "ランページクラッシュ",
                ko: "램페이지 크래시"
            },
            cost: [
                "Colorless",
                "Colorless",
                "Darkness",
                "Darkness"
            ],
            damage: 180,
            effect: {
                en: "Discard the top 2 cards of your deck.",
                fr: "Défaussez les 2 premières cartes du dessus de votre deck.",
                es: "Descarta las 2 primeras cartas de tu baraja.",
                it: "Scarta le prime 2 carte del tuo mazzo.",
                de: "Lege die obersten 2 Karten deines Decks ab.",
                "pt-br": "Descarte as 2 cartas de cima do seu baralho.",
                "zh-tw": "將自己的牌庫上方2張卡丟棄。",
                ja: "自分の山札を上から2枚トラッシュ。",
                ko: "자신의 덱을 위에서부터 2장 트래쉬한다."
            }
        }
    ],
    abilities: []
};

export default card;
