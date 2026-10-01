import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/112",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/112",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/112",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/112",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/112",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/112",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/112"
    },
    name: {
        en: "Sylveon",
        fr: "Nymphali",
        es: "Sylveon",
        it: "Sylveon",
        de: "Feelinara",
        "pt-br": "Sylveon",
        "zh-tw": "仙子伊布",
        ja: "ニンフィア",
        ko: "님피아"
    },
    illustrator: "5ban Graphics",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: [
        "Psychic"
    ],
    dexId: [
        700
    ],
    evolveFrom: {
        en: "Eevee",
        fr: "Évoli",
        es: "Eevee",
        it: "Eevee",
        de: "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布",
        ja: "Eevee",
        ko: "Eevee"
    },
    stage: "Stage1",
    description: {
        en: "Sylveon cuts an elegant figure as it dances lightly around, feelers fluttering, but its piercing moves aim straight for its opponents’ weak spots.",
        fr: "Il danse élégamment en faisant onduler ses antennes, mais lorsqu'il attaque, il vise directement les points faibles de ses adversaires.",
        es: "Sus apéndices sensoriales ondean grácilmente y le confieren un aspecto elegante, pero, cuando ataca, va directo al punto débil de sus enemigos.",
        it: "Malgrado il suo aspetto elegante mentre danza leggiadro facendo fluttuare le antenne, quando attacca va dritto ai punti deboli degli avversari.",
        de: "Es sieht zwar elegant aus, wenn es mit wehenden Fühlern leichtfüßig tänzelt, doch seine Attacken zielen gewieft auf Schwachpunkte ab.",
        "pt-br": "Sylveon dança elegantemente com suas antenas ao vento, mirando os pontos fracos dos seus oponentes com movimentos lancinantes.",
        "zh-tw": "搖曳著觸角跳著輕快舞蹈的樣子相當優雅，但招式卻會直搗對手要害。",
        ja: "Sylveon cuts an elegant figure as it dances lightly around, feelers fluttering, but its piercing moves aim straight for its opponents’ weak spots.",
        ko: "Sylveon cuts an elegant figure as it dances lightly around, feelers fluttering, but its piercing moves aim straight for its opponents’ weak spots."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Soothing Ribbon",
                fr: "Rubans Apaisants",
                es: "Cinta Tranquilizadora",
                it: "Fiocco Curativo",
                de: "Besänftigende Bänder",
                "pt-br": "Fita Tranquilizadora",
                "zh-tw": "治癒緞帶",
                ja: "Soothing Ribbon",
                ko: "Soothing Ribbon"
            },
            effect: {
                en: "Once during your turn, if this Pokémon has a Pokémon Tool attached, you may heal 30 damage from 1 of your Pokémon.",
                fr: "Une fois pendant votre tour, si un Outil Pokémon est attaché à ce Pokémon, vous pouvez soigner 30 dégâts d'un de vos Pokémon.",
                es: "Una vez durante tu turno, si este Pokémon tiene 1 Herramienta Pokémon unida a él, puedes curar 30 puntos de daño a 1 de tus Pokémon.",
                it: "Una sola volta durante il tuo turno, se questo Pokémon ha un Oggetto Pokémon assegnato, puoi curare uno dei tuoi Pokémon da 30 danni.",
                de: "Einmal während deines Zuges, wenn an dieses Pokémon 1 Pokémon-Ausrüstung angelegt ist, kannst du 30 Schadenspunkte bei 1 deiner Pokémon heilen.",
                "pt-br": "Uma vez durante o seu turno, se este Pokémon tiver uma Ferramenta Pokémon ligada a ele, você poderá curar 30 pontos de dano de 1 dos seus Pokémon.",
                "zh-tw": "若這隻寶可夢身上附有「寶可夢道具」卡,則在自己的回合時可使用1次。將自己的1隻寶可夢恢復30HP。",
                ja: "Once during your turn, if this Pokémon has a Pokémon Tool attached, you may heal 30 damage from 1 of your Pokémon.",
                ko: "Once during your turn, if this Pokémon has a Pokémon Tool attached, you may heal 30 damage from 1 of your Pokémon."
            }
        }
    ],
    attacks: [
        {
            cost: [
                "Colorless",
                "Colorless"
            ],
            name: {
                en: "Magical Shot",
                fr: "Coup Magique",
                es: "Disparo Mágico",
                it: "Magicolpo",
                de: "Magischer Schuss",
                "pt-br": "Tiro Mágico",
                "zh-tw": "魔法射擊",
                ja: "Magical Shot",
                ko: "Magical Shot"
            },
            damage: 60
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
