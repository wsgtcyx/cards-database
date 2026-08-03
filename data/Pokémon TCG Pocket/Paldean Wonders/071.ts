import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/071",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/071",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/071",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/071",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/071",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/071",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/071"
    },
    name: {
        en: "Bombirdier",
        fr: "Lestombaile",
        es: "Bombirdier",
        it: "Bombirdier",
        de: "Adebom",
        "pt-br": "Bombirdier",
        "zh-tw": "下石鳥",
        pt: "Bombirdier",
        'es-mx': "Bombirdier"
    },
    illustrator: "nagimiso",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Darkness"],
    dexId: [962],
    description: {
        en: "Bombirdier uses the apron on its chest to bundle up food, which it carries back to its nest. It enjoys dropping things that make loud noises.",
        "fr": "Lestombaile utilise le tablier sur sa poitrine pour emballer la nourriture qu'il rapporte à son nid. Il aime laisser tomber des objets qui font du bruit.",
        "es": "Bombirdier utiliza el delantal que lleva en el pecho para amontonar la comida y llevarla hasta su nido. Le gusta dejar caer cosas que hacen ruidos fuertes.",
        "it": "Bombirdier usa il grembiule che ha sul petto per impacchettare il cibo, che poi riporta al nido. Gli piace far cadere oggetti che producono forti rumori.",
        "de": "Adebom nutzt die Schürze auf seiner Brust, um Nahrung zu bündeln, die er zu seinem Nest zurückträgt. Es genießt, Dinge fallen zu lassen, die laute Geräusche machen.",
        "pt-br": "Bombirdier usa o avental no peito para embrulhar a comida, que leva de volta ao ninho. Ele gosta de deixar cair coisas que fazem barulho.",
        "zh-tw": "下石鳥用胸前的圍裙捆紮食物，然後帶回巢穴。牠喜歡掉落發出巨大噪音的東西。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Fly",
                fr: "Vol",
                es: "Vuelo",
                it: "Volo",
                de: "Fliegen",
                "pt-br": "Voar",
                "zh-tw": "飛",
                pt: "Voar"
            },
            damage: "70",
            cost: ["Colorless", "Colorless", "Colorless"],
            effect: {
                en: "Flip a coin. If tails, this attack does nothing. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
                fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
                es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
                it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
                de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
                "pt-br": "Jogue uma moeda. Se der coroa, este ataque não faz nada. Se sair cara, durante o próximo turno do seu oponente, evite todos os danos e efeitos dos ataques feitos a este Pokémon.",
                "zh-tw": "拋一枚硬幣。如果是反面，則此攻擊不會執行任何操作。如果正面，則在對手的下一個回合中，阻止對該寶可夢造成的所有傷害和攻擊效果。",
                pt: "Jogue uma moeda. Se sair coroa, este ataque não fará nada. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon."
            },
        },
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
