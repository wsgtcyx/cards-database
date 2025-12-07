import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    name: {
        en: "Blacephalon",
        es: "Blacephalon",
        "fr": "Blacéphale",
        "it": "Blacefalo",
        "de": "Blazephalon",
        "pt-br": "Blacéfalo",
        "zh-tw": "布萊塞法隆"
    },
    illustrator: "Hasuno",
    rarity: "None",
    category: "Pokemon",
    hp: 100,
    types: ["Fire"],
    description: {
        en: "It slithers toward people. Then, without warning, it triggers the\nexplosion of its own head. It's apparently one kind of Ultra Beast.",
        es: "Parece ser uno de los temibles Ultraentes. Se acerca a la gente\ncontoneándose y hace explotar su propia cabeza súbitamente",
        "fr": "Il glisse vers les gens. Puis, sans avertissement, il déclenche le\nexplosion de sa propre tête. C'est apparemment une sorte d'Ultra Beast.",
        "it": "Scivola verso le persone. Quindi, senza preavviso, si attiva il\nesplosione della propria testa. Apparentemente è un tipo di Ultracreatura.",
        "de": "Es schlängelt sich auf die Menschen zu. Dann löst es ohne Vorwarnung das aus\nExplosion seines eigenen Kopfes. Es handelt sich offenbar um eine Art Ultra Beast.",
        "pt-br": "Ele desliza em direção às pessoas. Então, sem aviso, ele aciona o\nexplosão de sua própria cabeça. Aparentemente é um tipo de Ultra Beast.",
        "zh-tw": "它向人們滑行。然後，在沒有警告的情況下，它會觸發\n自己的頭爆炸。看來是究極異獸的一種。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Beat Punk",
                es: "Beat Punk",
                "fr": "Battre le punk",
                "it": "Batti il ​​Punk",
                "de": "Schlage Punk",
                "pt-br": "Vença o punk",
                "zh-tw": "擊敗朋克"
            },
            damage: 130,
            cost: ["Fire", "Fire", "Colorless"],
            effect: {
                en: "This Pokémon also does 70 damage to itself.",
                es: "Este Pokémon también se hace 70 puntos de daño a si mismo",
                "fr": "Ce Pokémon s'inflige également 70 dégâts.",
                "it": "Questo Pokémon infligge anche 70 danni a se stesso.",
                "de": "Dieses Pokémon fügt sich selbst außerdem 70 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 70 de dano a si mesmo.",
                "zh-tw": "這只神奇寶貝也會對自身造成 70 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["vol9"]
};
export default card;
