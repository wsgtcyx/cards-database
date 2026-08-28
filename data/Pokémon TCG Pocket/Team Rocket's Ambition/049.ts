import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/049",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/049",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/049",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/049",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/049",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/049",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/049"
    },
    name: {
        en: "Team Rocket's Tinkatuff",
        fr: "Forgella de la Team Rocket",
        es: "Tinkatuff del Team Rocket",
        it: "Tinkatuff del Team Rocket",
        de: "Team Rockets Tafforgita",
        "pt-br": "Tinkatuff da Equipe Rocket",
        "zh-tw": "火箭隊的巧鍛匠",
        ko: "로켓단의 벼리짱",
        ja: "ロケット団のナカヌチャン"
    },
    illustrator: "Mousho",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Metal"],
    evolveFrom: {
        en: "Team Rocket's Tinkatink",
        fr: "Forgerette de la Team Rocket",
        es: "Tinkatink del Team Rocket",
        it: "Tinkatink del Team Rocket",
        de: "Team Rockets Forgita",
        "pt-br": "Tinkatink da Equipe Rocket",
        "zh-tw": "火箭隊的小鍛匠",
        ko: "로켓단의 어리짱",
        ja: "ロケット団のカヌチャン"
    },
    stage: "Stage1",
    description: {
        en: "These Pokémon make their homes in piles of scrap metal. They test the strength of each other's hammers by smashing them together.",
        fr: "Ce Pokémon vit dans des tas de ferraille. Pour tester la force de ses marteaux, il les cogne contre ceux de ses congénères.",
        es: "Convierte montañas de chatarra en su guarida. Estos Pokémon suelen medir la fuerza de sus martillos golpeándolos contra los de los demás.",
        it: "Nidifica in montagne di ferraglia e testa la forza del proprio martello battendolo violentemente contro quello dei propri simili.",
        de: "Sie wohnen in Haufen aus Metallschrott. Um die Stärke ihrer Hämmer zu testen, schlagen sie diese kräftig gegeneinander.",
        "pt-br": "Moram em pilhas de metais sucateados. Testam a força de seus martelos ao baté-los uns contra os outros.",
        "zh-tw": "棲息在堆滿破銅爛鐵的地方。為了測試錘子的強度，會和夥伴們激烈地敲打彼此。"
    },
    attacks: [
        {
            cost: ["Metal", "Colorless"],
            name: {
                en: "Corkscrew Punch",
                fr: "Poing Tire-Bouchon",
                es: "Puño Tirabuzón",
                it: "Pugno Rotante",
                de: "Korkenzieherhieb",
                "pt-br": "Soco Saca-rolha",
                "zh-tw": "推擊"
            },
            damage: 50
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
