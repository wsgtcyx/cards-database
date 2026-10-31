import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/004",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/004",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/004",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/004",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/004",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/004",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/004",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4b/004",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4b/004"
    },
    name: {
        en: "Caterpie",
        fr: "Chenipan",
        es: "Caterpie",
        it: "Caterpie",
        de: "Raupy",
        "pt-br": "Caterpie",
        "zh-tw": "綠毛蟲",
        ja: "キャタピー",
        ko: "캐터피"
    },
    illustrator: "Shibuzoh.",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 40,
    types: [
        "Grass"
    ],
    dexId: [
        10
    ],
    stage: "Basic",
    description: {
        en: "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.",
        fr: "Ses petites pattes munies de ventouses lui permettent de monter les pentes et de grimper aux murs sans se fatiguer.",
        es: "Sus cortas patas están recubiertas de ventosas que le permiten subir incansable por muros y cuestas.",
        it: "Le ventose sulle sue corte zampe gli permettono di affrontare ogni salita e di scalare senza fatica qualsiasi muro.",
        de: "Es hat Saugnäpfe an den Beinchen, mit denen es mühelos Steigungen und Mauern erklimmen kann.",
        "pt-br": "Seus pés curtos contam com ventosas que permitem que escale penhascos e paredes sem se cansar.",
        "zh-tw": "別看牠的腳很短，因為是吸盤，所以無論是斜坡還是牆壁都能輕鬆前進。",
        ja: "脚は 短いが 吸盤に なっているので 坂でも 壁でも くたびれることなく 進んでいく。",
        ko: "다리는 짧지만 빨판으로\n되어 있어 비탈길이나 벽에서도\n지치지 않고 나아간다."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Quick Growth",
                fr: "Poussée de Croissance",
                es: "Crecimiento Rápido",
                it: "Crescita Repentina",
                de: "Wachstumsspurt",
                "pt-br": "Estirão Acelerado",
                "zh-tw": "成長期",
                ja: "のびざかり",
                ko: "자라는 시기"
            },
            effect: {
                en: "At the end of your opponent's turn, if this Pokémon is in the Active Spot, put a random card from your deck that evolves from this Pokémon onto this Pokémon to evolve it.",
                fr: "À la fin du tour de votre adversaire, si ce Pokémon est sur le Poste Actif, prenez au hasard une carte qui évolue à partir de ce Pokémon dans votre deck, puis placez‐la sur ce Pokémon pour le faire évoluer.",
                es: "Al final del turno de tu rival, si este Pokémon está en el Puesto Activo, pon una carta aleatoria de tu baraja que evolucione de este Pokémon sobre este Pokémon para hacerlo evolucionar.",
                it: "Alla fine del turno del tuo avversario, se questo Pokémon è in posizione attiva, prendi dal mazzo una carta a caso che si evolve da questo Pokémon e mettigliela sopra per farlo evolvere.",
                de: "Lege am Ende des Zuges deines Gegners, wenn dieses Pokémon in der Aktiven Position ist, eine zufällige Karte aus deinem Deck, die sich aus diesem Pokémon entwickelt, auf dieses Pokémon, um es zu entwickeln.",
                "pt-br": "No final do turno do seu oponente, se este Pokémon estiver no Campo Ativo, coloque uma carta aleatória do seu baralho que evolua deste Pokémon sobre este Pokémon para evoluí-lo.",
                "zh-tw": "在對手的回合結束時,若這隻寶可夢在戰鬥場上,則從自己的牌庫隨機將1張從這隻寶可夢進化而來的卡,放置於這隻寶可夢身上完成進化。",
                ja: "相手の番の終わりに、このポケモンがバトル場にいるなら、このポケモンから進化するカードを、自分の山札からランダムに1枚、このポケモンにのせて進化させる。",
                ko: "상대의 차례 마지막에 이 포켓몬이 배틀필드에 있다면 이 포켓몬에서 진화하는 카드를 자신의 덱에서 랜덤으로 1장 이 포켓몬에게 올려서 진화시킨다."
            }
        }
    ],
    attacks: [
        {
            cost: [
                "Grass"
            ],
            name: {
                en: "Hook",
                fr: "Crochet",
                es: "Garfio",
                it: "Uncino",
                de: "Haken",
                "pt-br": "Gancho",
                "zh-tw": "鉤住",
                ja: "ひっかける",
                ko: "걸기"
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
