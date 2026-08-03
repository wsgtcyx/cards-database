import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/016",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/016",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/016",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/016",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/016",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/016",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3a/016"
    },
    name: {
        en: "Pawmot",
        fr: "Pohmarmotte",
        es: "Pawmot",
        it: "Pawmot",
        de: "Pamomamo",
        "pt-br": "Pawmot",
        "zh-tw": "巴布土撥",
        ko: "빠르모트",
        ja: "パーモット"
    },
    illustrator: "GIDORA",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
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
        ko: "빠모트",
        ja: "パモット"
    },
    stage: "Stage2",
    description: {
        en: "Pawmot’s fluffy fur acts as a battery. It can store the same amount of electricity as an electric car.",
        fr: "La fourrure moelleuse du Pohmarmotte agit comme une batterie. Elle peut stocker la même quantité d’électricité qu’une voiture électrique.",
        es: "El pelaje esponjoso de Pawmot actúa como una batería. Puede almacenar la misma cantidad de electricidad que un coche eléctrico.",
        it: "La soffice pelliccia di Pawmot funge da batteria. Può immagazzinare la stessa quantità di elettricità di un’auto elettrica.",
        de: "Das flauschige Fell von Pamomamo fungiert als Batterie. Es kann die gleiche Menge Strom speichern wie ein Elektroauto.",
        "pt-br": "O pelo fofo do Pawmot funciona como uma bateria. Ele pode armazenar a mesma quantidade de eletricidade que um carro elétrico.",
        "zh-tw": "巴布土撥 蓬鬆的毛皮充當電池。它可以儲存與電動車相同的電力。"
    },
    attacks: [
        {
            cost: ["Lightning"],
            name: {
                en: "Volt Wave",
                fr: "Vague de Volt",
                es: "Onda de voltios",
                it: "Onda Volt",
                de: "Voltwelle",
                "pt-br": "Onda Voltífera",
                "zh-tw": "衝擊波"
            },
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
                fr: "Lancez une pièce de monnaie. Si c'est face, le Pokémon Actif de votre adversaire est désormais Paralysé.",
                es: "Lanza una moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
                it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario è paralizzato.",
                de: "Wirf eine Münze. Bei „Kopf“ ist das Aktive Pokémon deines Gegners jetzt gelähmt.",
                "pt-br": "Jogue uma moeda. Se der cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
                "zh-tw": "拋一枚硬幣。如果正面，則對手的戰鬥寶可夢現在處於麻痺狀態。"
            },
            damage: 60
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
