import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Ferrothorn",
        "fr": "Ferroépine",
        "es": "ferroespino",
        "it": "Ferrothorn",
        "de": "Ferrothorn",
        "pt-br": "Ferroespinho",
        "zh-tw": "鐵松"
    },
    illustrator: "Masakazu Fukuda",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Metal"],
    evolveFrom: {
        en: "Ferroseed",
        "fr": "Graine de fer",
        "es": "Ferrosa",
        "it": "Ferroseme",
        "de": "Ferroseed",
        "pt-br": "Ferrosemente",
        "zh-tw": "鐵玫瑰"
    },
    description: {
        en: "This Pokémon scrapes its spikes across rocks,\nand then uses the tips of its feelers to absorb\nthe nutrients it finds within the stone.",
        "fr": "Ce Pokémon gratte ses pointes sur les rochers,\npuis utilise les pointes de ses palpeurs pour absorber\nles nutriments qu'il trouve dans la pierre.",
        "es": "Este Pokémon raspa las rocas con sus púas.\ny luego usa las puntas de sus antenas para absorber\nlos nutrientes que encuentra dentro de la piedra.",
        "it": "Questo Pokémon graffia le rocce con i suoi aculei.\ne poi usa le punte delle sue antenne per assorbire\nle sostanze nutritive che trova all'interno della pietra.",
        "de": "Dieses Pokémon kratzt mit seinen Stacheln über Steine,\nund nutzt dann die Spitzen seiner Fühler zum Absorbieren\ndie Nährstoffe, die es im Stein findet.",
        "pt-br": "Este Pokémon raspa seus espinhos nas rochas,\ne então usa as pontas de suas antenas para absorver\nos nutrientes que encontra dentro da pedra.",
        "zh-tw": "這只神奇寶貝用尖刺刮過岩石，\n然後用觸角的尖端吸收\n它在石頭中發現的營養物質。"
    },
    stage: "Stage1",
    abilities: [{
            type: "Ability",
            name: {
                en: "Steel Spikes",
                "fr": "Pointes en acier",
                "es": "Picos de acero",
                "it": "Punte d'acciaio",
                "de": "Stahlspikes",
                "pt-br": "Picos de Aço",
                "zh-tw": "鋼釘"
            },
            effect: {
                en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon, do 20 damage to the Attacking Pokémon.",
                "fr": "Si ce Pokémon est dans le Point Actif et est endommagé par une attaque du Pokémon de votre adversaire, infligez 20 dégâts au Pokémon attaquant.",
                "es": "Si este Pokémon está en el Punto Activo y es dañado por un ataque del Pokémon de tu rival, haz 20 puntos de daño al Pokémon Atacante.",
                "it": "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco dei Pokémon del tuo avversario, infliggi 20 danni al Pokémon attaccante.",
                "de": "Wenn sich dieses Pokémon an der aktiven Stelle befindet und durch einen Angriff des Pokémon deines Gegners beschädigt wird, füge dem angreifenden Pokémon 20 Schadenspunkte zu.",
                "pt-br": "Se este Pokémon estiver no Ponto Ativo e for danificado por um ataque do Pokémon do seu oponente, cause 20 pontos de dano ao Pokémon Atacante.",
                "zh-tw": "如果這只寶可夢位於活動區域並因對方寶可夢的攻擊而受到傷害，則對攻擊的寶可夢造成 20 點傷害。"
            }
        }],
    attacks: [{
            name: {
                en: "Spinning Attack",
                "fr": "Attaque tournoyante",
                "es": "Ataque giratorio",
                "it": "Attacco rotante",
                "de": "Spinnangriff",
                "pt-br": "Ataque giratório",
                "zh-tw": "旋轉攻擊"
            },
            damage: 70,
            cost: ["Metal", "Metal", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 3
};
export default card;
