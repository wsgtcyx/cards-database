import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/103",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/103",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/103",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/103",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/103",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/103",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/103",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B3/103",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B3/103"
    },
    name: {
        en: "Qwilfish",
        fr: "Qwilfish",
        es: "Qwilfish",
        it: "Qwilfish",
        de: "Baldorfish",
        "pt-br": "Qwilfish",
        "zh-tw": "千針魚",
        ko: "침바루",
        ja: "ハリーセン"
    },
    illustrator: "Sumiyoshi Kizuki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Darkness"],
    dexId: [211],
    stage: "Basic",
    description: {
        en: "Experienced fishers say they try to catch Qwilfish in the brief moment that these Pokémon become defenseless just after launching poisonous spikes.",
        fr: "Les pêcheurs expérimentés disent qu'ils essaient d'attraper Qwilfish dans le bref instant où ces Pokémon deviennent sans défense juste après avoir lancé des pointes venimeuses.",
        es: "Los pescadores experimentados dicen que intentan capturar Qwilfish en el breve momento en que estos Pokémon quedan indefensos justo después de lanzar púas venenosas.",
        it: "I pescatori esperti dicono che cercano di catturare Qwilfish nel breve istante in cui questi Pokémon diventano indifesi subito dopo aver lanciato aculei velenosi.",
        de: "Erfahrene Fischer sagen, dass sie versuchen, Baldorfish in dem kurzen Moment zu fangen, in dem diese Pokémon wehrlos werden, kurz nachdem sie giftige Stacheln abgefeuert haben.",
        "pt-br": "Pescadores experientes dizem que tentam capturar Qwilfish no breve momento em que esses Pokémon ficam indefesos logo após lançarem espinhos venenosos.",
        "zh-tw": "經驗豐富的漁民表示，他們試圖在這些寶可夢發射毒刺後變得毫無防禦能力的短暫瞬間捕獲 千針魚。",
        ja: "毒針を 撃ち出した 直後の 無防備な 状態を 狙うと ベテランの 漁師は 語る。",
        ko: "독침을 발사한 직후의\n무방비 상태를 노려야 한다는 것이\n베테랑 어부의 조언."
    },
    attacks: [
        {
            cost: ["Darkness", "Colorless"],
            name: {
                en: "Spiny Rush",
                fr: "Assaut Épineux",
                es: "Envite Espinoso",
                it: "Aculeoraffica",
                de: "Stachelsturm",
                "pt-br": "Arremetida Espinhosa",
                "zh-tw": "尖刺猛攻",
                ja: "とげラッシュ",
                ko: "가시러쉬"
            },
            effect: {
                en: "Flip a coin until you get tails. This attack does 40 damage for each heads.",
                fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 40 dégâts pour chaque tête.",
                es: "Lanza una moneda hasta que obtengas cruz. Este ataque hace 40 daños por cada cabeza.",
                it: "Lancia una moneta finché non esce croce. Questo attacco infligge 40 danni per ogni testa.",
                de: "Wirf eine Münze, bis du „Zahl“ erhältst. Dieser Angriff verursacht 40 Schaden pro Kopf.",
                "pt-br": "Jogue uma moeda até obter coroa. Este ataque causa 40 de dano para cada cabeça.",
                "zh-tw": "拋一枚硬幣，直到出現反面。這次攻擊對每個頭造成 40 點傷害。",
                ja: "ウラが出るまでコインを投げ、オモテの数×40ダメージ。",
                ko: "뒷면이 나올 때까지 동전을 던져서 앞면이 나온 수 × 40데미지를 준다."
            },
            damage: "40x"
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
