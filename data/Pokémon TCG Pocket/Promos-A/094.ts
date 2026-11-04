import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    boosters: ["vol11"],
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/094/6849666141b3b312",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/094/6849666141b3b312",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/094/6849666141b3b312",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/094/6849666141b3b312",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/094/6849666141b3b312",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/094/6849666141b3b312",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/094/6849666141b3b312",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/094/6849666141b3b312",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/094/6849666141b3b312"
    },
    name: {
        en: "Horsea",
        "fr": "Hypotrempe",
        "es": "Horsea",
        "it": "Horsea",
        "de": "Seeper",
        "pt-br": "Horsea",
        "zh-tw": "墨海馬",
        ja: "タッツー",
        ko: "쏘드라",
    },
    illustrator: "Taira Akitsu",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "Horsea makes its home in oceans with gentle\ncurrents. If this Pokémon is under attack, it spits\nout pitch-black ink and escapes.",
        "fr": "Il vit dans les mers calmes. Quand on l'attaque, il crache de l'encre noire et profite de la diversion pour s'enfuir.",
        "es": "Habita en mares de aguas tranquilas. Si se siente en peligro, expulsará por la boca una densa tinta negra para poder huir.",
        "it": "Vive in mari dalle correnti tranquille. Quando viene attaccato spruzza inchiostro nero e ne approfitta per fuggire.",
        "de": "Es lebt in Meeren mit ruhigem Gezeitenstrom. Wird es angegriffen, versprüht es tiefschwarze Tinte und ergreift daraufhin die Flucht.",
        "pt-br": "Horsea vive em oceanos com correntezas tranquilas. Quando está sob ataque, este Pokémon cospe tinta preta e escapa.",
        "zh-tw": "棲息在海流平穩的海域。被襲擊時會吐出漆黑的墨汁，然後趁機逃走。",
        ja: "潮の 流れが 穏やかな 海に 棲む。 襲われると 真っ黒な 墨を吐いて その隙に 逃げだす。",
        ko: "잔잔하게 흐르는 고요한 바다에\n산다. 습격당하면 새까만\n먹물을 내뿜고 그 틈에 도망친다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Water Arrow",
                "fr": "Flèche d'Eau",
                "es": "Flecha de Agua",
                "it": "Idrofreccia",
                "de": "Wasserpfeil",
                "pt-br": "Flecha d'Água",
                "zh-tw": "水箭",
                ja: "ウォーターアロー",
                ko: "워터애로"
            },
            cost: ["Water"],
            effect: {
                en: "This attack does 10 damage to 1 of your opponent's Pokémon.",
                "fr": "Cette attaque inflige 10 dégâts à l'un des Pokémon de votre adversaire.",
                "es": "Este ataque hace 10 puntos de daño a 1 de los Pokémon de tu rival.",
                "it": "Questo attacco infligge 10 danni a uno dei Pokémon del tuo avversario.",
                "de": "Diese Attacke fügt 1 Pokémon deines Gegners 10 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 10 pontos de dano a 1 dos Pokémon do seu oponente.",
                "zh-tw": "對手的1隻寶可夢受到10點傷害。",
                ja: "相手のポケモン1匹に10ダメージ。",
                ko: "상대의 포켓몬 1마리에게 10데미지를 준다."
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
