import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/091",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/091",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/091",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/091",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/091",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/091",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/091",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/091",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/091"
    },
    name: {
        en: "Zebstrika",
        "fr": "Zéblitz",
        "es": "Zebstrika",
        "it": "Zebstrika",
        "de": "Zebritz",
        "pt-br": "Zebstrika",
        "zh-tw": "雷電斑馬",
        ja: "ゼブライカ",
        ko: "제브라이카",
    },
    illustrator: "Shin Nagasawa",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Lightning"],
    evolveFrom: {
        en: "Blitzle",
        "fr": "Zébibron",
        "es": "Blitzle",
        "it": "Blitzle",
        "de": "Elezeba",
        "pt-br": "Blitzle",
        "zh-tw": "斑斑馬",
        ja: "シママ",
        ko: "줄뮤마",
    },
    description: {
        en: "They have lightning-like movements.\nWhen Zebstrika run at full speed, the sound of\nthunder reverberates.",
        "fr": "Ils ont des mouvements semblables à ceux de l'éclair.\nQuand Zebstrika courait à toute vitesse, le bruit de\nle tonnerre retentit.",
        "es": "Tienen movimientos parecidos a los de un rayo.\nCuando Zebstrika corre a toda velocidad, el sonido de\nel trueno retumba.",
        "it": "Hanno movimenti simili a fulmini.\nQuando Zebstrika corre a tutta velocità, il suono di\nrimbomba il tuono.",
        "de": "Sie haben blitzartige Bewegungen.\nWenn Zebstrika mit voller Geschwindigkeit läuft, ist das Geräusch zu hören\nDonner hallt wider.",
        "pt-br": "Eles têm movimentos semelhantes a raios.\nQuando Zebstrika corre a toda velocidade, o som de\no trovão reverbera.",
        "zh-tw": "他們的動作如同閃電。\n當 Zebstrika 全速奔跑時，會發出\n雷聲迴響。",
        ja: "稲妻のような 瞬発力。 ゼブライカが 全速力で 走ると 雷鳴が 響きわたる。",
        ko: "천둥번개 같은 순발력을 가지고 있다.\n제브라이카가 전속력으로 달리면\n천둥소리가 울려 퍼진다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Electric Ball",
                "fr": "Boule électrique",
                "es": "Bola eléctrica",
                "it": "Palla elettrica",
                "de": "Elektrischer Ball",
                "pt-br": "Bola Elétrica",
                "zh-tw": "電動球",
                ja: "ライトニングボール",
                ko: "라이트닝볼"
            },
            damage: 90,
            cost: ["Lightning", "Lightning", "Lightning"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
	boosters: [
		"mega-blaziken"
	]
};
export default card;
