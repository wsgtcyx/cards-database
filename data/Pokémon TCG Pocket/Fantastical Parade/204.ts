import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/204"
    },
    name: {
        en: "Meowth",
        "fr": "Miaouss",
        "es": "maullido",
        "it": "Miaoth",
        "de": "Miau",
        "pt-br": "Miau",
        "zh-tw": "喵喵"
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
        "zh-tw": "牠喜歡閃閃發光的東西。當它看到閃閃發光的時候\n物體，頭上的金幣也閃閃發光。"
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
                "zh-tw": "無憂無慮的腳步"
            },
            effect: {
                en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
                "fr": "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce de monnaie. Si c’est face, évitez ces dégâts.",
                "es": "Si los ataques le hacen algún daño a este Pokémon, lanza una moneda. Si sale cara, evite ese daño.",
                "it": "Se gli attacchi infliggono danni a questo Pokémon, lancia una moneta. Se esce testa, previeni il danno.",
                "de": "Wenn diesem Pokémon durch Angriffe Schaden zugefügt wird, wirf eine Münze. Wenn Köpfe, verhindern Sie diesen Schaden.",
                "pt-br": "Se algum dano for causado a este Pokémon por ataques, jogue uma moeda. Se der cara, evite esse dano.",
                "zh-tw": "如果這只神奇寶貝受到攻擊造成的傷害，則擲硬幣。如果是正面，請防止損壞。"
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
                "zh-tw": "感覺很好"
            },
            cost: ["Colorless"],
            effect: {
                en: "Draw a card.",
                "fr": "Piochez une carte.",
                "es": "Saca una carta.",
                "it": "Pesca una carta.",
                "de": "Ziehe eine Karte.",
                "pt-br": "Compre uma carta.",
                "zh-tw": "畫一張卡片。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
