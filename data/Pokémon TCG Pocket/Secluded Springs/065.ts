import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Zangoose",
        "fr": "Zangoose",
        "es": "Zangosta",
        "it": "Zangoose",
        "de": "Zangoose",
        "pt-br": "Zangoose",
        "zh-tw": "贊古斯"
    },
    illustrator: "Misa Tsutsui",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Colorless"],
    description: {
        en: "It's Seviper's archrival. To threaten those\nit encounters, it fans out the claws on its\nfront paws.",
        "fr": "C'est le rival de Seviper. Pour menacer ceux\nil rencontre, il déploie ses griffes sur son\npattes avant.",
        "es": "Es el archirrival de Seviper. Para amenazar a aquellos\nencuentra, abre en abanico las garras de su\npatas delanteras.",
        "it": "È l'arcinemico di Seviper. Per minacciarli\nincontra, apre a ventaglio i suoi artigli\nzampe anteriori.",
        "de": "Es ist Sevipers Erzrivale. Diese zu bedrohen\nes begegnet, es breitet seine Krallen aus\nVorderpfoten.",
        "pt-br": "É o arquirrival de Seviper. Para ameaçar aqueles\nencontra, espalha as garras em seu\npatas dianteiras.",
        "zh-tw": "這是塞維珀的主要競爭對手。去威脅那些\n它遇到了，它就會張開爪子\n前爪。"
    },
    stage: "Basic",
    abilities: [{
            type: "Ability",
            name: {
                en: "Counterattack",
                "fr": "Contre-attaque",
                "es": "Contraataque",
                "it": "Contrattacco",
                "de": "Gegenangriff",
                "pt-br": "Contra-ataque",
                "zh-tw": "反擊"
            },
            effect: {
                en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon, do 20 damage to the Attacking Pokémon.",
                "fr": "Si ce Pokémon est dans le Point Actif et est endommagé par une attaque du Pokémon de votre adversaire, infligez 20 dégâts au Pokémon attaquant.",
                "es": "Si este Pokémon está en el Punto Activo y es dañado por un ataque del Pokémon de tu rival, haz 20 puntos de daño al Pokémon Atacante.",
                "it": "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco dei Pokémon del tuo avversario, infliggi 20 danni al Pokémon attaccante.",
                "de": "Wenn sich dieses Pokémon an der aktiven Stelle befindet und durch einen Angriff des Pokémon deines Gegners beschädigt wird, füge dem angreifenden Pokémon 20 Schadenspunkte zu.",
                "pt-br": "Se este Pokémon estiver no Ponto Ativo e for danificado por um ataque do Pokémon do seu oponente, cause 20 pontos de dano ao Pokémon Atacante.",
                "zh-tw": "如果這只寶可夢位於活動區域並因對方寶可夢的攻擊而受到傷害，則對攻擊的寶可夢造成 20 點傷害。"
            }
        }],
    attacks: [{
            name: {
                en: "Slash",
                "fr": "Sabrer",
                "es": "Barra oblicua",
                "it": "Barra",
                "de": "Schrägstrich",
                "pt-br": "Barra",
                "zh-tw": "削減"
            },
            damage: 50,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
