import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Vileplume",
        "fr": "Rafflesia",
        "es": "Vileplume",
        "it": "Vileplume",
        "de": "Giflor",
        "pt-br": "Vileplume",
        "zh-tw": "霸王花"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 140,
    types: ["Grass"],
    evolveFrom: {
        en: "Gloom",
        "fr": "Ortide",
        "es": "Gloom",
        "it": "Gloom",
        "de": "Duflor",
        "pt-br": "Gloom",
        "zh-tw": "臭臭花"
    },
    description: {
        en: "It has the world's largest petals. With every step,\nthe petals shake out heavy clouds of toxic pollen.",
        "fr": "Il possède les plus grands pétales du monde. À chaque pas,\nles pétales secouent de lourds nuages ​​de pollen toxique.",
        "es": "Tiene los pétalos más grandes del mundo. Con cada paso,\nlos pétalos sacuden pesadas nubes de polen tóxico.",
        "it": "Ha i petali più grandi del mondo. Ad ogni passo,\ni petali scuotono pesanti nubi di polline tossico.",
        "de": "Es hat die größten Blütenblätter der Welt. Mit jedem Schritt,\nDie Blütenblätter schütteln schwere Wolken giftiger Pollen aus.",
        "pt-br": "Possui as maiores pétalas do mundo. A cada passo,\nas pétalas sacodem pesadas nuvens de pólen tóxico.",
        "zh-tw": "它擁有世界上最大的花瓣。每一步，\n花瓣抖落出大量有毒花粉。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Soothing Scent",
                "fr": "Parfum apaisant",
                "es": "Aroma calmante",
                "it": "Profumo rilassante",
                "de": "Beruhigender Duft",
                "pt-br": "Aroma calmante",
                "zh-tw": "舒緩香氣"
            },
            damage: 80,
            cost: ["Grass", "Grass", "Colorless"],
            effect: {
                en: "Your opponent's Active Pokémon is now Asleep.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Endormi.",
                "es": "El Pokémon Activo de tu rival ahora está Dormido.",
                "it": "Il Pokémon attivo del tuo avversario è addormentato.",
                "de": "Das aktive Pokémon deines Gegners schläft jetzt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Adormecido.",
                "zh-tw": "你對手的活躍神奇寶貝現在處於睡眠狀態。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 3
};
export default card;
