import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/024",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/024"
    },
    name: {
        en: "Castform Sunny Form",
        fr: "Morphéo Forme Solaire",
        es: "Castform Forma Sol",
        it: "Castform Forma Sole",
        de: "Formeo Sonnenform",
        "pt-br": "Castform Forma Ensolarada",
        "zh-tw": "飄浮泡泡 太陽的樣子",
        ko: "캐스퐁 태양의 모습",
        ja: "ポワルン たいようのすがた"
    },
    illustrator: "Lee HyunJung",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fire"],
    dexId: [351],
    stage: "Basic",
    description: {
        en: "Castform changes to this form when it basks in bright sunlight. When you touch its glowing skin, it feels all dried out!",
        fr: "Morphéo prend cette forme lorsqu'il se prélasse en plein soleil. Lorsque vous touchez sa peau éclatante, elle est toute desséchée !",
        es: "Castform cambia a esta forma cuando disfruta de la luz del sol. Cuando tocas su piel resplandeciente, ¡se siente toda seca!",
        it: "Castform assume questa forma quando si crogiola alla luce del sole. Quando tocchi la sua pelle luminosa, sembra tutta secca!",
        de: "Formeo nimmt diese Form an, wenn es sich in hellem Sonnenlicht sonnt. Wenn man seine strahlende Haut berührt, fühlt es sich völlig ausgetrocknet an!",
        "pt-br": "Castform muda para esta forma quando se aquece sob a luz solar intensa. Quando você toca sua pele brilhante, ela fica toda seca!",
        "zh-tw": "當飄浮泡泡沐浴在明亮的陽光下時，它會變成這種形式。當你觸摸它發光的皮膚時，感覺整個人都乾了！"
    },
    attacks: [
        {
            cost: ["Fire"],
            name: {
                en: "Sunny Scorching",
                fr: "Brûlure Solaire",
                es: "Sol Ardiente",
                it: "Sole Ustionante",
                de: "Sonniges Versengen",
                "pt-br": "Abrasamento Ensolarado",
                "zh-tw": "太陽灼燒"
            },
            effect: {
                en: "If a Stadium is in play, your opponent's Active Pokémon is now Burned.",
                fr: "Si un Stade est en jeu, le Pokémon Actif de votre adversaire est désormais Brûlé.",
                es: "Si hay un Estadio en juego, el Pokémon Activo de tu rival ahora está Quemado.",
                it: "Se è in gioco uno Stadio, il Pokémon attivo del tuo avversario viene bruciato.",
                de: "Wenn ein Stadion im Spiel ist, ist das Aktive Pokémon deines Gegners jetzt verbrannt.",
                "pt-br": "Se um Estádio estiver em jogo, o Pokémon Ativo do seu oponente estará Queimado.",
                "zh-tw": "如果體育場正在進行中，對手的活躍寶可夢現在會被燒毀。"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
