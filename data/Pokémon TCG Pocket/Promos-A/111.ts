import { Card } from "../../../interfaces";
import Set from "../Promos-A";

const card: Card = {
	set: Set,
	image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/111/c36caf3540971b18",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/111/c36caf3540971b18",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/111/c36caf3540971b18",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/111/c36caf3540971b18",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/111/c36caf3540971b18",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/111/c36caf3540971b18",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/111/c36caf3540971b18",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/111/c36caf3540971b18",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/111/c36caf3540971b18"
    },
	name: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		de: "Pikachu",
		"pt-br": "Pikachu",
		"zh-tw": "皮卡丘",
		ja: "ピカチュウ",
		ko: "피카츄"
	},
	illustrator: "sui",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	description: {
		en: "When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.",
		fr: "Quand il s'énerve, il libère instantanément\nl'énergie emmagasinée dans les poches de\nses joues.",
		es: "Cuando se enfada, este Pokémon\ndescarga la energía que almacena en\nel interior de las bolsas de las mejillas.",
		it: "Quando s'arrabbia, libera subito l'energia\naccumulata nelle sacche sulle guance.",
		de: "Ist es wütend, entlädt sich augenblicklich die\nElektrizität, die es in seinen Backentaschen\ngespeichert hat.",
		"pt-br": "Quando está com raiva, descarrega\nimediatamente a energia armazenada\nnas bolsas em suas bochechas.",
		ja: "両頬には 電気を 溜めこむ 袋がある。 怒ると 溜めこんだ 電気を 一気に 放ってくる。",
		ko: "양 볼에는 전기를 저장하는 주머니가 있다.\n화가 나면 저장한 전기를 단숨에 방출한다.",
		"zh-tw": "雙頰上有儲存電力的囊袋。一旦生氣就會把儲存的電力一口氣釋放出來。"
	},
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Quick Attack",
				fr: "Vive-Attaque",
				es: "Ataque Rápido",
				it: "Attacco rapido",
				de: "Ruckzuckhieb",
				"pt-br": "Ataque Rápido",
				"zh-tw": "電光一閃",
				ja: "でんこうせっか",
				ko: "전광석화"
			},
			damage: "20+",
			cost: ["Lightning", "Colorless"],
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts de plus.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu.",
				"pt-br": "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
				"zh-tw": "擲1次硬幣若為正面,則增加30點傷害。",
				ja: "コインを1回投げオモテなら、30ダメージ追加。",
				ko: "동전을 1번 던져서 앞면이 나오면 30데미지를 추가한다."
			}
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		}
	],
	retreat: 1,
	boosters: ["vol13"]
};

export default card;
