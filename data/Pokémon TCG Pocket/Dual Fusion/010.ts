import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/010",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/010",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/010",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/010",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/010",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/010",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/010",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/010",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/010"
    },
    name: {
        en: "Sawsbuck",
        fr: "Haydaim",
        es: "Sawsbuck",
        "pt-br": "Sawsbuck",
        "zh-tw": "萌芽鹿",
        ja: "メブキジカ",
        ko: "바라철록",
        it: "Sawsbuck",
        de: "Kronjuwild"
    },
    illustrator: "HYOGONOSUKE",
    rarity: "Two Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 120,
    types: [
        "Grass"
    ],
    stage: "Stage1",
    retreat: 2,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Deerling",
        fr: "Vivaldaim",
        es: "Deerling",
        it: "Deerling",
        de: "Sesokitz",
        "pt-br": "Deerling",
        "zh-tw": "四季鹿",
        ja: "シキジカ",
        ko: "사철록"
    },
    attacks: [
        {
            name: {
                en: "Leaf Litter Tackle",
                fr: "Charge Amas de Feuilles",
                es: "Placaje Hojarasca",
                it: "Defogliazione",
                de: "Laubstreu-Tackle",
                "pt-br": "Joga Folha no Lixo",
                "zh-tw": "落葉衝撞",
                ja: "らくようタックル",
                ko: "낙엽태클"
            },
            cost: [
                "Colorless",
                "Colorless",
                "Grass"
            ],
            damage: 100,
            effect: {
                en: "Discard a {G} Energy from this Pokémon.",
                fr: "Défaussez une Énergie {G} de ce Pokémon.",
                es: "Descarta 1 Energía {G} de este Pokémon.",
                it: "Rimuovi un'Energia {G} da questo Pokémon.",
                de: "Lege 1 {G}-Energie von diesem Pokémon ab.",
                "pt-br": "Descarte 1 Energia {G} deste Pokémon.",
                "zh-tw": "將這隻寶可夢身上的1個{G}能量丟棄。",
                ja: "このポケモンから{G}エネルギーを1個トラッシュ。",
                ko: "이 포켓몬에서 {G}에너지를 1개 트래쉬한다."
            }
        }
    ],
    abilities: [],
    description: {
        en: "There are many Sawsbuck enthusiasts. The darker the red of the foliage that hangs from its antlers, the more stylish the Sawsbuck is thought to be.",
        fr: "Ce Pokémon est très populaire. Plus la couleur de son feuillage est vive, plus on le trouve élégant.",
        es: "Mucha gente admira a este Pokémon. Cuanto más intenso es el rojo del follaje que cuelga de su cornamenta, más elegante se lo considera.",
        it: "È un Pokémon con tanti ammiratori. Più è intenso il rosso delle fronde che pendono dalle corna, più l'esemplare è considerato elegante.",
        de: "Dieses Pokémon hat viele Bewunderer. Es wird als umso schicker empfunden, je tiefer das Rot der Blätter ist, die von seinem Geweih herabhängen.",
        "pt-br": "Sawsbuck tem muitos fãs. Dizem que, quanto mais escura for a folhagem vermelha em seus chifres, mais estiloso Sawsbuck será considerado.",
        "zh-tw": "有許多愛好者的寶可夢。愛好者們認為牠角上垂下的枝葉顏色越紅越是氣派。",
        ja: "愛好家の 多い ポケモン。 ツノから 垂れる 枝葉の 赤が 濃いものほど 乙と されている。",
        ko: "애호가가 많은 포켓몬.\n뿔에서 늘어진 가지와 잎의 빨간색이\n짙을수록 멋진 것으로 여겨진다."
    }
};

export default card;
