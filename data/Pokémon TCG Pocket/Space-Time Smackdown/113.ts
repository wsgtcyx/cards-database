import { Card } from "../../../interfaces";
import Set from "../Space-Time Smackdown";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A2/113",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A2/113",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A2/113",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A2/113",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A2/113",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A2/113",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A2/113"
    },
    name: {
        en: "Shieldon",
        fr: "Dinoclier",
        es: "Shieldon",
        it: "Shieldon",
        de: "Schilterus",
        'pt-br': "Shieldon",
        ko: "방패톱스",
        "zh-tw": "盾甲龍",
    },
    illustrator: "Kouki Saitou",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Metal"],
    evolveFrom: {
        en: "Armor Fossil",
        "fr": "Fossile Armure",
        "es": "Fósil Coraza",
        "it": "Fossilscudo",
        "de": "Panzerfossil",
        "pt-br": "Fóssil Armadura",
        "zh-tw": "盾甲化石",
    },
    description: {
        en: "A mild-mannered, herbivorous Pokémon, it used its face to dig up tree roots to eat. The skin on its face was plenty tough.",
        fr: "Cet herbivore, très calme de nature, utilisait la peau durcie\nde son museau pour déterrer des racines à grignoter.",
        es: "Un Pokémon herbívoro de carácter afable.\nCon su dura protección facial podía desenterrar\nlas raíces de los árboles para comérselas.",
        it: "Era un docile Pokémon erbivoro. Si serviva del\nmuso protetto dalla pelle coriacea per scavare\nnel terreno e mangiare le radici degli alberi.",
        de: "Ein friedliches, pflanzenfressendes Pokémon.\nMit seiner harten Gesichtshaut wühlte es im\nBoden und fraß Baumwurzeln.",
        'pt-br': "Um Pokémon manso e herbívoro, que desenterrava\nraízes de árvores com o rosto para comer. A pele\nde seu rosto era bastante áspera.",
        ko: "온순한 초식 포켓몬.\n튼튼한 얼굴 피부로 지면을\n파고들어 나무 뿌리도 먹었다.",
        "zh-tw": "性情溫和的草食性神奇寶貝，它用臉挖樹根來吃。臉上的皮膚非常堅韌。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Headbutt",
                fr: "Coup d'Boule",
                es: "Golpe Cabeza",
                it: "Bottintesta",
                de: "Kopfnuss",
                'pt-br': "Cabeçada",
                ko: "박치기",
                "zh-tw": "頭撞"
            },
            damage: 50,
            cost: ["Metal", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["palkia"]
};
export default card;
