import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Misdreavus"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "This Pokémon startles people in the middle of\nthe night. It gathers fear as its energy."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Mumble"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card