import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Azumarill",
        "fr": "Azumarill",
        "es": "azumaril",
        "it": "Azumarill",
        "de": "Azumarill",
        "pt-br": "Azumarill",
        "zh-tw": "阿祖馬里爾"
    },
    illustrator: "Naoyo Kimura",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Water"],
    evolveFrom: {
        en: "Marill",
        "fr": "Marill",
        "es": "Marill",
        "it": "Marill",
        "de": "Marill",
        "pt-br": "Marill",
        "zh-tw": "馬里爾"
    },
    description: {
        en: "Its long ears are superb sensors. It can distinguish\nthe movements of things in water and tell what\nthey are.",
        "fr": "Ses longues oreilles sont de superbes capteurs. Il peut distinguer\nles mouvements des choses dans l'eau et dire ce que\nils le sont.",
        "es": "Sus largas orejas son magníficos sensores. Puede distinguir\nlos movimientos de las cosas en el agua y decir qué\nlo son.",
        "it": "Le sue lunghe orecchie sono sensori eccellenti. Può distinguere\ni movimenti delle cose nell'acqua e dire cosa\nlo sono.",
        "de": "Seine langen Ohren sind hervorragende Sensoren. Es kann unterscheiden\ndie Bewegungen der Dinge im Wasser und erzählen was\nSie sind.",
        "pt-br": "Suas orelhas longas são sensores excelentes. Ele pode distinguir\nos movimentos das coisas na água e dizer o que\neles são.",
        "zh-tw": "它的長耳朵是極好的傳感器。它可以區分\n物體在水中的運動並講述什麼\n他們是。"
    },
    stage: "Stage1",
    abilities: [{
            type: "Ability",
            name: {
                en: "Thick Fat",
                "fr": "Graisse épaisse",
                "es": "grasa espesa",
                "it": "Grasso denso",
                "de": "Dickes Fett",
                "pt-br": "Gordura espessa",
                "zh-tw": "厚脂肪"
            },
            effect: {
                en: "This Pokémon takes −30 damage from attacks from {R} or {W} Pokémon.",
                "fr": "Ce Pokémon subit -30 dégâts des attaques des Pokémon {R} ou {W}.",
                "es": "Este Pokémon recibe −30 de daño por ataques de Pokémon {R} o {W}.",
                "it": "Questo Pokémon subisce -30 danni dagli attacchi dei Pokémon {R} o {W}.",
                "de": "Dieses Pokémon erleidet −30 Schaden durch Angriffe von {R}- oder {W}-Pokémon.",
                "pt-br": "Este Pokémon sofre -30 de dano de ataques de Pokémon {R} ou {W}.",
                "zh-tw": "該神奇寶貝因 {R} 或 {W} 神奇寶貝的攻擊而受到 -30 點傷害。"
            }
        }],
    attacks: [{
            name: {
                en: "Tail Smack",
                "fr": "Coup de queue",
                "es": "Golpe de cola",
                "it": "Colpo di coda",
                "de": "Schwanzschlag",
                "pt-br": "Batida de cauda",
                "zh-tw": "尾巴拍打"
            },
            damage: 60,
            cost: ["Water", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["ho-oh"]
};
export default card;
