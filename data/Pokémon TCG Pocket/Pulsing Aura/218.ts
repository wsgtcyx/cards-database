import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/218",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/218",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/218",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/218",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/218",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/218",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/218"
    },
    name: {
        en: "Skrelp",
        fr: "Venalgue",
        es: "Skrelp",
        it: "Skrelp",
        de: "Algitt",
        "pt-br": "Skrelp",
        "zh-tw": "垃垃藻",
        ko: "수레기",
        ja: "クズモー"
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    dexId: [690],
    stage: "Basic",
    description: {
        en: "This Pokémon is a poor swimmer. If it’s caught in a fierce storm, it will sometimes get washed far away and become unable to return to its home.",
        fr: "Ce Pokémon est un mauvais nageur. S’il est pris dans une violente tempête, il sera parfois emporté au loin et ne pourra plus retourner chez lui.",
        es: "Este Pokémon es un mal nadador. Si queda atrapado en una tormenta feroz, a veces será arrastrado muy lejos y no podrá regresar a su hogar.",
        it: "Questo Pokémon è un pessimo nuotatore. Se viene sorpreso da una violenta tempesta, a volte verrà trascinato lontano e non sarà più in grado di tornare a casa.",
        de: "Dieses Pokémon ist ein schlechter Schwimmer. Wenn es in einen heftigen Sturm gerät, wird es manchmal weit weggeschwemmt und kann nicht mehr in sein Zuhause zurückkehren.",
        "pt-br": "Este Pokémon é um péssimo nadador. Se for pego por uma forte tempestade, às vezes será levado para longe e não poderá retornar para sua casa.",
        "zh-tw": "这只神奇宝贝游泳技术很差。如果遇到猛烈的暴風雨，有時它會被沖到很遠的地方，無法回到自己的家。"
    },
    attacks: [
        {
            cost: ["Darkness", "Colorless"],
            name: {
                en: "Razor Fin",
                fr: "Aileron-Rasoir",
                es: "Aleta Afilada",
                it: "Pinnalama",
                de: "Rasierflosse",
                "pt-br": "Barbatana Cortante",
                "zh-tw": "鰭快刀"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
