import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/028",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/028",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/028",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/028",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/028",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/028",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/028"
    },
    name: {
        en: "Emboar",
        fr: "Roitiflam",
        es: "Emboar",
        it: "Emboar",
        de: "Flambirex",
        "pt-br": "Emboar",
        "zh-tw": "炎武王",
        ko: "염무왕",
        ja: "エンブオー"
    },
    illustrator: "Shin Nagasawa",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 160,
    types: ["Fire"],
    dexId: [500],
    evolveFrom: {
        en: "Pignite",
        fr: "Grotichon",
        es: "Pignite",
        it: "Pignite",
        de: "Ferkokel",
        "pt-br": "Pignite",
        "zh-tw": "炒炒豬",
        ko: "차오꿀",
        ja: "チャオブー"
    },
    stage: "Stage2",
    description: {
        en: "It can throw a fire punch by setting its fists on fire with its fiery chin. It cares deeply about its friends.",
        fr: "Il embrase ses poings avec les flammes sur son menton\net cogne l’ennemi avec. C’est un Pokémon très solidaire.",
        es: "Calienta sus puños con las llamas de su barbilla para propinar\npuñetazos ardientes. Es muy fiel a sus compañeros.",
        it: "Infiamma i pugni sulla barba ardente, poi sferra attacchi\ndi fuoco sui nemici. Ha molta considerazione per i suoi simili.",
        de: "Steckt mit dem Feuer um sein Kinn seine Fäuste in Brand und\nholt zu feurigen Fausthieben aus. Zeigt großen Teamgeist.",
        "pt-br": "Ele pode dar um soco de fogo colocando fogo em seus punhos com seu queixo de fogo. Ele se preocupa profundamente com seus amigos.",
        "zh-tw": "它可以用火熱的下巴點燃拳頭來發射火拳。它非常關心它的朋友。"
    },
    attacks: [
        {
            cost: ["Fire", "Fire", "Fire"],
            name: {
                en: "Flare Storm",
                fr: "Tempête Flamboyante",
                es: "Tormenta de Llamas",
                it: "Fuocobufera",
                de: "Hitzesturm",
                "pt-br": "Tempestade de Chamas",
                "zh-tw": "閃焰風暴"
            },
            effect: {
                en: "Flip a coin for each {R} Energy attached to this Pokémon. This attack does 30 more damage for each heads.",
                fr: "Lancez une pièce pour chaque {R} Énergie attachée à ce Pokémon. Cette attaque inflige 30 dégâts supplémentaires pour chaque tête.",
                es: "Lanza una moneda por cada energía {R} unida a este Pokémon. Este ataque hace 30 daños más por cada cabeza.",
                it: "Lancia una moneta per ogni Energia {R} assegnata a questo Pokémon. Questo attacco infligge 30 danni in più per ogni testa.",
                de: "Wirf eine Münze für jede {R}-Energie, die an dieses Pokémon angelegt ist. Dieser Angriff verursacht 30 weitere Schadenspunkte pro Kopf.",
                "pt-br": "Jogue uma moeda para cada Energia {R} ligada a este Pokémon. Este ataque causa mais 30 danos para cada cabeça.",
                "zh-tw": "為該寶可夢所附加的每個 {R} 能量拋一枚硬幣。此攻擊對每個頭造成 30 點額外傷害。"
            },
            damage: "70+"
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 4
};

export default card;
