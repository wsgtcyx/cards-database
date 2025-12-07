import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Politoed",
        "fr": "Politisé",
        "es": "educado",
        "it": "Politoed",
        "de": "Politisch",
        "pt-br": "Politizado",
        "zh-tw": "蚊香蛙皇",
    },
    illustrator: "Masakazu Fukuda",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Water"],
    evolveFrom: {
        en: "Poliwhirl",
        "fr": "Tourbillon poli",
        "es": "poliwhirl",
        "it": "Polivortice",
        "de": "Poliwirbel",
        "pt-br": "Poliwhirl",
        "zh-tw": "波利惠爾"
    },
    description: {
        en: "At nightfall, these Pokémon appear on the shores\nof lakes. They announce their territorial claims by\nletting out cries that sound like shouting.",
        "fr": "A la tombée de la nuit, ces Pokémon apparaissent sur les rivages\ndes lacs. Ils annoncent leurs revendications territoriales en\npoussant des cris qui ressemblent à des cris.",
        "es": "Al caer la noche, estos Pokémon aparecen en las costas.\nde lagos. Anuncian sus reivindicaciones territoriales por\nsoltando gritos que suenan como gritos.",
        "it": "Al calar della notte, questi Pokémon appaiono sulle rive\ndei laghi. Annunciano le loro rivendicazioni territoriali\nemettendo grida che sembrano grida.",
        "de": "Bei Einbruch der Dunkelheit erscheinen diese Pokémon an den Ufern\nvon Seen. Sie kündigen ihre Gebietsansprüche an\nSchreie ausstoßen, die wie Schreien klingen.",
        "pt-br": "Ao anoitecer, esses Pokémon aparecem na costa\nde lagos. Eles anunciam suas reivindicações territoriais\nsoltando gritos que parecem gritos.",
        "zh-tw": "夜幕降臨時，這些神奇寶貝會出現在海岸上\n湖泊。他們通過以下方式宣布領土主張\n發出聽起來像喊叫的叫聲。"
    },
    stage: "Stage2",
    abilities: [{
            type: "Ability",
            name: {
                en: "Lordly Cheering",
                "fr": "Acclamations seigneuriales",
                "es": "Aplausos señoriales",
                "it": "Tifo signorile",
                "de": "Herrlicher Jubel",
                "pt-br": "Torcida Senhorial",
                "zh-tw": "高貴的歡呼"
            },
            effect: {
                en: "As long as this Pokémon is on your Bench, attacks used by your Pokémon that evolve from Poliwhirl do +40 damage to your opponent's Active Pokémon.",
                "fr": "Tant que ce Pokémon est sur votre Banc, les attaques utilisées par votre Pokémon évoluant à partir de Poliwhirl infligent +40 dégâts au Pokémon Actif de votre adversaire.",
                "es": "Mientras este Pokémon esté en tu Banca, los ataques utilizados por tus Pokémon que evolucionan de Poliwhirl hacen +40 de daño al Pokémon Activo de tu rival.",
                "it": "Fintanto che questo Pokémon è nella tua panchina, gli attacchi usati dai tuoi Pokémon che si evolvono da Poliwhirl infliggono +40 danni al Pokémon attivo del tuo avversario.",
                "de": "Solange sich dieses Pokémon auf deiner Bank befindet, fügen Angriffe deines Pokémon, die sich aus Poliwhirl entwickeln, dem Aktiven Pokémon deines Gegners +40 Schaden zu.",
                "pt-br": "Enquanto este Pokémon estiver no seu Banco, os ataques usados ​​pelos seus Pokémon que evoluem de Poliwhirl causarão +40 de dano ao Pokémon Ativo do seu oponente.",
                "zh-tw": "只要這只神奇寶貝在你的替補席上，從波利旋進化而來的你的神奇寶貝使用的攻擊就會對對手的活躍神奇寶貝造成 +40 點傷害。"
            }
        }],
    attacks: [{
            name: {
                en: "Hyper Voice",
                "fr": "Hyper voix",
                "es": "Hipervoz",
                "it": "Ipervoce",
                "de": "Hyperstimme",
                "pt-br": "Hiper Voz",
                "zh-tw": "超級語音"
            },
            damage: 60,
            cost: ["Water", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
