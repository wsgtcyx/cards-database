import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Magearna",
        "fr": "Magearna",
        "es": "Magearna",
        "it": "Magearna",
        "de": "Magearna",
        "pt-br": "Magearna",
        "zh-tw": "瑪機雅娜",
    },
    illustrator: "kawayoo",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Metal"],
    description: {
        en: "It synchronizes its consciousness with others\nto understand their feelings. This faculty makes\nit useful for taking care of people.",
        "fr": "Il synchronise sa conscience avec les autres\npour comprendre leurs sentiments. Cette faculté fait\nc'est utile pour prendre soin des gens.",
        "es": "Sincroniza su conciencia con la de los demás.\npara comprender sus sentimientos. Esta facultad hace\nEs útil para cuidar a las personas.",
        "it": "Sincronizza la sua coscienza con gli altri\nper comprendere i loro sentimenti. Questa facoltà fa\nè utile per prendersi cura delle persone.",
        "de": "Es synchronisiert sein Bewusstsein mit anderen\nihre Gefühle zu verstehen. Diese Fakultät macht\nEs ist nützlich, um sich um Menschen zu kümmern.",
        "pt-br": "Ele sincroniza sua consciência com outras pessoas\npara entender seus sentimentos. Esta faculdade faz\né útil para cuidar das pessoas.",
        "zh-tw": "它將自己的意識與其他人同步\n了解他們的感受。這個師資力量使得\n它對於照顧人很有用。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Silver Cannon",
                "fr": "Canon d'argent",
                "es": "Cañón de plata",
                "it": "Cannone d'argento",
                "de": "Silberne Kanone",
                "pt-br": "Canhão Prateado",
                "zh-tw": "銀炮"
            },
            damage: 40,
            cost: ["Metal", "Metal"],
            effect: {
                en: "If your opponent's Active Pokémon has an Ability, this attack does 40 more damage.",
                "fr": "Si le Pokémon Actif de votre adversaire possède une Capacité, cette attaque inflige 40 dégâts supplémentaires.",
                "es": "Si el Pokémon Activo de tu rival tiene una habilidad, este ataque hace 40 puntos de daño más.",
                "it": "Se il Pokémon attivo del tuo avversario ha un'abilità, questo attacco infligge 40 danni in più.",
                "de": "Wenn das Aktive Pokémon deines Gegners über eine Fähigkeit verfügt, fügt dieser Angriff 40 weitere Schadenspunkte zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente tiver uma Habilidade, este ataque causará 40 de dano a mais.",
                "zh-tw": "如果對手的活躍寶可夢擁有能力，則這次攻擊造成的傷害增加 40 點。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
