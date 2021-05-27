import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Dunaja",
		en: "Silicobra"
	},

	illustrator: "Akira Komayama",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	attacks: [{
		name: {
			fr: "Jet de Sable",
			en: "Sand Attack"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, si le Pokémon Défenseur essaie d’attaquer, votre adversaire lance une pièce. Si c’est pile, l’attaque n’est pas lancée.",
			en: "During your opponent’s next turn, if the Defending Pokémon tries to attack, your opponent flips a coin. If tails, that attack doesn’t happen."
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card