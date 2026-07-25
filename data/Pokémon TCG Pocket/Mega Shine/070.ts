import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/070",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/070",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/070",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/070",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/070",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/070"
    },
    name: {
        en: "Lapras",
        fr: "Lokhlass",
        es: "Lapras",
        it: "Lapras",
        de: "Lapras",
        "pt-br": "Lapras",
        "zh-tw": "拉普拉斯",
        ko: "라프라스",
        ja: "ラプラス"
    },
    illustrator: "zig",
    rarity: "One Star",
    category: "Pokemon",
    hp: 100,
    types: ["Water"],
    dexId: [131],
    stage: "Basic",
    description: {
        en: "Able to understand human speech and very intelligent, it loves to swim in the sea with people on its back.",
        fr: "Capable de comprendre la parole humaine et très intelligent, il adore nager dans la mer avec des gens sur le dos.",
        es: "Capaz de comprender el habla humana y muy inteligente, le encanta nadar en el mar con gente a su espalda.",
        it: "Capace di comprendere il linguaggio umano e molto intelligente, ama nuotare nel mare con le persone sul dorso.",
        de: "Er kann die menschliche Sprache verstehen und ist sehr intelligent. Er liebt es, mit Menschen auf seinem Rücken im Meer zu schwimmen.",
        "pt-br": "Capaz de entender a fala humana e muito inteligente, adora nadar no mar com gente nas costas.",
        "zh-tw": "它能聽懂人類的語言，非常聰明，喜歡背著人在海裡游泳。"
    },
    attacks: [
        {
            cost: ["Water", "Water", "Colorless"],
            name: {
                en: "Raging Freeze",
                fr: "Gel Acharné",
                es: "Congelación Embravecida",
                it: "Furiagelo",
                de: "Wutstarre",
                "pt-br": "Congelamento Estarrecedor",
                "zh-tw": "激狂冰凍"
            },
            effect: {
                en: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, your opponent's Active Pokémon is now Paralyzed.",
                fr: "Si l'un de vos Pokémon a été mis KO par les dégâts d'une attaque lors du dernier tour de votre adversaire, le Pokémon actif de votre adversaire est désormais paralysé.",
                es: "Si alguno de tus Pokémon quedó fuera de combate por el daño de un ataque durante el último turno de tu rival, el Pokémon Activo de tu rival ahora está Paralizado.",
                it: "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni di un attacco durante l'ultimo turno del tuo avversario, il Pokémon attivo del tuo avversario è paralizzato.",
                de: "Wenn eines deiner Pokémon im letzten Zug deines Gegners durch den Schaden eines Angriffs kampfunfähig gemacht wurde, ist das aktive Pokémon deines Gegners jetzt gelähmt.",
                "pt-br": "Se algum dos seus Pokémon foi Nocauteado por dano de um ataque durante o último turno do seu oponente, o Pokémon Ativo do seu oponente ficará Paralisado.",
                "zh-tw": "如果你的任何寶可夢在對手的最後回合中因攻擊傷害而被擊倒，則對手的活躍寶可夢現在陷入麻痺狀態。"
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
    retreat: 2
};

export default card;
