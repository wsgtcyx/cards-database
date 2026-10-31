import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3b/096",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3b/096",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3b/096",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3b/096",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3b/096",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3b/096",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3b/096",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3b/096",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3b/096"
    },
    name: {
        en: "Electrode",
        "fr": "Électrode",
        "es": "Electrode",
        "it": "Electrode",
        "de": "Lektrobal",
        "pt-br": "Electrode",
        "zh-tw": "頑皮雷彈",
        ja: "マルマイン",
        ko: "붐볼",
    },
    illustrator: "Scav",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 80,
    types: ["Lightning"],
    evolveFrom: {
        en: "Voltorb",
        "fr": "Voltorbe",
        "es": "Voltorb",
        "it": "Voltorb",
        "de": "Voltobal",
        "pt-br": "Voltorb",
        "zh-tw": "霹靂電球",
        ja: "ビリリダマ",
        ko: "찌리리공",
    },
    description: {
        en: "The more energy it charges up, the faster\nit gets. But this also makes it more likely\nto explode.",
        "fr": "Plus il charge d'énergie, plus vite\nça arrive. Mais cela rend également plus probable\nexploser.",
        "es": "Cuanta más energía cargue, más rápido\nse pone. Pero esto también hace que sea más probable\npara explotar.",
        "it": "Più energia si carica, più velocemente\nottiene. Ma questo lo rende anche più probabile\nesplodere.",
        "de": "Je mehr Energie es auflädt, desto schneller\nes wird. Aber das macht es auch wahrscheinlicher\nexplodieren.",
        "pt-br": "Quanto mais energia ele carrega, mais rápido\nfica. Mas isso também torna mais provável\nexplodir.",
        "zh-tw": "充電的能量越多，速度就越快\n它得到了。但這也使得更有可能\n爆炸。",
        ja: "電気エネルギーを 溜めこむほど 高速で 動けるようになるが そのぶん 爆発 しやすい。",
        ko: "전기 에너지를 모을수록\n고속으로 이동할 수 있게 되나\n그만큼 폭발하기도 쉬워진다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Rolling Attack",
                "fr": "Attaque roulante",
                "es": "Ataque rodante",
                "it": "Attacco rotolante",
                "de": "Rollender Angriff",
                "pt-br": "Ataque Rolante",
                "zh-tw": "滾動攻擊",
                ja: "ボールアタック",
                ko: "볼어택"
            },
            damage: 50,
            cost: ["Lightning"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
