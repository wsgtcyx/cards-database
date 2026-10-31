import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/118",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/118",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/118",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/118",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/118",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/118",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/118",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/118",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/118"
    },
    name: {
        en: "Slurpuff",
        "fr": "Cupcanaille",
        "es": "Slurpuff",
        "it": "Slurpuff",
        "de": "Sabbaione",
        "pt-br": "Slurpuff",
        "zh-tw": "胖甜妮",
        ja: "ペロリーム",
        ko: "나루림",
    },
    illustrator: "Mizue",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Psychic"],
    evolveFrom: {
        en: "Swirlix",
        "fr": "Sucroquin",
        "es": "Swirlix",
        "it": "Swirlix",
        "de": "Flauschling",
        "pt-br": "Swirlix",
        "zh-tw": "綿綿泡芙",
        ja: "ペロッパフ",
        ko: "나룸퍼프",
    },
    description: {
        en: "Slurpuff's fur contains a lot of air, making it soft\nto the touch and lighter than it looks.",
        "fr": "La fourrure de Slurpuff contient beaucoup d'air, ce qui la rend douce\nau toucher et plus léger qu'il n'y paraît.",
        "es": "El pelaje de Slurpuff contiene mucho aire, lo que lo hace suave.\nAl tacto y más ligero de lo que parece.",
        "it": "La pelliccia di Slurpuff contiene molta aria, il che la rende morbida\nal tatto e più leggero di quanto sembri.",
        "de": "Das Fell von Slurpuff enthält viel Luft und ist dadurch weich\nfühlt sich angenehm an und ist leichter als es aussieht.",
        "pt-br": "O pelo do Slurpuff contém muito ar, o que o torna macio\nao toque e mais leve do que parece.",
        "zh-tw": "slurpuff的皮毛含有大量空氣，使其柔軟\n摸起來比看起來更輕。",
        ja: "体毛に たくさん 空気を 含んでいるので 触り心地は 柔らかく 見た目より 軽い。",
        ko: "털에 많은 공기를 담고 있어\n촉감이 부드럽고\n보기보다 가볍다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Draining Kiss",
                "fr": "Baiser drainant",
                "es": "Beso drenante",
                "it": "Bacio drenante",
                "de": "Erschöpfender Kuss",
                "pt-br": "Drenando Beijo",
                "zh-tw": "排水之吻",
                ja: "ドレインキッス",
                ko: "드레인키스"
            },
            damage: 50,
            cost: ["Psychic", "Colorless"],
            effect: {
                en: "Heal 30 damage from this Pokémon.",
                "fr": "Soignez 30 dégâts de ce Pokémon.",
                "es": "Cura 30 puntos de daño de este Pokémon.",
                "it": "Cura questo Pokémon da 30 danni.",
                "de": "Heile 30 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 30 de dano deste Pokémon.",
                "zh-tw": "治療該神奇寶貝造成的 30 點傷害。",
                ja: "このポケモンのHPを30回復。",
                ko: "이 포켓몬의 HP를 30회복."
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 3,
	boosters: [
		"mega-altaria"
	]
};
export default card;
