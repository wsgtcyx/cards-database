import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Dragalge ex",
        "fr": "Dragalge ex",
        "es": "Dragalge ex",
        "it": "Dragalge es",
        "de": "Dragalge ex",
        "pt-br": "Dragalge ex",
        "zh-tw": "毒拉蜜妮 ex",
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Darkness"],
    evolveFrom: {
        en: "Skrelp",
        "fr": "Skrelp",
        "es": "Skrelp",
        "it": "Skrelp",
        "de": "Skrelp",
        "pt-br": "Skrelp",
        "zh-tw": "斯克雷爾普"
    },
    stage: "Stage1",
    suffix: "EX",
    abilities: [{
            type: "Ability",
            name: {
                en: "Poison Point",
                "fr": "Point empoisonné",
                "es": "Punto de veneno",
                "it": "Punto Veleno",
                "de": "Giftpunkt",
                "pt-br": "Ponto Venenoso",
                "zh-tw": "毒點"
            },
            effect: {
                en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon, the Attacking Pokémon is now Poisoned.",
                "fr": "Si ce Pokémon se trouve dans le Point Actif et est endommagé par une attaque du Pokémon de votre adversaire, le Pokémon attaquant est désormais Empoisonné.",
                "es": "Si este Pokémon está en el Punto Activo y es dañado por un ataque del Pokémon de tu rival, el Pokémon Atacante ahora está Envenenado.",
                "it": "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco dei Pokémon del tuo avversario, il Pokémon attaccante è avvelenato.",
                "de": "Wenn sich dieses Pokémon an der aktiven Stelle befindet und durch einen Angriff des Pokémon deines Gegners beschädigt wird, ist das angreifende Pokémon jetzt vergiftet.",
                "pt-br": "Se este Pokémon estiver no Ponto Ativo e for danificado por um ataque do Pokémon do seu oponente, o Pokémon atacante ficará Envenenado.",
                "zh-tw": "如果該神奇寶貝位於活動點並因對手神奇寶貝的攻擊而受到傷害，則攻擊的神奇寶貝現在會中毒。"
            }
        }],
    attacks: [{
            name: {
                en: "Draconic Whip",
                "fr": "Fouet draconique",
                "es": "Látigo dracónico",
                "it": "Frusta Draconica",
                "de": "Drachenpeitsche",
                "pt-br": "Chicote Dracônico",
                "zh-tw": "龍鞭"
            },
            damage: 80,
            cost: ["Darkness", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
