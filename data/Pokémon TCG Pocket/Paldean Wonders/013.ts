import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/013",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/013",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/013",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/013",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/013",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/013",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/013"
    },
    name: {
        en: "Scovillain",
        fr: "Scovilain",
        es: "Scovillain",
        it: "Scovillain",
        de: "Halupenjo",
        "pt-br": "Scovillain",
        "zh-tw": "狠辣椒",
        pt: "Scovillain"
    },
    illustrator: "kodama",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Grass"],
    dexId: [952],
    evolveFrom: {
        en: "Capsakid",
        fr: "Pimito",
        es: "Capsakid",
        it: "Capsakid",
        de: "Chilingel",
        "pt-br": "Capsakid",
        "zh-tw": "熱辣娃",
        pt: "Capsakid"
    },
    description: {
        en: "The green head has turned vicious due to the spicy chemicals stimulating its brain. Once it goes on a rampage, there is no stopping it.",
        "fr": "La tête verte est devenue vicieuse à cause des produits chimiques épicés qui stimulent son cerveau. Une fois qu’il se déchaîne, il n’y a plus aucun moyen de l’arrêter.",
        "es": "La cabeza verde se ha vuelto cruel debido a los químicos picantes que estimulan su cerebro. Una vez que se desata, no hay forma de detenerlo.",
        "it": "La testa verde è diventata feroce a causa delle sostanze chimiche piccanti che ne stimolano il cervello. Una volta che va su tutte le furie, non c’è modo di fermarlo.",
        "de": "Der Grünkopf ist aufgrund der scharfen Chemikalien, die sein Gehirn stimulieren, bösartig geworden. Sobald es tobt, gibt es kein Halten mehr.",
        "pt-br": "A cabeça verde tornou-se cruel devido aos produtos químicos picantes que estimulam seu cérebro. Uma vez que fica furioso, não há como pará-lo.",
        "zh-tw": "由於辛辣的化學物質刺激了它的大腦，綠頭變得邪惡了。一旦發狂，就沒有辦法阻止。"
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Red-Hot Headbutt",
                "fr": "Coup de tête brûlant",
                "es": "Cabezazo al rojo vivo",
                "it": "Testata rovente",
                "de": "Rotglühender Kopfstoß",
                "pt-br": "Cabeçada em brasa",
                "zh-tw": "熾熱的頭撞"
            },
            damage: "60+",
            cost: ["Grass", "Colorless"],
            effect: {
                en: "If your opponent's Active Pokémon is a Grass or Metal Pokémon, this attack does 40 more damage.",
                "fr": "Si le Pokémon Actif de votre adversaire est un Pokémon Plante ou Métal, cette attaque inflige 40 dégâts supplémentaires.",
                "es": "Si el Pokémon Activo de tu rival es un Pokémon Planta o Metal, este ataque hace 40 puntos de daño más.",
                "it": "Se il Pokémon attivo del tuo avversario è un Pokémon Erba o Metallo, questo attacco infligge 40 danni in più.",
                "de": "Wenn das Aktive Pokémon deines Gegners ein Gras- oder Metall-Pokémon ist, fügt dieser Angriff 40 weitere Schadenspunkte zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente for um Pokémon Grama ou Metal, este ataque causará 40 pontos de dano a mais.",
                "zh-tw": "如果對手的戰鬥寶可夢是草寶可夢或金屬寶可夢，則此攻擊造成的傷害增加 40 點。"
            },
        },
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20",
        },
    ],
    retreat: 2,
};
export default card;
