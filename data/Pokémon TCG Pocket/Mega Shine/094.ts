import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/094",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/094",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/094",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/094",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/094",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/094",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2b/094"
    },
    name: {
        en: "Rapidash",
        fr: "Galopa",
        es: "Rapidash",
        it: "Rapidash",
        de: "Gallopa",
        "pt-br": "Rapidash",
        "zh-tw": "烈焰馬",
        ko: "날쌩마",
        ja: "ギャロップ"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 100,
    types: ["Fire"],
    dexId: [78],
    evolveFrom: {
        en: "Ponyta",
        fr: "Ponyta",
        es: "Ponyta",
        it: "Ponyta",
        de: "Ponita",
        "pt-br": "Ponyta",
        "zh-tw": "小火馬",
        ko: "포니타",
        ja: "ポニータ"
    },
    stage: "Stage1",
    description: {
        en: "The fastest runner becomes the leader, and it decides the herd’s pace and direction of travel.",
        fr: "Au sein d’un troupeau, c’est le plus rapide qui\ndevient le chef. Il choisit les lieux où se rendre\net détermine la vitesse de galop.",
        es: "El ejemplar más rápido se convierte en el líder\nde la manada y decide tanto el ritmo de galope\ncomo su destino.",
        it: "L’esemplare più veloce diventa il capo del\ngruppo e ne decide velocità e destinazione.",
        de: "Das schnellste Exemplar wird zum Anführer\nbestimmt und gibt als solcher den Zielort und\ndie Geschwindigkeit der Herde vor.",
        "pt-br": "O corredor mais rápido se torna o líder e decide o ritmo do rebanho e a direção da viagem.",
        "zh-tw": "奔跑速度最快的烈焰馬\n會成為首領，決定族群\n前往的地點和奔跑速度。"
    },
    attacks: [
        {
            cost: ["Fire"],
            name: {
                en: "Overdrive Smash",
                fr: "Boost Atomisant",
                es: "Sacudida Superdirecta",
                it: "Devastacolpo",
                de: "Turbosmash",
                "pt-br": "Golpe Exaustivo",
                "zh-tw": "超頻擊碎"
            },
            effect: {
                en: "During your next turn, this Pokémon's Overdrive Smash attack does +30 damage.",
                fr: "Lors de votre prochain tour, l'attaque Overdrive Smash de ce Pokémon inflige +30 dégâts.",
                es: "Durante tu próximo turno, el ataque Overdrive Smash de este Pokémon hace +30 de daño.",
                it: "Durante il tuo prossimo turno, l'attacco Overdrive Smash di questo Pokémon infligge +30 danni.",
                de: "Während deines nächsten Zuges verursacht der Overdrive-Smash-Angriff dieses Pokémon +30 Schaden.",
                "pt-br": "Durante o seu próximo turno, o ataque Overdrive Smash deste Pokémon causa +30 de dano.",
                "zh-tw": "在你的下一個回合中，這只寶可夢的超速粉碎攻擊造成+30點傷害。"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
