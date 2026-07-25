import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/094",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/094",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/094",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/094",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/094",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/094"
    },
    name: {
        en: "Fuecoco",
        fr: "Chochodile",
        es: "Fuecoco",
        it: "Fuecoco",
        de: "Krokel",
        "pt-br": "Fuecoco",
        "zh-tw": "呆火鱷",
        pt: "Fuecoco"
    },
    illustrator: "Shimaris Yukichi",
    rarity: "One Star",
    category: "Pokemon",
    hp: 70,
    types: ["Fire"],
    dexId: [909],
    description: {
        en: "Its flame sac is small, so energy is always leaking out. This energy is released from the dent atop Fuecoco's head and flickers to and fro.",
        "fr": "Son sac de flammes est petit, donc de l'énergie s'échappe toujours. Cette énergie est libérée par la bosse au sommet de la tête de Chochodile et scintille d'avant en arrière.",
        "es": "Su saco de llamas es pequeño, por lo que siempre se escapa energía. Esta energía se libera de la abolladura encima de la cabeza de Fuecoco y parpadea de un lado a otro.",
        "it": "La sua sacca di fiamme è piccola, quindi l'energia fuoriesce continuamente. Questa energia viene rilasciata dall'ammaccatura in cima alla testa di Fuecoco e lampeggia avanti e indietro.",
        "de": "Sein Flammensack ist klein, sodass ständig Energie austritt. Diese Energie wird von der Delle auf dem Kopf von Krokel freigesetzt und flackert hin und her.",
        "pt-br": "Seu saco de chamas é pequeno, então a energia está sempre vazando. Essa energia é liberada da marca no topo da cabeça de Fuecoco e oscila para frente e para trás.",
        "zh-tw": "它的火囊很小，所以能量總是在洩漏。這種能量從呆火鱷頭部頂部的凹痕中釋放出來，並來回閃爍。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Cheerful Singing",
                "fr": "Chant joyeux",
                "es": "canto alegre",
                "it": "Canto allegro",
                "de": "Fröhlicher Gesang",
                "pt-br": "Canto alegre",
                "zh-tw": "歡快的歌聲"
            },
            cost: ["Colorless"],
            effect: {
                en: "Put 1 random Basic Pokémon from your deck onto your Bench.",
                fr: "Placez un Pokémon de base au hasard de votre deck sur votre Banc.",
                es: "Pon 1 Pokémon Básico aleatorio de tu baraja en tu Banca.",
                it: "Prendi un Pokémon Base a caso dal tuo mazzo e mettilo nella tua panchina.",
                de: "Lege 1 zufälliges Basis-Pokémon aus deinem Deck auf deine Bank.",
                'pt-br': "Coloque 1 Pokémon Básico aleatório do seu baralho no seu Banco.",
                "zh-tw": "從你的牌組中隨機將 1 只基礎寶可夢放到你的備戰區上。",
                ko: "자신의 덱에서 기본 포켓몬eul_reul 랜덤으로 1장 벤치로 내보낸다."
            }
        }],
    weaknesses: [
        {
            type: "Water",
            value: "+20",
        },
    ],
    retreat: 2,
};
export default card;
