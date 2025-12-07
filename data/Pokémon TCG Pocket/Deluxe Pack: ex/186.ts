import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Milcery",
        "fr": "Milcery",
        "es": "milcería",
        "it": "Milcery",
        "de": "Milchwaren",
        "pt-br": "Milcery",
        "zh-tw": "米爾塞里"
    },
    illustrator: "Mina Nakai",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Psychic"],
    description: {
        en: "This Pokémon was born from sweet-smelling\nparticles in the air. Its body is made of cream.",
        "fr": "Ce Pokémon est né d'une odeur douce\nparticules dans l’air. Son corps est en crème.",
        "es": "Este Pokémon nació de un olor dulce.\npartículas en el aire. Su cuerpo está hecho de crema.",
        "it": "Questo Pokémon è nato dal dolce odore\nparticelle nell'aria. Il suo corpo è fatto di crema.",
        "de": "Dieses Pokémon wurde aus süß riechendem geboren\nPartikel in der Luft. Sein Körper besteht aus Creme.",
        "pt-br": "Este Pokémon nasceu de um cheiro doce\npartículas no ar. Seu corpo é feito de creme.",
        "zh-tw": "這只神奇寶貝是從甜味中誕生的\n空氣中的顆粒。它的身體是由奶油製成的。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Sweets Relay",
                "fr": "Relais des Bonbons",
                "es": "Relevo de dulces",
                "it": "Relè dei dolci",
                "de": "Süßigkeiten-Staffel",
                "pt-br": "Revezamento de Doces",
                "zh-tw": "糖果接力賽"
            },
            damage: 10,
            cost: ["Colorless"],
            effect: {
                en: "If 1 of your Pokémon used Sweets Relay during your last turn, this attack does 20 more damage.",
                "fr": "Si 1 de vos Pokémon a utilisé Relais Bonbons lors de votre dernier tour, cette attaque inflige 20 dégâts supplémentaires.",
                "es": "Si 1 de tus Pokémon usó Sweets Relay durante tu último turno, este ataque hace 20 daños más.",
                "it": "Se 1 dei tuoi Pokémon ha utilizzato Sweets Relay durante il tuo ultimo turno, questo attacco infligge 20 danni in più.",
                "de": "Wenn eines deiner Pokémon in deinem letzten Zug „Sweet Relay“ verwendet hat, fügt dieser Angriff 20 weitere Schadenspunkte zu.",
                "pt-br": "Se 1 dos seus Pokémon usou Sweets Relay durante seu último turno, este ataque causará 20 danos a mais.",
                "zh-tw": "如果你的 1 個神奇寶貝在你的最後回合中使用了糖果接力，則此攻擊造成的傷害增加 20 點。"
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1
};
export default card;
