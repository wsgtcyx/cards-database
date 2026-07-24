import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/024",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/024"
    },
    name: {
        en: "Quaquaval",
        fr: "Palmaval",
        es: "Quaquaval",
        it: "Quaquaval",
        de: "Bailonda",
        "pt-br": "Quaquaval",
        "zh-tw": "狂歡浪舞鴨",
        pt: "Quaquaval"
    },
    illustrator: "Kouki Saitou",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Water"],
    dexId: [914],
    evolveFrom: {
        en: "Quaxwell",
        fr: "Canarbello",
        es: "Quaxwell",
        it: "Quaxwell",
        de: "Fuentente",
        "pt-br": "Quaxwell",
        "zh-tw": "湧躍鴨",
        pt: "Quaxwell"
    },
    description: {
        en: "Dancing in ways that evoke far-away places, this Pokémon mesmerizes all that see it. Flourishes of its decorative water feathers slice into its foes.",
        "fr": "Dansant d'une manière qui évoque des lieux lointains, ce Pokémon hypnotise tous ceux qui le voient. Les fioritures de ses plumes d'eau décoratives tranchent ses ennemis.",
        "es": "Este Pokémon baila de maneras que evocan lugares lejanos y fascina a todos los que lo ven. Los adornos de sus plumas de agua decorativas cortan a sus enemigos.",
        "it": "Ballando in modi che evocano luoghi lontani, questo Pokémon ipnotizza chiunque lo veda. Gli svolazzi delle sue piume acquatiche decorative trafiggono i nemici.",
        "de": "Dieses Pokémon tanzt auf eine Weise, die an weit entfernte Orte erinnert, und fasziniert alle, die es sehen. Die Schnörkel seiner dekorativen Wasserfedern zerschneiden seine Feinde.",
        "pt-br": "Dançando de maneiras que evocam lugares distantes, este Pokémon hipnotiza todos que o vêem. Os florescimentos de suas penas decorativas de água cortam seus inimigos.",
        "zh-tw": "這隻寶可夢的舞蹈讓人想起遙遠的地方，它讓所有看到它的人著迷。華麗的裝飾性水羽切入敵人。"
    },
    stage: "Stage2",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Torrent",
                "fr": "Torrent",
                "es": "Torrente",
                "it": "Torrente",
                "de": "Torrent",
                "pt-br": "Torrente",
                "zh-tw": "激流"
            },
            effect: {
                en: "If this Pokémon's remaining HP is 50 or less, attacks used by this Pokémon do +60 damage to your opponent's Active Pokémon.",
                "fr": "Si les PV restants de ce Pokémon sont de 50 ou moins, les attaques utilisées par ce Pokémon infligent +60 dégâts au Pokémon Actif de votre adversaire.",
                "es": "Si los HP restantes de este Pokémon son 50 o menos, los ataques utilizados por este Pokémon hacen +60 de daño al Pokémon Activo de tu rival.",
                "it": "Se i PS rimanenti di questo Pokémon sono 50 o meno, gli attacchi usati da questo Pokémon infliggono +60 danni al Pokémon attivo del tuo avversario.",
                "de": "Wenn die verbleibenden KP dieses Pokémon 50 oder weniger betragen, fügen Angriffe dieses Pokémon dem Aktiven Pokémon deines Gegners +60 Schaden zu.",
                "pt-br": "Se o HP restante deste Pokémon for 50 ou menos, os ataques usados ​​por este Pokémon causarão +60 de dano ao Pokémon Ativo do seu oponente.",
                "zh-tw": "這隻寶可夢的剩餘生命值在 50 以下時，這隻寶可夢的攻擊對對手的戰鬥寶可夢造成 +60 點傷害。"
            },
        },
    ],
    attacks: [
        {
            name: {
                en: "Hydro Kick",
                fr: "Pied Hydro",
                es: "Hidropatada",
                it: "Idrocalcio",
                de: "Hydrokick",
                "pt-br": "Chute Hidro",
                "zh-tw": "水力踢",
                pt: "Chute d'Água"
            },
            damage: 90,
            cost: ["Water", "Water", "Colorless"],
        },
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20",
        },
    ],
    retreat: 2,
};
export default card;
