import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/050",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/050",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/050",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/050",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/050",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/050",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2b/050"
    },
    name: {
        en: "Revavroom",
        fr: "Vrombotor",
        es: "Revavroom",
        it: "Revavroom",
        de: "Knattatox",
        "pt-br": "Revavroom",
        "zh-tw": "普隆隆姆",
        ko: "부르르룸",
        ja: "ブロロローム"
    },
    illustrator: "DOM",
    rarity: "Three Diamond",
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
        ko: "부르롱",
        ja: "ブロロン"
    },
    stage: "Stage1",
    description: {
        en: "Revavroom viciously threatens others with the sound of its exhaust. It sticks its tongue out from its cylindrical mouth and sprays toxic fluids.",
        fr: "Vrombotor menace vicieusement les autres avec le bruit de son échappement. Il sort sa langue de sa bouche cylindrique et pulvérise des fluides toxiques.",
        es: "Revavroom amenaza brutalmente a otros con el sonido de su escape. Saca la lengua de su boca cilíndrica y rocía fluidos tóxicos.",
        it: "Revavroom minaccia ferocemente gli altri con il suono del suo scarico. Tira fuori la lingua dalla bocca cilindrica e spruzza fluidi tossici.",
        de: "Knattatox bedroht andere brutal mit dem Geräusch seines Auspuffs. Es streckt seine Zunge aus seinem zylindrischen Mund heraus und versprüht giftige Flüssigkeiten.",
        "pt-br": "Revavroom ameaça violentamente os outros com o som de seu escapamento. Ele coloca a língua para fora da boca cilíndrica e borrifa fluidos tóxicos.",
        "zh-tw": "普隆隆姆用排氣聲惡毒地威脅別人。它從圓柱形的嘴中伸出舌頭並噴出有毒液體。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Metal Transport",
                fr: "Transport de métaux",
                es: "Transporte de metales",
                it: "Trasporto di metalli",
                de: "Metalltransport",
                "pt-br": "Transporte Metálico",
                "zh-tw": "金屬搬運"
            },
            effect: {
                en: "Once during your turn, you may switch your Active {M} Pokémon with 1 of your Benched Pokémon.",
                fr: "Une fois pendant votre tour, vous pouvez échanger votre Pokémon {M} Actif avec 1 de votre Pokémon de Banc.",
                es: "Una vez durante tu turno, puedes cambiar tu Pokémon Activo {M} por 1 de tus Pokémon en Banca.",
                it: "Una sola volta durante il tuo turno, puoi scambiare il tuo Pokémon attivo {M} con 1 dei tuoi Pokémon in panchina.",
                de: "Einmal während deines Zuges kannst du dein aktives {M}-Pokémon gegen 1 deiner Bank-Pokémon austauschen.",
                "pt-br": "Uma vez durante o seu turno, você pode trocar seu Pokémon Ativo {M} por 1 dos seus Pokémon no Banco.",
                "zh-tw": "在你的回合中，你可以將你的活躍 {M} 寶可夢與你的 1 個後備寶可夢交換。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Metal", "Colorless"],
            name: {
                en: "Outta-Control Dash",
                fr: "Ruée Incontrôlable",
                es: "A Todo Gas",
                it: "Corsa Senza Freni",
                de: "Furioses Flitzen",
                "pt-br": "Investida Desgovernada",
                "zh-tw": "暴躁衝刺"
            },
            damage: 60
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
