import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/177"
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
    illustrator: "Natsumi Yoshida",
    rarity: "One Star",
    category: "Pokemon",
    hp: 90,
    types: ["Dragon"],
    dexId: [967],
    stage: "Basic",
    description: {
        en: "It can sprint at over 70 mph while carrying a human. The rider’s body heat warms Cyclizar’s back and lifts the Pokémon’s spirit."
    },
    attacks: [
        {
            cost: ["Grass", "Darkness", "Colorless"],
            name: {
                en: "Acceleration Drive"
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
            damage: 70
        }
    ],
    retreat: 1
};

export default card;
