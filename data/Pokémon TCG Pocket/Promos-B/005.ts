import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/005/3221db6e6356fd5b",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/005/3221db6e6356fd5b",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/005/3221db6e6356fd5b",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/005/3221db6e6356fd5b",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/005/3221db6e6356fd5b",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/005/3221db6e6356fd5b",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/005/3221db6e6356fd5b",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/005/3221db6e6356fd5b",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/005/3221db6e6356fd5b"
    },
    name: {
        en: "Pidgey",
        fr: "Roucool",
        es: "Pidgey",
        it: "Pidgey",
        de: "Taubsi",
        "pt-br": "Pidgey",
        "zh-tw": "波波",
        ko: "구구",
        ja: "ポッポ"
    },
    illustrator: "Tomokazu Komiya",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    dexId: [16],
    stage: "Basic",
    description: {
        en: "It is docile and prefers to avoid conflict. If disturbed, however, it can ferociously strike back.",
        fr: "Ce Pokémon docile préfère éviter le combat.\nToutefois, il se montre très féroce quand on l’agresse.",
        es: "Es manso y prefiere evitar los problemas. Sin embargo,\nsi le molestan atacará ferozmente.",
        it: "È docile e preferisce evitare i conflitti. Ma se viene\ndisturbato, contrattacca ferocemente.",
        de: "Reizt man dieses an sich gutmütige Pokémon,\nwehrt es sich wütend.",
        "pt-br": "É dócil e prefere evitar conflitos. No entanto, quando é perturbado, pode contra-atacar ferozmente.",
        "zh-tw": "雖然性情溫和不愛戰鬥，但要是隨意對牠出手的話，就會受到牠強烈的反擊。",
        ja: "戦いを 好まない おとなしい 性格だが 下手に 手を 出すと 強烈に 反撃されるぞ。",
        ko: "싸움을 좋아하지 않는\n얌전한 성격이지만 어설프게 건드리면\n강력한 반격을 당하게 된다."
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Peck",
                fr: "Picpic",
                es: "Picotazo",
                it: "Beccata",
                de: "Pikser",
                "pt-br": "Bicada",
                "zh-tw": "啄",
                ja: "つつく",
                ko: "쪼기"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol1"]
};

export default card;
