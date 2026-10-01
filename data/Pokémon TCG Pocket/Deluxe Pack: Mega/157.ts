import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/157",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/157",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/157",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/157",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/157",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/157",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/157"
    },
    name: {
        en: "Mega Mawile ex",
        fr: "Méga-Mysdibule-ex",
        es: "Mega-Mawile ex",
        it: "Mega Mawile-ex",
        de: "Mega-Flunkifer-ex",
        "pt-br": "Mega Mawile ex",
        "zh-tw": "超級大嘴娃ex",
        ja: "メガクチートex",
        ko: "메가입치트 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 170,
    types: [
        "Metal"
    ],
    stage: "Basic",
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Heat-Up Crunch",
                fr: "Mâchouille Crescendo",
                es: "Trituración In Crescendo",
                it: "Sgranocchio Sfrenato",
                de: "Aufheizknirscher",
                "pt-br": "Mastigada Quente",
                "zh-tw": "越咬越烈",
                ja: "Heat-Up Crunch",
                ko: "Heat-Up Crunch"
            },
            damage: 60,
            cost: [
                "Metal",
                "Colorless"
            ],
            effect: {
                en: "Until this Pokémon leaves the Active Spot, this Pokémon's Heat-Up Crunch attack does +30 damage. This effect stacks.",
                fr: "Tant que ce Pokémon est sur le Poste Actif, son attaque Mâchouille Crescendo inflige + 30 dégâts. Cet effet est cumulable.",
                es: "Hasta que este Pokémon deje el Puesto Activo, el ataque Trituración In Crescendo de este Pokémon hace +30 puntos de daño. Este efecto se acumula.",
                it: "Finché questo Pokémon è in posizione attiva, il suo attacco Sgranocchio Sfrenato infligge +30 danni. Questo effetto è cumulabile.",
                de: "Bis dieses Pokémon die Aktive Position verlässt, fügt seine Attacke Aufheizknirscher +30 Schadenspunkte zu. Dieser Effekt stapelt sich.",
                "pt-br": "Até este Pokémon sair do Campo Ativo, o ataque Mastigada Quente deste Pokémon causará +30 pontos de dano. Este efeito acumula.",
                "zh-tw": "在這隻寶可夢離開戰鬥場前,這隻寶可夢的「越咬越烈」的傷害+30點。這個效果會重複。",
                ja: "Until this Pokémon leaves the Active Spot, this Pokémon's Heat-Up Crunch attack does +30 damage. This effect stacks.",
                ko: "Until this Pokémon leaves the Active Spot, this Pokémon's Heat-Up Crunch attack does +30 damage. This effect stacks."
            }
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
