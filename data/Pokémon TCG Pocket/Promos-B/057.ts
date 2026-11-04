import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/057/561de1cd2b2f304b",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/057/561de1cd2b2f304b",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/057/561de1cd2b2f304b",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/057/561de1cd2b2f304b",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/057/561de1cd2b2f304b",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/057/561de1cd2b2f304b",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/057/561de1cd2b2f304b",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/057/561de1cd2b2f304b",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/057/561de1cd2b2f304b"
    },
    name: {
        en: "Castform Sunny Form",
        fr: "Morphéo Forme Solaire",
        es: "Castform Forma Sol",
        it: "Castform Forma Sole",
        de: "Formeo Sonnenform",
        "pt-br": "Castform Forma Ensolarada",
        "zh-tw": "飄浮泡泡太陽的樣子",
        ko: "캐스퐁 태양의 모습",
        ja: "ポワルンたいようのすがた"
    },
    illustrator: "Yuka Morii",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fire"],
    dexId: [351],
    stage: "Basic",
    description: {
        en: "Castform changes to this form when it basks in bright sunlight. When you touch its glowing skin, it feels all dried out!",
        fr: "Morphéo adopte cette apparence lorsqu'il y a du soleil. Son corps rougeoyant est très sec au toucher.",
        es: "Castform adopta esta forma cuando hace sol. Su cuerpo ardiente es muy reseco al tacto.",
        it: "Castform assume questa forma quando viene scaldato dai raggi del sole. Il suo corpo ardente è molto secco al tatto.",
        de: "Diese Gestalt nimmt Formeo bei einem heißen Sonnenbad an. Sein glühender Körper fühlt sich sehr trocken an.",
        "pt-br": "Castform muda a sua forma ao tomar banho de sol. Quando você toca a sua pele brilhante, ela parece ressecada!",
        "zh-tw": "暴露在烈日下就會變成這個樣子。如果去摸牠熱烘烘的身體，會感覺到乾巴巴的。",
        ja: "暑い 日差しを 浴びていると この姿に 変わる。 火照った 身体を 触ると パサパサするぞ。",
        ko: "뜨거운 햇볕을 받고 있으면\n이 모습으로 변한다. 화끈한\n몸을 만지면 건조해진다."
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
                "zh-tw": "太陽灼燒",
                ja: "やけつくたいよう",
                ko: "불붙는태양"
            },
            effect: {
                en: "If a Stadium is in play, your opponent's Active Pokémon is now Burned.",
                fr: "Si un Stade est en jeu, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
                es: "Si hay un Estadio en juego, el Pokémon Activo de tu rival pasa a estar Quemado.",
                it: "Se c’è in gioco una carta Stadio, il Pokémon attivo del tuo avversario viene bruciato.",
                de: "Wenn eine Stadionkarte im Spiel ist, ist das Aktive Pokémon deines Gegners jetzt verbrannt.",
                "pt-br": "Se um Estádio estiver em jogo, o Pokémon Ativo do seu oponente agora estará Queimado.",
                "zh-tw": "若場上有競技場卡,則將對手的戰鬥寶可夢灼傷。",
                ja: "場にスタジアムが出ているなら、相手のバトルポケモンをやけどにする。",
                ko: "필드에 스타디움이 나와 있다면 상대의 배틀 포켓몬을 화상으로 만든다."
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
    retreat: 1,
    boosters: ["vol8"]
};

export default card;
