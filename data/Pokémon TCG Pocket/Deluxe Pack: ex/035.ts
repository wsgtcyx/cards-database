import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/035",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/035",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/035",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/035",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/035",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/035",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/035"
    },
    name: {
        en: "Servine",
        "fr": "Lianaja",
        "es": "Servine",
        "it": "Servine",
        "de": "Efoserp",
        "pt-br": "Servine",
        "zh-tw": "青藤蛇",
    },
    illustrator: "Shigenori Negishi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    evolveFrom: {
        en: "Snivy",
        "fr": "Vipélierre",
        "es": "Snivy",
        "it": "Snivy",
        "de": "Serpifeu",
        "pt-br": "Snivy",
        "zh-tw": "藤藤蛇",
    },
    description: {
        en: "It moves along the ground as if sliding. Its swift\nmovements befuddle its foes, and it then attacks\nwith a vine whip.",
        "fr": "Il se déplace sur le sol comme s'il glissait. C'est rapide\nses mouvements déroutent ses ennemis, puis il attaque\navec un fouet de vigne.",
        "es": "Se mueve por el suelo como si se deslizara. es rapido\nSus movimientos confunden a sus enemigos y luego ataca.\ncon un látigo de vid.",
        "it": "Si muove sul terreno come se scivolasse. È veloce\ni movimenti confondono i suoi nemici e poi attacca\ncon una frusta di vite.",
        "de": "Es bewegt sich über den Boden, als würde es gleiten. Es ist schnell\nBewegungen verwirren ihre Feinde und greifen dann an\nmit einer Weinpeitsche.",
        "pt-br": "Ele se move pelo chão como se estivesse deslizando. É rápido\nmovimentos confundem seus inimigos e então ataca\ncom um chicote de videira.",
        "zh-tw": "它沿著地面移動，就像滑動一樣。其速度之快\n動作迷惑敵人，然後攻擊\n用藤鞭。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Vine Whip",
                "fr": "Fouet de vigne",
                "es": "Látigo de vid",
                "it": "Frusta di vite",
                "de": "Weinpeitsche",
                "pt-br": "Chicote de videira",
                "zh-tw": "藤鞭"
            },
            damage: 50,
            cost: ["Grass", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
