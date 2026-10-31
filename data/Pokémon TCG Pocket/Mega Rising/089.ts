import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/089",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/089",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/089",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/089",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/089",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/089",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/089",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/089",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/089"
    },
    name: {
        en: "Pachirisu",
        "fr": "Pachirisu",
        "es": "Pachirisu",
        "it": "Pachirisu",
        "de": "Pachirisu",
        "pt-br": "Pachirisu",
        "zh-tw": "帕奇利茲",
        ja: "パチリス",
        ko: "파치리스"
    },
    illustrator: "Naoyo Kimura",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Lightning"],
    description: {
        en: "A pair may be seen rubbing their cheek pouches\ntogether in an effort to share stored electricity.",
        "fr": "On peut voir un couple se frotter les poches des joues\nensemble dans le but de partager l’électricité stockée.",
        "es": "Se puede ver a una pareja frotándose las mejillas.\njuntos en un esfuerzo por compartir la electricidad almacenada.",
        "it": "Si può vedere una coppia che si strofina le guance\ninsieme nel tentativo di condividere l’elettricità immagazzinata.",
        "de": "Man sieht ein Paar, das sich die Backentaschen reibt\nzusammen, um den gespeicherten Strom zu teilen.",
        "pt-br": "Um par pode ser visto esfregando as bolsas nas bochechas\njuntos em um esforço para compartilhar a eletricidade armazenada.",
        "zh-tw": "可以看到一對夫婦在摩擦頰囊\n共同努力共享儲存的電力。",
        ja: "たまった 電気を 分け与えようと ほほ袋を こすり合わせる パチリスを 見かけることも ある。",
        ko: "모인 전기를 나눠 주려고\n뺨의 주머니를 서로 비비는\n파치리스가 발견되기도 한다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Attack the Wound",
                "fr": "Attaquez la blessure",
                "es": "atacar la herida",
                "it": "Attacca la ferita",
                "de": "Greife die Wunde an",
                "pt-br": "Ataque a ferida",
                "zh-tw": "攻擊傷口",
                ja: "きずにうちこむ",
                ko: "상처때리기"
            },
            damage: "30+",
            cost: ["Lightning", "Colorless"],
            effect: {
                en: "If your opponent's Active Pokémon has damage on it, this attack does 30 more damage.",
                "fr": "Si le Pokémon Actif de votre adversaire subit des dégâts, cette attaque inflige 30 dégâts supplémentaires.",
                "es": "Si el Pokémon Activo de tu rival tiene daño, este ataque hace 30 puntos de daño más.",
                "it": "Se il Pokémon attivo del tuo avversario ha dei danni su di sé, questo attacco infligge 30 danni in più.",
                "de": "Wenn das Aktive Pokémon deines Gegners Schaden hat, fügt dieser Angriff 30 weitere Schadenspunkte zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente sofrer dano, este ataque causará 30 de dano a mais.",
                "zh-tw": "如果對手的活躍寶可夢受到傷害，則這次攻擊造成的傷害增加 30 點。",
                ja: "相手のバトルポケモンがダメージを受けているなら、30ダメージ追加。",
                ko: "상대의 배틀 포켓몬이 데미지를 받고 있다면 30데미지를 추가한다."
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
	boosters: [
		"mega-altaria",
		"mega-blaziken",
		"mega-gyarados"
	]
};
export default card;
