import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/051",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/051",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/051",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/051",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/051",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/051",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/051",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/051"
    },
    name: {
        en: "Jigglypuff",
        fr: "Rondoudou",
        es: "Jigglypuff",
        "pt-br": "Jigglypuff",
        "zh-tw": "胖丁",
        ja: "プリン",
        ko: "푸린",
        it: "Jigglypuff",
        de: "Pummeluff"
    },
    illustrator: "saino misaki",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 50,
    types: [
        "Psychic"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Soothing Lullaby",
                fr: "Berceuse Apaisante",
                es: "Nana Sedante",
                it: "Ninnananna Calmante",
                de: "Beruhigendes Wiegenlied",
                "pt-br": "Canção de Ninar Calmante",
                "zh-tw": "熟睡歌曲",
                ja: "じゅくすいソング",
                ko: "Soothing Lullaby"
            },
            cost: [
                "Psychic",
                "Psychic"
            ],
            damage: 30,
            effect: {
                en: "Your opponent's Active Pokémon is now Asleep. Your opponent flips 2 coins for this Special Condition, and if either of them is tails, that Pokémon is still Asleep.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi. Votre adversaire lance 2 pièces pour cet État Spécial. S'il y a au moins un côté pile, ce Pokémon reste Endormi.",
                es: "El Pokémon Activo de tu rival pasa a estar Dormido. Tu rival lanza 2 monedas por esta Condición Especial y, si sale cruz en alguna de ellas, ese Pokémon sigue Dormido.",
                it: "Il Pokémon attivo del tuo avversario viene addormentato. Il tuo avversario lancia 2 volte una moneta per questa condizione speciale. Se esce almeno una volta croce, quel Pokémon resta addormentato.",
                de: "Das Aktive Pokémon deines Gegners schläft jetzt. Dein Gegner wirft 2 Münzen für diesen Speziellen Zustand. Zeigt mindestens 1 Zahl, schläft jenes Pokémon weiter.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Adormecido. Seu oponente joga 2 moedas para esta Condição Especial e, se qualquer uma delas sair coroa, aquele Pokémon permanecerá Adormecido.",
                "zh-tw": "將對手的戰鬥寶可夢睡眠。因這個睡眠的擲硬幣次數改為2次,若沒有全部為正面則無法恢復。",
                ja: "相手のバトルポケモンをねむりにする。このねむりで投げるコインは2回になり、すべてオモテが出ないと回復しない。",
                ko: "Your opponent's Active Pokémon is now Asleep. Your opponent flips 2 coins for this Special Condition, and if either of them is tails, that Pokémon is still Asleep."
            }
        }
    ],
    abilities: [],
    description: {
        en: "When its huge eyes waver, it sings a mysteriously soothing melody that lulls its enemies to sleep.",
        fr: "Quand ses grands yeux luisent, il chante une berceuse mystérieuse et agréable qui pousse ses ennemis à s’endormir.",
        es: "Cuando le tiemblan sus redondos y adorables ojos, entona una melodía agradable y misteriosa con la que duerme a sus enemigos.",
        it: "Quando i suoi occhioni rotondi tremolano, canta una misteriosa melodia che fa addormentare.",
        de: "Wenn seine Kulleraugen zu flackern beginnen, singt es ein mysteriöses, wohlklingendes Lied, das Zuhörer in Schlaf versetzt.",
        "pt-br": "Quando seus enormes olhos ficam pesados, canta uma melodia misteriosa e relaxante, fazendo com que os inimigos adormeçam.",
        "zh-tw": "當牠圓圓的大眼睛轉動時，就會唱搖籃曲般的歌曲，讓人舒服地昏昏欲睡。",
        ja: "つぶらな 瞳が 揺れるとき 眠たくなるような 不思議で 気持ちのいい 歌を 歌う。",
        ko: "When its huge eyes waver, it sings a mysteriously soothing melody that lulls its enemies to sleep."
    }
};

export default card;
