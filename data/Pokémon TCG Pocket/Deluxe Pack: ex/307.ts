import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Cyclizar",
        "fr": "Cycliser",
        "es": "ciclar",
        "it": "Ciclizar",
        "de": "Cyclizar",
        "pt-br": "Ciclizar",
        "zh-tw": "摩托蜥",
    },
    illustrator: "HAGIYA Kaoru",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Colorless"],
    description: {
        en: "Apparently Cyclizar has been allowing people to\nride on its back since ancient times. Depictions of\nthis have been found in 10,000-year-old murals.",
        "fr": "Apparemment, Cyclizar a permis aux gens de\nmonter sur le dos depuis l'Antiquité. Des représentations de\ncela a été trouvé dans des peintures murales vieilles de 10 000 ans.",
        "es": "Aparentemente Cyclizar ha estado permitiendo que la gente\ncabalga sobre su lomo desde la antigüedad. Representaciones de\nEsto se ha encontrado en murales de 10.000 años de antigüedad.",
        "it": "Apparentemente Cyclizar ha permesso alle persone di farlo\ncavalca sul suo dorso fin dai tempi antichi. Raffigurazioni di\nquesto è stato trovato in murales di 10.000 anni.",
        "de": "Anscheinend hat Cyclizar es den Leuten erlaubt\nseit der Antike auf dem Rücken reiten. Darstellungen von\nDies wurde in 10.000 Jahre alten Wandgemälden gefunden.",
        "pt-br": "Aparentemente, o Cyclizar tem permitido que as pessoas\nandar de costas desde os tempos antigos. Representações de\nisso foi encontrado em murais de 10.000 anos.",
        "zh-tw": "顯然 Cyclizar 一直在允許人們\n自古就騎在它的背上。的描述\n這是在一萬年前的壁畫中發現的。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Overacceleration",
                "fr": "Suraccélération",
                "es": "Sobreaceleración",
                "it": "Accelerazione eccessiva",
                "de": "Überbeschleunigung",
                "pt-br": "Superaceleração",
                "zh-tw": "超加速"
            },
            damage: 20,
            cost: ["Colorless"],
            effect: {
                en: "During your next turn, this Pokémon's Overacceleration attack does +20 damage.",
                "fr": "Lors de votre prochain tour, l'attaque Suraccélération de ce Pokémon inflige +20 dégâts.",
                "es": "Durante tu próximo turno, el ataque Sobreaceleración de este Pokémon hace +20 de daño.",
                "it": "Durante il tuo prossimo turno, l'attacco Accelerazione eccessiva di questo Pokémon infligge +20 danni.",
                "de": "Während deines nächsten Zuges verursacht der Überbeschleunigungsangriff dieses Pokémon +20 Schaden.",
                "pt-br": "Durante o seu próximo turno, o ataque de Superaceleração deste Pokémon causará +20 de dano.",
                "zh-tw": "在你的下一個回合中，這只神奇寶貝的過度加速攻擊造成+20點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
