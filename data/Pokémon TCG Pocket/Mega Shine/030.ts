import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/030",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/030",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/030",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/030",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/030",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/030",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2b/030"
    },
    name: {
        en: "Mew",
        fr: "Mew",
        es: "Mew",
        it: "Mew",
        de: "Mew",
        "pt-br": "Mew",
        "zh-tw": "夢幻",
        ko: "뮤",
        ja: "ミュウ"
    },
    illustrator: "Atsuko Nishida",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Psychic"],
    dexId: [151],
    stage: "Basic",
    description: {
        en: "Its DNA is said to contain the genetic codes of all Pokémon, so it can use all kinds of techniques.",
        fr: "Son ADN contient les codes génétiques de tous\nles Pokémon. Il peut utiliser nombre de techniques.",
        es: "Dicen que su ADN contiene el código genético de\ntodos los Pokémon, por lo que conoce cualquier\ntécnica.",
        it: "Pare che il suo DNA contenga i codici genetici di tutti\ni Pokémon; per questo può usare qualsiasi tecnica.",
        de: "Seine DNS soll den genetischen Code aller Pokémon\nbeinhalten. Dadurch kann es alle Attacken erlernen.",
        "pt-br": "Diz-se que seu DNA contém os códigos genéticos de todos os Pokémon, por isso ele pode usar todos os tipos de técnicas.",
        "zh-tw": "據說它的DNA包含所有寶可夢的遺傳密碼，因此它可以使用各種技術。"
    },
    attacks: [
        {
            cost: ["Psychic", "Colorless"],
            name: {
                en: "Miraculous Memory",
                fr: "Mémoire Miraculeuse",
                es: "Memoria Prodigiosa",
                it: "Memoria Miracolosa",
                de: "Wundersames Gedächtnis",
                "pt-br": "Memória Miraculosa",
                "zh-tw": "奇跡記憶"
            },
            effect: {
                en: "1 attack from among the Pokémon in your opponent's hand and deck is chosen at random, and you use the chosen attack as this attack.",
                fr: "1 attaque parmi les Pokémon de la main et du deck de votre adversaire est choisie au hasard, et vous utilisez l'attaque choisie comme cette attaque.",
                es: "Se elige al azar 1 ataque de entre los Pokémon en la mano y el mazo de tu oponente, y usas el ataque elegido como este ataque.",
                it: "1 attacco tra i Pokémon nella mano e nel mazzo del tuo avversario viene scelto a caso e tu usi l'attacco scelto come questo attacco.",
                de: "1 Angriff aus den Pokémon in der Hand und im Deck deines Gegners wird zufällig ausgewählt und du verwendest den gewählten Angriff als diesen Angriff.",
                "pt-br": "1 ataque entre os Pokémon na mão e no baralho do seu oponente é escolhido aleatoriamente e você usa o ataque escolhido como este ataque.",
                "zh-tw": "從對手的手牌和牌組中的寶可夢中隨機選擇 1 個攻擊，並使用所選的攻擊作為這次攻擊。"
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
