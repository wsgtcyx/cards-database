import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Hydreigon",
        "fr": "Hydreigon",
        "es": "Hydreigon",
        "it": "Idreigon",
        "de": "Dreieck",
        "pt-br": "Hidroreigon",
        "zh-tw": "三頭龍",
    },
    illustrator: "matazo",
    rarity: "One Star",
    category: "Pokemon",
    hp: 150,
    types: ["Darkness"],
    evolveFrom: {
        en: "Zweilous",
        "fr": "Zweilous",
        "es": "Zweilous",
        "it": "Zweilous",
        "de": "Zweilous",
        "pt-br": "Zweilous",
        "zh-tw": "雙頭龍",
    },
    description: {
        en: "It's said that Hydreigon grew ferocious because\npeople in times long past loathed it, considering\nit to be evil incarnate and attacking it relentlessly.",
        "fr": "On dit que Hydreigon est devenu féroce parce que\nautrefois, les gens le détestaient, considérant\nc'est le mal incarné et l'attaquant sans relâche.",
        "es": "Se dice que Hydreigon se volvió feroz porque\nla gente de tiempos pasados lo detestaba, considerando\nes el mal encarnado y lo ataca implacablemente.",
        "it": "Si dice che Hydreigon sia diventato feroce perché\nla gente in tempi lontani lo detestava, considerandolo\nessere il male incarnato e attaccarlo incessantemente.",
        "de": "Man sagt, Hydreigon sei wild geworden, weil\nDie Menschen in längst vergangenen Zeiten verabscheuten es, wenn man bedenkt\nes als das inkarnierte Böse zu betrachten und es unerbittlich anzugreifen.",
        "pt-br": "Dizem que Hydreigon ficou feroz porque\nas pessoas em tempos passados ​​odiavam isso, considerando\né o mal encarnado e ataca-o implacavelmente.",
        "zh-tw": "據說 Hydeigon 變得兇猛是因為\n很久以前的人們厭惡它，考慮到\n它是邪惡的化身，並對其進行無情的攻擊。"
    },
    stage: "Stage2",
    abilities: [{
            type: "Ability",
            name: {
                en: "Roar in Unison",
                "fr": "Rugissez à l’unisson",
                "es": "Rugido al unísono",
                "it": "Ruggisci all'unisono",
                "de": "Brüllen Sie im Einklang",
                "pt-br": "Rugir em uníssono",
                "zh-tw": "齊聲咆哮"
            },
            effect: {
                en: "Once during your turn, you may take 2 {D} Energy from your Energy Zone and attach it to this Pokémon. If you do, do 30 damage to this Pokémon.",
                "fr": "Une fois pendant votre tour, vous pouvez prendre 2 {D} Énergie de votre Zone d'Énergie et les attacher à ce Pokémon. Si vous le faites, infligez 30 dégâts à ce Pokémon.",
                "es": "Una vez durante tu turno, puedes tomar 2 {D} Energía de tu Zona de Energía y unirlas a este Pokémon. Si lo haces, hazle 30 daños a este Pokémon.",
                "it": "Una sola volta durante il tuo turno, puoi prendere 2 Energie {D} dalla tua Zona Energetica e assegnarle a questo Pokémon. Se lo fai, infliggi 30 danni a questo Pokémon.",
                "de": "Einmal während deines Zuges kannst du 2 {D}-Energie aus deiner Energiezone nehmen und an dieses Pokémon anlegen. Wenn du dies tust, füge diesem Pokémon 30 Schadenspunkte zu.",
                "pt-br": "Uma vez durante o seu turno, você pode pegar 2 {D} Energias da sua Zona de Energia e associá-las a este Pokémon. Se fizer isso, cause 30 de dano a este Pokémon.",
                "zh-tw": "在你的回合中，你可以從你的能量區取出 2 個 {D} 能量並將其附加到這只神奇寶貝身上。這樣做的話，對該寶可夢造成 30 點傷害。"
            }
        }],
    attacks: [{
            name: {
                en: "Hyper Ray",
                "fr": "Hyper Rayon",
                "es": "hiperrayo",
                "it": "Iper raggio",
                "de": "Hyper Ray",
                "pt-br": "Hiper Raio",
                "zh-tw": "超射線"
            },
            damage: 130,
            cost: ["Darkness", "Darkness", "Darkness"],
            effect: {
                en: "Discard all Energy from this Pokémon.",
                "fr": "Défaussez toute l'énergie de ce Pokémon.",
                "es": "Descarta toda la Energía de este Pokémon.",
                "it": "Scarta tutte le Energie da questo Pokémon.",
                "de": "Lege die gesamte Energie dieses Pokémon ab.",
                "pt-br": "Descarte todas as Energias deste Pokémon.",
                "zh-tw": "丟棄該神奇寶貝的所有能量。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
