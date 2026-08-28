import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/076",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/076",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/076",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/076",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/076",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/076",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/076"
    },
    name: {
        en: "Team Rocket's Kecleon",
        fr: "Kecleon de la Team Rocket",
        es: "Kecleon del Team Rocket",
        it: "Kecleon del Team Rocket",
        de: "Team Rockets Kecleon",
        "pt-br": "Kecleon da Equipe Rocket",
        "zh-tw": "火箭隊的變隱龍",
        ko: "로켓단의 켈리몬",
        ja: "ロケット団のカクレオン"
    },
    illustrator: "Saboteri",
    rarity: "One Star",
    category: "Pokemon",
    hp: 70,
    types: ["Colorless"],
    stage: "Basic",
    description: {
        en: "It changes color to blend in with its surroundings in order to sneak up on prey. It can't make its belly pattern disappear, however.",
        fr: "Il change de couleur pour se fondre dans son environnement, afin de s'approcher furtivement de ses proies. Seul son motif ventral reste visible.",
        es: "Acecha a sus presas adaptando sus colores a los del paisaje, pero los dibujos de su panza nunca cambian.",
        it: "Cambia colore per mimetizzarsi e sorprendere la preda. ll disegno sulla pancia rimane sempre visibile.",
        de: "Beim Beutefang passt es seine Farbe der Umgebung an. Nur das Muster auf seinem Bauch bleibt gleich.",
        "pt-br": "Muda de cor para se misturar ao ambiente e surpreender a presa. No entanto, não consegue fazer as marcas na sua barriga desaparecerem.",
        "zh-tw": "能夠改變體色，融入景色中，偷偷地靠近獵物。但腹部的花紋是不會消失的。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Spy Ops",
                fr: "Renseignements",
                es: "Espía",
                it: "Spionaggio",
                de: "Spionage",
                "pt-br": "Operação Espião",
                "zh-tw": "間諜行動"
            },
            effect: {
                en: "Once during your turn, you may look at a random card from your opponent's hand.",
                fr: "Une fois pendant votre tour, vous pouvez regarder une carte de la main de votre adversaire au hasard.",
                es: "Una vez durante tu turno, puedes mirar 1 carta aleatoria de la mano de tu rival.",
                it: "Una sola volta durante il tuo turno, puoi guardare una carta a caso fra quelle nella mano del tuo avversario.",
                de: "Einmal während deines Zuges kannst du dir 1 zufällige Karte aus der Hand deines Gegners anschauen.",
                "pt-br": "Uma vez durante o seu turno, você pode olhar 1 carta aleatória da mão do seu oponente.",
                "zh-tw": "在自己的回合時,可使用1次。從對手的手牌隨機查看1張卡的正面。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Hit and Hide",
                fr: "Frappe et Cachette",
                es: "Golpear y Esconder",
                it: "Nascondicolpo",
                de: "Versteckschlag",
                "pt-br": "Bate e Esconde",
                "zh-tw": "打擊躲藏"
            },
            effect: {
                en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
                fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
                es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
                it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
                de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
                "pt-br": "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
                "zh-tw": "擲1次硬幣若為正面,則在下個對手的回合,這隻寶可夢不會受到招式的傷害與效果的影響。"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
