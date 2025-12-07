import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Fletchinder",
        "fr": "Fletchinder",
        "es": "Fletchinder",
        "it": "Fletchinder",
        "de": "Fletchinder",
        "pt-br": "Fletchinder",
        "zh-tw": "火箭雀",
    },
    illustrator: "5ban Graphics",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fire"],
    evolveFrom: {
        en: "Fletchling",
        "fr": "Empennage",
        "es": "Fletchling",
        "it": "Fletchling",
        "de": "Fletchling",
        "pt-br": "Fletchling",
        "zh-tw": "弗萊奇林"
    },
    description: {
        en: "Fletchinder scatters embers in tall grass\nwhere bug Pokémon might be hiding and\nthen catches them as they come leaping out.",
        "fr": "Fletchinder disperse des braises dans les herbes hautes\noù les Pokémon bugs pourraient se cacher et\npuis les attrape alors qu'ils sautent.",
        "es": "Fletchinder esparce brasas en la hierba alta\ndónde podrían esconderse los Pokémon bichos y\nluego los atrapa cuando salen saltando.",
        "it": "Fletchinder sparge la brace nell'erba alta\ndove potrebbero nascondersi i Pokémon bug e\npoi li coglie mentre saltano fuori.",
        "de": "Fletchinder streut Glut ins hohe Gras\nwo sich Käfer-Pokémon verstecken könnten und\nDann fängt er sie auf, als sie herausspringen.",
        "pt-br": "Fletchinder espalha brasas na grama alta\nonde Pokémon insetos podem estar escondidos e\nentão os pega quando eles saltam.",
        "zh-tw": "弗萊欽德將餘燼撒在高高的草叢中\n蟲子寶可夢可能藏身的地方以及\n然後在他們跳出來時抓住他們。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Fire Wing",
                "fr": "Aile de feu",
                "es": "Ala de fuego",
                "it": "Ala dei vigili del fuoco",
                "de": "Feuerwehrflügel",
                "pt-br": "Asa de Fogo",
                "zh-tw": "火翼"
            },
            damage: 40,
            cost: ["Fire"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
