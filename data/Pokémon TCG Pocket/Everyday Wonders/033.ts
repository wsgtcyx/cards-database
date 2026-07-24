import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/033",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/033"
    },
    name: {
        en: "Enamorus",
        fr: "Amovénus",
        es: "Enamorus",
        it: "Enamorus",
        de: "Cupidos",
        "pt-br": "Enamorus",
        "zh-tw": "眷戀雲",
        ko: "러브로스",
        ja: "ラブトロス"
    },
    illustrator: "Jiro Sasumo",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Psychic"],
    dexId: [905],
    stage: "Basic",
    description: {
        en: "When it flies to this land from across the sea, the bitter winter comes to an end. According to legend, this Pokémon’s love gives rise to the budding of fresh life across Hisui.",
        fr: "Lorsqu’il vole vers cette terre depuis l’autre côté de la mer, l’hiver rigoureux touche à sa fin. Selon la légende, l’amour de ce Pokémon donne naissance à une nouvelle vie à travers Hisui.",
        es: "Cuando vuela a esta tierra desde el otro lado del mar, el crudo invierno llega a su fin. Según la leyenda, el amor de este Pokémon da lugar al surgimiento de una nueva vida en Hisui.",
        it: "Quando vola verso questa terra dall'altra parte del mare, il rigido inverno finisce. Secondo la leggenda, l'amore di questo Pokémon fa nascere una nuova vita in tutta Hisui.",
        de: "Wenn es von jenseits des Meeres in dieses Land fliegt, geht der bittere Winter zu Ende. Der Legende nach lässt die Liebe dieses Pokémon in ganz Hisui neues Leben entstehen.",
        "pt-br": "Quando ele voa para esta terra vindo do outro lado do mar, o inverno rigoroso chega ao fim. Segundo a lenda, o amor deste Pokémon dá origem ao surgimento de uma nova vida em Hisui.",
        "zh-tw": "當它從大洋彼岸飛到這片土地時，嚴冬就結束了。根據傳說，這隻寶可夢的愛讓整個翡翠島萌芽了新的生命。"
    },
    attacks: [
        {
            cost: ["Psychic", "Colorless", "Colorless"],
            name: {
                en: "Smitten Strike",
                fr: "Frappe frappée",
                es: "Golpe herido",
                it: "Colpito Colpito",
                de: "Geschlagener Schlag",
                "pt-br": "Golpe Ferido",
                "zh-tw": "愛的一擊"
            },
            effect: {
                en: "If this Pokémon and your opponent's Active Pokémon have 1 or more of the same type of Energy attached, this attack does 60 more damage.",
                fr: "Si ce Pokémon et le Pokémon Actif de votre adversaire sont attachés à 1 ou plusieurs Énergies du même type, cette attaque inflige 60 dégâts supplémentaires.",
                es: "Si este Pokémon y el Pokémon Activo de tu rival tienen 1 o más del mismo tipo de Energía unidas, este ataque hace 60 puntos de daño más.",
                it: "Se questo Pokémon e il Pokémon attivo del tuo avversario hanno 1 o più Energie dello stesso tipo assegnate, questo attacco infligge 60 danni in più.",
                de: "Wenn an dieses Pokémon und das Aktive Pokémon deines Gegners 1 oder mehr Energien desselben Typs angelegt sind, fügt dieser Angriff 60 weitere Schadenspunkte zu.",
                "pt-br": "Se este Pokémon e o Pokémon Ativo do seu oponente tiverem 1 ou mais Energias do mesmo tipo ligadas, este ataque causará 60 pontos de dano a mais.",
                "zh-tw": "如果這隻寶可夢和對手的活躍寶可夢附加了 1 個或更多相同類型的能量，則此攻擊造成的傷害增加 60 點。"
            },
            damage: "60+"
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
