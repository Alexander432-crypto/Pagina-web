
// Archivo: script.js

let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];
let timer;
let timeLeft = 60;
fetch ('codigoq.json')
const formSection = document.getElementById('form-section');
const quizSection = document.getElementById('quiz-section');
const resultSection = document.getElementById('result-section');
const timerElement = document.getElementById('time');
const questionContainer = document.getElementById('question-container');
const nextButton = document.getElementById('next-question');
const resultElement = document.getElementById('result');
const feedbackElement = document.getElementById('feedback');

const questions = [
    {
      "pregunta": "Según el artículo 279-G Código Penal Peruano, constituye delito el que sin estar debidamente autorizado:",
      "opciones": [
          "Presta un arma de fuego.",
          "Porta o tiene en su poder armas de fuego.",
          "Trafica armas de fuego.",
          "A, B y C son correctas.",
          "Ninguna de las anteriores."
      ],
      "respuestaCorrecta": "Ninguna de las anteriores."
  }, 
  {
      "pregunta": "Según el Artículo 279-G del codigo penal peruano constituye delito el que con fines ilicitos:",
      "opciones": [
          "Facilita un arma de fuego",
          "Alquila un arma de fuego",
          "Presta un arma de fuego.",
          "A, B y C son correctas.",
          "Ninguna de las anteriores."
      ],
      "respuestaCorrecta": "A, B y C son correctas."
  },
  {
      "pregunta": "Según el Articulo 279-G del Codigo Penal Peruano constituye delito el que sin estar debidamente autorizado:",
      "opciones": [
          "Fabrica y comercializa armas de fuego",
          "Modifica y almacenan armas de fuego",
          "Usa y porta armas de fuego",
          "Trafica y suministra armas de fuego",
          "Todas las anteriores son correctas."
      ],
      "respuestaCorrecta": "Todas las anteriores son correctas"
  },
  {
      "pregunta": "Según el Artículo 279-G del codigo penal peruano constituye delito el que sin estar debidamente autorizado:",
      "opciones": [
          "Fabrica y comercializa cualquier tipo de municiones.",
          "Fabrica y comercializa accesorios de armas de fuego.",
          "Comercializa materiales destinados a la fabricacion de armas de fuego o municiones",
          "A, B y C son correctas.",
          "Ninguna de las anteriores."
      ],
      "respuestaCorrecta": "A, B y C son correctas."
  },
  {
      "pregunta": "Segun el Articulo 70 numeral 70.3 de la Ley 30299 podran ser inhabilitadas por la SUCAMEC por un lapso de dos (02) años",
      "opciones": [
          "La perdida de arma de fuego",
          "El hurto de arma de fuego",
          "El robo de arma de fuego",
          "A, B y C son correctas.",
          "Ninguna de las anteriores."
      ],
      "respuestaCorrecta": "A, B y C son correctas."
  },
  {
      "pregunta": "Segun el Articulo 70 numeral 70.1 de la ley 30299 la perdida, robo o hurto de cualquier arma de fuego debe ser comunicada a la SUCAMEC dentro de",
      "opciones": [
          "72 horas",
          "30 dias",
          "48 horas",
          "24 horas",
          "12 horas"
      ],
      "respuestaCorrecta": "48 horas"
  },
  {
      "pregunta": "Segun el Art.20 del reglamento, no cumplir con trasladar las armas de fuego descargadas o desabastecidas bajo la modalidad de Deporte y tiro recreativo es una falta grave y se sanciona con:",
      "opciones": [
          "Multa",
          "Decomiso",
          "Incautacion",
          "Cancelacion de la licencia",
          "A y B son correctas."
      ],
      "respuestaCorrecta": "A y B son correctas."
  },
  {
       "pregunta": "Segun el Art.37 Inciso e) de la ley 30299 portar o usar armas de fuego bajo el consumo de alcohol o bajo los efectos de sustancias estupefacientes o psicotropicas es una falta muy grave y se sanciona con:",
       "opciones": [
          "Multa",
          "Decomiso",
          "Internamiento temporal",
          "Incautacion",
          "A y B son correctas."
       ],
       "respuestaCorrecta":"A y B son correctas."
  },
  {
      "pregunta":"Segun el Art.37 Inciso h) de la ley 30299 usar un arma distinta a la indicada en la tarjeta de propiedad o autorizada por la licencia de uso es una falta muy grave y se sanciona con:",
      "opciones": [
          "Deposito temporal",
          "Internamiento por 90 dias",
          "Multa",
          "Decomiso",
          "C y D son correctas."
      ],
              "respuestaCorrecta":"C y D son correctas."
  },
  {
      "pregunta":"Segun el Art.37 Inciso m) de la ley 30299 usar silenciadores o dispositivos que alteren u oculten la apariencia o funcionamiento de las armas, excepto en armas destinadas para caza es una falta muy grave y se sanciona con:",
      "opciones":[
          "Deposito temporal",
          "Internamiento por 120 dias",
          "Multa y decomiso",
          "Cancelacion de la licencia",
          "Ninguna de las anteriores."
      ],
               "respuestaCorrecta":"Multa y decomiso."
  },
  {
      "pregunta":"Segun el Art.37 Inciso f) de la Ley 30299 portar o usar armas de fuego en manifestaciones publicas, espectaculos con afluencia de publico, centros de esparcimiento entre otros espacios publicos es una falta muy grave y se sanciona con:",
      "opciones":[
          "Internamiento del arma por 30 dias",
          "Multa",
          "Decomiso",
          "Incautacion",
          "B y C son correctas."
      ],
              "respuestaCorrecta":"B y C son correctas."
  },
  {
     "pregunta":"Segun el Art.27 del Reglamento de la Ley 30299 Almacenar, exhibir, portar o poseer armas de terceros sin autorizacion es una falta muy grave y se sanciona con:",
     "opciones":[
          "Cancelacion de la licencia por 90 dias",
          "Internamiento del arma por 120 dias",
          "Incautacion y decomiso",
          "Multa y decomiso",
          "Ninguna de las anteriores."
     ],
          "respuestaCorrecta":"Multa y decomiso."
  },
  {
      "pregunta":"Segun el Articulo 16.7 del Reglamento de la Ley 30299 Transferir, otorgar, dar o ceder armas de fuego a terceros que no tengan autorizacion o licencia de uso es una falta muy grave y se sanciona con:",
      "opciones":[
          "Cancelacion de la licencia",
          "Internamiento temporal del arma",
          "Decomiso del arma",
          "Multa y decomiso",
          "A y C son correctas,"
      ],
      "respuestaCorrecta":"A y C son correctas."
  },
  {
      "pregunta":"Segun el Articulo 32 de la Ley 30299 no depositar el arma de fuego por disposicion o mandato de la autoridad competente en el plazo establecido (SUCAMEC, PNP, Poder Judicial o Ministerio Publico) es una falta grave y se sanciona con:",
      "opciones":[
          "Cancelacion de la licencia de uso de armas de fuego",
          "Internamiento por 30 dias del arma de fuego",
          "Decomiso del arma",
          "Multa y decomiso",
          "A y C son correctas,"
      ],
      "respuestaCorrecta":"Cancelacion de la licencia de uso de armas de fuego."
  },
  {
      "pregunta":"Segun el Articulo 37 de la Ley 30299 Art.18,19,20,21,22 y 23 del Reglamento, portar o usar armas de fuego en una modalidad distinta a la autorizada es una falta muy grave y se sanciona con:",
      "opciones":[
          "Cancelacion de la licencia de uso de armas de fuego",
          "Decomiso del arma",
          "Internamiento del arma por 90 dias",
          "Multa y decomiso",
          "A y B son correctas."
      ],
      "respuestaCorrecta":"A y B son correctas."
  },
  {
      "pregunta":"Segun el Articulo 37 Inciso b) de la Ley 30299 efectuar modificaciones que alteren o eliminen las caracteristicas identificatorias del arma de fuego o efectuar modificaciones que alteren la cadencia de tira, el calibre o la potencia del arma de fuego es una falta muy grave y se sanciona con:",
      "opciones":[
          "Multa",
          "Cancelacion de la licencia de uso de arma de fuego y decomiso",
          "Internamiento del arma por 60 dias",
          "Multa y decomiso",
          "Todas las anteriores son correctas."
      ],
      "respuestaCorrecta":"Cancelacion de la licencia de uso de arma de fuego y decomiso."
  },
  {
      "pregunta":"Segun el Articulo 16 del Reglamento de la Ley 30299 portar, usar, importar, comercializar armas de fuego de cadencia automatica o con calibres mayores a las permitidas es una falta muy grave y se sanciona con:",
      "opciones":[
          "Cancelacion de la licencia de armas de fuego",
          "Multa",
          "Decomiso",
          "Internamiento del arma por 120 dias",
          "A, B y C son correctas."
      ],
      "respuestaCorrecta":"A y C son correctas."
  },
  { 
      "pregunta":"Segun el Articulo 37 Inciso b) de la Ley 30299 portar o usar armas de fuego de uso civil con las letras o numeros identificatorios erradicados, ilegibles, modificados o borrados, es una falta muy grave y se sanciona con:",
      "opciones":[
          "Internamiento temporal del arma de fuego",
          "Multa",
          "Decomiso y cancelacion de la licencia de uso de armas de fuego",
          "Multa y decomiso",
          "A y B son correctas."
      ],
      "respuestaCorrecta":"Decomiso y cancelacion de la licencia de uso de armas de fuego." 
  },
  {
      "pregunta":"19. SegunArticulo 37 Inciso c) de la ley 30299 portar armas con la cadencia el calibre o la potencia o la potencia alteradas o modificadas, es una falta muy grave y se sanciona con:",
      "opciones":[
          "Internamiento temporal del arma de fuego",
          "Multa",
          "Decomiso y cancelacion de la licencia de uso de armas de fuego.",
          "Multa y decomiso",
          "Internamiento por 90 dias del arma de fuego."
      ],
      "respuestaCorrecta":"Decomiso y cancelacion de la licencia de uso de armas de fuego."
  },
  {
      "pregunta":"Segun el Articulo 37 literal g) de la Ley 30299 y Articulo 28 del Reglamento poseer, portar o usar armas de fuego sin licencia de uso, es una falta muy grave y se sanciona con:",
      "opciones":[
          "Internamiento temporal del arma de fuego",
          "Incautacion",
          "Decomiso y cancelacion de la licencia de uso de armas de fuego",
          "Multa y decomiso",
          "Ninguna de las anteriores."
      ],
      "respuestaCorrecta":"Multa y decomiso."
  },
  {
      "pregunta":"En el hogar las armas de fuego se deben guardar:",
      "opciones": [
          "Abastecidas y en un lugar seguro bajo llave",
          "Cargadas listas para ser usadas",
          "Descargadas y separadas de la municion",
          "En un lugar seguro bajo llave",
          "C y D son correctas."
      ],
      "respuestaCorrecta":"C y D son correctas."
  },
  {
      "pregunta":"En el hogar los miembros de la familia deben:",
      "opciones":[
          "Conocer los riesgos que existen al manipular un arma de fuego",
          "Aprender a usar un arma de fuego",
          "Aprender a disparar",
          "Tener la llave de la caja donde se guarda el arma",
          "Ninguna de las anteriores."
      ],
      "respuestaCorrecta":"Conocer los riesgos que existen al manipular un arma de fuego"
  },
{
  "pregunta":"En el hogar explicar a la familia especialmente a los niños en caso encuentren un arma de fuego procedan a:",
  "opciones":[
      "Que la dejen donde esta",
      "Que avisen a una persona adulta",
      "Que la lleven a su domicilio",
      "Que verifiquen si esta cargada",
      "A y B son correctas."
  ],
  "respuestaCorrecta":"A y B son correctas."
},
{
  "pregunta":"En el manejo de la pistola cual es la primera medida de seguridad a tener en cuenta",
  "opciones":[
      "Rastrillar 3 veces la corredera de la pistola y percutar.",
      "Verificar la recamara de la pistola.",
      "Apuntar a un lugar seguro y retirar la cacerina de la pistola.",
      "Disparar el arma a un sitio donde no se pueda lastimar a nadie",
      "Mirar por la boca del cañon."
  ],
  "respuestaCorrecta":"Apuntar a un lugar seguro y retirar la cacerina de la pistola."
},
{
  "pregunta": "En el manejo de cualquier arma, ¿qué es lo primero que se debe hacer antes de manipularla?",
  "opciones": [
    "Mirar por la boca del cañón para verificar si el arma está cargada.",
    "Apuntar el arma a un lugar seguro donde no pueda dañar a otras personas.",
    "Desabastecer el arma de fuego.",
    "Desensamblar el arma de fuego.",
    "Presionar el disparador."
  ],
  "respuestaCorrecta": "Apuntar el arma a un lugar seguro donde no pueda dañar a otras personas."
},
{
  "pregunta": "En el manejo del revólver, ¿cuál es la primera medida de seguridad a tener en cuenta?",
  "opciones": [
    "Presionar el disparador.",
    "Apuntar a una persona.",
    "Mirar por la boca del cañón.",
    "Amartillar el arma de fuego.",
    "Ninguna de las anteriores es correcta."
  ],
  "respuestaCorrecta": "Ninguna de las anteriores es correcta."
},
{
  "pregunta": "Marque la alternativa incorrecta en las medidas de seguridad en el manejo de una pistola:",
  "opciones": [
    "Apuntar a un lugar seguro donde no se pueda dañar a nadie.",
    "No apuntar a algo o alguien al que no se quiera disparar.",
    "Colocar el dedo en el disparador o gatillo sólo si se va a disparar.",
    "Verificar la recámara de la pistola.",
    "Percutar la pistola para liberar el cartucho de la recámara."
  ],
  "respuestaCorrecta": "Percutar la pistola para liberar el cartucho de la recámara."
},
{
  "pregunta": "En el manejo del revólver, si este se encuentra amartillado, ¿qué acción debe realizarse para no disparar el arma?",
  "opciones": [
    "Liberar el tambor del revólver.",
    "Disparar hacia una zona segura.",
    "Llevar hacia atrás el martillo.",
    "Llevar simultáneamente el disparador y el martillo hacia delante.",
    "Quitar la varilla extractora."
  ],
  "respuestaCorrecta": "Llevar simultáneamente el disparador y el martillo hacia delante."
},
{
  "pregunta": "Las armas largas pueden ser usadas para la modalidad de defensa personal siempre que el solicitante habite en:",
  "opciones": [
    "Zona Urbana.",
    "Zona Industrial.",
    "Zona Rural.",
    "Zona Residencial.",
    "A y C son correctas."
  ],
  "respuestaCorrecta": "Zona rural"
},
{
  "pregunta": "Marque la respuesta correcta: (art. 25 del Reglamento de la Ley 30299):",
  "opciones": [
    "Para las armas de fuego de defensa personal se puede portar para uso inmediato hasta 70 setenta municiones.",
    "Para las armas de fuego de defensa personal se puede portar para uso inmediato hasta 60 sesenta municiones.",
    "Para las armas de fuego de defensa personal se puede portar para uso inmediato hasta 50 cincuenta municiones.",
    "Para las armas de fuego de defensa personal se puede portar para uso inmediato hasta 80 ochenta municiones.",
    "Para las armas de fuego de defensa personal se puede portar para uso inmediato hasta 90 noventa municiones."
  ],
  "respuestaCorrecta": "Para las armas de fuego de defensa personal se puede portar para uso inmediato hasta 70 setenta municiones."
},
{
  "pregunta": "Las licencias en la modalidad de defensa personal también son conocidas como:",
  "opciones": [
    "Licencia tipo A.",
    "Licencia tipo B.",
    "Licencia tipo L2.",
    "Licencia tipo L1.",
    "Luaspe."
  ],
  "respuestaCorrecta": "Licencia tipo L1."
},
{
  "pregunta": "Es un requisito para la licencia en la modalidad de defensa personal:",
  "opciones": [
    "Copia de la autorización expedida por SERFOR.",
    "Constancia de acreditación emitida por una asociación o club de tiro reconocida por la Federación Deportiva Nacional.",
    "Resolución emitida por el Ministerio de Cultura.",
    "Expresión de motivos conforme a lo establecido en el numeral 7.11 del artículo 7 del Reglamento de la Ley 30299.",
    "Declaración Jurada de la efectiva posesión del o las armas de fuego de su propiedad."
  ],
  "respuestaCorrecta": "Expresion de motivos conforme a lo establecido en el numeral 7.11 del articulo 7 del Reglamento de la Ley 30299."
},
{
  "pregunta": "Las licencias en la modalidad de caza también son conocidas como:",
  "opciones": [
    "Licencia tipo B.",
    "Licencia tipo L6.",
    "Licencia tipo A.",
    "Licencia tipo L2.",
    "Licencia SERFOR."
  ],
  "respuestaCorrecta": "Licencia tipo L2"
},
{
  "pregunta": "Marque la alternativa correcta:",
  "opciones": [
    "Las armas de fuego en la modalidad de caza deben trasladarse descargadas y desabastecidas con el embalaje adecuado.",
    "Está permitido el uso del arma de fuego bajo la modalidad de caza durante su traslado.",
    "Está permitido usar el arma de la modalidad de defensa para la caza deportiva.",
    "Sólo las armas largas están permitidas para actividades de caza deportiva.",
    "Ninguna de las anteriores."
  ],
  "respuestaCorrecta": "Las armas de fuego en la modalidad de caza deben trasladarse descargadas y desabastecidas con el embalaje adecuado."
},
{
  "pregunta": "Marque la alternativa correcta respecto a la modalidad de caza:",
  "opciones": [
    "La licencia de caza es igual o equivale a la licencia SERFOR.",
    "La licencia de caza tiene una duración de 4 años.",
    "Las personas naturales están obligadas a gestionar ante el Servicio Nacional Forestal y de Fauna Silvestre - SERFOR o los Gobiernos Regionales donde MINAGRI haya efectuado la transferencia de competencias en materia forestal y de fauna silvestre, la licencia vigente que demuestra su condición de cazadores.",
    "La caza deportiva es autorizada por el Comando Conjunto de las Fuerzas Armadas.",
    "Ninguna de las anteriores es correcta."
  ],
  "respuestaCorrecta": "Las personas naturales están obligadas a gestionar ante el Servicio Nacional Forestal y de Fauna Silvestre - SERFOR o los Gobiernos Regionales donde MINAGRI haya efectuado la transferencia de competencias en materia forestal y de fauna silvestre, la licencia vigente que demuestra su condición de cazadores."
},
{
  "pregunta": "El uso de las armas de fuego autorizadas en la modalidad de caza se encuentra permitido en:",
  "opciones": [
    "Galerías de tiro.",
    "En áreas rurales y eriazas para efectos de calibración o entrenamiento.",
    "En áreas rurales, eriazas ámbitos o zonas de cacería determinadas por la autoridad competente de acuerdo a la ley de la materia.",
    "Deben trasladarse descargadas y desabastecidas con el embalaje adecuado.",
    "Todas las anteriores son correctas."
  ],
  "respuestaCorrecta": "Todas las anteriores son correctas."
},
{
  "pregunta": "Son Cartuchos y Municiones para las actividades de caza:",
  "opciones": [
    "Cartuchos no mayores a doce (12) GAUGE, con excepción de las municiones establecidas en la Cuarta Disposición Complementaria Transitoria de la Ley.",
    "Cartuchos especiales con sustancia química para fines de conservación de fauna.",
    "Municiones con proyectil de núcleo de acero.",
    "A y B son correctas.",
    "A, B y C son correctas."
  ],
  "respuestaCorrecta": "A, B y C son correctas."
},
{
  "pregunta": "Las licencias en la modalidad de deporte y tiro recreativo también son conocidas como:",
  "opciones": [
    "Licencia tipo L3.",
    "Licencia tipo LD.",
    "Licencia tipo D.",
    "Licencia tipo LD3.",
    "Licencia tipo FPT."
  ],
  "respuestaCorrecta": "Licencia tipo L3."
},
{
  "pregunta": "En la renovación de la licencia de deporte y tiro recreativo, ¿cuál es el requisito que ya no se debe presentar?:",
  "opciones": [
    "La evaluación teórica práctica aprobada ante SUCAMEC.",
    "La declaración Jurada de cumplir con las condiciones establecidas en el artículo 7 de la Ley.",
    "El certificado de salud psicosomático para la obtención de licencias de arma de fuego, emitido por una IPRESS registrada en SUSALUD.",
    "Constancia de acreditación que emita el club de tiro, la asociación deportiva u otra organización deportiva de tiro reconocida por la Federación Deportiva Nacional.",
    "Resolución de la FPT reconociendo al solicitante como deportista calificado."
  ],
  "respuestaCorrecta": "La evaluación teórica práctica aprobada ante SUCAMEC."
},
{
  "pregunta": "Marque la alternativa correcta respecto a la modalidad de deporte y tiro recreativo:",
  "opciones": [
    "El uso del arma de fuego de deporte se encuentra permitido durante su traslado.",
    "Las armas de fuego autorizadas para la modalidad de deporte y tiro recreativo se usan para tiro de reacción.",
    "Las armas de fuego autorizadas bajo la modalidad de deporte y tiro recreativo deben trasladarse descargadas, desabastecidas y con el embalaje adecuado.",
    "Las armas de fuego autorizadas para la modalidad de deporte y tiro recreativo se pueden usar en la modalidad de defensa personal en zona rural.",
    "Ninguna de las anteriores es correcta."
  ],
  "respuestaCorrecta": "Las armas de fuego autorizadas bajo la modalidad de deporte y tiro recreativo deben trasladarse descargadas, desabastecidas y con el embalaje adecuado."
},
{
  "pregunta": "No es un requisito para la modalidad de colección:",
  "opciones": [
    "Declaración Jurada de la efectiva posesión del o las armas de fuego de su propiedad.",
    "Formulario de solicitud debidamente suscrito y firmado.",
    "Exhibir documento de identidad vigente y legible o copia del carné de extranjería vigente y legible.",
    "Resolución emitida por el Ministerio de Cultura para Coleccionistas.",
    "Haber aprobado la evaluación teórica práctica ante la SUCAMEC."
  ],
  "respuestaCorrecta": "Resolucion emitida por el Ministerio de Cultura para Coleccionistas."
},
{
  "pregunta": "Marque la respuesta correcta respecto a la modalidad de colección:",
  "opciones": [
    "Las armas de colección requieren contar con tarjeta de propiedad exceptuándose el requisito del número de identificación a las armas manufacturadas en el año 1898 o antes.",
    "Las armas de fuego de colección pueden ser usadas en la modalidad de caza.",
    "La SUCAMEC no autoriza el traslado de armas de fuego de colección con fines didácticos.",
    "Son armas de colección aquellas fabricadas hasta el año 1888.",
    "No está permitido la compra y uso de municiones para el arma de fuego de colección."
  ],
  "respuestaCorrecta": "Las armas de colección requieren contar con tarjeta de propiedad exceptuándose el requisito del número de identificación a las armas manufacturadas en el año 1898 o antes."
},
{
  "pregunta": "¿Cuál es el requisito adicional para la modalidad de colección?",
  "opciones": [
    "Declaración Jurada de la Efectiva posesión de las armas de su propiedad.",
    "Resolución del Ministerio de Cultura reconociendo al solicitante como coleccionista.",
    "Constancia de una asociación o club de coleccionistas acreditado debidamente en el ministerio de Cultura.",
    "Certificado temporal donde se acredite la fecha de fabricación del arma de fuego, mediante prueba de carbono emitido por la Dirección de Criminalística de la Policía Nacional.",
    "Ninguna de las anteriores."
  ],
  "respuestaCorrecta": "Declaracion jurada de la efectiva posesion de las armas de su propiedad."
},
{
  "pregunta": "Marque la respuesta correcta respecto a las armas de colección:",
  "opciones": [
    "Deben permanecer descargadas y desabastecidas, asimismo debe desmontarse el mecanismo de disparo si sus características lo permiten, salvo fines didácticos o de exhibición.",
    "El porte de las armas de colección se encuentra permitido.",
    "La compra y uso de municiones para el arma de fuego de colección está permitido en galerías de tiro o para fines de exhibición.",
    "A y C son correctas.",
    "Todas son correctas."
  ],
  "respuestaCorrecta": "A y C son correctas."
},
{
  "pregunta": "Las licencias en la modalidad de seguridad privada son conocidas como:",
  "opciones": [
    "Licencia tipo C.",
    "Licencia tipo L3.",
    "Licencia tipo L6.",
    "Licencia tipo L4.",
    "Licencia tipo Colección."
  ],
  "respuestaCorrecta": "Licencia tipo L4."
},
{
  "pregunta": "Las licencias en la modalidad colección son conocidas como:",
  "opciones": [
    "Licencia tipo S.",
    "Licencia tipo LS.",
    "Licencia tipo L6.",
    "Licencia tipo L5S.",
    "Licencia tipo Sispe."
  ],
  "respuestaCorrecta": "Licencia tipo L6."
},
{
  "pregunta": "Marque la respuesta correcta respecto a la renovación de licencia Sispe:",
  "opciones": [
    "Para la renovación de licencia del personal de seguridad estos deberán adjuntar los mismos requisitos exigidos para el trámite de licencia inicial.",
    "Para la renovación de licencia del personal de seguridad ya no deberá adjuntar el requisito de evaluación teórico práctica.",
    "Para la renovación de licencia del personal de seguridad ya no deberá adjuntar el requisito de certificado de salud psicosomático.",
    "Para la renovación de licencia del personal de seguridad ya no deberá adjuntar el requisito de archivo con foto digitalizada.",
    "Para la renovación de licencia del personal de seguridad ya no deberá adjuntar el requisito de verificación de arma de fuego."
  ],
  "respuestaCorrecta": "Para la renovación de licencia del personal de seguridad estos deberan adjuntar los mismos requisitos exigidos para el tramite de licencia inicial."
},
{
  "pregunta": "Marque la alternativa incorrecta respecto a los requisitos para la licencia Sispe:",
  "opciones": [
    "Solicitud debidamente suscrita y firmada por el solicitante.",
    "Haber aprobado la evaluación teórica práctica ante la SUCAMEC.",
    "Declaración Jurada de cumplir con las condiciones establecidas en el artículo 7 de la Ley, de acuerdo al formulario aprobado por SUCAMEC.",
    "Copia del Carnet de personal de seguridad emitido por la Gerencia de Servicio de Seguridad Privada.",
    "Copia del comprobante que acredite el pago correspondiente por el trámite, indicando número de RUC vigente del solicitante."
  ],
  "respuestaCorrecta": "Copia del carnet de personal de seguridad emitido por la Gerencia de Servicio de Seguridad Privada."
},
{
  "pregunta": "Según el Artículo 15 de la Ley 30299 el personal de seguridad puede usar:",
  "opciones": [
    "Pistolas.",
    "Revólveres.",
    "Escopetas.",
    "Carabinas.",
    "Todas las anteriores son correctas."
  ],
  "respuestaCorrecta": "Todas las anteriores son correctas."
},
{
  "pregunta": "El calibre en las armas de fuego se mide:",
  "opciones": [
    "En el diámetro interior del cañón de las armas de fuego.",
    "En el diámetro exterior del cañón de las armas de fuego.",
    "En el diámetro exterior de los casquillos.",
    "En la recámara.",
    "Ninguna de las anteriores."
  ],
  "respuestaCorrecta": "En el diámetro interior del cañón de las armas de fuego."
},
{
  "pregunta": "¿Cuál de los siguientes calibres NO es considerado calibre de escopeta?",
  "opciones": [
    "410 mm.",
    "16 GA.",
    "12 GA.",
    "10 GA.",
    "Ninguna de las anteriores."
  ],
  "respuestaCorrecta": "410 mm."
},
{
  "pregunta": "Es una medida de seguridad en el manejo de la escopeta:",
  "opciones": [
    "No dirigir el cañón a otra persona, así estuviera descargada.",
    "Presumir que el arma siempre se encuentra cargada.",
    "Trasladar el arma cargada en un embalaje adecuado.",
    "A y B son correctas.",
    "B y C son correctas."
  ],
  "respuestaCorrecta": "A y B son correctas."
},
{
  "pregunta": "¿Qué es lo que nunca debemos hacer cuando desconozcamos el funcionamiento de una escopeta?",
  "opciones": [
    "Percutar para verificar que no esté cargada.",
    "Manipularla.",
    "Guardarla en su funda.",
    "A y B son correctas.",
    "Todas las anteriores."
  ],
  "respuestaCorrecta": "Manipularla"
},
{
  "pregunta": "¿Cuántos golpes de seguridad es recomendable con la escopeta luego de cerciorarte que no hay munición en la recámara?",
  "opciones": [
    "2 golpes.",
    "1 golpe.",
    "3 golpes.",
    "4 golpes.",
    "Ningún golpe."
  ],
  "respuestaCorrecta": "3 golpes."
},
{
  "pregunta": "La escopeta es considerada como:",
  "opciones": [
    "Arma corta.",
    "Arma larga.",
    "Arma individual.",
    "Arma colectiva.",
    "B y C son correctas."
  ],
  "respuestaCorrecta": "Arma Larga."
},
{
  "pregunta": "Según su funcionamiento las escopetas autorizadas para uso civil pueden ser:",
  "opciones": [
    "Automáticas.",
    "Semiautomática.",
    "Tiro por tiro.",
    "B y C son correctas.",
    "Todas las anteriores."
  ],
  "respuestaCorrecta": "B y C son correctas."
},
{
  "pregunta": "Las escopetas de caza generalmente tienen el ánima:",
  "opciones": [
    "Rayada.",
    "Estriada.",
    "Lisa.",
    "A y C son correctas.",
    "Ninguna de las anteriores."
  ],
  "respuestaCorrecta": "Lisa."
},
{
  "pregunta": "¿Qué función cumple el guardamonte en una escopeta de caza?",
  "opciones": [
    "Para proteger la mano del tirador.",
    "Para proteger el eyector.",
    "Para proteger el seguro del arma.",
    "Para proteger el disparador.",
    "Para proteger el destrabador."
  ],
  "respuestaCorrecta": "Para proteger el disparador."
},
{
  "pregunta": "¿Qué función cumple la culata de una escopeta de caza?",
  "opciones": [
    "Hace que el encare y el apoyo del arma en el hombro del tirador sean correctos.",
    "Para minimizar los efectos de la fuerza de retroceso al ser disparada el arma.",
    "Para eyectar los casquillos.",
    "Para que el arma tenga menos estruendo.",
    "A y B son correctas."
  ],
  "respuestaCorrecta": "A y B son correctas."
},
{
  "pregunta": "La cantonera de la escopeta sirve para:",
  "opciones": [
    "Para apuntar el arma.",
    "Para cargar el arma.",
    "Para apoyar el arma en una superficie.",
    "Para abastecer el arma.",
    "Para eyectar el casquillo del arma."
  ],
  "respuestaCorrecta": "Para apoyar el arma en una superficie."
},
{
  "pregunta": "Las escopetas pueden ser usadas en las siguientes modalidades:",
  "opciones": [
    "Defensa personal.",
    "Seguridad privada.",
    "Luaspe.",
    "Todas las anteriores.",
    "Ninguna de las anteriores."
  ],
  "respuestaCorrecta": "Todas las anteriores."
},
{
  "pregunta": "Elija la respuesta incorrecta en el sistema de funcionamiento de las escopetas autorizadas para uso civil:",
  "opciones": [
    "Semiautomática.",
    "Tiro por tiro.",
    "De repetición.",
    "Automático.",
    "Ninguna de las anteriores."
  ],
  "respuestaCorrecta": "Automático."
},
{
  "pregunta": "¿Cómo se realiza el abastecimiento de la escopeta de bombeo?",
  "opciones": [
    "De manera automática.",
    "De manera manual.",
    "De manera semiautomática.",
    "A y C son correctas.",
    "Ninguna de las anteriores."
  ],
  "respuestaCorrecta": "De manera manual."
},
{
  "pregunta": "¿Cómo se efectúa la extracción del casquillo de una escopeta de tipo bisagra?",
  "opciones": [
    "A través de la ventana de eyección.",
    "Presionando el disparador.",
    "Accionando el martillo percutor hacia atrás.",
    "Abrir el cerrojo del arma mediante la palanca liberadora y extraer el casquillo con la mano.",
    "Ninguna de las anteriores."
  ],
  "respuestaCorrecta": "Abrir el cerrojo del arma mediante la palanca liberadora y extraer el casquillo con la mano."
},
{
  "pregunta": "Las escopetas autorizadas bajo la modalidad de seguridad privada son:",
  "opciones": [
    "Escopetas con sistema de abastecimiento de bombeo o semiautomáticas, hasta un máximo de doce (12) gauge, con uso fuera del radio urbano.",
    "Escopetas con sistema de abastecimiento automático o semiautomático, hasta un máximo de doce (12) gauge, con uso fuera del radio urbano.",
    "Escopetas con sistema de abastecimiento de bombeo o semiautomáticas, hasta un máximo de diez (10) gauge, con uso fuera del radio urbano.",
    "Escopetas con sistema de abastecimiento automático o semiautomático, hasta un máximo de diez (10) gauge, con uso fuera del radio urbano.",
    "Ninguna de las anteriores."
  ],
  "respuestaCorrecta": "Escopetas con sistema de abastecimiento de bombeo o semiautomáticas, hasta un máximo de doce (12) gauge, con uso fuera del radio urbano."
}
   
];

document.getElementById('start-quiz').addEventListener('click', () => {
  const nombre = document.getElementById('nombre').value.trim();
  const apellidos = document.getElementById('apellidos').value.trim();

  if (!nombre || !apellidos) {
    alert('Por favor, introduce tu nombre y apellidos.');
    return;
  }

  formSection.classList.add('hidden');
  quizSection.classList.remove('hidden');

  iniciarQuiz();
});

document.getElementById('restart-quiz').addEventListener('click', () => {
  location.reload();
});

function iniciarQuiz() {
  selectedQuestions = [...questions].sort(() => Math.random() - 0.5).slice(0, 5);
  currentQuestionIndex = 0;
  score = 0;
  mostrarPregunta();
}

function mostrarPregunta() {
  clearInterval(timer);
  timeLeft = 80;
  timerElement.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      validarRespuesta(null);
    }
  }, 1000);

  const preguntaActual = selectedQuestions[currentQuestionIndex];
  questionContainer.innerHTML = `<p>${preguntaActual.pregunta}</p>`;

  preguntaActual.opciones.forEach(opcion => {
    const button = document.createElement('button');
    button.textContent = opcion;
    button.addEventListener('click', () => validarRespuesta(opcion));
    questionContainer.appendChild(button);
  });

  feedbackElement.classList.add('hidden');
  nextButton.classList.add('hidden');
}

function validarRespuesta(opcionSeleccionada) {
  clearInterval(timer);
  const preguntaActual = selectedQuestions[currentQuestionIndex];
  if (opcionSeleccionada === preguntaActual.respuestaCorrecta) {
    feedbackElement.textContent = '¡Correcto!';
    feedbackElement.style.color = 'green';
    score += 4;
  } else {
    feedbackElement.textContent = `Incorrecto. La respuesta correcta es: ${preguntaActual.respuestaCorrecta}`;
    feedbackElement.style.color = 'red';
  }

  feedbackElement.classList.remove('hidden');
  nextButton.classList.remove('hidden');
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < selectedQuestions.length - 1) {
    currentQuestionIndex++;
    mostrarPregunta();
  } else {
    mostrarResultado();
  }
});

function mostrarResultado() {
  quizSection.classList.add('hidden');
  resultSection.classList.remove('hidden');
  resultElement.textContent = `Tu nota final es: ${score} de 20 puntos.`;
}
