import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    boosters: ["vol11"],
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/095/8456c55d69f9b923",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/095/8456c55d69f9b923",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/095/8456c55d69f9b923",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/095/8456c55d69f9b923",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/095/8456c55d69f9b923",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/095/8456c55d69f9b923",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/095/8456c55d69f9b923",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/095/8456c55d69f9b923",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/095/8456c55d69f9b923"
    },
    name: {
        en: "Chinchou",
        "fr": "Loupio",
        "es": "Chinchou",
        "it": "Chinchou",
        "de": "Lampi",
        "pt-br": "Chinchou",
        "zh-tw": "燈籠魚",
        ja: "チョンチー",
        ko: "초라기",
    },
    illustrator: "Aya Kusube",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    description: {
        en: "Its antennae, which evolved from a fin, have both\npositive and negative charges flowing through them.",
        "fr": "Ses antennes proviennent d'anciennes nageoires et sont chargées d'énergies positive et négative.",
        "es": "Sus otrora dos aletas han evolucionado a las actuales antenas y ambas tienen carga positiva y negativa.",
        "it": "Le sue antenne, evoluzione di pinne primitive, sono attraversate da energia elettrica, positiva in una e negativa nell'altra.",
        "de": "Seine Antennen haben sich aus Flossen entwickelt und sind sowohl positiv als auch negativ geladen.",
        "pt-br": "Suas antenas, que evoluíram de uma barbatana, possuem cargas positivas e negativas fluindo entre elas.",
        "zh-tw": "從鰭變化而來的觸手之中，分別流通著正電以及負電。",
        ja: "ひれが 変化して できた 触手は それぞれが プラスと マイナスの 電気が 流れている。",
        ko: "지느러미가 변해서 만들어진\n촉수는 각각 플러스와\n마이너스의 전기가 흐르고 있다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Luring Glow",
                "fr": "Lueur Attrayante",
                "es": "Resplandor Atrayente",
                "it": "Brillincanto",
                "de": "Lockendes Glühen",
                "pt-br": "Brilho Sedutor",
                "zh-tw": "誘導之光",
                ja: "さそうひかり",
                ko: "유인하는빛"
            },
            cost: ["Lightning"],
            effect: {
                en: "Flip a coin. If heads, switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
                "fr": "Lancez une pièce. Si c'est face, envoyez un des Pokémon de Banc de votre adversaire sur le Poste Actif.",
                "es": "Lanza 1 moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
                "it": "Lancia una moneta. Se esce testa, scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
                "de": "Wirf 1 Münze. Wechsle bei Kopf 1 Pokémon von der Bank deines Gegners in die Aktive Position ein.",
                "pt-br": "Jogue uma moeda. Se sair cara, mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo.",
                "zh-tw": "擲1次硬幣若為正面,則選擇對手的1隻備戰寶可夢,與戰鬥寶可夢互換。",
                ja: "コインを1回投げオモテなら、相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
                ko: "동전을 1번 던져서 앞면이 나오면 상대의 벤치 포켓몬을 1마리 선택해서 배틀 포켓몬과 교체한다."
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
