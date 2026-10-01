import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/142",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/142",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/142",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/142",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/142",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/142",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/142"
    },
    name: {
        en: "Mega Sableye ex",
        fr: "Méga-Ténéfix-ex",
        es: "Mega-Sableye ex",
        it: "Mega Sableye-ex",
        de: "Mega-Zobiris-ex",
        "pt-br": "Mega Sableye ex",
        "zh-tw": "超級勾魂眼ex",
        ja: "メガヤミラミex",
        ko: "메가깜까미 ex"
    },
    illustrator: "PLANETA Yamashita",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 170,
    types: [
        "Darkness"
    ],
    dexId: [
        302
    ],
    stage: "Basic",
    attacks: [
        {
            cost: [
                "Darkness",
                "Colorless"
            ],
            name: {
                en: "Cursed Jewel",
                fr: "Joyau Maudit",
                es: "Gema Maldita",
                it: "Gemma Maledetta",
                de: "Verfluchtes Juwel",
                "pt-br": "Joia Amaldiçoada",
                "zh-tw": "咒詛寶石",
                ja: "Cursed Jewel",
                ko: "Cursed Jewel"
            },
            effect: {
                en: "During your opponent's next turn, if this Pokémon is damaged by an attack, do 40 damage to the Attacking Pokémon.",
                fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d'une attaque, le Pokémon Attaquant subit 40 dégâts.",
                es: "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque, el Pokémon Atacante sufre 40 puntos de daño.",
                it: "Durante il prossimo turno del tuo avversario, se questo Pokémon viene danneggiato da un attacco, il Pokémon attaccante subisce 40 danni.",
                de: "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch eine Attacke Schaden zugefügt wird, füge dem Angreifenden Pokémon 40 Schadenspunkte zu.",
                "pt-br": "Durante o próximo turno do seu oponente, se este Pokémon for danificado por um ataque, cause 40 pontos de dano ao Pokémon Atacante.",
                "zh-tw": "在下個對手的回合,這隻寶可夢受到招式的傷害時,使用招式的寶可夢受到40點傷害。",
                ja: "During your opponent's next turn, if this Pokémon is damaged by an attack, do 40 damage to the Attacking Pokémon.",
                ko: "During your opponent's next turn, if this Pokémon is damaged by an attack, do 40 damage to the Attacking Pokémon."
            },
            damage: 80
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
