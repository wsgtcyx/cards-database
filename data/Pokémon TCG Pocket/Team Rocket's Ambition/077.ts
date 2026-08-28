import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/077",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/077",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/077",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/077",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/077",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/077",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/077"
    },
    name: {
        en: "Happiny",
        fr: "Ptiravi",
        es: "Happiny",
        it: "Happiny",
        de: "Wonneira",
        "pt-br": "Happiny",
        "zh-tw": "小福蛋",
        ko: "핑복",
        ja: "ピンプク"
    },
    illustrator: "Narumi Sato",
    rarity: "One Star",
    category: "Pokemon",
    hp: 30,
    types: ["Colorless"],
    dexId: [440],
    stage: "Basic",
    description: {
        en: "It carefully carries a round, white rock that it thinks is an egg. It's bothered by how curly its hair looks.",
        fr: "Il prend soin de ses bouclettes et couve son petit caillou blanc comme si c'était son Euf.",
        es: "Cuida de una pequeña roca blanca y redonda creyendo que es un huevo. Le gusta arreglarse el tirabuzón.",
        it: "Trasporta con cura un sasso bianco e tondo trattandolo come un uovo. Adora il ricciolo che ha in testa.",
        de: "Es hält den runden, weißen Stein für ein Ei und kümmert sich um ihn. Es achtet sehr auf seine Haarlocke.",
        "pt-br": "Carrega cuidadosamente uma pedra branca e redonda que pensa ser um ovo. Fica incomodada com a aparência de seu cabelo enrolado.",
        "zh-tw": "深信白白圓圓的石頭是蛋，很小心翼翼地拿著。很在意自己捲毛的形狀。"
    },
    attacks: [
        {
            name: {
                en: "Chubby Cheer",
                fr: "Soutien qui Ravit",
                es: "Ovación Ovalada",
                it: "Incitamento Paffutello",
                de: "Kugeljubel",
                "pt-br": "Torcida Fofa",
                "zh-tw": "福福聲援"
            },
            effect: {
                en: "During your next turn, attacks used by your Pokémon do +20 damage to your opponent's Active Pokémon.",
                fr: "Pendant votre prochain tour, les attaques de vos Pokémon infligent + 20 dégâts au Pokémon Actif de votre adversaire.",
                es: "Durante tu próximo turno, los ataques de tus Pokémon hacen +20 puntos de daño al Pokémon Activo de tu rival.",
                it: "Durante il tuo prossimo turno, gli attacchi usati dai tuoi Pokémon infliggono +20 danni al Pokémon attivo del tuo avversario.",
                de: "Während deines nächsten Zuges fügen Attacken deiner Pokémon dem Aktiven Pokémon deines Gegners + 20 Schadenspunkte zu.",
                "pt-br": "Durante o seu próximo turno, os ataques usados pelos seus Pokémon causarão +20 pontos de dano ao Pokémon Ativo do seu oponente.",
                "zh-tw": "在下個自己的回合,自己的寶可夢使用的招式,對對手的戰鬥寶可夢造成的傷害+20點。"
            },
            damage: 10
        }
    ],
    retreat: 0
};

export default card;
