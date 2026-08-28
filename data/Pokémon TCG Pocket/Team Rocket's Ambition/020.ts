import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/020",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/020",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/020",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/020",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/020",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/020",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/020"
    },
    name: {
        en: "Team Rocket's Electrode",
        fr: "Électrode de la Team Rocket",
        es: "Electrode del Team Rocket",
        it: "Electrode del Team Rocket",
        de: "Team Rockets Lektrobal",
        "pt-br": "Electrode da Equipe Rocket",
        "zh-tw": "火箭隊的頑皮雷彈",
        ko: "로켓단의 붐볼",
        ja: "ロケット団のマルマイン"
    },
    illustrator: "Krgc",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Lightning"],
    evolveFrom: {
        en: "Team Rocket's Voltorb",
        fr: "Voltorbe de la Team Rocket",
        es: "Voltorb del Team Rocket",
        it: "Voltorb del Team Rocket",
        de: "Team Rockets Voltobal",
        "pt-br": "Voltorb da Equipe Rocket",
        "zh-tw": "火箭隊的霹靂電球",
        ko: "로켓단의 찌리리공",
        ja: "ロケット団のビリリダマ"
    },
    stage: "Stage1",
    description: {
        en: "It explodes in response to even minor stimuli. It is feared, with the nickname of the Bomb Ball.",
        fr: "Il explose au moindre choc. Son surnom, « Bombe Ball », suffit à effrayer ses adversaires.",
        es: "Como explotan a la mínima, se les tiene mucho miedo. Reciben el mote de Bomba Ball.",
        it: "Può esplodere al minimo urto. Temuto da tutti, è conosciuto con il nomignolo di \"Bomba Ball\".",
        de: "Es explodiert schon bei kleinsten Reizen und ist unter dem Spitznamen „Bombenkugel“ gefürchtet.",
        "pt-br": "Ele explode em resposta aos menores estímulos. Ele é temido e seu apelido é \"Bola-Bomba\".",
        "zh-tw": "稍微受點刺激就會爆炸，因此得到了炸彈球的外號，被人們深深恐懼。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Destiny Burst",
                fr: "Explo-Destin",
                es: "Explosión Destino",
                it: "Destinappagato",
                de: "Schicksalssalve",
                "pt-br": "Rajada do Destino",
                "zh-tw": "同命轟炸"
            },
            effect: {
                en: "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, do 70 damage to the Attacking Pokémon.",
                fr: "Si ce Pokémon est sur le Poste Actif et qu'il est mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire, le Pokémon Attaquant subit 70 dégâts.",
                es: "Si este Pokémon está en el Puesto Activo y queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, el Pokémon Atacante sufre 70 puntos de daño.",
                it: "Se questo Pokémon è in posizione attiva e viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, il Pokémon attaccante subisce 70 danni.",
                de: "Wenn dieses Pokémon in der Aktiven Position ist und durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, füge dem Angreifenden Pokémon 70 Schadenspunkte zu.",
                "pt-br": "Se este Pokémon estiver no Campo Ativo e for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, cause 70 pontos de dano ao Pokémon Atacante.",
                "zh-tw": "這隻寶可夢在戰鬥場上受到對手的寶可夢招式的傷害而昏厥時,使用招式的寶可夢受到70點傷害。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Lightning"],
            name: {
                en: "Random Spark",
                fr: "Étincelle Surprise",
                es: "Chispa al Azar",
                it: "Scintilla Casuale",
                de: "Zufälliger Funke",
                "pt-br": "Fagulha Aleatória",
                "zh-tw": "電磁電光"
            },
            effect: {
                en: "This attack does 30 damage to 1 of your opponent's Pokémon.",
                fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire.",
                es: "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival.",
                it: "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario.",
                de: "Diese Attacke fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente.",
                "zh-tw": "對手的1隻寶可夢受到30點傷害。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
