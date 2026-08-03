import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/121",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/121",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/121",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/121",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/121",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/121",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/121"
    },
    name: {
        en: "Pawmot",
        fr: "Pohmarmotte",
        es: "Pawmot",
        it: "Pawmot",
        de: "Pamomamo",
        'pt-br': "Pawmot",
        "zh-tw": "巴布土撥",
        ko: "빠르모트"
    },
    illustrator: "whomor Inc.",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 140,
    types: ["Lightning"],
    dexId: [923],
    evolveFrom: {
        en: "Pawmo",
        fr: "Pohmotte",
        es: "Pawmo",
        it: "Pawmo",
        de: "Pamamo",
        "pt-br": "Pawmo",
        "zh-tw": "布土撥",
        'es-mx': "Pawmo",
        pt: "Pawmo"
    },
    stage: "Stage2",
    description: {
        en: "Pawmot's fluffy fur acts as a battery. It can store the same amount of electricity as an electric car.",
        "fr": "La fourrure moelleuse de Pohmarmotte agit comme une batterie. Elle peut stocker la même quantité d’électricité qu’une voiture électrique.",
        "es": "El pelaje esponjoso de Pawmot actúa como una batería. Puede almacenar la misma cantidad de electricidad que un coche eléctrico.",
        "it": "La soffice pelliccia di Pawmot funge da batteria. Può immagazzinare la stessa quantità di elettricità di un’auto elettrica.",
        "de": "Das flauschige Fell von Pamomamo fungiert als Batterie. Es kann die gleiche Menge Strom speichern wie ein Elektroauto.",
        "pt-br": "O pelo fofo do Pawmot funciona como uma bateria. Ele pode armazenar a mesma quantidade de eletricidade que um carro elétrico.",
        "zh-tw": "巴布土撥 蓬鬆的毛皮充當電池。它可以儲存與電動車相同的電力。"
    },
    attacks: [
        {
            name: {
                en: "Thunder Blast",
                fr: "Grondement de Tonnerre",
                es: "Estallido Trueno",
                it: "Tuonobomba",
                de: "Donnerkeil",
                "pt-br": "Explosão de trovão",
                "zh-tw": "雷霆衝擊",
                'es-mx': "Explosión Atronadora",
                pt: "Explosão de Trovões"
            },
            damage: "100",
            cost: ["Lightning", "Lightning"],
            effect: {
                en: "Discard a Lightning Energy from this Pokémon.",
                "fr": "Défaussez une Énergie Foudre de ce Pokémon.",
                "es": "Descarta una Energía Rayo de este Pokémon.",
                "it": "Scarta un'Energia Lightning da questo Pokémon.",
                "de": "Lege eine Lightning-Energie von diesem Pokémon ab.",
                "pt-br": "Descarte uma Energia Relâmpago deste Pokémon.",
                "zh-tw": "丟棄這隻寶可夢的閃電能量。"
            },
        },
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
