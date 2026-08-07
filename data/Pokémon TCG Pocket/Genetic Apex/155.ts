import { Card } from "../../../interfaces";
import Set from "../Genetic Apex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A1/155",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A1/155",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A1/155",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A1/155",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A1/155",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A1/155",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A1/155"
    },
    name: {
        en: "Hitmonchan",
        fr: "Tygnon",
        es: "Hitmonchan",
        it: "Hitmonchan",
        de: "Nockchan",
        'pt-br': "Hitmonchan",
        ko: "홍수몬",
        "zh-tw": "快拳郎",
    },
    illustrator: "Ken Sugimori",
    category: "Pokemon",
    hp: 80,
    types: ["Fighting"],
    stage: "Basic",
    attacks: [{
            cost: ["Fighting"],
            name: {
                en: "Jab",
                fr: "Taquet",
                es: "Puya",
                it: "Stoccata",
                de: "Boxschlag",
                'pt-br': "Murro",
                ko: "잽",
                "zh-tw": "戳"
            },
            damage: "30"
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 1,
    rarity: "One Diamond",
    description: {
        en: "Its punches slice the air. They are launched at such high speed, even a slight graze could cause a burn.",
        fr: "Ses poings fendent l'air. Ils sont si rapides\nqu'un simple frôlement peut causer une brûlure.",
        es: "Sus puñetazos cortan el aire. Son tan veloces que\nel mínimo roce podría causar una quemadura.",
        it: "I suoi pugni fendono l'aria a una tale velocità che\nbasta venire sfiorati per riportare una scottatura.",
        de: "Seine Fäuste zerschneiden regelrecht die Luft.\nSie sind so schnell, dass selbst die geringste\nBerührung Verbrennungen verursacht.",
        'pt-br': "Seus murros cortam o ar. São tão\nvelozes que um simples toque pode\ncausar uma queimadura.",
        ko: "주변의 공기를 가르는 펀치.\n스치기만 해도 화상을 입을 정도로\n펀치 스피드가 매우 빠르다.",
        "zh-tw": "它的拳頭劃破空氣。它們以如此高的速度發射，即使是輕微的擦傷也可能導致燒傷。"
    },
    boosters: ["charizard"]
};
export default card;
