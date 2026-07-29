import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";

const card: Card = {
	set: Set,
	image: {
		en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/083",
		de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/083",
		es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/083",
		fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/083",
		it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/083",
		"zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/083"
	},
	name: {
		en: "Squirtle",
		fr: "Carapuce",
		es: "Squirtle",
		it: "Squirtle",
		de: "Schiggy",
		"pt-br": "Squirtle",
		"zh-tw": "傑尼龜"
	},
	illustrator: "Mizue",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Water"],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				es: "Pistola Agua",
				it: "Pistolacqua",
				de: "Aquaknarre",
				"pt-br": "Revólver d'Água",
				ko: "물대포",
				"zh-tw": "水槍"
			},
			damage: "20"
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		}
	],
	retreat: 1,
	rarity: "One Diamond",
	description: {
		en: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
		fr: "Quand il rentre son cou dans sa carapace,\nil peut projeter de l'eau à haute pression.",
		es: "Cuando retrae su largo cuello en el caparazón,\ndispara agua a una presión increíble.",
		it: "Quando ritrae il lungo collo dentro la\ncorazza sputa un vigoroso getto d'acqua.",
		de: "Zieht es seinen langen Hals in seinen Panzer\nzurück, verspritzt es Wasser mit unbändiger Kraft.",
		"pt-br": "Ao retrair o pescoço longo para dentro\ndo seu casco, lança um jato de água\nmuito poderoso.",
		ko: "기다란 목을 등껍질 속에\n감춘 다음 기세 좋게\n물대포를 발사한다.",
		"zh-tw": "當它把長長的脖子縮進殼裡時，就會用力噴出水。"
	}
};

export default card;
