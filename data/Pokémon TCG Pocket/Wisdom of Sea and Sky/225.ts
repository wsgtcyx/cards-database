import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/225",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/225",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/225",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/225",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/225",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/225",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/225",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4/225",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4/225"
    },
    name: {
        en: "Nidoqueen",
        "fr": "Nidoqueen",
        "es": "Nidoqueen",
        "it": "Nidoqueen",
        "de": "Nidoqueen",
        "pt-br": "Nidoqueen",
        "zh-tw": "尼多后",
        ja: "ニドクイン",
        ko: "니드퀸",
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 140,
    types: ["Darkness"],
    evolveFrom: {
        en: "Nidorina",
        "fr": "Nidorina",
        "es": "Nidorina",
        "it": "Nidorina",
        "de": "Nidorina",
        "pt-br": "Nidorina",
        "zh-tw": "尼多娜",
        ja: "ニドリーナ",
        ko: "니드리나",
    },
    description: {
        en: "Nidoqueen is better at defense than offense.\nWith scales like armor, this Pokémon will shield\nits children from any kind of attack.",
        "fr": "Nidoqueen est meilleur en défense qu'en attaque.\nAvec des écailles comme une armure, ce Pokémon fera bouclier\nses enfants de toute sorte d’attaque.",
        "es": "Nidoqueen es mejor en defensa que en ataque.\nCon escamas como armadura, este Pokémon protegerá\nsus hijos de cualquier tipo de ataque.",
        "it": "Nidoqueen è più bravo in difesa che in attacco.\nCon scaglie come un'armatura, questo Pokémon proteggerà\ni suoi figli da ogni tipo di attacco.",
        "de": "Nidoqueen ist besser in der Verteidigung als im Angriff.\nMit schuppenähnlichen Rüstungen schützt dieses Pokémon\nseine Kinder vor Angriffen jeglicher Art.",
        "pt-br": "Nidoqueen é melhor na defesa do que no ataque.\nCom escamas como armadura, este Pokémon irá proteger\nseus filhos de qualquer tipo de ataque.",
        "zh-tw": "尼多女王更擅長防守而不是進攻。\n擁有像盔甲一樣的鱗片，這只神奇寶貝會盾牌\n它的孩子免受任何形式的攻擊。",
        ja: "攻めるよりも 守るほうが 得意。 鎧のような ウロコで いかなる 攻撃からも 子どもを 守る。",
        ko: "공격보다는 방어가 특기다.\n갑옷 같은 비늘로 어떠한\n공격에도 새끼를 지킨다."
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Lovestrike",
                "fr": "Coup d'amour",
                "es": "Golpe de amor",
                "it": "Colpo d'amore",
                "de": "Liebesschlag",
                "pt-br": "Golpe de amor",
                "zh-tw": "愛情罷工",
                ja: "ラブラブアタック",
                ko: "러브러브어택"
            },
            damage: "80+",
            cost: ["Darkness", "Darkness", "Colorless"],
            effect: {
                en: "This attack does 50 more damage for each of your Benched Nidoking.",
                "fr": "Cette attaque inflige 50 dégâts supplémentaires pour chacun de vos Nidoking de banc.",
                "es": "Este ataque hace 50 daños más por cada uno de tus Nidoking en banca.",
                "it": "Questo attacco infligge 50 danni in più per ciascuno dei tuoi Nidoking in panchina.",
                "de": "Dieser Angriff verursacht 50 weitere Schadenspunkte für jeden deiner Nidokings auf der Bank.",
                "pt-br": "Este ataque causa 50 de dano a mais para cada um dos seus Nidoking no Banco.",
                "zh-tw": "此攻擊對你的每個後備尼多王造成 50 點額外傷害。",
                ja: "自分のベンチの「ニドキング」の数×50ダメージ追加。",
                ko: "자신의 벤치의 「니드킹」의 수 × 50데미지를 추가한다."
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["lugia"]
};
export default card;
