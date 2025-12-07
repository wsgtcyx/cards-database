import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Mew ex",
        "fr": "Miau ex",
        "es": "mi ex",
        "it": "Mew es",
        "de": "Mew ex",
        "pt-br": "Meu ex",
        "zh-tw": "喵前"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 130,
    types: ["Psychic"],
    stage: "Basic",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Psyshot",
                "fr": "Tir psychologique",
                "es": "Psicodisparo",
                "it": "Psicocolpo",
                "de": "Psyshot",
                "pt-br": "Psyshot",
                "zh-tw": "心理射擊"
            },
            damage: 20,
            cost: ["Psychic"]
        }, {
            name: {
                en: "Genome Hacking",
                "fr": "Piratage du génome",
                "es": "Hackeo del genoma",
                "it": "Hacking del genoma",
                "de": "Genom-Hacking",
                "pt-br": "Hacking de genoma",
                "zh-tw": "基因組黑客"
            },
            cost: ["Colorless", "Colorless", "Colorless"],
            effect: {
                en: "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack.",
                "fr": "Choisissez 1 des attaques du Pokémon Actif de votre adversaire et utilisez-la comme cette attaque.",
                "es": "Elige 1 de los ataques del Pokémon Activo de tu rival y úsalo como este ataque.",
                "it": "Scegli 1 degli attacchi del Pokémon attivo del tuo avversario e usalo come questo attacco.",
                "de": "Wähle 1 Angriff des Aktiven Pokémon deines Gegners und verwende ihn als diesen Angriff.",
                "pt-br": "Escolha 1 dos ataques do Pokémon Ativo do seu oponente e use-o como este ataque.",
                "zh-tw": "選擇對手的1只活躍神奇寶貝的攻擊並將其用作這次攻擊。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
