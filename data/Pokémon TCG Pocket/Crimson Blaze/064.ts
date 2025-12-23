import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Bouffalant",
        "fr": "Frison",
        "es": "Bouffalant",
        "it": "Bouffalant",
        "de": "Bisofank",
        "pt-br": "Bouffalant",
        "zh-tw": "爆炸頭水牛"
    },
    illustrator: "Sanosuke Sakuma",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Colorless"],
    description: {
        en: "These Pokémon live in herds of about 20\nindividuals. Bouffalant that betray the herd will\nlose the hair on their heads for some reason.",
        "fr": "Ces Pokémon vivent en troupeaux d'environ 20\nindividus. Les bouffalants qui trahissent le troupeau le feront\nperdre les cheveux sur la tête pour une raison quelconque.",
        "es": "Estos Pokémon viven en manadas de unos 20\nindividuos. Bouffalant que traiciona la voluntad del rebaño\npierden el pelo de la cabeza por alguna razón.",
        "it": "Questi Pokémon vivono in branchi di circa 20 esemplari\nindividui. Bouffalant che tradiscono la volontà del gregge\nperdere i capelli in testa per qualche motivo.",
        "de": "Diese Pokémon leben in Herden von etwa 20 Tieren\nEinzelpersonen. Bouffalant, der den Herdenwillen verrät\naus irgendeinem Grund die Haare auf dem Kopf verlieren.",
        "pt-br": "Esses Pokémon vivem em rebanhos de cerca de 20\nindivíduos. Bouffalant que trai o rebanho vai\nperder o cabelo da cabeça por algum motivo.",
        "zh-tw": "這些神奇寶貝生活在大約 20 隻的群體中\n個人。背叛牛群的蓬法蘭將會\n由於某種原因失去了頭上的頭髮。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Revenge",
                "fr": "Vengeance",
                "es": "Venganza",
                "it": "Vendetta",
                "de": "Rache",
                "pt-br": "Vingança",
                "zh-tw": "復仇"
            },
            damage: 40,
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 40 more damage.",
                "fr": "Si l'un de vos Pokémon a été mis KO par les dégâts d'une attaque lors du dernier tour de votre adversaire, cette attaque inflige 40 dégâts supplémentaires.",
                "es": "Si alguno de tus Pokémon quedó fuera de combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 40 puntos de daño más.",
                "it": "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni di un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 40 danni in più.",
                "de": "Wenn eines deiner Pokémon im letzten Zug deines Gegners durch Schaden durch einen Angriff kampfunfähig gemacht wurde, fügt dieser Angriff 40 weitere Schadenspunkte zu.",
                "pt-br": "Se algum dos seus Pokémon foi nocauteado pelo dano de um ataque durante o último turno do seu oponente, esse ataque causará 40 de dano a mais.",
                "zh-tw": "如果你的任何一隻神奇寶貝在對手的最後回合中因攻擊傷害而被擊倒，則這次攻擊造成的傷害增加 40 點。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
