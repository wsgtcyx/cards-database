import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";

const card: Card = {
	set: Set,
	image: {
		en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/038",
		de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/038",
		es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/038",
		fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/038",
		it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/038",
		"zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/038",
		"pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/038"
	},
	name: {
		en: "Rowlet",
		fr: "Brindibou",
		es: "Rowlet",
		it: "Rowlet",
		de: "Bauz",
		"pt-br": "Rowlet",
		"zh-tw": "木木梟"
	},
	illustrator: "Saya Tsuruta",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	description: {
		en: "It sends its feathers, which are as sharp as blades, flying in attack. Its legs are strong, so its kicks are also formidable.",
		fr: "Il attaque en tirant des plumes acérées. La force\nde ses coups de patte est également redoutable.",
		es: "Usa sus afiladas plumas como arma arrojadiza y la\nfuerza de sus patas le permite asestar poderosas\npatadas que es mejor no subestimar.",
		it: "Attacca lanciando piume affilate come lame e può\nanche tirare poderosi calci con le zampe robuste.",
		de: "Es schleudert messerscharfe Federn auf seine Gegner.\nAber auch seine Tritte sind nicht zu unterschätzen,\ndenn es hat sehr kräftige Beine.",
		"pt-br": "Quando atacam, lançam suas penas, que são tão cortantes\nquanto lâminas. Suas pernas são robustas, por isso,\nseus chutes também são formidáveis.",
		ko: "칼같이 날카로운 날개를 날려\n공격한다. 발의 힘도 강해\n킥도 무시할 수 없다.",
		"zh-tw": "飛舞著鋒利如刀刃的羽毛進行攻擊。它的腿很強壯，所以它的踢腿也很強大。"
	},
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Skill Dive",
				fr: "Plongeon Contrôlé",
				es: "Técnica de Buceo",
				it: "Agiltuffo",
				de: "Geübter Sturzflug",
				"pt-br": "Mergulho Habilidoso",
				ko: "직격비행",
				"zh-tw": "技能潛水"
			},
			cost: ["Grass"],
			effect: {
				en: "This attack does 10 damage to 1 of your opponent's Pokémon.",
				fr: "Cette attaque inflige 10 dégâts à l'un des Pokémon de votre adversaire.",
				es: "Este ataque hace 10 puntos de daño a 1 de los Pokémon de tu rival.",
				it: "Questo attacco infligge 10 danni a uno dei Pokémon\ndel tuo avversario.",
				de: "Diese Attacke fügt 1 Pokémon deines Gegners 10 Schadenspunkte zu.",
				"pt-br": "Este ataque causa 10 pontos de dano a 1 dos Pokémon do seu oponente.",
				ko: "상대의 포켓몬 1마리에게 10데미지를 준다.",
				"zh-tw": "這次攻擊對對手的 1 只神奇寶貝造成 10 點傷害。"
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
