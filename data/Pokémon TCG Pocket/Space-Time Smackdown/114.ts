import { Card } from "../../../interfaces";
import Set from "../Space-Time Smackdown";
const card: Card = {
    set: Set,
    name: {
        en: "Bastiodon",
        fr: "Bastiodon",
        es: "Bastiodon",
        it: "Bastiodon",
        de: "Bollterus",
        'pt-br': "Bastiodon",
        ko: "바리톱스",
        "zh-tw": "劍齒龍"
    },
    illustrator: "Kagemaru Himeno",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 160,
    types: ["Metal"],
    evolveFrom: {
        en: "Shieldon",
        "fr": "Bouclier",
        "es": "Escudo",
        "it": "Shieldon",
        "de": "Shieldon",
        "pt-br": "Escudo",
        "zh-tw": "希爾登"
    },
    description: {
        en: "The bones of its face are huge and hard, so they were mistaken for its spine until after this Pokémon was successfully restored.",
        fr: "Jusqu'à ce qu'on reconstitue ce Pokémon\navec succès, on prenait les grands os solides qui\ncouvrent son visage pour sa colonne vertébrale.",
        es: "Hasta que no se regeneró por completo a este\nPokémon, se pensaba que los grandes y recios\nhuesos de su rostro eran su columna vertebral.",
        it: "Prima che venisse rigenerato si riteneva\nerroneamente che le grandi e solide\nossa del muso facessero parte del dorso.",
        de: "Als man Fossilien noch nicht zurückverwandeln\nkonnte, war man der Ansicht, sein großer, harter\nGesichtsknochen sei sein Rücken.",
        'pt-br': "Os ossos de seu rosto são enormes e resistentes e,\npor isso, eram confundidos com sua espinha\naté este Pokémon ser restaurado.",
        ko: "얼굴의 뼈가 크고 딱딱해서\n복원에 성공할 때까지\n등뼈라고 잘못 알려져 있었다.",
        "zh-tw": "它的臉部骨骼巨大且堅硬，因此被誤認為是它的脊柱，直到這只神奇寶貝被成功修復後。"
    },
    stage: "Stage2",
    abilities: [{
            type: "Ability",
            name: {
                en: "Guarded Grill",
                fr: "Protection Frontale",
                es: "Protector Facial",
                it: "Muso Corazzato",
                de: "Kopfschutz",
                'pt-br': "Grade de Proteção",
                ko: "얼굴가드",
                "zh-tw": "守衛燒烤架"
            },
            effect: {
                en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, this Pokémon takes −100 damage from that attack.",
                fr: "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c'est face, ce Pokémon subit − 100 dégâts provenant de cette attaque.",
                es: "Si se inflige cualquier daño a este Pokémon por ataques, lanza 1 moneda. Si sale cara, dicho ataque hace -100 puntos de daño.",
                it: "Se questo Pokémon subisce danni da qualsiasi attacco, lancia una moneta. Se esce testa, questo Pokémon subisce -100 danni da quell'attacco.",
                de: "Wenn diesem Pokémon durch Attacken Schaden zugefügt wird, wirf 1 Münze. Bei Kopf werden diesem Pokémon durch diese Attacke − 100 Schadenspunkte zugefügt.",
                'pt-br': "Se qualquer dano for causado a este Pokémon por ataques, jogue uma moeda. Se sair cara, este Pokémon receberá −100 pontos de dano daquele ataque.",
                ko: "이 포켓몬이 기술의 데미지를 받을 때 자신은 동전을 1번 던진다. 앞면이 나오면 이 포켓몬이 받는 기술의 데미지를 -100한다.",
                "zh-tw": "如果這只神奇寶貝受到攻擊造成的傷害，則擲硬幣。如果正面，該寶可夢因這次攻擊受到 -100 點傷害。"
            }
        }],
    attacks: [{
            name: {
                en: "Headbang",
                fr: "Frappe de Tête",
                es: "Cabecear",
                it: "Scuotitesta",
                de: "Headbangen",
                'pt-br': "Baque de Cabeça",
                ko: "헤드뱅",
                "zh-tw": "頭撞"
            },
            damage: 80,
            cost: ["Metal", "Metal", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 4,
    boosters: ["palkia"]
};
export default card;
