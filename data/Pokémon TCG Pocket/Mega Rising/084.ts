import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Ampharos",
        "fr": "Ampharos",
        "es": "Amfaros",
        "it": "Ampharos",
        "de": "Ampharos",
        "pt-br": "Ampharos",
        "zh-tw": "電龍",
    },
    illustrator: "Megumi Mizutani",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Lightning"],
    evolveFrom: {
        en: "Flaaffy",
        "fr": "Flaaffy",
        "es": "flaco",
        "it": "Flaaffy",
        "de": "Flaaffy",
        "pt-br": "Flaaffy",
        "zh-tw": "弗拉菲"
    },
    description: {
        en: "When it gets dark, the light from its bright,\nshiny tail can be seen from far away on the\nocean's surface.",
        "fr": "Quand il fait sombre, la lumière de sa lumière,\nla queue brillante est visible de loin sur le\nla surface de l'océan.",
        "es": "Cuando oscurece, la luz de su brillante,\nLa cola brillante se puede ver desde lejos en el\nla superficie del océano.",
        "it": "Quando fa buio, la luce è brillante,\nla coda lucida può essere vista da lontano sul\nsuperficie dell'oceano.",
        "de": "Wenn es dunkel wird, geht das Licht aus seinem hellen,\nDer glänzende Schwanz ist schon von weitem zu sehen\nMeeresoberfläche.",
        "pt-br": "Quando escurece, a luz brilha,\ncauda brilhante pode ser vista de longe no\nsuperfície do oceano.",
        "zh-tw": "當天黑時，燈光從明亮處發出，\n從遠處就可以看到閃亮的尾巴\n海洋表面。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Zapping Bullet",
                "fr": "Zapping Balle",
                "es": "Bala zapping",
                "it": "Proiettile zapping",
                "de": "Kugel zappen",
                "pt-br": "Bala Zapping",
                "zh-tw": "電擊子彈"
            },
            damage: 90,
            cost: ["Lightning", "Lightning", "Colorless"],
            effect: {
                en: "1 of your opponent's Benched Pokémon is chosen at random. This attack also does 20 damage to it.",
                "fr": "1 des Pokémon de Banc de votre adversaire est choisi au hasard. Cette attaque lui fait également 20 dégâts.",
                "es": "Se elige al azar 1 de los Pokémon en Banca de tu rival. Este ataque también le causa 20 daños.",
                "it": "1 dei Pokémon nella panchina del tuo avversario viene scelto a caso. Questo attacco gli infligge anche 20 danni.",
                "de": "1 Pokémon auf der Bank deines Gegners wird zufällig ausgewählt. Dieser Angriff fügt ihm außerdem 20 Schadenspunkte zu.",
                "pt-br": "1 dos Pokémon no Banco do seu oponente é escolhido aleatoriamente. Este ataque também causa 20 de dano.",
                "zh-tw": "隨機選擇 1 只對手後備神奇寶貝。這次攻擊也會對其造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
