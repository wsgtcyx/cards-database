import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/093",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/093"
    },
    name: {
        en: "Carkol",
        fr: "Wagomine",
        es: "Carkol",
        it: "Carkol",
        de: "Wagong",
        "pt-br": "Carkol",
        "zh-tw": "大炭車",
        ko: "탄차곤",
        ja: "トロッゴン"
    },
    illustrator: "takashi shiraishi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fighting"],
    dexId: [838],
    evolveFrom: {
        en: "Rolycoly",
        fr: "Charbi",
        es: "Rolycoly",
        it: "Rolycoly",
        de: "Klonkett",
        "pt-br": "Rolycoly",
        "zh-tw": "小炭仔",
        ko: "탄동",
        ja: "タンドン"
    },
    stage: "Stage1",
    description: {
        en: "Due to the coal tar created inside it, the heap of coal on Carkol’s back never falls apart, even when the Pokémon rolls around at high speeds.",
        fr: "Grâce au goudron de houille créé à l'intérieur, le tas de charbon sur le dos de Wagomine ne s'effondre jamais, même lorsque le Pokémon roule à grande vitesse.",
        es: "Debido al alquitrán de hulla que se crea en su interior, el montón de carbón en la espalda de Carkol nunca se desmorona, incluso cuando el Pokémon rueda a altas velocidades.",
        it: "A causa del catrame di carbone che si forma al suo interno, il mucchio di carbone sulla schiena di Carkol non si sfalda mai, anche quando il Pokémon rotola ad alta velocità.",
        de: "Durch den darin entstehenden Kohlenteer fällt der Kohlehaufen auf Wagongs Rücken nie auseinander, selbst wenn das Pokémon mit hoher Geschwindigkeit herumrollt.",
        "pt-br": "Devido ao alcatrão de carvão criado dentro dele, o monte de carvão nas costas de Carkol nunca se desfaz, mesmo quando o Pokémon rola em alta velocidade.",
        "zh-tw": "由於內部產生了煤焦油，即使寶可夢高速滾動，大炭車背上的煤堆也不會散開。"
    },
    attacks: [
        {
            cost: ["Fighting", "Fighting"],
            name: {
                en: "Hammer In",
                fr: "Enfoncement",
                es: "Martillear",
                it: "Martello",
                de: "Einhämmern",
                "pt-br": "Martelada",
                "zh-tw": "頭突"
            },
            damage: 50
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
