import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/048",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/048"
    },
    name: {
        en: "Corviknight",
        fr: "Corvaillus",
        es: "Corviknight",
        it: "Corviknight",
        de: "Krarmor",
        "pt-br": "Corviknight",
        "zh-tw": "鋼鎧鴉",
        ko: "아머까오",
        ja: "アーマーガア"
    },
    illustrator: "Scav",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Metal"],
    dexId: [823],
    evolveFrom: {
        en: "Corvisquire",
        fr: "Bleuseille",
        es: "Corvisquire",
        it: "Corvisquire",
        de: "Kranoviz",
        "pt-br": "Corvisquire",
        "zh-tw": "藍鴉",
        ko: "파크로우",
        ja: "アオガラス"
    },
    stage: "Stage2",
    description: {
        en: "Although its wings have partly turned to steel and become heavy as a result, this Pokémon flies through the skies with ease.",
        fr: "Bien que ses ailes se soient en partie transformées en acier et soient devenues lourdes, ce Pokémon vole facilement dans les cieux.",
        es: "Aunque sus alas se han convertido parcialmente en acero y, como resultado, se vuelven pesadas, este Pokémon vuela por los cielos con facilidad.",
        it: "Sebbene le sue ali siano in parte diventate d'acciaio e di conseguenza siano diventate pesanti, questo Pokémon vola con facilità nei cieli.",
        de: "Obwohl seine Flügel teilweise zu Stahl geworden und dadurch schwer geworden sind, fliegt dieses Pokémon mit Leichtigkeit durch die Lüfte.",
        "pt-br": "Embora suas asas tenham se transformado parcialmente em aço e, como resultado, fiquem pesadas, este Pokémon voa pelos céus com facilidade.",
        "zh-tw": "雖然翅膀的一部分變成了鋼鐵並因此變得沉重，但這隻寶可夢可以輕鬆地在天空中飛行。"
    },
    attacks: [
        {
            cost: ["Metal", "Metal"],
            name: {
                en: "Metal Claw",
                fr: "Griffe Acier",
                es: "Garra Metal",
                it: "Ferrartigli",
                de: "Metallklaue",
                "pt-br": "Garra de Metal",
                "zh-tw": "金屬爪"
            },
            damage: 90
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
