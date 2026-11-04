import { Card } from "../../../interfaces";
import Set from "../Promos-A";

const card: Card = {
	set: Set,
	image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/106/a783188bc8ec82e3",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/106/a783188bc8ec82e3",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/106/a783188bc8ec82e3",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/106/a783188bc8ec82e3",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/106/a783188bc8ec82e3",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/106/a783188bc8ec82e3",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/106/a783188bc8ec82e3",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/106/a783188bc8ec82e3",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/106/a783188bc8ec82e3"
    },
	name: {
		en: "Zoroark",
		fr: "Zoroark",
		es: "Zoroark",
		it: "Zoroark",
		de: "Zoroark",
		"pt-br": "Zoroark",
		"zh-tw": "索羅亞克",
		ja: "ゾロアーク",
		ko: "조로아크"
	},
	illustrator: "matazo",
	rarity: "One Star",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	evolveFrom: {
		en: "Zorua",
		fr: "Zorua",
		es: "Zorua",
		it: "Zorua",
		de: "Zorua",
		"pt-br": "Zorua",
		"zh-tw": "索羅亞",
		ja: "ゾロア",
		ko: "조로아"
	},
	description: {
		en: "Stories say those who tried to catch Zoroark were\ntrapped in an illusion and punished.",
		fr: "On dit que ceux qui osent tenter de le capturer restent prisonniers des paysages illusoires qu'il peut créer.",
		es: "Se dice que Zoroark atrapa en un mundo de ilusiones a quien lo intenta capturar y que, de esta manera, lo castiga.",
		it: "Gira voce che quelli che osano cercare di catturarlo restano imprigionati dentro mondi di fantasia che lui stesso crea.",
		de: "Es heißt, Zoroark verbanne jeden, der es zu fangen versucht, zur Strafe in eine Welt der Illusionen.",
		"pt-br": "Dizem as lendas que aqueles que tentaram capturar Zoroark foram aprisionados em uma ilusão e punidos.",
		"zh-tw": "據說索羅亞克會把企圖捕捉牠的人關在虛幻的景色裡給予教訓。",
		ja: "ゾロアークを 捕らえようとした 人を 幻の 景色の中に 閉じこめ こらしめた といわれる。",
		ko: "조로아크를 잡으려 한 사람을\n환영의 경치 속에 가둬서\n혼내 줬다고 전해진다."
	},
	stage: "Stage1",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Illusive Trickery",
				fr: "Supercherie illusoire",
				es: "Truco ilusorio",
				it: "Tranello Illusorio",
				de: "Trügerische Trickserei",
				"pt-br": "Truque Ilusivo",
				"zh-tw": "虛幻的詭計",
				ja: "げんえいトリック",
				ko: "환영트릭"
			},
			effect: {
				en: "If your opponent's Pokémon is Knocked Out by damage from this Pokémon's attacks, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
				fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts des attaques de ce Pokémon, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
				es: "Si alguno de los Pokémon de tu rival queda Fuera de Combate por el daño de los ataques de este Pokémon, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
				it: "Se un Pokémon del tuo avversario viene messo KO dai danni degli attacchi di questo Pokémon, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
				de: "Wenn das Pokémon deines Gegners durch Schaden der Attacken dieses Pokémon kampfunfähig wird, verhindere während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
				"pt-br": "Se o Pokémon do seu oponente for Nocauteado pelo dano dos ataques deste Pokémon, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
				"zh-tw": "若對手的寶可夢因這隻寶可夢招式的傷害而昏厥了,則在下個對手的回合,這隻寶可夢不會受到招式的傷害與效果的影響。",
				ja: "このポケモンのワザのダメージで、相手のポケモンがきぜつしたなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
				ko: "이 포켓몬의 기술의 데미지로 상대의 포켓몬이 기절했다면 상대의 다음 차례에 이 포켓몬은 기술의 데미지나 효과를 받지 않는다."
			}
		}
	],
	attacks: [
		{
			name: {
				en: "Night Daze",
				fr: "Explonuit",
				es: "Pulso Noche",
				it: "Urtoscuro",
				de: "Nachtflut",
				"pt-br": "Ofuscamento Noturno",
				"zh-tw": "暗黑爆破",
				ja: "ナイトバースト",
				ko: "나이트버스트"
			},
			damage: 70,
			cost: ["Darkness", "Darkness"]
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		}
	],
	retreat: 2,
	boosters: ["vol12"]
};

export default card;
