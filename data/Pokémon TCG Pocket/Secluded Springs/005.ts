import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4a/005",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4a/005",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4a/005",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4a/005",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4a/005",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4a/005",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4a/005",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4a/005",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4a/005"
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
        ko: "해루미",
    },
    illustrator: "Miki Tanaka",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
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
        ko: "해너츠",
    },
    description: {
        en: "In the daytime, it rushes about in a hectic\nmanner, but it comes to a complete stop when\nthe sun sets.",
        "fr": "Le jour, il se précipite de manière trépidante\nmanière, mais il s'arrête complètement lorsque\nle soleil se couche.",
        "es": "Durante el día, corre de un modo frenético.\nmanera, pero se detiene por completo cuando\nel sol se pone.",
        "it": "Di giorno corre freneticamente\nmodo, ma si ferma completamente quando\nil sole tramonta.",
        "de": "Tagsüber herrscht Hektik\nArt und Weise, aber es kommt völlig zum Stillstand, wenn\ndie Sonne geht unter.",
        "pt-br": "Durante o dia, ele corre em uma agitação\nmaneira, mas para completamente quando\no sol se põe.",
        "zh-tw": "白天，它忙碌地奔波\n方式，但當它完全停止時\n太陽落山了。",
        ja: "昼間は むやみやたらと 元気に 動きまわるが 日が 沈むと ばったり 動かなくなる。",
        ko: "낮에는 지나칠 정도로 활발히\n돌아다니지만 해가 저물면\n돌연 움직이지 않게 된다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Trip Over",
                "fr": "Voyage terminé",
                "es": "Tropezar",
                "it": "Inciampare",
                "de": "Stolpern vorbei",
                "pt-br": "Viagem",
                "zh-tw": "絆倒",
                ja: "ころばす",
                ko: "걸어 넘어뜨리기"
            },
            damage: "50+",
            cost: ["Grass", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, this attack does 30 more damage.",
                "fr": "Lancez une pièce de monnaie. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
                "es": "Lanza una moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
                "it": "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
                "de": "Wirf eine Münze. Bei „Kopf“ verursacht dieser Angriff 30 weitere Schadenspunkte.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 30 de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 30 點額外傷害。",
                ja: "コインを1回投げオモテなら、30ダメージ追加。",
                ko: "동전을 1번 던져서 앞면이 나오면 30데미지를 추가한다."
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
