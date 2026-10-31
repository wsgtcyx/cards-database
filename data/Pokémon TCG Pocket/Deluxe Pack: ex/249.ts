import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";

const card: Card = {
	set: Set,
	image: {
		en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/249",
		de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/249",
		es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/249",
		fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/249",
		it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/249",
		"zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/249",
		"pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/249",
		ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4b/249",
		ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4b/249"
	},
	name: {
		en: "Alolan Diglett",
		fr: "Taupiqueur d'Alola",
		es: "Diglett de Alola",
		it: "Diglett di Alola",
		de: "Alola-Digda",
		"pt-br": "Diglett de Alola",
		"zh-tw": "阿羅拉地鼠",
		ja: "アローラディグダ",
		ko: "알로라 디그다"
	},
	illustrator: "Megumi Mizutani",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],
	description: {
		en: "The metal-rich geology of this Pokémon's habitat\ncaused it to develop steel whiskers on its head.",
		fr: "La géologie riche en métaux de l'habitat de ce Pokémon\nlui a fait développer des moustaches d'acier sur la tête.",
		es: "La geología rica en metales del hábitat de este Pokémon\nle hizo desarrollar bigotes de acero en la cabeza.",
		it: "La geologia ricca di metalli dell'habitat di questo Pokémon\ngli ha fatto sviluppare baffi d'acciaio sulla testa.",
		de: "Die metallreiche Geologie des Lebensraums dieses Pokémon\nverursachte, dass es stählerne Barthaare auf seinem Kopf entwickelte.",
		"pt-br": "A geologia rica em metais do habitat deste Pokémon\nfez com que desenvolvesse bigodes de aço em sua cabeça.",
		"zh-tw": "該神奇寶貝棲息地富含金屬的地質\n導致它的頭上長出了鋼須。",
		ja: "金属成分を 多く 含む 地質が 影響して 鋼の ひげが 頭から 生えてきた。",
		ko: "금속 성분이 많이 포함된\n지질의 영향으로 강철\n수염이 머리에 났다."
	},
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Happened to Headbutt",
				fr: "C'est arrivé à un coup de tête",
				es: "Le pasó al cabezazo",
				it: "È successo a Testata",
				de: "Ist beim Kopfstoß passiert",
				"pt-br": "Aconteceu com cabeçada",
				"zh-tw": "發生了頭撞事件",
				ja: "ひょっこりヘッド",
				ko: "빼꼼헤드"
			},
			damage: 40,
			cost: ["Metal"],
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce de monnaie. Si c’est pile, cette attaque ne fait rien.",
				es: "Lanza una moneda. Si sale cruz, este ataque no hace nada.",
				it: "Lancia una moneta. Se esce croce, questo attacco non ha alcun effetto.",
				de: "Wirf eine Münze. Bei „Zahl“ bewirkt dieser Angriff nichts.",
				"pt-br": "Jogue uma moeda. Se der coroa, este ataque não faz nada.",
				"zh-tw": "拋一枚硬幣。如果是反面，則此攻擊不會執行任何操作。",
				ja: "コインを1回投げウラなら、このワザは失敗。",
				ko: "동전을 1번 던져서 뒷면이 나오면 이 기술은 실패한다."
			}
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		}
	],
	retreat: 1
};

export default card;
