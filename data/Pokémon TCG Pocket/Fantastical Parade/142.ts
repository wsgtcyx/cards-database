import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/142",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/142",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/142",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/142",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/142"
    },
    name: {
        en: "Tandemaus",
        "fr": "Tandémaus",
        "es": "tandemaus",
        "it": "Tandemau",
        "de": "Tandemaus",
        "pt-br": "Tandemaus",
        "zh-tw": "坦德莫斯"
    },
    illustrator: "Shimaris Yukichi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 40,
    types: ["Colorless"],
    description: {
        en: "The pair sticks together no matter what. They\nsplit any food they find exactly in half and then\neat it together.",
        "fr": "Le couple reste soudé quoi qu’il arrive. Ils\ndivisez la nourriture qu'ils trouvent exactement en deux, puis\nmangeons-le ensemble.",
        "es": "La pareja se mantiene unida pase lo que pase. ellos\ndividir cualquier alimento que encuentren exactamente por la mitad y luego\ncomerlo juntos.",
        "it": "La coppia resta unita, qualunque cosa accada. Loro\ndividere tutto il cibo che trovano esattamente a metà e poi\nmangiatelo insieme.",
        "de": "Das Paar hält zusammen, egal was passiert. Sie\nTeilen Sie alle Lebensmittel, die sie finden, genau in zwei Hälften und dann\ngemeinsam essen.",
        "pt-br": "O par permanece unido, não importa o que aconteça. Eles\ndividir qualquer comida que encontrarem exatamente pela metade e depois\ncomam juntos.",
        "zh-tw": "無論如何，這一對都會粘在一起。他們\n將他們找到的任何食物精確地分成兩半，然後\n一起吃。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Flock",
                "fr": "Troupeau",
                "es": "Rebaño",
                "it": "Gregge",
                "de": "Herde",
                "pt-br": "Rebanho",
                "zh-tw": "群"
            },
            cost: ["Colorless"],
            effect: {
                en: "Put 3 random cards from among Tandemaus and Maushold from your deck onto your Bench.",
                "fr": "Placez 3 cartes aléatoires parmi Tandemaus et Maushold de votre deck sur votre banc.",
                "es": "Pon 3 cartas aleatorias de entre Tandemaus y Maushold de tu mazo en tu Banca.",
                "it": "Metti 3 carte a caso tra Tandemau e Maushold dal tuo mazzo nella tua panchina.",
                "de": "Lege 3 zufällige Karten aus Tandemaus und Maushold aus deinem Deck auf deine Bank.",
                "pt-br": "Coloque 3 cartas aleatórias entre Tandemaus e Maushold do seu baralho no seu Banco.",
                "zh-tw": "將你牌庫中的坦德莫斯和莫斯霍爾德中的 3 張隨機牌放到你的替補席上。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
