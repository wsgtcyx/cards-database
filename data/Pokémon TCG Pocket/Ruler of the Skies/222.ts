import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/222",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/222",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/222",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/222",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/222",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/222",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/222"
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
        en: "The color of the mysterious fluid secreted from its tail is predeter­ mined for each SMEARGLE.",
        "de": "Die Farbe des mysteriösen Sekrets, das aus ihrer Schweifspitze austritt, variiert je nach Farbeagle.",
        "pt-br": "A cor do fluido misterioso secretado da ponta da cauda é predeterminada para cada Smeargle"
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
                "zh-tw": "肖像畫"
            },
            effect: {
                en: "Once during your turn, if this Pokémon is in the Active Spot, you may look at a random Supporter card from your opponent's hand. Use the effect of that card as the effect of this Ability.",
                fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez regarder une des cartes Supporter de la main de votre adversaire au hasard. Utilisez l'effet de cette carte en tant qu'effet de ce talent.",
                es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes mirar una carta de Partidario aleatoria de la mano de tu rival. Usa el efecto de esa carta como efecto de esta habilidad.",
                it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi guardare una carta Aiuto casuale dalla mano del tuo avversario. Usa l'effetto di quella carta come effetto di questa abilità.",
                de: "Wenn sich dieses Pokémon einmal während deines Zuges an der aktiven Stelle befindet, kannst du dir eine zufällige Unterstützerkarte aus der Hand deines Gegners ansehen. Nutze den Effekt dieser Karte als Effekt dieser Fähigkeit.",
                "pt-br": "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá olhar uma carta de Apoiador aleatória da mão do seu oponente. Use o efeito daquela carta como o efeito desta Habilidade.",
                "zh-tw": "若這隻寶可夢在戰鬥場上,則在自己的回合時可使用1次。從對手的手牌隨機查看1張支援者卡的正面後,將該支援者卡的效果,作為這個特性的效果使用。"
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
