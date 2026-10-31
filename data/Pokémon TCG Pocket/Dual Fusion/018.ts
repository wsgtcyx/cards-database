import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/018",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/018",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/018",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/018",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/018",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/018",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/018",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/018",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/018"
    },
    name: {
        en: "Charizard",
        fr: "Dracaufeu",
        es: "Charizard",
        "pt-br": "Charizard",
        "zh-tw": "噴火龍",
        ja: "リザードン",
        ko: "리자몽",
        it: "Charizard",
        de: "Glurak"
    },
    illustrator: "NC Empire",
    rarity: "Three Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 150,
    types: [
        "Fire"
    ],
    stage: "Stage2",
    retreat: 3,
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Charmeleon",
        fr: "Reptincel",
        es: "Charmeleon",
        it: "Charmeleon",
        de: "Glutexo",
        "pt-br": "Charmeleon",
        "zh-tw": "火恐龍",
        ja: "リザード",
        ko: "리자드"
    },
    attacks: [
        {
            name: {
                en: "Fire Wing",
                fr: "Aile de Feu",
                es: "Ala Ígnea",
                it: "Alafiamma",
                de: "Feuerflügel",
                "pt-br": "Asa de Fogo",
                "zh-tw": "火焰之翼",
                ja: "ほのおのつばさ",
                ko: "불꽃날개"
            },
            cost: [
                "Colorless",
                "Fire",
                "Fire"
            ],
            damage: 90
        }
    ],
    abilities: [
        {
            name: {
                en: "Flame Aura",
                fr: "Aura Enflammée",
                es: "Aura Llameante",
                it: "Aura Fiammeggiante",
                de: "Flammende Aura",
                "pt-br": "Aura em Chamas",
                "zh-tw": "火焰氣場",
                ja: "フレイムオーラ",
                ko: "플레임 오라"
            },
            effect: {
                en: "Whenever you attach a {R} Energy from your Energy Zone to this Pokémon, do 30 damage to your opponent's Active Pokémon.",
                fr: "Chaque fois que vous attachez une Énergie {R} de votre zone Énergie à ce Pokémon, infligez 30 dégâts au Pokémon Actif de votre adversaire.",
                es: "Cada vez que unas una Energía {R} de tu área de Energía a este Pokémon, haz 30 puntos de daño al Pokémon Activo de tu rival.",
                it: "Ogni volta che assegni un’Energia {R} a questo Pokémon dalla tua Zona Energia, infliggi 30 danni al Pokémon attivo dell’avversario.",
                de: "Füge jedes Mal, wenn du 1 {R}-Energie aus dem Energiebereich an dieses Pokémon anlegst, dem Aktiven Pokémon deines Gegners 30 Schadenspunkte zu.",
                "pt-br": "Sempre que você ligar uma Energia {R} da sua Zona de Energia a este Pokémon, cause 30 pontos de dano ao Pokémon Ativo do seu oponente.",
                "zh-tw": "每次從自己的能量區將{R}能量附於這隻寶可夢身上時,對手的戰鬥寶可夢受到30點傷害。",
                ja: "自分のエネルギーゾーンからこのポケモンに{R}エネルギーをつけるたび、相手のバトルポケモンに30ダメージ。",
                ko: "자신의 에너지존에서 이 포켓몬에게 {R}에너지를 붙일 때마다 상대의 배틀 포켓몬에게 30데미지를 준다."
            },
            type: "Ability"
        }
    ],
    description: {
        en: "If Charizard becomes truly angered, the flame at the tip of its tail burns in a light blue shade.",
        fr: "Quand Dracaufeu s’énerve réellement, la flamme au bout de sa queue devient bleue.",
        es: "Cuando se enfurece de verdad, la llama de la punta de su cola se vuelve de color azul claro.",
        it: "Se s’infuria, la fiamma che ha sulla punta della coda si colora di un blu biancastro.",
        de: "Wenn Glurak richtig wütend wird, flackert die Flamme an seiner Schwanzspitze in einem bläulichen Ton.",
        "pt-br": "Quando Charizard fica realmente furioso, a chama na ponta da sua cauda queima em um tom azul claro.",
        "zh-tw": "當噴火龍憤怒至極時，尾巴前端就會燃起藍白色的火焰。",
        ja: "本気で 怒った リザードンの 尻尾の 先の 炎は 青白く 燃え上がる。",
        ko: "정말 화가 난 리자몽의\n꼬리 끝 불꽃은\n푸르스름하게 불타오른다."
    }
};

export default card;
