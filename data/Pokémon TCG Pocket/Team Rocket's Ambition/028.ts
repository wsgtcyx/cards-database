import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/028",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/028",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/028",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/028",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/028",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/028",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/028"
    },
    name: {
        en: "Team Rocket's Hypno",
        fr: "Hypnomade de la Team Rocket",
        es: "Hypno del Team Rocket",
        it: "Hypno del Team Rocket",
        de: "Team Rockets Hypno",
        "pt-br": "Hypno da Equipe Rocket",
        "zh-tw": "火箭隊的引夢貘人",
        ko: "로켓단의 슬리퍼",
        ja: "ロケット団のスリーパー"
    },
    illustrator: "Nisota Niso",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Psychic"],
    evolveFrom: {
        en: "Team Rocket's Drowzee",
        fr: "Soporifik de la Team Rocket",
        es: "Drowzee del Team Rocket",
        it: "Drowzee del Team Rocket",
        de: "Team Rockets Traumato",
        "pt-br": "Drowzee da Equipe Rocket",
        "zh-tw": "火箭隊的催眠貘",
        ko: "로켓단의 슬리프",
        ja: "ロケット団のスリープ"
    },
    stage: "Stage1",
    description: {
        en: "Always holding a pendulum that it swings at a steady rhythm, it causes drowsiness in anyone nearby.",
        fr: "Il tient toujours un pendule qui va et vient de façon régulière et peut endormir tout étre aux alentours.",
        es: "Lleva siempre un péndulo que hace oscilar a un ritmo constante y con el que causa sueño a quien se acerque.",
        it: "Ha sempre con sé un pendolo che agita a ritmo regolare. Fa assopire chiunque gli si avvicini.",
        de: "Es hält immer ein Pendel, welches es in einem gleichmäßigen Rhythmus bewegt. Dies verursacht bei jedem in seiner Nähe Müdigkeit.",
        "pt-br": "Sempre carrega um pêndulo que fica balançando em ritmo constante, causando sonolência em qualquer pessoa que se aproxime.",
        "zh-tw": "會以固定的節奏擺動著形影不離的鐘擺。一靠近牠就會不由自主地昏昏欲睡。"
    },
    attacks: [
        {
            cost: ["Psychic", "Psychic"],
            name: {
                en: "Entrap",
                fr: "Traquenard",
                es: "Atrapar",
                it: "Intrappolamento",
                de: "Falle stellen",
                "pt-br": "Armação",
                "zh-tw": "設下圈套"
            },
            effect: {
                en: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot. If you do, this attack does 50 damage to the new Active Pokémon.",
                fr: "Envoyez un des Pokémon de Banc de votre adversaire sur le Poste Actif. Dans ce cas, cette attaque inflige 50 dégâts au nouveau Pokémon Actif.",
                es: "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo. Si lo haces, este ataque inflige 50 puntos de daño al nuevo Pokémon Activo.",
                it: "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Se lo fai, questo attacco infligge 50 danni al nuovo Pokémon attivo.",
                de: "Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein. Wenn du das machst, fügt diese Attacke dem neuen Aktiven Pokémon 50 Schadenspunkte zu.",
                "pt-br": "Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo. Se fizer isso, este ataque causará 50 pontos de dano ao novo Pokémon Ativo.",
                "zh-tw": "選擇對手的1隻備戰寶可夢,與戰鬥寶可夢互換。然後,新上場的寶可夢受到50點傷害。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
