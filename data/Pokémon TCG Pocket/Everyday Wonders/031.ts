import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/031",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/031",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/031",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/031",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/031",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/031"
    },
    name: {
        en: "Carbink",
        fr: "Strassie",
        es: "Carbink",
        it: "Carbink",
        de: "Rocara",
        "pt-br": "Carbink",
        "zh-tw": "小碎鑽",
        ko: "멜리시",
        ja: "メレシー"
    },
    illustrator: "Akira Komayama",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Psychic"],
    dexId: [703],
    stage: "Basic",
    description: {
        en: "It’s said that somewhere in the world, there’s a mineral vein housing a large pack of slumbering Carbink. It’s also said that this pack has a queen.",
        fr: "On raconte qu’il existerait quelque part dans\nle monde un filon regorgeant de Strassie,\nqui abriterait également leur reine.",
        es: "Se cree que en algún lugar de este mundo existe\nun filón rebosante de Carbink que viven bajo las\nórdenes de una reina.",
        it: "Si dice che da qualche parte nel mondo c’è\nuna miniera in cui i Carbink dormono assieme\nalla loro regina.",
        de: "Es heißt, irgendwo auf der Welt gäbe es eine\nGesteinsader aus schlafenden Rocara. Dort soll\nman auch ihre Königin antreffen können.",
        "pt-br": "Diz-se que em algum lugar do mundo existe um veio mineral que abriga um grande pacote de Carbink adormecidos. Também é dito que este bando tem uma rainha.",
        "zh-tw": "據說在世界的某處，有個\n沉睡著許多小碎鑽的礦床，\n群體的女王也在那裡。"
    },
    attacks: [
        {
            cost: ["Psychic"],
            name: {
                en: "Glittering Gift",
                fr: "Cadeau scintillant",
                es: "Regalo brillante",
                it: "Regalo scintillante",
                de: "Glitzerndes Geschenk",
                "pt-br": "Presente brilhante",
                "zh-tw": "璀璨禮物"
            },
            effect: {
                en: "Choose 2 of your Benched Pokémon. For each of those Pokémon, take a {P} Energy from your Energy Zone and attach it to that Pokémon.",
                fr: "Choisissez 2 de vos Pokémon de Banc. Pour chacun de ces Pokémon, prenez une Énergie {P} de votre Zone d'Énergie et attachez-la à ce Pokémon.",
                es: "Elige 2 de tus Pokémon en Banca. Para cada uno de esos Pokémon, toma una Energía {P} de tu Zona de Energía y únela a ese Pokémon.",
                it: "Scegli 2 dei tuoi Pokémon in panchina. Per ognuno di questi Pokémon, prendi un'Energia {P} dalla tua Zona Energetica e assegnala a quel Pokémon.",
                de: "Wähle 2 deiner Bank-Pokémon. Nimm für jedes dieser Pokémon eine {P}-Energie aus deiner Energiezone und lege sie an dieses Pokémon an.",
                "pt-br": "Escolha 2 dos seus Pokémon no Banco. Para cada um desses Pokémon, pegue uma Energia {P} da sua Zona de Energia e ligue-a àquele Pokémon.",
                "zh-tw": "選擇 2 個後備寶可夢。對於每個寶可夢，從你的能量區域獲取一個 {P} 能量並將其附加到該寶可夢上。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
