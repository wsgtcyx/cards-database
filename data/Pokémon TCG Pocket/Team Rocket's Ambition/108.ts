import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/108",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/108",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/108",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/108",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/108",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/108",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/108"
    },
    name: {
        en: "Mega Mawile ex",
        fr: "Méga-Mysdibule-ex",
        es: "Mega-Mawile ex",
        it: "Mega Mawile-ex",
        de: "Mega-Flunkifer-ex",
        "pt-br": "Mega Mawile ex",
        "zh-tw": "超級大嘴娃ex",
        ko: "메가입치트 ex",
        ja: "メガクチートex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 170,
    types: ["Metal"],
    dexId: [303],
    stage: "Basic",
    attacks: [
        {
            cost: ["Metal", "Colorless"],
            name: {
                en: "Heat-Up Crunch",
                fr: "Mâchouille Crescendo",
                es: "Trituración In Crescendo",
                it: "Sgranocchio Sfrenato",
                de: "Aufheizknirscher",
                "pt-br": "Mastigada Quente",
                "zh-tw": "越咬越烈"
            },
            effect: {
                en: "Until this Pokémon leaves the Active Spot, this Pokémon's Heat-Up Crunch attack does +30 damage. This effect stacks.",
                fr: "Tant que ce Pokémon est sur le Poste Actif, son attaque Mâchouille Crescendo inflige + 30 dégâts. Cet effet est cumulable.",
                es: "Hasta que este Pokémon deje el Puesto Activo, el ataque Trituración In Crescendo de este Pokémon hace +30 puntos de daño. Este efecto se acumula.",
                it: "Finché questo Pokémon è in posizione attiva, il suo attacco Sgranocchio Sfrenato infligge +30 danni. Questo effetto è cumulabile.",
                de: "Bis dieses Pokémon die Aktive Position verlässt, fügt seine Attacke Aufheizknirscher +30 Schadenspunkte zu. Dieser Effekt stapelt sich.",
                "pt-br": "Até este Pokémon sair do Campo Ativo, o ataque Mastigada Quente deste Pokémon causará +30 pontos de dano. Este efeito acumula.",
                "zh-tw": "在這隻寶可夢離開戰鬥場前,這隻寶可夢的「越咬越烈」的傷害+30點。這個效果會重複。"
            },
            damage: 60
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
