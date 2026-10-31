import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1a/102",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1a/102",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1a/102",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1a/102",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1a/102",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1a/102",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1a/102",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1a/102",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1a/102"
    },
    name: {
        en: "Aegislash",
        "fr": "Exagide",
        "es": "Aegislash",
        "it": "Aegislash",
        "de": "Durengard",
        "pt-br": "Aegislash",
        "zh-tw": "堅盾劍怪",
        ja: "ギルガルド",
        ko: "킬가르도"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Crown",
    category: "Pokemon",
    hp: 140,
    types: ["Metal"],
    evolveFrom: {
        en: "Doublade",
        "fr": "Dimoclès",
        "es": "Doublade",
        "it": "Doublade",
        "de": "Duokles",
        "pt-br": "Doublade",
        "zh-tw": "雙劍鞘",
        ja: "ニダンギル",
        ko: "쌍검킬"
    },
    description: {
        en: "Once upon a time, a king with an Aegislash\nreigned over the land. His Pokémon eventually\ndrained him of life, and his kingdom fell with him.",
        "fr": "Il était une fois un roi avec un Aegislash\nrégnait sur le pays. Son Pokémon finalement\nl'a vidé de sa vie et son royaume est tombé avec lui.",
        "es": "Érase una vez un rey con un Aegislash\nreinaba sobre la tierra. Su Pokémon finalmente\nle quitó la vida y su reino cayó con él.",
        "it": "C'era una volta un re con un Aegislash\nregnava sulla terra. Alla fine i suoi Pokémon\nlo privò della vita e il suo regno cadde con lui.",
        "de": "Es war einmal ein König mit einem Aegislash\nregierte über das Land. Sein Pokémon schließlich\nraubte ihm das Leben und sein Königreich fiel mit ihm.",
        "pt-br": "Era uma vez um rei com um Aegislash\nreinou sobre a terra. Seu Pokémon eventualmente\ndrenou sua vida e seu reino caiu com ele.",
        "zh-tw": "從前，有一位擁有神盾的國王\n統治了這片土地。他的神奇寶貝最終\n耗盡了他的生命，他的王國也隨之滅亡。",
        ja: "昔 ギルガルドを 連れた 王が 国を 支配 していたが やがて 生気を 吸われ 国も 滅びた。",
        ko: "옛날에 킬가르도를 거느린 왕이\n나라를 지배했지만 머지않아\n생기를 뺏겨 나라도 멸망했다."
    },
    stage: "Stage2",
    abilities: [{
            type: "Ability",
            name: {
                en: "Cursed Metal",
                "fr": "Métal maudit",
                "es": "Metal maldito",
                "it": "Metallo maledetto",
                "de": "Verfluchtes Metall",
                "pt-br": "Metal Amaldiçoado",
                "zh-tw": "被詛咒的金屬",
                ja: "カースドメタル",
                ko: "커스메탈"
            },
            effect: {
                en: "Attacks used by your {P} Pokémon and {M} Pokémon do +30 damage to your opponent's Active Pokémon.",
                "fr": "Les attaques utilisées par vos {P} Pokémon et {M} Pokémon infligent +30 dégâts au Pokémon Actif de votre adversaire.",
                "es": "Los ataques utilizados por tus Pokémon {P} y Pokémon {M} causan +30 de daño al Pokémon Activo de tu oponente.",
                "it": "Gli attacchi usati dai tuoi Pokémon {P} e dai Pokémon {M} infliggono +30 danni al Pokémon attivo del tuo avversario.",
                "de": "Angriffe deiner {P}-Pokémon und {M}-Pokémon fügen dem Aktiven Pokémon deines Gegners +30 Schaden zu.",
                "pt-br": "Os ataques usados pelos seus Pokémon {P} e {M} causam +30 de dano ao Pokémon Ativo do seu oponente.",
                "zh-tw": "你的{P}神奇寶貝和{M}神奇寶貝使用的攻擊對對手的活躍神奇寶貝造成+30傷害。",
                ja: "このポケモンがいるかぎり、自分の{P}または{M}ポケモンが使うワザの、相手のバトルポケモンへのダメージを+30する。",
                ko: "이 포켓몬이 있는 한, 자신의 {P} 또는 {M}포켓몬이 사용하는 기술이 상대의 배틀 포켓몬에게 주는 데미지를 +30한다."
            }
        }],
    attacks: [{
            name: {
                en: "Slicing Blade",
                "fr": "Lame à trancher",
                "es": "Hoja rebanadora",
                "it": "Lama per affettare",
                "de": "Schneidklinge",
                "pt-br": "Lâmina de corte",
                "zh-tw": "切片刀片",
                ja: "スライスブレード",
                ko: "슬라이스 블레이드"
            },
            damage: 70,
            cost: ["Metal", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
