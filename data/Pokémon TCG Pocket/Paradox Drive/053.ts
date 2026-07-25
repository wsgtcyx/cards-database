import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/053",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/053",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/053",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/053",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/053",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/053"
    },
    name: {
        en: "Walking Wake",
        fr: "Serpente-Eau",
        es: "Ondulagua",
        it: "Acquecrespe",
        de: "Windewoge",
        "pt-br": "Onda Ando",
        "zh-tw": "波盪水",
        ko: "굽이치는물결",
        ja: "ウネルミナモ"
    },
    illustrator: "kawayoo",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Dragon"],
    dexId: [1009],
    stage: "Basic",
    description: {
        en: "It resembles an illustration published in a paranormal magazine, said to be a depiction of a super-ancient Suicune.",
        fr: "Cela ressemble à une illustration publiée dans un magazine paranormal, qui serait une représentation d'un Suicune super-ancien.",
        es: "Se parece a una ilustración publicada en una revista paranormal y se dice que es una representación de un Suicune súper antiguo.",
        it: "Assomiglia a un'illustrazione pubblicata in una rivista sul paranormale, che si dice sia la rappresentazione di un super-antico Suicune.",
        de: "Es ähnelt einer in einem paranormalen Magazin veröffentlichten Illustration, bei der es sich angeblich um die Darstellung eines überuralten Suicune handelt.",
        "pt-br": "Assemelha-se a uma ilustração publicada em uma revista paranormal, considerada uma representação de um Suicune superantigo.",
        "zh-tw": "它類似於超自然雜誌上發表的插圖，據說是對超古代 水君 的描繪。"
    },
    attacks: [
        {
            cost: ["Fire", "Water"],
            name: {
                en: "Sweeping Billow",
                fr: "Balayage des vagues",
                es: "Onda arrolladora",
                it: "Onda travolgente",
                de: "Schwungvolle Woge",
                "pt-br": "Onda arrebatadora",
                "zh-tw": "浪迴百轉"
            },
            effect: {
                en: "Discard an Energy from this Pokémon, and this attack also does 20 damage to each of your opponent's Benched Pokémon.",
                fr: "Défaussez une Énergie de ce Pokémon, et cette attaque inflige également 20 dégâts à chacun des Pokémon de Banc de votre adversaire.",
                es: "Descarta una Energía de este Pokémon y este ataque también hace 20 puntos de daño a cada uno de los Pokémon en Banca de tu rival.",
                it: "Scarta un'Energia da questo Pokémon e questo attacco infligge anche 20 danni a ciascuno dei Pokémon nella panchina del tuo avversario.",
                de: "Wirf eine Energie von diesem Pokémon ab und dieser Angriff fügt außerdem jedem Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu.",
                "pt-br": "Descarte uma Energia deste Pokémon e este ataque também causará 20 pontos de dano a cada um dos Pokémon no Banco do seu oponente.",
                "zh-tw": "丟棄這隻寶可夢的 1 個能量，這次攻擊也會對對手的後備寶可夢每隻造成 20 點傷害。"
            },
            damage: 60
        }
    ],
    retreat: 2
};

export default card;
