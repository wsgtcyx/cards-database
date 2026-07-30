import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/222"
    },
    name: {
        en: "Smeargle",
        fr: "Queulorior",
        es: "Smeargle",
        it: "Smeargle",
        de: "Farbeagle",
        "pt-br": "Smeargle",
        "zh-tw": "圖圖犬",
        ko: "루브도",
        ja: "ドーブル"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    dexId: [235],
    stage: "Basic",
    description: {
        en: "The color of the mysterious fluid secreted from its tail is predeter­ mined for each SMEARGLE."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Portrait",
                fr: "Portrait",
                es: "Retrato",
                it: "Ritratto",
                de: "Porträt",
                "pt-br": "Retrato",
                "zh-tw": "肖像"
            },
            effect: {
                en: "Once during your turn, if this Pokémon is in the Active Spot, you may look at a random Supporter card from your opponent's hand. Use the effect of that card as the effect of this Ability.",
                fr: "Une fois pendant votre tour, si ce Pokémon est dans le Point Actif, vous pouvez regarder une carte Supporter aléatoire de la main de votre adversaire. Utilisez l'effet de cette carte comme l'effet de cette Capacité.",
                es: "Una vez durante tu turno, si este Pokémon está en el Punto Activo, puedes mirar una carta de Partidario aleatoria de la mano de tu oponente. Usa el efecto de esa carta como efecto de esta Habilidad.",
                it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi guardare una carta Aiuto casuale dalla mano del tuo avversario. Usa l'effetto di quella carta come effetto di questa abilità.",
                de: "Wenn sich dieses Pokémon einmal während deines Zuges an der aktiven Stelle befindet, kannst du dir eine zufällige Unterstützerkarte aus der Hand deines Gegners ansehen. Nutze den Effekt dieser Karte als Effekt dieser Fähigkeit.",
                "pt-br": "Uma vez durante o seu turno, se este Pokémon estiver no Local Ativo, você poderá ver uma carta de Apoiador aleatória da mão do seu oponente. Use o efeito daquela carta como o efeito desta Habilidade.",
                "zh-tw": "在你的回合中，如果這只寶可夢位於活躍位置，你可以隨機查看對手手牌中的一張支持者卡。將那張卡的效果作為該能力的效果。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Tail Whap",
                fr: "Queue Battoir",
                es: "Coletón",
                it: "Codabotta",
                de: "Schweifvertrimmer",
                "pt-br": "Surra de Cauda",
                "zh-tw": "擺尾拍擊"
            },
            damage: 30
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
