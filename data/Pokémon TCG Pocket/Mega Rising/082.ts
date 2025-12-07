import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Mareep",
        "fr": "Mareep",
        "es": "Mareep",
        "it": "Mareep",
        "de": "Mareep",
        "pt-br": "Mareep",
        "zh-tw": "馬里普"
    },
    illustrator: "saino misaki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Lightning"],
    description: {
        en: "Its fleece grows continually. In the summer,\nthe fleece is fully shed, but it grows back in\na week.",
        "fr": "Sa toison grandit continuellement. En été,\nla toison est entièrement perdue, mais elle repousse\nune semaine.",
        "es": "Su vellón crece continuamente. En el verano,\nel vellón se muda por completo, pero vuelve a crecer en\nuna semana.",
        "it": "Il suo vello cresce continuamente. In estate,\nil vello è completamente caduto, ma ricresce\nuna settimana.",
        "de": "Sein Fell wächst kontinuierlich. Im Sommer,\nDas Vlies ist vollständig abgeworfen, wächst aber wieder nach\neine Woche.",
        "pt-br": "Seu velo cresce continuamente. No verão,\no velo está totalmente solto, mas volta a crescer\numa semana.",
        "zh-tw": "它的羊毛不斷生長。在夏天，\n羊毛完全脫落，但又重新長出來\n一周。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Rear Kick",
                "fr": "Coup de pied arrière",
                "es": "Patada trasera",
                "it": "Calcio posteriore",
                "de": "Hinterer Tritt",
                "pt-br": "Chute traseiro",
                "zh-tw": "後踢"
            },
            damage: 10,
            cost: ["Lightning"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
