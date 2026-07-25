import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/034",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/034",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/034",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/034",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/034",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/034"
    },
    name: {
        en: "Smoliv",
        fr: "Olivini",
        es: "Smoliv",
        it: "Smoliv",
        de: "Olini",
        "pt-br": "Smoliv",
        "zh-tw": "迷你芙",
        ko: "미니브",
        ja: "ミニーブ"
    },
    illustrator: "Shibuzoh.",
    rarity: "None",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    dexId: [928],
    stage: "Basic",
    description: {
        en: "This Pokémon converts nutrients into oil, which it stores in the fruit on its head. It can easily go a whole week without eating or drinking.",
        fr: "Ce Pokémon convertit les nutriments en huile, qu'il stocke dans le fruit sur sa tête. Il peut facilement passer une semaine entière sans manger ni boire.",
        es: "Este Pokémon convierte los nutrientes en aceite, que almacena en la fruta que tiene en la cabeza. Puede pasar fácilmente una semana entera sin comer ni beber.",
        it: "Questo Pokémon converte le sostanze nutritive in olio, che immagazzina nel frutto sulla sua testa. Può facilmente passare un'intera settimana senza mangiare o bere.",
        de: "Dieses Pokémon wandelt Nährstoffe in Öl um, das es in der Frucht auf seinem Kopf speichert. Es kann problemlos eine ganze Woche ohne Essen und Trinken auskommen.",
        "pt-br": "Este Pokémon converte nutrientes em óleo, que armazena na fruta que tem na cabeça. Pode facilmente passar uma semana inteira sem comer ou beber.",
        "zh-tw": "這種寶可夢將營養物質轉化為油，並將其儲存在頭上的果實中。很容易就可以連續一週不吃不喝。"
    },
    attacks: [
        {
            cost: ["Grass"],
            name: {
                en: "Nutrients",
                fr: "Nutriments",
                es: "Nutrientes",
                it: "Nutrienti",
                de: "Nährstoffe",
                "pt-br": "Nutrientes",
                "zh-tw": "營養素"
            },
            effect: {
                en: "Heal 20 damage from 1 of your Pokémon.",
                fr: "Soignez 20 dégâts d'un de vos Pokémon.",
                es: "Cura 20 daños de 1 de tus Pokémon.",
                it: "Cura 20 danni da 1 dei tuoi Pokémon.",
                de: "Heile 20 Schadenspunkte bei 1 deiner Pokémon.",
                "pt-br": "Cure 20 de dano de 1 dos seus Pokémon.",
                "zh-tw": "治療你的 1 只寶可夢造成的 20 點傷害。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol5"]
};

export default card;
