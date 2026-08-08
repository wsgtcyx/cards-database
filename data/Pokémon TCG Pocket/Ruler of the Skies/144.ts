import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/144",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/144",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/144",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/144",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/144",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/144",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/144"
    },
    name: {
        en: "Silvally",
        fr: "Silvallié",
        es: "Silvally",
        it: "Silvally",
        de: "Amigento",
        "pt-br": "Silvally",
        "zh-tw": "銀伴戰獸",
        ko: "실버디",
        ja: "シルヴァディ"
    },
    illustrator: "Kazumasa Yasukuni",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Colorless"],
    dexId: [773],
    evolveFrom: {
        en: "Type: Null",
        fr: "Type:0",
        es: "Código Cero",
        it: "Tipo Zero",
        de: "Typ:Null",
        "pt-br": "Tipo Nulo",
        "zh-tw": "屬性：空",
        ko: "타입:널",
        ja: "タイプ：ヌル"
    },
    stage: "Stage1",
    description: {
        en: "The final factor needed to release this Pokémon’s true power was a strong bond with a Trainer it trusts.",
        fr: "La relation de confiance qui le lie à son Dresseur\nest le facteur décisif qui lui permet de libérer\ntout son potentiel.",
        es: "El factor decisivo que le ha permitido liberar\ntoda su fuerza ha sido el estrecho vínculo y la\nconfianza que profesa a su Entrenador.",
        it: "Il fattore decisivo che permette di liberare la sua\nvera potenza è il legame di fiducia che lo unisce\nal suo Allenatore.",
        de: "Der entscheidende Faktor, durch den es seine\nwahren Kräfte freisetzen kann, ist die enge\nBindung zu einem Trainer, dem es vertraut.",
        "zh-tw": "與所信賴的訓練家之間的牽絆\n是解放牠真正力量的\n最後一個要素。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Gold Breaker",
                fr: "Goliastruction",
                es: "Golpe de Oro",
                "pt-br": "Quebrador de Ouro",
                "zh-tw": "黃金破壞"
            },
            effect: {
                en: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 90 more damage.",
                fr: "Si le Pokémon Actif de votre adversaire est un Pokémon‐ex, cette attaque inflige 90 dégâts supplémentaires.",
                es: "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 90 puntos de daño más.",
                "pt-br": "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este ataque causará 90 pontos de dano a mais.",
                "zh-tw": "若對手的戰鬥寶可夢為「寶可夢ex」,則增加90點傷害。"
            },
            damage: "60+"
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
