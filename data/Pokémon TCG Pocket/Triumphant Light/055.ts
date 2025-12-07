import { Card } from "../../../interfaces";
import Set from "../Triumphant Light";
const card: Card = {
    set: Set,
    name: {
        en: "Magnezone",
        fr: "Magnézone",
        es: "Magnezone",
        it: "Magnezone",
        de: "Magnezone",
        'pt-br': "Magnezone",
        ko: "자포코일",
        "zh-tw": "自爆磁怪",
    },
    illustrator: "toriyufu",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Metal"],
    evolveFrom: {
        en: "Magneton",
        "fr": "Magnéton",
        "es": "Magnetón",
        "it": "Magnetone",
        "de": "Magneton",
        "pt-br": "Magnetão",
        "zh-tw": "三合一磁怪",
    },
    description: {
        en: "As it zooms through the sky, this Pokémon seems to be receiving signals of unknown origin while transmitting signals of unknown purpose.",
        fr: "Il parcourt le ciel en émettant et en\nrecevant des ondes bien mystérieuses.",
        es: "Se dice que mientras vuela emite unas ondas eléctricas\nmisteriosas, a la vez que recibe otras ondas desconocidas.",
        it: "Vola per il cielo inviando misteriose onde\nelettromagnetiche e ricevendo onde sconosciute.",
        de: "Es heißt, dass es beim Herumfliegen mysteriöse Funkwellen\naussende und unbekannte Wellen empfange.",
        'pt-br': "Dizem que enquanto voa pelo céu, emite ondas\neletromagnéticas misteriosas enquanto recebe\nondas desconhecidas.",
        ko: "괴전파를 발신하며 하늘을 날면서\n미지의 전파를 수신한다고 한다.",
        "zh-tw": "當它在天空中疾馳時，這只神奇寶貝似乎在接收來歷不明的信號，同時發射目的不明的信號。"
    },
    stage: "Stage2",
    abilities: [{
            type: "Ability",
            name: {
                en: "Resilience Link",
                fr: "Lien Protection",
                es: "Vínculo Protector",
                it: "Tenacia Simbiotica",
                de: "Widerstandskopplung",
                'pt-br': "Elo de Resiliência",
                ko: "가드 링크",
                "zh-tw": "彈性鏈接"
            },
            effect: {
                en: "If you have Arceus or Arceus ex in play, this Pokémon takes −30 damage from attacks.",
                fr: "Si vous avez Arceus ou Arceus-ex en jeu, ce Pokémon subit − 30 dégâts provenant des attaques.",
                es: "Si tienes a Arceus o Arceus ex en juego, los ataques hacen -30 puntos de daño a este Pokémon.",
                it: "Se hai in gioco Arceus o Arceus-ex, questo Pokémon subisce -30 danni dagli attacchi.",
                de: "Wenn du Arceus oder Arceus-ex im Spiel hast, werden diesem Pokémon durch Attacken − 30 Schadenspunkte zugefügt.",
                'pt-br': "Se você tiver Arceus ou Arceus ex em jogo, este Pokémon receberá −30 pontos de dano de ataques.",
                ko: "자신의 필드에 「아르세우스」 또는 「아르세우스 ex」 있다면 이 포켓몬이 받는 기술의 데미지를 -30한다.",
                "zh-tw": "如果你場上有阿爾宙斯或阿爾宙斯 ex，這只神奇寶貝受到的攻擊傷害為 -30。"
            }
        }],
    attacks: [{
            name: {
                en: "Power Beam",
                fr: "Puissant Rayon",
                es: "Rayo de Luz Poderoso",
                it: "Raggiopotenza",
                de: "Power-Strahl",
                'pt-br': "Raio de Poder",
                ko: "파워빔",
                "zh-tw": "動力光束"
            },
            damage: 80,
            cost: ["Metal", "Metal", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
