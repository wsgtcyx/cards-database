import { Card } from "../../../interfaces";
import Set from "../Shining Revelry";
const card: Card = {
    set: Set,
    name: {
        en: "Charizard ex",
        fr: "Dracaufeu-ex",
        es: "Charizard ex",
        it: "Charizard-ex",
        de: "Glurak-ex",
        'pt-br': "Charizard ex",
        ko: "리자몽 ex",
        "zh-tw": "噴火龍EX"
    },
    illustrator: "PLANETA Igarashi",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 180,
    types: ["Fire"],
    evolveFrom: {
        en: "Charmeleon",
        "fr": "Charméléon",
        "es": "Charmeleon",
        "it": "Charmeleon",
        "de": "Charmeleon",
        "pt-br": "Charmeleon",
        "zh-tw": "變色龍"
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Stoke",
                fr: "Attisement",
                es: "Atizador",
                it: "Attizzatoio",
                de: "Anheizen",
                'pt-br': "Carregar",
                ko: "타오르기",
                "zh-tw": "斯托克"
            },
            cost: ["Fire"],
            effect: {
                en: "Take 3 {R} Energy from your Energy Zone and attach it to this Pokémon.",
                fr: "Prenez 3 Énergies {R} de votre zone Énergie et attachez-les à ce Pokémon.",
                es: "Une 3 Energías {R} de tu área de Energía a este Pokémon.",
                it: "Prendi 3 Energie {R} dalla tua Zona Energia e assegnale a questo Pokémon.",
                de: "Lege 3 {R}-Energien aus deinem Energiebereich an dieses Pokémon an.",
                'pt-br': "Pegue 3 Energias {R} da sua Zona de Energia e ligue-as a este Pokémon.",
                ko: "자신의 에너지존에서 {R}에너지를 3개 내보내 이 포켓몬에게 붙인다.",
                "zh-tw": "從你的能量區取出 3 個 {R} 能量並將其附加到這只神奇寶貝身上。"
            }
        }, {
            name: {
                en: "Steam Artillery",
                fr: "Artillerie Vapeur",
                es: "Artillería de Vapor",
                it: "Artiglieria Vapore",
                de: "Dampfgeschütz",
                'pt-br': "Artilharia de Vapor",
                ko: "타오르는대포",
                "zh-tw": "蒸汽火砲"
            },
            damage: 150,
            cost: ["Fire", "Fire", "Fire", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 3
};
export default card;
