import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/087",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/087",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/087",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/087",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/087",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/087",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/087"
    },
    name: {
        en: "Dwebble",
        fr: "Crabicoque",
        es: "Dwebble",
        it: "Dwebble",
        de: "Lithomith",
        "pt-br": "Dwebble",
        "zh-tw": "石居蟹",
        ko: "돌살이",
        ja: "イシズマイ"
    },
    illustrator: "MAHOU",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    dexId: [557],
    stage: "Basic",
    description: {
        en: "It first tries to find a rock to live in, but if there are no suitable rocks to be found, Dwebble may move in to the ports of a Hippowdon.",
        fr: "S’il ne trouve pas de bon caillou à creuser\npour s’y loger, il élit domicile dans un des trous\ndu corps d’Hippodocus.",
        es: "Si no encuentra una piedra que sea idónea como\nmorada, se instala en los orificios de algún\nHippowdon.",
        it: "A volte, quando non riesce a trovare una pietra\nadatta, usa come sua dimora i pori\ndi Hippowdon.",
        de: "Wenn es keinen Stein findet, der sich als Haus\neignet, lässt es sich manchmal in den Öffnungen\nim Körper eines Hippoterus’ nieder.",
        "pt-br": "Ele primeiro tenta encontrar uma rocha para viver, mas se não houver rochas adequadas para serem encontradas, Dwebble pode se mudar para os portos de um Hippowdon.",
        "zh-tw": "如果找不到大小合適\n的石頭來當成自己的家，\n牠也會住到河馬獸的洞裡。"
    },
    attacks: [
        {
            cost: ["Fighting"],
            name: {
                en: "Ram",
                fr: "Collision",
                es: "Apisonar",
                it: "Carica",
                de: "Ramme",
                "pt-br": "Aríete",
                "zh-tw": "衝撞"
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
