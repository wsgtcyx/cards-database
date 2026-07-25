import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/173",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/173",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/173",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/173",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/173"
    },
    name: {
        en: "Alolan Muk",
        "fr": "Alolan Muk",
        "es": "Muk de Alola",
        "it": "Muk di Alola",
        "de": "Alolan Muk",
        "pt-br": "Alola Muk",
        "zh-tw": "阿羅蘭·穆克"
    },
    illustrator: "Mékayu",
    rarity: "One Star",
    category: "Pokemon",
    hp: 110,
    types: ["Darkness"],
    evolveFrom: {
        en: "Alolan Grimer",
        "fr": "Alolan Grimer",
        "es": "Grimer de Alola",
        "it": "Grimer di Alola",
        "de": "Alolan Grimer",
        "pt-br": "Alola Grimer",
        "zh-tw": "阿羅蘭·格里默"
    },
    description: {
        en: "What look like fangs and claws are actually\ncrystallized poison that will afflict you at a\nmere touch, so don't get too close.",
        "fr": "Ce qui ressemble à des crocs et des griffes est en réalité\npoison cristallisé qui vous affligera à un moment\nsimple contact, alors ne vous approchez pas trop.",
        "es": "Lo que parecen colmillos y garras son en realidad\nveneno cristalizado que te afligirá en un\nmero toque, así que no te acerques demasiado.",
        "it": "Quelli che sembrano zanne e artigli lo sono in realtà\nveleno cristallizzato che ti affliggerà a\nbasta toccarlo, quindi non avvicinarti troppo.",
        "de": "Was wie Reißzähne und Krallen aussieht, ist es tatsächlich\nkristallisiertes Gift, das dich gleichzeitig befallen wird\nbloße Berührung, also komm nicht zu nahe.",
        "pt-br": "O que parecem presas e garras são na verdade\nveneno cristalizado que irá afligir você em um\nmero toque, então não chegue muito perto.",
        "zh-tw": "看起來像尖牙和爪子的東西實際上是\n結晶的毒藥會讓你痛苦不堪\n只是觸摸，所以不要靠得太近。"
    },
    stage: "Stage1",
    abilities: [{
            type: "Ability",
            name: {
                en: "Power of Alchemy",
                "fr": "Pouvoir de l'alchimie",
                "es": "El poder de la alquimia",
                "it": "Potere dell'alchimia",
                "de": "Kraft der Alchemie",
                "pt-br": "Poder da Alquimia",
                "zh-tw": "煉金術的力量"
            },
            effect: {
                en: "Basic Pokémon in play (both yours and your opponent's) have no Abilities.",
                "fr": "Les Pokémon de base en jeu (les vôtres et ceux de votre adversaire) n'ont aucune capacité.",
                "es": "Los Pokémon básicos en juego (tanto los tuyos como los de tu oponente) no tienen habilidades.",
                "it": "I Pokémon Base in gioco (sia i tuoi che quelli del tuo avversario) non hanno abilità.",
                "de": "Einfache Pokémon im Spiel (sowohl deine als auch die deines Gegners) haben keine Fähigkeiten.",
                "pt-br": "Os Pokémon básicos em jogo (seus e do seu oponente) não possuem habilidades.",
                "zh-tw": "遊戲中的基本神奇寶貝（無論是你的還是你對手的）都沒有能力。"
            }
        }],
    attacks: [{
            name: {
                en: "Sludge Bomb",
                "fr": "Bombe à boue",
                "es": "Bomba de lodo",
                "it": "Bomba di fango",
                "de": "Schlammbombe",
                "pt-br": "Bomba de lama",
                "zh-tw": "污泥炸彈"
            },
            damage: 70,
            cost: ["Darkness", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 3
};
export default card;
