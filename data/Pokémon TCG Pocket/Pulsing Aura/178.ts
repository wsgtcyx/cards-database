import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/178",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/178",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/178",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/178",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/178",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/178"
    },
    name: {
        en: "Castform",
        fr: "Morphéo",
        es: "Castform",
        it: "Castform",
        de: "Formeo",
        "pt-br": "Castform",
        "zh-tw": "飄浮泡泡",
        ko: "캐스퐁",
        ja: "ポワルン"
    },
    illustrator: "Kazuhisa Uragami",
    rarity: "One Star",
    category: "Pokemon",
    hp: 70,
    types: ["Colorless"],
    dexId: [351],
    stage: "Basic",
    description: {
        en: "Its form changes depending on the weather. The rougher conditions get, the rougher Castform’s disposition!",
        fr: "Il n’y a pas que son apparence qui change en\nfonction de la météo : son tempérament aussi !\nPlus il y a de vent, plus il se montre agressif.",
        es: "El tiempo atmosférico cambia tanto su aspecto\ncomo su estado de ánimo. Cuanto más arrecia,\nmás agresivo se vuelve.",
        it: "Il suo aspetto cambia con le condizioni\natmosferiche. Più il tempo è brutto, più\ndiventa aggressivo.",
        de: "Seine Gestalt ändert sich abhängig vom Wetter.\nJe ungestümer dieses ist, desto gröber wird\nauch sein Charakter.",
        "pt-br": "Sua forma muda dependendo do clima. Quanto mais difíceis ficam as condições, mais difícil é a disposição do Castform!",
        "zh-tw": "樣子會隨著天氣而變化。\n天氣越是惡劣，\n性情就會變得越粗暴。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Blow Through",
                fr: "Grosse Bourrasque",
                es: "Gran Torbellino",
                it: "Colposecco",
                de: "Durchdringender Strahl",
                "pt-br": "Sopro Intenso",
                "zh-tw": "穿堂風"
            },
            effect: {
                en: "If a Stadium is in play, this attack does 20 more damage.",
                fr: "Si un Stade est en jeu, cette attaque inflige 20 dégâts supplémentaires.",
                es: "Si hay un Estadio en juego, este ataque hace 20 daños más.",
                it: "Se è in gioco uno Stadio, questo attacco infligge 20 danni in più.",
                de: "Wenn ein Stadion im Spiel ist, fügt dieser Angriff 20 Schadenspunkte mehr zu.",
                "pt-br": "Se um Estádio estiver em jogo, este ataque causa 20 pontos de dano a mais.",
                "zh-tw": "如果體育場正在進行中，則此攻擊會造成 20 點額外傷害。"
            },
            damage: "20+"
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
