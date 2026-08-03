import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/036",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/036",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/036",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/036",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/036",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/036",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/036"
    },
    name: {
        en: "Tatsugiri",
        fr: "Nigirigon",
        es: "Tatsugiri",
        it: "Tatsugiri",
        de: "Nigiragi",
        "pt-br": "Tatsugiri",
        "zh-tw": "米立龍",
        ko: "싸리용",
        ja: "シャリタツ"
    },
    illustrator: "Shibuzoh.",
    rarity: "None",
    category: "Pokemon",
    hp: 70,
    types: ["Water"],
    dexId: [978],
    stage: "Basic",
    description: {
        en: "Tatsugiri is an extremely cunning Pokémon. It feigns weakness to lure in prey, then orders its partner to attack.",
        fr: "Nigirigon est un Pokémon extrêmement rusé. Il feint la faiblesse pour attirer une proie, puis ordonne à son partenaire d'attaquer.",
        es: "Tatsugiri es un Pokémon extremadamente astuto. Finge debilidad para atraer a su presa y luego ordena a su compañero que ataque.",
        it: "Tatsugiri è un Pokémon estremamente astuto. Finge debolezza per attirare la preda, quindi ordina al suo partner di attaccare.",
        de: "Nigiragi ist ein äußerst listiges Pokémon. Es täuscht Schwäche vor, um Beute anzulocken, und befiehlt dann seinem Partner, anzugreifen.",
        "pt-br": "Tatsugiri é um Pokémon extremamente astuto. Ele finge fraqueza para atrair a presa e depois ordena que seu parceiro ataque.",
        "zh-tw": "米立龍 是一隻極度狡猾的寶可夢。它佯裝虛弱來引誘獵物，然後命令同伴攻擊。"
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Rally Back",
                fr: "Répercussions",
                es: "Apoyo Vengativo",
                it: "Radunata Rinforzi",
                de: "Aufholjagd",
                "pt-br": "Responder à Altura",
                "zh-tw": "捲土重來"
            },
            effect: {
                en: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 60 more damage.",
                fr: "Si l'un de vos Pokémon a été mis KO par les dégâts d'une attaque lors du dernier tour de votre adversaire, cette attaque inflige 60 dégâts supplémentaires.",
                es: "Si alguno de tus Pokémon quedó fuera de combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 60 puntos de daño más.",
                it: "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni di un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 60 danni in più.",
                de: "Wenn eines deiner Pokémon im letzten Zug deines Gegners durch Schaden durch einen Angriff kampfunfähig gemacht wurde, fügt dieser Angriff 60 weitere Schadenspunkte zu.",
                "pt-br": "Se algum dos seus Pokémon foi nocauteado pelo dano de um ataque durante o último turno do seu oponente, esse ataque causará 60 de dano a mais.",
                "zh-tw": "如果你的任何一隻寶可夢在對手的最後回合中因攻擊而被擊倒，則這次攻擊造成的傷害增加 60 點。"
            },
            damage: "20+"
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol5"]
};

export default card;
