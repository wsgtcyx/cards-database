import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Nidoqueen",
        "fr": "Nidoqueen",
        "es": "nidoqueen",
        "it": "Nidoqueen",
        "de": "Nidoqueen",
        "pt-br": "Nidoqueen",
        "zh-tw": "尼多后",
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 140,
    types: ["Darkness"],
    evolveFrom: {
        en: "Nidorina",
        "fr": "Nidorina",
        "es": "nidorina",
        "it": "Nidorina",
        "de": "Nidorina",
        "pt-br": "Nidorina",
        "zh-tw": "尼多麗娜"
    },
    description: {
        en: "Nidoqueen is better at defense than offense.\nWith scales like armor, this Pokémon will shield\nits children from any kind of attack.",
        "fr": "Nidoqueen est meilleur en défense qu'en attaque.\nAvec des écailles comme une armure, ce Pokémon fera bouclier\nses enfants de toute sorte d’attaque.",
        "es": "Nidoqueen es mejor en defensa que en ataque.\nCon escamas como armadura, este Pokémon protegerá\nsus hijos de cualquier tipo de ataque.",
        "it": "Nidoqueen è più bravo in difesa che in attacco.\nCon scaglie come un'armatura, questo Pokémon proteggerà\ni suoi figli da ogni tipo di attacco.",
        "de": "Nidoqueen ist besser in der Verteidigung als im Angriff.\nMit schuppenähnlichen Rüstungen schützt dieses Pokémon\nseine Kinder vor Angriffen jeglicher Art.",
        "pt-br": "Nidoqueen é melhor na defesa do que no ataque.\nCom escamas como armadura, este Pokémon irá proteger\nseus filhos de qualquer tipo de ataque.",
        "zh-tw": "尼多女王更擅長防守而不是進攻。\n擁有像盔甲一樣的鱗片，這只神奇寶貝會盾牌\n它的孩子免受任何形式的攻擊。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Lovestrike",
                "fr": "Coup d'amour",
                "es": "Golpe de amor",
                "it": "Colpo d'amore",
                "de": "Liebesschlag",
                "pt-br": "Golpe de amor",
                "zh-tw": "愛情罷工"
            },
            damage: 80,
            cost: ["Darkness", "Darkness", "Colorless"],
            effect: {
                en: "This attack does 50 more damage for each of your Benched Nidoking.",
                "fr": "Cette attaque inflige 50 dégâts supplémentaires pour chacun de vos Nidoking de banc.",
                "es": "Este ataque hace 50 daños más por cada uno de tus Nidoking en banca.",
                "it": "Questo attacco infligge 50 danni in più per ciascuno dei tuoi Nidoking in panchina.",
                "de": "Dieser Angriff verursacht 50 weitere Schadenspunkte für jeden deiner Nidokings auf der Bank.",
                "pt-br": "Este ataque causa 50 de dano a mais para cada um dos seus Nidoking no Banco.",
                "zh-tw": "此攻擊對你的每個後備尼多王造成 50 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["lugia"]
};
export default card;
