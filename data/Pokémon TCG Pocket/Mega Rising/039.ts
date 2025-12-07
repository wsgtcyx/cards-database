import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Darumaka",
        "fr": "Darumaka",
        "es": "Darumaka",
        "it": "Darumaka",
        "de": "Darumaka",
        "pt-br": "Darumaka",
        "zh-tw": "火紅不倒翁",
    },
    illustrator: "Atsuko Nishida",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fire"],
    description: {
        en: "This popular symbol of good fortune will never\nfall over in its sleep, no matter how it's pushed\nor pulled.",
        "fr": "Ce symbole populaire de bonne fortune ne sera jamais\ntomber dans son sommeil, peu importe la façon dont on le pousse\nou tiré.",
        "es": "Este popular símbolo de buena fortuna nunca\ncaerse mientras duerme, no importa cómo lo empujen\no tirado.",
        "it": "Questo popolare simbolo di buona fortuna non lo farà mai\ncadere nel sonno, non importa come viene spinto\no tirato.",
        "de": "Dieses beliebte Glückssymbol wird es nie geben\nim Schlaf umfallen, egal wie sehr man es drückt\noder gezogen.",
        "pt-br": "Este popular símbolo de boa sorte nunca\ncair durante o sono, não importa como seja empurrado\nou puxado.",
        "zh-tw": "這種流行的吉祥象徵永遠不會\n無論怎樣推它，它都會在睡夢中倒下\n或拉。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Reckless Charge",
                "fr": "Charge imprudente",
                "es": "Cargo imprudente",
                "it": "Carica spericolata",
                "de": "Rücksichtsloser Angriff",
                "pt-br": "Carga imprudente",
                "zh-tw": "魯莽衝鋒"
            },
            damage: 50,
            cost: ["Fire", "Fire"],
            effect: {
                en: "This Pokémon also does 10 damage to itself.",
                "fr": "Ce Pokémon s'inflige également 10 dégâts.",
                "es": "Este Pokémon también se hace 10 daños a sí mismo.",
                "it": "Questo Pokémon infligge anche 10 danni a se stesso.",
                "de": "Dieses Pokémon fügt sich selbst außerdem 10 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 10 de dano a si mesmo.",
                "zh-tw": "該神奇寶貝也會對其自身造成 10 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2
};
export default card;
