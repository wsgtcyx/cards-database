import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/067"
    },
    name: {
        en: "Hypno",
        fr: "Hypnomade",
        es: "Hypno",
        it: "Hypno",
        de: "Hypno",
        "pt-br": "Hypno",
        "zh-tw": "引夢貘人",
        ko: "슬리퍼",
        ja: "スリーパー"
    },
    illustrator: "Shinji Kanda",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Psychic"],
    dexId: [97],
    evolveFrom: {
        en: "Drowzee",
        fr: "Soporifik",
        es: "Drowzee",
        it: "Drowzee",
        de: "Traumato",
        "pt-br": "Drowzee",
        "zh-tw": "催眠貘",
        ko: "슬리프",
        ja: "スリープ"
    },
    stage: "Stage1",
    description: {
        en: "Always holding a pendulum that it swings at a steady rhythm, it causes drowsiness in anyone nearby.",
        fr: "Tenant toujours un pendule qui oscille à un rythme régulier, il provoque la somnolence chez toute personne à proximité.",
        es: "Siempre sosteniendo un péndulo que oscila a un ritmo constante, provoca somnolencia en cualquiera que esté cerca.",
        it: "Tenendo sempre in mano un pendolo che fa oscillare a ritmo costante, provoca sonnolenza in chiunque si trovi nelle vicinanze.",
        de: "Halten Sie immer ein Pendel in der Hand, damit es in einem gleichmäßigen Rhythmus schwingt, was bei jedem in der Nähe Schläfrigkeit hervorruft.",
        "pt-br": "Sempre segurando um pêndulo que balança em um ritmo constante, causa sonolência em quem estiver por perto.",
        "zh-tw": "總是拿著一個以穩定節奏擺動的鐘擺，它會導致附近的任何人昏昏欲睡。"
    },
    attacks: [
        {
            cost: ["Psychic", "Psychic", "Colorless"],
            name: {
                en: "Psychic",
                fr: "Psyko",
                es: "Psíquico",
                it: "Psichico",
                de: "Psychokinese",
                "pt-br": "Psíquico",
                "zh-tw": "精神強念"
            },
            effect: {
                en: "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon.",
                fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
                es: "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
                it: "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
                de: "Dieser Angriff fügt 20 weitere Schadenspunkte für jede Energie zu, die an das Aktive Pokémon deines Gegners angelegt ist.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
                "zh-tw": "對手的戰鬥寶可夢身上每附加一個能量，此攻擊就會造成 20 點額外傷害。"
            },
            damage: "60+"
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
