import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3b/019",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3b/019",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3b/019",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3b/019",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3b/019",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3b/019",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3b/019",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3b/019",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3b/019"
    },
    name: {
        en: "Vanillish",
        "fr": "Sorboul",
        "es": "Vanillish",
        "it": "Vanillish",
        "de": "Gelatroppo",
        "pt-br": "Vanillish",
        "zh-tw": "多多冰",
        ja: "バニリッチ",
        ko: "바닐리치",
    },
    illustrator: "Shin Nagasawa",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Water"],
    evolveFrom: {
        en: "Vanillite",
        "fr": "Sorbébé",
        "es": "Vanillite",
        "it": "Vanillite",
        "de": "Gelatini",
        "pt-br": "Vanillite",
        "zh-tw": "迷你冰",
        ja: "バニプッチ",
        ko: "바닐프티",
    },
    description: {
        en: "By drinking pure water, it grows its icy body.\nThis Pokémon can be hard to find on days with\nwarm, sunny weather.",
        "fr": "En buvant de l’eau pure, il développe son corps glacé.\nCe Pokémon peut être difficile à trouver les jours où\ntemps chaud et ensoleillé.",
        "es": "Al beber agua pura, su cuerpo helado crece.\nEste Pokémon puede ser difícil de encontrar en días con\nclima cálido y soleado.",
        "it": "Bevendo acqua pura, fa crescere il suo corpo ghiacciato.\nQuesto Pokémon può essere difficile da trovare nei giorni in cui è presente\nclima caldo e soleggiato.",
        "de": "Durch das Trinken von reinem Wasser wächst sein eisiger Körper.\nAn manchen Tagen kann es schwierig sein, dieses Pokémon zu finden\nwarmes, sonniges Wetter.",
        "pt-br": "Ao beber água pura, seu corpo gelado cresce.\nEste Pokémon pode ser difícil de encontrar em dias com\nclima quente e ensolarado.",
        "zh-tw": "通過飲用純淨水，它會長出冰冷的身體。\n在有的日子裡很難找到這個神奇寶貝\n天氣溫暖、陽光明媚。",
        ja: "きれいな 水を 飲んで 氷の 体を 大きくする。 天気の 良い 日は あまり 見かけない。",
        ko: "깨끗한 물을 마셔서 얼음으로 된\n몸을 크게 만든다. 날씨가 맑은\n날에는 잘 발견되지 않는다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Sweets Relay",
                "fr": "Relais des Bonbons",
                "es": "Relevo de dulces",
                "it": "Relè dei dolci",
                "de": "Süßigkeiten-Staffel",
                "pt-br": "Revezamento de Doces",
                "zh-tw": "糖果接力賽",
                ja: "スイーツリレー",
                ko: "스위트릴레이"
            },
            damage: "30+",
            cost: ["Water"],
            effect: {
                en: "If 1 of your Pokémon used Sweets Relay during your last turn, this attack does 20 more damage.",
                "fr": "Si 1 de vos Pokémon a utilisé Relais Bonbons lors de votre dernier tour, cette attaque inflige 20 dégâts supplémentaires.",
                "es": "Si 1 de tus Pokémon usó Sweets Relay durante tu último turno, este ataque hace 20 daños más.",
                "it": "Se 1 dei tuoi Pokémon ha utilizzato Sweets Relay durante il tuo ultimo turno, questo attacco infligge 20 danni in più.",
                "de": "Wenn eines deiner Pokémon in deinem letzten Zug „Sweet Relay“ verwendet hat, fügt dieser Angriff 20 weitere Schadenspunkte zu.",
                "pt-br": "Se 1 dos seus Pokémon usou Sweets Relay durante seu último turno, este ataque causará 20 danos a mais.",
                "zh-tw": "如果你的 1 個神奇寶貝在你的最後回合中使用了糖果接力，則此攻擊造成的傷害增加 20 點。",
                ja: "前の自分の番、自分のポケモンが「スイーツリレー」を使っていたなら、20ダメージ追加。",
                ko: "자신의 이전 차례에 자신의 포켓몬이 「스위트릴레이」를 사용했다면 20데미지를 추가한다."
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 2
};
export default card;
