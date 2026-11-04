import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    boosters: [],
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/091/3241983650c3e51a",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/091/3241983650c3e51a",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/091/3241983650c3e51a",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/091/3241983650c3e51a",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/091/3241983650c3e51a",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/091/3241983650c3e51a",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/091/3241983650c3e51a",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/091/3241983650c3e51a",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/091/3241983650c3e51a"
    },
    name: {
        en: "Greedent",
        es: "Greedent",
        "fr": "Rongrigou",
        "it": "Greedent",
        "de": "Schlaraffel",
        "pt-br": "Greedent",
        "zh-tw": "藏飽栗鼠",
        ja: "ヨクバリス",
        ko: "요씽리스",
    },
    illustrator: "HYOGONOSUKE",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Colorless"],
    evolveFrom: {
        en: "Skwovet",
        es: "Skwovet",
        "fr": "Rongourmand",
        "it": "Skwovet",
        "de": "Raffel",
        "pt-br": "Skwovet",
        "zh-tw": "貪心栗鼠",
        ja: "ホシガリス",
        ko: "탐리스"
    },
    description: {
        en: "This Pokémon makes off with heaps of fallen berries by wrapping\nthem in its tail, which is roughly twice the length of its body.",
        es: "Su cola es el doble de larga que su cuerpo.\nEnvuelve con ella las bayas que tira de los\nárboles para llevárselas consigo.",
        "fr": "Sa queue, qui est environ deux fois plus longue que son corps, lui permet d'emmagasiner et de transporter les Baies tombées des arbres.",
        "it": "Fa cadere grandi quantità di bacche dagli alberi e poi se le porta via tutte avvolgendole con la coda lunga due volte il resto del corpo.",
        "de": "Sein Schweif ist etwa doppelt so lang wie sein Körper. Es umwickelt damit von Bäumen gefallene Beeren und trägt sie mit sich fort.",
        "pt-br": "Este Pokémon carrega montes de frutas caídas colocando-as em sua cauda, que tem praticamente o dobro do tamanho do seu corpo.",
        "zh-tw": "會用約有身體2倍長的尾巴把樹上掉下來的樹果全都捲起來帶走。",
        ja: "体の 約２倍の 長さの 尻尾で 木から 落とした 木の実を ごっそり 包んで 持ち去るぞ。",
        ko: "몸 길이의 약 2배나 되는 꼬리로\n나무에서 떨어진 나무열매를\n몽땅 싸서 가져가 버린다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Enhanced Fang",
                es: "Incisivos Mejorados",
                "fr": "Croc Amélioré",
                "it": "Zanne Super",
                "de": "Spezial-Zahn",
                "pt-br": "Presa Acentuada",
                "zh-tw": "強擊門牙",
                ja: "きょうかまえば",
                ko: "강화앞니"
            },
            damage: "50+",
            cost: ["Colorless", "Colorless", "Colorless"],
            effect: {
                en: "If this Pokémon has a Pokémon Tool attached, this attack does 50 more damage.",
                es: "Si este Pokémon tiene 1 Herramienta Pokémon unida a él, este ataque hace 50 puntos de daño más.",
                "fr": "Si un Outil Pokémon est attaché à ce Pokémon, cette attaque inflige 50 dégâts supplémentaires.",
                "it": "Se questo Pokémon ha un Oggetto Pokémon assegnato, questo attacco infligge 50 danni in più.",
                "de": "Wenn an dieses Pokémon 1 Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 50 Schadenspunkte mehr zu.",
                "pt-br": "Se este Pokémon tiver uma Ferramenta Pokémon ligada a ele, este ataque causará 50 pontos de dano a mais.",
                "zh-tw": "若這隻寶可夢身上附有「寶可夢道具」,則增加50點傷害。",
                ja: "このポケモンに「ポケモンのどうぐ」がついているなら、50ダメージ追加。",
                ko: "이 포켓몬에게 「포켓몬의 도구」가 붙어 있다면 50데미지를 추가한다."
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
