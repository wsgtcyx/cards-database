import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    name: {
        en: "Dondozo",
        fr: "Oyacata",
        es: "Dondozo",
        it: "Dondozo",
        de: "Heerashai",
        'pt-br': "Dondozo",
        "zh-tw": "吃吼霸",
        ko: "어써러셔"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Water"],
    dexId: [977],
    description: {
        en: "It treats Tatsugiri like its boss and follows it loyally. Though powerful, Dondozo is apparently not very smart.",
        "fr": "Il traite Nigirigon comme son patron et le suit loyalement. Bien que puissant, Oyacata n’est apparemment pas très intelligent.",
        "es": "Trata a Tatsugiri como a su jefe y lo sigue lealmente. Aunque poderoso, Dondozo aparentemente no es muy inteligente.",
        "it": "Tratta Tatsugiri come il suo capo e lo segue lealmente. Sebbene potente, Dondozo apparentemente non è molto intelligente.",
        "de": "Es behandelt Nigiragi wie seinen Chef und folgt ihm loyal. Obwohl der Heerashai leistungsstark ist, ist er offenbar nicht sehr intelligent.",
        "pt-br": "Trata Tatsugiri como seu chefe e o segue lealmente. Embora poderoso, Dondozo aparentemente não é muito inteligente.",
        "zh-tw": "它對待米立龍就像對待自己的老闆一樣，並忠誠地追隨它。雖然功能強大，但 吃吼霸 顯然不是很聰明。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Giga Impact",
                fr: "Giga Impact",
                es: "Giga Impacto",
                it: "Gigaimpatto",
                de: "Gigastoß",
                "pt-br": "Giga Impacto",
                "zh-tw": "千兆影響",
                pt: "Gigaimpacto"
            },
            damage: "120",
            cost: ["Water", "Water", "Water", "Colorless"],
            effect: {
                en: "During your next turn, this Pokémon can't attack.",
                fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
                es: "Durante tu próximo turno, este Pokémon no puede atacar.",
                it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
                de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
                "pt-br": "Durante o seu próximo turno, este Pokémon não poderá atacar.",
                "zh-tw": "在你的下一個回合中，這隻寶可夢無法攻擊。",
                pt: "Durante o seu próximo turno, este Pokémon não poderá atacar."
            },
        },
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20",
        },
    ],
    retreat: 4,
};
export default card;
