import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3a/056",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3a/056",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3a/056",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3a/056",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3a/056",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3a/056",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3a/056",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3a/056",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3a/056"
    },
    name: {
        en: "Stoutland",
        "fr": "Mastouffe",
        "es": "Stoutland",
        "it": "Stoutland",
        "de": "Bissbark",
        "pt-br": "Stoutland",
        "zh-tw": "長毛狗",
        ja: "ムーランド",
        ko: "바랜드",
    },
    illustrator: "Atsuko Nishida",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Colorless"],
    evolveFrom: {
        en: "Herdier",
        "fr": "Ponchien",
        "es": "Herdier",
        "it": "Herdier",
        "de": "Terribark",
        "pt-br": "Herdier",
        "zh-tw": "哈約克",
        ja: "ハーデリア",
        ko: "하데리어",
    },
    description: {
        en: "These Pokémon seem to enjoy living with humans.\nEven a Stoutland caught in the wild will warm up\nto people in about three days.",
        "fr": "Ces Pokémon semblent aimer vivre avec les humains.\nMême un Stoutland pris dans la nature se réchauffera\naux gens en trois jours environ.",
        "es": "Estos Pokémon parecen disfrutar de vivir con humanos.\nIncluso un Stoutland atrapado en la naturaleza se calentará\na la gente en unos tres días.",
        "it": "Sembra che a questi Pokémon piaccia vivere con gli umani.\nAnche uno Stoutland catturato in natura si riscalderà\nalle persone in circa tre giorni.",
        "de": "Diese Pokémon scheinen das Zusammenleben mit Menschen zu genießen.\nSogar ein in der Wildnis gefangenes Stoutland wird warm\nan die Menschen in etwa drei Tagen.",
        "pt-br": "Esses Pokémon parecem gostar de viver com humanos.\nAté um Stoutland capturado na natureza vai se aquecer\npara as pessoas em cerca de três dias.",
        "zh-tw": "這些神奇寶貝似乎很喜歡與人類一起生活。\n即使是在野外捕獲的斯托特蘭也會變暖\n大約三天后傳給人們。",
        ja: "人と 暮らすのが 好きらしい。 野生で 捕まえても 3日も たてば 人に 懐くようになる。",
        ko: "사람과 사는 것을 좋아하는 듯하다.\n야생에서 잡아도 3일만 지나면\n사람을 따르게 된다."
    },
    stage: "Stage2",
    abilities: [{
            type: "Ability",
            name: {
                en: "Guard Dog Visage",
                "fr": "Visage de chien de garde",
                "es": "Rostro de perro guardián",
                "it": "Volto del cane da guardia",
                "de": "Wachhundgesicht",
                "pt-br": "Rosto de cão de guarda",
                "zh-tw": "看門狗的面貌",
                ja: "ばんけんがお",
                ko: "파수견 얼굴"
            },
            effect: {
                en: "As long as this Pokémon is in the Active Spot, attacks used by your opponent's Active Pokémon cost 1 {C} more.",
                "fr": "Tant que ce Pokémon est dans le Point Actif, les attaques utilisées par le Pokémon Actif de votre adversaire coûtent 1 {C} de plus.",
                "es": "Mientras este Pokémon esté en el Punto Activo, los ataques utilizados por el Pokémon Activo de tu rival cuestan 1 {C} más.",
                "it": "Fintanto che questo Pokémon è in posizione attiva, gli attacchi usati dal Pokémon attivo del tuo avversario costano 1 {C} in più.",
                "de": "Solange sich dieses Pokémon an der aktiven Stelle befindet, kosten Angriffe des aktiven Pokémon deines Gegners 1 {C} mehr.",
                "pt-br": "Enquanto este Pokémon estiver no Ponto Ativo, os ataques usados pelo Pokémon Ativo do seu oponente custarão 1 {C} a mais.",
                "zh-tw": "只要該神奇寶貝位於活動區域，對手的活動神奇寶貝使用的攻擊就會多花費 1 {C} 點。",
                ja: "このポケモンがバトル場にいるかぎり、相手のバトルポケモンの、ワザを使うためのエネルギーを、{C}エネルギー1個ぶん多くする。",
                ko: "이 포켓몬이 배틀필드에 있는 한, 상대 배틀 포켓몬의 기술을 사용하기 위한 에너지를 {C}에너지 1개만큼 많게 한다."
            }
        }],
    attacks: [{
            name: {
                en: "Sharp Fang",
                "fr": "Croc acéré",
                "es": "Colmillo afilado",
                "it": "Zanna affilata",
                "de": "Scharfer Fangzahn",
                "pt-br": "Presa Afiada",
                "zh-tw": "尖牙",
                ja: "するどいキバ",
                ko: "예리한이빨"
            },
            damage: 70,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
