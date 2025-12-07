import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Umbreon ex",
        "fr": "Umbreon ex",
        "es": "Umbreon ex",
        "it": "Umbreon es",
        "de": "Umbreon ex",
        "pt-br": "Umbreon ex",
        "zh-tw": "傘前"
    },
    illustrator: "AKIRA EGAWA",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 140,
    types: ["Darkness"],
    evolveFrom: {
        en: "Eevee",
        "fr": "Évoli",
        "es": "Eevee",
        "it": "Eevee",
        "de": "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布"
    },
    stage: "Stage1",
    suffix: "EX",
    abilities: [{
            type: "Ability",
            name: {
                en: "Dark Chase",
                "fr": "Poursuite sombre",
                "es": "Persecución oscura",
                "it": "Inseguimento oscuro",
                "de": "Dunkle Verfolgungsjagd",
                "pt-br": "Perseguição Negra",
                "zh-tw": "黑暗追逐"
            },
            effect: {
                en: "Once during your turn, if this Pokémon is in the Active Spot, you may switch in 1 of your opponent's Benched Pokémon that has damage on it to the Active Spot.",
                "fr": "Une fois pendant votre tour, si ce Pokémon est dans le point actif, vous pouvez transférer 1 des Pokémon de Banc de votre adversaire qui ont des dégâts sur le point actif.",
                "es": "Una vez durante tu turno, si este Pokémon está en el Punto Activo, puedes cambiar 1 de los Pokémon en Banca de tu rival que tenga daño al Punto Activo.",
                "it": "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi mettere in posizione attiva 1 dei Pokémon nella panchina del tuo avversario che ha dei danni su di esso.",
                "de": "Einmal während deines Zuges kannst du, wenn sich dieses Pokémon an der Aktiven Stelle befindet, 1 Pokémon auf der Bank deines Gegners, das Schaden hat, an die Aktive Stelle tauschen.",
                "pt-br": "Uma vez durante o seu turno, se este Pokémon estiver no Ponto Ativo, você poderá trocar 1 dos Pokémon no Banco do seu oponente que tenha dano para o Ponto Ativo.",
                "zh-tw": "在你的回合中，如果這只神奇寶貝位於活躍區，你可以將對手後備隊的 1 只受到傷害的神奇寶貝切換到活躍區。"
            }
        }],
    attacks: [{
            name: {
                en: "Darkness Fang",
                "fr": "Croc des Ténèbres",
                "es": "Colmillo de oscuridad",
                "it": "Zanna dell'Oscurità",
                "de": "Dunkelheitszahn",
                "pt-br": "Presa da Escuridão",
                "zh-tw": "黑暗之牙"
            },
            damage: 80,
            cost: ["Darkness", "Darkness"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["ho-oh"]
};
export default card;
