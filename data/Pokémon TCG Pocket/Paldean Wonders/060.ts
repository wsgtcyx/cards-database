import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/060",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/060",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/060",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/060",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/060",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/060"
    },
    name: {
        en: "Toedscruel",
        fr: "Terracruel",
        es: "Toedscruel",
        it: "Toedscruel",
        de: "Tenterra",
        "pt-br": "Toedscruel",
        "zh-tw": "陸地水母",
        pt: "Toedscruel",
        'es-mx': "Toedscruel"
    },
    illustrator: "Kouki Saitou",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Fighting"],
    dexId: [949],
    evolveFrom: {
        en: "Toedscool",
        fr: "Terracool",
        es: "Toedscool",
        it: "Toedscool",
        de: "Tentagra",
        "pt-br": "Toedscool",
        "zh-tw": "原野水母",
        pt: "Toedscool",
        'es-mx': "Toedscool"
    },
    description: {
        en: "It coils its 10 tentacles around prey and sucks out their nutrients, causing the prey pain. The folds along the rim of its head are a popular delicacy.",
        "fr": "Il enroule ses 10 tentacules autour de ses proies et aspire leurs nutriments, provoquant des douleurs chez celles-ci. Les plis le long du bord de sa tête sont un mets très apprécié.",
        "es": "Enrolla sus 10 tentáculos alrededor de su presa y succiona sus nutrientes, causándole dolor. Los pliegues a lo largo del borde de su cabeza son un manjar popular.",
        "it": "Avvolge i suoi 10 tentacoli attorno alla preda e ne succhia i nutrienti, provocandole dolore. Le pieghe lungo il bordo della testa sono una prelibatezza popolare.",
        "de": "Es windet seine zehn Tentakel um die Beute und saugt deren Nährstoffe aus, was der Beute Schmerzen bereitet. Die Falten am Kopfrand sind eine beliebte Delikatesse.",
        "pt-br": "Ele enrola seus 10 tentáculos em torno da presa e suga seus nutrientes, causando dor à presa. As dobras ao longo da borda da cabeça são uma iguaria popular.",
        "zh-tw": "它用 10 條觸手盤繞獵物並吸走獵物的營養，使獵物感到疼痛。其頭部邊緣的褶皺是一種受歡迎的美味佳餚。"
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Stun Spore",
                fr: "Para-Spore",
                es: "Paralizador",
                it: "Paralizzante",
                de: "Stachelspore",
                "pt-br": "Esporo de atordoamento",
                "zh-tw": "擊暈孢子",
                'es-mx': "Paralizador",
                pt: "Esporos Atordoantes"
            },
            damage: "70",
            cost: ["Fighting", "Fighting", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
                fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
                es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
                it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
                de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
                "pt-br": "Jogue uma moeda. Se der cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
                "zh-tw": "拋一枚硬幣。如果正面，則對手的戰鬥寶可夢現在處於麻痺狀態。",
                'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado.",
                pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado."
            },
        },
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20",
        },
    ],
    retreat: 2,
};
export default card;
