import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/076",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/076",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/076",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/076",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/076",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/076",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/076"
    },
    name: {
        en: "Revavroom",
        fr: "Vrombotor",
        es: "Revavroom",
        it: "Revavroom",
        de: "Knattatox",
        'pt-br': "Revavroom",
        "zh-tw": "普隆隆姆",
        ko: "부르르룸"
    },
    illustrator: "Anesaki Dynamic",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Metal"],
    dexId: [966],
    evolveFrom: {
        en: "Varoom",
        fr: "Vrombi",
        es: "Varoom",
        it: "Varoom",
        de: "Knattox",
        "pt-br": "Varoom",
        "zh-tw": "噗隆隆",
        pt: "Varoom"
    },
    description: {
        en: "Revavroom viciously threatens others with the sound of its exhaust. It sticks its tongue out from its cylindrical mouth and sprays toxic fluids.",
        "fr": "Vrombotor menace vicieusement les autres avec le bruit de son échappement. Il sort sa langue de sa bouche cylindrique et pulvérise des fluides toxiques.",
        "es": "Revavroom amenaza brutalmente a otros con el sonido de su escape. Saca la lengua de su boca cilíndrica y rocía fluidos tóxicos.",
        "it": "Revavroom minaccia ferocemente gli altri con il suono del suo scarico. Tira fuori la lingua dalla bocca cilindrica e spruzza fluidi tossici.",
        "de": "Knattatox bedroht andere brutal mit dem Geräusch seines Auspuffs. Es streckt seine Zunge aus seinem zylindrischen Mund heraus und versprüht giftige Flüssigkeiten.",
        "pt-br": "Revavroom ameaça violentamente os outros com o som de seu escapamento. Ele coloca a língua para fora da boca cilíndrica e borrifa fluidos tóxicos.",
        "zh-tw": "普隆隆姆用排氣聲惡毒地威脅別人。它從圓柱形的嘴中伸出舌頭並噴出有毒液體。"
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Poison Gas",
                fr: "Gaz Toxik",
                es: "Gas Venenoso",
                it: "Velenogas",
                de: "Giftwolke",
                'pt-br': "Gás Venenoso",
                "zh-tw": "毒氣",
                ko: "독가스"
            },
            damage: "50",
            cost: ["Metal", "Colorless"],
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
                es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
                it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
                de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Envenenado.",
                "zh-tw": "你對手的戰鬥寶可夢現在中毒了。",
                pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
                'es-mx': "El Pokémon Activo de tu rival ahora está Envenenado."
            },
        },
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20",
        },
    ],
    retreat: 2,
};
export default card;
