import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/079"
    },
    name: {
        en: "Celebi", fr: "Celebi", es: "Celebi", it: "Celebi", de: "Celebi",
        "pt-br": "Celebi", "zh-tw": "時拉比", ko: "세레비", ja: "セレビィ"
    },
    illustrator: "HYOGONOSUKE",
    rarity: "One Star",
    category: "Pokemon",
    hp: 70,
    types: ["Grass"],
    dexId: [251],
    stage: "Basic",
    abilities: [{
        type: "Ability",
        name: {
            en: "Time Recall", fr: "Rappel Temporel", es: "Retroceso en el Tiempo", it: "Richiamo temporale", de: "Zeitrückruf",
            "pt-br": "Retorno no Tempo", "zh-tw": "時光回溯"
        },
        effect: {
            en: "Each of your evolved Pokémon can use any attack from its previous Evolutions. (You still need the necessary Energy to use each attack.)",
            fr: "Chacun de vos Pokémon évolués peut utiliser les attaques de ses précédentes Évolutions. (Vous avez toujours besoin de l'Énergie nécessaire pour utiliser chaque attaque.)",
            es: "Cada uno de tus Pokémon evolucionados puede usar cualquier ataque de sus Evoluciones anteriores. (Sigues necesitando la Energía necesaria para usar cada ataque).",
            it: "Ciascuno dei tuoi Pokémon evoluti può usare qualsiasi attacco delle sue Evoluzioni precedenti. (Hai comunque bisogno dell'Energia necessaria per usare ogni attacco.)",
            de: "Jedes deiner entwickelten Pokémon kann jede Attacke seiner vorherigen Entwicklungsstufen einsetzen. (Du benötigst weiterhin die notwendige Energie, um die jeweilige Attacke einzusetzen.)",
            "pt-br": "Cada um dos seus Pokémon evoluídos pode usar qualquer ataque de suas Evoluções anteriores. (Você ainda precisa da Energia necessária para usar cada ataque.)",
            "zh-tw": "只要這隻寶可夢在場上，自己的所有進化寶可夢，可使用進化前持有的所有招式。[需要有足夠使用招式的能量。]"
        }
    }],
    attacks: [{
        cost: ["Colorless", "Colorless"],
        name: { en: "Smack", fr: "Claque", es: "Palmetazo", it: "Schiaffo", de: "Klatscher", "pt-br": "Estalo", "zh-tw": "掌擊" },
        damage: 30
    }],
    weaknesses: [{ type: "Fire", value: "+20" }],
    retreat: 1,
    boosters: []
};

export default card;
