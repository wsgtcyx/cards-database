import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/048",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/048",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/048",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/048",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/048",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/048",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3a/048",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B3a/048",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B3a/048"
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
        "zh-tw": "雖然翅膀的一部分變成了鋼鐵並因此變得沉重，但這隻寶可夢可以輕鬆地在天空中飛行。",
        ja: "羽の 一部が 鋼に 変化。 重たい 翼を ものともせずに 大空を ゆうゆうと 飛びまわる。",
        ko: "깃털의 일부가 강철로 변화했다.\n무거운 날개에도 아랑곳하지 않고\n넓은 하늘을 유유히 날아다닌다."
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
                "zh-tw": "金屬爪",
                ja: "メタルクロー",
                ko: "메탈클로"
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
