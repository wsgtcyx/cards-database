import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Swirlix",
        "fr": "Tourbillon",
        "es": "remolino",
        "it": "Swirlix",
        "de": "Swirlix",
        "pt-br": "Redemoinho",
        "zh-tw": "綿綿泡芙",
    },
    illustrator: "Kurata So",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    description: {
        en: "The sweet smell of cotton candy perfumes\nSwirlix's fluffy fur. This Pokémon spits out\nsticky string to tangle up its enemies.",
        "fr": "La douce odeur des parfums de barbe à papa\nLa fourrure moelleuse de Swirlix. Ce Pokémon crache\nficelle collante pour emmêler ses ennemis.",
        "es": "El dulce olor de los perfumes de algodón de azúcar.\nEl pelaje esponjoso de Swirlix. Este Pokémon escupe\nhilo pegajoso para enredar a sus enemigos.",
        "it": "Il dolce odore dei profumi di zucchero filato\nLa soffice pelliccia di Swirlix. Questo Pokémon sputa\ncorda appiccicosa per aggrovigliare i suoi nemici.",
        "de": "Der süße Duft von Zuckerwatte-Parfums\nDas flauschige Fell von Swirlix. Dieses Pokémon spuckt aus\nklebrige Schnur, um seine Feinde zu verheddern.",
        "pt-br": "O doce cheiro dos perfumes de algodão doce\nO pelo fofo de Swirlix. Este Pokémon cospe\ncorda pegajosa para emaranhar seus inimigos.",
        "zh-tw": "棉花糖香水的甜甜氣味\n漩渦的毛茸茸的皮毛。這只神奇寶貝會吐出\n用來纏住敵人的粘繩。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Cotton Guard",
                "fr": "Garde en coton",
                "es": "Guardia de algodón",
                "it": "Guardia di cotone",
                "de": "Baumwollschutz",
                "pt-br": "Protetor de algodão",
                "zh-tw": "棉衛士"
            },
            damage: 10,
            cost: ["Psychic"],
            effect: {
                en: "During your opponent's next turn, this Pokémon takes −20 damage from attacks.",
                "fr": "Lors du prochain tour de votre adversaire, ce Pokémon subit -20 dégâts des attaques.",
                "es": "Durante el próximo turno de tu rival, este Pokémon recibe -20 de daño por ataques.",
                "it": "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -20 danni dagli attacchi.",
                "de": "Während des nächsten Zuges deines Gegners erleidet dieses Pokémon −20 Schadenspunkte durch Angriffe.",
                "pt-br": "Durante o próximo turno do seu oponente, este Pokémon sofrerá -20 de dano de ataques.",
                "zh-tw": "在對手的下一個回合中，這只神奇寶貝受到的攻擊傷害為-20。"
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1
};
export default card;
