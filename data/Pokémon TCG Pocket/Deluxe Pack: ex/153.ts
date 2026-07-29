import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";

const card: Card = {
	set: Set,
	image: {
		en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/153",
		de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/153",
		es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/153",
		fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/153",
		it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/153",
		"zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/153"
	},
	name: {
		en: "Haunter",
		fr: "Spectrum",
		es: "Haunter",
		it: "Haunter",
		de: "Alpollo",
		"pt-br": "Haunter",
		"zh-tw": "鬼斯通"
	},
	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Stage1",
	evolveFrom: {
		en: "Gastly",
		fr: "Fantominus",
		es: "Gastly",
		it: "Gastly",
		de: "Nebulak",
		"pt-br": "Gastly",
		"zh-tw": "鬼斯"
	},
	attacks: [
		{
			cost: ["Psychic"],
			name: {
				en: "Will-O-Wisp",
				fr: "Feu Follet",
				es: "Fuego Fatuo",
				it: "Fuocofatuo",
				de: "Irrlicht",
				"pt-br": "Fogo Fátuo",
				ko: "도깨비불",
				"zh-tw": "鬼火"
			},
			damage: "30"
		}
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		}
	],
	retreat: 1,
	rarity: "Two Diamond",
	description: {
		en: "It likes to lurk in the dark and tap shoulders with a gaseous hand. Its touch causes endless shuddering.",
		fr: "Il adore se tapir dans l'ombre et faire frissonner\nses proies pour l'éternité en leur touchant l'épaule.",
		es: "Le gusta acechar en la oscuridad y tocarles el\nhombro a sus víctimas con su mano gaseosa.\nEstas se quedan temblando para siempre.",
		it: "Adora stare in agguato nei luoghi bui e toccare\nle spalle delle vittime con le sue mani gassose.\nIl suo tocco causa brividi incontenibili.",
		de: "Es lauert gern im Dunkeln und tippt Leuten mit\nseiner gasförmigen Hand auf die Schulter.\nSeine Berührung erzeugt endloses Schaudern.",
		"pt-br": "Gosta de se esconder no escuro e bater nos\nombros dos outros com sua mão gasosa.\nSeu toque causa arrepios que não acabam mais.",
		ko: "어둠을 틈타 가스로 된 손을 뻗쳐\n사람의 어깨를 두드리기 좋아한다.\n그 손에 닿으면 떨림이 멈추지 않는다.",
		"zh-tw": "牠喜歡潛伏在黑暗中，用氣態的手輕拍肩膀。它的觸碰引起無盡的顫抖。"
	}
};

export default card;
