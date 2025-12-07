import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    name: {
        en: "Exeggcute",
        fr: "Noeunoeuf",
        es: "Exeggcute",
        it: "Exeggcute",
        de: "Owei",
        ko: "아라리",
        'pt-br': "Exeggcute",
        "zh-tw": "蛋蛋可愛"
    },
    illustrator: "0313",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Grass"],
    description: {
        en: "Though it may look like it's just a bunch of eggs,\nit's a proper Pokémon. Exeggcute communicates\nwith others of its kind via telepathy, apparently.",
        fr: "Même s'il ressemble à un tas d'œufs,\nil s'agit bien d'un Pokémon. Il paraît qu'ils\ncommuniquent entre eux par télépathie.",
        es: "Pese a su aspecto de mera piña de huevos,\nse trata de un Pokémon. Al parecer, sus\ncabezas se comunican entre sí por telepatía.",
        it: "Somiglia a un mucchio di uova, ma è\nun Pokémon a tutti gli effetti. Pare che\ncomunichi con i suoi simili telepaticamente.",
        de: "Owei mag zwar Eiern ähneln, ist aber ein echtes\nPokémon, das aus sechs Individuen besteht, die\nwohl telepathisch miteinander kommunizieren.",
        ko: "알처럼 보이지만 엄연한\n포켓몬이다. 텔레파시로\n동료와 교신하는 듯하다.",
        'pt-br': "Apesar de parecer só um monte de ovos, é um Pokémon\nde verdade. Exeggcute se comunica com outros de sua\nespécie por meio de telepatia.",
        "zh-tw": "雖然看起來只是一堆雞蛋，\n這是一隻真正的神奇寶貝。 Exeggcute 溝通\n顯然，是通過心靈感應與其他同類進行交流。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Growth Spurt",
                fr: "Jaillissement",
                es: "Crecimiento Repentino",
                it: "Crescita Inaspettata",
                de: "Wachstumsschub",
                ko: "조금성장",
                'pt-br': "Estirão",
                "zh-tw": "成長突飛猛進"
            },
            cost: ["Colorless"],
            effect: {
                en: "Take a {G} Energy from your Energy Zone and attach it to this Pokémon.",
                fr: "Prenez une Énergie {G} de votre zone Énergie et attachez-la à ce Pokémon.",
                es: "Une 1 Energía {G} de tu área de Energía a este Pokémon.",
                it: "Prendi un'Energia {G} dalla tua Zona Energia e assegnala a questo Pokémon.",
                de: "Lege 1 {G}-Energie aus deinem Energiebereich an dieses Pokémon an.",
                ko: "자신의 에너지존에서 {G}에너지를 1개 내보내 이 포켓몬에게 붙인다.",
                'pt-br': "Pegue 1 Energia {G} da sua Zona de Energia e ligue-a a este Pokémon.",
                "zh-tw": "從你的能量區取出一個{G}能量並將其附加到這只神奇寶貝身上。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["vol7"]
};
export default card;
