import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/104",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/104",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/104",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/104",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/104",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/104",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2b/104"
    },
    name: {
        en: "Forretress",
        fr: "Foretress",
        es: "Forretress",
        it: "Forretress",
        de: "Forstellka",
        "pt-br": "Forretress",
        "zh-tw": "佛烈托斯",
        ko: "쏘콘",
        ja: "フォレトス"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 100,
    types: ["Metal"],
    dexId: [205],
    evolveFrom: {
        en: "Pineco",
        fr: "Pomdepik",
        es: "Pineco",
        it: "Pineco",
        de: "Tannza",
        "pt-br": "Pineco",
        "zh-tw": "榛果球",
        ko: "피콘",
        ja: "クヌギダマ"
    },
    stage: "Stage1",
    description: {
        en: "Its entire body is shielded by a steel-hard shell. What lurks inside this shell is a total mystery.",
        fr: "Son corps entier est protégé par une coque dure en acier. Ce qui se cache à l’intérieur de cette coquille est un mystère total.",
        es: "Todo su cuerpo está protegido por una coraza dura como el acero. Lo que se esconde dentro de este caparazón es un misterio total.",
        it: "Il suo intero corpo è protetto da un guscio duro come l'acciaio. Ciò che si nasconde all'interno di questo guscio è un mistero totale.",
        de: "Sein gesamter Körper ist von einer stahlharten Schale abgeschirmt. Was sich in dieser Hülle verbirgt, ist ein absolutes Rätsel.",
        "pt-br": "Todo o seu corpo é protegido por uma casca dura de aço. O que se esconde dentro desta concha é um mistério total.",
        "zh-tw": "它的整個身體都被鋼鐵般堅硬的外殼所保護。這個殼裡面潛藏著什麼，完全是個謎。"
    },
    attacks: [
        {
            cost: ["Metal", "Metal", "Metal"],
            name: {
                en: "Enormous Explosion",
                fr: "Énorme Explosion",
                es: "Explosión Enorme",
                it: "Esplosione Titanica",
                de: "Enorme Explosion",
                "pt-br": "Explosão Gigantesca",
                "zh-tw": "特大號爆炸"
            },
            effect: {
                en: "This Pokémon also does 100 damage to itself and 50 damage to all Benched Pokémon (both yours and your opponent's).",
                fr: "Ce Pokémon s'inflige également 100 dégâts et 50 dégâts à tous les Pokémon du Banc (le vôtre et celui de votre adversaire).",
                es: "Este Pokémon también se hace 100 de daño a sí mismo y 50 de daño a todos los Pokémon en Banca (tanto tuyos como de tu rival).",
                it: "Questo Pokémon infligge inoltre 100 danni a se stesso e 50 danni a tutti i Pokémon in panchina (sia i tuoi che quelli del tuo avversario).",
                de: "Dieses Pokémon fügt sich selbst 100 Schadenspunkte und allen Pokémon auf der Bank (sowohl deinem als auch dem deines Gegners) 50 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 100 de dano a si mesmo e 50 de dano a todos os Pokémon no Banco (seus e do seu oponente).",
                "zh-tw": "該寶可夢還會對其造成 100 點傷害，並對所有後備寶可夢（包括你的和對手的）造成 50 點傷害。"
            },
            damage: 100
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
