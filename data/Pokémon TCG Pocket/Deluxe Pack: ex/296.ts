import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
	image: {
		de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/296",
		es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/296",
		fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/296",
		it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/296",
		"zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/296",
		"pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/296",
		en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/296"
	},
	name: {
        en: "Bibarel ex",
        "fr": "Castorno-ex",
        "es": "Bibarel ex",
        "it": "Bibarel-ex",
        "de": "Bidifas-ex",
        "pt-br": "Bibarel ex",
        "zh-tw": "大尾狸ex",
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 160,
    types: ["Colorless"],
    evolveFrom: {
        en: "Bidoof",
        "fr": "Keunotor",
        "es": "Bidoof",
        "it": "Bidoof",
        "de": "Bidiza",
        "pt-br": "Bidoof",
        "zh-tw": "大牙狸",
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Carefree Press",
                "fr": "Presse sans soucis",
                "es": "Prensa despreocupada",
                "it": "Stampa spensierata",
                "de": "Sorglose Presse",
                "pt-br": "Imprensa despreocupada",
                "zh-tw": "無憂出版社"
            },
            damage: 100,
            cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
            effect: {
                en: "Heal 30 damage from this Pokémon.",
                "fr": "Soignez 30 dégâts de ce Pokémon.",
                "es": "Cura 30 puntos de daño de este Pokémon.",
                "it": "Cura questo Pokémon da 30 danni.",
                "de": "Heile 30 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 30 de dano deste Pokémon.",
                "zh-tw": "治療該神奇寶貝造成的 30 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 3
};
export default card;
