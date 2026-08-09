import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/090",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/090",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/090",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/090",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/090",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/090",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/090"
    },
    name: {
        en: "Minior",
        fr: "Météno",
        es: "Minior",
        it: "Minior",
        de: "Meteno",
        "pt-br": "Minior",
        "zh-tw": "小隕星",
        ko: "메테노",
        ja: "メテノ"
    },
    illustrator: "OKUBO",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    dexId: [774],
    stage: "Basic",
    description: {
        en: "It feeds on dust in the atmosphere. The color of its core is said to be determined by the composition of the dust it eats.",
        fr: "Il se nourrit de particules en suspension dans l'atmosphère. La composition de ces dernières influerait sur la couleur de son noyau.",
        es: "Su alimentación se basa en partículas que flotan en la atmósfera. Dicen que el color de su núcleo depende de la composición de estas.",
        it: "Pare che il colore del suo nucleo sia dovuto agli elementi contenuti nel pulviscolo atmosferico di cui si nutre.",
        "de": "Partikel in der Atmosphäre sind seine Nahrung. Man sagt, die Farbe seines Kerns hänge von den Inhaltsstoffen dieser Partikel ab.",
        "pt-br": "Consome as partículas de poeira que flutuam na atmosfera. Acredita-se que a cor do seu núcleo depende da composição da poeira que ingeriu.",
        "zh-tw": "以大氣中的塵埃為食物，\n據說核心的顏色會根據\n塵埃所含的成分而定。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Cosmic Tackle",
                fr: "Tacle Cosmique",
                es: "Placaje Cósmico",
                de: "Kosmischer Tackle",
                "pt-br": "Investida Cósmica",
                "zh-tw": "宇宙衝撞",
                "it": "Azione Cosmica"
            },
            effect: {
                en: "If your opponent's Active Pokémon has an Ability, this attack does 40 more damage.",
                fr: "Si le Pokémon Actif de votre adversaire a un talent, cette attaque inflige 40 dégâts supplémentaires.",
                es: "Si el Pokémon Activo de tu rival tiene una habilidad, este ataque hace 40 puntos de daño más.",
                it: "Se il Pokémon attivo del tuo avversario ha un'abilità, questo attacco infligge 40 danni in più.",
                de: "Wenn das Aktive Pokémon deines Gegners über eine Fähigkeit verfügt, fügt dieser Angriff 40 weitere Schadenspunkte zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente tiver uma Habilidade, este ataque causará 40 pontos de dano a mais.",
                "zh-tw": "若對手的戰鬥寶可夢擁有特性,則增加40點傷害。"
            },
            damage: "10+"
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
