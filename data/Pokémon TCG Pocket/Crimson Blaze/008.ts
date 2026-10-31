import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1a/008",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1a/008",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1a/008",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1a/008",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1a/008",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1a/008",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1a/008",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1a/008",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1a/008"
    },
    name: {
        en: "Sunflora",
        "fr": "Héliatronc",
        "es": "Sunflora",
        "it": "Sunflora",
        "de": "Sonnflora",
        "pt-br": "Sunflora",
        "zh-tw": "向日花怪",
        ja: "キマワリ",
        ko: "해루미"
    },
    illustrator: "Saboteri",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Grass"],
    evolveFrom: {
        en: "Sunkern",
        "fr": "Tournegrin",
        "es": "Sunkern",
        "it": "Sunkern",
        "de": "Sonnkern",
        "pt-br": "Sunkern",
        "zh-tw": "向日種子",
        ja: "ヒマナッツ",
        ko: "해너츠"
    },
    description: {
        en: "Since it converts sunlight into energy, it is always\nlooking in the direction of the sun.",
        "fr": "Puisqu'il convertit la lumière du soleil en énergie, il est toujours\nen regardant dans la direction du soleil.",
        "es": "Dado que convierte la luz solar en energía, siempre es\nmirando en dirección al sol.",
        "it": "Poiché converte la luce solare in energia, lo è sempre\nguardando in direzione del sole.",
        "de": "Da es Sonnenlicht in Energie umwandelt, ist es immer so\nin Richtung der Sonne schauen.",
        "pt-br": "Como converte a luz solar em energia, é sempre\nolhando na direção do sol.",
        "zh-tw": "由於它將陽光轉化為能量，因此它總是\n朝太陽的方向看。",
        ja: "浴びた 日差しを エネルギーに 変換するため 昼間は ずっと 太陽の方を 向いている。",
        ko: "쬔 햇볕을 에너지로 변환하기 위해\n낮에는 계속 태양 쪽을 바라본다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Quick-Grow Beam",
                "fr": "Poutre à croissance rapide",
                "es": "Haz de crecimiento rápido",
                "it": "Fascio a crescita rapida",
                "de": "Schnell wachsender Strahl",
                "pt-br": "Feixe de crescimento rápido",
                "zh-tw": "快速生長梁",
                ja: "そうじゅくビーム",
                ko: "조숙빔"
            },
            damage: "30+",
            cost: ["Grass"],
            effect: {
                en: "If Quick-Grow Extract is in your discard pile, this attack does 30 more damage.",
                "fr": "Si Quick-Grow Extract est dans votre pile de défausse, cette attaque inflige 30 dégâts supplémentaires.",
                "es": "Si Quick-Grow Extract está en tu pila de descarte, este ataque hace 30 daños más.",
                "it": "Se l'Estratto a crescita rapida è nella tua pila degli scarti, questo attacco infligge 30 danni in più.",
                "de": "Wenn sich Quick-Grow Extract in deinem Ablagestapel befindet, fügt dieser Angriff 30 weitere Schadenspunkte zu.",
                "pt-br": "Se Quick-Grow Extract estiver em sua pilha de descarte, este ataque causará 30 de dano a mais.",
                "zh-tw": "如果快速生長提取物在你的棄牌堆中，則此攻擊會造成 30 點額外傷害。",
                ja: "自分のトラッシュに「そうじゅくエキス」があるなら、30ダメージ追加。",
                ko: "자신의 트래쉬에 「조숙엑기스」가 있다면 30데미지를 추가한다."
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
