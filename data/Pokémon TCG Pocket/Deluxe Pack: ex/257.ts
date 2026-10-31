import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/257",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/257",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/257",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/257",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/257",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/257",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/257",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4b/257",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4b/257"
    },
    name: {
        en: "Klefki",
        "fr": "Trousselin",
        "es": "Klefki",
        "it": "Klefki",
        "de": "Clavion",
        "pt-br": "Klefki",
        "zh-tw": "鑰圈兒",
        ja: "クレッフィ",
        ko: "클레피",
    },
    illustrator: "Shin Nagasawa",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Metal"],
    description: {
        en: "Once it absorbs a key's metal ions, it discards the\nkey without a second thought. However, it will\nhang on to keys it favors for decades.",
        "fr": "Une fois qu'il absorbe les ions métalliques d'une clé, il les rejette.\nclé sans arrière-pensée. Cependant, ce sera\naccrochez-vous aux clés qu’il privilégie depuis des décennies.",
        "es": "Una vez que absorbe los iones metálicos de una llave, descarta los\nclave sin pensarlo dos veces. Sin embargo, lo hará\naferrarse a las claves que ha favorecido durante décadas.",
        "it": "Una volta assorbiti gli ioni metallici di una chiave, li scarta\nchiave senza pensarci due volte. Tuttavia, lo farà\naggrapparsi alle chiavi che preferisce per decenni.",
        "de": "Sobald es die Metallionen eines Schlüssels absorbiert, verwirft es diese\nSchlüssel ohne einen zweiten Gedanken. Das wird jedoch der Fall sein\nBehalten Sie die Schlüssel, die es seit Jahrzehnten bevorzugt.",
        "pt-br": "Depois de absorver os íons metálicos de uma chave, ele descarta os\nchave sem pensar duas vezes. No entanto, será\nagarre-se às chaves que ele favorece por décadas.",
        "zh-tw": "一旦它吸收了鑰匙的金屬離子，它就會丟棄\n不假思索地鑰匙。然而，它會\n幾十年來一直保留它所青睞的鑰匙。",
        ja: "金属イオンを 吸い取った カギは あっさり 捨てるが お気に入りは 何十年も 持ち続けている。",
        ko: "금속 이온을 모두 흡수한 열쇠는\n보통 미련 없이 버려 버리지만\n마음에 들면 몇십 년이고 가지고 다닌다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Unlock",
                "fr": "Ouvrir",
                "es": "Descubrir",
                "it": "Sbloccare",
                "de": "Entsperren",
                "pt-br": "Desbloquear",
                "zh-tw": "開鎖",
                ja: "アンロック",
                ko: "언록"
            },
            damage: 10,
            cost: ["Metal"],
            effect: {
                en: "Draw a card.",
                "fr": "Piochez une carte.",
                "es": "Saca una carta.",
                "it": "Pesca una carta.",
                "de": "Ziehe eine Karte.",
                "pt-br": "Compre uma carta.",
                "zh-tw": "畫一張卡片。",
                ja: "自分の山札を1枚引く。",
                ko: "자신의 덱을 1장 뽑는다."
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
