import { Card } from "../../../interfaces";
import Set from "../Special Pack: First Partners";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/SP1/026",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/SP1/026",
        es: "https://game.pokemontcgpocket.app/es/tcgp/SP1/026",
        it: "https://game.pokemontcgpocket.app/it/tcgp/SP1/026",
        de: "https://game.pokemontcgpocket.app/de/tcgp/SP1/026",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/SP1/026",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/SP1/026",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/SP1/026",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/SP1/026"
    },
    name: {
        en: "Fuecoco",
        fr: "Chochodile",
        es: "Fuecoco",
        "pt-br": "Fuecoco",
        "zh-tw": "呆火鱷",
        ja: "ホゲータ",
        ko: "뜨아거",
        it: "Fuecoco",
        de: "Krokel"
    },
    illustrator: "Saboteri",
    rarity: "One Star",
    category: "Pokemon",
    hp: 70,
    types: [
        "Fire"
    ],
    stage: "Basic",
    retreat: 2,
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Flamethrower",
                fr: "Lance-Flammes",
                es: "Lanzallamas",
                it: "Lanciafiamme",
                de: "Flammenwurf",
                "pt-br": "Lança-chamas",
                "zh-tw": "噴射火焰",
                ja: "かえんほうしゃ",
                ko: "화염방사"
            },
            cost: [
                "Colorless",
                "Fire"
            ],
            damage: 50,
            effect: {
                en: "Discard a {R} Energy from this Pokémon.",
                fr: "Défaussez une Énergie {R} de ce Pokémon.",
                es: "Descarta 1 Energía {R} de este Pokémon.",
                it: "Rimuovi un’Energia {R} da questo Pokémon.",
                de: "Lege 1 {R}-Energie von diesem Pokémon ab.",
                "pt-br": "Descarte 1 Energia {R} deste Pokémon.",
                "zh-tw": "將這隻寶可夢身上的1個{R}能量丟棄。",
                ja: "このポケモンから{R}エネルギーを1個トラッシュ。",
                ko: "이 포켓몬에서 {R}에너지를 1개 트래쉬한다."
            }
        }
    ],
    abilities: [],
    description: {
        en: "Its flame sac is small, so energy is always leaking out. This energy is released from the dent atop Fuecoco's head and flickers to and fro.",
        fr: "Sa poche à flammes est trop petite pour contenir toute l'énergie qu'il produit. Le surplus s'échappe en vacillant par la cavité sur sa tête.",
        es: "Como su saca de fuego es pequeña, la energía ígnea que rebosa se libera por la muesca de su cabeza en forma de una trémula llama.",
        it: "La sua sacca ignea è piccola e l'energia trabocca, fuoriuscendo sotto forma di fiammelle tremule da una fessura sulla testa.",
        de: "Sein Flammensack ist noch klein, weshalb überquellende Energie über die Vertiefung an seinem Kopf flackernd freigesetzt wird.",
        "pt-br": "Sua bolsa de chamas é pequenina e tem sempre energia vazando. Esta energia é liberada pela cavidade no topo da cabeça de Fuecoco e balança pra lá e pra cá.",
        "zh-tw": "火囊很小，因此能量會溢出來，在牠頭上的凹槽那裡搖曳晃動。",
        ja: "炎袋が 小さく あふれ出た エネルギーが 頭の くぼみから 放出され ゆらゆら 揺れる。",
        ko: "불꽃 주머니가 작기 때문에\n흘러넘친 에너지가 머리의 움푹한 곳을 통해\n새어 나와 일렁거린다."
    }
};

export default card;
