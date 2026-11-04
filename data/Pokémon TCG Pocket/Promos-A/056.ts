import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/056/350e70cd31f6324f",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/056/350e70cd31f6324f",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/056/350e70cd31f6324f",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/056/350e70cd31f6324f",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/056/350e70cd31f6324f",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/056/350e70cd31f6324f",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/056/350e70cd31f6324f",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/056/350e70cd31f6324f",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/056/350e70cd31f6324f"
    },
    name: {
        en: "Ekans",
        fr: "Abo",
        es: "Ekans",
        it: "Ekans",
        de: "Rettan",
        'pt-br': "Ekans",
        ja: "アーボ",
        ko: "아보",
        "zh-tw": "阿柏蛇",
    },
    illustrator: "Krgc",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    description: {
        en: "By dislocating its jaw, it can swallow prey larger\nthan itself. After a meal, it curls up and rests.",
        fr: "Il peut se déboîter la mâchoire pour avaler tout rond des proies\nplus grosses que lui. Il se replie ensuite sur lui-même pour digérer.",
        es: "Es capaz de desencajar la mandíbula para\nengullir presas enteras mayores que él mismo,\ntras lo cual se enrosca para descansar.",
        it: "Può sganciare la mandibola per ingoiare\nintere prede più grosse di lui. Dopo il pasto,\nsi arrotola su se stesso per riposarsi.",
        de: "Es hängt seinen Kiefer aus und verschlingt so\nselbst größere Beute am Stück. Danach rollt\nes sich zusammen und ruht sich aus.",
        'pt-br': "Desloca a própria mandíbula para engolir presas\nmaiores que si mesmo. Depois de uma refeição,\nse enrosca e descansa.",
        ja: "顎を 外すことで 自分より 大きな 獲物も 丸呑みに する。 食後は 身体を 丸め 休む。",
        ko: "턱을 빼 자신보다\n큰 먹이를 통째로 삼킨다.\n식후에는 몸을 둥글게 하고 쉰다.",
        "zh-tw": "會藉由讓下顎脫臼來吞食比自己更大的獵物。進食之後會蜷縮起身子休息。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Poison Sting",
                fr: "Dard-Venin",
                es: "Picotazo Veneno",
                it: "Velenospina",
                de: "Giftstachel",
                'pt-br': "Ferrão Venenoso",
                ja: "どくばり",
                ko: "독침",
                "zh-tw": "毒針"
            },
            cost: ["Darkness"],
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
                es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
                it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
                de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
                ja: "相手のバトルポケモンをどくにする。",
                ko: "상대의 배틀 포켓몬을 독으로 만든다.",
                'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
                "zh-tw": "將對手的戰鬥寶可夢中毒。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["vol6"]
};
export default card;
