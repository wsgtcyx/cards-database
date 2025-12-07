import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Gligar",
        "fr": "Gligare",
        "es": "Gligar",
        "it": "Gligar",
        "de": "Gligar",
        "pt-br": "Gligar",
        "zh-tw": "格利加爾"
    },
    illustrator: "Mina Nakai",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    description: {
        en: "It usually clings to cliffs. When it spots its prey,\nit spreads its wings and glides down to attack.",
        "fr": "Il s'accroche généralement aux falaises. Lorsqu'il repère sa proie,\nil déploie ses ailes et glisse pour attaquer.",
        "es": "Suele aferrarse a los acantilados. Cuando ve a su presa,\nextiende sus alas y se desliza hacia abajo para atacar.",
        "it": "Di solito si aggrappa alle scogliere. Quando individua la sua preda,\nallarga le ali e plana per attaccare.",
        "de": "Es haftet normalerweise an Klippen. Wenn es seine Beute entdeckt,\nEs breitet seine Flügel aus und gleitet zum Angriff herab.",
        "pt-br": "Geralmente se agarra a penhascos. Quando avista sua presa,\nele abre as asas e desliza para atacar.",
        "zh-tw": "它通常緊貼懸崖。當它發現獵物時，\n它展開翅膀並滑翔下來進行攻擊。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Glide",
                "fr": "Glisser",
                "es": "Planeo",
                "it": "Scivolare",
                "de": "Gleiten",
                "pt-br": "Deslizar",
                "zh-tw": "滑行"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
