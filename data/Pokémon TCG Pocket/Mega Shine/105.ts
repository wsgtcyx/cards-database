import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/105",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/105",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/105",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/105",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/105",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/105",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2b/105",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2b/105",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2b/105"
    },
    name: {
        en: "Dratini",
        fr: "Minidraco",
        es: "Dratini",
        it: "Dratini",
        de: "Dratini",
        "pt-br": "Dratini",
        "zh-tw": "迷你龍",
        ko: "미뇽",
        ja: "ミニリュウ"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Dragon"],
    dexId: [147],
    stage: "Basic",
    description: {
        en: "It is born large to start with. It repeatedly sheds its skin as it steadily grows longer.",
        fr: "Il est né grand pour commencer. Il perd sa peau à plusieurs reprises à mesure qu’il grandit régulièrement.",
        es: "Para empezar, nace grande. Muda repetidamente su piel a medida que crece constantemente.",
        it: "È nato grande per cominciare. Cambia ripetutamente la pelle mentre si allunga costantemente.",
        de: "Von Anfang an wird es groß geboren. Während es immer länger wird, häutet es sich immer wieder.",
        "pt-br": "Para começar, nasce grande. Ele troca de pele repetidamente à medida que cresce continuamente.",
        "zh-tw": "它一開始就很大。隨著它不斷變長，它會不斷地蛻皮。",
        ja: "生まれたときから すでに 大きい。 脱皮を 繰り返しては どんどん 育って 長くなる。",
        ko: "태어났을 때부터 이미 크다.\n탈피를 반복해서\n점점 자라나 길어진다."
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Tail Strike",
                fr: "Attaque Caudale",
                es: "Impacto Cola",
                it: "Codastocco",
                de: "Schwanzstreich",
                "pt-br": "Golpe de Cauda",
                "zh-tw": "擺尾刺擊",
                ja: "しっぽでつく",
                ko: "꼬리로찌르기"
            },
            effect: {
                en: "Flip a coin. If heads, this attack does 20 more damage.",
                fr: "Lancez une pièce de monnaie. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
                es: "Lanza una moneda. Si sale cara, este ataque hace 20 daños más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
                de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 20 Schadenspunkte mehr zu.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 20 de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，這次攻擊會造成 20 點額外傷害。",
                ja: "コインを1回投げオモテなら、20ダメージ追加。",
                ko: "동전을 1번 던져서 앞면이 나오면 20데미지를 추가한다."
            },
            damage: "10+"
        }
    ],
    retreat: 1
};

export default card;
