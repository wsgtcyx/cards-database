import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/030",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/030",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/030",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/030",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/030",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/030"
    },
    name: {
        en: "Iron Crown",
        fr: "Chef-de-Fer",
        es: "Ferrotesta",
        it: "Capoferreo",
        de: "Eisenhaupt",
        "pt-br": "Chifres Férreos",
        "zh-tw": "鐵頭殼",
        ko: "무쇠감투",
        ja: "テツノカシラ"
    },
    illustrator: "Natsumi Miyanose",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Psychic"],
    dexId: [1023],
    stage: "Basic",
    description: {
        en: "There was supposedly an incident in which it launched shining blades to cut everything around it to pieces. Little else is known about it.",
        fr: "Il y aurait eu un incident au cours duquel il aurait lancé des lames brillantes pour couper tout autour de lui en morceaux. On en sait peu d’autres.",
        es: "Supuestamente hubo un incidente en el que lanzó hojas brillantes para cortar en pedazos todo lo que lo rodeaba. Poco más se sabe al respecto.",
        it: "Si suppone che ci sia stato un incidente in cui ha lanciato lame lucenti per fare a pezzi tutto ciò che lo circondava. Si sa poco altro a riguardo.",
        de: "Angeblich gab es einen Vorfall, bei dem es mit glänzenden Klingen alles um sich herum in Stücke schnitt. Sonst ist darüber kaum etwas bekannt.",
        "pt-br": "Supostamente houve um incidente em que ele lançou lâminas brilhantes para cortar tudo ao seu redor em pedaços. Pouco mais se sabe sobre isso.",
        "zh-tw": "據說曾發生過發射閃亮的刀刃將周圍的一切切成碎片的事件。對此我們知之甚少。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Enumerating Blade",
                fr: "Lame d'énumération",
                es: "Hoja de enumeración",
                it: "Lama enumerativa",
                de: "Aufzählklinge",
                "pt-br": "Enumerando Lâmina",
                "zh-tw": "計數刃"
            },
            effect: {
                en: "This attack does 20 more damage for each of your opponent's Benched Pokémon.",
                fr: "Cette attaque inflige 20 dégâts supplémentaires pour chacun des Pokémon de Banc de votre adversaire.",
                es: "Este ataque hace 20 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
                it: "Questo attacco infligge 20 danni in più per ciascuno dei Pokémon nella panchina del tuo avversario.",
                de: "Dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners 20 weitere Schadenspunkte zu.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada Pokémon no Banco do seu oponente.",
                "zh-tw": "這次攻擊對對手的後備寶可夢每造成 20 點額外傷害。"
            },
            damage: "10+"
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
