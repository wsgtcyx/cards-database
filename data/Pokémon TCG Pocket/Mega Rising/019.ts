import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Maractus",
        "fr": "Maractus",
        "es": "maractus",
        "it": "Maratto",
        "de": "Maractus",
        "pt-br": "Maractus",
        "zh-tw": "馬拉克圖斯"
    },
    illustrator: "Shimaris Yukichi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    description: {
        en: "Arid regions are their habitat. They move\nrhythmically, making a sound similar to maracas.",
        "fr": "Les régions arides sont leur habitat. Ils bougent\nrythmiquement, produisant un son semblable aux maracas.",
        "es": "Las regiones áridas son su hábitat. se mueven\nrítmicamente, haciendo un sonido similar a las maracas.",
        "it": "Le regioni aride sono il loro habitat. Si muovono\nritmicamente, emettendo un suono simile alle maracas.",
        "de": "Trockengebiete sind ihr Lebensraum. Sie bewegen sich\nrhythmisch und erzeugt einen Maracas-ähnlichen Klang.",
        "pt-br": "As regiões áridas são o seu habitat. Eles se movem\nritmicamente, fazendo um som semelhante ao das maracas.",
        "zh-tw": "乾旱地區是它們的棲息地。他們移動\n有節奏地發出類似於沙錘的聲音。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Dazzle Dance",
                "fr": "Danse éblouissante",
                "es": "danza deslumbrante",
                "it": "Danza abbagliante",
                "de": "Blendender Tanz",
                "pt-br": "Dança Deslumbrante",
                "zh-tw": "炫舞"
            },
            damage: 40,
            cost: ["Grass", "Colorless"],
            effect: {
                en: "Your opponent's Active Pokémon is now Confused.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Confus.",
                "es": "El Pokémon Activo de tu rival ahora está Confundido.",
                "it": "Il Pokémon attivo del tuo avversario è ora confuso.",
                "de": "Das aktive Pokémon deines Gegners ist jetzt verwirrt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Confuso.",
                "zh-tw": "你對手的活躍神奇寶貝現在處於混亂狀態。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
