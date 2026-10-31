import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/277",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/277",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/277",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/277",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/277",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/277",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/277",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4b/277",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4b/277"
    },
    name: {
        en: "Magikarp",
        fr: "Magicarpe",
        es: "Magikarp",
        it: "Magikarp",
        de: "Karpador",
        "pt-br": "Magikarp",
        "zh-tw": "鯉魚王",
        ja: "コイキング",
        ko: "잉어킹"
    },
    illustrator: "Yukiko Baba",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 30,
    types: [
        "Water"
    ],
    description: {
        en: "In the distant past, it was somewhat stronger than\nthe horribly weak descendants that exist today.",
        fr: "Il paraît que ses lointains ancêtres étaient assez puissants, mais les spécimens d'aujourd'hui sont extrêmement faibles.",
        es: "En un pasado lejano, era más fuerte de lo que hoy son sus débiles descendientes.",
        it: "Pare che anticamente fosse un tantino più forte. Oggi è così debole da fare quasi pena.",
        de: "Die urzeitlichen Vorfahren dieses Pokémon waren etwas stärker als ihre heutigen, kümmerlichen Nachkommen.",
        "pt-br": "No passado distante, era um pouco mais forte que os descendentes terrivelmente fracos que existem hoje.",
        "zh-tw": "很久以前的鯉魚王好像比現在強上一些，但是現在卻弱得可憐。",
        ja: "大昔は まだ もう少し 強かったらしい。しかし 今は 悲しいくらいに 弱いのだ。",
        ko: "아주 먼 옛날에는 좀 더\n강했던 것 같다. 그러나 지금은\n안쓰러울 정도로 약하다."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Waterfall Evolution",
                fr: "Évolution en Cascade",
                es: "Evolución Cascada",
                it: "Cascata Evolutiva",
                de: "Kaskadenentwicklung",
                "pt-br": "Cachoeira de Evolução",
                "zh-tw": "攀瀑進化",
                ja: "たきのぼりしんか",
                ko: "폭포오르기 진화"
            },
            cost: [
                "Water",
                "Water",
                "Colorless"
            ],
            effect: {
                en: "Put a random card from your deck that evolves from this Pokémon onto this Pokémon to evolve it.",
                fr: "Prenez au hasard une carte pouvant faire évoluer ce Pokémon dans votre deck, puis placez‐la sur ce Pokémon pour le faire évoluer.",
                es: "Pon una carta aleatoria de tu baraja que evolucione de este Pokémon sobre este Pokémon para hacerlo evolucionar.",
                it: "Prendi una carta a caso che si evolve da questo Pokémon dal mazzo e mettigliela sopra per farlo evolvere.",
                de: "Lege eine zufällige Karte aus deinem Deck, die sich aus diesem Pokémon entwickelt, auf dieses Pokémon, um es zu entwickeln.",
                "pt-br": "Coloque uma carta aleatória do seu baralho que evolua deste Pokémon sobre este Pokémon para evoluí-lo.",
                "zh-tw": "從自己的牌庫隨機將1張從這隻寶可夢進化而來的卡,放置於這隻寶可夢身上完成進化。",
                ja: "このポケモンから進化するカードを、自分の山札からランダムに1枚、このポケモンにのせて進化させる。",
                ko: "이 포켓몬에서 진화하는 카드를 자신의 덱에서 랜덤으로 1장 이 포켓몬에게 올려서 진화시킨다."
            }
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
