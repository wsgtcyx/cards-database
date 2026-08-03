import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/088",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/088",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/088",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/088",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/088",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/088",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3b/088"
    },
    name: {
        en: "Mega Sableye ex",
        fr: "Méga-Ténéfix-ex",
        es: "Mega-Sableye ex",
        it: "Mega Sableye-ex",
        de: "Mega-Zobiris-ex",
        "pt-br": "Mega Sableye ex",
        "zh-tw": "超級勾魂眼ex",
        ko: "메가깜까미 ex",
        ja: "メガヤミラミex"
    },
    illustrator: "Yano Keiji",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 170,
    types: ["Darkness"],
    dexId: [302],
    stage: "Basic",
    attacks: [
        {
            cost: ["Darkness", "Colorless"],
            name: {
                en: "Cursed Jewel",
                fr: "Joyau maudit",
                es: "Joya maldita",
                it: "Gioiello Maledetto",
                de: "Verfluchtes Juwel",
                "pt-br": "Jóia Amaldiçoada",
                "zh-tw": "咒詛寶石"
            },
            effect: {
                en: "During your opponent's next turn, if this Pokémon is damaged by an attack, do 40 damage to the Attacking Pokémon.",
                fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d'une attaque, le Pokémon Attaquant subit 40 dégâts.",
                es: "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque, el Pokémon Atacante sufre 40 puntos de daño.",
                it: "Durante il prossimo turno del tuo avversario, se questo Pokémon viene danneggiato da un attacco, il Pokémon attaccante subisce 40 danni.",
                de: "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch eine Attacke Schaden zugefügt wird, füge dem Angreifenden Pokémon 40 Schadenspunkte zu.",
                "pt-br": "Durante o próximo turno do seu oponente, se este Pokémon for danificado por um ataque, cause 40 pontos de dano ao Pokémon Atacante.",
                "zh-tw": "在對手的下一個回合中，如果這只寶可夢因攻擊而受到傷害，則對攻擊的寶可夢造成 40 點傷害。"
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
