import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/077",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/077",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/077",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/077",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/077",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/077"
    },
    name: {
        en: "Regirock",
        fr: "Regirock",
        es: "Regirock",
        it: "Regirock",
        de: "Regirock",
        "pt-br": "Regirock",
        "zh-tw": "雷吉洛克",
        ko: "레지락",
        ja: "レジロック"
    },
    illustrator: "kawayoo",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Fighting"],
    dexId: [377],
    stage: "Basic",
    description: {
        en: "Cutting-edge technology was used to study the internals of this Pokémon’s rock body, but nothing was found—not even a brain or a heart.",
        fr: "Bien que son corps de pierre ait été examiné\navec les technologies les plus modernes, nulle\ntrace de cerveau ou de cœur n’a été trouvée.",
        es: "Su cuerpo rocoso ha sido examinado con las\ntécnicas científicas más avanzadas, pero no se\nhan encontrado ni su cerebro ni su corazón.",
        it: "Il suo corpo roccioso è stato analizzato usando\nle più moderne tecnologie, ma non si è trovata\ntraccia di organi come cervello o cuore.",
        de: "Selbst mit modernster Technologie konnten bei\nder Analyse seines Steinkörpers weder Herz noch\nGehirn gefunden werden.",
        "pt-br": "Tecnologia de ponta foi usada para estudar o interior do corpo rochoso deste Pokémon, mas nada foi encontrado – nem mesmo um cérebro ou um coração.",
        "zh-tw": "有人利用最新的科學技術\n調查了牠的岩石身體，但\n卻找不到牠的大腦或心臟。"
    },
    attacks: [
        {
            cost: ["Fighting", "Colorless", "Colorless"],
            name: {
                en: "Mad Hammer",
                fr: "Marteau en Folie",
                es: "Martillo Enloquecido",
                it: "Martello Pazzo",
                de: "Verrückter Hammer",
                "pt-br": "Martelo Insano",
                "zh-tw": "瘋狂之錘"
            },
            effect: {
                en: "This Pokémon also does 30 damage to itself.",
                fr: "Ce Pokémon s'inflige également 30 dégâts.",
                es: "Este Pokémon también se hace 30 daños a sí mismo.",
                it: "Questo Pokémon infligge anche 30 danni a se stesso.",
                de: "Dieses Pokémon fügt sich selbst außerdem 30 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 30 de dano a si mesmo.",
                "zh-tw": "這隻寶可夢也會對自身造成 30 點傷害。"
            },
            damage: 100
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
