import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Galarian Corsola",
        "fr": "Corsola de Galar",
        "es": "Corsola de Galar",
        "it": "Corsola Galariano",
        "de": "Galar-Corsola",
        "pt-br": "Córsola de Galar",
        "zh-tw": "加拉安·科索拉"
    },
    illustrator: "Kouki Saitou",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    description: {
        en: "Watch your step when wandering areas oceans\nonce covered. What looks like a stone could be\nthis Pokémon, and it will curse you if you kick it.",
        "fr": "Surveillez vos pas lorsque vous vous promenez dans les océans\nune fois couvert. Ce qui ressemble à une pierre pourrait être\nce Pokémon, et il vous maudira si vous lui donnez un coup de pied.",
        "es": "Cuide sus pasos cuando deambule por áreas oceánicas.\nuna vez cubierto. Lo que parece una piedra podría ser\neste Pokémon, y te maldecirá si lo pateas.",
        "it": "Guarda i tuoi passi quando vaghi nelle aree degli oceani\nuna volta coperto. Ciò che sembra una pietra potrebbe esserlo\nquesto Pokémon e ti maledirà se lo prendi a calci.",
        "de": "Achten Sie auf Ihren Schritt, wenn Sie durch die Ozeane wandern\neinmal abgedeckt. Was wie ein Stein aussieht, könnte sein\nDieses Pokémon wird dich verfluchen, wenn du es trittst.",
        "pt-br": "Cuidado com o passo ao vagar pelas áreas dos oceanos\numa vez coberto. O que parece ser uma pedra poderia ser\neste Pokémon, e ele irá amaldiçoá-lo se você chutá-lo.",
        "zh-tw": "在海洋中漫步時請注意腳步\n一旦覆蓋。看起來像石頭的東西可能是\n這只神奇寶貝，如果你踢它，它會詛咒你。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Tackle",
                "fr": "Tacle",
                "es": "Abordar",
                "it": "Attrezzatura",
                "de": "Tackle",
                "pt-br": "Enfrentar",
                "zh-tw": "處理"
            },
            damage: 20,
            cost: ["Psychic"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
