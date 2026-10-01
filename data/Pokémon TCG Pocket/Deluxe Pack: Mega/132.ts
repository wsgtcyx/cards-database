import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/132",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/132",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/132",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/132",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/132",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/132",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/132"
    },
    name: {
        en: "Dwebble",
        fr: "Crabicoque",
        es: "Dwebble",
        it: "Dwebble",
        de: "Lithomith",
        "pt-br": "Dwebble",
        "zh-tw": "石居蟹",
        ja: "イシズマイ",
        ko: "돌살이"
    },
    illustrator: "MAHOU",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: [
        "Fighting"
    ],
    dexId: [
        557
    ],
    stage: "Basic",
    description: {
        en: "It first tries to find a rock to live in, but if there are no suitable rocks to be found, Dwebble may move in to the ports of a Hippowdon.",
        fr: "S'il ne trouve pas de bon caillou à creuser pour s'y loger, il élit domicile dans un des trous du corps d'Hippodocus.",
        es: "Si no encuentra una piedra que sea idónea como morada, se instala en los orificios de algún Hippowdon.",
        it: "A volte, quando non riesce a trovare una pietra adatta, usa come sua dimora i pori di Hippowdon.",
        de: "Wenn es keinen Stein findet, der sich als Haus eignet, lässt es sich manchmal in den Öffnungen im Körper eines Hippoterus' nieder.",
        "pt-br": "Costuma viver em pedras, mas quando não encontra nenhuma, Dwebble pode se mudar para as cavidades no casco de Hippowdon.",
        "zh-tw": "如果找不到大小合適的石頭來當成自己的家，牠也會住到河馬獸的洞裡。",
        ja: "It first tries to find a rock to live in, but if there are no suitable rocks to be found, Dwebble may move in to the ports of a Hippowdon.",
        ko: "It first tries to find a rock to live in, but if there are no suitable rocks to be found, Dwebble may move in to the ports of a Hippowdon."
    },
    attacks: [
        {
            cost: [
                "Fighting"
            ],
            name: {
                en: "Ram",
                fr: "Collision",
                es: "Apisonar",
                it: "Carica",
                de: "Ramme",
                "pt-br": "Aríete",
                "zh-tw": "衝撞",
                ja: "Ram",
                ko: "Ram"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
