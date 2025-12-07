import { Card } from "../../../interfaces";
import Set from "../Shining Revelry";
const card: Card = {
    set: Set,
    name: {
        en: "Kakuna",
        fr: "Coconfort",
        es: "Kakuna",
        it: "Kakuna",
        de: "Kokuna",
        'pt-br': "Kakuna",
        ko: "딱충이",
        "zh-tw": "鐵殼蛹"
    },
    illustrator: "Sanosuke Sakuma",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    evolveFrom: {
        en: "Weedle",
        "fr": "Mauvaise herbe",
        "es": "weedle",
        "it": "Weedle",
        "de": "Unkraut",
        "pt-br": "erva daninha",
        "zh-tw": "獨角蟲"
    },
    description: {
        en: "Almost incapable of moving, this Pokémon can only harden its shell to protect itself when it is in danger.",
        fr: "Incapable de se déplacer de lui-même,\nil se défend en durcissant sa carapace.",
        es: "Casi incapaz de moverse, este Pokémon solo\npuede endurecer su caparazón para protegerse.",
        it: "Quasi incapace di muoversi, questo Pokémon può\nsolo indurire il proprio guscio per proteggersi.",
        de: "Dieses Pokémon kann sich kaum bewegen.\nBei drohender Gefahr verhärtet es seinen Panzer.",
        'pt-br': "Quase incapaz de se mover, esse Pokémon\npode apenas endurecer sua carapaça para\nse proteger quando está em perigo.",
        ko: "스스로는 거의 움직일 수 없지만\n위험할 때는 단단해져서\n몸을 보호하고 있는 것 같다.",
        "zh-tw": "這種神奇寶貝幾乎無法移動，只有在遇到危險時才能硬化外殼來保護自己。"
    },
    stage: "Stage1",
    attacks: [{
        name: {
            en: "String Shot",
            fr: "Sécrétion",
            es: "Disparo Demora",
            it: "Millebave",
            de: "Fadenschuss",
            'pt-br': "Estilingada",
            ko: "실뿜기",
            "zh-tw": "弦擊"
        },
        damage: 20,
        cost: ["Grass"],
        effect: {
            en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
            fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
            es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
            it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
            de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
            ko: "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 마비로 만든다.",
            'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
            "zh-tw": "拋一枚硬幣。如果正面，則對手的活躍神奇寶貝現在處於麻痺狀態。"
        }
    }],
    weaknesses: [{
        type: "Fire",
        value: "+20"
    }],
    retreat: 2,
    rarity: "One Shiny"
};
export default card;
