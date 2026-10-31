import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4a/097",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4a/097",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4a/097",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4a/097",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4a/097",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4a/097",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4a/097",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4a/097",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4a/097"
    },
    name: {
        en: "Pyukumuku",
        "fr": "Concombaffe",
        "es": "Pyukumuku",
        "it": "Pyukumuku",
        "de": "Gufa",
        "pt-br": "Pyukumuku",
        "zh-tw": "拳海參",
        ja: "ナマコブシ",
        ko: "해무기",
    },
    illustrator: "Nisota Niso",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "It lives in warm, shallow waters. If it encounters a\nfoe, it will spit out its internal organs as a means\nto punch them.",
        "fr": "Il vit dans les eaux chaudes et peu profondes. S'il rencontre un\nennemi, il crachera ses organes internes pour\npour les frapper.",
        "es": "Vive en aguas cálidas y poco profundas. Si encuentra un\nenemigo, escupirá sus órganos internos como medio\npara golpearlos.",
        "it": "Vive in acque calde e poco profonde. Se incontra a\nnemico, sputerà i suoi organi interni come mezzo\nper prenderli a pugni.",
        "de": "Es lebt in warmen, flachen Gewässern. Wenn es auf a trifft\nFeind, es wird als Mittel seine inneren Organe ausspucken\num sie zu schlagen.",
        "pt-br": "Vive em águas quentes e rasas. Se encontrar um\ninimigo, ele cuspirá seus órgãos internos como um meio\npara socá-los.",
        "zh-tw": "它生活在溫暖的淺水中。如果它遇到一個\n敵人，它會吐出內臟作為手段\n打他們。",
        ja: "温かい 浅瀬で 暮らす。 敵に 出会うと 体内器官を 口から 出して 殴りつける。",
        ko: "따뜻하고 얕은 여울에 산다.\n상대와 마주치면 체내 기관을\n입으로 뿜어서 때려눕힌다."
    },
    stage: "Basic",
    abilities: [{
            type: "Ability",
            name: {
                en: "Innards Out",
                "fr": "Entrailles dehors",
                "es": "Las entrañas afuera",
                "it": "Interiora fuori",
                "de": "Innereien raus",
                "pt-br": "Interiores para fora",
                "zh-tw": "內臟出來",
                ja: "とびだすなかみ",
                ko: "내용물분출"
            },
            effect: {
                en: "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, do 50 damage to the Attacking Pokémon.",
                "fr": "Si ce Pokémon est dans le Point Actif et est mis KO par les dégâts d'une attaque du Pokémon de votre adversaire, infligez 50 dégâts au Pokémon attaquant.",
                "es": "Si este Pokémon está en el Punto Activo y queda fuera de combate por el daño de un ataque del Pokémon de tu rival, haz 50 puntos de daño al Pokémon atacante.",
                "it": "Se questo Pokémon è in posizione attiva e viene messo KO dai danni di un attacco dei Pokémon del tuo avversario, infliggi 50 danni al Pokémon attaccante.",
                "de": "Wenn sich dieses Pokémon an der aktiven Stelle befindet und durch den Schaden eines Angriffs des Pokémon deines Gegners kampfunfähig gemacht wird, füge dem angreifenden Pokémon 50 Schadenspunkte zu.",
                "pt-br": "Se este Pokémon estiver no Ponto Ativo e for Nocauteado pelo dano de um ataque do Pokémon do seu oponente, cause 50 de dano ao Pokémon Atacante.",
                "zh-tw": "如果該寶可夢位於活動區域並因對方寶可夢的攻擊而被擊倒，則對攻擊的寶可夢造成 50 點傷害。",
                ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けてきぜつしたとき、ワザを使ったポケモンに50ダメージ。",
                ko: "이 포켓몬이 배틀필드에서 상대의 포켓몬으로부터 기술의 데미지를 받아 기절했을 때 기술을 사용한 포켓몬에게 50데미지를 준다."
            }
        }],
    attacks: [{
            name: {
                en: "Sprinkle Water",
                "fr": "Arroser d'eau",
                "es": "Rociar agua",
                "it": "Spruzzare acqua",
                "de": "Wasser bestreuen",
                "pt-br": "Polvilhe água",
                "zh-tw": "灑水",
                ja: "うちみず",
                ko: "물뿌려대기"
            },
            damage: 20,
            cost: ["Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
