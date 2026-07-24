import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/211",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/211"
    },
    name: {
        en: "Onix",
        fr: "Onix",
        es: "Onix",
        it: "Onix",
        de: "Onix",
        "pt-br": "Onix",
        "zh-tw": "大岩蛇",
        ko: "롱스톤",
        ja: "イワーク"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 100,
    types: ["Fighting"],
    dexId: [95],
    stage: "Basic",
    description: {
        en: "It rapidly bores through the ground at 50 mph by squirming and twisting its massive, rugged body.",
        fr: "Il creuse dans le sol à une vitesse de 80 km/h\nen contorsionnant son immense corps de pierre.",
        es: "Perfora el suelo a una velocidad de 80 km/h\ngirando y retorciendo su robusto y enorme\ncuerpo.",
        it: "Scava nel terreno a una velocità di 80 km/h\ncontorcendo e agitando il corpo grande\ne possente.",
        de: "Es bohrt sich mit 80 km/h durch das Erdreich,\nindem es seinen massiven, rauen Körper dreht\nund windet.",
        "pt-br": "Ele rapidamente perfura o solo a 80 km/h, contorcendo-se e torcendo seu corpo maciço e robusto.",
        "zh-tw": "彎曲扭動巨大結實的身體，\n以時速８０公里的\n猛烈勢頭挖掘前進。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Dig",
                fr: "Tunnel",
                es: "Excavar",
                it: "Fossa",
                de: "Schaufler",
                "pt-br": "Cavar",
                "zh-tw": "挖洞"
            },
            effect: {
                en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
                fr: "Lancez une pièce de monnaie. Si c'est face, lors du prochain tour de votre adversaire, prévenez tous les dégâts et effets des attaques infligées à ce Pokémon.",
                es: "Lanza una moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y los efectos de los ataques realizados a este Pokémon.",
                it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni tutti i danni e gli effetti degli attacchi inflitti a questo Pokémon.",
                de: "Wirf eine Münze. Bei „Kopf“ verhindere im nächsten Zug deines Gegners jeglichen Schaden und alle Auswirkungen von Angriffen, die diesem Pokémon zugefügt werden.",
                "pt-br": "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, evite todos os danos e efeitos de ataques feitos a este Pokémon.",
                "zh-tw": "拋一枚硬幣。如果正面朝上，則在對手的下一回合中，阻止對該寶可夢造成的所有攻擊傷害及其效果。"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
