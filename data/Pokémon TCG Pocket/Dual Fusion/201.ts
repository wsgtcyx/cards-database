import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/201",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/201",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/201",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/201",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/201",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/201",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/201",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/201",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/201"
    },
    name: {
        en: "Morpeko",
        fr: "Morpeko",
        es: "Morpeko",
        "pt-br": "Morpeko",
        "zh-tw": "莫魯貝可",
        ja: "モルペコ",
        ko: "모르페코",
        it: "Morpeko",
        de: "Morpeko"
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 70,
    types: [
        "Darkness"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Energizer Wheel",
                fr: "Roue Énergisante",
                es: "Rueda Vigorizante",
                it: "Ruota Energizzante",
                de: "Energiespendendes Rad",
                "pt-br": "Roda Energizante",
                "zh-tw": "能量車輪",
                ja: "エネしゃりん",
                ko: "에너지차륜"
            },
            cost: [
                "Darkness",
                "Darkness"
            ],
            damage: 50,
            effect: {
                en: "Move 2 {D} Energy from this Pokémon to 1 of your Benched Pokémon.",
                fr: "Déplacez 2 Énergies {D} de ce Pokémon vers un de vos Pokémon de Banc.",
                es: "Mueve 2 Energías {D} de este Pokémon a 1 de tus Pokémon en Banca.",
                it: "Sposta 2 Energie {D} da questo Pokémon a uno di quelli della tua panchina.",
                de: "Verschiebe 2 {D}-Energien von diesem Pokémon auf 1 Pokémon auf deiner Bank.",
                "pt-br": "Mova 2 Energias {D} deste Pokémon para 1 dos seus Pokémon no Banco.",
                "zh-tw": "將這隻寶可夢身上的2個{D}能量,改附於1隻備戰寶可夢身上。",
                ja: "このポケモンから{D}エネルギーを2個、ベンチポケモン1匹につけ替える。",
                ko: "이 포켓몬에서 {D}에너지를 2개 벤치 포켓몬 1마리에게 바꿔 붙인다."
            }
        }
    ],
    abilities: [],
    description: {
        en: "Hunger has disrupted this Pokémon’s hormonal balance. The Electric-type energy stored in its cheek sacs has turned into Dark-type energy.",
        fr: "Lorsqu’il a faim, il subit un dérèglement hormonal et l’énergie emmagasinée dans les poches de ses joues passe du type Électrik au type Ténèbres.",
        es: "Cuando tiene hambre, sufre un desequilibrio hormonal que transforma la electricidad de sus carrillos en energía de tipo Siniestro.",
        it: "La fame provoca in lui uno squilibrio ormonale che fa diventare di tipo Buio l’energia elettrica contenuta nelle sue guance.",
        de: "Wenn es Hunger hat, gerät sein Hormonhaushalt aus dem Gleichgewicht und die Elektro-Energie in seinen Backentaschen nimmt den Typ Unlicht an.",
        "pt-br": "A fome causou um desequilíbrio hormonal neste Pokémon. A energia do tipo Elétrico armazenada em suas bochechas se transformou em energia do tipo Sombrio.",
        "zh-tw": "因飢餓而導致的荷爾蒙失調，在頰囊中的電能轉化成了惡屬性的能量。",
        ja: "空腹で ホルモンバランスが 乱れて 頬袋の エネルギーが 電気から 悪タイプに 変わった。",
        ko: "공복으로 호르몬의 균형이 무너져서\n볼주머니의 에너지가\n전기타입에서 악타입으로 변했다."
    }
};

export default card;
