import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/041",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/041",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/041",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/041",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/041",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/041",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/041",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4b/041",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4b/041"
    },
    name: {
        en: "Dartrix",
        "fr": "Efflèche",
        "es": "Dartrix",
        "it": "Dartrix",
        "de": "Arboretoss",
        "pt-br": "Dartrix",
        "zh-tw": "投羽梟",
        ja: "フクスロー",
        ko: "빼미스로우",
    },
    illustrator: "Mizue",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    evolveFrom: {
        en: "Rowlet",
        "fr": "Brindibou",
        "es": "Rowlet",
        "it": "Rowlet",
        "de": "Bauz",
        "pt-br": "Rowlet",
        "zh-tw": "木木梟",
        ja: "モクロー",
        ko: "나몰빼미",
    },
    description: {
        en: "This narcissistic Pokémon is a clean freak. If you\ndon't groom it diligently, it may stop listening to you.",
        "fr": "Ce Pokémon narcissique est un monstre propre. Si vous\nne le soignez pas avec diligence, il pourrait cesser de vous écouter.",
        "es": "Este Pokémon narcisista es un fanático de la limpieza. si tu\nno lo arregles con diligencia, puede que deje de escucharte.",
        "it": "Questo Pokémon narcisistico è un maniaco della pulizia. Se tu\nnon pulirlo diligentemente, potrebbe smettere di ascoltarti.",
        "de": "Dieses narzisstische Pokémon ist ein Sauberkeitsfreak. Wenn Sie\nPflegen Sie es nicht fleißig, es könnte sein, dass es Ihnen nicht mehr zuhört.",
        "pt-br": "Este Pokémon narcisista é uma aberração limpa. Se você\nnão o prepare diligentemente, ele pode parar de ouvi-lo.",
        "zh-tw": "這只自戀的神奇寶貝是個乾淨的怪人。如果你\n不要勤奮地梳理它，它可能會不再聽你的。",
        ja: "ナルシストで 綺麗好き。 マメに お手入れ してあげないと いうことを 聞かなく なることも。",
        ko: "나르시스트로 깔끔한 걸 좋아한다.\n자주 관리해 주지 않으면\n말을 안 듣기도 한다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Razor Wing",
                "fr": "Aile de rasoir",
                "es": "Ala de afeitar",
                "it": "Ala rasoio",
                "de": "Rasierflügel",
                "pt-br": "Asa de Navalha",
                "zh-tw": "剃刀之翼",
                ja: "するどいはね",
                ko: "날카로운날개"
            },
            damage: 30,
            cost: ["Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
