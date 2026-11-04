import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/085/dd97f00ab31184cd",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/085/dd97f00ab31184cd",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/085/dd97f00ab31184cd",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/085/dd97f00ab31184cd",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/085/dd97f00ab31184cd",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/085/dd97f00ab31184cd",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/085/dd97f00ab31184cd",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/085/dd97f00ab31184cd",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/085/dd97f00ab31184cd"
    },
    name: { en: "Pachirisu", fr: "Pachirisu", es: "Pachirisu", it: "Pachirisu", de: "Pachirisu", "pt-br": "Pachirisu", "zh-tw": "帕奇利茲", ko: "파치리스", ja: "パチリス" },
    illustrator: "Atsuko Nishida",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Lightning"],
    dexId: [417],
    stage: "Basic",
    attacks: [{
        cost: ["Lightning"],
        name: { en: "Crackling Snap", fr: "Crépitement Démolissant", es: "Chasquido Chispeante", it: "Crepitio Elettrico", de: "Knisternder Knall", "pt-br": "Estalo Estalante", "zh-tw": "啪滋打亂", ja: "パチッとくずす", ko: "찌릿부수기" },
        effect: {
            en: "Discard the top card of your deck, and if that card is an Item, this attack does 20 more damage.",
            fr: "Défaussez la carte du dessus de votre deck. Si c'est une carte Objet, cette attaque inflige 20 dégâts supplémentaires.",
            es: "Descarta la primera carta de tu baraja. Si es una carta de Objeto, este ataque hace 20 puntos de daño más.",
            it: "Scarta la prima carta del tuo mazzo. Se è una carta Strumento, questo attacco infligge 20 danni in più.",
            de: "Lege die oberste Karte deines Decks ab. Wenn jene Karte ein Item ist, fügt diese Attacke 20 Schadenspunkte mehr zu.",
            "pt-br": "Descarte a carta de cima do seu baralho e, se aquela carta for uma carta de Item, este ataque causará 20 pontos de dano a mais.",
            "zh-tw": "將自己的牌庫上方1張卡丟棄，若那張卡為物品卡，則增加20點傷害。",
            ja: "自分の山札を上から1枚トラッシュし、そのカードがグッズなら、20ダメージ追加。",
            ko: "자신의 덱을 위에서부터 1장 트래쉬하고 그 카드가 아이템이라면 20데미지를 추가한다."
        },
        damage: "30+"
    }],
    weaknesses: [{ type: "Fighting", value: "+20" }],
    retreat: 1,
    boosters: []
};

export default card;
