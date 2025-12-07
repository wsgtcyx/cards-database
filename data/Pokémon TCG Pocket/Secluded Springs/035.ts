import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Galarian Cursola",
        "fr": "Cursola de Galar",
        "es": "Cursola de Galar",
        "it": "Cursola Galariana",
        "de": "Galarischer Cursola",
        "pt-br": "Cursola Galariana",
        "zh-tw": "伽勒爾魔靈珊瑚",
    },
    illustrator: "Kagemaru Himeno",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Psychic"],
    evolveFrom: {
        en: "Galarian Corsola",
        "fr": "Corsola de Galar",
        "es": "Corsola de Galar",
        "it": "Corsola Galariano",
        "de": "Galar-Corsola",
        "pt-br": "Córsola de Galar",
        "zh-tw": "伽勒爾太陽珊瑚",
    },
    description: {
        en: "Its shell is overflowing with its heightened\notherworldly energy. The ectoplasm serves as\nprotection for this Pokémon's core spirit.",
        "fr": "Sa coquille déborde de son relief\nénergie d'un autre monde. L'ectoplasme sert de\nprotection de l'esprit principal de ce Pokémon.",
        "es": "Su caparazón rebosa con su realzado\nenergía de otro mundo. El ectoplasma sirve como\nprotección para el espíritu central de este Pokémon.",
        "it": "Il suo guscio è traboccante di intensificazione\nenergia ultraterrena. L'ectoplasma serve come\nprotezione per lo spirito centrale di questo Pokémon.",
        "de": "Seine Schale ist überfüllt mit seinen Erhöhungen\njenseitige Energie. Das Ektoplasma dient als\nSchutz für den Kerngeist dieses Pokémon.",
        "pt-br": "Sua concha está transbordando com seu elevado\nenergia sobrenatural. O ectoplasma serve como\nproteção para o espírito central deste Pokémon.",
        "zh-tw": "它的外殼充滿了它高高的\n超凡脫俗的能量。外質充當\n保護這只神奇寶貝的核心精神。"
    },
    stage: "Stage1",
    abilities: [{
            type: "Ability",
            name: {
                en: "Perish Body",
                "fr": "Corps périr",
                "es": "Cuerpo perecedero",
                "it": "Perire corpo",
                "de": "Körper zugrunde gehen",
                "pt-br": "Perecer Corpo",
                "zh-tw": "滅亡之軀"
            },
            effect: {
                en: "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, flip a coin. If heads, the Attacking Pokémon is Knocked Out.",
                "fr": "Si ce Pokémon est dans le Point Actif et est mis KO par les dégâts d'une attaque du Pokémon de votre adversaire, lancez une pièce. Si c'est face, le Pokémon attaquant est mis KO.",
                "es": "Si este Pokémon está en el Punto Activo y queda fuera de combate por el daño de un ataque del Pokémon de tu rival, lanza una moneda. Si sale cara, el Pokémon atacante queda fuera de combate.",
                "it": "Se questo Pokémon è in posizione attiva e viene messo KO dai danni di un attacco dei Pokémon del tuo avversario, lancia una moneta. Se esce testa, il Pokémon attaccante viene messo KO.",
                "de": "Wenn sich dieses Pokémon an der aktiven Stelle befindet und durch den Schaden eines Angriffs des Pokémon deines Gegners kampfunfähig gemacht wird, wirf eine Münze. Bei „Kopf“ wird das angreifende Pokémon kampfunfähig gemacht.",
                "pt-br": "Se este Pokémon estiver no Ponto Ativo e for Nocauteado pelo dano de um ataque do Pokémon do seu oponente, jogue uma moeda. Se der cara, o Pokémon atacante será nocauteado.",
                "zh-tw": "如果該神奇寶貝位於活動位置並因對手神奇寶貝的攻擊而被擊倒，則拋一枚硬幣。如果正面朝上，則攻擊的神奇寶貝將被擊倒。"
            }
        }],
    attacks: [{
            name: {
                en: "Spooky Shot",
                "fr": "Tir effrayant",
                "es": "Tiro espeluznante",
                "it": "Colpo spettrale",
                "de": "Gruseliger Schuss",
                "pt-br": "Tiro assustador",
                "zh-tw": "幽靈射擊"
            },
            damage: 60,
            cost: ["Psychic", "Psychic"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 2
};
export default card;
