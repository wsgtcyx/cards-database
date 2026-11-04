import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/044/bd2795805544527d",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/044/bd2795805544527d",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/044/bd2795805544527d",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/044/bd2795805544527d",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/044/bd2795805544527d",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/044/bd2795805544527d",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/044/bd2795805544527d",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/044/bd2795805544527d",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/044/bd2795805544527d"
    },
    name: {
        en: "Varoom",
        fr: "Vrombi",
        es: "Varoom",
        it: "Varoom",
        de: "Knattox",
        "pt-br": "Varoom",
        "zh-tw": "噗隆隆",
        ko: "부르롱",
        ja: "ブロロン"
    },
    illustrator: "Kouki Saitou",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Metal"],
    dexId: [965],
    stage: "Basic",
    description: {
        en: "The steel section is Varoom’s actual body. This Pokémon clings to rocks and converts the minerals within into energy to fuel its activities.",
        fr: "Son corps correspond à la partie en acier. Il s'accroche à des roches et convertit les minéraux qu'elles contiennent en énergie.",
        es: "La parte metálica es su verdadero cuerpo. Se adhiere a rocas para procesar sus minerales y generar energía para moverse.",
        it: "Il suo corpo è la parte d'acciaio. Si attacca alle rocce per trasformare la materia di cui sono composte nell'energia che usa per muoversi.",
        de: "Der stählerne Teil ist sein eigentlicher Körper. Es heftet sich an Felsen, um deren Bestandteile in Energie für sich selbst umzuwandeln.",
        "pt-br": "A parte de aço é o corpo verdadeiro de Varoom. Este Pokémon prende-se às rochas e converte os minerais existentes em energia para abastecer suas atividades.",
        "zh-tw": "鋼鐵身軀才是本體。會貼在岩石上將其成分轉換成活動用的能量。",
        ja: "鋼の 体が 本体。 岩に 張りつき その成分を エネルギーに 変えて 活動する。",
        ko: "강철로 된 몸이 본체다.\n바위에 달라붙은 다음,\n그 성분을 에너지로 바꿔 활동한다."
    },
    attacks: [
        {
            cost: ["Metal"],
            name: {
                en: "Poison Gas",
                fr: "Gaz Toxik",
                es: "Gas Venenoso",
                it: "Velenogas",
                de: "Giftwolke",
                "pt-br": "Gás Venenoso",
                "zh-tw": "毒瓦斯",
                ja: "どくガス",
                ko: "독가스"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
                es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
                it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
                de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Envenenado.",
                "zh-tw": "將對手的戰鬥寶可夢中毒。",
                ja: "相手のバトルポケモンをどくにする。",
                ko: "상대의 배틀 포켓몬을 독으로 만든다."
            }
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol6"]
};

export default card;
