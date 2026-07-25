import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/224",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/224",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/224",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/224",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/224"
    },
    name: {
        en: "Tauros",
        "fr": "Tauros",
        "es": "Tauros",
        "it": "Tauros",
        "de": "Tauros",
        "pt-br": "Tauros",
        "zh-tw": "金牛座"
    },
    illustrator: "Nisota Niso",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 100,
    types: ["Colorless"],
    description: {
        en: "When Tauros begins whipping itself with its tails,\nit's a warning that the Pokémon is about to\ncharge with astounding speed.",
        "fr": "Quand Tauros commence à se fouetter avec sa queue,\nc'est un avertissement que le Pokémon est sur le point de le faire\nchargez à une vitesse étonnante.",
        "es": "Cuando Tauros comienza a azotarse con sus colas,\nes una advertencia de que el Pokémon está a punto de\ncarga con una velocidad asombrosa.",
        "it": "Quando Tauros comincia a frustarsi con la coda,\nè un avvertimento che il Pokémon sta per farlo\ncaricare con una velocità sorprendente.",
        "de": "Wenn Tauros anfängt, sich selbst mit seinen Schwänzen zu peitschen,\nEs ist eine Warnung, dass das Pokémon im Begriff ist, es zu tun\nmit erstaunlicher Geschwindigkeit aufladen.",
        "pt-br": "Quando Tauros começa a se chicotear com o rabo,\né um aviso de que o Pokémon está prestes a\ncarregue com uma velocidade surpreendente.",
        "zh-tw": "當金牛座開始用尾巴鞭打自己時，\n這是神奇寶貝即將發生的警告\n以驚人的速度衝鋒。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Fighting Tackle",
                "fr": "Charge Combative",
                "es": "Placaje Lucha",
                "it": "Azione da Combattente",
                "de": "Kampf-Tackle",
                "pt-br": "Investida de Luta",
                "zh-tw": "格鬥鏟球"
            },
            damage: 40,
            cost: ["Colorless", "Colorless", "Colorless"],
            effect: {
                en: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 80 more damage.",
                "fr": "Si le Pokémon Actif de votre adversaire est un ex Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
                "es": "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 80 puntos de daño más.",
                "it": "Se il Pokémon attivo del tuo avversario è un Pokémon ex, questo attacco infligge 80 danni in più.",
                "de": "Wenn das Aktive Pokémon deines Gegners ein Pokémon-Ex ist, fügt dieser Angriff 80 weitere Schadenspunkte zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este ataque causará 80 de dano a mais.",
                "zh-tw": "如果對手的現役神奇寶貝是前神奇寶貝，則此攻擊造成的傷害增加 80 點。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
