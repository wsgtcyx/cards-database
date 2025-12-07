import { Card } from "../../../interfaces";
import Set from "../Celestial Guardians";
const card: Card = {
    set: Set,
    name: {
        en: "Araquanid",
        fr: "Tarenbulle",
        es: "Araquanid",
        it: "Araquanid",
        de: "Aranestro",
        'pt-br': "Araquanid",
        ko: "깨비물거미",
        "zh-tw": "滴蛛霸",
    },
    illustrator: "kodama",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Water"],
    evolveFrom: {
        en: "Dewpider",
        "fr": "Dewpider",
        "es": "Dewpider",
        "it": "Dewpider",
        "de": "Taupider",
        "pt-br": "Dewpider",
        "zh-tw": "露皮德"
    },
    description: {
        en: "It launches water bubbles with its legs, drowning prey within the bubbles. This Pokémon can then take its time to savor its meal.",
        fr: "Il piège ses proies dans des bulles qu'il lance\navec ses pattes. Une fois qu'elles se sont noyées,\nil prend son temps pour les déguster.",
        es: "Usa las patas para lanzar burbujas de agua con las que atrapa y\nahoga a sus presas. Luego se toma su tiempo para saborearlas.",
        it: "Con le zampe lancia bolle d'acqua contro la preda per farla\nannegare. Dopo averla catturata, se la gusta senza fretta.",
        de: "Mit seinen Beinen verschießt es Wasserblasen,\num Beute darin einzuschließen und zu ertränken.\nDann verspeist es sie in aller Ruhe.",
        'pt-br': "Lança bolhas de água com suas pernas, afogando suas\npresas dentro delas. Depois, este Pokémon consegue tirar\num tempo para saborear sua refeição.",
        ko: "다리로 수포를 날려서\n먹이를 감싼 다음 익사시킨다.\n그리고는 시간을 들여 천천히 음미한다.",
        "zh-tw": "它用腿發射水泡，將獵物淹沒在氣泡中。然後這只神奇寶貝就可以慢慢地品嚐它的食物了。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Dangerous Claws",
                fr: "Griffes Redoutables",
                es: "Zarpas Peligrosas",
                it: "Artigli Pericolosi",
                de: "Bedrohliche Klauen",
                'pt-br': "Garras Temerárias",
                ko: "데인저러스 크루",
                "zh-tw": "危險的利爪"
            },
            damage: "60+",
            cost: ["Water", "Water", "Colorless"],
            effect: {
                en: "If your opponent's Active Pokémon is a Basic Pokémon, this attack does 60 more damage.",
                fr: "Si le Pokémon Actif de votre adversaire est un Pokémon de base, cette attaque inflige 60 dégâts supplémentaires.",
                es: "Si el Pokémon Activo de tu rival es un Pokémon Básico, este ataque hace 60 puntos de daño más.",
                it: "Se il Pokémon attivo del tuo avversario è un Pokémon Base, questo attacco infligge 60 danni in più.",
                de: "Wenn das Aktive Pokémon deines Gegners ein Basis-Pokémon ist, fügt diese Attacke 60 Schadenspunkte mehr zu.",
                ko: "상대의 배틀 포켓몬이 기본 포켓몬i_라면 60데미지를 추가한다.",
                'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon Básico, este ataque causará 60 pontos de dano a mais.",
                "zh-tw": "如果對手的活躍寶可夢是基礎寶可夢，則這次攻擊造成的傷害增加 60 點。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["solgaleo"]
};
export default card;
