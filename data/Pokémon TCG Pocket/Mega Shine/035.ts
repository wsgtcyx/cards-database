import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/035",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/035"
    },
    name: {
        en: "Groudon",
        fr: "Groudon",
        es: "Groudon",
        it: "Groudon",
        de: "Groudon",
        "pt-br": "Groudon",
        "zh-tw": "固拉多",
        ko: "그란돈",
        ja: "グラードン"
    },
    illustrator: "Uta",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Fighting"],
    dexId: [383],
    stage: "Basic",
    description: {
        en: "This legendary Pokémon is said to represent the land. It went to sleep after dueling Kyogre.",
        fr: "Ce Pokémon légendaire incarne la terre.\nIl plongea dans un profond sommeil après son combat\navec Kyogre.",
        es: "Dicen que este Pokémon legendario simboliza la tierra.\nTras batirse en duelo con Kyogre se echó a dormir.",
        it: "Pokémon leggendario che rappresenta la terra. Dopo\naver sfidato Kyogre, è caduto in un sonno profondo.",
        de: "Dieses Legendäre Pokémon soll das Land verkörpern.\nEs ist in einen Schlaf gefallen, nachdem es mit Kyogre\ngekämpft hat.",
        "pt-br": "Diz-se que este Pokémon lendário representa a terra. Adormeceu depois de duelar com Kyogre.",
        "zh-tw": "據說這隻傳說中的寶可夢代表了這片土地。它在決鬥 蓋歐卡 後進入睡眠狀態。"
    },
    attacks: [
        {
            cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
            name: {
                en: "Gaia Blast",
                fr: "Déflagration de Gaïa",
                es: "Estallido Gaia",
                it: "Furia di Gaia",
                de: "Gaia-Ausbruch",
                "pt-br": "Disparo de Gaia",
                "zh-tw": "蓋亞爆破"
            },
            effect: {
                en: "Discard 2 random Energy from among the Energy attached to all of your Pokémon.",
                fr: "Défaussez 2 Énergies aléatoires parmi les Énergies attachées à tous vos Pokémon.",
                es: "Descarta 2 Energías aleatorias de entre las Energías unidas a todos tus Pokémon.",
                it: "Scarta due Energie casuali tra quelle assegnate a tutti i tuoi Pokémon.",
                de: "Lege 2 zufällige Energien der an alle deine Pokémon angelegten Energien ab.",
                "pt-br": "Descarte 2 Energias aleatórias dentre as Energias ligadas a todos os seus Pokémon.",
                "zh-tw": "從你所有的寶可夢所附帶的能量中隨機丟棄 2 個能量。"
            },
            damage: 130
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
