import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Eiscue",
        "fr": "Eiscue",
        "es": "Eiscue",
        "it": "Eiscue",
        "de": "Eiswürfel",
        "pt-br": "Eiscué",
        "zh-tw": "冰砌鵝",
    },
    illustrator: "Kagemaru Himeno",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Water"],
    description: {
        en: "If you lick the ice covering its face, you'll find it\nhas a faintly salty taste. This species rode here on\nocean currents from a cold, faraway land.",
        "fr": "Si tu lèches la glace qui recouvre son visage, tu le trouveras\na un goût légèrement salé. Cette espèce chevauchait ici\ncourants océaniques venus d’une terre froide et lointaine.",
        "es": "Si lames el hielo que cubre su cara, lo encontrarás.\ntiene un sabor ligeramente salado. Esta especie cabalgó aquí\nCorrientes oceánicas de una tierra fría y lejana.",
        "it": "Se lecchi il ghiaccio che gli ricopre la faccia, lo troverai\nha un sapore leggermente salato. Questa specie cavalcava qui\ncorrenti oceaniche provenienti da una terra fredda e lontana.",
        "de": "Wenn Sie das Eis lecken, das sein Gesicht bedeckt, werden Sie es finden\nhat einen leicht salzigen Geschmack. Diese Art ritt hier weiter\nMeeresströmungen aus einem kalten, fernen Land.",
        "pt-br": "Se você lamber o gelo que cobre seu rosto, você o encontrará\ntem um sabor levemente salgado. Esta espécie andou aqui em\ncorrentes oceânicas de uma terra fria e distante.",
        "zh-tw": "如果你舔它臉上的冰，你就會發現它\n有淡淡的鹹味。這個物種騎在這裡\n來自寒冷、遙遠的陸地的洋流。"
    },
    stage: "Basic",
    abilities: [{
            type: "Ability",
            name: {
                en: "Ice Face",
                "fr": "Visage de glace",
                "es": "cara de hielo",
                "it": "Faccia di ghiaccio",
                "de": "Eisgesicht",
                "pt-br": "Cara de Gelo",
                "zh-tw": "冰面"
            },
            effect: {
                en: "If this Pokémon has full HP, it takes −40 damage from attacks from your opponent's Pokémon.",
                "fr": "Si ce Pokémon a tous ses PV, il subit -40 dégâts des attaques du Pokémon de votre adversaire.",
                "es": "Si este Pokémon tiene todos los HP, recibe −40 de daño de los ataques del Pokémon de tu rival.",
                "it": "Se questo Pokémon ha tutti i PS, subisce -40 danni dagli attacchi dei Pokémon del tuo avversario.",
                "de": "Wenn dieses Pokémon volle KP hat, erleidet es −40 Schaden durch Angriffe der Pokémon deines Gegners.",
                "pt-br": "Se este Pokémon estiver com HP cheio, ele sofrerá -40 de dano dos ataques dos Pokémon do seu oponente.",
                "zh-tw": "如果這只神奇寶貝的 HP 為滿，則對手的神奇寶貝的攻擊會對其造成 -40 點傷害。"
            }
        }],
    attacks: [{
            name: {
                en: "Ram",
                "fr": "Bélier",
                "es": "RAM",
                "it": "Ram",
                "de": "RAM",
                "pt-br": "Bater",
                "zh-tw": "內存"
            },
            damage: 50,
            cost: ["Water", "Water"]
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1
};
export default card;
