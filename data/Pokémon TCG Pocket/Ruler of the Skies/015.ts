import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/015",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/015",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/015",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/015",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/015"
    },
    name: {
        en: "Dhelmise",
        fr: "Sinistrail",
        es: "Dhelmise",
        it: "Dhelmise",
        de: "Moruda",
        "pt-br": "Dhelmise",
        "zh-tw": "破破舵輪",
        ko: "타타륜",
        ja: "ダダリン"
    },
    illustrator: "Kyoko Umemoto",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Grass"],
    dexId: [781],
    stage: "Basic",
    description: {
        en: "After lowering its anchor, it waits for its prey. It catches large Wailord and drains their life-force.",
        fr: "Il tend des guets-apens à ses proies en larguant\nson ancre dans la mer. Il peut absorber l’énergie\nvitale de grosses proies comme Wailord.",
        es: "Acecha a su presa hundiendo el ancla en el mar.\nEs capaz de drenar la vitalidad incluso de presas\ndel tamaño de un Wailord.",
        it: "Cattura le prede calando la sua ancora in mare.\nRiesce ad assorbire l’energia vitale persino\ndi Pokémon enormi come Wailord.",
        de: "Im Meer wirft es seinen Anker aus und legt sich\nauf die Lauer. Es fängt sich möglichst große Beute\nwie Wailord und saugt ihr die Lebensenergie aus.",
        "zh-tw": "把錨拋到海裡，伏擊獵物。\n會去捕捉巨大的吼鯨王，\n吸取牠們的精氣。"
    },
    attacks: [
        {
            cost: ["Grass", "Grass", "Colorless"],
            name: {
                en: "Spinning Attack",
                fr: "Attaque Tournante",
                es: "Ataque Giratorio",
                it: "Attacco Rotante",
                de: "Rundumangriff",
                "pt-br": "Ataque Giratório",
                "zh-tw": "迴轉攻擊"
            },
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
