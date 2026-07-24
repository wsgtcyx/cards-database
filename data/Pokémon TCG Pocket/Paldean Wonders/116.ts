import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/116",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/116"
    },
    name: {
        en: "Sprigatito",
        fr: "Poussacha",
        es: "Sprigatito",
        it: "Sprigatito",
        de: "Felori",
        'pt-br': "Sprigatito",
        "zh-tw": "新葉喵",
        ko: "나오하"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    dexId: [906],
    description: {
        en: "The sweet scent its body gives off mesmerizes those around it. The scent grows stronger when this Pokémon is in the sun.",
        "fr": "Le doux parfum que dégage son corps envoûte son entourage. L'odeur devient plus forte lorsque ce Pokémon est au soleil.",
        "es": "El dulce aroma que desprende su cuerpo hipnotiza a quienes lo rodean. El olor se vuelve más fuerte cuando este Pokémon está al sol.",
        "it": "Il dolce profumo che emana il suo corpo incanta chi lo circonda. Il profumo diventa più forte quando questo Pokémon è al sole.",
        "de": "Der süße Duft, den sein Körper verströmt, fasziniert die Menschen in seiner Umgebung. Der Duft wird stärker, wenn dieses Pokémon in der Sonne ist.",
        "pt-br": "O doce aroma que seu corpo exala hipnotiza aqueles que o rodeiam. O cheiro fica mais forte quando este Pokémon está ao sol.",
        "zh-tw": "它的身體散發出的甜美氣味讓周圍的人著迷。當這隻寶可夢在陽光下時，氣味會變得更濃。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Leafage",
                fr: "Feuillage",
                es: "Follaje",
                it: "Fogliame",
                de: "Blattwerk",
                'pt-br': "Folhagem",
                "zh-tw": "葉子",
                ko: "나뭇잎"
            },
            damage: 20,
            cost: ["Grass"]
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};
export default card;
