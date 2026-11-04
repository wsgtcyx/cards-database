import { Card } from "../../../interfaces";
import Set from "../Promos-A";

const card: Card = {
	set: Set,
	image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/113/c6bf6bb9a979400b",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/113/c6bf6bb9a979400b",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/113/c6bf6bb9a979400b",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/113/c6bf6bb9a979400b",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/113/c6bf6bb9a979400b",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/113/c6bf6bb9a979400b",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/113/c6bf6bb9a979400b",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/113/c6bf6bb9a979400b",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/113/c6bf6bb9a979400b"
    },
	name: {
		en: "Mimikyu",
		fr: "Mimiqui",
		es: "Mimikyu",
		it: "Mimikyu",
		de: "Mimigma",
		"pt-br": "Mimikyu",
		"zh-tw": "謎擬Ｑ",
		ja: "ミミッキュ",
		ko: "따라큐"
	},
	illustrator: "Yuka Morii",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	description: {
		en: "This Pokémon lives in dark places untouched by\nsunlight. When it appears before humans, it hides\nitself under a cloth that resembles a Pikachu.",
		fr: "Il vit dans les lieux sombres, à l'abri du soleil. Lorsqu'il se montre, il dissimule tout son corps sous un déguisement qui rappelle Pikachu.",
		es: "Vive en lugares oscuros donde no llega el sol. Cuando se deja ver por la gente, oculta todo su cuerpo bajo un saco con aspecto de Pikachu.",
		it: "Vive nell'ombra, lontano dalla luce del sole. Quando appare davanti alle persone si nasconde sotto un panno che somiglia a un Pikachu.",
		de: "Es lebt an dunklen Orten ohne Sonnenlicht. Menschen zeigt es sich nur, wenn es mit einem Lumpen bedeckt ist, der aussieht wie ein Pikachu.",
		"pt-br": "Este Pokémon vive em lugares escuros livres da luz do sol. Quando aparece diante de humanos, esconde-se sob um pano parecido com Pikachu.",
		"zh-tw": "棲息在陽光照射不到的陰暗處。在人們面前現身時會用看似皮卡丘的布來隱藏全身。",
		ja: "陽の 当たらない 暗がりに 棲む。 人前に 出るときは ピカチュウに 似せた 布で 全身を 隠す。",
		ko: "볕이 들지 않는 어두운 곳에 산다.\n사람들 앞에 나타날 때는\n피카츄를 본뜬 천으로 온몸을 가린다."
	},
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Try to Imitate",
				fr: "Tentative d'Imitation",
				es: "Intento de Imitación",
				it: "Prova a imitare",
				de: "Imitationsversuch",
				"pt-br": "Tentar Imitar",
				"zh-tw": "試著模仿",
				ja: "まねてみる",
				ko: "흉내내보기"
			},
			cost: ["Psychic", "Psychic"],
			effect: {
				en: "Flip a coin. If heads, choose 1 of your opponent's Active Pokémon's attacks and use it as this attack.",
				fr: "Lancez une pièce. Si c'est face, choisissez l'une des attaques du Pokémon Actif de votre adversaire et utilisez‐la en tant que cette attaque.",
				es: "Lanza 1 moneda. Si sale cara, elige 1 de los ataques del Pokémon Activo de tu rival y úsalo para este ataque.",
				it: "Lancia una moneta. Se esce testa, scegli un attacco del Pokémon attivo del tuo avversario e usalo al posto di questo attacco.",
				de: "Wirf 1 Münze. Wähle bei Kopf 1 Attacke des Aktiven Pokémon deines Gegners und setze sie als diese Attacke ein.",
				"pt-br": "Jogue uma moeda. Se sair cara, escolha 1 dos ataques do Pokémon Ativo do seu oponente e use-o como este ataque.",
				"zh-tw": "擲1次硬幣若為正面,則選擇對手的戰鬥寶可夢持有的1個招式,作為這個招式使用。",
				ja: "コインを1回投げオモテなら、相手のバトルポケモンが持っているワザを1つ選び、このワザとして使う。",
				ko: "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬이 가지고 있는 기술을 1개 선택해서 이 기술로써 사용한다."
			}
		}
	],
	weaknesses: [
		{
			type: "Metal",
			value: "+20"
		}
	],
	retreat: 1,
	boosters: ["vol13"]
};

export default card;
