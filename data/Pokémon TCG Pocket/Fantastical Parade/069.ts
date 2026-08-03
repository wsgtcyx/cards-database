import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/069",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/069",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/069",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/069",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/069",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/069"
    },
    name: {
        en: "Chandelure",
        "fr": "Lugulabre",
        "es": "Chandelure",
        "it": "Chandelure",
        "de": "Skelabra",
        "pt-br": "Chandelure",
        "zh-tw": "水晶燈火靈"
    },
    illustrator: "Naoyo Kimura",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Psychic"],
    evolveFrom: {
        en: "Lampent",
        "fr": "Lampe",
        "es": "lámpara",
        "it": "Lampada",
        "de": "Lampent",
        "pt-br": "Lampente",
        "zh-tw": "燈籠"
    },
    description: {
        en: "It absorbs spirits, which it then burns. By waving\nthe flames on its arms, it puts its foes into a\nhypnotic trance.",
        "fr": "Il absorbe les esprits qu'il brûle ensuite. En agitant\nles flammes sur ses bras, il met ses ennemis dans un\ntranse hypnotique.",
        "es": "Absorbe espíritus, que luego quema. agitando\nlas llamas en sus brazos, pone a sus enemigos en una\ntrance hipnótico.",
        "it": "Assorbe gli spiriti, che poi brucia. Salutando\nle fiamme sulle sue braccia, mette i suoi nemici in a\ntrance ipnotica.",
        "de": "Es nimmt Spiritus auf und verbrennt diesen. Durch Winken\nDie Flammen auf seinen Armen, es bringt seine Feinde in eine\nhypnotische Trance.",
        "pt-br": "Absorve espíritos, que depois queima. Ao acenar\nas chamas em seus braços, ele coloca seus inimigos em uma\ntranse hipnótico.",
        "zh-tw": "它吸收靈魂，然後將其燃燒。通過揮手\n手臂上的火焰將敵人置於地獄之中\n催眠恍惚。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Past Friends",
                "fr": "Anciens amis",
                "es": "Amigos pasados",
                "it": "Amici del passato",
                "de": "Ehemalige Freunde",
                "pt-br": "Amigos anteriores",
                "zh-tw": "過去的朋友"
            },
            damage: 60,
            cost: ["Psychic", "Psychic"],
            effect: {
                en: "This attack does 20 more damage for each Supporter card in your discard pile.",
                "fr": "Cette attaque inflige 20 dégâts supplémentaires pour chaque carte Supporter dans votre pile de défausse.",
                "es": "Este ataque hace 20 daños más por cada carta de Partidario en tu pila de descarte.",
                "it": "Questo attacco infligge 20 danni in più per ogni carta Aiuto nella tua pila degli scarti.",
                "de": "Dieser Angriff verursacht 20 weitere Schadenspunkte für jede Unterstützerkarte in deinem Ablagestapel.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada carta de Apoiador em sua pilha de descarte.",
                "zh-tw": "此攻擊對你的棄牌堆中每張支持者卡造成 20 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 2
};
export default card;
