import { QuizStep } from "../../features/quiz/hooks/useQuizWizard"

interface Lesson {
  id: number
  title: string
  quiz: QuizStep[]
}

export const lesson1: QuizStep[] = [
  {
    question: "Qual é o tema central de Romanos 1:16–17?",
    options: [
      { id: 1, label: "A Lei de Moisés" },
      { id: 2, label: "O poder do evangelho" },
      { id: 3, label: "A tradição judaica" },
      { id: 4, label: "A moral romana" },
    ],
    correctAnswerId: 2,
  },
  {
    question: "O evangelho é poder de Deus para:",
    options: [
      { id: 1, label: "Ensinar ética" },
      { id: 2, label: "Salvar o crente" },
      { id: 3, label: "Julgar as nações" },
      { id: 4, label: "Exaltar Israel" },
    ],
    correctAnswerId: 2,
  },
  {
    question: "Contra o que a ira de Deus se revela? (Rm 1:18)",
    options: [
      { id: 1, label: "Ignorância humana" },
      { id: 2, label: "Falta de rituais" },
      { id: 3, label: "Impiedade e injustiça" },
      { id: 4, label: "Fraqueza moral" },
    ],
    correctAnswerId: 3,
  },
  {
    question: "O que os homens fizeram com a verdade? (Rm 1:18)",
    options: [
      { id: 1, label: "Buscaram-na" },
      { id: 2, label: "Suprimiram-na" },
      { id: 3, label: "Ignoraram-na" },
      { id: 4, label: "Ensinaram-na" },
    ],
    correctAnswerId: 2,
  },
  {
    question: "Como Deus é conhecido em Romanos 1:20?",
    options: [
      { id: 1, label: "Pela Lei" },
      { id: 2, label: "Pela consciência" },
      { id: 3, label: "Pela criação" },
      { id: 4, label: "Pelos profetas" },
    ],
    correctAnswerId: 3,
  },
  {
    question: "O que acontece quando rejeitam a Deus? (Rm 1:24)",
    options: [
      { id: 1, label: "Recebem a Lei" },
      { id: 2, label: "São instruídos" },
      { id: 3, label: "Deus os entrega" },
      { id: 4, label: "São absolvidos" },
    ],
    correctAnswerId: 3,
  },
  {
    question: "Como Paulo descreve a humanidade em Rm 1:21?",
    options: [
      { id: 1, label: "Sábia" },
      { id: 2, label: "Neutra" },
      { id: 3, label: "Grata" },
      { id: 4, label: "Insensata" },
    ],
    correctAnswerId: 4,
  },
]

export const lesson2: QuizStep[] = [
  {
    question: "Quem Paulo confronta em Romanos 2:1?",
    options: [
      { id: 1, label: "Os gentios" },
      { id: 2, label: "Os fariseus" },
      { id: 3, label: "Quem julga" },
      { id: 4, label: "Os idólatras" },
    ],
    correctAnswerId: 3,
  },
  {
    question: "Segundo Romanos 2:2, o juízo de Deus é:",
    options: [
      { id: 1, label: "Parcial" },
      { id: 2, label: "Simbólico" },
      { id: 3, label: "Segundo a verdade" },
      { id: 4, label: "Temporário" },
    ],
    correctAnswerId: 3,
  },
  {
    question: "O que leva ao arrependimento? (Rm 2:4)",
    options: [
      { id: 1, label: "O medo" },
      { id: 2, label: "A Lei" },
      { id: 3, label: "A bondade de Deus" },
      { id: 4, label: "O juízo" },
    ],
    correctAnswerId: 3,
  },
  {
    question: "Deus julga cada um segundo:",
    options: [
      { id: 1, label: "A fé" },
      { id: 2, label: "As obras" },
      { id: 3, label: "A Lei" },
      { id: 4, label: "A origem" },
    ],
    correctAnswerId: 2,
  },
  {
    question: "Quem será justificado? (Rm 2:13)",
    options: [
      { id: 1, label: "Quem ouve a Lei" },
      { id: 2, label: "Quem ensina a Lei" },
      { id: 3, label: "Quem pratica a Lei" },
      { id: 4, label: "Quem possui a Lei" },
    ],
    correctAnswerId: 3,
  },
  {
    question: "Onde a Lei pode estar escrita? (Rm 2:15)",
    options: [
      { id: 1, label: "No templo" },
      { id: 2, label: "Nos livros" },
      { id: 3, label: "No coração" },
      { id: 4, label: "Na tradição" },
    ],
    correctAnswerId: 3,
  },
  {
    question: "Quem é o verdadeiro judeu? (Rm 2:29)",
    options: [
      { id: 1, label: "O circuncidado" },
      { id: 2, label: "O da descendência" },
      { id: 3, label: "O exterior" },
      { id: 4, label: "O interior" },
    ],
    correctAnswerId: 4,
  },
]

export const lesson3: QuizStep[] = [
  {
    question: "Segundo Romanos 3:9, qual é a condição de judeus e gentios?",
    options: [
      { id: 1, label: "Os gentios são mais culpados" },
      { id: 2, label: "Os judeus são mais justos" },
      { id: 3, label: "Todos estão sob o pecado" },
      { id: 4, label: "A Lei isenta os judeus" },
    ],
    correctAnswerId: 3,
  },
  {
    question: "Qual é o papel da Lei em Romanos 3:20?",
    options: [
      { id: 1, label: "Justificar o homem" },
      { id: 2, label: "Conceder vida" },
      { id: 3, label: "Revelar o pecado" },
      { id: 4, label: "Salvar Israel" },
    ],
    correctAnswerId: 3,
  },
  {
    question: "Como a justiça de Deus é manifestada em Romanos 3:21?",
    options: [
      { id: 1, label: "Pela obediência" },
      { id: 2, label: "Somente pela Lei" },
      { id: 3, label: "Sem a Lei" },
      { id: 4, label: "Pelos anjos" },
    ],
    correctAnswerId: 3,
  },
  {
    question: "Por que todos precisam da justiça de Deus? (Rm 3:23)",
    options: [
      { id: 1, label: "Todos ignoram a Lei" },
      { id: 2, label: "Todos pecaram" },
      { id: 3, label: "Nem todos creram" },
      { id: 4, label: "Israel falhou" },
    ],
    correctAnswerId: 2,
  },
  {
    question: "Como ocorre a justificação em Romanos 3:24?",
    options: [
      { id: 1, label: "Por mérito humano" },
      { id: 2, label: "Pela Lei" },
      { id: 3, label: "Por graça" },
      { id: 4, label: "Por tradição" },
    ],
    correctAnswerId: 3,
  },
  {
    question: "O que Cristo é em Romanos 3:25?",
    options: [
      { id: 1, label: "Exemplo moral" },
      { id: 2, label: "Propiciação" },
      { id: 3, label: "Juiz final" },
      { id: 4, label: "Líder político" },
    ],
    correctAnswerId: 2,
  },
  {
    question: "O que elimina a jactância humana? (Rm 3:27)",
    options: [
      { id: 1, label: "As obras" },
      { id: 2, label: "A tradição" },
      { id: 3, label: "A fé" },
      { id: 4, label: "A Lei" },
    ],
    correctAnswerId: 3,
  },
]

export const lesson4: QuizStep[] = [
  {
    question: "Quem Paulo usa como exemplo em Romanos 4?",
    options: [
      { id: 1, label: "Moisés" },
      { id: 2, label: "Davi" },
      { id: 3, label: "Abraão" },
      { id: 4, label: "Isaías" },
    ],
    correctAnswerId: 3,
  },
  {
    question: "Abraão foi justificado por:",
    options: [
      { id: 1, label: "Obras" },
      { id: 2, label: "Lei" },
      { id: 3, label: "Fé" },
      { id: 4, label: "Circuncisão" },
    ],
    correctAnswerId: 3,
  },
  {
    question: "Quando Abraão foi justificado?",
    options: [
      { id: 1, label: "Após a circuncisão" },
      { id: 2, label: "Antes da circuncisão" },
      { id: 3, label: "Após a Lei" },
      { id: 4, label: "Durante o êxodo" },
    ],
    correctAnswerId: 2,
  },
  {
    question: "O que a circuncisão foi para Abraão? (Rm 4:11)",
    options: [
      { id: 1, label: "A causa da fé" },
      { id: 2, label: "Um sinal" },
      { id: 3, label: "O meio da justiça" },
      { id: 4, label: "A base da promessa" },
    ],
    correctAnswerId: 2,
  },
  {
    question: "A promessa veio por meio de:",
    options: [
      { id: 1, label: "Lei" },
      { id: 2, label: "Mérito" },
      { id: 3, label: "Fé" },
      { id: 4, label: "Obediência perfeita" },
    ],
    correctAnswerId: 3,
  },
  {
    question: "O que a Lei produz? (Rm 4:15)",
    options: [
      { id: 1, label: "Justiça" },
      { id: 2, label: "Promessa" },
      { id: 3, label: "Ira" },
      { id: 4, label: "Vida" },
    ],
    correctAnswerId: 3,
  },
  {
    question: "Em quem Abraão creu? (Rm 4:17)",
    options: [
      { id: 1, label: "Na Lei" },
      { id: 2, label: "No templo" },
      { id: 3, label: "No Deus que vivifica" },
      { id: 4, label: "Nos profetas" },
    ],
    correctAnswerId: 3,
  },
]

export const lessonsMocks: Lesson[] = [
  {
    id: 1,
    title: "Romanos 1",
    quiz: lesson1,
  },
  {
    id: 2,
    title: "Romanos 2",
    quiz: lesson2,
  },
  {
    id: 3,
    title: "Romanos 3",
    quiz: lesson3,
  },
  {
    id: 4,
    title: "Romanos 4",
    quiz: lesson4,
  },
]
