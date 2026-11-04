import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/036/11cb0ad08428d7f2",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/036/11cb0ad08428d7f2",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/036/11cb0ad08428d7f2",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/036/11cb0ad08428d7f2",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/036/11cb0ad08428d7f2",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/036/11cb0ad08428d7f2",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/036/11cb0ad08428d7f2",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/036/11cb0ad08428d7f2",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/036/11cb0ad08428d7f2"
    },
    name: {
        en: "Tatsugiri",
        fr: "Nigirigon",
        es: "Tatsugiri",
        it: "Tatsugiri",
        de: "Nigiragi",
        "pt-br": "Tatsugiri",
        "zh-tw": "米立龍",
        ko: "싸리용",
        ja: "シャリタツ"
    },
    illustrator: "Shibuzoh.",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Water"],
    dexId: [978],
    stage: "Basic",
    description: {
        en: "Tatsugiri is an extremely cunning Pokémon. It feigns weakness to lure in prey, then orders its partner to attack.",
        fr: "Très rusé, il fait mine d'être vulnérable et attire ainsi des proies qui se font ensuite attaquer par son redoutable partenaire.",
        es: "Es un Pokémon de gran astucia. Atrae a sus presas fingiendo estar débil para otorgarle a su compañero la oportunidad de atacar.",
        it: "È un Pokémon estremamente astuto. Attira la preda fingendosi stremato, lasciando che sia il suo alleato ad attaccarla.",
        de: "Dieses äußerst gerissene Pokémon gibt vor, geschwächt zu sein, um so Beute anzulocken, die sein Partner daraufhin angreift.",
        "pt-br": "Tatsugiri é um Pokémon extremamente astuto. Demonstra fraqueza para atrair suas presas e, então, coloca seu parceiro para atacar.",
        "zh-tw": "極為奸詐狡猾的寶可夢。會假裝虛弱來吸引獵物接近，接著讓同夥的寶可夢發動攻擊。",
        ja: "非常に 悪賢い ポケモン。 弱ったふりで 獲物を おびき寄せ 仲間の ポケモンに 襲わせる。",
        ko: "매우 교활한 포켓몬이다.\n약해진 척하며 먹잇감을 유인하고는\n동료 포켓몬이 공격하게 한다."
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Rally Back",
                fr: "Répercussions",
                es: "Apoyo Vengativo",
                it: "Radunata Rinforzi",
                de: "Aufholjagd",
                "pt-br": "Responder à Altura",
                "zh-tw": "捲土重來",
                ja: "まきかえす",
                ko: "반격하기"
            },
            effect: {
                en: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 60 more damage.",
                fr: "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige 60 dégâts supplémentaires.",
                es: "Si alguno de tus Pokémon quedó fuera de combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 60 puntos de daño más.",
                it: "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco durante l’ultimo turno del tuo avversario, questo attacco infligge 60 danni in più.",
                de: "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 60 Schadenspunkte mehr zu.",
                "pt-br": "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque durante o último turno do seu oponente, este ataque causará 60 pontos de dano a mais.",
                "zh-tw": "在上個對手的回合,若自己的寶可夢因招式的傷害而昏厥了,則增加60點傷害。",
                ja: "前の相手の番、ワザのダメージで、自分のポケモンがきぜつしていたなら、60ダメージ追加。",
                ko: "상대의 이전 차례에 기술의 데미지로 자신의 포켓몬이 기절했다면 60데미지를 추가한다."
            },
            damage: "20+"
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol5"]
};

export default card;
