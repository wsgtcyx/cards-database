import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Rolycoly",
        "fr": "Rolycoly",
        "es": "rolicoly",
        "it": "Rolycoli",
        "de": "Rolycoly",
        "pt-br": "Rolycoly",
        "zh-tw": "小炭仔",
    },
    illustrator: "Misa Tsutsui",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    description: {
        en: "Chunks of the surface of this Pokémon's body\nthat have grown old and flaked off have long\nbeen used for fuel as an alternative to coal.",
        "fr": "Morceaux de la surface du corps de ce Pokémon\nqui ont vieilli et se sont écaillés depuis longtemps\nété utilisé comme combustible comme alternative au charbon.",
        "es": "Trozos de la superficie del cuerpo de este Pokémon\nque han envejecido y se han desprendido desde hace mucho tiempo\nSe ha utilizado como combustible como alternativa al carbón.",
        "it": "Pezzi della superficie del corpo di questo Pokémon\nche sono invecchiati e sfaldati hanno molto tempo\nstato utilizzato come combustibile alternativo al carbone.",
        "de": "Brocken der Körperoberfläche dieses Pokémon\ndie schon lange alt und abgeblättert sind\nals Brennstoff als Alternative zu Kohle verwendet.",
        "pt-br": "Pedaços da superfície do corpo deste Pokémon\nque envelheceram e descamaram há muito tempo\ntem sido usado como combustível como alternativa ao carvão.",
        "zh-tw": "這只神奇寶貝身體表面的大塊\n那些已經變老、剝落的東西早已\n被用作燃料作為煤炭的替代品。"
    },
    stage: "Basic",
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
            damage: 20,
            cost: ["Fighting"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
