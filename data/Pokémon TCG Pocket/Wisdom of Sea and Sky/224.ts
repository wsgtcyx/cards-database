import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Nidorina",
        "fr": "Nidorina",
        "es": "nidorina",
        "it": "Nidorina",
        "de": "Nidorina",
        "pt-br": "Nidorina",
        "zh-tw": "尼多娜",
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 80,
    types: ["Darkness"],
    evolveFrom: {
        en: "Nidoran♀",
        "fr": "Nidoran♀",
        "es": "Nidoran♀",
        "it": "Nidoran♀",
        "de": "Nidoran♀",
        "pt-br": "Nidoran♀",
        "zh-tw": "尼多蘭",
    },
    description: {
        en: "The horn on its head has atrophied. It's thought\nthat this happens so Nidorina's children won't get\npoked while their mother is feeding them.",
        "fr": "La corne sur sa tête s'est atrophiée. On pense\nque cela se produit pour que les enfants de Nidorina n'aient pas\npiqué pendant que leur mère les nourrit.",
        "es": "El cuerno de su cabeza se ha atrofiado. es pensamiento\nque esto pase para que los hijos de Nidorina no se enfermen\npinchados mientras su madre les da de comer.",
        "it": "Il corno sulla sua testa si è atrofizzato. È pensato\nche questo accade in modo che i figli di Nidorina non capiscano\npunzecchiati mentre la madre li dava da mangiare.",
        "de": "Das Horn auf seinem Kopf ist verkümmert. Es ist gedacht\ndass dies geschieht, damit Nidorinas Kinder es nicht bekommen\nstocherte, während ihre Mutter sie fütterte.",
        "pt-br": "O chifre em sua cabeça atrofiou. É pensado\nque isso aconteça para que os filhos de Nidorina não recebam\ncutucados enquanto a mãe os alimenta.",
        "zh-tw": "它頭上的角已經萎縮了。是以為\n發生這種情況是為了讓尼多麗娜的孩子們不會受到\n當他們的母親餵他們的時候被戳了。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Bite",
                "fr": "Mordre",
                "es": "Morder",
                "it": "Morso",
                "de": "Beißen",
                "pt-br": "Morder",
                "zh-tw": "咬"
            },
            damage: 30,
            cost: ["Darkness"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
