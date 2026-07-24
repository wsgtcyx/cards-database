import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/112",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/112"
    },
    name: {
        en: "Malamar",
        fr: "Sepiatroce",
        es: "Malamar",
        it: "Malamar",
        de: "Calamanero",
        "pt-br": "Malamar",
        "zh-tw": "烏賊王",
        ko: "칼라마네로",
        ja: "カラマネロ"
    },
    illustrator: "Nelnal",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Darkness"],
    dexId: [687],
    evolveFrom: {
        en: "Inkay",
        fr: "Sepiatop",
        es: "Inkay",
        it: "Inkay",
        de: "Iscalar",
        "pt-br": "Inkay",
        "zh-tw": "好啦魷",
        ko: "오케이징",
        ja: "マーイーカ"
    },
    stage: "Stage1",
    description: {
        en: "It flashes the luminescent spots on its body to hypnotize its opponents, gaining total control over them.",
        fr: "Il fait clignoter les points luminescents sur son corps pour hypnotiser ses adversaires, prenant ainsi un contrôle total sur eux.",
        es: "Muestra los puntos luminiscentes de su cuerpo para hipnotizar a sus oponentes y obtener control total sobre ellos.",
        it: "Fa lampeggiare i punti luminescenti sul suo corpo per ipnotizzare i suoi avversari, ottenendo il controllo totale su di loro.",
        de: "Es lässt die leuchtenden Punkte auf seinem Körper aufblitzen, um seine Gegner zu hypnotisieren und die vollständige Kontrolle über sie zu erlangen.",
        "pt-br": "Ele pisca os pontos luminescentes em seu corpo para hipnotizar seus oponentes, ganhando controle total sobre eles.",
        "zh-tw": "它會透過閃爍身體上的發光點來催眠對手，從而完全控制對手。"
    },
    attacks: [
        {
            cost: ["Darkness", "Colorless"],
            name: {
                en: "Evolution Jammer",
                fr: "Bloqueur d'Évolution",
                es: "Interferente de Evolución",
                it: "Evolviblocco",
                de: "Entwicklungsstörer",
                "pt-br": "Atolador de Evolução",
                "zh-tw": "進化妨礙者"
            },
            effect: {
                en: "During your opponent's next turn, they can't play any Pokémon from their hand to evolve their Pokémon.",
                fr: "Lors du prochain tour de votre adversaire, il ne pourra jouer aucun Pokémon de sa main pour faire évoluer son Pokémon.",
                es: "Durante el próximo turno de tu oponente, no puede jugar ningún Pokémon de su mano para evolucionar sus Pokémon.",
                it: "Durante il prossimo turno del tuo avversario, questi non potrà giocare nessun Pokémon dalla sua mano per far evolvere i suoi Pokémon.",
                de: "Während des nächsten Zuges deines Gegners kann er kein Pokémon von seiner Hand spielen, um sein Pokémon weiterzuentwickeln.",
                "pt-br": "Durante o próximo turno do seu oponente, ele não poderá jogar nenhum Pokémon da sua mão para evoluir seus Pokémon.",
                "zh-tw": "在對手的下一個回合中，他們無法使用手中的任何寶可夢來進化他們的寶可夢。"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
