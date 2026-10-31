import { Card } from "../../../interfaces";
import Set from "../Special Pack: First Partners";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/SP1/012",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/SP1/012",
        es: "https://game.pokemontcgpocket.app/es/tcgp/SP1/012",
        it: "https://game.pokemontcgpocket.app/it/tcgp/SP1/012",
        de: "https://game.pokemontcgpocket.app/de/tcgp/SP1/012",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/SP1/012",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/SP1/012",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/SP1/012",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/SP1/012"
    },
    name: {
        en: "Piplup",
        fr: "Tiplouf",
        es: "Piplup",
        "pt-br": "Piplup",
        "zh-tw": "波加曼",
        ja: "ポッチャマ",
        ko: "팽도리",
        it: "Piplup",
        de: "Plinfa"
    },
    illustrator: "Saboteri",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: [
        "Water"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Peck",
                fr: "Picpic",
                es: "Picotazo",
                it: "Beccata",
                de: "Pikser",
                "pt-br": "Bicada",
                "zh-tw": "啄",
                ja: "つつく",
                ko: "쪼기"
            },
            cost: [
                "Water"
            ],
            damage: 20
        }
    ],
    abilities: [],
    description: {
        en: "Because it is very proud, it hates accepting food from people. Its thick down guards it from cold.",
        fr: "D'un tempérament fier, il déteste que des êtres humains lui offrent de la nourriture. Son duvet épais le protège du froid.",
        es: "Es muy orgulloso, por lo que odia aceptar comida de la gente. Su grueso plumón lo protege del frío.",
        it: "È molto orgoglioso e odia accettare cibo dalla gente. La folta piuma lo protegge dal freddo.",
        de: "Sein stark ausgeprägter Stolz hält es davon ab, von Menschen Futter anzunehmen. Die dicke Daunenschicht schützt es vor Kälte.",
        "pt-br": "Por ser muito orgulhoso, detesta aceitar comida das pessoas. A sua penugem espessa o protege do frio.",
        "zh-tw": "自尊心很強，討厭從人類手中接受食物。厚厚的絨毛能抵禦寒冷。",
        ja: "プライドが 高く 人から 食べ物を もらう ことを 嫌う。 長い 産毛が 寒さを 防ぐ。",
        ko: "자존심이 강해서 사람에게\n먹이를 얻는 것을 싫어한다.\n긴 솜털이 추위를 막는다."
    }
};

export default card;
