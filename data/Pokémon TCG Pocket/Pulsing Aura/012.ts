import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/012",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/012",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/012",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/012",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/012",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/012"
    },
    name: {
        en: "Breloom",
        fr: "Chapignon",
        es: "Breloom",
        it: "Breloom",
        de: "Kapilz",
        "pt-br": "Breloom",
        "zh-tw": "斗笠菇",
        ko: "버섯모",
        ja: "キノガッサ"
    },
    illustrator: "Atsuko Nishida",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    dexId: [286],
    evolveFrom: {
        en: "Shroomish",
        fr: "Balignon",
        es: "Shroomish",
        it: "Shroomish",
        de: "Knilz",
        "pt-br": "Shroomish",
        "zh-tw": "蘑蘑菇",
        ko: "버섯꼬",
        ja: "キノココ"
    },
    stage: "Stage1",
    description: {
        en: "The seeds on its tail are made of toxic spores. It knocks out foes with quick, virtually invisible punches.",
        fr: "Les graines sur sa queue sont constituées de spores toxiques. Il assomme les ennemis avec des coups rapides et pratiquement invisibles.",
        es: "Las semillas de su cola están hechas de esporas tóxicas. Noquea a los enemigos con golpes rápidos y prácticamente invisibles.",
        it: "I semi sulla sua coda sono fatti di spore tossiche. Mette fuori combattimento i nemici con pugni rapidi e praticamente invisibili.",
        de: "Die Samen an seinem Schwanz bestehen aus giftigen Sporen. Es schlägt Feinde mit schnellen, praktisch unsichtbaren Schlägen nieder.",
        "pt-br": "As sementes em sua cauda são feitas de esporos tóxicos. Ele nocauteia os inimigos com socos rápidos e praticamente invisíveis.",
        "zh-tw": "它尾巴上的種子是由有毒孢子製成的。它能用快速、幾乎看不見的拳頭擊倒敵人。"
    },
    attacks: [
        {
            cost: ["Grass"],
            name: {
                en: "Pre-Dawn Strike",
                fr: "Frappe Matinale",
                es: "Golpe al Amanecer",
                it: "Colpo Mattiniero",
                de: "Angriff im Morgengrauen",
                "pt-br": "Golpe de Ninar",
                "zh-tw": "破曉之擊"
            },
            effect: {
                en: "If your opponent's Active Pokémon is Asleep, this attack does 60 more damage.",
                fr: "Si le Pokémon Actif de votre adversaire est Endormi, cette attaque inflige 60 dégâts supplémentaires.",
                es: "Si el Pokémon Activo de tu rival está Dormido, este ataque hace 60 puntos de daño más.",
                it: "Se il Pokémon attivo del tuo avversario è addormentato, questo attacco infligge 60 danni in più.",
                de: "Wenn das Aktive Pokémon deines Gegners schläft, fügt dieser Angriff 60 weitere Schadenspunkte zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente estiver Adormecido, este ataque causará 60 de dano a mais.",
                "zh-tw": "如果對手的活躍寶可夢處於睡眠狀態，則此攻擊造成的傷害增加 60 點。"
            },
            damage: "30+"
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
