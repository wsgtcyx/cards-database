import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/009",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/009",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/009",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/009",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/009",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/009"
    },
    name: {
        en: "Quilladin",
        "fr": "Quilladin",
        "es": "Quilladín",
        "it": "Quilladin",
        "de": "Quilladin",
        "pt-br": "Quilladin",
        "zh-tw": "奎拉丁"
    },
    illustrator: "5ban Graphics",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    evolveFrom: {
        en: "Chespin",
        "fr": "Chespin",
        "es": "Chespin",
        "it": "Chespin",
        "de": "Chespin",
        "pt-br": "Chespin",
        "zh-tw": "切斯平"
    },
    description: {
        en: "It can send a trailer flying with a tackle. It's numb\nto pain, so even violent collisions don't faze it.",
        "fr": "Il peut envoyer une remorque voler avec un tacle. C'est engourdi\nà la douleur, donc même les collisions violentes ne le dérangent pas.",
        "es": "Puede hacer volar un remolque con un aparejo. esta entumecido\nal dolor, de modo que ni siquiera las colisiones violentas lo perturban.",
        "it": "Può far volare un rimorchio con un paranco. È insensibile\nal dolore, quindi anche le collisioni violente non lo disturbano.",
        "de": "Es kann einen Anhänger mit einem Tackle in die Luft fliegen lassen. Es ist taub\nzu Schmerzen, so dass ihm selbst heftige Kollisionen nichts ausmachen.",
        "pt-br": "Ele pode fazer um trailer voar com um equipamento. Está entorpecido\nà dor, então mesmo colisões violentas não o perturbam.",
        "zh-tw": "它可以用滑車讓拖車飛起來。已經麻木了\n疼痛，所以即使劇烈的碰撞也不會驚擾它。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Needle Arm",
                "fr": "Bras d'aiguille",
                "es": "Brazo de aguja",
                "it": "Braccio dell'ago",
                "de": "Nadelarm",
                "pt-br": "Braço de agulha",
                "zh-tw": "針臂"
            },
            damage: 60,
            cost: ["Grass", "Grass", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 3
};
export default card;
