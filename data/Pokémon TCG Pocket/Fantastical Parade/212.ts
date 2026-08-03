import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/212",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/212",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/212",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/212",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/212",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/212"
    },
    name: {
        en: "Omastar",
        "fr": "Amonistar",
        "es": "Omastar",
        "it": "Omastar",
        "de": "Amoroso",
        "pt-br": "Omastar",
        "zh-tw": "奧馬斯塔"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 140,
    types: ["Water"],
    evolveFrom: {
        en: "Omanyte",
        "fr": "Omanyte",
        "es": "Omanita",
        "it": "Omanyte",
        "de": "Omanyte",
        "pt-br": "Omanita",
        "zh-tw": "阿曼人"
    },
    description: {
        en: "Weighed down by a large and heavy shell,\nOmastar couldn't move very fast. Some say it\nwent extinct because it was unable to catch food.",
        "fr": "Alourdi par un gros et lourd obus,\nOmastar ne pouvait pas bouger très vite. Certains le disent\na disparu parce qu'il était incapable de capturer de la nourriture.",
        "es": "Agobiado por un caparazón grande y pesado,\nOmastar no podía moverse muy rápido. algunos lo dicen\nSe extinguió porque no pudo capturar comida.",
        "it": "Appesantito da un guscio grande e pesante,\nOmastar non poteva muoversi molto velocemente. Alcuni lo dicono\nsi estinse perché incapace di procurarsi il cibo.",
        "de": "Beschwert von einer großen und schweren Muschel,\nOmastar konnte sich nicht sehr schnell bewegen. Manche sagen es\nist ausgestorben, weil es nicht in der Lage war, Nahrung zu fangen.",
        "pt-br": "Sobrecarregado por uma concha grande e pesada,\nOmastar não conseguia se mover muito rápido. Alguns dizem isso\nfoi extinto porque não conseguia pegar comida.",
        "zh-tw": "被又大又重的外殼壓得喘不過氣來，\n奧馬斯塔無法快速移動。有人這麼說\n因為無法捕捉食物而滅絕。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Ancient Whirlpool",
                "fr": "Siphon Antique",
                "es": "Torbellino Ancestral",
                "it": "Gorgo Antico",
                "de": "Urzeitsog",
                "pt-br": "Redemoinho Ancestral",
                "zh-tw": "遠古漩渦"
            },
            damage: 70,
            cost: ["Water", "Colorless", "Colorless"],
            effect: {
                en: "During your opponent's next turn, the Defending Pokémon can't attack.",
                "fr": "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas attaquer.",
                "es": "Durante el próximo turno de tu rival, el Pokémon Defensor no puede atacar.",
                "it": "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare.",
                "de": "Während des nächsten Zuges deines Gegners kann das Verteidigende Pokémon nicht angreifen.",
                "pt-br": "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá atacar.",
                "zh-tw": "在對手的下一個回合中，守方寶可夢不能攻擊。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
