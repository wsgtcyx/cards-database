import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/040",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/040"
    },
    name: {
        en: "Castform Rainy Form",
        fr: "Morphéo Forme Eau de Pluie",
        es: "Castform Forma Lluvia",
        it: "Castform Forma Pioggia",
        de: "Formeo Regenform",
        "pt-br": "Castform Forma Chuvosa",
        "zh-tw": "飄浮泡泡 雨水的樣子",
        ko: "캐스퐁 빗방울의 모습",
        ja: "ポワルン あまみずのすがた"
    },
    illustrator: "sowsow",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Water"],
    dexId: [351],
    stage: "Basic",
    description: {
        en: "This is Castform’s form when pelted by rain. In an experiment where it was placed in a shower, this Pokémon didn’t change to this form.",
        fr: "C’est la forme de Morphéo lorsqu’il est frappé par la pluie. Lors d'une expérience où il a été placé dans une douche, ce Pokémon n'a pas pris cette forme.",
        es: "Esta es la forma de Castform cuando lo azota la lluvia. En un experimento en el que lo colocaron en una ducha, este Pokémon no cambió a esta forma.",
        it: "Questa è la forma di Castform quando viene colpito dalla pioggia. In un esperimento in cui è stato messo sotto la doccia, questo Pokémon non è cambiato in questa forma.",
        de: "Dies ist die Form von Formeo, wenn er vom Regen getroffen wird. In einem Experiment, bei dem es unter der Dusche platziert wurde, hat sich dieses Pokémon nicht in diese Form verändert.",
        "pt-br": "Esta é a forma de Castform quando atingido pela chuva. Em um experimento onde foi colocado no chuveiro, este Pokémon não mudou para esta forma.",
        "zh-tw": "這是飄浮泡泡被雨淋時的形狀。在放入淋浴的實驗中，這隻寶可夢並沒有變成這種形狀。"
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Rainy Absorbing",
                fr: "Eau de Pluie Absorbante",
                es: "Lluvia Absorbente",
                it: "Pioggia Lenitiva",
                de: "Wolkige Absorption",
                "pt-br": "Absorção Chuvosa",
                "zh-tw": "雨水吸取"
            },
            effect: {
                en: "If a Stadium is in play, heal 20 damage from this Pokémon.",
                fr: "Si un Stade est en jeu, soignez 20 dégâts de ce Pokémon.",
                es: "Si hay un Estadio en juego, cura 20 puntos de daño de este Pokémon.",
                it: "Se è in gioco uno Stadio, cura questo Pokémon da 20 danni.",
                de: "Wenn ein Stadion im Spiel ist, heile 20 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Se um Estádio estiver em jogo, cure 20 pontos de dano deste Pokémon.",
                "zh-tw": "如果球場正在進行中，則該寶可夢可治療 20 點傷害。"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
