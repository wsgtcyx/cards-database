import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Jumpluff",
        "fr": "Sauter",
        "es": "saltador",
        "it": "Salto",
        "de": "Jumpluff",
        "pt-br": "Jumpluff",
        "zh-tw": "毽子綿",
    },
    illustrator: "Kagemaru Himeno",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Grass"],
    evolveFrom: {
        en: "Skiploom",
        "fr": "Skiplum",
        "es": "Skiploom",
        "it": "Skiploom",
        "de": "Skiploom",
        "pt-br": "Skiploom",
        "zh-tw": "斯基普盧姆"
    },
    description: {
        en: "Jumpluff travels on seasonal winds. Once its\ncotton spores run out, its journey ends, as does\nits life.",
        "fr": "Jumpluff voyage grâce aux vents saisonniers. Une fois que c'est\nles spores du coton s'épuisent, son voyage se termine, tout comme\nsa vie.",
        "es": "Jumpluff viaja con vientos estacionales. Una vez que su\nlas esporas del algodón se agotan, su viaje termina, al igual que\nsu vida.",
        "it": "Jumpluff viaggia grazie ai venti stagionali. Una volta che è\nse le spore del cotone si esauriscono, il suo viaggio termina, così come\nla sua vita.",
        "de": "Jumpluff reist mit saisonalen Winden. Sobald es\nWenn die Sporen der Baumwolle erschöpft sind, endet auch ihre Reise\nsein Leben.",
        "pt-br": "Jumpluff viaja com ventos sazonais. Uma vez que é\nos esporos do algodão acabam, sua jornada termina, assim como\nsua vida.",
        "zh-tw": "Jumpluff 依靠季風行駛。一旦它\n棉花孢子用完，它的旅程也結束了\n它的生命。"
    },
    stage: "Stage2",
    abilities: [{
            type: "Ability",
            name: {
                en: "Fluffy Flight",
                "fr": "Vol moelleux",
                "es": "Vuelo esponjoso",
                "it": "Volo soffice",
                "de": "Flauschiger Flug",
                "pt-br": "Voo fofo",
                "zh-tw": "蓬鬆的飛行"
            },
            effect: {
                en: "Your Active Pokémon has no Retreat Cost.",
                "fr": "Votre Pokémon Actif n'a pas de Coût de Retraite.",
                "es": "Tu Pokémon Activo no tiene Costo de Retirada.",
                "it": "Il tuo Pokémon attivo non ha alcun costo di ritirata.",
                "de": "Dein aktives Pokémon hat keine Rückzugskosten.",
                "pt-br": "Seu Pokémon Ativo não tem Custo de Recuo.",
                "zh-tw": "你的活躍神奇寶貝沒有撤退成本。"
            }
        }],
    attacks: [{
            name: {
                en: "Spinning Attack",
                "fr": "Attaque tournoyante",
                "es": "Ataque giratorio",
                "it": "Attacco rotante",
                "de": "Spinnangriff",
                "pt-br": "Ataque giratório",
                "zh-tw": "旋轉攻擊"
            },
            damage: 60,
            cost: ["Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
