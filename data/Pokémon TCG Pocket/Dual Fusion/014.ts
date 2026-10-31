import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/014",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/014",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/014",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/014",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/014",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/014",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/014",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/014",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/014"
    },
    name: {
        en: "Cutiefly",
        fr: "Bombydou",
        es: "Cutiefly",
        "pt-br": "Cutiefly",
        "zh-tw": "萌虻",
        ja: "アブリー",
        ko: "에블리",
        it: "Cutiefly",
        de: "Wommel"
    },
    illustrator: "Narumi Sato",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 30,
    types: [
        "Grass"
    ],
    stage: "Basic",
    retreat: 0,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Bug Bite",
                fr: "Piqûre",
                es: "Picadura",
                it: "Coleomorso",
                de: "Käferbiss",
                "pt-br": "Picada",
                "zh-tw": "蟲咬",
                ja: "むしくい",
                ko: "벌레먹기"
            },
            cost: [
                "Grass"
            ],
            damage: 20
        }
    ],
    abilities: [],
    description: {
        en: "When it senses the auras of people or Pokémon who are having fun, it will draw close and give them a painful poke with its long proboscis.",
        fr: "Chaque fois qu'il capte l'aura joyeuse d'un être humain ou d'un Pokémon, il s'en approche et le pique de sa longue trompe.",
        es: "Si percibe el aura de un ser humano o Pokémon que transmite alegría, se le acerca y, con su larga probóscide, le asesta un pinchazo doloroso.",
        it: "Se percepisce l'aura allegra di un essere umano o di un Pokémon, gli si avvicina e lo punge con la sua lunga bocca, causando un certo dolore.",
        de: "Nimmt es die fröhliche Aura von Menschen oder Pokémon wahr, nähert es sich ihnen und teilt mit seinem langen Rüssel schmerzhafte Stiche aus.",
        "pt-br": "Quando sente a aura das pessoas ou Pokémon que estão se divertindo, aproxima-se e dá uma ferroada dolorida neles com sua probóscide longa.",
        "zh-tw": "只要感覺到人類或寶可夢發出的快樂氣場，就會靠近並用長長的嘴器戳之。被戳者很痛。",
        ja: "人や ポケモンの 楽しそうな オーラを 感じ取り 寄ってきては 長い 口で 突くので 痛い。",
        ko: "사람이나 포켓몬의\n즐거워 보이는 오라를 감지하면\n접근해서 긴 주둥이로 아프게 찔러 댄다."
    }
};

export default card;
