import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/040",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/040",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/040",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/040",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/040",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/040"
    },
    name: {
        en: "Cryogonal",
        "fr": "Cryogonal",
        "es": "criogonal",
        "it": "Criogonale",
        "de": "Kryogonal",
        "pt-br": "Criogonal",
        "zh-tw": "冷凍"
    },
    illustrator: "Kagemaru Himeno",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Water"],
    description: {
        en: "Cryogonal uses its chains of ice to constrict its\nopponents and then flash-freezes them where\nthey stand.",
        "fr": "Cryogonal utilise ses chaînes de glace pour resserrer ses\nadversaires, puis les gèle en flash là où\nils se tiennent debout.",
        "es": "Cryogonal usa sus cadenas de hielo para restringir su\noponentes y luego los congela instantáneamente donde\nestán de pie.",
        "it": "Cryogonal usa le sue catene di ghiaccio per restringersi\navversari e poi li congela dove\nstanno.",
        "de": "Cryogonal nutzt seine Eisketten, um es zu verengen\nGegner und friert sie dann blitzschnell ein\nsie stehen.",
        "pt-br": "Cryogonal usa suas cadeias de gelo para contrair seu\noponentes e depois os congela onde\neles ficam.",
        "zh-tw": "Cryogonal 使用其冰鏈來收縮其\n對手，然後將他們凍結在哪裡\n他們站著。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Frozen Lock",
                "fr": "Serrure gelée",
                "es": "Bloqueo congelado",
                "it": "Blocco congelato",
                "de": "Gefrorenes Schloss",
                "pt-br": "Bloqueio Congelado",
                "zh-tw": "冰凍鎖"
            },
            damage: 20,
            cost: ["Water"],
            effect: {
                en: "During your opponent's next turn, they can't play any Item cards from their hand.",
                "fr": "Lors du prochain tour de votre adversaire, il ne pourra jouer aucune carte Objet de sa main.",
                "es": "Durante el próximo turno de tu oponente, no puede jugar ninguna carta de Objeto de su mano.",
                "it": "Durante il prossimo turno del tuo avversario, questi non potrà giocare alcuna carta Oggetto dalla sua mano.",
                "de": "Während des nächsten Zuges deines Gegners kann er keine Gegenstandskarten aus seiner Hand spielen.",
                "pt-br": "Durante o próximo turno do seu oponente, ele não poderá jogar nenhuma carta de Item da sua mão.",
                "zh-tw": "在對手的下一個回合中，他們不能從手上打出任何物品卡。"
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1
};
export default card;
