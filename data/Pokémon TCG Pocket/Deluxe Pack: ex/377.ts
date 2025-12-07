import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Giratina ex",
        "fr": "Giratina ex",
        "es": "Giratina ex",
        "it": "Giratina es",
        "de": "Giratina ex",
        "pt-br": "Ex-Giratina",
        "zh-tw": "騎拉帝納超級"
    },
    illustrator: "PLANETA Yamashita",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 150,
    types: ["Psychic"],
    stage: "Basic",
    suffix: "EX",
    abilities: [{
            type: "Ability",
            name: {
                en: "Broken-Space Bellow",
                "fr": "Soufflet d'espace brisé",
                "es": "Fuelle de espacio roto",
                "it": "Muggito nello spazio spezzato",
                "de": "Broken-Space-Balg",
                "pt-br": "Abaixo de Espaço Quebrado",
                "zh-tw": "破碎空間波紋管"
            },
            effect: {
                en: "Once during your turn, you may take a {P} Energy from your Energy Zone and attach it to this Pokémon. If you use this Ability, your turn ends.",
                "fr": "Une fois pendant votre tour, vous pouvez prendre une Énergie {P} de votre Zone d'Énergie et l'attacher à ce Pokémon. Si vous utilisez cette Capacité, votre tour se termine.",
                "es": "Una vez durante tu turno, puedes tomar una Energía {P} de tu Zona de Energía y unirla a este Pokémon. Si usas esta habilidad, tu turno termina.",
                "it": "Una sola volta durante il tuo turno, puoi prendere un'Energia {P} dalla tua Zona Energetica e assegnarla a questo Pokémon. Se usi questa Abilità, il tuo turno termina.",
                "de": "Einmal während deines Zuges kannst du eine {P}-Energie aus deiner Energiezone nehmen und sie an dieses Pokémon anlegen. Wenn du diese Fähigkeit nutzt, endet dein Zug.",
                "pt-br": "Uma vez durante o seu turno, você pode pegar uma Energia {P} da sua Zona de Energia e associá-la a este Pokémon. Se você usar esta habilidade, seu turno termina.",
                "zh-tw": "在你的回合中，你可以從你的能量區取出一個{P}能量並將其附加到這只神奇寶貝身上。如果你使用了這個能力，你的回合就結束了。"
            }
        }],
    attacks: [{
            name: {
                en: "Chaotic Impact",
                "fr": "Impact chaotique",
                "es": "Impacto caótico",
                "it": "Impatto caotico",
                "de": "Chaotischer Aufprall",
                "pt-br": "Impacto Caótico",
                "zh-tw": "混沌衝擊"
            },
            damage: 130,
            cost: ["Psychic", "Psychic", "Psychic", "Colorless"],
            effect: {
                en: "This Pokémon also does 20 damage to itself.",
                "fr": "Ce Pokémon s'inflige également 20 dégâts.",
                "es": "Este Pokémon también se hace 20 daños a sí mismo.",
                "it": "Questo Pokémon infligge anche 20 danni a se stesso.",
                "de": "Dieses Pokémon fügt sich selbst außerdem 20 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 20 de dano a si mesmo.",
                "zh-tw": "這只神奇寶貝也會對自身造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 2
};
export default card;
