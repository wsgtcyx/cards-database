import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/111",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/111",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/111",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/111",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/111",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/111",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2b/111"
    },
    name: {
        en: "Mega Charizard X ex",
        fr: "Méga-Dracaufeu X-ex",
        es: "Mega-Charizard X ex",
        it: "Mega Charizard[C:Nbsp ]X-ex",
        de: "Mega-Glurak X-ex",
        "pt-br": "Mega Charizard X ex",
        "zh-tw": "超級噴火龍Xex",
        ko: "메가리자몽X ex",
        ja: "メガリザードンXex"
    },
    illustrator: "PLANETA Igarashi",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 220,
    types: ["Fire"],
    dexId: [6],
    evolveFrom: {
        en: "Charmeleon",
        fr: "Reptincel",
        es: "Charmeleon",
        it: "Charmeleon",
        de: "Glutexo",
        "pt-br": "Charmeleon",
        "zh-tw": "火恐龍",
        ko: "리자드",
        ja: "リザード"
    },
    stage: "Stage2",
    attacks: [
        {
            cost: ["Fire", "Fire", "Fire"],
            name: {
                en: "Raging Blaze",
                fr: "Brasier Déchaîné",
                es: "Fuego Despiadado",
                it: "Vampata Furiosa",
                de: "Wütender Brand",
                "pt-br": "Labareda Violenta",
                "zh-tw": "激狂火焰"
            },
            effect: {
                en: "If this Pokémon's remaining HP is 110 or less, this attack does 80 more damage.",
                fr: "Si les PV restants de ce Pokémon sont de 110 ou moins, cette attaque inflige 80 dégâts supplémentaires.",
                es: "Si los HP restantes de este Pokémon son 110 o menos, este ataque hace 80 puntos de daño más.",
                it: "Se i PS rimanenti di questo Pokémon sono 110 o meno, questo attacco infligge 80 danni in più.",
                de: "Wenn die verbleibenden HP dieses Pokémon 110 oder weniger betragen, fügt dieser Angriff 80 Schadenspunkte mehr zu.",
                "pt-br": "Se o HP restante deste Pokémon for 110 ou menos, este ataque causará 80 de dano a mais.",
                "zh-tw": "如果這隻寶可夢的剩餘生命值為 110 或以下，則此攻擊造成的傷害增加 80 點。"
            },
            damage: "100+"
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
