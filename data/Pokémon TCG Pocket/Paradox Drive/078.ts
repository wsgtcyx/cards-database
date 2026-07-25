import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/078",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/078",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/078",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/078",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/078",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/078"
    },
    name: {
        en: "Glimmora",
        fr: "Floréclat",
        es: "Glimmora",
        it: "Glimmora",
        de: "Lumiflora",
        "pt-br": "Glimmora",
        "zh-tw": "晶光花",
        ko: "킬라플로르",
        ja: "キラフロル"
    },
    illustrator: "takashi shiraishi",
    rarity: "One Star",
    category: "Pokemon",
    hp: 90,
    types: ["Darkness"],
    dexId: [970],
    evolveFrom: {
        en: "Glimmet",
        fr: "Germéclat",
        es: "Glimmet",
        it: "Glimmet",
        de: "Lumispross",
        "pt-br": "Glimmet",
        "zh-tw": "晶光芽",
        ko: "초롱순",
        ja: "キラーメ"
    },
    stage: "Stage1",
    description: {
        en: "Glimmora’s petals are made of crystallized poison energy. It has recently become evident that these petals resemble Tera Jewels.",
        fr: "Les pétales de Floréclat sont constitués d’énergie empoisonnée cristallisée. Il est récemment devenu évident que ces pétales ressemblent à des Tera Jewels.",
        es: "Los pétalos de Glimmora están hechos de energía venenosa cristalizada. Recientemente se ha hecho evidente que estos pétalos se parecen a Tera Jewels.",
        it: "I petali di Glimmora sono fatti di energia velenosa cristallizzata. Recentemente è diventato evidente che questi petali assomigliano a Tera Jewels.",
        de: "Die Blütenblätter von Lumiflora bestehen aus kristallisierter Giftenergie. Es hat sich kürzlich herausgestellt, dass diese Blütenblätter Tera Jewels ähneln.",
        "pt-br": "As pétalas de Glimmora são feitas de energia venenosa cristalizada. Recentemente tornou-se evidente que estas pétalas se assemelham às Joias Tera.",
        "zh-tw": "晶光花的花瓣是由毒能結晶而成。最近發現這些花瓣很像泰拉珠寶。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Shattering Crystal",
                fr: "Cristal brisé",
                es: "Cristal destrozado",
                it: "Cristallo Frantumante",
                de: "Zerbrechender Kristall",
                "pt-br": "Cristal Quebrando",
                "zh-tw": "碎裂結晶"
            },
            effect: {
                en: "When this Pokémon is Knocked Out, flip a coin. If heads, your opponent can't get any points for it.",
                fr: "Lorsque ce Pokémon est mis KO, lancez une pièce. Si c'est face, votre adversaire ne peut obtenir aucun point.",
                es: "Cuando este Pokémon quede fuera de combate, lanza una moneda. Si sale cara, tu oponente no podrá obtener ningún punto por ello.",
                it: "Quando questo Pokémon viene messo KO, lancia una moneta. Se esce testa, il tuo avversario non potrà ottenere alcun punto.",
                de: "Wenn dieses Pokémon kampfunfähig ist, wirf eine Münze. Bei „Kopf“ kann Ihr Gegner dafür keine Punkte bekommen.",
                "pt-br": "Quando este Pokémon for nocauteado, jogue uma moeda. Se der cara, seu oponente não poderá ganhar nenhum ponto por isso.",
                "zh-tw": "當這只寶可夢被擊倒時，擲硬幣。如果出現正面，您的對手將無法獲得任何分數。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Venomous Hit",
                fr: "Coup venimeux",
                es: "Golpe venenoso",
                it: "Colpo velenoso",
                de: "Giftiger Treffer",
                "pt-br": "Golpe Venenoso",
                "zh-tw": "毒液一擊"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned.",
                fr: "Le Pokémon Actif de votre adversaire est désormais Empoisonné.",
                es: "El Pokémon Activo de tu rival ahora está Envenenado.",
                it: "Il Pokémon attivo del tuo avversario ora è avvelenato.",
                de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Envenenado.",
                "zh-tw": "你對手的戰鬥寶可夢現在中毒了。"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
