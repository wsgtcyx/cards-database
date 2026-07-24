import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/022",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/022"
    },
    name: {
        en: "Espathra",
        fr: "Cléopsytra",
        es: "Espathra",
        it: "Espathra",
        de: "Psiopatra",
        "pt-br": "Espathra",
        "zh-tw": "超能豔鴕",
        ko: "클레스퍼트라",
        ja: "クエスパトラ"
    },
    illustrator: "Hitoshi Ariga",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Psychic"],
    dexId: [956],
    evolveFrom: {
        en: "Flittle",
        fr: "Flotillon",
        es: "Flittle",
        it: "Flittle",
        de: "Flattutu",
        "pt-br": "Flittle",
        "zh-tw": "飄飄雛",
        ko: "하느라기",
        ja: "ヒラヒナ"
    },
    stage: "Stage1",
    description: {
        en: "It emits psychic power from the gaps between its multicolored frills and sprints at speeds greater than 120 mph.",
        fr: "Il émet un pouvoir psychique à partir des espaces entre ses volants multicolores et sprinte à des vitesses supérieures à 200 km/h.",
        es: "Emite poder psíquico a partir de los espacios entre sus volantes multicolores y corre a velocidades superiores a 120 mph.",
        it: "Emette potere psichico dagli spazi tra i suoi fronzoli multicolori e scatta a velocità superiori a 120 mph.",
        de: "Es strahlt psychische Kraft aus den Lücken zwischen seinen bunten Rüschen aus und sprintet mit Geschwindigkeiten von mehr als 120 Meilen pro Stunde.",
        "pt-br": "Ele emite poder psíquico pelas lacunas entre seus babados multicoloridos e corre a velocidades superiores a 190 km/h.",
        "zh-tw": "它從五彩褶邊之間的縫隙中散發出精神力量，並以超過 120 英里/小時的速度衝刺。"
    },
    attacks: [
        {
            cost: ["Psychic", "Psychic"],
            name: {
                en: "Lumina Crash",
                fr: "Lumino-Impact",
                es: "Fotocolisión",
                it: "Fotocollisione",
                de: "Lumina-Absturz",
                "pt-br": "Lumina Crash",
                "zh-tw": "琉光冲激"
            },
            effect: {
                en: "During your next turn, the Defending Pokémon takes +50 damage from attacks.",
                fr: "Lors de votre prochain tour, le Pokémon Défenseur subit +50 dégâts des attaques.",
                es: "Durante tu próximo turno, el Pokémon Defensor recibe +50 de daño por ataques.",
                it: "Durante il tuo prossimo turno, il Pokémon difensore subisce +50 danni dagli attacchi.",
                de: "Während deines nächsten Zuges erleidet das verteidigende Pokémon +50 Schaden durch Angriffe.",
                "pt-br": "Durante o seu próximo turno, o Pokémon Defensor sofre +50 de dano de ataques.",
                "zh-tw": "在你的下一個回合中，防禦寶可夢受到攻擊的傷害+50。"
            },
            damage: 50
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
