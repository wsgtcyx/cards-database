import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Avalugg",
        "fr": "Avalugg",
        "es": "Avalugg",
        "it": "Valuta",
        "de": "Avalugg",
        "pt-br": "Avalugg",
        "zh-tw": "冰岩怪",
    },
    illustrator: "Kouki Saitou",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Water"],
    evolveFrom: {
        en: "Bergmite",
        "fr": "Bergmite",
        "es": "bergmita",
        "it": "Bergmite",
        "de": "Bergmite",
        "pt-br": "Bergmite",
        "zh-tw": "伯格米特"
    },
    description: {
        en: "This Pokémon uses its massive icy body to flatten\nanything that gets in its way. When it's floating\nout on the ocean, it looks exactly like drift ice.",
        "fr": "Ce Pokémon utilise son énorme corps glacé pour s'aplatir\ntout ce qui lui fait obstacle. Quand il flotte\nsur l'océan, cela ressemble exactement à de la glace dérivante.",
        "es": "Este Pokémon usa su enorme cuerpo helado para aplanarse.\ncualquier cosa que se interponga en su camino. cuando esta flotando\nEn el océano, parece exactamente hielo a la deriva.",
        "it": "Questo Pokémon usa il suo enorme corpo ghiacciato per appiattirsi\ntutto ciò che si intromette. Quando galleggia\nsull'oceano, sembra esattamente ghiaccio alla deriva.",
        "de": "Dieses Pokémon nutzt seinen massiven, eisigen Körper, um es flach zu machen\nalles, was ihm in die Quere kommt. Wenn es schwimmt\nDraußen auf dem Meer sieht es genauso aus wie Treibeis.",
        "pt-br": "Este Pokémon usa seu enorme corpo gelado para achatar\nqualquer coisa que fique no seu caminho. Quando está flutuando\nno oceano, parece exatamente com gelo flutuante.",
        "zh-tw": "這只神奇寶貝利用其巨大的冰冷身體來壓平\n任何妨礙它的東西。當它漂浮的時候\n在海洋上，它看起來就像流冰一樣。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Frost Barrier",
                "fr": "Barrière de gel",
                "es": "Barrera de heladas",
                "it": "Barriera antigelo",
                "de": "Frostbarriere",
                "pt-br": "Barreira de Gelo",
                "zh-tw": "冰霜屏障"
            },
            damage: 70,
            cost: ["Water", "Water", "Colorless"],
            effect: {
                en: "During your opponent's next turn, this Pokémon takes −20 damage from attacks.",
                "fr": "Lors du prochain tour de votre adversaire, ce Pokémon subit -20 dégâts des attaques.",
                "es": "Durante el próximo turno de tu rival, este Pokémon recibe -20 de daño por ataques.",
                "it": "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -20 danni dagli attacchi.",
                "de": "Während des nächsten Zuges deines Gegners erleidet dieses Pokémon −20 Schadenspunkte durch Angriffe.",
                "pt-br": "Durante o próximo turno do seu oponente, este Pokémon sofrerá -20 de dano de ataques.",
                "zh-tw": "在對手的下一個回合中，這只神奇寶貝受到的攻擊傷害為-20。"
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 4
};
export default card;
