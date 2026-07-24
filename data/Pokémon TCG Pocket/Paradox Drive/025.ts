import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/025",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/025"
    },
    name: {
        en: "Scream Tail",
        fr: "Hurle-Queue",
        es: "Colagrito",
        it: "Codaurlante",
        de: "Brüllschweif",
        "pt-br": "Cauda Brado",
        "zh-tw": "吼叫尾",
        ko: "우렁찬꼬리",
        ja: "サケブシッポ"
    },
    illustrator: "Ryota Murayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Psychic"],
    dexId: [985],
    stage: "Basic",
    description: {
        en: "It resembles a mysterious Pokémon described in a paranormal magazine as a Jigglypuff from one billion years ago.",
        fr: "Il ressemble à un mystérieux Pokémon décrit dans un magazine paranormal comme un Rondoudou d'il y a un milliard d'années.",
        es: "Se parece a un Pokémon misterioso descrito en una revista paranormal como Jigglypuff de hace mil millones de años.",
        it: "Assomiglia a un Pokémon misterioso descritto in una rivista sul paranormale come Jigglypuff di un miliardo di anni fa.",
        de: "Es ähnelt einem mysteriösen Pokémon, das in einer paranormalen Zeitschrift als Pummeluff von vor einer Milliarde Jahren beschrieben wurde.",
        "pt-br": "Assemelha-se a um Pokémon misterioso descrito em uma revista paranormal como Jigglypuff de um bilhão de anos atrás.",
        "zh-tw": "它類似於十億年前超自然雜誌中描述為 胖丁 的神秘寶可夢。"
    },
    attacks: [
        {
            cost: ["Psychic", "Psychic"],
            name: {
                en: "Shooing Shout",
                fr: "Cri de tir",
                es: "Grito de espanto",
                it: "Urlo di tiro",
                de: "Verhexendes Geschrei",
                "pt-br": "Grito de enxotamento",
                "zh-tw": "退敵絕哮"
            },
            effect: {
                en: "Flip 2 coins. If both of them are heads, discard your opponent's Active Pokémon.",
                fr: "Lancez 2 pièces. Si les deux sont face, défaussez le Pokémon Actif de votre adversaire.",
                es: "Lanza 2 monedas. Si ambos salen cara, descarta el Pokémon Activo de tu rival.",
                it: "Lancia 2 monete. Se esce testa entrambi, scarta il Pokémon attivo del tuo avversario.",
                de: "Wirf 2 Münzen. Wenn beide Köpfe sind, wirf das Aktive Pokémon deines Gegners ab.",
                "pt-br": "Jogue 2 moedas. Se ambos derem cara, descarte o Pokémon Ativo do seu oponente.",
                "zh-tw": "翻轉 2 個硬幣。如果兩者都是正面，則丟棄對手的活躍寶可夢。"
            }
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
