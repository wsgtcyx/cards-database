import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3b/087",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3b/087",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3b/087",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3b/087",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3b/087",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3b/087",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3b/087",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3b/087",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3b/087"
    },
    name: {
        en: "Flareon ex",
        "fr": "Pyroli-ex",
        "es": "Flareon ex",
        "it": "Flareon-ex",
        "de": "Flamara-ex",
        "pt-br": "Flareon ex",
        "zh-tw": "火伊布ex",
        ja: "ブースターex",
        ko: "부스터 ex",
    },
    illustrator: "Kuroimori",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 150,
    types: ["Fire"],
    evolveFrom: {
        en: "Eevee",
        "fr": "Évoli",
        "es": "Eevee",
        "it": "Eevee",
        "de": "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布",
        ja: "イーブイ",
        ko: "이브이"
    },
    stage: "Stage1",
    suffix: "EX",
    abilities: [{
            type: "Ability",
            name: {
                en: "Combust",
                "fr": "Combustion",
                "es": "Combustión",
                "it": "Combustione",
                "de": "Verbrennen",
                "pt-br": "Combustão",
                "zh-tw": "燃燒",
                ja: "バーンアップ",
                ko: "번 업"
            },
            effect: {
                en: "Once during your turn, you may attach a {R} Energy from your discard pile to this Pokémon. If you do, do 20 damage to this Pokémon.",
                "fr": "Une fois pendant votre tour, vous pouvez attacher une Énergie {R} de votre pile de défausse à ce Pokémon. Si vous le faites, infligez 20 dégâts à ce Pokémon.",
                "es": "Una vez durante tu turno, puedes adjuntar una Energía {R} de tu pila de descarte a este Pokémon. Si lo haces, hazle 20 daños a este Pokémon.",
                "it": "Una sola volta durante il tuo turno, puoi assegnare un'Energia {R} dalla tua pila degli scarti a questo Pokémon. Se lo fai, infliggi 20 danni a questo Pokémon.",
                "de": "Einmal während deines Zuges kannst du diesem Pokémon eine {R}-Energie von deinem Ablagestapel hinzufügen. Wenn du dies tust, füge diesem Pokémon 20 Schadenspunkte zu.",
                "pt-br": "Uma vez durante o seu turno, você pode associar uma Energia {R} da sua pilha de descarte a este Pokémon. Se fizer isso, cause 20 de dano a este Pokémon.",
                "zh-tw": "在你的回合中，你可以將你的棄牌堆中的一個 {R} 能量附加到這只神奇寶貝上。如果這樣做，則對該寶可夢造成 20 點傷害。",
                ja: "自分の番に1回使える。自分のトラッシュから{R}エネルギーを1個、このポケモンにつける。その後、このポケモンに20ダメージ。",
                ko: "자신의 차례에 1번 사용할 수 있다. 자신의 트래쉬에서 {R}에너지를 1개 이 포켓몬에게 붙인다. 그 뒤, 이 포켓몬에게 20데미지를 준다."
            }
        }],
    attacks: [{
            name: {
                en: "Fire Spin",
                "fr": "Rotation du feu",
                "es": "Giro de fuego",
                "it": "Giro del fuoco",
                "de": "Feuerspin",
                "pt-br": "Giro de Fogo",
                "zh-tw": "火旋",
                ja: "ほのおのうず",
                ko: "회오리불꽃"
            },
            damage: 130,
            cost: ["Fire", "Fire", "Colorless"],
            effect: {
                en: "Discard 2 {R} Energy from this Pokémon.",
                "fr": "Défaussez 2 {R} Énergie de ce Pokémon.",
                "es": "Descarta 2 {R} de Energía de este Pokémon.",
                "it": "Scarta 2 Energie {R} da questo Pokémon.",
                "de": "Lege 2 {R}-Energien von diesem Pokémon ab.",
                "pt-br": "Descarte 2 {R} Energias deste Pokémon.",
                "zh-tw": "丟棄該神奇寶貝的 2 個 {R} 能量。",
                ja: "このポケモンから{R}エネルギーを2個トラッシュ。",
                ko: "이 포켓몬에서 {R}에너지를 2개 트래쉬한다."
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2
};
export default card;
