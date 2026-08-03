import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/041",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/041",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/041",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/041",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/041",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/041",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/041"
    },
    name: {
        en: "Castform Snowy Form",
        fr: "Morphéo Forme Blizzard",
        es: "Castform Forma Nieve",
        it: "Castform Forma Neve",
        de: "Formeo Schneeform",
        "pt-br": "Castform Forma Nevada",
        "zh-tw": "飄浮泡泡雪雲的樣子",
        ko: "캐스퐁 설운의 모습",
        ja: "ポワルン ゆきぐものすがた"
    },
    illustrator: "miki kudo",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Water"],
    dexId: [351],
    stage: "Basic",
    description: {
        en: "This is Castform’s form when caught in a hailstorm. Its whole body is chilled, and its skin is partially frozen!",
        fr: "C’est la forme que prend Morphéo lorsqu’il est pris dans une tempête de grêle. Son corps entier est glacé, et sa peau est partiellement gelée !",
        es: "Esta es la forma de Castform cuando queda atrapado en una tormenta de granizo. ¡Todo su cuerpo está helado y su piel parcialmente congelada!",
        it: "Questa è la forma di Castform quando viene sorpreso da una grandinata. Tutto il suo corpo è freddo e la sua pelle è parzialmente congelata!",
        de: "Dies ist die Form von Formeo, wenn es in einen Hagelsturm gerät. Sein ganzer Körper ist gekühlt und seine Haut ist teilweise gefroren!",
        "pt-br": "Esta é a forma de Castform quando pego por uma tempestade de granizo. Todo o seu corpo está gelado e sua pele parcialmente congelada!",
        "zh-tw": "這是飄浮泡泡遭遇冰雹時的型態。它的全身都是冰冷的，連皮膚都被凍住了！"
    },
    attacks: [
        {
            cost: ["Water", "Colorless"],
            name: {
                en: "Snowy Chilling",
                fr: "Blizzard Glaçant",
                es: "Nieve Glacial",
                it: "Neve Raggelante",
                de: "Verschneites Frieren",
                "pt-br": "Friagem Nevada",
                "zh-tw": "雪雲冰凍"
            },
            effect: {
                en: "If a Stadium is in play, your opponent's Active Pokémon is now Asleep.",
                fr: "Si un Stade est en jeu, le Pokémon Actif de votre adversaire est désormais Endormi.",
                es: "Si hay un Estadio en juego, el Pokémon Activo de tu rival ahora está Dormido.",
                it: "Se è in gioco uno Stadio, il Pokémon attivo del tuo avversario è addormentato.",
                de: "Wenn ein Stadion im Spiel ist, schläft das aktive Pokémon deines Gegners jetzt.",
                "pt-br": "Se um Estádio estiver em jogo, o Pokémon Ativo do seu oponente agora estará Adormecido.",
                "zh-tw": "如果體育場正在進行中，對手的活躍寶可夢現在處於睡眠狀態。"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
