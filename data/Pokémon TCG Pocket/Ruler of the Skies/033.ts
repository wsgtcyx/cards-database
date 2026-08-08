import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/033",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/033",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/033",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/033",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/033",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/033",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/033"
    },
    name: {
        en: "Starmie",
        fr: "Staross",
        es: "Starmie",
        it: "Starmie",
        de: "Starmie",
        "pt-br": "Starmie",
        "zh-tw": "寶石海星",
        ko: "아쿠스타",
        ja: "スターミー"
    },
    illustrator: "Akira Komayama",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Water"],
    dexId: [121],
    evolveFrom: {
        en: "Staryu",
        fr: "Stari",
        es: "Staryu",
        it: "Staryu",
        de: "Sterndu",
        "pt-br": "Staryu",
        "zh-tw": "海星星",
        ko: "별가사리",
        ja: "ヒトデマン"
    },
    stage: "Stage1",
    description: {
        en: "Starmie swims by spinning its body at high speed. As this Pokémon cruises through the ocean, it absorbs tiny plankton.",
        fr: "Il aspire du plancton quand il nage dans la mer\nen faisant tourner son corps à grande vitesse.",
        es: "Starmie absorbe plancton al tiempo que nada\npor el mar haciendo girar su cuerpo a gran\nvelocidad.",
        it: "Risucchia il plancton mentre nuota nel mare\nfacendo ruotare il suo corpo ad alta velocità.",
        de: "Starmie bewegt sich im Wasser fort, indem es\nseinen Körper mit hoher Geschwindigkeit rotieren\nlässt. Unterwegs absorbiert es winziges Plankton.",
        "zh-tw": "會高速旋轉著身體在\n海裡游泳，並且同時\n吸食微小的浮游生物。"
    },
    attacks: [
        {
            cost: ["Water", "Colorless"],
            name: {
                en: "Swift",
                fr: "Météores",
                es: "Meteoros",
                it: "Veloce",
                de: "Schnell",
                "pt-br": "Ataque Veloz",
                "zh-tw": "高速星星"
            },
            effect: {
                en: "This attack's damage isn't affected by Weakness or by any effects on your opponent's Active Pokémon.",
                fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou tout effet en action sur le Pokémon Actif de votre adversaire.",
                es: "El daño de este ataque no se ve afectado por Debilidad ni ningún efecto en el Pokémon Activo de tu rival.",
                it: "Il danno di questo attacco non è influenzato dalla debolezza o da eventuali effetti sul Pokémon attivo del tuo avversario.",
                de: "Der Schaden dieses Angriffs wird nicht durch Schwäche oder irgendwelche Effekte auf das Aktive Pokémon deines Gegners beeinflusst.",
                "pt-br": "O dano deste ataque não é afetado por Fraqueza ou por quaisquer efeitos no Pokémon Ativo do seu oponente.",
                "zh-tw": "這個招式的傷害不計算弱點與對手的戰鬥寶可夢身上的附加效果。"
            },
            damage: 60
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
