import { Card } from "../../../interfaces";
import Set from "../Promos-A";

const card: Card = {
	set: Set,
	image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/101/e739b188e623097c",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/101/e739b188e623097c",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/101/e739b188e623097c",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/101/e739b188e623097c",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/101/e739b188e623097c",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/101/e739b188e623097c",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/101/e739b188e623097c",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/101/e739b188e623097c",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/101/e739b188e623097c"
    },
	name: {
		en: "Latias",
		fr: "Latias",
		es: "Latias",
		it: "Latias",
		de: "Latias",
		"pt-br": "Latias",
		"zh-tw": "拉帝亞斯",
		ja: "ラティアス",
		ko: "라티아스"
	},
	illustrator: "Yuu Nishida",
	rarity: "One Star",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	description: {
		en: "It communicates using telepathy. Its body is\ncovered in down that refracts light to make\nit invisible.",
		fr: "Il est doué d'empathie. Le duvet qui recouvre son corps réfléchit la lumière et le rend invisible.",
		es: "Se comunica por telepatía. Su plumaje refleja la luz, lo que le permite hacerse invisible.",
		it: "Sa comunicare telepaticamente. Le piume sul suo corpo riflettono la luce e lo rendono invisibile.",
		de: "Es kommuniziert durch Telepathie. Sein Daunenkleid bricht das Licht, sodass es unsichtbar wird.",
		"pt-br": "Comunica-se telepaticamente. Seu corpo é coberto por um pelo fino que refrata luz para fazer Latias ficar invisível.",
		"zh-tw": "能透過心靈感應交流情感。用能令光線折射的羽毛包裹身體來隱藏自己的樣子。",
		ja: "テレパシーで 気持ちを 通わせる。 光を 屈折させる 羽毛で 体を 包み 姿を 消す。",
		ko: "텔레파시로 마음이 통한다.\n빛을 굴절시키는 깃털로\n몸을 둘러싸 모습을 지운다."
	},
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Crossing Flights",
				fr: "Vols Croisés",
				es: "Vuelo Cruzado",
				it: "Volo Incrociato",
				de: "Überkreuzflug",
				"pt-br": "Voos Cruzados",
				"zh-tw": "交錯飛行",
				ja: "クロスフライト",
				ko: "크로스 플라이트"
			},
			damage: "20+",
			cost: ["Psychic"],
			effect: {
				en: "If Latios is on your Bench, this attack does 20 more damage.",
				fr: "Si Latios est sur votre Banc, cette attaque inflige 20 dégâts supplémentaires.",
				es: "Si Latios está en tu Banca, este ataque hace 20 puntos de daño más.",
				it: "Se Latios è nella tua panchina, questo attacco infligge 20 danni in più.",
				de: "Wenn sich Latios auf deiner Bank befindet, fügt diese Attacke 20 Schadenspunkte mehr zu.",
				"pt-br": "Se Latios estiver no seu Banco, este ataque causará 20 pontos de dano a mais.",
				"zh-tw": "若自己的備戰區有「拉帝歐斯」,則增加20點傷害。",
				ja: "自分のベンチに「ラティオス」がいるなら、20ダメージ追加。",
				ko: "자신의 벤치에 「라티오스」가 있다면 20데미지를 추가한다."
			}
		}
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		}
	],
	retreat: 1,
	boosters: []
};

export default card;
