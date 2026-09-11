import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: { en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/089", fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/089", es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/089", it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/089", de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/089", "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/089", "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/089" },
    name: { en: "Team Rocket's Lapras", fr: "Lokhlass de la Team Rocket", es: "Lapras del Team Rocket", it: "Lapras del Team Rocket", de: "Team Rockets Lapras", "pt-br": "Lapras da Equipe Rocket", "zh-tw": "火箭隊的拉普拉斯", ko: "로켓단의 라프라스", ja: "ロケット団のラプラス" },
    illustrator: "matazo",
    rarity: "One Star",
    category: "Pokemon",
    hp: 90,
    types: ["Water"],
    dexId: [131],
    stage: "Basic",
    description: { en: "Able to understand human speech and very intelligent, it loves to swim in the sea with people on its back.", fr: "Ce Pokémon très intelligent comprend le langage humain. Il adore parcourir les mers avec des gens sur le dos.", es: "Dotado de una gran inteligencia y capaz de comprender el lenguaje humano. Le gusta surcar los mares llevando a gente sobre el lomo.", it: "La sua grande intelligenza gli permette di capire anche il linguaggio umano. Ama nuotare in mare trasportando persone.", de: "Dieses intelligente Pokémon versteht die Sprache der Menschen und liebt es, mit ihnen auf dem Rücken über das Meer zu schwimmen.", "pt-br": "Muito inteligente e capaz de entender a fala humana, adora nadar no mar com pessoas em suas costas.", "zh-tw": "有著能夠理解人類語言的高度智慧，是喜歡在背上載著人類在大海游泳的寶可夢。" },
    attacks: [{ cost: ["Water", "Colorless"], name: { en: "Ruthless Whirlpool", fr: "Tourbillon Implacable", es: "Torbellino Implacable", it: "Vortice Spietato", de: "Grausamer Strudel", "pt-br": "Redemoinho Cruel", "zh-tw": "冷酷漩渦" }, effect: { en: "If this Pokémon has more Energy attached than your opponent's Active Pokémon, this attack does 40 more damage.", fr: "Si ce Pokémon a plus d'Énergies attachées que le Pokémon Actif de votre adversaire, cette attaque inflige 40 dégâts supplémentaires.", es: "Si este Pokémon tiene más Energía unida que el Pokémon Activo de tu rival, este ataque hace 40 puntos de daño más.", it: "Se questo Pokémon ha più Energie assegnate del Pokémon attivo del tuo avversario, questo attacco infligge 40 danni in più.", de: "Wenn an dieses Pokémon mehr Energien angelegt sind als an das Aktive Pokémon deines Gegners, fügt diese Attacke 40 Schadenspunkte mehr zu.", "pt-br": "Se este Pokémon tiver mais Energia ligada a ele do que o Pokémon Ativo do seu oponente, este ataque causará 40 pontos de dano a mais.", "zh-tw": "若這隻寶可夢身上的能量的數量，比對手的戰鬥寶可夢身上的能量的數量多，則增加40點傷害。" }, damage: "40+" }],
    weaknesses: [{ type: "Lightning", value: "+20" }],
    retreat: 1,
    boosters: ["vol12"]
};

export default card;
