import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/130",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/130",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/130",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/130",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/130",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/130"
    },
    name: {
        en: "Smeargle",
        "fr": "Diffuser",
        "es": "untar",
        "it": "Smeargle",
        "de": "Schmiere",
        "pt-br": "Espalhar",
        "zh-tw": "斯米爾格爾"
    },
    illustrator: "Sekio",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "The color of the mysterious fluid secreted from\nthe tip of the tail is predetermined for each\nSmeargle.",
        "fr": "La couleur du fluide mystérieux sécrété par\nle bout de la queue est prédéterminé pour chacun\nDiffusez.",
        "es": "El color del misterioso fluido secretado por\nla punta de la cola está predeterminada para cada\nUntar.",
        "it": "Il colore del misterioso fluido secreto da\nla punta della coda è predeterminata per ciascuno\nSmeargle.",
        "de": "Die Farbe der geheimnisvollen Flüssigkeit, aus der abgesondert wird\ndie Schwanzspitze ist jeweils vorbestimmt\nSchmiere.",
        "pt-br": "A cor do misterioso fluido secretado\na ponta da cauda é predeterminada para cada\nEspalhar.",
        "zh-tw": "分泌出的神秘液體的顏色\n每個尾部的尖端都是預先確定的\n塗抹。"
    },
    stage: "Basic",
    abilities: [{
            type: "Ability",
            name: {
                en: "Portrait",
                "fr": "Portrait",
                "es": "Retrato",
                "it": "Ritratto",
                "de": "Porträt",
                "pt-br": "Retrato",
                "zh-tw": "肖像"
            },
            effect: {
                en: "Once during your turn, if this Pokémon is in the Active Spot, you may look at a random Supporter card from your opponent's hand. Use the effect of that card as the effect of this Ability.",
                "fr": "Une fois pendant votre tour, si ce Pokémon est dans le Point Actif, vous pouvez regarder une carte Supporter aléatoire de la main de votre adversaire. Utilisez l'effet de cette carte comme l'effet de cette Capacité.",
                "es": "Una vez durante tu turno, si este Pokémon está en el Punto Activo, puedes mirar una carta de Partidario aleatoria de la mano de tu oponente. Usa el efecto de esa carta como efecto de esta Habilidad.",
                "it": "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi guardare una carta Aiuto casuale dalla mano del tuo avversario. Usa l'effetto di quella carta come effetto di questa abilità.",
                "de": "Wenn sich dieses Pokémon einmal während deines Zuges an der aktiven Stelle befindet, kannst du dir eine zufällige Unterstützerkarte aus der Hand deines Gegners ansehen. Nutze den Effekt dieser Karte als Effekt dieser Fähigkeit.",
                "pt-br": "Uma vez durante o seu turno, se este Pokémon estiver no Local Ativo, você poderá ver uma carta de Apoiador aleatória da mão do seu oponente. Use o efeito daquela carta como o efeito desta Habilidade.",
                "zh-tw": "在你的回合中，如果這只神奇寶貝位於活躍位置，你可以隨機查看對手手牌中的一張支持者卡。將那張卡的效果作為該能力的效果。"
            }
        }],
    attacks: [{
            name: {
                en: "Tail Whap",
                "fr": "Coup de queue",
                "es": "Golpe de cola",
                "it": "Colpo di coda",
                "de": "Tail Whap",
                "pt-br": "Golpe de cauda",
                "zh-tw": "尾擊"
            },
            damage: 30,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
