import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/195",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/195",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/195",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/195",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/195",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/195",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/195"
    },
    name: {
        en: "Rookidee",
        fr: "Minisange",
        es: "Rookidee",
        it: "Rookidee",
        de: "Meikro",
        "pt-br": "Rookidee",
        "zh-tw": "稚山雀",
        ja: "ココガラ",
        ko: "파라꼬"
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: [
        "Colorless"
    ],
    dexId: [
        821
    ],
    stage: "Basic",
    description: {
        en: "The females are fussier than the males. If another creature dirties a female Rookidee’s wings, it’ll peck the offender relentlessly in a burning rage.",
        fr: "Les femelles sont plus susceptibles que les mâles. Si l'on salit leurs ailes, elles se mettent dans une colère noire et donnent de furieux coups de bec.",
        es: "Las hembras son más susceptibles que los machos y acribillarán a picotazos en un arrebato de furia a todo aquel que les manche las alas.",
        it: "Le femmine sono molto più pignole dei maschi. Se qualcuno osa sporcare le loro ali perdono il controllo e beccano furiosamente il responsabile.",
        de: "Weibliche Meikro sind deutlich empfindlicher als männliche. Beschmutzt jemand ihre Flügel, picken sie ihn wutentbrannt mit dem Schnabel nieder.",
        "pt-br": "As fêmeas são mais agitadas que os machos. Se outra criatura sujar as asas de uma Rookidee fêmea, ela bicará o agressor implacavelmente com uma fúria brutal.",
        "zh-tw": "雌性比雄性還要神經質。一旦羽毛被弄髒了，就會滿腔怒火地用鳥嘴猛啄。",
        ja: "The females are fussier than the males. If another creature dirties a female Rookidee’s wings, it’ll peck the offender relentlessly in a burning rage.",
        ko: "The females are fussier than the males. If another creature dirties a female Rookidee’s wings, it’ll peck the offender relentlessly in a burning rage."
    },
    attacks: [
        {
            cost: [
                "Colorless"
            ],
            name: {
                en: "Pluck",
                fr: "Picore",
                es: "Picoteo",
                it: "Spennata",
                de: "Pflücker",
                "pt-br": "Colher",
                "zh-tw": "啄食",
                ja: "Pluck",
                ko: "Pluck"
            },
            effect: {
                en: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
                fr: "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
                es: "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
                it: "Prima di infliggere danni, scarta tutti gli Oggetti Pokémon dal Pokémon attivo del tuo avversario.",
                de: "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners ab.",
                "pt-br": "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente.",
                "zh-tw": "在造成傷害前,將對手的戰鬥寶可夢身上的「寶可夢道具」丟棄。",
                ja: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
                ko: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon."
            },
            damage: 10
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
