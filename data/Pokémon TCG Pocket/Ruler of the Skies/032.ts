import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/032",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/032",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/032",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/032",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/032",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/032",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/032"
    },
    name: {
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
    illustrator: "Shigenori Negishi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Water"],
    dexId: [120],
    stage: "Basic",
    description: {
        en: "Fish Pokémon nibble at it, but Staryu isn’t bothered. Its body regenerates quickly, even if part of it is completely torn off.",
        fr: "Il ne se soucie guère des Pokémon poissons\nqui viennent le grignoter, car même si son corps\nest déchiqueté, il se régénère aussitôt.",
        es: "No le importa que le mordisqueen el cuerpo los\nPokémon pez, ya que las partes desgarradas se\nregeneran casi al instante.",
        it: "Viene mangiucchiato dai Pokémon acquatici,\nma non ci dà peso, perché le parti danneggiate\ndel suo corpo si rigenerano subito.",
        de: "Ihm macht es nichts aus, von Fisch-Pokémon\nangeknabbert zu werden, da sich sein Körper\nbei Verletzungen im Nu regeneriert.",
        "pt-br": "Staryu não se incomoda com as mordiscadas que recebe de Pokémon peixe. Seu corpo se regenera rapidamente, mesmo que parte dele seja arrancada.",
        "zh-tw": "會被魚寶可夢啄食，但是\n即使身體被咬斷也能很快就\n再生，所以一點都不在意。"
    },
    attacks: [
        {
            cost: ["Water"],
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
            damage: 20
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
