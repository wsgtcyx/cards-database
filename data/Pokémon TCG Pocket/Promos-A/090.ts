import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    boosters: [],
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/090/9dcc6a23deeb1dd5",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/090/9dcc6a23deeb1dd5",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/090/9dcc6a23deeb1dd5",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/090/9dcc6a23deeb1dd5",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/090/9dcc6a23deeb1dd5",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/090/9dcc6a23deeb1dd5",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/090/9dcc6a23deeb1dd5",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/090/9dcc6a23deeb1dd5",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/090/9dcc6a23deeb1dd5"
    },
    name: {
        en: "Togedemaru",
        es: "Togedemaru",
        "fr": "Togedemaru",
        "it": "Togedemaru",
        "de": "Togedemaru",
        "pt-br": "Togedemaru",
        "zh-tw": "托戈德瑪爾",
        ja: "トゲデマル",
        ko: "토게데마루",
    },
    illustrator: "sowsow",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Metal"],
    description: {
        en: "With the long hairs on its back, this Pokémon\ntakes in electricity from other electric Pokémon.\nIt stores what it absorbs in an electric sac.",
        es: "Utiliza el apéndice de la cabeza para absorber los rayos o los ataques de los Pokémon de tipo Eléctrico para recargar su bolsa.",
        "fr": "Grâce à sa longue épine dorsale, il capte le tonnerre et les attaques des Pokémon Électrik, puis stocke leur courant dans sa poche électrique.",
        "it": "Si serve della lunga spina che ha sulla schiena per attirare e incamerare l'energia elettrica dei fulmini e dei Pokémon di tipo Elettro.",
        "de": "Der Schweif an seinem Rücken absorbiert Blitze und Angriffe von Elektro-Pokémon. Es speichert den so gewonnenen Strom in Elektrotaschen.",
        "pt-br": "Com os pelos compridos em suas costas, este Pokémon absorve a eletricidade de outros Pokémon elétricos. Armazena o que absorve em uma bolsa elétrica.",
        "zh-tw": "用背上的長毛來接收閃電和電氣寶可夢釋放的電擊，然後將之儲存在電囊中。",
        ja: "背中の 長い 毛で 雷や でんきポケモンの 電撃を 受けて 電気袋に 充電する。",
        ko: "등에 난 긴 털로 번개나\n전기포켓몬의 전격을 받아\n전기 주머니에 충전한다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Bristling Spikes",
                es: "Púas Erizadas",
                "fr": "Épines Hérissées",
                "it": "Spine Dritte",
                "de": "Aufgestellte Stacheln",
                "pt-br": "Espinhos Eriçados",
                "zh-tw": "豎刺",
                ja: "さかだつトゲ",
                ko: "곤두선가시"
            },
            damage: 30,
            cost: ["Metal", "Metal"],
            effect: {
                en: "During your opponent's next turn, if this Pokémon is damaged by an attack, do 30 damage to the Attacking Pokémon.",
                es: "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque, el Pokémon Atacante sufre 30 puntos de daño.",
                "fr": "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d'une attaque, le Pokémon Attaquant subit 30 dégâts.",
                "it": "Durante il prossimo turno del tuo avversario, se questo Pokémon viene danneggiato da un attacco, il Pokémon attaccante subisce 30 danni.",
                "de": "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch eine Attacke Schaden zugefügt wird, füge dem Angreifenden Pokémon 30 Schadenspunkte zu.",
                "pt-br": "Durante o próximo turno do seu oponente, se este Pokémon for danificado por um ataque, cause 30 pontos de dano ao Pokémon Atacante.",
                "zh-tw": "在下個對手的回合,這隻寶可夢受到招式的傷害時,使用招式的寶可夢受到30點傷害。",
                ja: "次の相手の番、このポケモンがワザのダメージを受けたとき、ワザを使ったポケモンに30ダメージ。",
                ko: "상대의 다음 차례에 이 포켓몬이 기술의 데미지를 받았을 때 기술을 사용한 포켓몬에게 30데미지를 준다."
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
