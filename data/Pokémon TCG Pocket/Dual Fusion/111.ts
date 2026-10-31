import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/111",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/111",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/111",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/111",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/111",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/111",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/111",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/111"
    },
    name: {
        en: "Snorlax",
        fr: "Ronflex",
        es: "Snorlax",
        "pt-br": "Snorlax",
        "zh-tw": "卡比獸",
        ja: "カビゴン",
        ko: "잠만보",
        it: "Snorlax",
        de: "Relaxo"
    },
    illustrator: "0313",
    rarity: "Two Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 130,
    types: [
        "Colorless"
    ],
    stage: "Basic",
    retreat: 3,
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Body Slam",
                fr: "Plaquage",
                es: "Golpe Cuerpo",
                it: "Corposcontro",
                de: "Bodyslam",
                "pt-br": "Pancada Corporal",
                "zh-tw": "泰山壓頂",
                ja: "のしかかり",
                ko: "Body Slam"
            },
            cost: [
                "Colorless",
                "Colorless",
                "Colorless",
                "Colorless"
            ],
            damage: 80,
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
                fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
                es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
                it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
                de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
                "pt-br": "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
                "zh-tw": "擲1次硬幣若為正面,則將對手的戰鬥寶可夢麻痺。",
                ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
                ko: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
            }
        }
    ],
    abilities: [],
    description: {
        en: "This gluttonous Pokémon eats constantly, apart from when it’s asleep. It devours nearly 900 pounds of food per day.",
        fr: "Quand il ne dort pas, ce glouton passe son temps à manger. Il peut ingurgiter jusqu’à 400 kg de nourriture en une seule journée.",
        es: "Este Pokémon es un glotón que lo único que hace aparte de comer es dormir. Puede ingerir hasta 400 kg de comida en un solo día.",
        it: "È un ghiottone che smette di mangiare solo per dormire. Divora ben 400 kg di cibo al giorno.",
        de: "Dieser Nimmersatt isst unentwegt, wenn er nicht gerade schläft. Relaxo verschlingt mehr als 400 kg Nahrung am Tag.",
        "pt-br": "Este Pokémon glutão come constantemente, exceto quando está dormindo. Devora cerca de 400 kg de comida por dia.",
        "zh-tw": "除了睡著時之外，總是不斷在進食，最多一天能吃光400公斤食物的大胃王。",
        ja: "眠っているとき以外は つねに エサを 食べている 大食らい。 １日に ４００キロも たいらげる。",
        ko: "This gluttonous Pokémon eats constantly, apart from when it’s asleep. It devours nearly 900 pounds of food per day."
    }
};

export default card;
