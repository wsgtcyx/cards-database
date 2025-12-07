import { Card } from "../../../interfaces";
import Set from "../Space-Time Smackdown";
const card: Card = {
    set: Set,
    name: {
        en: "Mesprit",
        fr: "Créfollet",
        es: "Mesprit",
        it: "Mesprit",
        de: "Vesprit",
        'pt-br': "Mesprit",
        ko: "엠라이트",
        "zh-tw": "艾姆利多",
    },
    illustrator: "AKIRA EGAWA",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Psychic"],
    description: {
        en: "Known as “The Being of Emotion.” It taught\nhumans the nobility of sorrow, pain, and joy.",
        fr: "On l'appelle \" être de l'émotion \". Il enseigne aux\nhommes la beauté de la tristesse, la douleur et la joie.",
        es: "Se le conoce como el Ser de la Emoción. Enseñó\na los humanos la nobleza del dolor y la alegría.",
        it: "Detto \"Essere delle emozioni\". Ha insegnato agli\nuomini la nobiltà di tristezza, gioia e dolore.",
        de: "\"Das fühlende Wesen\". Es lehrt die Menschen\ndie Ideale von Trauer, Schmerz und Freude.",
        'pt-br': "Este Pokémon é conhecido como o ser de emoção\ne ensinou aos humanos a nobreza do sofrimento,\nda dor e da alegria.",
        ko: "슬픔의 괴로움과 즐거움의 소중함을\n사람들에게 가르쳐 주었다.\n감정의 신이라 불리고 있다.",
        "zh-tw": "被稱為“情感的存在”。它教導了\n人類是悲傷、痛苦和歡樂的高貴。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Supreme Blast",
                fr: "Explosion Suprême",
                es: "Explosión Suprema",
                it: "Scoppio Supremo",
                de: "Allmächtiger Schuss",
                'pt-br': "Explosão Suprema",
                ko: "갓블라스트",
                "zh-tw": "至尊爆炸"
            },
            damage: 160,
            cost: ["Psychic", "Psychic", "Psychic"],
            effect: {
                en: "You can use this attack only if you have Uxie and Azelf on your Bench. Discard all Energy from this Pokémon.",
                fr: "Vous ne pouvez utiliser cette attaque que si vous avez Créhelf et Créfadet sur votre Banc. Défaussez toutes les Énergies de ce Pokémon.",
                es: "Puedes usar este ataque solo si tienes a Uxie y a Azelf en tu Banca. Descarta todas las Energías de este Pokémon.",
                it: "Puoi usare questo attacco solo se hai Uxie e Azelf in panchina. Rimuovi tutte le Energie assegnate a questo Pokémon.",
                de: "Du kannst diese Attacke nur einsetzen, wenn du Selfe und Tobutz auf deiner Bank hast. Lege alle Energien von diesem Pokémon ab.",
                'pt-br': "Você só pode usar este ataque se tiver Uxie e Azelf no seu Banco. Descarte todas as Energias deste Pokémon.",
                ko: "이 기술은 자신의 벤치에 「유크시」「아그놈」 있을 때만 사용할 수 있다. 이 포켓몬에서 에너지를 모두 트래쉬한다.",
                "zh-tw": "僅當您的替補席上有 Uxie 和 Azelf 時，您才能使用此攻擊。丟棄該神奇寶貝的所有能量。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["dialga", "palkia"]
};
export default card;
