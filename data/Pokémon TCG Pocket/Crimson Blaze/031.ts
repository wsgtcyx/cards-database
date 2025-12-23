import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Mismagius",
        "fr": "Magirêve",
        "es": "Mismagius",
        "it": "Mismagius",
        "de": "Traunmagil",
        "pt-br": "Mismagius",
        "zh-tw": "夢妖魔"
    },
    illustrator: "Ligton",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Psychic"],
    evolveFrom: {
        en: "Misdreavus",
        "fr": "Feuforêve",
        "es": "Misdreavus",
        "it": "Misdreavus",
        "de": "Traunfugil",
        "pt-br": "Misdreavus",
        "zh-tw": "夢妖"
    },
    description: {
        en: "Its cries sound like incantations to torment the\nfoe. It appears where you least expect it.",
        "fr": "Ses cris sonnent comme des incantations pour tourmenter le\nennemi. Il apparaît là où on l'attend le moins.",
        "es": "Sus gritos suenan como encantamientos para atormentar al\nenemigo. Aparece donde menos te lo esperas.",
        "it": "Le sue grida sembrano incantesimi per tormentare i\nnemico. Appare dove meno te lo aspetti.",
        "de": "Seine Schreie klingen wie Beschwörungsformeln zur Qual\nFeind. Es erscheint dort, wo Sie es am wenigsten erwarten.",
        "pt-br": "Seus gritos soam como encantamentos para atormentar o\ninimigo. Aparece onde você menos espera.",
        "zh-tw": "它的叫聲聽起來就像是在折磨人的咒語\n敵人。它會出現在您最意想不到的地方。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Stored Power",
                "fr": "Puissance stockée",
                "es": "Energía almacenada",
                "it": "Potenza immagazzinata",
                "de": "Gespeicherte Energie",
                "pt-br": "Energia Armazenada",
                "zh-tw": "儲存電量"
            },
            damage: 60,
            cost: ["Psychic", "Psychic"],
            effect: {
                en: "Move all {P} Energy from this Pokémon to 1 of your Benched Pokémon.",
                "fr": "Déplacez toutes les {P} Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
                "es": "Mueve toda la Energía {P} de este Pokémon a 1 de tus Pokémon en Banca.",
                "it": "Sposta tutte le Energie {P} da questo Pokémon a 1 dei tuoi Pokémon in panchina.",
                "de": "Verschiebe alle {P}-Energien von diesem Pokémon auf 1 deiner Bank-Pokémon.",
                "pt-br": "Mova todas as Energias {P} deste Pokémon para 1 dos seus Pokémon no Banco.",
                "zh-tw": "將這只神奇寶貝的所有 {P} 能量轉移到你後備的 1 只神奇寶貝上。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
