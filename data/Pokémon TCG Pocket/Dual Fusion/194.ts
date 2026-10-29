import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/194",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/194",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/194",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/194",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/194",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/194",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/194"
    },
    name: {
        en: "Pachirisu",
        fr: "Pachirisu",
        es: "Pachirisu",
        "pt-br": "Pachirisu",
        "zh-tw": "帕奇利茲",
        ja: "パチリス",
        ko: "파치리스",
        it: "Pachirisu",
        de: "Pachirisu"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 70,
    types: [
        "Lightning"
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
                en: "Crackling Snap",
                fr: "Crépitement Démolissant",
                es: "Chasquido Chispeante",
                it: "Crepitio Elettrico",
                de: "Knisternder Knall",
                "pt-br": "Estalo Estalante",
                "zh-tw": "啪滋打亂",
                ja: "Crackling Snap",
                ko: "Crackling Snap"
            },
            cost: [
                "Lightning"
            ],
            damage: "30+",
            effect: {
                en: "Discard the top card of your deck, and if that card is an Item, this attack does 20 more damage.",
                fr: "Défaussez la carte du dessus de votre deck. Si c'est une carte Objet, cette attaque inflige 20 dégâts supplémentaires.",
                es: "Descarta la primera carta de tu baraja. Si es una carta de Objeto, este ataque hace 20 puntos de daño más.",
                it: "Scarta la prima carta del tuo mazzo. Se è una carta Strumento, questo attacco infligge 20 danni in più.",
                de: "Lege die oberste Karte deines Decks ab. Wenn jene Karte ein Item ist, fügt diese Attacke 20 Schadenspunkte mehr zu.",
                "pt-br": "Descarte a carta de cima do seu baralho e, se aquela carta for uma carta de Item, este ataque causará 20 pontos de dano a mais.",
                "zh-tw": "將自己的牌庫上方1張卡丟棄,若那張卡為物品卡,則增加20點傷害。",
                ja: "Discard the top card of your deck, and if that card is an Item, this attack does 20 more damage.",
                ko: "Discard the top card of your deck, and if that card is an Item, this attack does 20 more damage."
            }
        }
    ],
    abilities: [],
    description: {
        en: "A pair may be seen rubbing their cheek pouches together in an effort to share stored electricity.",
        fr: "Il arrive que deux Pachirisu se frottent les joues pour partager l'électricité qu'ils ont accumulée.",
        es: "A veces se ve a dos frotándose las bolsas de las mejillas para compartir electricidad almacenada.",
        it: "A volte si possono osservare esemplari che si sfregano a vicenda le sacche sulle guance per condividere l'elettricità immagazzinata.",
        de: "Mitunter kann man beobachten, wie zwei Pachirisu ihre Backentaschen aneinanderreiben, um gespeicherte Elektrizität zu teilen.",
        "pt-br": "É possível ver dois deles esfregando seus bolsões nas bochechas um do outro em um esforço para compartilhar a eletricidade armazenada.",
        "zh-tw": "有時候可以見到 為了將儲存的電力分給同伴 而互相摩擦臉頰的帕奇利茲。",
        ja: "A pair may be seen rubbing their cheek pouches together in an effort to share stored electricity.",
        ko: "A pair may be seen rubbing their cheek pouches together in an effort to share stored electricity."
    }
};

export default card;
