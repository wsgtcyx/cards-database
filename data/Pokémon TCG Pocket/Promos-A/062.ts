import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    name: {
        en: "Farfetch'd",
        fr: "Canarticho",
        es: "Farfetch'd",
        it: "Farfetch'd",
        de: "Porenta",
        'pt-br': "Farfetch'd",
        ko: "파오리",
        "zh-tw": "大蔥鴨",
    },
    illustrator: "Eri Yamaki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "The stalk this Pokémon carries in its wings serves\nas a sword to cut down opponents. In a dire\nsituation, the stalk can also serve as food.",
        fr: "Il tranche ses adversaires avec sa tige, qu'il manie comme\nune épée. Quand la situation l'exige, il s'en nourrit.",
        es: "Blande el puerro que sujeta con un ala como si\nse tratase de una espada para rebanar a su rival.\nEn caso de necesidad, se lo come para nutrirse.",
        it: "Colpisce gli avversari con un gambo, che\nbrandisce con l'ala come se fosse una spada.\nIn caso di necessità, può anche mangiarselo.",
        de: "Unter seinem Flügel trägt es eine Lauchstange,\ndie es wie ein Schwert gegen Feinde einsetzt und\nwelche ihm im Bedarfsfall auch als Nahrung dient.",
        'pt-br': "O caule que este Pokémon carrega em suas asas\nserve como uma espada para cortar seus oponentes.\nEm situações difíceis, ele também pode servir como alimento.",
        ko: "날개로 쥐고 있는 파 줄기를\n칼처럼 휘둘러 상대를 베어버린다.\n몹시 허기질 때는 먹기도 한다.",
        "zh-tw": "這只神奇寶貝翅膀上的莖是用來服務的\n作為砍倒對手的利劍。在一個可怕的\n這種情況下，莖也可以當食物。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Leek Slap",
                fr: "Coup d'Oignon",
                es: "Bofetada de Puerro",
                it: "Porrosberla",
                de: "Lauchschlag",
                'pt-br': "Golpe Alho Poró",
                ko: "파로 때리기",
                "zh-tw": "韭菜拍打"
            },
            damage: 40,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["vol7"]
};
export default card;
