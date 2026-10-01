import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/316",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/316",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/316",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/316",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/316",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/316",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/316"
    },
    name: {
        en: "Onix",
        fr: "Onix",
        es: "Onix",
        it: "Onix",
        de: "Onix",
        "pt-br": "Onix",
        "zh-tw": "大岩蛇",
        ja: "イワーク",
        ko: "롱스톤"
    },
    illustrator: "Naoyo Kimura",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: [
        "Fighting"
    ],
    description: {
        en: "It rapidly bores through the ground at 50 mph by\nsquirming and twisting its massive, rugged body.",
        fr: "Il creuse dans le sol à une vitesse de 80 km/h en contorsionnant son immense corps de pierre.",
        es: "Perfora el suelo a una velocidad de 80 km/h girando y retorciendo su robusto y enorme cuerpo.",
        it: "Scava nel terreno a una velocità di 80 km/h contorcendo e agitando il corpo grande e possente.",
        de: "Es bohrt sich mit 80 km/h durch das Erdreich, indem es seinen massiven, rauen Körper dreht und windet.",
        "pt-br": "Desloca-se rapidamente pelo solo a 80 km/h torcendo e balançando seu enorme e resistente corpo.",
        "zh-tw": "彎曲扭動巨大結實的身體，以時速８０公里的猛烈勢頭挖掘前進。",
        ja: "It rapidly bores through the ground at 50 mph by\nsquirming and twisting its massive, rugged body.",
        ko: "It rapidly bores through the ground at 50 mph by\nsquirming and twisting its massive, rugged body."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Dig",
                fr: "Tunnel",
                es: "Excavar",
                it: "Fossa",
                de: "Schaufler",
                "pt-br": "Cavar",
                "zh-tw": "挖洞",
                ja: "Dig",
                ko: "Dig"
            },
            damage: 30,
            cost: [
                "Colorless",
                "Colorless",
                "Colorless"
            ],
            effect: {
                en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
                fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
                es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
                it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
                de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
                "pt-br": "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
                "zh-tw": "擲1次硬幣若為正面,則在下個對手的回合,這隻寶可夢不會受到招式的傷害與效果的影響。",
                ja: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
                ko: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon."
            }
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
