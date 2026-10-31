import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/204",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/204",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/204",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/204",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/204",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/204",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/204",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/204"
    },
    name: {
        en: "Fearow",
        fr: "Rapasdepic",
        es: "Fearow",
        "pt-br": "Fearow",
        "zh-tw": "大嘴雀",
        ja: "オニドリル",
        ko: "깨비드릴조",
        it: "Fearow",
        de: "Ibitak"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 90,
    types: [
        "Colorless"
    ],
    stage: "Stage1",
    retreat: 1,
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Spearow",
        fr: "Piafabec",
        es: "Spearow",
        it: "Spearow",
        de: "Habitak",
        "pt-br": "Spearow",
        "zh-tw": "烈雀",
        ja: "オニスズメ",
        ko: "Spearow"
    },
    attacks: [
        {
            name: {
                en: "Drill Peck",
                fr: "Bec Vrille",
                es: "Pico Taladro",
                it: "Perforbecco",
                de: "Bohrschnabel",
                "pt-br": "Bico Broca",
                "zh-tw": "啄鑽",
                ja: "ドリルくちばし",
                ko: "Drill Peck"
            },
            cost: [
                "Colorless"
            ],
            damage: 50
        }
    ],
    abilities: [],
    description: {
        en: "Carrying food through Fearow’s territory is dangerous. It will snatch the food away from you in a flash!",
        fr: "Si vous vous promenez sur le territoire d’un Rapasdepic en transportant de la nourriture, vous risquez de vite la voir s’envoler !",
        es: "Es peligroso pasear con comida por su territorio, ya que supone exponerse a que en cualquier momento se abalance para robarla.",
        it: "Chi attraversa il suo territorio portando con sé del cibo corre il rischio di vederselo strappare via in men che non si dica.",
        de: "Wer Essbares dabeihat, sollte sich nicht in Ibitaks Revier begeben, da sonst ein Überfall aus heiterem Himmel droht.",
        "pt-br": "Transportar alimento através do território de Fearow é perigoso, porque este Pokémon roubará a comida em um instante!",
        "zh-tw": "在大嘴雀的地盤上帶著食物走動是件危險的事，食物轉眼間就會被奪走。",
        ja: "オニドリルの 縄張りで 食べ物を 持って 歩くのは 危険だ。 あっという 間に かっさらわれるぞ。",
        ko: "Carrying food through Fearow’s territory is dangerous. It will snatch the food away from you in a flash!"
    }
};

export default card;
