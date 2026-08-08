import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/128",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/128",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/128",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/128",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/128",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/128",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/128"
    },
    name: {
        en: "Cyclizar",
        fr: "Motorizard",
        es: "Cyclizar",
        it: "Cyclizar",
        de: "Mopex",
        "pt-br": "Cyclizar",
        "zh-tw": "摩托蜥",
        ko: "모토마",
        ja: "モトトカゲ"
    },
    illustrator: "Iori Suzuki",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Dragon"],
    dexId: [967],
    stage: "Basic",
    description: {
        en: "It can sprint at over 70 mph while carrying a human. The rider’s body heat warms Cyclizar’s back and lifts the Pokémon’s spirit.",
        "it": "Trasporta esseri umani sfrecciando a una velocità di 120 km/h. La temperatura corporea di chi trasporta gli scalda il dorso, dandogli energia."
    },
    attacks: [
        {
            cost: ["Grass", "Darkness", "Colorless"],
            name: {
                en: "Acceleration Drive",
                fr: "Conduite Accélérée",
                es: "Impulso Aceleración",
                "pt-br": "Câmbio Acelerado",
                "zh-tw": "高速猛衝",
                "it": "-Propulsione Rapida",
                "de": "Schnellganggetriebe"
            },
            effect: {
                en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
                fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
                es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
                it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni tutti i danni e gli effetti degli attacchi inflitti a questo Pokémon.",
                de: "Wirf eine Münze. Bei „Kopf“ verhindere im nächsten Zug deines Gegners jeglichen Schaden und alle Auswirkungen von Angriffen, die diesem Pokémon zugefügt werden.",
                "pt-br": "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
                "zh-tw": "擲1次硬幣若為正面,則在下個對手的回合,這隻寶可夢不會受到招式的傷害與效果的影響。"
            },
            damage: 70
        }
    ],
    retreat: 1
};
export default card;
