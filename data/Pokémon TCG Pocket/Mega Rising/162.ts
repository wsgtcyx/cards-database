import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Toxapex",
        "fr": "Prédastérie",
        "es": "toxapex",
        "it": "Toxapex",
        "de": "Toxapex",
        "pt-br": "Toxapex",
        "zh-tw": "超壞星",
    },
    illustrator: "Ligton",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Darkness"],
    evolveFrom: {
        en: "Mareanie",
        "fr": "Maréanie",
        "es": "Mareanie",
        "it": "Mareanie",
        "de": "Mareanie",
        "pt-br": "Mareanie",
        "zh-tw": "馬雷妮"
    },
    description: {
        en: "Toxapex gets into fierce battles with Bruxish over\nareas where warm ocean currents flow, but the\nodds are always against it.",
        "fr": "Toxapex se lance dans des batailles féroces avec Bruxish\nzones où circulent des courants océaniques chauds, mais le\nles chances sont toujours contre.",
        "es": "Toxapex se involucra en feroces batallas con Bruxish\náreas donde fluyen corrientes oceánicas cálidas, pero el\nlas probabilidades siempre están en contra.",
        "it": "Toxapex affronta feroci battaglie con Bruxish\naree dove scorrono le calde correnti oceaniche, ma il\nle probabilità sono sempre contro.",
        "de": "Toxapex liefert sich heftige Kämpfe mit Bruxish\nGebiete, in denen warme Meeresströmungen fließen, aber die\nDie Chancen stehen immer dagegen.",
        "pt-br": "Toxapex entra em batalhas ferozes com Bruxish por causa\náreas onde fluem correntes oceânicas quentes, mas o\nas probabilidades estão sempre contra ele.",
        "zh-tw": "Toxapex 與 Bruxish 展開激烈戰鬥\n溫暖洋流流動的地區，但\n情況總是不利的。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Venoshock",
                "fr": "Venochoc",
                "es": "Venoshock",
                "it": "Venoshock",
                "de": "Venoshock",
                "pt-br": "Venoshock",
                "zh-tw": "靜脈休克"
            },
            damage: 50,
            cost: ["Darkness", "Darkness"],
            effect: {
                en: "If your opponent's Active Pokémon is Poisoned, this attack does 70 more damage.",
                "fr": "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 70 dégâts supplémentaires.",
                "es": "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 70 puntos de daño más.",
                "it": "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 70 danni in più.",
                "de": "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt dieser Angriff 70 weitere Schadenspunkte zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 70 de dano a mais.",
                "zh-tw": "如果對手的活躍寶可夢中毒，則這次攻擊造成的傷害增加 70 點。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
