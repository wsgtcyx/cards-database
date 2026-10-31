import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/052",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/052",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/052",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/052",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/052",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/052",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/052",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B3/052",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B3/052"
    },
    name: {
        en: "Magnemite",
        fr: "Magnéti",
        es: "Magnemite",
        it: "Magnemite",
        de: "Magnetilo",
        "pt-br": "Magnemite",
        "zh-tw": "小磁怪",
        ko: "코일",
        ja: "コイル"
    },
    illustrator: "Masakazu Fukuda",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    dexId: [81],
    stage: "Basic",
    description: {
        en: "It moves while constantly hovering. It discharges electromagnetic waves and so on from the units at its sides.",
        fr: "Il se déplace en planant constamment. Il décharge des ondes électromagnétiques, etc., depuis les unités situées sur ses côtés.",
        es: "Se mueve mientras flota constantemente. Descarga ondas electromagnéticas y demás desde las unidades a sus lados.",
        it: "Si muove restando costantemente sospeso. Scarica le onde elettromagnetiche e così via dalle unità ai suoi lati.",
        de: "Es bewegt sich, während es ständig schwebt. Es leitet elektromagnetische Wellen usw. von den Einheiten an seinen Seiten ab.",
        "pt-br": "Ele se move enquanto paira constantemente. Ele descarrega ondas eletromagnéticas e assim por diante das unidades laterais.",
        "zh-tw": "它在不斷懸停的同時移動。從其側面的單元釋放電磁波等。",
        ja: "空中に 浮いたまま 移動して 左右の ユニットから 電磁波などを 放射する。",
        ko: "공중에 뜬 채로 이동하며\n좌우의 유닛에서\n전자파를 방사한다."
    },
    attacks: [
        {
            cost: ["Lightning", "Lightning"],
            name: {
                en: "Thunder Shock",
                fr: "Éclair",
                es: "Impactrueno",
                it: "Tuonoshock",
                de: "Donnerschock",
                "pt-br": "Trovoada de Choques",
                "zh-tw": "電擊",
                ja: "でんきショック",
                ko: "전기쇼크"
            },
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
                fr: "Lancez une pièce de monnaie. Si c'est face, le Pokémon Actif de votre adversaire est désormais Paralysé.",
                es: "Lanza una moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
                it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario è paralizzato.",
                de: "Wirf eine Münze. Bei „Kopf“ ist das Aktive Pokémon deines Gegners jetzt gelähmt.",
                "pt-br": "Jogue uma moeda. Se der cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
                "zh-tw": "拋一枚硬幣。如果正面，則對手的戰鬥寶可夢現在處於麻痺狀態。",
                ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
                ko: "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 마비로 만든다."
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
