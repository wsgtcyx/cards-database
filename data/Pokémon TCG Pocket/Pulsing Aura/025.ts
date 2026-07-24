import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/025",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/025"
    },
    name: {
        en: "Victini",
        fr: "Victini",
        es: "Victini",
        it: "Victini",
        de: "Victini",
        "pt-br": "Victini",
        "zh-tw": "比克提尼",
        ko: "비크티니",
        ja: "ビクティニ"
    },
    illustrator: "kodama",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fire"],
    dexId: [494],
    stage: "Basic",
    description: {
        en: "When it shares the infinite energy it creates, that being’s entire body will be overflowing with power.",
        fr: "L’énergie sans limites qu’il produit donne une force incroyable\nà ceux qui entrent en contact avec elle.",
        es: "Cuando Victini comparte su energía ilimitada, esa persona o\nPokémon irradia abundante poder.",
        it: "Può condividere l’energia infinita che emana, donando un\npotere immenso a chi la riceve.",
        de: "Jeder, dem Victini seine grenzenlose Energie zuteilwerden\nlässt, strotzt nur so vor Kraft.",
        "pt-br": "Quando ele compartilha a energia infinita que cria, todo o corpo desse ser transbordará de poder.",
        "zh-tw": "當它分享自己所創造的無窮能量時，那個生命的全身都會充滿力量。"
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
                "zh-tw": "勝利之星"
            },
            effect: {
                en: "Once during your turn, after you flip any coins for an attack of 1 of your {R} Pokémon, you may ignore all results of those coin flips and begin flipping those coins again. You can't use more than 1 Victory Star Ability each turn.",
                fr: "Une fois pendant votre tour, après avoir lancé des pièces pour une attaque d'un de vos Pokémon {R}, vous pouvez ignorer tous les résultats de ces lancers de pièces et recommencer à lancer ces pièces. Vous ne pouvez pas utiliser plus d’une capacité Victory Star à chaque tour.",
                es: "Una vez durante tu turno, después de lanzar monedas para un ataque de 1 de tus Pokémon {R}, puedes ignorar todos los resultados de esos lanzamientos de monedas y comenzar a lanzarlas nuevamente. No puedes usar más de 1 habilidad Victory Star en cada turno.",
                it: "Una sola volta durante il tuo turno, dopo aver lanciato qualsiasi moneta per un attacco di 1 dei tuoi Pokémon {R}, puoi ignorare tutti i risultati di quei lanci di monete e iniziare a lanciare di nuovo quelle monete. Non puoi utilizzare più di 1 Abilità Stella Vittoria per turno.",
                de: "Einmal während deines Zuges, nachdem du Münzen für einen Angriff eines deiner {R}-Pokémon geworfen hast, kannst du alle Ergebnisse dieser Münzwürfe ignorieren und erneut damit beginnen, diese Münzen zu werfen. Du kannst in jeder Runde nicht mehr als 1 Victory Star-Fähigkeit verwenden.",
                "pt-br": "Uma vez durante o seu turno, depois de lançar qualquer moeda para um ataque de 1 dos seus Pokémon {R}, você pode ignorar todos os resultados desses lançamentos de moedas e começar a lançá-las novamente. Você não pode usar mais de 1 habilidade Victory Star por turno.",
                "zh-tw": "在你的回合中，當你為你的 1 個 {R} 寶可夢的攻擊翻轉任何硬幣後，你可以忽略這些硬幣翻轉的所有結果並再次開始翻轉這些硬幣。每回合你不能使用超過 1 個勝利之星技能。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Fire", "Colorless"],
            name: {
                en: "V-Flame",
                fr: "V-Flamme",
                es: "Llama V",
                it: "Fiamma V",
                de: "V-Flamme",
                "pt-br": "Chama V",
                "zh-tw": "V型火焰"
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
