import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    name: {
        en: "Skeledirge",
        fr: "Flâmigator",
        es: "Skeledirge",
        it: "Skeledirge",
        de: "Skelokrok",
        "pt-br": "Skeledirge",
        "zh-tw": "骨紋巨聲鱷",
        pt: "Skeledirge"
    },
    illustrator: "nagimiso",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Fire"],
    dexId: [911],
    evolveFrom: {
        en: "Crocalor",
        fr: "Crocogril",
        es: "Crocalor",
        it: "Crocalor",
        de: "Lokroko",
        "pt-br": "Crocalor",
        "zh-tw": "炙燙鱷",
        pt: "Crocalor"
    },
    description: {
        en: "Skeledirge's gentle singing soothes the souls of all that hear it. It burns its enemies to a crisp with flames of over 5,400 degrees Fahrenheit.",
        "fr": "Le chant doux de Flâmigator apaise l'âme de tous ceux qui l'entendent. Il brûle ses ennemis avec des flammes de plus de 5 400 degrés Fahrenheit.",
        "es": "El suave canto de Skeledirge calma las almas de todos los que lo escuchan. Quema a sus enemigos hasta convertirlos en cenizas con llamas de más de 5.400 grados Fahrenheit.",
        "it": "Il canto gentile di Skeledirge calma le anime di tutti coloro che lo ascoltano. Brucia i suoi nemici fino a farli diventare croccanti con fiamme di oltre 5.400 gradi Fahrenheit.",
        "de": "Der sanfte Gesang von Skelokrok beruhigt die Seelen aller, die ihn hören. Es verbrennt seine Feinde mit Flammen von über 5.400 Grad Fahrenheit.",
        "pt-br": "O canto suave de Skeledirge acalma as almas de todos que o ouvem. Ele queima seus inimigos com chamas de mais de 5.400 graus Fahrenheit.",
        "zh-tw": "骨紋巨聲鱷溫柔的歌聲撫慰著所有聽到它的人的靈魂。它會用超過 5,400 華氏度的火焰將敵人燒成碎片。"
    },
    stage: "Stage2",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Passionate Voice",
                "fr": "Voix passionnée",
                "es": "Voz apasionada",
                "it": "Voce Appassionata",
                "de": "Leidenschaftliche Stimme",
                "pt-br": "Voz Apaixonada",
                "zh-tw": "熱情的聲音"
            },
            effect: {
                en: "Once during your turn, you may discard 1 Fire Energy from this Pokémon in order to use this Ability. During this turn, attacks used by your Fire Pokémon do +50 damage to your opponent's Active Pokémon.",
                "fr": "Une fois pendant votre tour, vous pouvez défausser 1 Énergie Feu de ce Pokémon afin d'utiliser cette Capacité. Durant ce tour, les attaques utilisées par votre Pokémon Feu infligent +50 dégâts au Pokémon Actif de votre adversaire.",
                "es": "Una vez durante tu turno, puedes descartar 1 Energía Fuego de este Pokémon para poder usar esta Habilidad. Durante este turno, los ataques utilizados por tu Pokémon Fuego causan +50 de daño al Pokémon Activo de tu rival.",
                "it": "Una sola volta durante il tuo turno, puoi scartare 1 Energia Fire da questo Pokémon per usare questa abilità. Durante questo turno, gli attacchi usati dai tuoi Pokémon Fire infliggono +50 danni al Pokémon attivo del tuo avversario.",
                "de": "Einmal während deines Zuges kannst du 1 Feuer-Energie von diesem Pokémon abwerfen, um diese Fähigkeit zu nutzen. Während dieser Runde fügen Angriffe deines Feuer-Pokémon dem Aktiven Pokémon deines Gegners +50 Schadenspunkte zu.",
                "pt-br": "Uma vez durante o seu turno, você pode descartar 1 Energia Fire deste Pokémon para usar esta Habilidade. Durante este turno, os ataques usados ​​pelos seus Pokémon de Fogo causam +50 de dano aos Pokémon Ativos do seu oponente.",
                "zh-tw": "在你的回合中，你可以丟棄該寶可夢的 1 個火焰能量來使用此能力。這個回合中，自己的火屬性寶可夢的攻擊對對手的戰鬥寶可夢造成+50點傷害。"
            },
        },
    ],
    attacks: [
        {
            name: {
                en: "Heat Crash",
                fr: "Tacle Feu",
                es: "Golpe Calor",
                it: "Marchiafuoco",
                de: "Brandstempel",
                "pt-br": "Queda de calor",
                "zh-tw": "熱崩潰",
                pt: "Choque de Calor",
                'es-mx': "Golpe de Calor"
            },
            damage: "70",
            cost: ["Fire", "Colorless"],
        },
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20",
        },
    ],
    retreat: 3,
};
export default card;
