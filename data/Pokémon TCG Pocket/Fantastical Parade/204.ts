import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/204",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/204",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/204",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/204",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/204",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/204",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/204",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2/204",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2/204"
    },
    name: {
        en: "Meowth",
        "fr": "Miaouss",
        "es": "Meowth",
        "it": "Meowth",
        "de": "Mauzi",
        "pt-br": "Meowth",
        "zh-tw": "喵喵",
        ja: "ニャース",
        ko: "나옹"
    },
    illustrator: "Teeziro",
    rarity: "Three Star",
    category: "Pokemon",
    hp: 50,
    types: ["Colorless"],
    description: {
        en: "It loves things that sparkle. When it sees a shiny\nobject, the gold coin on its head shines, too.",
        "fr": "Il aime les choses qui brillent. Quand il voit un brillant\nobjet, la pièce d'or sur sa tête brille aussi.",
        "es": "Le encantan las cosas que brillan. Cuando ve un brillo\nobjeto, también brilla la moneda de oro que lleva en la cabeza.",
        "it": "Ama le cose che brillano. Quando vede un brillante\noggetto, brilla anche la moneta d'oro sulla sua testa.",
        "de": "Es liebt Dinge, die funkeln. Wenn es ein glänzendes sieht\nGegenstand, auch die Goldmünze auf dem Kopf glänzt.",
        "pt-br": "Ele adora coisas que brilham. Quando vê um brilho\nobjeto, a moeda de ouro em sua cabeça também brilha.",
        "zh-tw": "牠喜歡閃閃發光的東西。當它看到閃閃發光的時候\n物體，頭上的金幣也閃閃發光。",
        ja: "眩しく 光るものが 大好き。 光るものを 見つけたとき なぜか 額の小判も 輝く。",
        ko: "눈부시게 빛나는 것을 매우 좋아한다.\n빛나는 것을 발견하면 어째선지\n이마에 있는 금화도 빛이 난다."
    },
    stage: "Basic",
    abilities: [{
            type: "Ability",
            name: {
                en: "Carefree Steps",
                "fr": "Étapes sans soucis",
                "es": "Pasos sin preocupaciones",
                "it": "Passi spensierati",
                "de": "Sorglose Schritte",
                "pt-br": "Passos despreocupados",
                "zh-tw": "無憂無慮的腳步",
                ja: "きままにステップ",
                ko: "멋대로 스텝"
            },
            effect: {
                en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
                "fr": "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce de monnaie. Si c’est face, évitez ces dégâts.",
                "es": "Si los ataques le hacen algún daño a este Pokémon, lanza una moneda. Si sale cara, evite ese daño.",
                "it": "Se gli attacchi infliggono danni a questo Pokémon, lancia una moneta. Se esce testa, previeni il danno.",
                "de": "Wenn diesem Pokémon durch Angriffe Schaden zugefügt wird, wirf eine Münze. Wenn Köpfe, verhindern Sie diesen Schaden.",
                "pt-br": "Se algum dano for causado a este Pokémon por ataques, jogue uma moeda. Se der cara, evite esse dano.",
                "zh-tw": "如果這只神奇寶貝受到攻擊造成的傷害，則擲硬幣。如果是正面，請防止損壞。",
                ja: "このポケモンがワザのダメージを受けるとき、自分はコインを1回投げる。オモテなら、このポケモンはそのダメージを受けない。",
                ko: "이 포켓몬이 기술의 데미지를 받을 때 자신은 동전을 1번 던진다. 앞면이 나오면 이 포켓몬은 그 데미지를 받지 않는다."
            }
        }],
    attacks: [{
            name: {
                en: "Feelin' Fine",
                "fr": "Je me sens bien",
                "es": "Sintiéndome bien",
                "it": "Mi sento bene",
                "de": "Fühlt sich gut an",
                "pt-br": "Me sentindo bem",
                "zh-tw": "感覺很好",
                ja: "じょうきげん",
                ko: "꿀기분"
            },
            cost: ["Colorless"],
            effect: {
                en: "Draw a card.",
                "fr": "Piochez une carte.",
                "es": "Saca una carta.",
                "it": "Pesca una carta.",
                "de": "Ziehe eine Karte.",
                "pt-br": "Compre uma carta.",
                "zh-tw": "畫一張卡片。",
                ja: "自分の山札を1枚引く。",
                ko: "자신의 덱을 1장 뽑는다."
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
