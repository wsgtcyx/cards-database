import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    name: {
        en: "Espathra",
        fr: "Cléopsytra",
        es: "Espathra",
        it: "Espathra",
        de: "Psiopatra",
        "pt-br": "Espathra",
        "zh-tw": "超能豔鴕",
        pt: "Espathra"
    },
    illustrator: "Sanosuke Sakuma",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
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
        pt: "Flittle"
    },
    description: {
        en: "It emits psychic power from the gaps between its multicolored frills and sprints at speeds greater than 120 mph.",
        "fr": "Il émet un pouvoir psychique à partir des espaces entre ses volants multicolores et sprinte à des vitesses supérieures à 200 km/h.",
        "es": "Emite poder psíquico a partir de los espacios entre sus volantes multicolores y corre a velocidades superiores a 120 mph.",
        "it": "Emette potere psichico dagli spazi tra i suoi fronzoli multicolori e scatta a velocità superiori a 120 mph.",
        "de": "Es strahlt psychische Kraft aus den Lücken zwischen seinen bunten Rüschen aus und sprintet mit Geschwindigkeiten von mehr als 120 Meilen pro Stunde.",
        "pt-br": "Ele emite poder psíquico pelas lacunas entre seus babados multicoloridos e corre a velocidades superiores a 190 km/h.",
        "zh-tw": "它從五彩褶邊之間的縫隙中散發出精神力量，並以超過 120 英里/小時的速度衝刺。"
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Psychic",
                fr: "Psyko",
                es: "Psíquico",
                it: "Psichico",
                de: "Psychokinese",
                'pt-br': "Psíquico",
                "zh-tw": "精神",
                ko: "사이코키네시스"
            },
            damage: "30+",
            cost: ["Psychic"],
            effect: {
                en: "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon.",
                fr: "Cette attaque inflige 20 dégâts de plus pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
                es: "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
                it: "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
                de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 20 Schadenspunkte mehr zu.",
                'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
                "zh-tw": "對手的戰鬥寶可夢身上每附加一個能量，此攻擊就會造成 20 點額外傷害。",
                ko: "상대 배틀 포켓몬의 에너지의 개수 × 20데미지를 추가한다."
            },
        },
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
