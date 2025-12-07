import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Munna",
        "fr": "Munna",
        "es": "Munna",
        "it": "Munna",
        "de": "Munna",
        "pt-br": "Munna",
        "zh-tw": "食夢夢",
    },
    illustrator: "miki kudo",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Psychic"],
    description: {
        en: "Late at night, it appears beside people's pillows.\nAs it feeds on dreams, the patterns on its body\ngive off a faint glow.",
        "fr": "Tard dans la nuit, il apparaît à côté des oreillers des gens.\nAlors qu'il se nourrit de rêves, les motifs sur son corps\ndégage une faible lueur.",
        "es": "A altas horas de la noche aparece junto a las almohadas de la gente.\nMientras se alimenta de sueños, los patrones de su cuerpo\ndesprende un tenue brillo.",
        "it": "A tarda notte appare accanto ai cuscini delle persone.\nMentre si nutre di sogni, degli schemi sul suo corpo\nemettere un debole bagliore.",
        "de": "Spät in der Nacht erscheint es neben den Kissen der Menschen.\nWährend es sich von Träumen ernährt, werden die Muster auf seinem Körper sichtbar\ngeben ein schwaches Leuchten ab.",
        "pt-br": "Tarde da noite, aparece ao lado dos travesseiros das pessoas.\nÀ medida que se alimenta de sonhos, os padrões do seu corpo\nemite um leve brilho.",
        "zh-tw": "深夜，它出現在人們的枕頭邊。\n當它以夢為食時，它身上的圖案\n發出微弱的光芒。"
    },
    stage: "Basic",
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
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["ho-oh", "lugia"]
};
export default card;
