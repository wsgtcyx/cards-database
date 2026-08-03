import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/012",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/012",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/012",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/012",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/012",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/012",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2b/012"
    },
    name: {
        en: "Magmar",
        fr: "Magmar",
        es: "Magmar",
        it: "Magmar",
        de: "Magmar",
        "pt-br": "Magmar",
        "zh-tw": "鴨嘴火獸",
        ko: "마그마",
        ja: "ブーバー"
    },
    illustrator: "Yukiko Baba",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fire"],
    dexId: [126],
    stage: "Basic",
    description: {
        en: "Wavering flames similar to those of the sun appear on the surface of this Pokémon’s body.",
        fr: "Des flammes vacillantes semblables à celles du soleil apparaissent à la surface du corps de ce Pokémon.",
        es: "En la superficie del cuerpo de este Pokémon aparecen llamas ondulantes similares a las del sol.",
        it: "Sulla superficie del corpo di questo Pokémon compaiono fiamme tremolanti simili a quelle del sole.",
        de: "Auf der Körperoberfläche dieses Pokémon erscheinen flackernde Flammen, die denen der Sonne ähneln.",
        "pt-br": "Chamas oscilantes semelhantes às do sol aparecem na superfície do corpo deste Pokémon.",
        "zh-tw": "這隻寶可夢的身體表面出現了類似太陽的波動火焰。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Tail Whap",
                fr: "Queue Battoir",
                es: "Coletón",
                it: "Codabotta",
                de: "Schweifvertrimmer",
                "pt-br": "Surra de Cauda",
                "zh-tw": "擺尾拍擊"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
