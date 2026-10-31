import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/011",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/011",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/011",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/011",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/011",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/011",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/011",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/011",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/011"
    },
    name: {
        en: "Shroomish",
        "fr": "Balignon",
        "es": "Shroomish",
        "it": "Shroomish",
        "de": "Knilz",
        "pt-br": "Shroomish",
        "zh-tw": "蘑蘑菇",
        ja: "キノココ",
        ko: "버섯꼬",
    },
    illustrator: "Naoyo Kimura",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    description: {
        en: "If it senses danger, it scatters spores from the top\nof its head to protect itself.",
        "fr": "S'il détecte un danger, il disperse les spores par le haut\nde sa tête pour se protéger.",
        "es": "Si siente peligro, esparce esporas desde la parte superior.\nde su cabeza para protegerse.",
        "it": "Se avverte il pericolo, sparge le spore dall'alto\ndella testa per proteggersi.",
        "de": "Wenn es Gefahr wittert, streut es Sporen von oben aus\nseines Kopfes, um sich zu schützen.",
        "pt-br": "Se sentir perigo, espalha esporos do topo\nde sua cabeça para se proteger.",
        "zh-tw": "如果它感覺到危險，就會從頂部散佈孢子\n的頭來保護自己。",
        ja: "危険を 感じると 頭の てっぺんから 毒の 胞子を ばらまき 身を 守る ポケモン。",
        ko: "위험을 감지하면\n정수리에서 독 포자를 뿌려\n몸을 지키는 포켓몬이다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Tackle",
                "fr": "Tacle",
                "es": "Abordar",
                "it": "Attrezzatura",
                "de": "Tackle",
                "pt-br": "Enfrentar",
                "zh-tw": "處理",
                ja: "たいあたり",
                ko: "몸통박치기"
            },
            damage: 20,
            cost: ["Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
	boosters: [
		"mega-altaria",
		"mega-blaziken",
		"mega-gyarados"
	]
};
export default card;
