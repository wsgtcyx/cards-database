import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/256",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/256",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/256",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/256",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/256",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/256",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/256",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/256",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/256"
    },
    name: {
        en: "Greninja ex",
        "fr": "Amphinobi-ex",
        "es": "Greninja ex",
        "it": "Greninja-ex",
        "de": "Quajutsu-ex",
        "pt-br": "Greninja ex",
        "zh-tw": "甲賀忍蛙ex",
        ja: "ゲッコウガex",
        ko: "개굴닌자 ex",
    },
    illustrator: "PLANETA Saito",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 170,
    types: ["Water"],
    evolveFrom: {
        en: "Frogadier",
        "fr": "Croâporal",
        "es": "Frogadier",
        "it": "Frogadier",
        "de": "Amphizel",
        "pt-br": "Frogadier",
        "zh-tw": "呱頭蛙",
        ja: "ゲコガシラ",
        ko: "개굴반장",
    },
    stage: "Stage2",
    suffix: "EX",
    abilities: [{
            type: "Ability",
            name: {
                en: "Shifting Stream",
                "fr": "Flux changeant",
                "es": "Corriente cambiante",
                "it": "Flusso mutevole",
                "de": "Wechselnder Strom",
                "pt-br": "Mudança de fluxo",
                "zh-tw": "轉移流",
                ja: "すいりゅうへんげ",
                ko: "수류변화"
            },
            effect: {
                en: "Once during your turn, you may switch your Active {W} Pokémon with 1 of your Benched Pokémon.",
                "fr": "Une fois pendant votre tour, vous pouvez échanger votre Pokémon {W} Actif avec 1 de votre Pokémon de Banc.",
                "es": "Una vez durante tu turno, puedes cambiar tu Pokémon Activo {W} por 1 de tus Pokémon en Banca.",
                "it": "Una sola volta durante il tuo turno, puoi scambiare il tuo Pokémon attivo {W} con 1 dei tuoi Pokémon in panchina.",
                "de": "Einmal während deines Zuges kannst du dein Aktives {W}-Pokémon gegen 1 Pokémon auf deiner Bank austauschen.",
                "pt-br": "Uma vez durante o seu turno, você pode trocar seu Pokémon Ativo {W} por 1 dos seus Pokémon no Banco.",
                "zh-tw": "在你的回合中，你可以將你的活躍 {W} 神奇寶貝與你的 1 只後備神奇寶貝交換。",
                ja: "自分の番に1回使える。自分のバトル場の{W}ポケモンを、ベンチポケモンと入れ替える。",
                ko: "자신의 차례에 1번 사용할 수 있다. 자신의 배틀필드의 {W}포켓몬을 벤치 포켓몬과 교체한다."
            }
        }],
    attacks: [{
            name: {
                en: "Aqua Edge",
                "fr": "Bord Aqua",
                "es": "Borde acuático",
                "it": "Bordo acquatico",
                "de": "Aqua Edge",
                "pt-br": "Borda Aqua",
                "zh-tw": "水色邊緣",
                ja: "アクアエッジ",
                ko: "아쿠아에지"
            },
            damage: 100,
            cost: ["Water", "Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2,
	boosters: [
		"mega-gyarados"
	]
};
export default card;
