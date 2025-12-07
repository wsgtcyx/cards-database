import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Golduck",
        "fr": "Golduck",
        "es": "Golduck",
        "it": "Golduck",
        "de": "Golduck",
        "pt-br": "Golduck",
        "zh-tw": "戈達克"
    },
    illustrator: "Scav",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 90,
    types: ["Water"],
    evolveFrom: {
        en: "Psyduck",
        "fr": "Psycanard",
        "es": "Psyduck",
        "it": "Psyduck",
        "de": "Psyduck",
        "pt-br": "Psicoduck",
        "zh-tw": "迷幻鴨"
    },
    description: {
        en: "When it swims at full speed using its long,\nwebbed limbs, its forehead somehow begins\nto glow.",
        "fr": "Lorsqu'il nage à toute vitesse en utilisant son long,\nmembres palmés, son front commence d'une manière ou d'une autre\nbriller.",
        "es": "Cuando nada a toda velocidad usando su largo,\nmiembros palmeados, su frente de alguna manera comienza\nbrillar.",
        "it": "Quando nuota a tutta velocità usando la sua lunga,\narti palmati, la sua fronte in qualche modo inizia\nbrillare.",
        "de": "Wenn es mit voller Geschwindigkeit schwimmt, nutzt es seine langen,\nGliedmaßen sind mit Schwimmhäuten bedeckt, seine Stirn beginnt irgendwie\nleuchten.",
        "pt-br": "Quando nada a toda velocidade usando seu comprimento,\nmembros palmados, sua testa de alguma forma começa\npara brilhar.",
        "zh-tw": "當它用它的長線全速游泳時，\n有蹼的四肢，它的前額以某種方式開始\n發光。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Aqua Edge",
                "fr": "Bord Aqua",
                "es": "Borde acuático",
                "it": "Bordo acquatico",
                "de": "Aqua Edge",
                "pt-br": "Borda Aqua",
                "zh-tw": "水色邊緣"
            },
            damage: 70,
            cost: ["Water", "Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
