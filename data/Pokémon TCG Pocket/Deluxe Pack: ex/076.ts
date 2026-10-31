import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/076",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/076",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/076",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/076",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/076",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/076",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/076",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4b/076",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4b/076"
    },
    name: {
        en: "Heatran",
        "fr": "Heatran",
        "es": "Heatran",
        "it": "Heatran",
        "de": "Heatran",
        "pt-br": "Heatran",
        "zh-tw": "席多藍恩",
        ja: "ヒードラン",
        ko: "히드런",
    },
    illustrator: "Kazumasa Yasukuni",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Fire"],
    description: {
        en: "It dwells in volcanic caves. It digs in with its\ncross-shaped feet to crawl on ceilings and walls.",
        "fr": "Il habite dans des grottes volcaniques. Il creuse avec son\npieds en forme de croix pour ramper sur les plafonds et les murs.",
        "es": "Habita en cuevas volcánicas. Se clava con su\nPies en forma de cruz para gatear por techos y paredes.",
        "it": "Abita nelle grotte vulcaniche. Scava con il suo\npiedi a forma di croce per strisciare su soffitti e pareti.",
        "de": "Es wohnt in vulkanischen Höhlen. Es gräbt sich ein\nkreuzförmige Füße zum Klettern an Decken und Wänden.",
        "pt-br": "Habita cavernas vulcânicas. Ele cava com seu\npés em forma de cruz para rastejar em tetos e paredes.",
        "zh-tw": "它棲息在火山洞穴中。它用它的方式挖掘\n十字形的腳可以在天花板和牆壁上爬行。",
        ja: "火山の 洞穴に 生息。 十字の ツメを 食いこませて 壁や 天井を はい回る。",
        ko: "화산의 동굴에서 서식한다.\n십자형의 발톱을 박아서\n벽이나 천장을 돌아다닌다."
    },
    stage: "Basic",
    abilities: [{
            type: "Ability",
            name: {
                en: "Speed Link",
                "fr": "Lien rapide",
                "es": "Enlace de velocidad",
                "it": "Collegamento veloce",
                "de": "Speedlink",
                "pt-br": "Link de velocidade",
                "zh-tw": "極速鏈接",
                ja: "スピードリンク",
                ko: "스피드 링크"
            },
            effect: {
                en: "If you have Arceus or Arceus ex in play, this Pokémon has no Retreat Cost.",
                "fr": "Si vous avez Arceus ou Arceus ex en jeu, ce Pokémon n'a pas de coût de retraite.",
                "es": "Si tienes a Arceus o Arceus ex en juego, este Pokémon no tiene coste de retirada.",
                "it": "Se hai Arceus o Arceus ex in gioco, questo Pokémon non ha costo di ritirata.",
                "de": "Wenn du Arceus oder Arceus ex im Spiel hast, hat dieses Pokémon keine Rückzugskosten.",
                "pt-br": "Se você tiver Arceus ou Arceus ex em jogo, este Pokémon não terá custo de recuo.",
                "zh-tw": "如果你場上有阿爾宙斯或阿爾宙斯 ex，則該神奇寶貝沒有撤退成本。",
                ja: "自分の場に「アルセウス」または「アルセウスex」がいるなら、このポケモンのにげるためのエネルギーを、すべてなくす。",
                ko: "자신의 필드에 「아르세우스」 또는 「아르세우스 ex」가 있다면 이 포켓몬의 후퇴에 필요한 에너지를 모두 없앤다."
            }
        }],
    attacks: [{
            name: {
                en: "Ragin' Mad Strike",
                "fr": "Frappe folle de Ragin'",
                "es": "Golpe loco furioso",
                "it": "Colpo furioso",
                "de": "Ragin' Mad Strike",
                "pt-br": "Ragin 'Mad Strike",
                "zh-tw": "狂暴的瘋狂打擊",
                ja: "ぶちぎれボンバー",
                ko: "대노봄버"
            },
            damage: "40+",
            cost: ["Fire", "Fire"],
            effect: {
                en: "If this Pokémon has damage on it, this attack does 40 more damage.",
                "fr": "Si ce Pokémon subit des dégâts, cette attaque inflige 40 dégâts supplémentaires.",
                "es": "Si este Pokémon tiene daño, este ataque hace 40 puntos de daño más.",
                "it": "Se questo Pokémon ha dei danni su di sé, questo attacco infligge 40 danni in più.",
                "de": "Wenn dieses Pokémon Schaden hat, fügt dieser Angriff 40 weitere Schadenspunkte zu.",
                "pt-br": "Se este Pokémon sofrer dano, este ataque causará 40 de dano a mais.",
                "zh-tw": "如果這只神奇寶貝受到傷害，則這次攻擊會造成額外 40 點傷害。",
                ja: "このポケモンがダメージを受けているなら、40ダメージ追加。",
                ko: "이 포켓몬이 데미지를 받고 있다면 40데미지를 추가한다."
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 3
};
export default card;
