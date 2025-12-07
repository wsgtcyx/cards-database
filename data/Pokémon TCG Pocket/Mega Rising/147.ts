import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Coalossal",
        "fr": "Coalosse",
        "es": "Coalosal",
        "it": "Coalossale",
        "de": "Kohlelossal",
        "pt-br": "Colossal",
        "zh-tw": "科洛薩爾"
    },
    illustrator: "AKIRA EGAWA",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Fighting"],
    evolveFrom: {
        en: "Carkol",
        "fr": "Carkol",
        "es": "Carkol",
        "it": "Carkol",
        "de": "Carkol",
        "pt-br": "Carkol",
        "zh-tw": "卡科爾"
    },
    description: {
        en: "It's gentle usually but fearsome when angered.\nWith a body that burns at over 2,700 degrees\nFahrenheit, it crushes foes and turns them to ash.",
        "fr": "Il est généralement doux mais effrayant lorsqu'il est en colère.\nAvec un corps qui brûle à plus de 2 700 degrés\nFahrenheit, il écrase les ennemis et les réduit en cendres.",
        "es": "Generalmente es gentil pero temible cuando se enoja.\nCon un cuerpo que arde a más de 2.700 grados\nFahrenheit, aplasta a los enemigos y los convierte en cenizas.",
        "it": "Di solito è gentile ma spaventoso quando è arrabbiato.\nCon un corpo che brucia a oltre 2.700 gradi\nFahrenheit, schiaccia i nemici e li riduce in cenere.",
        "de": "Normalerweise ist es sanft, aber furchterregend, wenn man wütend ist.\nMit einem Körper, der bei über 2.700 Grad brennt\nFahrenheit zermalmt Feinde und verwandelt sie in Asche.",
        "pt-br": "Geralmente é gentil, mas assustador quando está com raiva.\nCom um corpo que queima a mais de 2.700 graus\nFahrenheit, ele esmaga os inimigos e os transforma em cinzas.",
        "zh-tw": "平時很溫柔，但生氣時卻很可怕。\n身體燃燒溫度超過 2,700 度\n華氏度，它粉碎敵人並將他們化為灰燼。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Coal Drop",
                "fr": "Goutte de charbon",
                "es": "Gota de carbón",
                "it": "Goccia di carbone",
                "de": "Kohletropfen",
                "pt-br": "Gota de carvão",
                "zh-tw": "煤滴"
            },
            damage: 100,
            cost: ["Fighting", "Fighting", "Fighting"],
            effect: {
                en: "If your opponent's Active Pokémon is a {G} Pokémon, this attack does 50 more damage.",
                "fr": "Si le Pokémon Actif de votre adversaire est un Pokémon {G}, cette attaque inflige 50 dégâts supplémentaires.",
                "es": "Si el Pokémon Activo de tu rival es un Pokémon {G}, este ataque hace 50 puntos de daño más.",
                "it": "Se il Pokémon attivo del tuo avversario è un Pokémon {G}, questo attacco infligge 50 danni in più.",
                "de": "Wenn das Aktive Pokémon deines Gegners ein {G}-Pokémon ist, fügt dieser Angriff 50 weitere Schadenspunkte zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente for um Pokémon {G}, este ataque causará 50 pontos de dano a mais.",
                "zh-tw": "如果對手的活躍神奇寶貝是{G}神奇寶貝，則此攻擊造成的傷害增加 50 點。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 4
};
export default card;
