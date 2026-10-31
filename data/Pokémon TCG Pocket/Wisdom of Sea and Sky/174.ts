import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/174",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/174",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/174",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/174",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/174",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/174",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/174",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4/174",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4/174"
    },
    name: {
        en: "Xatu",
        "fr": "Xatu",
        "es": "Xatu",
        "it": "Xatu",
        "de": "Xatu",
        "pt-br": "Xatu",
        "zh-tw": "天然鳥",
        ja: "ネイティオ",
        ko: "네이티오",
    },
    illustrator: "Masako Tomii",
    rarity: "One Star",
    category: "Pokemon",
    hp: 80,
    types: ["Psychic"],
    evolveFrom: {
        en: "Natu",
        "fr": "Natu",
        "es": "Natu",
        "it": "Natu",
        "de": "Natu",
        "pt-br": "Natu",
        "zh-tw": "天然雀",
        ja: "ネイティ",
        ko: "네이티",
    },
    description: {
        en: "They say that it stays still and quiet because it is\nseeing both the past and future at the same time.",
        "fr": "On dit qu'il reste immobile et silencieux parce qu'il est\nvoir à la fois le passé et le futur.",
        "es": "Dicen que se queda quieto y en silencio porque es\nviendo el pasado y el futuro al mismo tiempo.",
        "it": "Dicono che sta fermo e tranquillo perché è così\nvedere il passato e il futuro allo stesso tempo.",
        "de": "Sie sagen, dass es still und still bleibt, weil es so ist\nVergangenheit und Zukunft gleichzeitig sehen.",
        "pt-br": "Dizem que fica quieto e quieto porque é\nvendo o passado e o futuro ao mesmo tempo.",
        "zh-tw": "他們說它保持靜止和安靜，因為它是\n同時看到過去和未來。",
        ja: "ほとんど 動かず 鳴きもせず じっとするのは 過去と 未来を 見ているからだと 信じられている。",
        ko: "움직이거나 울음소리를 내지 않고\n가만히 있는 것은 과거와 미래를\n보고 있기 때문이라고 여겨진다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Life Drain",
                "fr": "Drain de vie",
                "es": "Drenaje de vida",
                "it": "Prosciugamento della vita",
                "de": "Lebensentzug",
                "pt-br": "Dreno de Vida",
                "zh-tw": "生命汲取",
                ja: "ライフダウン",
                ko: "라이프다운"
            },
            cost: ["Psychic", "Psychic"],
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon's remaining HP is now 10.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, les PV restants du Pokémon Actif de votre adversaire sont désormais de 10.",
                "es": "Lanza una moneda. Si sale cara, los HP restantes del Pokémon Activo de tu rival ahora son 10.",
                "it": "Lancia una moneta. Se esce testa, i PS rimanenti del Pokémon attivo del tuo avversario diventano 10.",
                "de": "Wirf eine Münze. Bei „Kopf“ betragen die verbleibenden HP des Aktiven Pokémon deines Gegners jetzt 10.",
                "pt-br": "Jogue uma moeda. Se der cara, o HP restante do Pokémon Ativo do seu oponente será agora 10.",
                "zh-tw": "拋一枚硬幣。如果出現正面，則對手的活躍神奇寶貝的剩餘生命值現在為 10。",
                ja: "コインを1回投げオモテなら、相手のバトルポケモンの残りHPを10にする。",
                ko: "동전을 1번 던져서 앞면이 나오면 상대 배틀 포켓몬의 남은 HP를 10으로 만든다."
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
