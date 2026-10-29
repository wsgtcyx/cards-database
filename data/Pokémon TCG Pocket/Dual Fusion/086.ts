import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/086",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/086",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/086",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/086",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/086",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/086",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/086"
    },
    name: {
        en: "Seviper",
        fr: "Séviper",
        es: "Seviper",
        "pt-br": "Seviper",
        "zh-tw": "飯匙蛇",
        ja: "ハブネーク",
        ko: "세비퍼",
        it: "Seviper",
        de: "Vipitis"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 80,
    types: [
        "Darkness"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Venomous Fang",
                fr: "Croc-Poison",
                es: "Colmillo Nocivo",
                it: "Dentevelenoso",
                de: "Gifthauer",
                "pt-br": "Dente Venenoso",
                "zh-tw": "毒牙",
                ja: "Venomous Fang",
                ko: "Venomous Fang"
            },
            cost: [
                "Darkness",
                "Darkness"
            ],
            damage: 40,
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
                es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
                it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
                de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Envenenado.",
                "zh-tw": "將對手的戰鬥寶可夢中毒。",
                ja: "Your opponent's Active Pokémon is now Poisoned.",
                ko: "Your opponent's Active Pokémon is now Poisoned."
            }
        }
    ],
    abilities: [],
    description: {
        en: "It sharpens its swordlike tail on hard rocks. It hides in tall grass and strikes at unwary prey with venomous fangs.",
        fr: "Il affûte sa queue tranchante comme une épée sur les rochers et se cache dans les hautes herbes pour attaquer sa proie avec ses crocs venimeux.",
        es: "Usa rocas para afilarse la cola en forma de espada. Sale de la hierba de repente y ataca con sus colmillos tóxicos.",
        it: "Affila la coda simile a una lama usando le rocce più dure. Striscia nascosto nell'erba alta, attaccando le prede con le sue zanne velenose.",
        de: "Es schärft den klingenartigen Schwanz an Steinen. Im Dickicht versteckt nähert es sich ahnungsloser Beute und greift diese mit seinen Giftzähnen an.",
        "pt-br": "Sua cauda semelhante a uma espada é afiada em pedras rígidas. Esconde-se em grama alta e surpreende as vítimas com suas presas venenosas.",
        "zh-tw": "平時都用堅硬的岩石打磨刀刃般的尾巴。會躲在草叢裡，然後趁對手靠近時用毒牙襲擊。",
        ja: "It sharpens its swordlike tail on hard rocks. It hides in tall grass and strikes at unwary prey with venomous fangs.",
        ko: "It sharpens its swordlike tail on hard rocks. It hides in tall grass and strikes at unwary prey with venomous fangs."
    }
};

export default card;
