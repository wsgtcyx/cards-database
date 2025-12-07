import { Card } from "../../../interfaces";
import Set from "../Celestial Guardians";
const card: Card = {
    set: Set,
    name: {
        en: "Trevenant",
        fr: "Desséliande",
        es: "Trevenant",
        it: "Trevenant",
        de: "Trombork",
        'pt-br': "Trevenant",
        ko: "대로트",
        "zh-tw": "朽木妖",
    },
    illustrator: "Shin Nagasawa",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Grass"],
    evolveFrom: {
        en: "Phantump",
        "fr": "Fantôme",
        "es": "Fantasma",
        "it": "Phantump",
        "de": "Phantump",
        "pt-br": "Fantasma",
        "zh-tw": "小木靈",
    },
    description: {
        en: "People fear it due to a belief that it devours any who try to cut down trees in its forest, but to the Pokémon it shares its woods with, it's kind.",
        fr: "Les bûcherons qui viennent couper des arbres\nen forêt ont peur d'être dévorés par Desséliande.\nIl est gentil avec les Pokémon habitant les bois.",
        es: "Los humanos lo temen porque devora a\nquienes osen talar los árboles, pero es amable\ncon los Pokémon que habitan en el bosque.",
        it: "Gli esseri umani lo temono perché mangia chi abbatte gli alberi.\nTuttavia è sempre gentile con i Pokémon che vivono nei boschi.",
        de: "Es wird dafür gefürchtet, Menschen zu fressen,\ndie Bäume im Wald fällen. Zu den Pokémon,\ndie den Wald bewohnen, ist es aber stets nett.",
        'pt-br': "Este Pokémon é temido porque acreditam que devorará\nqualquer pessoa que ousar cortar árvores na sua floresta.\nPorém, é muito gentil com os outros Pokémon da floresta.",
        ko: "숲에서 나무를 베는 인간을\n잡아먹는다는 공포의 대상이지만\n숲속에 사는 포켓몬들에게는 상냥하다.",
        "zh-tw": "人們害怕它，因為相信它會吞噬任何試圖在其森林中砍伐樹木的人，但對於與它共享森林的神奇寶貝來說，它是友善的。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Claw Slash",
                fr: "Tranch'Griffe",
                es: "Cuchillada Garra",
                it: "Lacerartiglio",
                de: "Klauenschlitzer",
                'pt-br': "Golpe de Garra",
                ko: "발톱 베어가르기",
                "zh-tw": "利爪斬"
            },
            damage: 80,
            cost: ["Grass", "Grass", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 3,
    boosters: ["solgaleo"]
};
export default card;
