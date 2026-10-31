import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/172",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/172",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/172",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/172",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/172",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/172",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/172",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B3/172",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B3/172"
    },
    name: {
        en: "Kubfu",
        fr: "Wushours",
        es: "Kubfu",
        it: "Kubfu",
        de: "Dakuma",
        "pt-br": "Kubfu",
        "zh-tw": "熊徒弟",
        ko: "치고마",
        ja: "ダクマ"
    },
    illustrator: "Uninori",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    dexId: [891],
    stage: "Basic",
    description: {
        en: "Kubfu trains hard to perfect its moves. The moves it masters will determine which form it takes when it evolves.",
        fr: "Il suit un entraînement rigoureux pour parfaire\nses techniques. La forme de son évolution\ndépend des capacités qu’il a assimilées.",
        es: "Perfecciona su técnica mediante una estricta\ndisciplina. Según la corriente marcial que siga,\nadoptará una forma u otra al evolucionar.",
        it: "Affina le sue mosse sottoponendosi a duri\nallenamenti. La forma assunta dopo l’evoluzione\ncambia a seconda delle mosse padroneggiate.",
        de: "Durch rigoroses Training perfektioniert es seine\nKampftechnik. Diese bestimmt, welche Form\nDakuma nach der Entwicklung annimmt.",
        "pt-br": "Kubfu treina muito para aperfeiçoar seus movimentos. Os movimentos que ele dominar determinarão a forma que ele assumirá quando evoluir.",
        "zh-tw": "藉由累積嚴苛的鍛鍊來\n磨練招式。進化後的樣子\n會根據牠領會的招式而不同。",
        ja: "厳しい 鍛錬を 積み 技を 磨く。 体得した 技によって 進化したときの 姿が 変わる。",
        ko: "혹독한 수련을 거듭하며 기술을\n갈고닦는다. 체득한 기술에 따라\n진화했을 때의 모습이 달라진다."
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Training",
                fr: "Entraînement",
                es: "Entrenamiento",
                it: "Allenamento",
                de: "Training",
                "pt-br": "Treinamento",
                "zh-tw": "鍛鍊",
                ja: "たんれん",
                ko: "단련"
            },
            effect: {
                en: "Take a {C} Energy from your Energy Zone and attach it to this Pokémon.",
                fr: "Prenez une Énergie {C} de votre Zone d'Énergie et attachez-la à ce Pokémon.",
                es: "Toma una Energía {C} de tu Zona de Energía y únela a este Pokémon.",
                it: "Prendi un'Energia {C} dalla tua Zona Energetica e assegnala a questo Pokémon.",
                de: "Nimm eine {C}-Energie aus deiner Energiezone und lege sie an dieses Pokémon an.",
                "pt-br": "Pegue uma Energia {C} da sua Zona de Energia e ligue-a a este Pokémon.",
                "zh-tw": "從你的能量區取出一個{C}能量並將其附加到那個寶可夢上。",
                ja: "自分のエネルギーゾーンから{C}エネルギーを1個出し、このポケモンにつける。",
                ko: "자신의 에너지존에서 {C}에너지를 1개 내보내 이 포켓몬에게 붙인다."
            }
        }
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
