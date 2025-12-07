import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Murkrow",
        "fr": "Murkrow",
        "es": "Murkrow",
        "it": "Murkrow",
        "de": "Murkrow",
        "pt-br": "Murkrow",
        "zh-tw": "黑暗鴉",
    },
    illustrator: "KEIICHIRO ITO",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Darkness"],
    description: {
        en: "If spotted, it will lure an unwary person\ninto chasing it, then lose the pursuer on\nmountain trails.",
        "fr": "S'il est repéré, il attirera une personne imprudente\nen le poursuivant, puis perdez le poursuivant\nsentiers de montagne.",
        "es": "Si se detecta, atraerá a una persona desprevenida.\nperseguirlo y luego perder al perseguidor\nsenderos de montaña.",
        "it": "Se notato, attirerà una persona incauta\nnell'inseguirlo, quindi perdere l'inseguitore\nsentieri di montagna.",
        "de": "Wenn es entdeckt wird, lockt es eine unvorsichtige Person an\nin die Verfolgung hinein und verliere dann den Verfolger\nBergpfade.",
        "pt-br": "Se for detectado, atrairá uma pessoa incauta\nem persegui-lo, então perca o perseguidor\ntrilhas de montanha.",
        "zh-tw": "如果被發現，它會引誘粗心的人\n去追它，然後失去追趕者\n山間小道。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Glide",
                "fr": "Glisser",
                "es": "Planeo",
                "it": "Scivolare",
                "de": "Gleiten",
                "pt-br": "Deslizar",
                "zh-tw": "滑行"
            },
            damage: 20,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
