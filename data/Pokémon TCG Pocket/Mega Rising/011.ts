import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Shroomish",
        "fr": "Champignon",
        "es": "hongo",
        "it": "Shroomish",
        "de": "Pilzartig",
        "pt-br": "Cogumelo",
        "zh-tw": "蘑蘑菇",
    },
    illustrator: "Naoyo Kimura",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    description: {
        en: "If it senses danger, it scatters spores from the top\nof its head to protect itself.",
        "fr": "S'il détecte un danger, il disperse les spores par le haut\nde sa tête pour se protéger.",
        "es": "Si siente peligro, esparce esporas desde la parte superior.\nde su cabeza para protegerse.",
        "it": "Se avverte il pericolo, sparge le spore dall'alto\ndella testa per proteggersi.",
        "de": "Wenn es Gefahr wittert, streut es Sporen von oben aus\nseines Kopfes, um sich zu schützen.",
        "pt-br": "Se sentir perigo, espalha esporos do topo\nde sua cabeça para se proteger.",
        "zh-tw": "如果它感覺到危險，就會從頂部散佈孢子\n的頭來保護自己。"
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
            cost: ["Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
