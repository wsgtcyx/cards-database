import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/309",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/309",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/309",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/309",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/309",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/309",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/309",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/309",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/309"
    },
    name: {
        en: "Golem",
        "fr": "Grolem",
        "es": "Golem",
        "it": "Golem",
        "de": "Geowaz",
        "pt-br": "Golem",
        "zh-tw": "隆隆岩",
        ja: "ゴローニャ",
        ko: "딱구리",
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 160,
    types: ["Fighting"],
    evolveFrom: {
        en: "Graveler",
        "fr": "Gravalanch",
        "es": "Graveler",
        "it": "Graveler",
        "de": "Georok",
        "pt-br": "Graveler",
        "zh-tw": "隆隆石",
        ja: "ゴローン",
        ko: "데구리",
    },
    description: {
        en: "When Golem grow old, they stop shedding their\nshells. Those that have lived a long, long time\nhave shells green with moss.",
        "fr": "Quand les Golem vieillissent, ils arrêtent de perdre leurs\ncoquilles. Ceux qui ont vécu très, très longtemps\nont des coquilles vertes avec de la mousse.",
        "es": "Cuando los Golem envejecen, dejan de perder su\nconchas. Aquellos que han vivido mucho, mucho tiempo.\ntienen conchas verdes con musgo.",
        "it": "Quando i Golem invecchiano, smettono di perdere i loro\nconchiglie. Quelli che hanno vissuto molto, molto tempo\nhanno conchiglie verdi di muschio.",
        "de": "Wenn Golems älter werden, hören sie auf, ihre Haare zu verlieren\nMuscheln. Diejenigen, die schon sehr lange gelebt haben\nhaben Muscheln, die grün mit Moos sind.",
        "pt-br": "Quando o Golem envelhece, ele para de se livrar de seus\nconchas. Aqueles que viveram muito, muito tempo\ntêm conchas verdes com musgo.",
        "zh-tw": "當傀儡變老時，他們會停止脫落\n貝殼。那些活了很久很久的人\n貝殼綠色，長滿青苔。",
        ja: "年老いると 脱皮 しなくなる。 長く長く 生きた ゴローニャの カラは 苔むしていて 緑だ。",
        ko: "나이가 들면 탈피를 하지 않는다.\n긴 세월을 산 딱구리의 껍질은\n이끼가 끼어 초록색이다."
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Guard Press",
                "fr": "Presse de garde",
                "es": "Prensa de guardia",
                "it": "Stampa della Guardia",
                "de": "Gardepresse",
                "pt-br": "Imprensa da Guarda",
                "zh-tw": "守衛壓力機",
                ja: "ガードプレス",
                ko: "가드프레스"
            },
            damage: 120,
            cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
            effect: {
                en: "During your opponent's next turn, this Pokémon takes −30 damage from attacks.",
                "fr": "Lors du prochain tour de votre adversaire, ce Pokémon subit -30 dégâts des attaques.",
                "es": "Durante el próximo turno de tu rival, este Pokémon recibe -30 de daño por ataques.",
                "it": "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -30 danni dagli attacchi.",
                "de": "Während des nächsten Zuges deines Gegners erleidet dieses Pokémon −30 Schadenspunkte durch Angriffe.",
                "pt-br": "Durante o próximo turno do seu oponente, este Pokémon sofrerá -30 de dano de ataques.",
                "zh-tw": "在對手的下一個回合中，這只神奇寶貝受到的攻擊傷害為-30。",
                ja: "次の相手の番、このポケモンが受けるワザのダメージを-30する。",
                ko: "상대의 다음 차례에 이 포켓몬이 받는 기술의 데미지를 -30한다."
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 3,
	boosters: [
		"mega-blaziken"
	]
};
export default card;
