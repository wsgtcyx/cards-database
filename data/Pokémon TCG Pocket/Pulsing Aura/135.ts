import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/135",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/135",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/135",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/135",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/135",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/135",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/135"
    },
    name: {
        en: "Patrat",
        fr: "Ratentif",
        es: "Patrat",
        it: "Patrat",
        de: "Nagelotz",
        "pt-br": "Patrat",
        "zh-tw": "探探鼠",
        ko: "보르쥐",
        ja: "ミネズミ"
    },
    illustrator: "Kouki Saitou",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    dexId: [504],
    stage: "Basic",
    description: {
        en: "Extremely cautious, one of them will always be on the lookout, but it won’t notice a foe coming from behind.",
        fr: "Très prudent, il surveille attentivement son territoire,\nmais oublie souvent de regarder derrière lui.",
        es: "Aunque es un Pokémon muy precavido y siempre hay uno\nmontando guardia, si se acercan por detrás, no se dará\ncuenta.",
        it: "Sono molto guardinghi e almeno uno del branco è sempre\ndi guardia. Non vedono però il nemico se li attacca da dietro.",
        de: "Eines dieser vorsichtigen Pokémon steht immer vor ihrem Bau\nWache. Nähert sich jedoch ein Feind von hinten, ist es aus.",
        "pt-br": "Extremamente cauteloso, um deles estará sempre atento, mas não notará nenhum inimigo vindo por trás.",
        "zh-tw": "它們極其謹慎，其中一隻總是在警惕，但不會注意到背後有敵人。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Tackle",
                fr: "Charge",
                es: "Placaje",
                it: "Azione",
                de: "Tackle",
                "pt-br": "Investida",
                "zh-tw": "撞擊"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
