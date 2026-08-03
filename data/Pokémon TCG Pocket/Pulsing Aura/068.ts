import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/068",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/068",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/068",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/068",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/068",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/068",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/068"
    },
    name: {
        en: "Oricorio",
        fr: "Plumeline",
        es: "Oricorio",
        it: "Oricorio",
        de: "Choreogel",
        "pt-br": "Oricorio",
        "zh-tw": "花舞鳥",
        ko: "춤추새",
        ja: "オドリドリ"
    },
    illustrator: "Kouki Saitou",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Psychic"],
    dexId: [741],
    stage: "Basic",
    description: {
        en: "This form of Oricorio has sipped pink nectar. It elevates its mind with the gentle steps of its dance, then unleashes its psychic energy.",
        fr: "Ce Plumeline a bu du Nectar Rose.\nIl se concentre en effectuant de légers pas\nde danse, puis il libère son énergie psychique.",
        es: "Forma que toma Oricorio al libar Néctar Rosa.\nEmplea la energía psíquica que obtiene al\ncentrar su mente con delicados pasos de baile.",
        it: "Forma di un Oricorio che si è nutrito di Nettare\nrosa. Aumenta le sue energie mentali con placidi\npassi di danza e poi scatena i suoi poteri psichici.",
        de: "Dieses Choreogel hat Rosa Nektar geschlürft.\nMit eleganten Tanzschritten erhöht es seine\nPsycho-Kräfte, ehe es diese freisetzt.",
        "pt-br": "Esta forma de Oricorio bebericou néctar rosa.\nEleva a mente com os passos suaves da sua dança\ne depois libera energia psíquica.",
        "zh-tw": "這種形式的 Oricorio 正在啜飲粉紅色的花蜜。它用輕柔的舞步提升心靈，然後釋放心靈能量。"
    },
    attacks: [
        {
            cost: ["Psychic"],
            name: {
                en: "Pester the Dizzy",
                fr: "Accabler les Confus",
                es: "Saña Mareante",
                it: "Confusattacco",
                de: "Piesacken der Taumelnden",
                "pt-br": "Cutucar a Confusão",
                "zh-tw": "暈眩追擊"
            },
            effect: {
                en: "If your opponent's Active Pokémon is Confused, this attack does 40 more damage.",
                fr: "Si le Pokémon Actif de votre adversaire est Confus, cette attaque inflige 40 dégâts supplémentaires.",
                es: "Si el Pokémon Activo de tu rival está Confundido, este ataque hace 40 puntos de daño más.",
                it: "Se il Pokémon attivo del tuo avversario è confuso, questo attacco infligge 40 danni in più.",
                de: "Wenn das Aktive Pokémon deines Gegners verwirrt ist, fügt dieser Angriff 40 weitere Schadenspunkte zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente estiver Confuso, este ataque causará 40 pontos de dano a mais.",
                "zh-tw": "如果對手的出戰寶可夢處於混亂狀態，則這次攻擊造成的傷害增加 40 點。"
            },
            damage: "20+"
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
