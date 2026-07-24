import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/067",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/067"
    },
    name: {
        en: "Pawniard",
        fr: "Scalpion",
        es: "Pawniard",
        it: "Pawniard",
        de: "Gladiantri",
        "pt-br": "Pawniard",
        "zh-tw": "駒刀小兵",
        ko: "자망칼",
        ja: "コマタナ"
    },
    illustrator: "Tomokazu Komiya",
    rarity: "None",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    dexId: [624],
    stage: "Basic",
    description: {
        en: "Any chips in its blades would prove fatal for it. After each battle, it diligently maintains its blades using its favorite sharpening stone.",
        fr: "Tout éclat dans ses lames lui serait fatal. Après chaque combat, il entretient assidûment ses lames à l'aide de sa pierre à aiguiser préférée.",
        es: "Cualquier astilla en sus cuchillas le resultaría fatal. Después de cada batalla, mantiene diligentemente sus espadas usando su piedra de afilar favorita.",
        it: "Qualsiasi scheggiatura nelle sue lame gli sarebbe fatale. Dopo ogni battaglia, mantiene diligentemente le sue lame utilizzando la sua pietra per affilare preferita.",
        de: "Jeder Splitter in seinen Klingen wäre für ihn tödlich. Nach jedem Kampf pflegt es seine Klingen fleißig mit seinem Lieblings-Schleifstein.",
        "pt-br": "Quaisquer lascas em suas lâminas seriam fatais para ele. Após cada batalha, ele mantém suas lâminas diligentemente usando sua pedra de amolar favorita.",
        "zh-tw": "刀片上的任何碎片都會對其造成致命的影響。每次戰鬥結束後，它都會用它最喜歡的磨刀石勤奮地維護刀片。"
    },
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Call for Family",
                fr: "Appel à la Famille",
                es: "Llamar a la Familia",
                it: "Cerca Famiglia",
                de: "Familienruf",
                "pt-br": "Chamar a Família",
                "zh-tw": "呼朋引伴"
            },
            effect: {
                en: "Put 1 random Basic Pokémon from your deck onto your Bench.",
                fr: "Placez un Pokémon de base au hasard de votre deck sur votre Banc.",
                es: "Pon 1 Pokémon Básico aleatorio de tu baraja en tu Banca.",
                it: "Prendi un Pokémon Base a caso dal tuo mazzo e mettilo nella tua panchina.",
                de: "Lege 1 zufälliges Basis-Pokémon aus deinem Deck auf deine Bank.",
                "pt-br": "Coloque 1 Pokémon Básico aleatório do seu baralho no seu Banco.",
                "zh-tw": "從你的牌組中隨機將 1 只基礎寶可夢放到你的備戰區上。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol9"]
};

export default card;
