import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/002",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/002",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/002",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/002",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/002",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/002"
    },
    name: {
        en: "Ledian",
        "fr": "Coxyclaque",
        "es": "Ledian",
        "it": "Ledian",
        "de": "Ledian",
        "pt-br": "Ledian",
        "zh-tw": "安瓢蟲"
    },
    illustrator: "mashu",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    evolveFrom: {
        en: "Ledyba",
        "fr": "Lédyba",
        "es": "Ledyba",
        "it": "Ledyba",
        "de": "Ledyba",
        "pt-br": "Ledyba",
        "zh-tw": "萊迪巴"
    },
    description: {
        en: "It flies through the night sky, sprinkling sparkly\ndust. According to some, if that dust sticks to\nyou, good things will happen to you.",
        "fr": "Il vole dans le ciel nocturne, saupoudrant de paillettes\npoussière. Selon certains, si cette poussière adhère\ntoi, de bonnes choses vont t'arriver.",
        "es": "Vuela por el cielo nocturno, salpicando brillantes\npolvo. Según algunos, si ese polvo se pega\nA ti te sucederán cosas buenas.",
        "it": "Vola attraverso il cielo notturno, spruzzando scintillio\npolvere. Secondo alcuni se quella polvere si attacca\nti succederanno cose belle.",
        "de": "Es fliegt durch den Nachthimmel und funkelt\nStaub. Nach Ansicht einiger, wenn dieser Staub daran haften bleibt\nDir werden gute Dinge widerfahren.",
        "pt-br": "Ele voa pelo céu noturno, espalhando brilho\npoeira. Segundo alguns, se essa poeira grudar\nvocê, coisas boas acontecerão com você.",
        "zh-tw": "它飛過夜空，灑下閃閃發光\n灰塵。據一些人說，如果灰塵粘在\n你，好事將會發生在你身上。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Swift",
                "fr": "Rapide",
                "es": "Rápido",
                "it": "Veloce",
                "de": "Schnell",
                "pt-br": "Rápido",
                "zh-tw": "迅速"
            },
            damage: 40,
            cost: ["Colorless"],
            effect: {
                en: "This attack's damage isn't affected by Weakness or by any effects on your opponent's Active Pokémon.",
                "fr": "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ni par aucun effet sur le Pokémon Actif de votre adversaire.",
                "es": "El daño de este ataque no se ve afectado por la Debilidad ni por ningún efecto en el Pokémon Activo de tu rival.",
                "it": "Il danno di questo attacco non è influenzato dalla debolezza o da eventuali effetti sul Pokémon attivo del tuo avversario.",
                "de": "Der Schaden dieses Angriffs wird nicht durch Schwäche oder irgendwelche Effekte auf das Aktive Pokémon deines Gegners beeinflusst.",
                "pt-br": "O dano deste ataque não é afetado pela Fraqueza ou por quaisquer efeitos no Pokémon Ativo do seu oponente.",
                "zh-tw": "這次攻擊的傷害不受弱點或對手的活躍神奇寶貝的任何影響的影響。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
