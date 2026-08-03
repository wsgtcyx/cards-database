import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/202",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/202",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/202",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/202",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/202",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/202",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/202"
    },
    name: {
        en: "Mega Audino ex",
        fr: "Méga-Nanméouïe-ex",
        es: "Mega-Audino ex",
        it: "Mega Audino-ex",
        de: "Mega-Ohrdoch-ex",
        "pt-br": "Mega Audino ex",
        "zh-tw": "超級差不多娃娃ex",
        ko: "메가다부니 ex",
        ja: "メガタブンネex"
    },
    illustrator: "You Iribi",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 180,
    types: ["Colorless"],
    dexId: [531],
    stage: "Basic",
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Heartfelt Shine",
                fr: "Brillance Sincère",
                es: "Esplendor Sincero",
                it: "Bagliore Premuroso",
                de: "Herzlicher Glanz",
                "pt-br": "Brilho Sincero",
                "zh-tw": "溫馨閃耀"
            },
            effect: {
                en: "Heal 30 damage from each of your Pokémon.",
                fr: "Soignez 30 dégâts de chacun de vos Pokémon.",
                es: "Cura 30 daños de cada uno de tus Pokémon.",
                it: "Cura 30 danni da ciascuno dei tuoi Pokémon.",
                de: "Heile 30 Schadenspunkte bei jedem deiner Pokémon.",
                "pt-br": "Cure 30 de dano de cada um dos seus Pokémon.",
                "zh-tw": "治療每隻寶可夢造成的 30 點傷害。"
            },
            damage: 90
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
