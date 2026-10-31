import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/135",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/135",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/135",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/135",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/135",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/135",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/135",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4b/135",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4b/135"
    },
    name: {
        en: "Falinks",
        fr: "Hexadron",
        es: "Falinks",
        it: "Falinks",
        de: "Legios",
        "pt-br": "Falinks",
        "zh-tw": "列陣兵",
        ja: "タイレーツ",
        ko: "대여르"
    },
    illustrator: "Yuu Nishida",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 70,
    types: [
        "Fighting"
    ],
    description: {
        en: "The leader, known as the brass, uses its\nextendible horn to issue orders to the others\nwhen it's time to change formation.",
        fr: "À l'aide de sa corne extensible, le chef donne des ordres aux autres et leur fait changer de formation.",
        es: "El líder utiliza su cuerno, capaz de expandirse y contraerse, para ordenar a los demás que cambien la formación.",
        it: "L'elemento che viene considerato il capo usa il proprio corno estensibile per indicare al gruppo in che tipo di formazione schierarsi.",
        de: "Mit seinem ausfahrbaren Horn gibt der Anführer Befehle zur Formationsänderung.",
        "pt-br": "O líder, mais conhecido como comandante, usa seus chifres extensíveis para mandar ordens aos outros quando chega a hora de mudar de formação.",
        "zh-tw": "被稱為頭頭的隊長會用可伸縮的角做出變換陣形的指令。",
        ja: "伸縮する ツノで ヘイチョーと 呼ばれる リーダーが 陣形を 組み替える 指示を 出しているぞ。",
        ko: "늘었다 줄었다 하는 뿔을 이용해\n리더가 진형을 바꾸는 지시를 내린다."
    },
    stage: "Basic",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Coordinated Unit",
                fr: "Unité Coordonnée",
                es: "Unidad Coordinada",
                it: "Falange Compatta",
                de: "Koordinierte Einheit",
                "pt-br": "Unidade Coordenada",
                "zh-tw": "團結一陣",
                ja: "れんけいユニット",
                ko: "연계 유닛"
            },
            effect: {
                en: "If you have another Falinks in play, this Pokémon's attacks do +20 damage to your opponent's Active Pokémon, and this Pokémon takes −20 damage from attacks from your opponent's Pokémon.",
                fr: "Si vous avez un autre Hexadron en jeu, les attaques de ce Pokémon infligent + 20 dégâts au Pokémon Actif de votre adversaire, et ce Pokémon subit − 20 dégâts provenant des attaques des Pokémon de votre adversaire.",
                es: "Si tienes otro Falinks en juego, los ataques de este Pokémon hacen +20 puntos de daño al Pokémon Activo de tu rival, y los ataques de los Pokémon de tu rival hacen ‐20 puntos de daño a este Pokémon.",
                it: "Se hai un altro Falinks in gioco, gli attacchi di questo Pokémon infliggono +20 danni al Pokémon attivo dell'avversario, e questo Pokémon subisce -20 danni dagli attacchi dei Pokémon avversari.",
                de: "Wenn du ein weiteres Legios im Spiel hast, werden dem Aktiven Pokémon deines Gegners durch Attacken von diesem Pokémon +20 Schadenspunkte zugefügt und diesem Pokémon werden durch Attacken von Pokémon deines Gegners -20 Schadenspunkte zugefügt.",
                "pt-br": "Se você tiver outro Falinks em jogo, os ataques deste Pokémon causarão +20 pontos de dano ao Pokémon Ativo do seu oponente, e este Pokémon receberá −20 pontos de dano de ataques dos Pokémon do seu oponente.",
                "zh-tw": "若自己的場上有其他的「列陣兵」,則這隻寶可夢對對手的戰鬥寶可夢造成的招式傷害+20點,受到對手的寶可夢招式的傷害-20點。",
                ja: "自分の場に別の「タイレーツ」がいるなら、このポケモンの、相手のバトルポケモンへのワザのダメージを+20し、相手のポケモンから受けるワザのダメージを-20する。",
                ko: "자신의 필드에 다른 「대여르」가 있다면 이 포켓몬이 상대의 배틀 포켓몬에게 주는 기술의 데미지를 +20하고 상대의 포켓몬으로부터 받는 기술의 데미지를 -20한다."
            }
        }
    ],
    attacks: [
        {
            name: {
                en: "Invade",
                fr: "Envahissement",
                es: "Invadir",
                it: "Scorreria",
                de: "Einmarschieren",
                "pt-br": "Invadir",
                "zh-tw": "攻入",
                ja: "せめこむ",
                ko: "공격해나가기"
            },
            damage: 20,
            cost: [
                "Fighting"
            ]
        }
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
