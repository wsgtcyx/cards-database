import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/201"
    },
    name: {
        en: "Mega Mawile ex",
        "fr": "Méga Mawile ex",
        "es": "Mega Mawile ex",
        "it": "Mega Mawile ex",
        "de": "Mega Mawile ex",
        "pt-br": "Mega Mawile ex",
        "zh-tw": "超級馬維爾前"
    },
    illustrator: "NC Empire",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 170,
    types: ["Metal"],
    description: {
        en: "Its two sets of jaws thrash about violently as if\nthey each had a will of their own. One gnash from\nthem can turn a boulder to dust.",
        "fr": "Ses deux paires de mâchoires se débattent violemment comme si\nils avaient chacun leur propre volonté. Un grincement de\nils peuvent transformer un rocher en poussière.",
        "es": "Sus dos pares de mandíbulas se agitan violentamente como si\ncada uno tenía voluntad propia. Un crujido de\npueden convertir una roca en polvo.",
        "it": "Le sue due serie di mascelle si dibattono violentemente come se\nognuno di loro aveva una volontà propria. Uno stridore da\npossono trasformare un masso in polvere.",
        "de": "Seine beiden Kieferpaare schlagen heftig um sich, als ob\njeder von ihnen hatte seinen eigenen Willen. Ein Knirschen von\nSie können einen Felsbrocken in Staub verwandeln.",
        "pt-br": "Seus dois conjuntos de mandíbulas se debatem violentamente como se\ncada um deles tinha vontade própria. Um ranger de\neles podem transformar uma pedra em pó.",
        "zh-tw": "它的兩副下顎猛烈地扭動著，彷彿\n他們每個人都有自己的意志。一咬牙從\n他們可以將巨石化為塵土。"
    },
    stage: "Basic",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Heat-Up Crunch",
                "fr": "Crunch de réchauffement",
                "es": "Crujiente de calentamiento",
                "it": "Crunch di riscaldamento",
                "de": "Aufheiz-Crunch",
                "pt-br": "Crunch de aquecimento",
                "zh-tw": "熱身緊縮"
            },
            damage: 60,
            cost: ["Metal", "Colorless"],
            effect: {
                en: "Until this Pokémon leaves the Active Spot, this Pokémon's Heat-Up Crunch attack does +30 damage. This effect stacks.",
                "fr": "Jusqu'à ce que ce Pokémon quitte le point actif, son attaque Heat-Up Crunch inflige +30 dégâts. Cet effet se cumule.",
                "es": "Hasta que este Pokémon abandone el Punto Activo, su ataque Heat-Up Crunch hace +30 de daño. Este efecto se acumula.",
                "it": "Finché questo Pokémon non lascia la posizione attiva, il suo attacco Heat-Up Crunch infligge +30 danni. Questo effetto è cumulabile.",
                "de": "Bis dieses Pokémon den aktiven Bereich verlässt, fügt die Attacke „Heat-Up Crunch“ dieses Pokémon +30 Schaden zu. Dieser Effekt ist stapelbar.",
                "pt-br": "Até que este Pokémon saia do Ponto Ativo, o ataque Heat-Up Crunch deste Pokémon causa +30 de dano. Este efeito acumula.",
                "zh-tw": "在該寶可夢離開活動點之前，該寶可夢的熱身擠壓攻擊造成+30點傷害。該效果可以疊加。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
