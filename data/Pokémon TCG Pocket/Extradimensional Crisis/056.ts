import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Stoutland",
        "fr": "Pays robuste",
        "es": "Tierra robusta",
        "it": "Stoutland",
        "de": "Stoutland",
        "pt-br": "Stoutland",
        "zh-tw": "長毛狗",
    },
    illustrator: "Atsuko Nishida",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Colorless"],
    evolveFrom: {
        en: "Herdier",
        "fr": "Herdier",
        "es": "herrero",
        "it": "Herdier",
        "de": "Herdier",
        "pt-br": "Pastor",
        "zh-tw": "赫爾迪耶"
    },
    description: {
        en: "These Pokémon seem to enjoy living with humans.\nEven a Stoutland caught in the wild will warm up\nto people in about three days.",
        "fr": "Ces Pokémon semblent aimer vivre avec les humains.\nMême un Stoutland pris dans la nature se réchauffera\naux gens en trois jours environ.",
        "es": "Estos Pokémon parecen disfrutar de vivir con humanos.\nIncluso un Stoutland atrapado en la naturaleza se calentará\na la gente en unos tres días.",
        "it": "Sembra che a questi Pokémon piaccia vivere con gli umani.\nAnche uno Stoutland catturato in natura si riscalderà\nalle persone in circa tre giorni.",
        "de": "Diese Pokémon scheinen das Zusammenleben mit Menschen zu genießen.\nSogar ein in der Wildnis gefangenes Stoutland wird warm\nan die Menschen in etwa drei Tagen.",
        "pt-br": "Esses Pokémon parecem gostar de viver com humanos.\nAté um Stoutland capturado na natureza vai se aquecer\npara as pessoas em cerca de três dias.",
        "zh-tw": "這些神奇寶貝似乎很喜歡與人類一起生活。\n即使是在野外捕獲的斯托特蘭也會變暖\n大約三天后傳給人們。"
    },
    stage: "Stage2",
    abilities: [{
            type: "Ability",
            name: {
                en: "Guard Dog Visage",
                "fr": "Visage de chien de garde",
                "es": "Rostro de perro guardián",
                "it": "Volto del cane da guardia",
                "de": "Wachhundgesicht",
                "pt-br": "Rosto de cão de guarda",
                "zh-tw": "看門狗的面貌"
            },
            effect: {
                en: "As long as this Pokémon is in the Active Spot, attacks used by your opponent's Active Pokémon cost 1 {C} more.",
                "fr": "Tant que ce Pokémon est dans le Point Actif, les attaques utilisées par le Pokémon Actif de votre adversaire coûtent 1 {C} de plus.",
                "es": "Mientras este Pokémon esté en el Punto Activo, los ataques utilizados por el Pokémon Activo de tu rival cuestan 1 {C} más.",
                "it": "Fintanto che questo Pokémon è in posizione attiva, gli attacchi usati dal Pokémon attivo del tuo avversario costano 1 {C} in più.",
                "de": "Solange sich dieses Pokémon an der aktiven Stelle befindet, kosten Angriffe des aktiven Pokémon deines Gegners 1 {C} mehr.",
                "pt-br": "Enquanto este Pokémon estiver no Ponto Ativo, os ataques usados ​​pelo Pokémon Ativo do seu oponente custarão 1 {C} a mais.",
                "zh-tw": "只要該神奇寶貝位於活動區域，對手的活動神奇寶貝使用的攻擊就會多花費 1 {C} 點。"
            }
        }],
    attacks: [{
            name: {
                en: "Sharp Fang",
                "fr": "Croc acéré",
                "es": "Colmillo afilado",
                "it": "Zanna affilata",
                "de": "Scharfer Fangzahn",
                "pt-br": "Presa Afiada",
                "zh-tw": "尖牙"
            },
            damage: 70,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
