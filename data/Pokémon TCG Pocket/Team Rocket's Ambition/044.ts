import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/044",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/044",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/044",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/044",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/044",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/044",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/044"
    },
    name: {
        en: "Team Rocket's Sneasel",
        fr: "Farfuret de la Team Rocket",
        es: "Sneasel del Team Rocket",
        it: "Sneasel del Team Rocket",
        de: "Team Rockets Sniebel",
        "pt-br": "Sneasel da Equipe Rocket",
        "zh-tw": "火箭隊的狃拉",
        ko: "로켓단의 포푸니",
        ja: "ロケット団のニューラ"
    },
    illustrator: "Kazumasa Yasukuni",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    stage: "Basic",
    description: {
        en: "This is a smart and sneaky Pokémon. A pair may work together to steal eggs by having one lure the parents away.",
        fr: "Ces Pokémon rusés agissent parfois à deux pour voler des Œufs : l'un d'eux fait diversion, pendant que l'autre commet le méfait.",
        es: "Es muy inteligente. Se empareja para robar huevos: uno distrae a los padres y el otro se los lleva.",
        it: "Sono Pokémon furbi e subdoli. A volte lavorano in squadra: mentre uno Sneasel attira i Pokémon lontano dal loro nido, l'altro ne ruba le Uova.",
        de: "Diese raffinierten Pokémon arbeiten-bisweilen zu zweit, um Nester auszurauben. Während eines die Eltern weglöckt, holt sich das andere die Eier.",
        "pt-br": "É um Pokémon inteligente e furtivo. Ao trabalharem em dupla para roubar ovos, um deles engana os pais para afastá-los do ninho.",
        "zh-tw": "會透過團隊合作，一隻負責引開雙親的注意，一隻負責偷走蛋，非常地狡猾奸詐。"
    },
    attacks: [
        {
            cost: ["Darkness", "Colorless"],
            name: {
                en: "Group Beatdown",
                fr: "Raclée Collective",
                es: "Paliza Grupal",
                it: "Rissa",
                de: "Gruppenprügler",
                "pt-br": "Abater em Grupo",
                "zh-tw": "圍剿"
            },
            effect: {
                en: "Flip a coin for each Pokémon you have in play. This attack does 30 damage for each heads.",
                fr: "Lancez une pièce pour chacun de vos Pokémon en jeu. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
                es: "Lanza 1 moneda por cada Pokémon que tengas en juego. Este ataque hace 30 puntos de daño por cada cara.",
                it: "Lancia una moneta per ogni Pokémon che hai in gioco. Questo attacco infligge 30 danni ogni volta che esce testa.",
                de: "Wirf 1 Münze für jedes Pokémon, das du im Spiel hast. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu.",
                "pt-br": "Jogue 1 moeda para cada Pokémon que você tem em jogo. Este ataque causa 30 pontos de dano para cada cara.",
                "zh-tw": "以自己的場上寶可夢的數量擲硬幣,造成正面出現的次數×30點傷害。"
            },
            damage: "30x"
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
