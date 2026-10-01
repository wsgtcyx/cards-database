import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/275",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/275",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/275",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/275",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/275",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/275",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/275"
    },
    name: {
        en: "Alolan Vulpix",
        fr: "Goupix d'Alola",
        es: "Vulpix de Alola",
        it: "Vulpix di Alola",
        de: "Alola-Vulpix",
        "pt-br": "Vulpix de Alola",
        "zh-tw": "阿羅拉六尾",
        ja: "アローラロコン",
        ko: "알로라식스테일"
    },
    illustrator: "Saya Tsuruta",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: [
        "Water"
    ],
    description: {
        en: "In hot weather, this Pokémon makes ice shards\nwith its six tails and sprays them around to cool\nitself off.",
        fr: "Quand il fait chaud, il crée des fragments de glace avec ses six queues et les disperse autour de lui pour se rafraîchir.",
        es: "Cuando hace calor, crea rocas de hielo con sus seis colas y las disemina por los alrededores para enfriar su cuerpo.",
        it: "Quando fa caldo, abbassa la temperatura corporea sparpagliando tutto attorno a sé pezzi di ghiaccio che crea dalle sue sei code.",
        de: "Bei heißem Wetter erzeugt es mit seinen sechs Schweifen Kiesel aus Eis. Diese verteilt es in der Nähe, um seinen Körper abzukühlen.",
        "pt-br": "Quando o clima está quente, este Pokémon cria cacos de gelo com suas seis caudas e os espalha para se refrescar.",
        "zh-tw": "天氣熱的時候會用6根尾巴製造冰礫再散向周圍，藉此讓身體冷卻下來。",
        ja: "In hot weather, this Pokémon makes ice shards\nwith its six tails and sprays them around to cool\nitself off.",
        ko: "In hot weather, this Pokémon makes ice shards\nwith its six tails and sprays them around to cool\nitself off."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Gnaw",
                fr: "Ronge",
                es: "Roer",
                it: "Rosicchiamento",
                de: "Nagen",
                "pt-br": "Roída",
                "zh-tw": "咬",
                ja: "Gnaw",
                ko: "Gnaw"
            },
            damage: 20,
            cost: [
                "Water"
            ]
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
