import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: { en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/091", fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/091", es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/091", it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/091", de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/091", "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/091", "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/091" },
    name: { en: "Team Rocket's Wobbuffet", fr: "Qulbutoké de la Team Rocket", es: "Wobbuffet del Team Rocket", it: "Wobbuffet del Team Rocket", de: "Team Rockets Woingenau", "pt-br": "Wobbuffet da Equipe Rocket", "zh-tw": "火箭隊的果然翁", ko: "로켓단의 마자용", ja: "ロケット団のソーナンス" },
    illustrator: "cochi8i",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Psychic"],
    dexId: [202],
    stage: "Basic",
    description: { en: "To keep its pitch-black tail hidden, it lives quietly in the darkness. It is never first to attack.", fr: "Pour cacher sa queue noire, il vit tranquillement dans l'obscurité. Ce n'est jamais le premier à attaquer.", es: "Para mantener oculta su cola negra como boca de lobo, vive tranquilamente en la oscuridad. Nunca es el primero en atacar.", it: "Vive nel silenzio e nell'oscurità per nascondere la coda nera come la pece. Non attacca mai per primo.", de: "Es lebt in der Dunkelheit, um seinen schwarzen Schweif zu verstecken. Es greift nie zuerst an.", "pt-br": "Para manter sua cauda preta escondida, ele vive em silêncio na escuridão. Nunca é o primeiro a atacar.", "zh-tw": "為了隱藏漆黑的尾巴，它安靜地生活在黑暗中。它永遠不會首先進攻。" },
    attacks: [{
        cost: ["Colorless", "Colorless"],
        name: { en: "Rocket Frenzy", fr: "Frénésie Rocket", es: "Frenesí Rocket", it: "Rocketmania", de: "Rocket-Fieber", "pt-br": "Frenesi Rocket", "zh-tw": "火箭狂熱" },
        effect: {
            en: "Reveal the top 6 cards of your deck. This attack does 30 damage for each Pokémon you find there that has “Team Rocket” in its name. Shuffle the revealed cards back into your deck.",
            fr: "Montrez les 6 premières cartes du dessus de votre deck. Cette attaque inflige 30 dégâts pour chaque Pokémon que vous y trouvez ayant « Team Rocket » dans son nom. Mélangez les cartes montrées avec votre deck.",
            es: "Enseña las 6 primeras cartas de tu baraja. Este ataque hace 30 puntos de daño por cada uno de tus Pokémon con \"Team Rocket\" en su nombre que encuentres entre ellas. Pon las cartas enseñadas de nuevo en tu baraja y barájalas todas.",
            it: "Mostra le prime 6 carte del tuo mazzo. Questo attacco infligge 30 danni per ogni Pokémon che ha \"Team Rocket\" nel nome presente tra quelle carte. Poi rimischia le carte svelate nel tuo mazzo.",
            de: "Decke die obersten 6 Karten deines Decks auf. Diese Attacke fügt für jedes Pokémon, das du dort findest und bei dem „Team Rocket“ zum Namen gehört, 30 Schadenspunkte zu. Mische die aufgedeckten Karten zurück in dein Deck.",
            "pt-br": "Revele as 6 cartas de cima do seu baralho. Este ataque causa 30 pontos de dano para cada Pokémon que você encontrar lá que tenha “Equipe Rocket” em seu nome. Embaralhe as cartas reveladas de volta no seu baralho.",
            "zh-tw": "將自己的牌庫上方6張卡翻到正面，造成其中名稱中有「火箭隊」的寶可夢卡的張數×30點傷害。將翻到正面的卡牌放回牌庫。"
        },
        damage: "30×"
    }],
    weaknesses: [{ type: "Darkness", value: "+20" }],
    retreat: 2,
    boosters: ["vol12"]
};

export default card;
