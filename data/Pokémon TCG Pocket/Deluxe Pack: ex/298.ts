import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
	image: {
		de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/298",
		es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/298",
		fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/298",
		it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/298",
		"zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/298",
		"pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/298",
		en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/298",
		ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4b/298"
	},
	name: {
        en: "Shaymin",
        "fr": "Shaymin",
        "es": "Shaymin",
        "it": "Shaymin",
        "de": "Shaymin",
        "pt-br": "Shaymin",
        "zh-tw": "謝米",
        ja: "シェイミ",
    },
    illustrator: "Mizue",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Colorless"],
    description: {
        en: "It can dissolve toxins in the air to instantly\ntransform ruined land into a lush field of flowers.",
        "fr": "Il peut dissoudre instantanément les toxines dans l'air.\ntransformez une terre en ruine en un champ de fleurs luxuriant.",
        "es": "Puede disolver toxinas en el aire al instante.\ntransforma la tierra en ruinas en un exuberante campo de flores.",
        "it": "Può dissolvere istantaneamente le tossine nell'aria\ntrasformare la terra in rovina in un rigoglioso campo di fiori.",
        "de": "Es kann Giftstoffe in der Luft sofort auflösen\nVerwandeln Sie zerstörtes Land in ein üppiges Blumenfeld.",
        "pt-br": "Pode dissolver toxinas no ar instantaneamente\ntransformar terras em ruínas em um exuberante campo de flores.",
        "zh-tw": "能瞬間溶解空氣中的毒素\n將荒蕪的土地變成鬱鬱蔥蔥的花田。",
        ja: "大気の 毒素を 分解して 荒れた 大地を 一瞬のうちに 花畑にする 力を 持つ。"
    },
    stage: "Basic",
    abilities: [{
            type: "Ability",
            name: {
                en: "Sky Support",
                "fr": "Assistance Ciel",
                "es": "Soporte del cielo",
                "it": "Supporto Sky",
                "de": "Sky-Support",
                "pt-br": "Suporte Sky",
                "zh-tw": "天空支持",
                ja: "スカイサポート"
            },
            effect: {
                en: "As long as this Pokémon is on your Bench, your Active Basic Pokémon's Retreat Cost is 1 less.",
                "fr": "Tant que ce Pokémon est sur votre Banc, le Coût de Retraite de votre Pokémon Actif de Base est de 1 de moins.",
                "es": "Mientras este Pokémon esté en tu Banca, el Coste de Retirada de tu Pokémon Básico Activo es 1 menos.",
                "it": "Fintanto che questo Pokémon è nella tua panchina, il costo di ritirata del tuo Pokémon Base attivo è di 1 in meno.",
                "de": "Solange sich dieses Pokémon auf deiner Bank befindet, betragen die Rückzugskosten deines aktiven Basis-Pokémon 1 weniger.",
                "pt-br": "Enquanto este Pokémon estiver no seu Banco, o Custo de Recuo do seu Pokémon Básico Ativo será 1 a menos.",
                "zh-tw": "只要這只神奇寶貝在你的替補席上，你的活躍基礎神奇寶貝的撤退成本就會減少 1。",
                ja: "このポケモンがベンチにいるかぎり、自分のバトル場のたねポケモンのにげるためのエネルギーを、1個少なくする。"
            }
        }],
    attacks: [{
            name: {
                en: "Flap",
                "fr": "Rabat",
                "es": "Solapa",
                "it": "Patta",
                "de": "Klappe",
                "pt-br": "Aba",
                "zh-tw": "皮瓣",
                ja: "はばたく"
            },
            damage: 30,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
