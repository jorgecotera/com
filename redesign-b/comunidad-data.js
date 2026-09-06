const community2024Grade5 = Array.from({length:19},(_,i)=>({
  year:2024,
  grade:"5°",
  area:"Matemáticas · Secuencias didácticas",
  type:"PDF",
  title:`Secuencia Didáctica ${["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX"][i]}`,
  href:`../Sd%20-%20${i+1}.pdf`
}));

const community2024Grade7Titles = [
  ["My Wonderful Family","../1.%20My%20Wonderful%20Family.pdf"],
  ["My day","../2.%20My%20day.pdf"],
  ["My name is John","../3.%20My%20name%20is%20John.pdf"],
  ["A great summer vacation","../4.%20A%20great%20summer%20vacation.pdf"],
  ["At school","../5.%20At%20school.pdf"],
  ["My profesión","../6.%20My%20profesión.pdf"],
  ["Our vacation","../7.%20Our%20vacation.pdf"],
  ["Preparing food","../8.%20Preparing%20food.pdf"],
  ["The House","../9.%20The%20House.pdf"],
  ["Days of the week","../10.%20Days%20of%20the%20week.pdf"],
  ["Doctor","../11.%20Doctor.pdf"],
  ["Going to a restaurant","../12.%20Going%20to%20a%20restaurant.pdf"],
  ["Going to the Supermarket","../13.%20Going%20to%20the%20Supermarket.pdf"]
].map(([title,href])=>({year:2024,grade:"7°",area:"Inglés",type:"PDF",title,href}));

const community2022 = [
  {year:2022,grade:"General",area:"Archivo de aula",type:"VIDEO",title:"Video de interés",href:"https://www.youtube.com/watch?v=hWeOPQ2Mc3g",external:true},
  {year:2022,grade:"7°",area:"Recuperación",type:"PDF",title:"Examen Oral 7°",href:"../EXAMEN%20ORAL%207°.pdf"},
  {year:2022,grade:"8°",area:"Recuperación",type:"PDF",title:"Examen Oral 8°",href:"../EXAMEN%20ORAL%208°.pdf"},
  {year:2022,grade:"9°",area:"Recuperación",type:"PDF",title:"Examen Oral 9°",href:"../EXAMEN%20ORAL%209°.pdf"},
  {year:2022,grade:"General",area:"Educación artística",type:"VIDEO",title:"Arte · Prehistoria",href:"https://www.youtube.com/watch?v=3eKBaFpzRcE",external:true},
  {year:2022,grade:"General",area:"Educación artística",type:"VIDEO",title:"Arte · Edad Antigua",href:"https://www.youtube.com/watch?v=j8JJ7AfDL24",external:true},
  {year:2022,grade:"General",area:"Educación artística",type:"VIDEO",title:"Arte · Edad Media",href:"https://www.youtube.com/watch?v=BrlM9-ZRkFA",external:true},
  {year:2022,grade:"General",area:"Educación artística",type:"VIDEO",title:"Arte · Renacimiento",href:"https://m.youtube.com/watch?v=hJcvoDRdbJo",external:true},
  {year:2022,grade:"General",area:"Educación artística",type:"VIDEO",title:"Arte · Edad Moderna",href:"https://www.youtube.com/watch?v=6E2gGlK08JE",external:true},
  {year:2022,grade:"General",area:"Educación artística",type:"VIDEO",title:"Arte · Edad Contemporánea",href:"https://www.youtube.com/watch?v=FH1jNVFwfA0",external:true},
  {year:2022,grade:"General",area:"Matemáticas · Geometría",type:"PDF",title:"Enseñanza y Pensamiento Espacial",href:"../Ensenanza%20y%20pensamiento.pdf"},
  {year:2022,grade:"General",area:"Matemáticas · Álgebra",type:"PDF",title:"Taller 6 · Diferencia de Cubos",href:"../TALLER%206.pdf"},
  {year:2022,grade:"General",area:"Matemáticas · GeoGebra",type:"WEB",title:"Herramienta GeoGebra · Diferencia de Cuadrados",href:"https://acortar.link/1rKOmi",external:true},
  {year:2022,grade:"General",area:"Filosofía",type:"VIDEO",title:"La Caverna de Platón",href:"https://www.youtube.com/watch?v=-1Y9OqSJKCc&t=177s",external:true},
  {year:2022,grade:"General",area:"Ciencia",type:"PDF",title:"Laboratorio",href:"../Laboratorio.pdf"},
  {year:2022,grade:"General",area:"Educación para la sexualidad",type:"PDF",title:"Educación para la Sexualidad · Guía",href:"../Educación%20para%20la%20Sexualidad.pdf"},
  {year:2022,grade:"General",area:"Matemáticas · GeoGebra",type:"WEB",title:"Herramienta GeoGebra · Diferencia de Cubos",href:"https://acortar.link/0yvvcu",external:true},
  {year:2022,grade:"General",area:"Matemáticas · Álgebra",type:"PDF",title:"Taller 3 · Generalización",href:"../TALLER%203.pdf"},
  {year:2022,grade:"General",area:"Educación para la sexualidad",type:"VIDEO",title:"Educación para la Sexualidad · Video",href:"https://www.youtube.com/watch?v=RUVuPmSGVWs",external:true},
  {year:2022,grade:"General",area:"Matemáticas · GeoGebra",type:"WEB",title:"Herramienta GeoGebra · Transformaciones",href:"https://www.geogebra.org/m/z5brhejb",external:true},
  {year:2022,grade:"General",area:"Lengua y literatura",type:"LECTURA",title:"Dos poemas de Rubén Darío",href:"https://www.google.com/url?sa=t&source=web&rct=j&url=https://revistas.ucm.es/index.php/ALHI/article/download/37351/36152/",external:true},
  {year:2022,grade:"General",area:"Matemáticas · Álgebra",type:"PDF",title:"Taller 5 · Diferencia de Cuadrados",href:"../TALLER%205.pdf"},
  {year:2022,grade:"General",area:"Lengua y literatura",type:"LECTURA",title:"En primera persona · Mario Benedetti",href:"http://www.poetaspoemas.com/mario-benedetti/en-primera-persona",external:true},
  {year:2022,grade:"General",area:"Lectura · Sociedad",type:"LECTURA",title:"Documento de lectura",href:"http://www.scielo.org.mx/pdf/liminar/v18n1/1665-8027-liminar-18-01-00082.pdf",external:true}
];

const community2021 = [
  {year:2021,grade:"6°",area:"Acompañamiento en pandemia",type:"GUÍA",title:"Guía 0",href:"https://drive.google.com/file/d/1JhFUDxhuVtJBIIYvXufJS3T_xIkzCYSj/view?usp=sharing",external:true},
  {year:2021,grade:"6°",area:"Acompañamiento en pandemia",type:"GUÍA",title:"Guía 1",href:"https://drive.google.com/file/d/1HwWPkvGnumGMGKA6O9Ei5tzk31P0Ze5M/view?usp=sharing",external:true},
  {year:2021,grade:"6°",area:"Matemáticas",type:"PDF",title:"Guía 2",href:"../Guía%206%20-%20II.pdf"},
  {year:2021,grade:"6°",area:"Matemáticas",type:"PDF",title:"Guía 3 · Período 3",href:"../6ºA%20P3%20Matemáticas%20-%20Jorge.pdf"},
  {year:2021,grade:"6°",area:"Matemáticas",type:"PDF",title:"Guía 4 · Período 4",href:"../6º%20P4%20Matemáticas%20-%20Jorge.pdf"},
  {year:2021,grade:"6°",area:"Matemáticas · Números racionales",type:"PDF",title:"Guía Números Racionales · Q",href:"../Guía%20Numeros%20Racionales%20-%20para%20Celular.pdf"},
  {year:2021,grade:"6°",area:"Educación · Sociedad",type:"PDF",title:"Educación Pública",href:"../Después%20de%20leer%20la%20publicación%20de%20la%20revista%20Educación%20y%20Cultura%20de%20Fecode-.pdf"},
  {year:2021,grade:"6°",area:"Ciencia · Sociedad",type:"PDF",title:"El Coronavirus",href:"../LCE.pdf"},

  {year:2021,grade:"7°",area:"Acompañamiento en pandemia",type:"GUÍA",title:"Guía 0",href:"https://drive.google.com/file/d/1l9F1_VW9OqVxTGV1k5r5X_wwT_Bd35-w/view?usp=sharing",external:true},
  {year:2021,grade:"7°",area:"Acompañamiento en pandemia",type:"GUÍA",title:"Guía 1 · Completa · Otras áreas",description:"Referencia histórica conservada; el enlace externo original ya no está disponible.",href:"",unavailable:true},
  {year:2021,grade:"7°",area:"Acompañamiento en pandemia",type:"GUÍA",title:"Guía 1 · Material complementario",href:"https://drive.google.com/file/d/1TKnPaMSzATRcRMvhwiinTqKDvpIi9v-s/view?usp=sharing",external:true},
  {year:2021,grade:"7°",area:"Matemáticas",type:"PDF",title:"Guía 2",href:"../Guía%207%20-%20II.pdf"},
  {year:2021,grade:"7°",area:"Matemáticas",type:"PDF",title:"Guía 3 · Período 3",href:"../7ºC%20P3%20Matemáticas%20-%20Jorge.pdf"},
  {year:2021,grade:"7°",area:"Matemáticas",type:"PDF",title:"Guía 4 · Período 4",href:"../7ºC%20P4%20Matemáticas%20-%20Jorge.pdf"},
  {year:2021,grade:"7°",area:"Ética",type:"GUÍA",title:"Guía 1 · Ética",href:"https://drive.google.com/file/d/1HxJ3mI8rIWbvc-tdpYytrxDEqCRSUgTz/view?usp=sharing",external:true},
  {year:2021,grade:"7°",area:"Historia · Sociedad",type:"PDF",title:"El Papel de la Historia",href:"../El%20Papel%20de%20la%20Historia.pdf"},
  {year:2021,grade:"7°",area:"Matemáticas · Números racionales",type:"PDF",title:"Guía Números Racionales · Q",href:"../Guía%20Numeros%20Racionales%20-%20para%20Celular.pdf"},
  {year:2021,grade:"7°",area:"Educación · Sociedad",type:"PDF",title:"Educación Pública",href:"../Después%20de%20leer%20la%20publicación%20de%20la%20revista%20Educación%20y%20Cultura%20de%20Fecode-.pdf"},
  {year:2021,grade:"7°",area:"Matemáticas · Período 4",type:"PDF",title:"7ºC P4 · Matemáticas",href:"../1.%207ºC%20P4%20Matemáticas%20-%20Jorge.pdf"},
  {year:2021,grade:"7°",area:"Educación artística · Período 4",type:"PDF",title:"7ºC P4 · Educación Artística",href:"../2.%207ºC%20P4%20Ed.%20Artística%20-%20Merqui.pdf"},
  {year:2021,grade:"7°",area:"Ética · Período 4",type:"PDF",title:"7ºC P4 · Educación Ética",href:"../3.%207ºC%20P4%20Ed.%20Ética%20-%20Jorge.pdf"},
  {year:2021,grade:"7°",area:"Educación física · Período 4",type:"PDF",title:"7ºC P4 · Educación Física",href:"../4.%207ºC%20P4%20Ed.%20Física%20-%20Lindomar.pdf"},
  {year:2021,grade:"7°",area:"Educación religiosa · Período 4",type:"PDF",title:"7ºC P4 · Educación Religiosa",href:"../5.%207ºC%20P4%20Ed.%20Religiosa%20-%20Moisés.pdf"},
  {year:2021,grade:"7°",area:"Inglés · Período 4",type:"PDF",title:"7ºC P4 · Inglés",href:"../6.%207ºC%20P4%20Inglés%20-%20Eisner.pdf"},
  {year:2021,grade:"7°",area:"Lenguaje · Período 4",type:"PDF",title:"7ºC P4 · Lenguaje",href:"../7.%207ºC%20P4%20Lenguaje%20-%20Felicia.pdf"},
  {year:2021,grade:"7°",area:"Ciencias naturales · Período 4",type:"PDF",title:"7ºC P4 · Naturales",href:"../8.%207ºC%20P4%20Naturales%20-%20Diana%20Torres.pdf"},
  {year:2021,grade:"7°",area:"Ciencias sociales · Período 4",type:"PDF",title:"7ºC P4 · Sociales",href:"../9.%207ºC%20P4%20Sociales%20-%20Esther.pdf"},
  {year:2021,grade:"7°",area:"Tecnología · Período 4",type:"PDF",title:"7ºC P4 · Tecnología",href:"../10.%207ºC%20P4%20Tecnología%20-%20Didier.pdf"},

  {year:2021,grade:"8°",area:"Geometría",type:"PDF",title:"Apoyo · Geometría",href:"../Apoyo.pdf"},
  {year:2021,grade:"8°",area:"Educación · Sociedad",type:"PDF",title:"Educación Pública",href:"../Después%20de%20leer%20la%20publicación%20de%20la%20revista%20Educación%20y%20Cultura%20de%20Fecode-.pdf"},
  {year:2021,grade:"8°",area:"Matemáticas · Números racionales",type:"PDF",title:"Guía Números Racionales · Q",href:"../Guía%20Numeros%20Racionales%20-%20para%20Celular.pdf"},
  {year:2021,grade:"8°",area:"Álgebra",type:"PDF",title:"Taller 1 · Álgebra",href:"../Taller%201.pdf"},
  {year:2021,grade:"8°",area:"Geometría",type:"PDF",title:"Taller Pitágoras",href:"../Pitagoras-cuadernillo.pdf"},
  {year:2021,grade:"8°",area:"Geometría · Interactivo",type:"HTML",title:"Pitágoras · Actividad 1",href:"../Pitagoras%201.htm"},
  {year:2021,grade:"8°",area:"Geometría · Interactivo",type:"HTML",title:"Pitágoras · Actividad 2",href:"../Pitagoras%202.htm"},
  {year:2021,grade:"8°",area:"Geometría · Interactivo",type:"HTML",title:"Pitágoras · Actividad 3",href:"../Pitagoras%203.htm"},
  {year:2021,grade:"8°",area:"Geometría · Interactivo",type:"HTML",title:"Pitágoras · Actividad 4",href:"../Pitagoras%204.htm"},
  {year:2021,grade:"8°",area:"Matemáticas · GeoGebra",type:"WEB",title:"Grupo de GeoGebra",description:"Referencia histórica conservada; la ruta externa original ya no está disponible.",href:"",unavailable:true}
];

const community2020Grade6 = [
  ["Sistema Numérico Posicional","../1%20-%20Sistema%20Numérico%20Posicional%20-%206.pdf"],
  ["Relaciones","../2%20-%20Relaciones%20-%206.pdf"],
  ["Interpretación de las Fracciones","../3%20-%20Interpretación%20de%20las%20Fracciones%20-%206.pdf"],
  ["Proporcionalidad","../4%20-%20Proporcionalidad%20-%206.pdf"],
  ["Cuerpos Geométricos","../5%20-%20Cuerpos%20Geométricos%20-%206.pdf"],
  ["Figuras Geométricas","../6%20-%20Figuras%20Geométricas%20-%206.pdf"],
  ["Proyecto 1 · Modelación de planos y cuerpos","../7%20-%20Proyecto%201%20-%20Modelación%20de%20planos%20y%20cuerpos%20-%206.pdf"],
  ["Proyecto 2 · Construcción y modelación","../8%20-%20Proyecto%202%20-%20Construcción%20y%20modelación%20-%206.pdf"],
  ["Ver y ser con los otros","../Ver%20y%20ser%20con%20los%20otros%20-%20Yuliana.pdf"]
].map(([title,href])=>({year:2020,grade:"6°",area:"Matemáticas · Acompañamiento en pandemia",type:"PDF",title,href}));

const community2020Grade7 = [
  ["Sistema Numérico Posicional","../1%20-%20Sistema%20Numerico%20Posicional.pdf"],
  ["Interpretación de las Fracciones","../2%20-%20Interpretacion%20de%20las%20Fracciones.pdf"],
  ["Ecuaciones","../3%20-%20Ecuaciones.pdf"],
  ["Más ecuaciones","../4%20-%20Mas%20ecuaciones.pdf"],
  ["Proporcionalidad y aplicación","../5%20-%20Proporcionalidad%20y%20aplicacion.pdf"],
  ["Enteros","../6%20-%20%20Enteros.pdf"],
  ["Proyecto 1 · Modelación de planos y cuerpos","../7%20-%20Proyecto%201%20-%20Modelacion%20de%20planos%20y%20cuerpos%20-.pdf"],
  ["Proyecto 2 · Construcción y modelación","../8%20-%20Proyecto%202%20-%20Construccion%20y%20modelacion%20-.pdf"]
].map(([title,href])=>({year:2020,grade:"7°",area:"Matemáticas · Acompañamiento en pandemia",type:"PDF",title,href}));

const community2020Media = [
  {year:2020,grade:"General",area:"Territorio · Ambiente",type:"VIDEO",title:"Día de la Madre Tierra · 22 de abril",href:"https://youtu.be/XGxhdTJwliE",external:true},
  {year:2020,grade:"General",area:"Matemáticas",type:"VIDEO",title:"Sistema Numérico Posicional",href:"https://www.youtube.com/watch?v=bTZuwjZlVjU",external:true},
  {year:2020,grade:"General",area:"Matemáticas",type:"VIDEO",title:"Más sobre potencias",href:"https://www.youtube.com/watch?v=vJTdcCnFVAM",external:true},
  {year:2020,grade:"General",area:"Pedagogía · Sociedad",type:"VIDEO",title:"Mensaje pedagógico · Sustantivamente político",href:"https://youtu.be/XBdPg9G5BB4",external:true},
  {year:2020,grade:"General",area:"Acompañamiento en pandemia",type:"VIDEO",title:"Mensaje complementario · Guías 7 y 8",href:"https://youtu.be/Y3N2R38QuGk",external:true},
  {year:2020,grade:"General",area:"Matemáticas · Probabilidad",type:"VIDEO",title:"Probabilidad · Guía 9",href:"https://youtu.be/W6tC4X5i5Is",external:true},
  {year:2020,grade:"General",area:"Comunidad · Encuentro",type:"VIDEO",title:"Encuentro Mat-Bio I",href:"https://www.youtube.com/watch?v=vgv1IbteH0U",external:true},
  {year:2020,grade:"General",area:"Comunidad · Encuentro",type:"VIDEO",title:"Encuentro Mat-Bio II",href:"https://www.youtube.com/watch?v=aLplCsV2cSs",external:true},
  {year:2020,grade:"General",area:"Ciencia · Sociedad",type:"PDF",title:"El Coronavirus",href:"../LCE.pdf"}
];

const community2016to2019 = [
  {year:"2016–2019",sortYear:2019,grade:"9°",area:"Matemáticas",type:"PDF",title:"Plan · Período I",href:"../Matematica%20-%20Noveno%20-%20Periodo%20I.pdf"},
  {year:"2016–2019",sortYear:2019,grade:"9°",area:"Matemáticas · Evaluación",type:"PDF",title:"Rúbrica · Exposiciones",href:"../Rubrica.pdf"},
  {year:"2016–2019",sortYear:2019,grade:"9°",area:"Matemáticas · Cultura",type:"PDF",title:"Canción · El Retiro",href:"../EL%20RETIRO.pdf"},
  {year:"2016–2019",sortYear:2019,grade:"9°",area:"Matemáticas · Cultura",type:"PDF",title:"Canción · Dios no me deja",href:"../DIOS%20NO%20ME%20DEJA.pdf"},
  {year:"2016–2019",sortYear:2019,grade:"9°",area:"Geometría",type:"VIDEO",title:"Relación Pitagórica",href:"https://www.youtube.com/watch?v=NxQuQqr0qG0",external:true},
  {year:"2016–2019",sortYear:2019,grade:"9°",area:"Matemáticas",type:"PDF",title:"Taller en Casa",href:"../TALLER%20EN%20CASA.pdf"},
  {year:"2016–2019",sortYear:2019,grade:"9°",area:"Geometría · Interactivo",type:"HTML",title:"Solución Pitagórica I",href:"../Pitagoras%201.htm"},
  {year:"2016–2019",sortYear:2019,grade:"9°",area:"Geometría · Interactivo",type:"HTML",title:"Solución Pitagórica II",href:"../Pitagoras%202.htm"},
  {year:"2016–2019",sortYear:2019,grade:"9°",area:"Geometría · Interactivo",type:"HTML",title:"Solución Pitagórica III",href:"../Pitagoras%203.htm"},
  {year:"2016–2019",sortYear:2019,grade:"9°",area:"Geometría · Interactivo",type:"HTML",title:"Solución Pitagórica IV",href:"../Pitagoras%204.htm"},
  {year:"2016–2019",sortYear:2019,grade:"Física",area:"Ciencia",type:"PDF",title:"Plan · Período I",href:"../Fisica%20-%20Noveno%20-%20Periodo%20I.pdf"},
  {year:"2016–2019",sortYear:2019,grade:"Física",area:"Ciencia",type:"PDF",title:"El Concepto de Ciencia",href:"../El%20Concepto%20de%20Ciencia.pdf"},
  {year:"2016–2019",sortYear:2019,grade:"Física",area:"Ciencia",type:"PDF",title:"Laboratorio",href:"../Laboratorio.pdf"},
  {year:"2016–2019",sortYear:2019,grade:"Física",area:"Ciencia",type:"VIDEO",title:"El Concepto de Ciencia · Audio",href:"https://www.youtube.com/watch?v=be5m3cfGz1c",external:true},
  {year:"2016–2019",sortYear:2019,grade:"10°",area:"Matemáticas",type:"PDF",title:"Plan · Período I",href:"../Matematica%20-%20Decimo%20-%20Periodo%20I.pdf"},
  {year:"2016–2019",sortYear:2019,grade:"10°",area:"Matemáticas",type:"PDF",title:"Proporción áurea",href:"../Aurea.pdf"},
  {year:"2016–2019",sortYear:2019,grade:"10°",area:"Modelación",type:"PDF",title:"Universo a escala",href:"../Universo.pdf"},
  {year:"2016–2019",sortYear:2019,grade:"10°",area:"Modelación",type:"PDF",title:"Universo a escala 2",href:"../Universo%202.pdf"},
  {year:"2016–2019",sortYear:2019,grade:"10°",area:"Modelación",type:"PDF",title:"Conversión Sistema Solar",href:"../Conversion%20Sistema%20Solar.pdf"},
  {year:"2016–2019",sortYear:2019,grade:"11°",area:"Matemáticas",type:"PDF",title:"Plan · Período I",href:"../Matematicas%20-%20Undecimo%20-%20Periodo%20I.pdf"},
  {year:"2016–2019",sortYear:2019,grade:"11°",area:"Matemáticas",type:"PDF",title:"Axiomatización de los Reales",href:"../Axiomatizacion%20de%20los%20numeros%20reales.pdf"},
  {year:"2016–2019",sortYear:2019,grade:"11°",area:"Matemáticas",type:"PDF",title:"Exposiciones sobre Axiomatización de Reales",href:"../Exposiciones%20sobre%20Axiomatizacion%20de%20Reales.pdf"},
  {year:"2016–2019",sortYear:2019,grade:"General",area:"Evaluación",type:"PDF",title:"Resultados de la Evaluación I",href:"../Resultados%20de%20la%20Evaluacion%20I.pdf"}
];

window.communityContent = [
  {year:2026,grade:"General",area:"Comunidad · Blog",type:"WEB",title:"Aula Mat Bio",description:"Blog enlazado desde la Comunidad de aprendizaje.",href:"https://aulamatbio.blogspot.com/",external:true},
  {year:2026,grade:"General",area:"Educación · Sociedad",type:"PDF",title:"La escuela de Gustavo Petro",href:"../La%20escuela%20de%20Gustavo%20Petro.pdf"},

  {year:2025,grade:"8°",area:"Planeación",type:"PDF",title:"Planeación · Guía 1",href:"../Planeación%20Guía%201%20-%208°.pdf"},
  {year:2025,grade:"9°",area:"Planeación",type:"PDF",title:"Planeación · Guía 1",href:"../Planeación%20Guía%201%20-%209°.pdf"},

  ...community2024Grade5,
  {year:2024,grade:"5°",area:"Geometría",type:"PDF",title:"Material para Sólidos Platónicos",href:"../Solidos%20Platonico.pdf"},
  {year:2024,grade:"5°",area:"Aritmética",type:"PDF",title:"Taller de Mínimo Común Múltiplo",href:"../Sd%20-%208-a.pdf"},
  ...community2024Grade7Titles,
  {year:2024,grade:"8°",area:"Matemáticas",type:"PDF",title:"Taller · La relación",href:"../Taller%20Fracciones.pdf"},

  {year:2023,grade:"8°",area:"Matemáticas",type:"PDF",title:"Los números racionales · Taller 1",href:"../Los%20números%20racionales%20-%20Q.pdf"},
  {year:2023,grade:"9°",area:"Matemáticas",type:"PDF",title:"Los números irracionales · Taller 1",href:"../Los%20números%20irracionales%20-%20I.pdf"},
  {year:2023,grade:"9°",area:"Ciencia",type:"PDF",title:"El Concepto de Ciencia",href:"../El%20Concepto%20de%20Ciencia.pdf"},
  {year:2023,grade:"9°",area:"Ciencia",type:"VIDEO",title:"El Concepto de Ciencia · Audio",href:"https://www.youtube.com/watch?v=be5m3cfGz1c",external:true},
  {year:2023,grade:"9°",area:"Ciencia",type:"PDF",title:"Ciencia Física y Método Científico",href:"../Ciencia%20Física%20y%20método%20científico.pdf"},
  {year:2023,grade:"9°",area:"Ciencia",type:"PDF",title:"Medida y Método Científico",href:"../Medida%20y%20Metodo%20Cientifico.pdf"},
  {year:2023,grade:"9°",area:"Ciencia",type:"LECTURA",title:"Ciencia, política y cientificismo",href:"http://docs.politicascti.net/documents/Teoricos/Varsavsky_CPC.pdf",external:true},
  {year:2023,grade:"9°",area:"Ciencia",type:"LECTURA",title:"La ciencia, su método y filosofía",href:"https://users.dcc.uchile.cl/~cgutierr/cursos/INV/bunge_ciencia.pdf",external:true},
  {year:2023,grade:"9°",area:"Física",type:"PDF",title:"Vectores",href:"../Vectores.pdf"},
  {year:2023,grade:"10°",area:"Física",type:"PDF",title:"Qué es el movimiento",href:"../Qué%20el%20movimiento.pdf"},
  {year:2023,grade:"10°",area:"Física",type:"PDF",title:"Movimiento y sistemas de referencia",href:"../Movimiento%20y%20sistemas%20de%20referencia.pdf"},
  {year:2023,grade:"10°",area:"Ciencia",type:"LECTURA",title:"La historia del tiempo",description:"Referencia oficial del libro de Stephen Hawking en su editorial.",href:"https://www.penguinrandomhouse.com/books/77010/a-brief-history-of-time-by-stephen-hawking/",external:true},
  {year:2023,grade:"10°",area:"Física",type:"PDF",title:"Movimiento Rectilíneo Uniforme I",href:"../Ejercicios%20MAS%20-%20I.pdf"},
  {year:2023,grade:"10°",area:"Física",type:"PDF",title:"Movimiento Rectilíneo Uniforme II",href:"../Ejercicios%20MAS%20-%20II.pdf"},
  {year:2023,grade:"10°",area:"Física",type:"PDF",title:"Movimiento Rectilíneo Uniforme III",href:"../Ejercicios%20MAS%20-%20III.pdf"},
  {year:2023,grade:"10°",area:"Física",type:"PDF",title:"Conceptos Básicos MRU-MUA-CL",href:"../Conceptos%20Básicos.pdf"},
  {year:2023,grade:"10°",area:"Educación para la sexualidad",type:"PDF",title:"Proyecto de Educación Sexual 2023",href:"../Proyecto%20de%20Educación%20Sexual%202023.pdf"},

  ...community2022,
  ...community2021,
  ...community2020Grade6,
  ...community2020Grade7,
  ...community2020Media,
  ...community2016to2019
];
