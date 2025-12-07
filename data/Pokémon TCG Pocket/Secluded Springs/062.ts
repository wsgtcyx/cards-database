import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Miltank",
        "fr": "Réservoir à lait",
        "es": "Miltank",
        "it": "Miltank",
        "de": "Miltank",
        "pt-br": "Miltank",
        "zh-tw": "米爾坦克"
    },
    illustrator: "Kouki Saitou",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Colorless"],
    description: {
        en: "Miltank produces highly nutritious milk, so it's\nbeen supporting the lives of people and other\nPokémon since ancient times.",
        "fr": "Miltank produit du lait très nutritif, c'est donc\nsoutenu la vie des gens et d'autres\nPokémon depuis l'Antiquité.",
        "es": "Miltank produce leche altamente nutritiva, por lo que es\nestado apoyando la vida de las personas y otros\nPokémon desde la antigüedad.",
        "it": "Miltank produce latte altamente nutriente, quindi è così\nhanno sostenuto la vita di persone e altri\nPokémon fin dai tempi antichi.",
        "de": "Miltank produziert hochnährstoffreiche Milch\nunterstützt das Leben von Menschen und anderen\nPokémon seit der Antike.",
        "pt-br": "Miltank produz leite altamente nutritivo, por isso é\ntem apoiado a vida de pessoas e outros\nPokémon desde os tempos antigos.",
        "zh-tw": "Miltank 生產高營養牛奶，因此\n一直在支持人們和其他人的生活\n自古以來的神奇寶貝。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Rolling Frenzy",
                "fr": "Frénésie roulante",
                "es": "Frenesí rodante",
                "it": "Frenesia rotolante",
                "de": "Rollende Raserei",
                "pt-br": "Frenesi rolante",
                "zh-tw": "滾滾狂亂"
            },
            damage: 10,
            cost: ["Colorless"],
            effect: {
                en: "Until this Pokémon leaves the Active Spot, this Pokémon's Rolling Frenzy attack does +30 damage. This effect stacks.",
                "fr": "Jusqu'à ce que ce Pokémon quitte le point actif, son attaque Rolling Frenzy inflige +30 dégâts. Cet effet se cumule.",
                "es": "Hasta que este Pokémon abandone el Punto Activo, su ataque Frenesí Rodante causa +30 de daño. Este efecto se acumula.",
                "it": "Finché questo Pokémon non lascia la posizione attiva, il suo attacco Frenesia Rotolante infligge +30 danni. Questo effetto è cumulabile.",
                "de": "Bis dieses Pokémon den aktiven Bereich verlässt, verursacht der Angriff „Rollende Raserei“ dieses Pokémon +30 Schaden. Dieser Effekt ist stapelbar.",
                "pt-br": "Até que este Pokémon deixe o Ponto Ativo, o ataque Rolling Frenzy deste Pokémon causa +30 de dano. Este efeito acumula.",
                "zh-tw": "在該寶可夢離開活動點之前，該寶可夢的翻滾狂暴攻擊造成+30點傷害。該效果可以疊加。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 3
};
export default card;
