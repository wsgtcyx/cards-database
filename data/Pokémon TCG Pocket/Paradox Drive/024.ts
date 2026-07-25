import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/024",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/024",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/024",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/024",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/024",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/024"
    },
    name: {
        en: "Houndstone",
        fr: "Tomberro",
        es: "Houndstone",
        it: "Houndstone",
        de: "Friedwuff",
        "pt-br": "Houndstone",
        "zh-tw": "墓揚犬",
        ko: "묘두기",
        ja: "ハカドッグ"
    },
    illustrator: "Saya Tsuruta",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Psychic"],
    dexId: [972],
    evolveFrom: {
        en: "Greavard",
        fr: "Toutombe",
        es: "Greavard",
        it: "Greavard",
        de: "Gruff",
        "pt-br": "Greavard",
        "zh-tw": "墓仔狗",
        ko: "망망이",
        ja: "ボチ"
    },
    stage: "Stage1",
    description: {
        en: "A lovingly mourned Pokémon was reborn as Houndstone. It doesn’t like anyone touching the protuberance atop its head.",
        fr: "Un Pokémon pleuré avec amour renaît sous le nom de Tomberro. Il n’aime pas qu’on touche la protubérance au sommet de sa tête.",
        es: "Un Pokémon llorado con cariño renació como Houndstone. No le gusta que nadie toque la protuberancia que tiene encima de la cabeza.",
        it: "Un Pokémon affettuosamente compianto è rinato come Houndstone. Non gli piace che qualcuno tocchi la protuberanza sulla sua testa.",
        de: "Ein liebevoll betrauertes Pokémon wurde als Friedwuff wiedergeboren. Es mag es nicht, wenn jemand die Ausstülpung auf seinem Kopf berührt.",
        "pt-br": "Um Pokémon carinhosamente lamentado renasceu como Houndstone. Não gosta que ninguém toque na protuberância no topo de sua cabeça.",
        "zh-tw": "一隻備受哀悼的寶可夢重生為墓揚犬。它不喜歡任何人觸摸它頭頂的突起。"
    },
    attacks: [
        {
            cost: ["Psychic", "Colorless", "Colorless"],
            name: {
                en: "Spooky Shot",
                fr: "Tir Effrayant",
                es: "Disparo Embrujado",
                it: "Colpomistero",
                de: "Spukschuss",
                "pt-br": "Tiro Assustador",
                "zh-tw": "陰森射擊"
            },
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
