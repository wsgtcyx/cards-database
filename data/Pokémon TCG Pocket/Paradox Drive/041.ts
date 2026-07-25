import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/041",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/041",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/041",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/041",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/041",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/041"
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
    illustrator: "Sumiyoshi Kizuki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Darkness"],
    dexId: [624],
    stage: "Basic",
    description: {
        en: "A pack of these Pokémon forms to serve a Bisharp boss. Each Pawniard trains diligently, dreaming of one day taking the lead.",
        fr: "Il vit en meute, sous les ordres d’un Scalproie.\nIl s’entraîne sans relâche en rêvant du jour\noù il sera chef de meute à son tour.",
        es: "Forman grupos encabezados por un Bisharp. Se\nentrenan a diario soñando con llegar a liderar el\ngrupo algún día.",
        it: "Con i suoi simili forma gruppi capeggiati da\nun Bisharp. Si allena quotidianamente sognando\nun giorno di diventare il capo del gruppo.",
        de: "Gladiantri bilden Gruppen mit einem Caesurio\nan der Spitze. Jedes von ihnen trainiert hart,\num irgendwann selbst Anführer zu werden.",
        "pt-br": "Um pacote desses Pokémon se forma para servir um chefe Bisharp. Cada Pawniard treina diligentemente, sonhando em um dia assumir a liderança.",
        "zh-tw": "以劈斬司令為首領組成族群。\n目標是有朝一日能統領同類，\n所以每天都在不懈地鍛鍊。"
    },
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Slash",
                fr: "Tranche",
                es: "Cuchillada",
                it: "Lacerazione",
                de: "Schlitzer",
                "pt-br": "Talho",
                "zh-tw": "劈開"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
