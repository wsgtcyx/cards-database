import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/041",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/041",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/041",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/041",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/041",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/041",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/041"
    },
    name: {
        en: "Frogadier",
        fr: "Croâporal",
        es: "Frogadier",
        "pt-br": "Frogadier",
        "zh-tw": "呱頭蛙",
        ja: "ゲコガシラ",
        ko: "개굴반장",
        it: "Frogadier",
        de: "Amphizel"
    },
    illustrator: "Shin Nagasawa",
    rarity: "Two Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 70,
    types: [
        "Water"
    ],
    stage: "Stage1",
    retreat: 1,
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Froakie",
        fr: "Grenousse",
        es: "Froakie",
        it: "Froakie",
        de: "Froxy",
        "pt-br": "Froakie",
        "zh-tw": "呱呱泡蛙",
        ja: "Froakie",
        ko: "Froakie"
    },
    attacks: [
        {
            name: {
                en: "Wave Splash",
                fr: "Grosse Vague",
                es: "Chapoteo Ondulante",
                it: "Schizzi d’Onda",
                de: "Wellenplatscher",
                "pt-br": "Onda Borrifante",
                "zh-tw": "飛濺",
                ja: "Wave Splash",
                ko: "Wave Splash"
            },
            cost: [
                "Water",
                "Water"
            ],
            damage: 30
        }
    ],
    abilities: [
        {
            name: {
                en: "Sudden Duplication",
                fr: "Duplication Soudaine",
                es: "Duplicación Súbita",
                it: "Sdoppiamento Improvviso",
                de: "Spontane Verdopplung",
                "pt-br": "Duplicação Súbita",
                "zh-tw": "臨場分身",
                ja: "Sudden Duplication",
                ko: "Sudden Duplication"
            },
            effect: {
                en: "Once during your turn, when you play this card from your hand to evolve 1 of your Pokémon, you may use this Ability. Put a random Frogadier from your deck onto your Bench.",
                fr: "Une fois pendant votre tour, lorsque vous jouez cette carte de votre main pour faire évoluer un de vos Pokémon, vous pouvez utiliser ce talent. Placez une carte Croâporal au hasard de votre deck sur votre Banc.",
                es: "Una vez durante tu turno, cuando juegas esta carta de tu mano para hacer evolucionar a uno de tus Pokémon, puedes usar esta habilidad. Pon 1 Frogadier aleatorio de tu baraja en tu Banca.",
                it: "Una sola volta durante il tuo turno, quando giochi questa carta dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi usare questa abilità. Prendi una carta Frogadier a caso dal tuo mazzo e mettila nella tua panchina.",
                de: "Einmal während deines Zuges, wenn du diese Karte von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du diese Fähigkeit einsetzen. Lege 1 zufälliges Amphizel aus deinem Deck auf deine Bank.",
                "pt-br": "Uma vez durante o seu turno, quando você jogar esta carta da sua mão para evoluir 1 dos seus Pokémon, você poderá usar esta Habilidade. Coloque 1 Frogadier aleatório do seu baralho no seu Banco.",
                "zh-tw": "在自己的回合,當從手牌使出這張卡並完成進化時,可使用1次。從自己的牌庫隨機將1張「呱頭蛙」放置於備戰區。",
                ja: "Once during your turn, when you play this card from your hand to evolve 1 of your Pokémon, you may use this Ability. Put a random Frogadier from your deck onto your Bench.",
                ko: "Once during your turn, when you play this card from your hand to evolve 1 of your Pokémon, you may use this Ability. Put a random Frogadier from your deck onto your Bench."
            },
            type: "Ability"
        }
    ],
    description: {
        en: "It excels at devising battle strategies that make use of the terrain, and it never misses its mark when throwing bubble-covered pebbles.",
        fr: "Ce fin stratège sait se servir du terrain à son avantage. Quand il lance des cailloux recouverts d’écume, il ne manque jamais sa cible.",
        es: "Es muy hábil ideando tácticas que usan el terreno a su favor. Dispara piedras envueltas en burbujas con tal puntería que no falla nunca.",
        it: "È un genio delle tattiche che sfruttano al meglio la configurazione del terreno. Lancia sassi avvolti nella schiuma che non mancano mai il bersaglio.",
        de: "Seine Stärke sind Kampfstrategien, bei denen es die Umgebung nutzt. Es wirft kleine, in Blasen gehüllte Steine und trifft so garantiert sein Ziel.",
        "pt-br": "É mestre em criar estratégias de batalha que tiram proveito do terreno, e nunca erra o alvo quando atira pedrinhas cobertas de bolhas.",
        "zh-tw": "擅長活用地形的戰術。投擲用泡沫包裹著的小石頭時是百發百中。",
        ja: "It excels at devising battle strategies that make use of the terrain, and it never misses its mark when throwing bubble-covered pebbles.",
        ko: "It excels at devising battle strategies that make use of the terrain, and it never misses its mark when throwing bubble-covered pebbles."
    }
};

export default card;
