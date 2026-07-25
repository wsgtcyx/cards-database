import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/030",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/030",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/030",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/030",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/030",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/030"
    },
    name: {
        en: "Sylveon",
        fr: "Nymphali",
        es: "Sylveon",
        it: "Sylveon",
        de: "Feelinara",
        "pt-br": "Sylveon",
        "zh-tw": "仙子伊布",
        ko: "님피아",
        ja: "ニンフィア"
    },
    illustrator: "5ban Graphics",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Psychic"],
    dexId: [700],
    evolveFrom: {
        en: "Eevee",
        fr: "Évoli",
        es: "Eevee",
        it: "Eevee",
        de: "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布",
        ko: "이브이",
        ja: "イーブイ"
    },
    stage: "Stage1",
    description: {
        en: "Sylveon cuts an elegant figure as it dances lightly around, feelers fluttering, but its piercing moves aim straight for its opponents’ weak spots.",
        fr: "Nymphali a une silhouette élégante alors qu'il danse légèrement, palpitant, mais ses mouvements perçants visent directement les points faibles de ses adversaires.",
        es: "Sylveon tiene una figura elegante mientras baila ligeramente, con las antenas revoloteando, pero sus movimientos penetrantes apuntan directamente a los puntos débiles de sus oponentes.",
        it: "Sylveon fa una figura elegante mentre danza con leggerezza, agitando le antenne, ma le sue mosse penetranti mirano direttamente ai punti deboli dei suoi avversari.",
        de: "Feelinara macht eine elegante Figur, wenn es mit flatternden Fühlern leicht herumtanzt, seine durchdringenden Bewegungen jedoch direkt auf die Schwachstellen seiner Gegner zielen.",
        "pt-br": "Sylveon tem uma figura elegante enquanto dança levemente, com as antenas vibrando, mas seus movimentos penetrantes visam diretamente os pontos fracos de seus oponentes.",
        "zh-tw": "仙子伊布的姿態優雅，舞動輕盈，觸角飄動，但其刺穿的招式卻直指對手的弱點。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Soothing Ribbon",
                fr: "Ruban apaisant",
                es: "Cinta calmante",
                it: "Nastro lenitivo",
                de: "Beruhigendes Band",
                "pt-br": "Fita Calmante",
                "zh-tw": "治癒緞帶"
            },
            effect: {
                en: "Once during your turn, if this Pokémon has a Pokémon Tool attached, you may heal 30 damage from 1 of your Pokémon.",
                fr: "Une fois pendant votre tour, si ce Pokémon a un Outil Pokémon attaché, vous pouvez soigner 30 dégâts d'un de vos Pokémon.",
                es: "Una vez durante tu turno, si este Pokémon tiene una Herramienta Pokémon adjunta, puedes curar 30 daños de 1 de tus Pokémon.",
                it: "Una sola volta durante il tuo turno, se questo Pokémon ha un Oggetto Pokémon assegnato, puoi curare 1 dei tuoi Pokémon da 30 danni.",
                de: "Wenn an diesem Pokémon einmal während deines Zuges ein Pokémon-Werkzeug angebracht ist, kannst du 30 Schadenspunkte bei einem deiner Pokémon heilen.",
                "pt-br": "Uma vez durante o seu turno, se este Pokémon tiver uma Ferramenta Pokémon anexada, você poderá curar 30 pontos de dano de 1 dos seus Pokémon.",
                "zh-tw": "在你的回合中，如果這隻寶可夢附有寶可夢工具，你可以從你的 1 隻寶可夢那裡治療 30 點傷害。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Magical Shot",
                fr: "Coup Magique",
                es: "Disparo Mágico",
                it: "Magicolpo",
                de: "Magischer Schuss",
                "pt-br": "Tiro Mágico",
                "zh-tw": "魔法射擊"
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
