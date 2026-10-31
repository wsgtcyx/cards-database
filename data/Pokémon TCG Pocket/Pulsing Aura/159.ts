import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/159",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/159",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/159",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/159",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/159",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/159",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/159",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B3/159",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B3/159"
    },
    name: {
        en: "Budew",
        fr: "Rozbouton",
        es: "Budew",
        it: "Budew",
        de: "Knospi",
        "pt-br": "Budew",
        "zh-tw": "含羞苞",
        ko: "꼬몽울",
        ja: "スボミー"
    },
    illustrator: "Yuka Tanaka",
    rarity: "One Star",
    category: "Pokemon",
    hp: 30,
    types: ["Grass"],
    dexId: [406],
    stage: "Basic",
    description: {
        en: "This Pokémon is highly sensitive to temperature changes. When its bud starts to open, that means spring is right around the corner.",
        fr: "Il est sensible aux variations de température.\nQuand son bourgeon commence à s’ouvrir,\nl’arrivée du printemps est imminente.",
        es: "Es muy sensible a los cambios de temperatura.\nAnuncia la llegada inminente de la primavera\ncuando florece.",
        it: "È sensibile agli sbalzi di temperatura.\nQuando le sue gemme si schiudono\nè segno che la primavera è vicina.",
        de: "Es hat ein feines Gespür für die kleinsten\nTemperaturveränderungen. Wenn sich seine\nKnospe öffnet, bricht bald der Frühling an.",
        "pt-br": "Este Pokémon é altamente sensível às mudanças de temperatura. Quando seu botão começa a se abrir, isso significa que a primavera está chegando.",
        "zh-tw": "對氣溫的變化很敏感。\n當牠開始打開花苞，\n便是冬去春來之時。",
        ja: "気温の 変化に 敏感。 つぼみが 開きはじめたら 春の 訪れは もうすぐだ。",
        ko: "기온 변화에 민감하다.\n봉오리가 피기 시작하면\n곧 봄이 온다."
    },
    attacks: [
        {
            name: {
                en: "Prickly Powder",
                fr: "Poudre qui Pique",
                es: "Polvo Irritante",
                it: "Polvere Urticante",
                de: "Stechender Puder",
                "pt-br": "Pó Pinicante",
                "zh-tw": "痛痛粉",
                ja: "ひりひりパウダー",
                ko: "얼얼파우더"
            },
            effect: {
                en: "The Defending Pokémon loses all Abilities. This effect lasts until the Defending Pokémon leaves the Active Spot.",
                fr: "Le Pokémon Défenseur perd toutes ses capacités. Cet effet dure jusqu'à ce que le Pokémon défenseur quitte le point actif.",
                es: "El Pokémon defensor pierde todas las habilidades. Este efecto dura hasta que el Pokémon Defensor abandona el Punto Activo.",
                it: "Il Pokémon difensore perde tutte le abilità. Questo effetto dura finché il Pokémon difensore non lascia il punto attivo.",
                de: "Das verteidigende Pokémon verliert alle Fähigkeiten. Dieser Effekt hält an, bis das verteidigende Pokémon den aktiven Bereich verlässt.",
                "pt-br": "O Pokémon Defensor perde todas as Habilidades. Este efeito dura até que o Pokémon Defensor deixe o Ponto Ativo.",
                "zh-tw": "防守的寶可夢失去所有能力。此效果持續到防守寶可夢離開活動地點為止。",
                ja: "このワザを受けたポケモンの特性を、すべてなくす。この効果は、このワザを受けたポケモンがバトル場をはなれるまで続く。",
                ko: "이 기술을 받은 포켓몬의 특성을 모두 없앤다. 이 효과는 이 기술을 받은 포켓몬이 배틀필드를 떠날 때까지 계속된다."
            },
            damage: 10
        }
    ],
    retreat: 0
};

export default card;
