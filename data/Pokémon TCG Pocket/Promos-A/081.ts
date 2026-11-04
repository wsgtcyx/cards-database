import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/081/fdc32f84918d2513",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/081/fdc32f84918d2513",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/081/fdc32f84918d2513",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/081/fdc32f84918d2513",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/081/fdc32f84918d2513",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/081/fdc32f84918d2513",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/081/fdc32f84918d2513",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/081/fdc32f84918d2513",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/081/fdc32f84918d2513"
    },
    name: {
        en: "Ultra Necrozma ex",
        es: "Ultra-Necrozma ex",
        "fr": "Ultra-Necrozma-ex",
        "it": "UltraNecrozma-ex",
        "de": "Ultra-Necrozma-ex",
        "pt-br": "Ultra Necrozma ex",
        "zh-tw": "究極奈克洛茲瑪ex",
        ja: "ウルトラネクロズマex",
        ko: "울트라네크로즈마 ex"
    },
    illustrator: "PLANETA Tsuji",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Dragon"],
    stage: "Basic",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Photon Claw",
                es: "Garra Fotónica",
                "fr": "Griffe de Photons",
                "it": "Artiglio fotonico",
                "de": "Photonenklaue",
                "pt-br": "Garra de Fótons",
                "zh-tw": "光子爪",
                ja: "フォトンクロー",
                ko: "포톤클로"
            },
            damage: 60,
            cost: ["Colorless", "Colorless", "Colorless"]
        },
        {
            name: {
                en: "Shoegaze",
                es: "Shoegaze",
                "fr": "Shoegazing",
                "it": "Shoegaze",
                "de": "Shoegaze",
                "pt-br": "Shoegaze",
                "zh-tw": "噴洩搖滾",
                ja: "シューゲイザー",
                ko: "슈게이즈"
            },
            damage: 120,
            cost: ["Psychic", "Psychic", "Metal", "Metal"],
            effect: {
                en: "Discard the top 5 cards of each player's deck.",
                es: "Descarta las 5 primeras cartas de la baraja de cada jugador.",
                "fr": "Défaussez les 5 premières cartes du dessus du deck de chaque joueur.",
                "it": "Scarta le prime 5 carte del mazzo di entrambi i giocatori.",
                "de": "Lege die obersten 5 Karten des Decks jedes Spielers ab.",
                "pt-br": "Descarte 5 cartas de cima do baralho de cada jogador.",
                "zh-tw": "將雙方的牌庫上方各5張卡丟棄。",
                ja: "おたがいの山札を上から5枚ずつトラッシュ。",
                ko: "서로의 덱을 위에서부터 5장씩 트래쉬한다."
            }
        }],
    retreat: 2,
    boosters: ["vol9"]
};
export default card;
