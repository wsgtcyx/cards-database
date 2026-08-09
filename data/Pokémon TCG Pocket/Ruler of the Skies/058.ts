import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/058",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/058",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/058",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/058",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/058",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/058",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/058"
    },
    name: {
        en: "Eelektross",
        fr: "Ohmassacre",
        es: "Eelektross",
        it: "Eelektross",
        de: "Zapplarang",
        "pt-br": "Eelektross",
        "zh-tw": "麻麻鰻魚王",
        ko: "저리더프",
        ja: "シビルドン"
    },
    illustrator: "Shin Nagasawa",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Lightning"],
    dexId: [604],
    evolveFrom: {
        en: "Eelektrik",
        fr: "Lampéroie",
        es: "Eelektrik",
        it: "Eelektrik",
        de: "Zapplalek",
        "pt-br": "Eelektrik",
        "zh-tw": "麻麻鰻",
        ko: "저리릴",
        ja: "シビビール"
    },
    stage: "Stage2",
    description: {
        en: "It latches on to prey with its sucker mouth, sinking in its fangs and shocking the prey with powerful electricity.",
        fr: "Sa bouche agit comme une ventouse aux crocs acérés qu'il plante dans sa proie en envoyant une décharge électrique.",
        es: "Pega la ventosa de su boca en su presa y la electrocuta con una gran descarga al clavarle los colmillos.",
        it: "Si attacca alla preda con la bocca a ventosa, conficca i denti nel suo corpo e rilascia una potente scarica elettrica.",
        "de": "Es hakt sich mit seinem Maul, das als Saugnapf fungiert, an seiner Beute fest und verpasst ihr mit seinen Fangzähnen starke Stromschläge.",
        "pt-br": "Agarra a presa com sua boca sugadora, fincando seus dentes e eletrocutando-a intensamente",
        "zh-tw": "會用吸盤的嘴吸附在\n對手身上，然後刺進\n牙齒放出強大的電流。"
    },
    attacks: [
        {
            cost: ["Lightning", "Colorless"],
            name: {
                en: "Energy Crush",
                fr: "Écras'Énergie",
                es: "Comprimir Energía",
                it: "Sgretolenergia",
                de: "Zermalmende Energie",
                "pt-br": "Esmagamento de Energia",
                "zh-tw": "能量粉碎"
            },
            effect: {
                en: "This attack does 20 more damage for each Energy attached to all of your opponent's Pokémon.",
                fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
                es: "Este ataque hace 20 puntos de daño más por cada Energía unida a todos los Pokémon de tu rival.",
                de: "Diese Attacke fügt für jede an alle Pokémon deines Gegners angelegte Energie 20 Schadenspunkte mehr zu.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada Energia ligada a todos os Pokémon do seu oponente.",
                "zh-tw": "增加對手的所有寶可夢身上的能量的數量×20點傷害。",
                "it": "Questo attacco infligge 20 danni in più per ogni Energia assegnata ai Pokémon del tuo avversario."
            },
            damage: "50+"
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 3
};
export default card;
