import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Bewear",
        "fr": "Attention",
        "es": "cuidado",
        "it": "Attenzione",
        "de": "Vorsicht",
        "pt-br": "Cuidado",
        "zh-tw": "佩戴"
    },
    illustrator: "Shin Nagasawa",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Fighting"],
    evolveFrom: {
        en: "Stufful",
        "fr": "Bourré",
        "es": "Relleno",
        "it": "Stupendo",
        "de": "Stoffig",
        "pt-br": "Recheado",
        "zh-tw": "塞滿"
    },
    description: {
        en: "The moves it uses to take down its prey would\nmake a martial artist jealous. It tucks subdued\nprey under its arms to carry them to its nest.",
        "fr": "Les mouvements qu'il utilise pour abattre sa proie seraient\nrendre jaloux un artiste martial. Il rentre discrètement\nproie sous ses bras pour les transporter jusqu'à son nid.",
        "es": "Los movimientos que utiliza para derribar a su presa\nponer celoso a un artista marcial. Se esconde tenue\npresa bajo sus brazos para llevarlas a su nido.",
        "it": "Le mosse che usa per abbattere la preda lo sarebbero\nrendere geloso un artista marziale. Si nasconde sottomesso\nprede sotto le sue braccia per portarle al suo nido.",
        "de": "Die Bewegungen, mit denen es seine Beute zur Strecke bringt, würden es tun\neinen Kampfkünstler eifersüchtig machen. Es wirkt gedämpft\nBeute unter seinen Armen, um sie zu seinem Nest zu tragen.",
        "pt-br": "Os movimentos que ele usa para derrubar suas presas seriam\ndeixar um artista marcial com ciúmes. Ele fica subjugado\npresa debaixo dos braços para carregá-la até o ninho.",
        "zh-tw": "它用來擊倒獵物的動作\n讓武者嫉妒。它褶皺柔和\n將獵物夾在腋下，然後將它們帶回巢穴。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Heavy Impact",
                "fr": "Fort impact",
                "es": "Impacto pesado",
                "it": "Impatto pesante",
                "de": "Schwerer Aufprall",
                "pt-br": "Impacto Pesado",
                "zh-tw": "重擊"
            },
            damage: 90,
            cost: ["Fighting", "Fighting", "Fighting"]
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 3
};
export default card;
