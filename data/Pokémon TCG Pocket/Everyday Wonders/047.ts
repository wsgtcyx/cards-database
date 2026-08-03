import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/047",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/047",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/047",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/047",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/047",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/047",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3b/047"
    },
    name: {
        en: "Toxapex",
        fr: "Prédastérie",
        es: "Toxapex",
        it: "Toxapex",
        de: "Aggrostella",
        "pt-br": "Toxapex",
        "zh-tw": "超壞星",
        ko: "더시마사리",
        ja: "ドヒドイデ"
    },
    illustrator: "kirisAki",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Darkness"],
    dexId: [748],
    evolveFrom: {
        en: "Mareanie",
        fr: "Vorastérie",
        es: "Mareanie",
        it: "Mareanie",
        de: "Garstella",
        "pt-br": "Mareanie",
        "zh-tw": "好壞星",
        ko: "시마사리",
        ja: "ヒドイデ"
    },
    stage: "Stage1",
    description: {
        en: "Toxapex gets into fierce battles with Bruxish over areas where warm ocean currents flow, but the odds are always against it.",
        fr: "Prédastérie se lance dans des batailles acharnées avec Denticrisse dans les zones où circulent des courants océaniques chauds, mais les chances sont toujours contre.",
        es: "Toxapex se involucra en feroces batallas con Bruxish por áreas donde fluyen corrientes oceánicas cálidas, pero las probabilidades siempre están en contra.",
        it: "Toxapex entra in feroci battaglie con Bruxish su aree dove scorrono calde correnti oceaniche, ma le probabilità sono sempre contro di essa.",
        de: "Aggrostella liefert sich erbitterte Kämpfe mit Knirfish um Gebiete, in denen warme Meeresströmungen fließen, aber die Chancen stehen immer schlecht.",
        "pt-br": "Toxapex entra em batalhas ferozes com Bruxish em áreas onde fluem correntes oceânicas quentes, mas as probabilidades estão sempre contra.",
        "zh-tw": "超壞星與磨牙彩皮魚在溫暖洋流流過的區域展開激烈的戰鬥，但勝算始終不高。"
    },
    attacks: [
        {
            cost: ["Darkness", "Colorless"],
            name: {
                en: "Severe Poison",
                fr: "Poison sévère",
                es: "Veneno severo",
                it: "Veleno grave",
                de: "Schweres Gift",
                "pt-br": "Veneno Severo",
                "zh-tw": "惡棍猛毒"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned. Do 40 damage to this Pokémon instead of the usual amount for this Special Condition.",
                fr: "Le Pokémon Actif de votre adversaire est désormais Empoisonné. Infligez 40 dégâts à ce Pokémon au lieu du montant habituel pour cette Condition Spéciale.",
                es: "El Pokémon Activo de tu rival ahora está Envenenado. Haz 40 daños a este Pokémon en lugar de la cantidad habitual para esta Condición Especial.",
                it: "Il Pokémon attivo del tuo avversario è ora avvelenato. Infliggi 40 danni a questo Pokémon invece del solito ammontare di questa condizione speciale.",
                de: "Das aktive Pokémon deines Gegners ist jetzt vergiftet. Füge diesem Pokémon 40 Schadenspunkte statt der üblichen Menge für diesen besonderen Zustand zu.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Envenenado. Cause 40 de dano a este Pokémon em vez da quantidade normal para esta Condição Especial.",
                "zh-tw": "你對手的主動寶可夢現在中毒了。對該寶可夢造成 40 點傷害，而不是此特殊條件下的常見傷害。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
