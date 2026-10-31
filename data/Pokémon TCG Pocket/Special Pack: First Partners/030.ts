import { Card } from "../../../interfaces";
import Set from "../Special Pack: First Partners";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/SP1/030",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/SP1/030",
        es: "https://game.pokemontcgpocket.app/es/tcgp/SP1/030",
        it: "https://game.pokemontcgpocket.app/it/tcgp/SP1/030",
        de: "https://game.pokemontcgpocket.app/de/tcgp/SP1/030",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/SP1/030",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/SP1/030",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/SP1/030",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/SP1/030"
    },
    name: {
        en: "Mew",
        fr: "Mew",
        es: "Mew",
        "pt-br": "Mew",
        "zh-tw": "夢幻",
        ja: "ミュウ",
        ko: "뮤",
        it: "Mew",
        de: "Mew"
    },
    illustrator: "YOSHIROTTEN",
    rarity: "Anomaly",
    category: "Pokemon",
    hp: 70,
    types: [
        "Psychic"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Psychic",
                fr: "Psyko",
                es: "Psíquico",
                it: "Psichico",
                de: "Psychokinese",
                "pt-br": "Psíquico",
                "zh-tw": "精神強念",
                ja: "サイコキネシス",
                ko: "사이코키네시스"
            },
            cost: [
                "Colorless",
                "Psychic"
            ],
            damage: "30+",
            effect: {
                en: "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon.",
                fr: "Cette attaque inflige 20 dégâts de plus pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
                es: "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
                it: "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
                de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 20 Schadenspunkte mehr zu.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
                "zh-tw": "增加對手的戰鬥寶可夢身上的能量的數量×20點傷害。",
                ja: "相手のバトルポケモンのエネルギーの数×20ダメージ追加。",
                ko: "상대 배틀 포켓몬의 에너지의 개수 × 20데미지를 추가한다."
            }
        }
    ],
    abilities: [],
    description: {
        en: "So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide.",
        fr: "Unique et rare, son existence est remise en cause par les experts. Peu nombreux sont ceux qui l'ont vu.",
        es: "Es tan raro que muchos expertos opinan que es solo una ilusión. Solo unos pocos lo han visto.",
        it: "È così raro che molti esperti sostengono sia un’illusione. Solo qualcuno al mondo l’ha visto.",
        de: "Viele Experten bezweifeln die Existenz dieses Pokémon. Nur wenige Personen haben es gesehen.",
        "pt-br": "Tão raro que muitos especialistas dizem que é uma miragem. Somente algumas pessoas o viram no mundo todo.",
        "zh-tw": "So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide.",
        ja: "いまでも まぼろしの ポケモンと いわれる。そのすがたを みたものは ぜんこくでも ほとんど いない。",
        ko: "지금도 환상의 포켓몬이라고 전해진다. 그 모습을 본 자는 전국에서도 거의 없다."
    }
};

export default card;
