import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/002",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/002",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/002",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/002",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/002",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/002",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3b/002",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B3b/002",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B3b/002"
    },
    name: {
        en: "Metapod",
        fr: "Chrysacier",
        es: "Metapod",
        it: "Metapod",
        de: "Safcon",
        "pt-br": "Metapod",
        "zh-tw": "鐵甲蛹",
        ko: "단데기",
        ja: "トランセル"
    },
    illustrator: "Asako Ito",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    dexId: [11],
    evolveFrom: {
        en: "Caterpie",
        fr: "Chenipan",
        es: "Caterpie",
        it: "Caterpie",
        de: "Raupy",
        "pt-br": "Caterpie",
        "zh-tw": "綠毛蟲",
        ko: "캐터피",
        ja: "キャタピー"
    },
    stage: "Stage1",
    description: {
        en: "Even though it is encased in a sturdy shell, the body inside is tender. It can’t withstand a harsh attack.",
        fr: "Bien que son corps soit entouré d’une carapace\nsolide, l’intérieur est si mou qu’il ne résisterait\npas à une attaque violente.",
        es: "Aunque cuenta con una coraza muy dura, tiene\nun cuerpo bastante blando. Un ataque violento\npuede acabar con él.",
        it: "La corazza esterna è robusta ma l’interno\nè molle. Per questo non è in grado di resistere\nad attacchi particolarmente veementi.",
        de: "In seiner harten Schale ist ein weicher Körper.\nEinem brutalen Angriff hat es nichts\nentgegenzusetzen.",
        "pt-br": "Embora esteja envolto em uma concha resistente, o corpo por dentro é macio. Não pode resistir a um ataque severo.",
        "zh-tw": "雖然有堅硬的外殼，\n但因為殼裡的身體很軟，\n所以無法抵抗強力的攻擊。",
        ja: "硬い 殻に 包まれているが 中身は 軟らかいので 強い 攻撃には 耐えられない。",
        ko: "단단한 껍질로 둘러싸여 있지만\n안은 부드럽기 때문에\n강한 공격에는 버티지 못한다."
    },
    attacks: [
        {
            cost: ["Grass"],
            name: {
                en: "Ram",
                fr: "Collision",
                es: "Apisonar",
                it: "Carica",
                de: "Ramme",
                "pt-br": "Aríete",
                "zh-tw": "衝撞",
                ja: "ぶつかる",
                ko: "부딪치기"
            },
            damage: 30
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
