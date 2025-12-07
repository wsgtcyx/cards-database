import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Swirlix",
        "fr": "Tourbillon",
        "es": "remolino",
        "it": "Swirlix",
        "de": "Swirlix",
        "pt-br": "Redemoinho",
        "zh-tw": "漩渦"
    },
    illustrator: "MAHOU",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    description: {
        en: "It eats its own weight in sugar every day.\nIf it doesn't get enough sugar, it becomes\nincredibly grumpy.",
        "fr": "Il consomme chaque jour son propre poids en sucre.\nS'il n'y a pas assez de sucre, il devient\nincroyablement grincheux.",
        "es": "Cada día ingiere su propio peso en azúcar.\nSi no recibe suficiente azúcar, se vuelve\nincreíblemente gruñón.",
        "it": "Ogni giorno mangia il proprio peso in zucchero.\nSe non riceve abbastanza zucchero, diventa\nincredibilmente scontroso.",
        "de": "Es frisst jeden Tag sein eigenes Gewicht an Zucker.\nWenn es nicht genug Zucker bekommt, wird es\nunglaublich mürrisch.",
        "pt-br": "Ele come seu próprio peso em açúcar todos os dias.\nSe não obtiver açúcar suficiente, torna-se\nincrivelmente mal-humorado.",
        "zh-tw": "它每天吃掉與自身重量相同的糖。\n如果沒有獲得足夠的糖分，就會變成\n脾氣暴躁得令人難以置信。"
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
