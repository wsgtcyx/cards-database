import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/082"
    },
    name: { en: "Pikachu", fr: "Pikachu", es: "Pikachu", it: "Pikachu", de: "Pikachu", "pt-br": "Pikachu", "zh-tw": "皮卡丘", ko: "피카츄", ja: "ピカチュウ" },
    illustrator: "kurumitsu",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    dexId: [25],
    stage: "Basic",
    attacks: [{
        cost: ["Colorless"],
        name: { en: "Growl", fr: "Rugissement", es: "Gruñido", it: "Ruggito", de: "Heuler", "pt-br": "Rosnadura", "zh-tw": "叫聲" },
        effect: {
            en: "During your opponent's next turn, attacks used by the Defending Pokémon do −20 damage.",
            fr: "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent −20 dégâts.",
            es: "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen −20 puntos de daño.",
            it: "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore infliggono -20 danni.",
            de: "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon −20 Schadenspunkte zu.",
            "pt-br": "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor causarão −20 pontos de dano.",
            "zh-tw": "在下個對手的回合，受到這個招式的寶可夢使用招式的傷害−20點。"
        }
    }],
    weaknesses: [{ type: "Fighting", value: "+20" }],
    retreat: 1,
    boosters: ["vol11"]
};

export default card;
