import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/177",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/177",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/177",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/177",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/177",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/177",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/177",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4/177",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4/177"
    },
    name: {
        en: "Spinarak",
        "fr": "Mimigal",
        "es": "Spinarak",
        "it": "Spinarak",
        "de": "Webarak",
        "pt-br": "Spinarak",
        "zh-tw": "圓絲蛛",
        ja: "イトマル",
        ko: "페이검",
    },
    illustrator: "IKEDA Saki",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    description: {
        en: "It lies still in the same pose for days in its web,\nwaiting for its unsuspecting prey to wander close.",
        "fr": "Il reste dans la même pose pendant des jours dans sa toile,\nattendant que sa proie sans méfiance s'approche.",
        "es": "Sigue en la misma postura durante días en su red,\nesperando que su presa desprevenida se acerque.",
        "it": "Giace ancora per giorni nella stessa posa nella sua rete,\naspettando che la sua ignara preda si avvicini.",
        "de": "Es liegt tagelang still in der gleichen Pose in seinem Netz,\nEr wartet darauf, dass seine ahnungslose Beute näherkommt.",
        "pt-br": "Ele permanece na mesma posição por dias em sua teia,\nesperando que sua presa desavisada se aproxime.",
        "zh-tw": "它在網上好幾天都保持同樣的姿勢，\n等待毫無戒心的獵物靠近。",
        ja: "獲物が 近くを 通りかかるまで 自分の 巣で 何日も 同じ 格好で じっと 待ち続ける。",
        ko: "먹이가 근처를 지나갈 때까지\n자신의 둥지에서 며칠이고 같은\n모습으로 가만히 기다린다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Pierce",
                "fr": "Percer",
                "es": "Atravesar",
                "it": "Forare",
                "de": "Pierce",
                "pt-br": "Perfurar",
                "zh-tw": "刺穿",
                ja: "つきさす",
                ko: "궤찌르기"
            },
            damage: 20,
            cost: ["Darkness"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
