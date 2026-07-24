import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/029",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/029"
    },
    name: {
        en: "Mega Medicham ex",
        fr: "Méga-Charmina-ex",
        es: "Mega-Medicham ex",
        it: "Mega Medicham-ex",
        de: "Mega-Meditalis-ex",
        "pt-br": "Mega Medicham ex",
        "zh-tw": "超級恰雷姆ex",
        ko: "메가요가램 ex",
        ja: "メガチャーレムex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "None",
    category: "Pokemon",
    hp: 180,
    types: ["Fighting"],
    dexId: [308],
    evolveFrom: {
        en: "Meditite",
        fr: "Méditikka",
        es: "Meditite",
        it: "Meditite",
        de: "Meditie",
        "pt-br": "Meditite",
        "zh-tw": "瑪沙那",
        ko: "요가랑",
        ja: "アサナン"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: ["Fighting", "Colorless", "Colorless"],
            name: {
                en: "Chakra Fist",
                fr: "Poing Chakra",
                es: "Puño Chakra",
                it: "Pugno Chakra",
                de: "Chakrafaust",
                "pt-br": "Punho de Chakra",
                "zh-tw": "脈輪拳"
            },
            effect: {
                en: "If this Pokémon has any {P} Energy attached, this attack does 40 more damage. This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
                fr: "Si ce Pokémon a une Énergie {P} attachée, cette attaque inflige 40 dégâts supplémentaires. Les dégâts de cette attaque ne sont affectés par aucun effet sur le Pokémon Actif de votre adversaire.",
                es: "Si este Pokémon tiene alguna Energía {P} unida, este ataque hace 40 daños más. El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
                it: "Se questo Pokémon ha delle Energie {P} assegnate, questo attacco infligge 40 danni in più. Il danno di questo attacco non è influenzato da alcun effetto sul Pokémon attivo del tuo avversario.",
                de: "Wenn an dieses Pokémon {P}-Energie angelegt ist, fügt dieser Angriff 40 weitere Schadenspunkte zu. Der Schaden dieses Angriffs wird nicht durch Effekte auf das Aktive Pokémon deines Gegners beeinflusst.",
                "pt-br": "Se este Pokémon tiver alguma Energia {P} anexada, este ataque causará 40 de dano a mais. O dano deste ataque não é afetado por nenhum efeito no Pokémon Ativo do seu oponente.",
                "zh-tw": "如果這隻寶可夢附加了任何{P}能量，則該攻擊造成的傷害增加 40 點。這次攻擊的傷害不受對手的活躍寶可夢的任何效果影響。"
            },
            damage: "100+"
        }
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol4"]
};

export default card;
