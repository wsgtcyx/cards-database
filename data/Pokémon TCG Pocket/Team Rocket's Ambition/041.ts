import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/041",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/041",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/041",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/041",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/041",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/041",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/041"
    },
    name: {
        en: "Team Rocket's Muk",
        fr: "Grotadmorv de la Team Rocket",
        es: "Muk del Team Rocket",
        it: "Muk del Team Rocket",
        de: "Team Rockets Sleimok",
        "pt-br": "Muk da Equipe Rocket",
        "zh-tw": "火箭隊的臭臭泥",
        ko: "로켓단의 질뻐기",
        ja: "ロケット団のベトベトン"
    },
    illustrator: "Hitoshi Ariga",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Darkness"],
    evolveFrom: {
        en: "Team Rocket's Grimer",
        fr: "Tadmorv de la Team Rocket",
        es: "Grimer del Team Rocket",
        it: "Grimer del Team Rocket",
        de: "Team Rockets Sleima",
        "pt-br": "Grimer da Equipe Rocket",
        "zh-tw": "火箭隊的阿羅拉 臭泥",
        ko: "로켓단의 알로라 질퍽이",
        ja: "ロケット団のベトベター"
    },
    stage: "Stage1",
    description: {
        en: "It's so stinky! Muk's body contains toxic elements, and any plant will wilt when it passes by.",
        fr: "Il dégage une odeur pestilentielle. Son corps est si toxique que là où il passe, la végétation trépasse.",
        es: "Es pestilente y los componentes tóxicos de su cuerpo hacen que, a su paso, cualquier planta se marchite.",
        it: "Ha un odore estremamente sgradevole e suo corpo è un concentrato di veleni. Non c'é pianta che rimanga in vita dopo il suo passaggio.",
        de: "Sein Gestank ist unerträglich Das stärke Gift. aus dem sein Körper besteht, macht jeder Pflanze in seinem Weg den Garaus.",
        "pt-br": "È fedorento demais corpo de Mukcontém elementos tóxicos Qualquer planta murchará quando ele pissar por perto.",
        "zh-tw": "奇臭無比！身體帶有劇毒，舉凡所經之處，任何草木都會枯萎。"
    },
    attacks: [
        {
            cost: ["Darkness", "Darkness", "Colorless"],
            name: {
                en: "Poison Absorption",
                fr: "Absorption de Poison",
                es: "Absorción Veneno",
                it: "Assorbiveleno",
                de: "Giftabsorption",
                "pt-br": "Absorção de Veneno",
                "zh-tw": "毒之舔舐"
            },
            effect: {
                en: "If your opponent's Active Pokémon is Poisoned, heal 60 damage from this Pokémon.",
                fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, soignez 60 dégâts de ce Pokémon.",
                es: "Si el Pokémon Activo de tu rival está Envenenado, cura 60 puntos de daño a este Pokémon.",
                it: "Se il Pokémon attivo del tuo avversario è avvelenato, cura questo Pokémon da 60 danni.",
                de: "Wenn das Aktive Pokémon deines Gegners vergiftet ist. heile 60 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Se o Pokémon Ativo do seu oponente estiver Envenenado, cure 60 pontos de dano deste Pokémon.",
                "zh-tw": "若對手的戰鬥寶可夢中毒,則將這隻寶可夢恢復60HP。"
            },
            damage: 80
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
