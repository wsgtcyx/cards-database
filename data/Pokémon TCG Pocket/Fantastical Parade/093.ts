import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/093",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/093",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/093",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/093",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/093",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/093"
    },
    name: {
        en: "Cornerstone Mask Ogerpon",
        "fr": "Ogerpon Masque de la Pierre",
        "es": "Ogerpon Máscara Cimiento",
        "it": "Maschera della pietra angolare Ogerpon",
        "de": "Ecksteinmaske Ogerpon",
        "pt-br": "Ogerpon Máscara Alicerce",
        "zh-tw": "厄鬼椪礎石面具"
    },
    illustrator: "Hitoshi Ariga",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fighting"],
    description: {
        en: "In this form, it draws on the power of stone.\nIts body is rock-solid, protecting it from all\nmanner of attacks.",
        "fr": "Sous cette forme, il fait appel au pouvoir de la pierre.\nSon corps est solide comme le roc, le protégeant de tout\nmanière d’attaquer.",
        "es": "De esta forma, recurre al poder de la piedra.\nSu cuerpo es sólido como una roca, protegiéndolo de todo\nforma de ataques.",
        "it": "In questa forma, attinge al potere della pietra.\nIl suo corpo è solido come una roccia e lo protegge da tutto\nmodalità di attacchi.",
        "de": "In dieser Form greift es auf die Kraft des Steins zurück.\nSein Körper ist felsenfest und schützt ihn vor allem\nArt der Angriffe.",
        "pt-br": "Nesta forma, baseia-se no poder da pedra.\nSeu corpo é sólido como uma rocha, protegendo-o de todos\ntipo de ataques.",
        "zh-tw": "在這種形式中，它利用了石頭的力量。\n它的身體堅如磐石，可以保護它免受一切傷害\n攻擊方式。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Cornerstone Dance",
                "fr": "Danse de la pierre angulaire",
                "es": "Danza de la piedra angular",
                "it": "Danza della pietra angolare",
                "de": "Grundsteintanz",
                "pt-br": "Dança da Pedra Angular",
                "zh-tw": "基石舞蹈"
            },
            damage: 40,
            cost: ["Fighting", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, during your opponent's next turn, this Pokémon takes −100 damage from attacks.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, lors du prochain tour de votre adversaire, ce Pokémon subit -100 dégâts des attaques.",
                "es": "Lanza una moneda. Si sale cara, durante el próximo turno de tu rival, este Pokémon recibe -100 de daño de los ataques.",
                "it": "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, questo Pokémon subisce -100 danni dagli attacchi.",
                "de": "Wirf eine Münze. Bei „Kopf“ erleidet dieses Pokémon im nächsten Zug deines Gegners −100 Schaden durch Angriffe.",
                "pt-br": "Jogue uma moeda. Se der cara, durante o próximo turno do seu oponente, este Pokémon sofrerá -100 de dano de ataques.",
                "zh-tw": "拋一枚硬幣。如果正面朝上，則在對手的下一個回合中，這只神奇寶貝受到的攻擊傷害為−100。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
