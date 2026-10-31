import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/247",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/247",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/247",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/247",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/247",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/247",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/247",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/247",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/247"
    },
    name: {
        en: "Goomy",
        "fr": "Mucuscule",
        "es": "Goomy",
        "it": "Goomy",
        "de": "Viscora",
        "pt-br": "Goomy",
        "zh-tw": "黏黏寶",
        ja: "ヌメラ",
        ko: "미끄메라",
    },
    illustrator: "Kariya",
    rarity: "One Star",
    category: "Pokemon",
    hp: 40,
    types: ["Dragon"],
    description: {
        en: "Goomy's horns are excellent sensory organs that\ncover all five of Goomy's senses. Goomy picks\nup on danger from the movement of the air.",
        "fr": "Les cornes de Goomy sont d'excellents organes sensoriels qui\ncouvrent les cinq sens de Goomy. Choix goomy\nse rendre compte du danger que représente le mouvement de l'air.",
        "es": "Los cuernos de Goomy son excelentes órganos sensoriales que\nCubre los cinco sentidos de Goomy. selecciones pegajosas\nsobre el peligro del movimiento del aire.",
        "it": "Le corna di Goomy sono eccellenti organi sensoriali\ncoprire tutti e cinque i sensi di Goomy. Scelte fantastiche\nsul pericolo derivante dal movimento dell'aria.",
        "de": "Goomys Hörner sind ausgezeichnete Sinnesorgane\ndecken alle fünf Sinne von Goomy ab. Goomy-Picks\nsich vor Gefahren durch Luftbewegungen zu schützen.",
        "pt-br": "Os chifres de Goomy são excelentes órgãos sensoriais que\ncobrir todos os cinco sentidos de Goomy. Escolhas legais\nsobre o perigo do movimento do ar.",
        "zh-tw": "古米的角是極好的感覺器官\n涵蓋了 Goomy 的所有五種感官。愚蠢的選擇\n空氣流動帶來的危險。",
        ja: "ツノは 五感の すべてを まかなう 優れた 感覚器官。 空気の 動きで 危険を 感じとる。",
        ko: "뿔은 오감을 모두 담당하는\n뛰어난 감각 기관이다.\n공기의 흐름으로 위험을 감지한다."
    },
    stage: "Basic",
    abilities: [{
            type: "Ability",
            name: {
                en: "Sticky Membrane",
                "fr": "Membrane collante",
                "es": "Membrana pegajosa",
                "it": "Membrana adesiva",
                "de": "Klebrige Membran",
                "pt-br": "Membrana pegajosa",
                "zh-tw": "粘膜",
                ja: "ねばるねんまく",
                ko: "끈적한 점막"
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
                en: "Ram",
                "fr": "Bélier",
                "es": "RAM",
                "it": "Ram",
                "de": "RAM",
                "pt-br": "Bater",
                "zh-tw": "內存",
                ja: "ぶつかる",
                ko: "부딪치기"
            },
            damage: 30,
            cost: ["Water", "Psychic"]
        }],
    retreat: 1,
	boosters: [
		"mega-altaria"
	]
};
export default card;
