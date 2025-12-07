import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Zebstrika",
        "fr": "Zebstrika",
        "es": "Zebstrika",
        "it": "Zebstrika",
        "de": "Zebstrika",
        "pt-br": "Zebstrika",
        "zh-tw": "雷電斑馬",
    },
    illustrator: "Shin Nagasawa",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Lightning"],
    evolveFrom: {
        en: "Blitzle",
        "fr": "Blitz",
        "es": "bombardeo",
        "it": "Blitz",
        "de": "Blitzle",
        "pt-br": "Blitz",
        "zh-tw": "斑斑馬",
    },
    description: {
        en: "They have lightning-like movements.\nWhen Zebstrika run at full speed, the sound of\nthunder reverberates.",
        "fr": "Ils ont des mouvements semblables à ceux de l'éclair.\nQuand Zebstrika courait à toute vitesse, le bruit de\nle tonnerre retentit.",
        "es": "Tienen movimientos parecidos a los de un rayo.\nCuando Zebstrika corre a toda velocidad, el sonido de\nel trueno retumba.",
        "it": "Hanno movimenti simili a fulmini.\nQuando Zebstrika corre a tutta velocità, il suono di\nrimbomba il tuono.",
        "de": "Sie haben blitzartige Bewegungen.\nWenn Zebstrika mit voller Geschwindigkeit läuft, ist das Geräusch zu hören\nDonner hallt wider.",
        "pt-br": "Eles têm movimentos semelhantes a raios.\nQuando Zebstrika corre a toda velocidade, o som de\no trovão reverbera.",
        "zh-tw": "他們的動作如同閃電。\n當 Zebstrika 全速奔跑時，會發出\n雷聲迴響。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Electric Ball",
                "fr": "Boule électrique",
                "es": "Bola eléctrica",
                "it": "Palla elettrica",
                "de": "Elektrischer Ball",
                "pt-br": "Bola Elétrica",
                "zh-tw": "電動球"
            },
            damage: 90,
            cost: ["Lightning", "Lightning", "Lightning"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
