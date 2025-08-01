import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Chikorita"
	},

	illustrator: "Keisin",
	rarity: "One Star",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		en: "A sweet aroma gently wafts from the leaf on its\nhead. It is docile and loves to soak up sun rays."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Razor Leaf"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card