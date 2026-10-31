import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3a/001",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3a/001",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3a/001",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3a/001",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3a/001",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3a/001",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3a/001",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3a/001",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3a/001"
    },
    name: {
        en: "Petilil",
        "fr": "Chlorobule",
        "es": "Petilil",
        "it": "Petilil",
        "de": "Lilminip",
        "pt-br": "Petilil",
        "zh-tw": "百合根娃娃",
        ja: "チュリネ",
        ko: "치릴리",
    },
    illustrator: "sui",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    description: {
        en: "The leaves on its head grow right back even if\nthey fall out. These bitter leaves refresh those\nwho eat them.",
        "fr": "Les feuilles sur sa tête repoussent même si\nils tombent. Ces feuilles amères rafraîchissent ceux\nqui les mange.",
        "es": "Las hojas de su cabeza vuelven a crecer incluso si\nse caen. Estas hojas amargas refrescan aquellos\nquienes los comen.",
        "it": "Le foglie sulla sua testa ricrescono anche se\ncadono. Queste foglie amare li rinfrescano\nche li mangiano.",
        "de": "Die Blätter auf seinem Kopf wachsen gleich wieder nach, auch wenn\nsie fallen heraus. Diese bitteren Blätter erfrischen diese\nwer sie isst.",
        "pt-br": "As folhas em sua cabeça voltam a crescer, mesmo que\neles caem. Estas folhas amargas refrescam aqueles\nquem os come.",
        "zh-tw": "即使它頭上的葉子馬上又長出來\n他們會掉下來。這些苦澀的葉子使那些\n誰吃它們。",
        ja: "抜け落ちても すぐに 生えてくる 頭の 葉っぱは とても 苦いが かじれば すぐ 元気に なれる。",
        ko: "빠져도 바로 자라나는\n머리의 잎사귀는 아주 쓰지만\n갉아 먹으면 바로 기운이 난다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Seed Bomb",
                "fr": "Bombe à graines",
                "es": "Bomba de semillas",
                "it": "Bomba di semi",
                "de": "Samenbombe",
                "pt-br": "Bomba de sementes",
                "zh-tw": "種子炸彈",
                ja: "タネばくだん",
                ko: "씨폭탄"
            },
            damage: 20,
            cost: ["Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
