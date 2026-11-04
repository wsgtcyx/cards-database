import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/012/9780cb521e3abe93",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/012/9780cb521e3abe93",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/012/9780cb521e3abe93",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/012/9780cb521e3abe93",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/012/9780cb521e3abe93",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/012/9780cb521e3abe93",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/012/9780cb521e3abe93",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/012/9780cb521e3abe93",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/012/9780cb521e3abe93"
    },
    name: {
        en: "Meowth",
        fr: "Miaouss",
        es: "Meowth",
        it: "Meowth",
        de: "Mauzi",
        'pt-br': "Meowth",
        ja: "ニャース",
        ko: "나옹",
        "zh-tw": "喵喵"
    },
    illustrator: "Shigenori Negishi",
    rarity: "Three Diamond",
    category: "Pokemon",
    types: ["Colorless"],
    stage: "Basic",
    attacks: [{
            name: {
                en: "Pay Day",
                fr: "Jackpot",
                es: "Día de Pago",
                it: "Giornopaga",
                de: "Zahltag",
                'pt-br': "Dia de Pagamento",
                ja: "ネコにこばん",
                ko: "고양이돈받기",
                "zh-tw": "聚寶功"
            },
            cost: ["Colorless"],
            damage: 10,
            effect: {
                en: "Draw a card.",
                fr: "Piochez une carte.",
                es: "Roba 1 carta.",
                it: "Pesca una carta.",
                de: "Ziehe 1 Karte.",
                'pt-br': "Compre 1 carta.",
                ja: "自分の山札を1枚引く。",
                ko: "자신의 덱을 1장 뽑는다.",
                "zh-tw": "從自己的牌庫抽出1張卡。"
            }
        }],
    hp: 60,
    description: {
        en: "All it does is sleep during the daytime. At night,\nit patrols its territory with its eyes aglow.",
        fr: "Il passe ses journées à dormir. La nuit venue,\nil patrouille sur son territoire, les yeux brillants.",
        es: "Durante el día, se dedica a dormir.\nDe noche, vigila su territorio con un brillo en los ojos.",
        it: "Di giorno non fa che dormire, mentre la notte\nperlustra il suo territorio con gli occhi luccicanti.",
        de: "Es schläft den ganzen Tag. Nachts patrouilliert es\nsein Revier mit glühenden Augen.",
        'pt-br': "Tudo o que este Pokémon faz é dormir\ndurante o dia. À noite, patrulha seu\nterritório com seus olhos brilhantes.",
        ja: "昼間は 寝てばかりいる。 夜になると 目が 輝き 縄張りを 歩きまわる。",
        ko: "낮에는 거의 잠만 잔다.\n밤이 되면 눈을 반짝이며\n영역을 돌아다닌다.",
        "zh-tw": "白天一直都在睡覺。到了晚上眼睛就會發光，在自己的地盤徘徊。"
    },
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: []
};
export default card;
