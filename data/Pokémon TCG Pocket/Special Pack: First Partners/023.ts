import { Card } from "../../../interfaces";
import Set from "../Special Pack: First Partners";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/SP1/023",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/SP1/023",
        es: "https://game.pokemontcgpocket.app/es/tcgp/SP1/023",
        it: "https://game.pokemontcgpocket.app/it/tcgp/SP1/023",
        de: "https://game.pokemontcgpocket.app/de/tcgp/SP1/023",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/SP1/023",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/SP1/023"
    },
    name: {
        en: "Scorbunny",
        fr: "Flambino",
        es: "Scorbunny",
        "pt-br": "Scorbunny",
        "zh-tw": "炎兔兒",
        ja: "ヒバニー",
        ko: "염버니",
        it: "Scorbunny",
        de: "Hopplo"
    },
    illustrator: "Saboteri",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: [
        "Fire"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Double Kick",
                fr: "Double Pied",
                es: "Doble Patada",
                it: "Doppio calcio",
                de: "Doppelkick",
                "pt-br": "Chute Duplo",
                "zh-tw": "二連踢",
                ja: "Double Kick",
                ko: "Double Kick"
            },
            cost: [
                "Colorless",
                "Fire"
            ],
            damage: "40x",
            effect: {
                en: "Flip 2 coins. This attack does 40 damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
                es: "Lanza 2 monedas. Este ataque hace 40 puntos de daño por cada cara.",
                it: "Lancia 2 volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
                de: "Wirf 2 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 40 pontos de dano para cada cara.",
                "zh-tw": "擲2次硬幣,造成正面出現的次數×40點傷害。",
                ja: "Flip 2 coins. This attack does 40 damage for each heads.",
                ko: "Flip 2 coins. This attack does 40 damage for each heads."
            }
        }
    ],
    abilities: [],
    description: {
        en: "A warm-up of running around gets fire energy coursing through this Pokémon’s body. Once that happens, it’s ready to fight at full power.",
        fr: "Il court pour augmenter sa température et faire circuler l’énergie incandescente dans son corps. Il peut alors déployer toute sa puissance.",
        es: "Se pone a correr para elevar su temperatura corporal y propagar la energía ígnea por todo el cuerpo. Desata así su verdadera fuerza.",
        it: "Quando corre, la sua temperatura corporea sale pervadendolo di un’energia infuocata che gli permette di scatenare la sua vera potenza.",
        de: "Erhöht es durch Rennen seine Körpertemperatur, strömt Feuer-Energie durch seinen Körper. Dann kann es seine wahre Kraft entfesseln.",
        "pt-br": "Quando este Pokémon está em movimento, uma energia flamejante atravessa o seu corpo, preparando-o para batalhar a todo vapor.",
        "zh-tw": "不斷奔跑使體溫升高後，火之能量會在牠體內循環，促使牠發揮出真正的力量。",
        ja: "A warm-up of running around gets fire energy coursing through this Pokémon’s body. Once that happens, it’s ready to fight at full power.",
        ko: "A warm-up of running around gets fire energy coursing through this Pokémon’s body. Once that happens, it’s ready to fight at full power."
    }
};

export default card;
