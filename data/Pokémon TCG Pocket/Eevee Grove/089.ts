import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Sylveon ex",
        "fr": "Sylvéon ex",
        "es": "Sylveon ex",
        "it": "Sylveone es",
        "de": "Sylveon ex",
        "pt-br": "Sylveon ex",
        "zh-tw": "西爾文前"
    },
    illustrator: "Yuu Nishida",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 140,
    types: ["Psychic"],
    evolveFrom: {
        en: "Eevee",
        "fr": "Évoli",
        "es": "Eevee",
        "it": "Eevee",
        "de": "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布"
    },
    stage: "Stage1",
    suffix: "EX",
    abilities: [{
            type: "Ability",
            name: {
                en: "Happy Ribbon",
                "fr": "Joyeux ruban",
                "es": "Cinta feliz",
                "it": "Nastro felice",
                "de": "Glückliches Band",
                "pt-br": "Fita Feliz",
                "zh-tw": "快樂絲帶"
            },
            effect: {
                en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may draw 2 cards.",
                "fr": "Une fois pendant votre tour, lorsque vous jouez ce Pokémon depuis votre main pour faire évoluer 1 de vos Pokémon, vous pouvez piocher 2 cartes.",
                "es": "Una vez durante tu turno, cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, podrás robar 2 cartas.",
                "it": "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere 1 dei tuoi Pokémon, puoi pescare 2 carte.",
                "de": "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, darfst du 2 Karten ziehen.",
                "pt-br": "Uma vez durante a sua vez de jogar, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá comprar 2 cartas.",
                "zh-tw": "在你的回合中，當你從手牌中使用這只神奇寶貝來進化你的 1 只神奇寶貝時，你可以抽 2 張卡。"
            }
        }],
    attacks: [{
            name: {
                en: "Fairy Wind",
                "fr": "Fée du vent",
                "es": "viento de hadas",
                "it": "Vento fatato",
                "de": "Feenwind",
                "pt-br": "Vento Fada",
                "zh-tw": "仙風"
            },
            damage: 70,
            cost: ["Psychic", "Colorless"]
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1
};
export default card;
