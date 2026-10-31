import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/193",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/193",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/193",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/193",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/193",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/193",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/193",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/193",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/193"
    },
    name: {
        en: "Dewgong",
        fr: "Lamantine",
        es: "Dewgong",
        "pt-br": "Dewgong",
        "zh-tw": "白海獅",
        ja: "ジュゴン",
        ko: "쥬레곤",
        it: "Dewgong",
        de: "Jugong"
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 120,
    types: [
        "Water"
    ],
    stage: "Stage1",
    retreat: 3,
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Seel",
        fr: "Otaria",
        es: "Seel",
        it: "Seel",
        de: "Jurob",
        "pt-br": "Seel",
        "zh-tw": "小海獅",
        ja: "パウワウ",
        ko: "쥬쥬"
    },
    attacks: [
        {
            name: {
                en: "Dual Blizzard",
                fr: "Double Blizzard",
                es: "Ventisca Doble",
                it: "Doppia Bora",
                de: "Doppelsturm",
                "pt-br": "Nevasca Dupla",
                "zh-tw": "二重暴雪",
                ja: "デュアルブリザード",
                ko: "듀얼블리자드"
            },
            cost: [
                "Water",
                "Water",
                "Water"
            ],
            effect: {
                en: "Discard 2 {W} Energy from this Pokémon, and this attack does 60 damage to 2 of your opponent's Pokémon.",
                fr: "Défaussez 2 Énergies {W} de ce Pokémon. Cette attaque inflige 60 dégâts à 2 des Pokémon de votre adversaire.",
                es: "Descarta 2 Energías {W} de este Pokémon. Este ataque hace 60 puntos de daño a 2 de los Pokémon de tu rival.",
                it: "Rimuovi 2 Energie {W} da questo Pokémon. Questo attacco infligge 60 danni a 2 Pokémon del tuo avversario.",
                de: "Lege 2 {W}-Energien von diesem Pokémon ab und diese Attacke fügt 2 Pokémon deines Gegners 60 Schadenspunkte zu.",
                "pt-br": "Descarte 2 Energias {W} deste Pokémon, e este ataque causa 60 pontos de dano a 2 dos Pokémon do seu oponente.",
                "zh-tw": "將這隻寶可夢身上的2個{W}能量丟棄,對手的2隻寶可夢受到60點傷害。",
                ja: "このポケモンから{W}エネルギーを2個トラッシュし、相手のポケモン2匹に60ダメージ。",
                ko: "이 포켓몬에서 {W}에너지를 2개 트래쉬하고 상대의 포켓몬 2마리에게 60데미지를 준다."
            }
        }
    ],
    abilities: [],
    description: {
        en: "It sleeps under shallow ocean waters during the day, then looks for food at night when it’s colder.",
        fr: "Le jour, il dort dans les eaux peu profondes. La nuit, quand la température de la mer descend, il part à la recherche de nourriture.",
        es: "Duerme en aguas poco profundas durante el día y, por la noche, cuando baja la temperatura del agua, nada en busca de comida.",
        it: "Di giorno dorme su fondali marini poco profondi. Di notte, quando fa più freddo, va alla ricerca di cibo.",
        de: "Des Nachts, wenn die Wassertemperatur fällt, schwimmt es auf der Suche nach Nahrung umher. Tagsüber schläft es im seichten Meereswasser.",
        "pt-br": "Durante o dia, dorme sob águas rasas no oceano. Ao anoitecer, quando a água esfria, sai à procura de alimento.",
        "zh-tw": "會在水溫變低的夜晚為了尋找食物而四處游動。白天會在淺海的海底睡覺。",
        ja: "水の 温度が 下がる 夜 食べものを 求め 泳ぎまわる。 昼間は 浅い 海底で 寝る。",
        ko: "물의 온도가 내려가는 밤에\n먹이를 찾아 헤엄친다.\n낮에는 얕은 해저에서 잔다."
    }
};

export default card;
