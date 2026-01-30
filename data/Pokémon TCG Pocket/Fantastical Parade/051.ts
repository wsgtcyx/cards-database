import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    name: {
        en: "Zapdos",
        "fr": "Zapdos",
        "es": "Zapdos",
        "it": "Zapdos",
        "de": "Zapdos",
        "pt-br": "Zapdos",
        "zh-tw": "扎普多斯"
    },
    illustrator: "Ken Sugimori",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Lightning"],
    description: {
        en: "Zapdos is a legendary bird Pokémon. It's said\nthat when Zapdos rubs its feathers together,\nlightning will fall immediately after.",
        "fr": "Zapdos est un Pokémon oiseau légendaire. On dit\nque lorsque Zapdos frotte ses plumes ensemble,\nla foudre tombera immédiatement après.",
        "es": "Zapdos es un Pokémon pájaro legendario. se dice\nque cuando Zapdos frota sus plumas,\nUn rayo caerá inmediatamente después.",
        "it": "Zapdos è un Pokémon uccello leggendario. E' detto\nche quando Zapdos strofina insieme le sue piume,\nil fulmine cadrà subito dopo.",
        "de": "Zapdos ist ein legendäres Vogel-Pokémon. Es heißt\ndass, wenn Zapdos seine Federn aneinander reibt,\nUnmittelbar danach wird ein Blitz fallen.",
        "pt-br": "Zapdos é um Pokémon pássaro lendário. Está dito\nque quando Zapdos esfrega as penas,\num raio cairá imediatamente depois.",
        "zh-tw": "閃電鳥是傳說中的鳥類神奇寶貝。據說\n當 Zapdos 摩擦它的羽毛時，\n閃電會立即落下。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Heavy Thunder",
                "fr": "Tonnerre lourd",
                "es": "Trueno pesado",
                "it": "Tuono pesante",
                "de": "Schwerer Donner",
                "pt-br": "Trovão Pesado",
                "zh-tw": "重雷"
            },
            cost: ["Lightning", "Lightning", "Lightning"],
            effect: {
                en: "1 other Pokémon (either yours or your opponent's) is chosen at random 1 time. Do 100 damage to the chosen Pokémon.",
                "fr": "1 autre Pokémon (le vôtre ou celui de votre adversaire) est choisi au hasard 1 fois. Infligez 100 dégâts au Pokémon choisi.",
                "es": "Se elige 1 Pokémon más (ya sea tuyo o de tu oponente) al azar 1 vez. Haz 100 daños al Pokémon elegido.",
                "it": "1 altro Pokémon (tuo o del tuo avversario) viene scelto a caso 1 volta. Infliggi 100 danni al Pokémon scelto.",
                "de": "1 anderes Pokémon (entweder deins oder das deines Gegners) wird einmal zufällig ausgewählt. Füge dem ausgewählten Pokémon 100 Schaden zu.",
                "pt-br": "1 outro Pokémon (seu ou do seu oponente) é escolhido aleatoriamente 1 vez. Cause 100 de dano ao Pokémon escolhido.",
                "zh-tw": "隨機選擇 1 只其他神奇寶貝（無論是你的還是你對手的）1 次。對所選神奇寶貝造成 100 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
