import { Card } from "../../../interfaces";
import Set from "../Triumphant Light";
const card: Card = {
    set: Set,
    name: {
        en: "Bronzong",
        fr: "Archéodong",
        es: "Bronzong",
        it: "Bronzong",
        de: "Bronzong",
        'pt-br': "Bronzong",
        ko: "동탁군",
        "zh-tw": "布隆宗"
    },
    illustrator: "Naoki Saito",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Metal"],
    evolveFrom: {
        en: "Bronzor",
        "fr": "Bronzeur",
        "es": "Bronzor",
        "it": "Bronzo",
        "de": "Bronzer",
        "pt-br": "Bronzer",
        "zh-tw": "青銅器"
    },
    description: {
        en: "In ages past, this Pokémon was revered as a bringer of rain. It was found buried in the ground.",
        fr: "Il a longtemps été vénéré pour avoir apporté\nla pluie. On le trouve parfois enterré dans le sol.",
        es: "Antaño se adoraba a este Pokémon para\nque propiciara lluvias abundantes. A veces,\npuede encontrarse enterrado bajo tierra.",
        it: "È stato venerato per secoli come Pokémon che\nporta la pioggia. A volte lo si trova sepolto nel terreno.",
        de: "Vor Urzeiten wurden sie als Regenmacher verehrt.\nManchmal findet man eines von ihnen im Boden vergraben.",
        'pt-br': "Nas idades antigas, este Pokémon era reverenciado\ncomo aquele que fazia chover. Ele foi descoberto\nenterrado no chão.",
        ko: "비구름을 부르는 포켓몬으로\n아주 옛날부터 떠받들어졌다.\n가끔 땅에 묻혀 있다.",
        "zh-tw": "在過去的時代，這只神奇寶貝被尊為帶來雨水的使者。被發現埋在地下。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Psychic",
                fr: "Psyko",
                es: "Psíquico",
                it: "Psichico",
                de: "Psychokinese",
                'pt-br': "Psíquico",
                ko: "사이코키네시스",
                "zh-tw": "精神"
            },
            damage: "50+",
            cost: ["Colorless", "Colorless", "Colorless"],
            effect: {
                en: "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon.",
                fr: "Cette attaque inflige 20 dégâts de plus pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
                es: "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
                it: "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
                de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 20 Schadenspunkte mehr zu.",
                'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
                ko: "상대 배틀 포켓몬의 에너지의 개수 × 20데미지를 추가한다.",
                "zh-tw": "對手的活躍寶可夢身上每附加一個能量，此攻擊就會造成 20 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 3
};
export default card;
