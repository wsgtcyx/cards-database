import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/012",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/012",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/012",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/012",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/012",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/012",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/012",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/012",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/012"
    },
    name: {
        en: "Amoonguss",
        fr: "Gaulet",
        es: "Amoonguss",
        "pt-br": "Amoonguss",
        "zh-tw": "敗露球菇",
        ja: "モロバレル",
        ko: "뽀록나",
        it: "Amoonguss",
        de: "Hutsassa"
    },
    illustrator: "Kagemaru Himeno",
    rarity: "Two Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 100,
    types: [
        "Grass"
    ],
    stage: "Stage1",
    retreat: 2,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Foongus",
        fr: "Trompignon",
        es: "Foongus",
        it: "Foongus",
        de: "Tarnpignon",
        "pt-br": "Foongus",
        "zh-tw": "哎呀球菇",
        ja: "タマゲタケ",
        ko: "깜놀버슬"
    },
    attacks: [
        {
            name: {
                en: "Astonish",
                fr: "Étonnement",
                es: "Impresionar",
                it: "Sgomento",
                de: "Erstauner",
                "pt-br": "Abismar",
                "zh-tw": "驚嚇",
                ja: "おどろかす",
                ko: "놀래키기"
            },
            cost: [
                "Colorless",
                "Grass"
            ],
            damage: 50,
            effect: {
                en: "Look at a random card from your opponent's hand and shuffle it into their deck.",
                fr: "Regardez une carte au hasard de la main de votre adversaire et mélangez‐la à son deck.",
                es: "Mira 1 carta aleatoria de la mano de tu rival, ponla de nuevo en su baraja y baraja todas las cartas.",
                it: "Il tuo avversario mostra una carta a caso dalla mano e la rimischia nel suo mazzo.",
                de: "Schau dir 1 zufällige Karte aus der Hand deines Gegners an und mische sie in sein Deck.",
                "pt-br": "Olhe 1 carta aleatória da mão do seu oponente e a embaralhe no baralho dele.",
                "zh-tw": "從對手的手牌隨機查看1張卡的正面後,放回牌庫。",
                ja: "相手の手札からランダムに1枚、オモテを見て、山札にもどす。",
                ko: "상대의 패에서 랜덤으로 1장 앞면을 보고 덱으로 되돌린다."
            }
        }
    ],
    abilities: [],
    description: {
        en: "Be wary of the poisonous spores it releases. Mushrooms resembling Amoonguss’s caps will grow out of anywhere the spores touch.",
        fr: "Gare aux spores toxiques qu’il libère dans l’air. Des champignons similaires au chapeau de Gaulet poussent partout où elles se posent.",
        es: "Las esporas tóxicas que libera son peligrosas, ya que allí donde caen acaban creciendo unas setas parecidas a los sombreros de los Amoonguss.",
        it: "Attenzione alle spore velenose che rilascia nell’aria. Ovunque si posano cresceranno funghi dall’aspetto simile al cappello di Amoonguss.",
        de: "Vorsicht vor den Giftsporen, die Hutsassa versprüht! Wo auch immer diese landen, wachsen Pilze, die seinen Hüten ähneln.",
        "pt-br": "Tenha cuidado com os esporos venenosos que este Pokémon libera. Cogumelos semelhantes aos capuzes de Amoonguss crescerão em qualquer lugar que os esporos tocarem.",
        "zh-tw": "小心牠噴出的孢子。因為被噴到的地方會長出蘑菇，形狀像是敗露球菇的菌傘。",
        ja: "吹き出す 毒の胞子に 注意。 浴びた 部分から モロバレルの カサに 似た キノコが 生えてくる。",
        ko: "내뿜는 독 포자를 조심해야 한다.\n포자에 닿은 부분에서\n뽀록나의 갓을 닮은 버섯이 자라기 때문이다."
    }
};

export default card;
