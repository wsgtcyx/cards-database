import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Blissey",
        "fr": "Bonheur",
        "es": "Blissey",
        "it": "Beatitudine",
        "de": "Blissey",
        "pt-br": "Felicidade",
        "zh-tw": "布利西"
    },
    illustrator: "Natsumi Yoshida",
    rarity: "One Star",
    category: "Pokemon",
    hp: 150,
    types: ["Colorless"],
    evolveFrom: {
        en: "Chansey",
        "fr": "Chansey",
        "es": "Chansey",
        "it": "Chansey",
        "de": "Chansey",
        "pt-br": "Chansey",
        "zh-tw": "錢西"
    },
    description: {
        en: "Anyone who takes even one taste of Blissey's\negg becomes unfailingly caring and pleasant\nto everyone.",
        "fr": "Quiconque prend ne serait-ce qu'un avant-goût de Blissey's\nl'œuf devient toujours attentionné et agréable\nà tout le monde.",
        "es": "Cualquiera que pruebe aunque sea una vez el Blissey's\nel huevo se vuelve siempre cariñoso y agradable\na todos.",
        "it": "Chiunque prenda anche solo un assaggio di Blissey\nl'uovo diventa immancabilmente premuroso e piacevole\na tutti.",
        "de": "Jeder, der Blissey's auch nur einmal probiert\nEi wird stets fürsorglich und angenehm\nan alle.",
        "pt-br": "Qualquer um que experimente o Blissey's\novo torna-se infalivelmente carinhoso e agradável\npara todos.",
        "zh-tw": "任何嚐過 Blissey’s 味道的人\n雞蛋變得始終如一的關懷和愉快\n給大家。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Energy Blow",
                "fr": "Coup d'énergie",
                "es": "Golpe de energía",
                "it": "Colpo energetico",
                "de": "Energieschlag",
                "pt-br": "Golpe de Energia",
                "zh-tw": "能量打擊"
            },
            damage: 20,
            cost: ["Colorless", "Colorless", "Colorless"],
            effect: {
                en: "This attack does 20 more damage for each Energy attached to this Pokémon.",
                "fr": "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée à ce Pokémon.",
                "es": "Este ataque hace 20 puntos de daño más por cada Energía unida a este Pokémon.",
                "it": "Questo attacco infligge 20 danni in più per ogni Energia assegnata a questo Pokémon.",
                "de": "Dieser Angriff fügt 20 weitere Schadenspunkte für jede an dieses Pokémon angelegte Energie zu.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada Energia ligada a este Pokémon.",
                "zh-tw": "該寶可夢身上每附加一個能量，該攻擊就會造成 20 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 4,
    boosters: ["ho-oh"]
};
export default card;
