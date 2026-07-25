import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/016",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/016",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/016",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/016",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/016",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/016"
    },
    name: {
        en: "Swadloon",
        fr: "Couverdure",
        es: "Swadloon",
        it: "Swadloon",
        de: "Folikon",
        "pt-br": "Swadloon",
        "zh-tw": "寶包繭",
        ko: "두르쿤",
        ja: "クルマユ"
    },
    illustrator: "Shibuzoh.",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    dexId: [541],
    evolveFrom: {
        en: "Sewaddle",
        fr: "Larveyette",
        es: "Sewaddle",
        it: "Sewaddle",
        de: "Strawickl",
        "pt-br": "Sewaddle",
        "zh-tw": "蟲寶包",
        ko: "두르보",
        ja: "クルミル"
    },
    stage: "Stage1",
    description: {
        en: "Swadloon wraps itself in leaves for protection. It uses the two leaves atop its head to detect air movements and feel out its surroundings.",
        fr: "Couverdure s'enveloppe dans des feuilles pour se protéger. Il utilise les deux feuilles au sommet de sa tête pour détecter les mouvements de l'air et ressentir son environnement.",
        es: "Swadloon se envuelve en hojas para protegerse. Utiliza las dos hojas que tiene encima de la cabeza para detectar movimientos de aire y sentir su entorno.",
        it: "Swadloon si avvolge nelle foglie per proteggersi. Usa le due foglie sopra la testa per rilevare i movimenti dell'aria e percepire l'ambiente circostante.",
        de: "Folikon hüllt sich zum Schutz in Blätter. Mithilfe der beiden Blätter auf seinem Kopf erkennt es Luftbewegungen und spürt seine Umgebung auf.",
        "pt-br": "Swadloon se envolve em folhas para proteção. Ele usa as duas folhas no topo da cabeça para detectar movimentos de ar e sentir o ambiente.",
        "zh-tw": "寶包繭 將自己包裹在樹葉中進行保護。它利用頭頂的兩片葉子來檢測空氣運動並感知周圍環境。"
    },
    attacks: [
        {
            cost: ["Grass"],
            name: {
                en: "Protect",
                fr: "Abri",
                es: "Protección",
                it: "Protezione",
                de: "Schutzschild",
                "pt-br": "Proteção",
                "zh-tw": "守住"
            },
            effect: {
                en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
                fr: "Lancez une pièce de monnaie. Si c'est face, lors du prochain tour de votre adversaire, prévenez tous les dégâts et effets des attaques infligées à ce Pokémon.",
                es: "Lanza una moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y los efectos de los ataques realizados a este Pokémon.",
                it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni tutti i danni e gli effetti degli attacchi inflitti a questo Pokémon.",
                de: "Wirf eine Münze. Bei „Kopf“ verhindere im nächsten Zug deines Gegners jeglichen Schaden und alle Auswirkungen von Angriffen, die diesem Pokémon zugefügt werden.",
                "pt-br": "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, evite todos os danos e efeitos de ataques feitos a este Pokémon.",
                "zh-tw": "拋一枚硬幣。如果正面朝上，則在對手的下一回合中，阻止對該寶可夢造成的所有攻擊傷害及其效果。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
