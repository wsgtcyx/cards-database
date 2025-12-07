import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Zeraora",
        "fr": "Zéraora",
        "es": "Zeraora",
        "it": "Zeraora",
        "de": "Zeraora",
        "pt-br": "Zeraora",
        "zh-tw": "澤拉奧拉"
    },
    illustrator: "kawayoo",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Lightning"],
    description: {
        en: "It electrifies its claws and tears its opponents\napart with them. Even if they dodge its attack,\nthey'll be electrocuted by the flying sparks.",
        "fr": "Il électrise ses griffes et déchire ses adversaires\nà part avec eux. Même s'ils esquivent son attaque,\nils seront électrocutés par les étincelles volantes.",
        "es": "Electrifica sus garras y desgarra a sus oponentes.\naparte con ellos. Incluso si esquivan su ataque,\nSerán electrocutados por las chispas voladoras.",
        "it": "Elettrizza i suoi artigli e dilania i suoi avversari\na parte loro. Anche se schivano il suo attacco,\nsaranno fulminati dalle scintille volanti.",
        "de": "Es elektrisiert seine Krallen und zerreißt seine Gegner\ngetrennt von ihnen. Selbst wenn sie seinem Angriff ausweichen,\nSie werden durch die fliegenden Funken einen Stromschlag erleiden.",
        "pt-br": "Eletrifica suas garras e rasga seus oponentes\nalém deles. Mesmo que eles evitem seu ataque,\neles serão eletrocutados pelas faíscas voadoras.",
        "zh-tw": "它給它的爪子通電並撕裂它的對手\n與他們分開。就算躲過了它的攻擊，\n他們會被飛濺的火花觸電。"
    },
    stage: "Basic",
    abilities: [{
            type: "Ability",
            name: {
                en: "Thunderclap Flash",
                "fr": "Coup de tonnerre",
                "es": "Destello de trueno",
                "it": "Lampo di tuono",
                "de": "Donnerschlagblitz",
                "pt-br": "Trovão Flash",
                "zh-tw": "雷霆閃現"
            },
            effect: {
                en: "At the end of your first turn, take a {L} Energy from your Energy Zone and attach it to this Pokémon.",
                "fr": "À la fin de votre premier tour, prenez une Énergie {L} de votre Zone d'Énergie et attachez-la à ce Pokémon.",
                "es": "Al final de tu primer turno, toma una Energía {L} de tu Zona de Energía y únela a este Pokémon.",
                "it": "Alla fine del tuo primo turno, prendi un'Energia {L} dalla tua Zona Energetica e assegnala a questo Pokémon.",
                "de": "Nimm am Ende deines ersten Zuges eine {L}-Energie aus deiner Energiezone und lege sie an dieses Pokémon an.",
                "pt-br": "No final do seu primeiro turno, pegue uma Energia {L} da sua Zona de Energia e ligue-a a este Pokémon.",
                "zh-tw": "在你的第一回合結束時，從你的能量區取出一個{L}能量並將其附加到這只神奇寶貝身上。"
            }
        }],
    attacks: [{
            name: {
                en: "Lightning Claw",
                "fr": "Griffe de foudre",
                "es": "Garra relámpago",
                "it": "Artiglio del Fulmine",
                "de": "Blitzklaue",
                "pt-br": "Garra Relâmpago",
                "zh-tw": "閃電爪"
            },
            damage: 50,
            cost: ["Lightning", "Lightning"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
