import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Rillaboom",
        "fr": "Rillaboom",
        "es": "rillaboom",
        "it": "Rillaboom",
        "de": "Rillaboom",
        "pt-br": "Rillaboom",
        "zh-tw": "轟擂金剛猩",
    },
    illustrator: "Shin Nagasawa",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Grass"],
    evolveFrom: {
        en: "Thwackey",
        "fr": "Thwackey",
        "es": "Thwackey",
        "it": "Thwackey",
        "de": "Thwackey",
        "pt-br": "Thwackey",
        "zh-tw": "啪咚猴",
    },
    description: {
        en: "The one with the best drumming techniques\nbecomes the boss of the troop. It has a gentle\ndisposition and values harmony among its group.",
        "fr": "Celui avec les meilleures techniques de batterie\ndevient le chef de la troupe. Il a une douceur\nDisposition et valeurs harmonie au sein de son groupe.",
        "es": "El que tiene mejores técnicas de percusión.\nse convierte en el jefe de la tropa. tiene un suave\ndisposición y valores de armonía entre su grupo.",
        "it": "Quello con le migliori tecniche di batteria\ndiventa il capo della truppa. Ha un carattere delicato\ndisposizione e valori armonia all'interno del suo gruppo.",
        "de": "Der mit den besten Trommeltechniken\nwird zum Chef der Truppe. Es hat eine sanfte\nGemüt und schätzt die Harmonie innerhalb seiner Gruppe.",
        "pt-br": "Aquele com as melhores técnicas de bateria\ntorna-se o chefe da tropa. Tem uma suavidade\ndisposição e valoriza a harmonia entre seu grupo.",
        "zh-tw": "擊鼓技術最好的人\n成為部隊的老大。它有一種溫柔\n性格和價值觀的群體之間的和諧。"
    },
    stage: "Stage2",
    abilities: [{
            type: "Ability",
            name: {
                en: "Captivating Rhythm",
                "fr": "Rythme captivant",
                "es": "Ritmo cautivador",
                "it": "Ritmo accattivante",
                "de": "Fesselnder Rhythmus",
                "pt-br": "Ritmo Cativante",
                "zh-tw": "迷人的節奏"
            },
            effect: {
                en: "Once during your turn, you may flip a coin. If heads, switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
                "fr": "Une fois pendant votre tour, vous pouvez lancer une pièce. Si c'est face, placez 1 des Pokémon du Banc de votre adversaire sur le point actif.",
                "es": "Una vez durante tu turno, puedes lanzar una moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival al Punto Activo.",
                "it": "Una sola volta durante il tuo turno, puoi lanciare una moneta. Se esce testa, metti in posizione attiva 1 dei Pokémon nella panchina del tuo avversario.",
                "de": "Einmal in deinem Zug darfst du eine Münze werfen. Bei „Kopf“ wechselst du 1 Pokémon auf der Bank deines Gegners in die aktive Position.",
                "pt-br": "Uma vez durante o seu turno, você pode jogar uma moeda. Se der cara, troque 1 dos Pokémon do Banco do seu oponente para o Ponto Ativo.",
                "zh-tw": "在你的回合中，你可以拋一次硬幣。如果正面，則將對手的 1 只後備神奇寶貝切換到活動位置。"
            }
        }],
    attacks: [{
            name: {
                en: "Drum Rush",
                "fr": "Ruée sur le tambour",
                "es": "Acometida del tambor",
                "it": "Russa di tamburi",
                "de": "Trommelrausch",
                "pt-br": "Corrida de Tambor",
                "zh-tw": "鼓樂衝刺"
            },
            damage: 120,
            cost: ["Grass", "Grass", "Grass", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 3
};
export default card;
