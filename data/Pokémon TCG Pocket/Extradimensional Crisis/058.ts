import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3a/058",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3a/058",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3a/058",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3a/058",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3a/058",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3a/058"
    },
    name: {
        en: "Bewear",
        "fr": "Chelours",
        "es": "Bewear",
        "it": "Bewear",
        "de": "Kosturso",
        "pt-br": "Bewear",
        "zh-tw": "穿著熊",
    },
    illustrator: "Ryuta Fuse",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Colorless"],
    evolveFrom: {
        en: "Stufful",
        "fr": "Bourré",
        "es": "Relleno",
        "it": "Stupendo",
        "de": "Stoffig",
        "pt-br": "Recheado",
        "zh-tw": "童偶熊",
    },
    description: {
        en: "Once it accepts you as a friend, it tries to show\nits affection with a hug. Letting it do that is\ndangerous—it could easily shatter your bones.",
        "fr": "Une fois qu'il vous accepte comme ami, il essaie de vous montrer\nson affection avec un câlin. Le laisser faire, c'est\ndangereux – cela pourrait facilement briser vos os.",
        "es": "Una vez que te acepta como amigo, intenta mostrarte\nsu cariño con un abrazo. Dejarlo hacer eso es\npeligroso: fácilmente podría destrozarle los huesos.",
        "it": "Una volta che ti accetta come amico, cerca di mostrarlo\nil suo affetto con un abbraccio. Lasciarlo fare è così\npericoloso: potrebbe facilmente frantumarti le ossa.",
        "de": "Sobald es dich als Freund akzeptiert, versucht es es zu zeigen\nseine Zuneigung mit einer Umarmung. Das heißt, es tun zu lassen\ngefährlich – es könnte einem leicht die Knochen brechen.",
        "pt-br": "Depois de aceitar você como amigo, ele tenta mostrar\nseu carinho com um abraço. Deixar fazer isso é\nperigoso - pode facilmente quebrar seus ossos.",
        "zh-tw": "一旦它接受你為朋友，它就會試圖表現出\n它的愛是一個擁抱。讓它這樣做就是\n危險——它很容易打碎你的骨頭。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Superpowered Hug",
                "fr": "Câlin surpuissant",
                "es": "Abrazo superpoderoso",
                "it": "Un abbraccio superpotente",
                "de": "Übermächtige Umarmung",
                "pt-br": "Abraço Superpoderoso",
                "zh-tw": "超強擁抱"
            },
            cost: ["Colorless", "Colorless", "Colorless"],
            effect: {
                en: "Flip 2 coins. If both of them are heads, your opponent's Active Pokémon is Knocked Out.",
                "fr": "Lancez 2 pièces. Si les deux sont face, le Pokémon Actif de votre adversaire est mis K.O.",
                "es": "Lanza 2 monedas. Si ambos salen cara, el Pokémon Activo de tu rival queda Fuera de Combate.",
                "it": "Lancia 2 monete. Se esce testa entrambi, il Pokémon attivo del tuo avversario viene messo KO.",
                "de": "Wirf 2 Münzen. Wenn beide Köpfe sind, wird das Aktive Pokémon deines Gegners kampfunfähig gemacht.",
                "pt-br": "Jogue 2 moedas. Se ambos derem cara, o Pokémon Ativo do seu oponente será Nocauteado.",
                "zh-tw": "翻轉 2 個硬幣。如果兩者都是正面，則對手的活躍神奇寶貝被擊倒。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 3
};
export default card;
