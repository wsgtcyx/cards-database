import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3b/060",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3b/060",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3b/060",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3b/060",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3b/060",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3b/060",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3b/060",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3b/060",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3b/060"
    },
    name: {
        en: "Chatot",
        "fr": "Pijako",
        "es": "Chatot",
        "it": "Chatot",
        "de": "Plaudagei",
        "pt-br": "Chatot",
        "zh-tw": "聒噪鳥",
        ja: "ペラップ",
        ko: "페라페",
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Colorless"],
    description: {
        en: "It mimics the cries of other Pokémon to trick them\ninto thinking it's one of them. This way they won't\nattack it.",
        "fr": "Il imite les cris des autres Pokémon pour les tromper\nen pensant que c'est l'un d'entre eux. De cette façon, ils ne le feront pas\nl'attaquer.",
        "es": "Imita los gritos de otros Pokémon para engañarlos.\na pensar que es uno de ellos. De esta manera no lo harán\natacarlo.",
        "it": "Imita le grida degli altri Pokémon per ingannarli\nnel pensare che sia uno di loro. In questo modo non lo faranno\nattaccarlo.",
        "de": "Es ahmt die Schreie anderer Pokémon nach, um sie auszutricksen\nzu denken, dass es einer von ihnen ist. Auf diese Weise werden sie es nicht tun\ngreife es an.",
        "pt-br": "Ele imita os gritos de outros Pokémon para enganá-los\nem pensar que é um deles. Dessa forma eles não vão\natacá-lo.",
        "zh-tw": "它模仿其他神奇寶貝的叫聲來欺騙他們\n認為它是其中之一。這樣他們就不會\n攻擊它。",
        ja: "相手と 同じ 鳴き声を 出す ことで 仲間と 思いこませて 襲われないように しているのだ。",
        ko: "상대와 같은 울음소리를 내서\n동료라고 굳게 믿게 하여\n습격당하지 않도록 하고 있다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Tone-Deaf",
                "fr": "Ton-Sourd",
                "es": "sordo",
                "it": "Stonato",
                "de": "Ton-taub",
                "pt-br": "Surdo",
                "zh-tw": "五音不全",
                ja: "おんち",
                ko: "음치"
            },
            damage: 10,
            cost: ["Colorless"],
            effect: {
                en: "Your opponent's Active Pokémon is now Confused.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Confus.",
                "es": "El Pokémon Activo de tu rival ahora está Confundido.",
                "it": "Il Pokémon attivo del tuo avversario è ora confuso.",
                "de": "Das aktive Pokémon deines Gegners ist jetzt verwirrt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Confuso.",
                "zh-tw": "你對手的活躍神奇寶貝現在處於混亂狀態。",
                ja: "相手のバトルポケモンをこんらんにする。",
                ko: "상대의 배틀 포켓몬을 혼란으로 만든다."
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
