import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3b/057",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3b/057",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3b/057",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3b/057",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3b/057",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3b/057",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3b/057",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3b/057",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3b/057"
    },
    name: {
        en: "Snorlax ex",
        "fr": "Ronflex-ex",
        "es": "Snorlax ex",
        "it": "Snorlax-ex",
        "de": "Relaxo-ex",
        "pt-br": "Snorlax ex",
        "zh-tw": "卡比獸ex",
        ja: "カビゴンex",
        ko: "잠만보 ex",
    },
    illustrator: "PLANETA Tsuji",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 160,
    types: ["Colorless"],
    stage: "Basic",
    suffix: "EX",
    abilities: [{
            type: "Ability",
            name: {
                en: "Full-Mouth Manner",
                "fr": "Manière à pleine bouche",
                "es": "Manera de hablar con la boca llena",
                "it": "Modalità a bocca piena",
                "de": "Full-Mouth-Manier",
                "pt-br": "Maneira de boca cheia",
                "zh-tw": "滿嘴的方式",
                ja: "ほおばりぐせ",
                ko: "볼가득 버릇"
            },
            effect: {
                en: "At the end of your turn, if this Pokémon is in the Active Spot, heal 20 damage from it.",
                "fr": "À la fin de votre tour, si ce Pokémon est dans le Point Actif, soignez-lui 20 dégâts.",
                "es": "Al final de tu turno, si este Pokémon está en el Punto Activo, cúrale 20 puntos de daño.",
                "it": "Alla fine del tuo turno, se questo Pokémon è in posizione attiva, curalo da 20 danni.",
                "de": "Wenn sich dieses Pokémon am Ende deines Zuges an der aktiven Stelle befindet, heile 20 Schadenspunkte bei ihm.",
                "pt-br": "No final do seu turno, se este Pokémon estiver no Ponto Ativo, cure 20 pontos de dano dele.",
                "zh-tw": "在你的回合結束時，如果這只神奇寶貝位於活躍位置，則治療它造成的 20 點傷害。",
                ja: "自分の番の終わりに、このポケモンがバトル場にいるなら、このポケモンのHPを20回復。",
                ko: "자신의 차례의 마지막에 이 포켓몬이 배틀필드에 있다면 이 포켓몬의 HP를 20회복."
            }
        }],
    attacks: [{
            name: {
                en: "Flop-Down Punch",
                "fr": "Poinçon rabattable",
                "es": "Golpe de caída",
                "it": "Pugno cadente",
                "de": "Flop-Down-Schlag",
                "pt-br": "Soco Flop-Down",
                "zh-tw": "下翻拳",
                ja: "たおれこみパンチ",
                ko: "자빠지기펀치"
            },
            damage: 130,
            cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
            effect: {
                en: "This Pokémon is now Asleep.",
                "fr": "Ce Pokémon est maintenant endormi.",
                "es": "Este Pokémon ahora está Dormido.",
                "it": "Questo Pokémon è addormentato.",
                "de": "Dieses Pokémon schläft jetzt.",
                "pt-br": "Este Pokémon agora está dormindo.",
                "zh-tw": "這只神奇寶貝現在已經睡著了。",
                ja: "このポケモンをねむりにする。",
                ko: "이 포켓몬을 잠듦으로 만든다."
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 4
};
export default card;
