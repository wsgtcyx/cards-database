import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/034/13f36d0b368b3008",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/034/13f36d0b368b3008",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/034/13f36d0b368b3008",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/034/13f36d0b368b3008",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/034/13f36d0b368b3008",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/034/13f36d0b368b3008",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/034/13f36d0b368b3008",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/034/13f36d0b368b3008",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/034/13f36d0b368b3008"
    },
    name: {
        en: "Smoliv",
        fr: "Olivini",
        es: "Smoliv",
        it: "Smoliv",
        de: "Olini",
        "pt-br": "Smoliv",
        "zh-tw": "迷你芙",
        ko: "미니브",
        ja: "ミニーブ"
    },
    illustrator: "Shibuzoh.",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    dexId: [928],
    stage: "Basic",
    description: {
        en: "This Pokémon converts nutrients into oil, which it stores in the fruit on its head. It can easily go a whole week without eating or drinking.",
        fr: "Ce Pokémon convertit les nutriments en huile qu'il emmagasine dans le fruit qui surmonte sa tête. Il peut passer une semaine sans boire ni manger.",
        es: "Convierte los nutrientes de su dieta en aceite, que almacena en el fruto de la cabeza. Puede pasar una semana sin beber ni comer nada.",
        it: "Trasforma in olio ciò di cui si nutre e lo conserva nel frutto sulla testa. Può facilmente resistere senza bere né mangiare per una settimana intera.",
        de: "Olini wandelt Nährstoffe in Öl um, welches es in der Frucht auf seinem Kopf speichert. Es kommt mühelos eine Woche ohne Essen und Trinken aus.",
        "pt-br": "Este Pokémon transforma nutrientes em óleo, que fica armazenado no fruto da sua cabeça. Pode facilmente passar uma semana sem comer ou beber nada.",
        "zh-tw": "會把營養轉換成油，儲存在頭部的果實裡。1個星期不吃不喝也無所謂。",
        ja: "栄養を オイルにして 頭の 実に 蓄える。 飲まず食わずでも １週間は へっちゃら。",
        ko: "영양분을 오일로 바꿔서 머리의 열매에\n비축한다. 아무것도 먹거나 마시지 않아도\n일주일은 끄떡없다."
    },
    attacks: [
        {
            cost: ["Grass"],
            name: {
                en: "Nutrients",
                fr: "Nutriments",
                es: "Nutrientes",
                it: "Nutrienti",
                de: "Nährstoffe",
                "pt-br": "Nutrientes",
                "zh-tw": "營養素",
                ja: "えいようそ",
                ko: "영양소"
            },
            effect: {
                en: "Heal 20 damage from 1 of your Pokémon.",
                fr: "Soignez 20 dégâts d'un de vos Pokémon.",
                es: "Cura 20 puntos de daño a 1 de tus Pokémon.",
                it: "Cura uno dei tuoi Pokémon da 20 danni.",
                de: "Heile 20 Schadenspunkte bei 1 deiner Pokémon.",
                "pt-br": "Cure 20 pontos de dano de 1 dos seus Pokémon.",
                "zh-tw": "將自己的1隻寶可夢恢復20HP。",
                ja: "自分のポケモン1匹のHPを20回復。",
                ko: "자신의 포켓몬 1마리의 HP를 20회복."
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
    boosters: ["vol5"]
};

export default card;
