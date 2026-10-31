import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/002",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/002",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/002",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/002",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/002",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/002",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/002",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4a/002",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4a/002"
    },
    name: {
        en: "Illumise",
        fr: "Lumivole",
        es: "Illumise",
        it: "Illumise",
        de: "Illumise",
        "pt-br": "Illumise",
        "zh-tw": "甜甜螢",
        ko: "네오비트",
        ja: "イルミーゼ"
    },
    illustrator: "Kanako Eo",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Grass"],
    dexId: [314],
    stage: "Basic",
    description: {
        en: "It guides Volbeat to draw signs in the night sky. There are scholars who research the meaning of these signs.",
        fr: "La nuit, il guide des Muciole pour dessiner des symboles dans le ciel. Des scientifiques en étudient les significations.",
        es: "De noche, guía a los Volbeat para dibujar señales en el cielo, cuyo significado es objeto de estudio por parte de algunos investigadores.",
        it: "Dirige i Volbeat, disegnando con loro figure nel cielo. Questi disegni sono oggetto di studio di scienziati che vogliono scoprirne il significato.",
        de: "Es veranlasst Volbeat dazu, Zeichen in den Nachthimmel zu malen. Manche Forscher untersuchen die Bedeutung dieser Muster.",
        "pt-br": "Guia os Volbeat para que desenhem sinais no céu noturno. Há estudiosos que pesquisam o significado desses sinais.",
        "zh-tw": "會誘導電螢蟲在夜空中描繪記號。也有些學者在研究記號的含意。",
        ja: "バルビートを 誘導して 夜空に サインを 描く。 サインの 意味を 研究する 学者も いる。",
        ko: "볼비트를 유도해서\n밤하늘에 사인을 그린다.\n사인의 뜻을 연구하는 학자도 있다."
    },
    attacks: [
        {
            cost: ["Grass", "Colorless"],
            name: {
                en: "Ire-Fly",
                fr: "Colère de Luciole",
                es: "Noctilocura",
                it: "Rabbiucciola",
                de: "Zorniger Leuchtkäfer",
                "pt-br": "Fúria do Vaga-lume",
                "zh-tw": "螢之怒",
                ja: "ほたるのいかり",
                ko: "반딧불의분노"
            },
            effect: {
                en: "If Volbeat is in your discard pile, this attack does 60 more damage.",
                fr: "Si Muciole est dans votre pile de défausse, cette attaque inflige 60 dégâts supplémentaires.",
                es: "Si Volbeat está en tu pila de descartes, este ataque hace 60 puntos de daño más.",
                it: "Se Volbeat è nella tua pila degli scarti, questo attacco infligge 60 danni in più.",
                de: "Wenn sich Volbeat auf deinem Ablagestapel befindet, fügt diese Attacke 60 Schadenspunkte mehr zu.",
                "pt-br": "Se Volbeat estiver na sua pilha de descarte, este ataque causará 60 pontos de dano a mais.",
                "zh-tw": "若自己的棄牌區有「電螢蟲」,則增加60點傷害。",
                ja: "自分のトラッシュに「バルビート」があるなら、60ダメージ追加。",
                ko: "자신의 트래쉬에 「볼비트」가 있다면 60데미지를 추가한다."
            },
            damage: "30+"
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
