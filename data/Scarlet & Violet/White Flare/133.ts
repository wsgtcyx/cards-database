import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	set: Set,

	name: {
		en: "Mienfoo",
		fr: "Kungfouine",
		de: "Lin-Fu",
		it: "Mienfoo",
		pt: "Mienfoo",
		es: "Mienfoo",
		'es-mx': "Mienfoo"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Kick",
			fr: "Koud'Pied",
			de: "Tritt",
			it: "Calcio",
			pt: "Chute",
			es: "Patada",
			'es-mx': "Patada"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card