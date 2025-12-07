import { Card } from "../../../interfaces";
import Set from "../Celestial Guardians";
const card: Card = {
    set: Set,
    name: {
        en: "Garbodor",
        fr: "Miasmax",
        es: "Garbodor",
        it: "Garbodor",
        de: "Deponitox",
        'pt-br': "Garbodor",
        ko: "더스트나",
        "zh-tw": "灰塵山",
    },
    illustrator: "match",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Darkness"],
    evolveFrom: {
        en: "Trubbish",
        "fr": "Trubbish",
        "es": "basura",
        "it": "Sciocchezza",
        "de": "Trubbisch",
        "pt-br": "Trubo",
        "zh-tw": "垃圾"
    },
    description: {
        en: "This Pokémon eats trash, which turns into poison inside its body. The main component of the poison depends on what sort of trash was eaten.",
        fr: "Il produit du poison dans son corps à partir\ndes ordures qu'il ingurgite. Selon ce qu'il\nmange, la composition des toxines diffère.",
        es: "Su cuerpo transforma la inmundicia que engulle en un\nveneno cuya composición cambia según la basura ingerida.",
        it: "Mangia spazzatura e la trasforma in un veleno la cui\ncomposizione cambia a seconda di cosa ha ingurgitato.",
        de: "Es frisst Müll und verdaut ihn in seinem Inneren zu Gift.\nJe nach Art des Mülls, den es verzehrt, ändern sich die\nHauptbestandteile des Giftes.",
        'pt-br': "Este Pokémon se alimenta de lixo, que transforma\nem veneno dentro do seu corpo. O componente principal\ndo veneno depende do tipo de lixo que comeu.",
        ko: "먹은 쓰레기가 체내에서 독으로\n변화한다. 먹은 쓰레기에 따라\n독의 주성분도 바뀐다.",
        "zh-tw": "這只神奇寶貝吃垃圾，垃圾在體內變成毒藥。毒物的主要成分取決於所吃的垃圾種類。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Super Poison Breath",
                fr: "Super Haleine Empoisonnée",
                es: "Aliento Supervenenoso",
                it: "Super Velenospiro",
                de: "Super-Gifthauch",
                'pt-br': "Super-hálito Venenoso",
                ko: "독의숨",
                "zh-tw": "超級毒息"
            },
            damage: 70,
            cost: ["Darkness", "Darkness", "Colorless"],
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
                es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
                it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
                de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
                ko: "상대의 배틀 포켓몬을 독으로 만든다.",
                'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
                "zh-tw": "你對手的主動神奇寶貝現在中毒了。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 3,
    boosters: ["solgaleo", "lunala"]
};
export default card;
