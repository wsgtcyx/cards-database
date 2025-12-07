import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Nosepass",
        "fr": "Passe-nez",
        "es": "paso de nariz",
        "it": "Passaggio del naso",
        "de": "Nasenpass",
        "pt-br": "Nosepass",
        "zh-tw": "朝北鼻",
    },
    illustrator: "Satoshi Shirai",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fighting"],
    description: {
        en: "It moves less than an inch a year, but when\nit's in a jam, it will spin and drill down into the\nground in a split second.",
        "fr": "Il bouge moins d'un pouce par an, mais quand\nil est dans le pétrin, il va tourner et pénétrer dans le\nsol en une fraction de seconde.",
        "es": "Se mueve menos de una pulgada al año, pero cuando\nestá en un aprieto, girará y perforará el\ntierra en una fracción de segundo.",
        "it": "Si muove meno di un pollice all'anno, ma quando\nè in un ingorgo, girerà e perforerà nel\nterra in una frazione di secondo.",
        "de": "Es bewegt sich weniger als einen Zoll pro Jahr, aber wann\nWenn es feststeckt, dreht es sich und bohrt sich nach unten\nim Bruchteil einer Sekunde auf den Boden fallen.",
        "pt-br": "Ele se move menos de um centímetro por ano, mas quando\nestá em apuros, ele irá girar e se aprofundar no\nchão em uma fração de segundo.",
        "zh-tw": "它每年移動不到一英寸，但是當\n它陷入困境，它會旋轉並鑽入\n瞬間落地。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Tackle",
                "fr": "Tacle",
                "es": "Abordar",
                "it": "Attrezzatura",
                "de": "Tackle",
                "pt-br": "Enfrentar",
                "zh-tw": "處理"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 3
};
export default card;
