import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/175",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/175",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/175",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/175",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/175"
    },
    name: {
        en: "Yveltal",
        "fr": "Yveltal",
        "es": "yveltal",
        "it": "Yveltal",
        "de": "Yveltal",
        "pt-br": "Yveltal",
        "zh-tw": "伊韋爾塔爾"
    },
    illustrator: "Nurikabe",
    rarity: "One Star",
    category: "Pokemon",
    hp: 120,
    types: ["Darkness"],
    description: {
        en: "When its life comes to an end, it absorbs\nthe life energy of every living thing\nand turns into a cocoon once more.",
        "fr": "Quand sa vie touche à sa fin, il absorbe\nl'énergie vitale de tout être vivant\net redevient un cocon.",
        "es": "Cuando su vida llega a su fin, absorbe\nla energía vital de cada ser vivo\ny se convierte en un capullo una vez más.",
        "it": "Quando la sua vita giunge al termine, assorbe\nl'energia vitale di ogni essere vivente\ne si trasforma nuovamente in un bozzolo.",
        "de": "Wenn sein Leben zu Ende geht, absorbiert es\ndie Lebensenergie jedes Lebewesens\nund verwandelt sich wieder in einen Kokon.",
        "pt-br": "Quando sua vida chega ao fim, ele absorve\na energia vital de todos os seres vivos\ne se transforma em casulo mais uma vez.",
        "zh-tw": "當它的生命結束時，它會吸收\n一切生物的生命能量\n並再次變成繭。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Evil Crash",
                "fr": "Crash maléfique",
                "es": "Choque malvado",
                "it": "Malvagio schianto",
                "de": "Böser Absturz",
                "pt-br": "Acidente Maligno",
                "zh-tw": "邪惡崩潰"
            },
            damage: 90,
            cost: ["Darkness", "Darkness", "Darkness"],
            effect: {
                en: "Discard a random Energy from both Active Pokémon.",
                "fr": "Défaussez une Énergie au hasard des deux Pokémon Actifs.",
                "es": "Descarta 1 Energía aleatoria de ambos Pokémon Activos.",
                "it": "Rimuovi un'Energia a caso da entrambi i Pokémon attivi.",
                "de": "Lege 1 zufällige Energie von beiden Aktiven Pokémon ab.",
                "pt-br": "Descarte 1 Energia aleatória de ambos os Pokémon Ativos.",
                "zh-tw": "丟棄兩隻活躍神奇寶貝的隨機能量。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
