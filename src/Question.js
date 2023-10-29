const questionsData = [
  {
    pregunta: "¿Cuál de los siguientes no es un tipo de dato en Python?",
    opciones: [
      { textoR: "Integer", isCorrect: false },
      { textoR: "Boolean", isCorrect: false },
      { textoR: "Character", isCorrect: true },
    ],
  },
  {
    pregunta: "¿Cómo se inicia un comentario de una sola línea en Python?",
    opciones: [
      { textoR: "// Comentario", isCorrect: false },
      { textoR: "# Comentario", isCorrect: true },
      { textoR: "/* Comentario */", isCorrect: false },
    ],
  },
  {
    pregunta: "¿Cuál es la función utilizada para imprimir en Python?",
    opciones: [
      { textoR: "print()", isCorrect: true },
      { textoR: "show()", isCorrect: false },
      { textoR: "display()", isCorrect: false },
    ],
  },
  {
    pregunta: "¿Qué operador se utiliza para la igualdad en Python?",
    opciones: [
      { textoR: "=", isCorrect: false },
      { textoR: "==", isCorrect: true },
      { textoR: "===", isCorrect: false },
    ],
  },
  {
    pregunta:
      "¿Cuál de las siguientes estructuras de datos en Python es mutable?",
    opciones: [
      { textoR: "Tupla", isCorrect: false },
      { textoR: "Lista", isCorrect: true },
      { textoR: "Diccionario", isCorrect: false },
    ],
  },
  {
    pregunta:
      "¿Cuál de las siguientes palabras clave se utiliza para definir una función en Python?",
    opciones: [
      { textoR: "method", isCorrect: false },
      { textoR: "def", isCorrect: true },
      { textoR: "function", isCorrect: false },
    ],
  },
  {
    pregunta: "¿Cuál es el resultado de 5 + 3 * 2 en Python?",
    opciones: [
      { textoR: "10", isCorrect: false },
      { textoR: "16", isCorrect: false },
      { textoR: "11", isCorrect: true },
    ],
  },
  {
    pregunta: "¿Qué es la recursión en Python?",
    opciones: [
      { textoR: "Una estructura de datos", isCorrect: false },
      { textoR: "Una técnica de programación", isCorrect: true },
      { textoR: "Una variable global", isCorrect: false },
    ],
  },
  {
    pregunta:
      "¿Cuál de las siguientes NO es una estructura de control en Python?",
    opciones: [
      { textoR: "if", isCorrect: false },
      { textoR: "loop", isCorrect: true },
      { textoR: "for", isCorrect: false },
    ],
  },
  {
    pregunta:
      "¿Cuál es el operador de pertenencia que verifica si un elemento está en una lista en Python?",
    opciones: [
      { textoR: "in", isCorrect: true },
      { textoR: "exists", isCorrect: false },
      { textoR: "contains", isCorrect: false },
    ],
  },
  {
    pregunta:
      "¿Cuál de las siguientes bibliotecas se utiliza para tratar con expresiones regulares en Python?",
    opciones: [
      { textoR: "relib", isCorrect: false },
      { textoR: "regex", isCorrect: false },
      { textoR: "re", isCorrect: true },
    ],
  },
  {
    pregunta:
      "¿Cuál de los siguientes métodos se utiliza para obtener la longitud de una lista en Python?",
    opciones: [
      { textoR: "length()", isCorrect: false },
      { textoR: "count()", isCorrect: false },
      { textoR: "en()", isCorrect: true },
    ],
  },
  {
    pregunta: "¿Cuál es el resultado de 2 ** 3 en Python?",
    opciones: [
      { textoR: "6", isCorrect: false },
      { textoR: "9", isCorrect: false },
      { textoR: "8", isCorrect: true },
    ],
  },
  {
    pregunta: "¿Qué se obtiene al dividir 7 entre 3 en Python?",
    opciones: [
      { textoR: "2.3333", isCorrect: true },
      { textoR: "2.0", isCorrect: false },
      { textoR: "2", isCorrect: false },
    ],
  },
  {
    pregunta: "¿Cuál de las siguientes declaraciones es verdadera en Python?",
    opciones: [
      { textoR: "Python es un lenguaje compilado", isCorrect: false },
      { textoR: "Python es un lenguaje fuertemente tipado", isCorrect: true },
      { textoR: "Python es un lenguaje de bajo nivel", isCorrect: false },
    ],
  },
];

export default questionsData;
