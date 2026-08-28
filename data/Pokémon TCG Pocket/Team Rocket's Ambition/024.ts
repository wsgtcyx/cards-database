import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/024",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/024",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/024",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/024",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/024",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/024",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/024"
    },
    name: {
        en: "Team Rocket's Pincurchin",
        fr: "Wattapik de la Team Rocket",
        es: "Pincurchin del Team Rocket",
        it: "Pincurchin del Team Rocket",
        de: "Team Rockets Britzigel",
        "pt-br": "Pincurchin da Equipe Rocket",
        "zh-tw": "火箭隊的啪嚓海膽",
        ko: "로켓단의 찌르성게",
        ja: "ロケット団のバチンウニ"
    },
    illustrator: "Ayako Ozaki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Lightning"],
    stage: "Basic",
    description: {
        en: "This Pokémon is so timid that even brushing against seaweed will make it discharge electricity in surprise. Its lips do not conduct electricity.",
        fr: "Il est si peureux que s'il effleure des algues, cela le surprend et il libère une décharge. Ses lévres ne conduisent pas l'électricité.",
        es: "Es tan cobarde que le basta con rozar un alga a la deriva para asustarse y liberar descargas. Sus labios no conducen la electricidad.",
        it: "È talmente fifone che gli basta sfiorare un'alga per emettere scariche elettriche dallo spavento. Le sue labbra non conducono elettricità.",
        de: "Es ist so furchtsam, dass es schon durch die bloße Berührung mit einer Alge vor Schreck Strom entlädt. Seine Lippen leiten keine Elektrizität.",
        "pt-br": "Este Pokémon é tão timido que até encostar em algas marinhas o fará descarregar eletricidade no susto. Seus lábios não conduzem eletricidade.",
        "zh-tw": "生性膽小，光是碰到海藻屑就足以讓牠嚇得放電。嘴唇不會導電。"
    },
    attacks: [
        {
            cost: ["Lightning"],
            name: {
                en: "Poison Jab",
                fr: "Direct Toxik",
                es: "Puya Nociva",
                it: "Velenpuntura",
                de: "Gifthieb",
                "pt-br": "Golpe Envenenado",
                "zh-tw": "毒擊"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
                es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
                it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
                de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Envenenado.",
                "zh-tw": "將對手的戰鬥寶可夢中毒。"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
