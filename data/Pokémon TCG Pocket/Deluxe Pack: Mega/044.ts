import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/044",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/044",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/044",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/044",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/044",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/044",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/044"
    },
    name: {
        en: "Victini",
        fr: "Victini",
        es: "Victini",
        it: "Victini",
        de: "Victini",
        "pt-br": "Victini",
        "zh-tw": "比克提尼",
        ja: "ビクティニ",
        ko: "비크티니"
    },
    illustrator: "kodama",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 70,
    types: [
        "Fire"
    ],
    dexId: [
        494
    ],
    stage: "Basic",
    description: {
        en: "When it shares the infinite energy it creates, that being’s entire body will be overflowing with power.",
        fr: "L'énergie sans limites qu'il produit donne une force incroyable à ceux qui entrent en contact avec elle.",
        es: "Cuando Victini comparte su energía ilimitada, esa persona o Pokémon irradia abundante poder.",
        it: "Può condividere l'energia infinita che emana, donando un potere immenso a chi la riceve.",
        de: "Jeder, dem Victini seine grenzenlose Energie zuteilwerden lässt, strotzt nur so vor Kraft.",
        "pt-br": "Quando compartilha a energia infinita que cria, o corpo inteiro do outro ser irradia poder.",
        "zh-tw": "如果分享到比克提尼產出的無限能量，全身就會充滿力量。",
        ja: "When it shares the infinite energy it creates, that being’s entire body will be overflowing with power.",
        ko: "When it shares the infinite energy it creates, that being’s entire body will be overflowing with power."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Victory Star",
                fr: "Victorieux",
                es: "Tinovictoria",
                it: "Vittorstella",
                de: "Triumphstern",
                "pt-br": "Estrela da Vitória",
                "zh-tw": "勝利之星",
                ja: "Victory Star",
                ko: "Victory Star"
            },
            effect: {
                en: "Once during your turn, after you flip any coins for an attack of 1 of your {R} Pokémon, you may ignore all results of those coin flips and begin flipping those coins again. You can't use more than 1 Victory Star Ability each turn.",
                fr: "Une seule fois pendant votre tour, après avoir lancé des pièces pour une attaque d'un de vos Pokémon {R}, vous pouvez ignorer le résultat de ces lancers de pièce et lancer ces pièces à nouveau. Vous ne pouvez pas utiliser plus d'un talent Victorieux par tour.",
                es: "Una vez durante tu turno, después de lanzar las monedas para un ataque de 1 de tus Pokémon {R}, puedes ignorar todos los resultados de esos lanzamientos de monedas y lanzar esas monedas de nuevo. No puedes usar más de 1 habilidad Tinovictoria en cada turno.",
                it: "Una sola volta durante il tuo turno, dopo aver lanciato la moneta tutte le volte richieste dall'attacco di uno dei tuoi Pokémon {R}, puoi ignorare tutti gli effetti di quei lanci e lanciare nuovamente la moneta. Puoi usare l'abilità Vittorstella solo una volta per turno.",
                de: "Einmal während deines Zuges, nachdem du Münzen für eine Attacke von 1 deiner {R}-Pokémon geworfen hast, kannst du alle daraus resultierenden Effekte ignorieren und die Münzen erneut werfen. Du kannst die Fähigkeit Triumphstern nur einmal pro Zug einsetzen.",
                "pt-br": "Uma vez durante o seu turno, após jogar moedas para um ataque de 1 dos seus Pokémon {R}, você poderá ignorar todos os resultados das moedas e jogá-las novamente. Você não pode usar mais de 1 Habilidade Estrela da Vitória por turno.",
                "zh-tw": "在自己的回合,因自己的{R}寶可夢的招式而擲硬幣時,可使用1次。將擲硬幣的結果全部消除,重新擲硬幣。這個特性在使用了其他的「勝利之星」的回合無法使用。",
                ja: "Once during your turn, after you flip any coins for an attack of 1 of your {R} Pokémon, you may ignore all results of those coin flips and begin flipping those coins again. You can't use more than 1 Victory Star Ability each turn.",
                ko: "Once during your turn, after you flip any coins for an attack of 1 of your {R} Pokémon, you may ignore all results of those coin flips and begin flipping those coins again. You can't use more than 1 Victory Star Ability each turn."
            }
        }
    ],
    attacks: [
        {
            cost: [
                "Fire",
                "Colorless"
            ],
            name: {
                en: "V-Flame",
                fr: "V-Flamme",
                es: "Llama V",
                it: "Fiamma V",
                de: "V-Flamme",
                "pt-br": "Chama V",
                "zh-tw": "V型火焰",
                ja: "V-Flame",
                ko: "V-Flame"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
