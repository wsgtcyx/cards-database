import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/086",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/086"
    },
    name: {
        en: "Sawk",
        fr: "Karaclée",
        es: "Sawk",
        it: "Sawk",
        de: "Karadonis",
        "pt-br": "Sawk",
        "zh-tw": "打擊鬼",
        ko: "타격귀",
        ja: "ダゲキ"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Fighting"],
    dexId: [539],
    stage: "Basic",
    description: {
        en: "The karate chops of a Sawk that’s trained itself to the limit can cleave the ocean itself.",
        fr: "Après avoir suivi un entraînement intensif,\nla puissance du tranchant de sa main est telle\nqu’il peut fendre la mer en deux.",
        es: "Cuando un Sawk ha entrenado duro, es capaz\nde separar las aguas del océano con la potencia\nde sus técnicas de kárate.",
        it: "Grazie al suo intenso allenamento, può infliggere\nmicidiali colpi di karate capaci di dividere in due\nle acque dell’oceano.",
        de: "Der Karateschlag eines perfekt durchtrainierten\nKaradonis’ hat genug Wucht, um selbst das Meer\nzu spalten.",
        "pt-br": "Os golpes de caratê de um Sawk que treinou até o limite podem dividir o próprio oceano.",
        "zh-tw": "不斷重複練習的打擊鬼\n所使出的空手劈擁有\n足以劈開大海的破壞力。"
    },
    attacks: [
        {
            cost: ["Fighting"],
            name: {
                en: "Brick Break",
                fr: "Casse-Brique",
                es: "Demolición",
                it: "Breccia",
                de: "Durchbruch",
                "pt-br": "Quebra-telha",
                "zh-tw": "劈瓦"
            },
            effect: {
                en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
                fr: "Les dégâts de cette attaque ne sont affectés par aucun effet sur le Pokémon Actif de votre adversaire.",
                es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
                it: "Il danno di questo attacco non è influenzato da alcun effetto sul Pokémon attivo del tuo avversario.",
                de: "Der Schaden dieses Angriffs wird nicht durch Effekte auf das Aktive Pokémon deines Gegners beeinflusst.",
                "pt-br": "O dano deste ataque não é afetado por nenhum efeito no Pokémon Ativo do seu oponente.",
                "zh-tw": "這次攻擊的傷害不受對手的活躍寶可夢的任何效果影響。"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
