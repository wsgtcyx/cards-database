import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4a/096",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4a/096",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4a/096",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4a/096",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4a/096",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4a/096",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4a/096",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4a/096",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4a/096"
    },
    name: {
        en: "Kingler",
        "fr": "Krabboss",
        "es": "Kingler",
        "it": "Kingler",
        "de": "Kingler",
        "pt-br": "Kingler",
        "zh-tw": "巨鉗蟹",
        ja: "キングラー",
        ko: "킹크랩",
    },
    illustrator: "Shigenori Negishi",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 120,
    types: ["Water"],
    evolveFrom: {
        en: "Krabby",
        "fr": "Krabby",
        "es": "Krabby",
        "it": "Krabby",
        "de": "Krabby",
        "pt-br": "Krabby",
        "zh-tw": "大鉗蟹",
        ja: "クラブ",
        ko: "크랩",
    },
    description: {
        en: "Its large and hard pincer has 10,000-horsepower\nstrength. However, being so big, it is unwieldy\nto move.",
        "fr": "Sa pince large et dure a 10 000 chevaux\nforce. Cependant, étant si grand, il est difficile à manier\nbouger.",
        "es": "Su pinza grande y dura tiene 10.000 caballos de fuerza.\nfuerza. Sin embargo, al ser tan grande, resulta difícil de manejar.\npara moverse.",
        "it": "La sua tenaglia grande e dura ha 10.000 cavalli\nforza. Tuttavia, essendo così grande, è poco maneggevole\nmuoversi.",
        "de": "Seine große und harte Zange hat 10.000 PS\nStärke. Da es jedoch so groß ist, ist es unhandlich\nbewegen.",
        "pt-br": "Sua pinça grande e dura tem 10.000 cavalos de potência\nforça. No entanto, sendo tão grande, é pesado\npara se mover.",
        "zh-tw": "其大而硬的鉗子有萬馬力\n力量。不過太大了，不方便\n移動。",
        ja: "硬い ハサミは １万馬力の パワーを もっているが 大きすぎて 動きが 鈍い。",
        ko: "단단한 집게는 1만 마력의\n파워를 지녔지만\n너무 커서 움직임이 둔하다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "KO Crab",
                "fr": "Crabe KO",
                "es": "Cangrejo KO",
                "it": "KO Granchio",
                "de": "KO-Krabbe",
                "pt-br": "Caranguejo nocauteado",
                "zh-tw": "KO蟹",
                ja: "ひっさつクラブ",
                ko: "필살크랩"
            },
            damage: "80+",
            cost: ["Water", "Water", "Colorless"],
            effect: {
                en: "Flip 2 coins. If both of them are heads, this attack does 80 more damage.",
                "fr": "Lancez 2 pièces. Si les deux sont face, cette attaque inflige 80 dégâts supplémentaires.",
                "es": "Lanza 2 monedas. Si ambos son cara, este ataque hace 80 puntos de daño más.",
                "it": "Lancia 2 monete. Se entrambi escono testa, questo attacco infligge 80 danni in più.",
                "de": "Wirf 2 Münzen. Wenn beide Köpfe sind, fügt dieser Angriff 80 Schadenspunkte mehr zu.",
                "pt-br": "Jogue 2 moedas. Se ambos derem cara, este ataque causa 80 de dano a mais.",
                "zh-tw": "翻轉 2 個硬幣。如果兩人都是正面，則這次攻擊會造成 80 點額外傷害。",
                ja: "コインを2回投げ、すべてオモテなら、80ダメージ追加。",
                ko: "동전을 2번 던져서 모두 앞면이 나오면 80데미지를 추가한다."
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 3
};
export default card;
