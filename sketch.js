// EFECTO MARIPOSA — Novela Gráfica
// TP2 — Informática Aplicada 1 — UNA 2026

// VARIABLES GLOBALES

let screen       = 0;
let inTransition = false;
let nextScreen   = -1;
let transAlpha   = 0;
let particles    = [];
let fc           = 0;

// Diálogo pantalla 3
let dialogoIndex3 = 0;

// Diálogo pantalla 9
let dialogoIndex9 = 0;

// Diálogo pantalla 19
let dialogoIndex19 = 0;
let dialogoPerroActivo = false;

// Diálogo pantalla 27
let dialogoIndex27 = 0;

// Slide pantalla 28 — Película
let peliculaSlide = 0;


// Botones pantalla 5 — Funeral
let btnCambiarPasado;
let btnSigueConSuVida;

//Botones Sotano Pantalla 8 
let btnAmenazarMiller;
let btnAsumirTrauma;

//Botones Buzon Pantalla 16
let btnSalvar;
let btnQuedarse;

//Botones Evan invalido Pantalla 17
let btnVolveraVijar; 
let FinDelJuegoEI;

//Botones Bloque Perro Pantalla 19
let btnSalvarPerro;
let btnDejarPerro;

//Botones Reflexion 
let btnViajarAlComienzo;
let btnDesconocerKayleigh;
let btnBancateEseDefecto;


//dialogo Evan y Kay en la calle (3)
const dialogos3 = [
  'Evan: Hola Kayleigh!! ¿Te acordas de mí?',
  'Kayleigh: Evan, tanto tiempo ¿que fueron 8 años desde la última vez que nos vimos?',
  'Evan:Justo estaba recordando los días que pasabamos la tarde en tu casa jugando con vos y tu hermano Tommy',
  'Kayleigh: Mas que nada recuerdo tu falta de memoria, ¿Que recordas?'
];

//dialogo Miller y Evan en la amenaza (9)
const dialogos9 = [
  'Evan: Tengo algo para decirle señor Miller',
  'Miller: Puedes confiar en mi Evan, si sos la estrella de la película',
  'Evan: Escúchame bien porque no me voy a repetir: si volves a tocar a tu hija, vengo yo mismo hasta acá y te meto tal tanda de bifes que vas a parecer góndola del Coto',
  'Miller: Tranquilo pibe, ta bien ta bien, no me voy a acercar más...'
]; 

//dialogos salvar al perro con palabras (19)
const dialogos19 = [
  'Evan: Tommy, no podemos tomar lo que queremos en la vida.', 
  'Hay muchos aspectos que nos sobrepasan.',
  'Entenderlo todo es imposible y a la fuerza nada se resuelve ',
]

//dialogo Cumpleaños Kayleigh (27)
const dialogos27 = [
  'Evan: Hola Kayleigh, feliz cumpleaños. Lastima que este es el último juntos. Por nuestro bien no nos volveremos a ver',
  'Kayleigh: Evan no entiendo nada, ¿es una joda verdad?',
  'Evan: Te odio Kayleigh, sos el porque de todos mis males'
];

//fondos
//let imgevan1er;
let dormitorio;
let zoombiblioteca;
let sotano;
let talkKyE; 
let uniformeKayleigh;
let Ksui;
let Funeral;
let Diarios;
let Terapia;
let FondoSotano1;
let SigueSuVida;
let Pelea;
let Corazones;  
let Amenaza;
let FacultadDerecho;
let TommyTraumado;
let MuerteDeTommy; 
let Carcel; 
let FondoBuzon;
let MamayBb; 
let EvanInvalido; 
let LennyMataTommy;
let KayleighAddicta;
let PerroBolsa;
let FondoReflexion;
let Utero;
let LennyLoco;
let Cumpleaños;
let Peli1;
let Peli2;
let Puchos;
let Aviones;

// todos los fondos y efectos
function preload() {
  
  dormitorio= loadImage('assets/img/dormitorio.jpg');
  zoombiblioteca= loadImage('assets/img/zoomdormitorio.jpg');
  sotano= loadImage('assets/img/sotano.jpg');
  talkKyE= loadImage('assets/img/KyEDinner.jpg');
  uniformeKayleigh= loadImage('assets/img/uniformeK.svg'); 
  Ksui= loadImage('assets/img/Kayleighsuicidio.jpg');
  Funeral= loadImage('assets/img/Kayleighfuneral.jpg');
  Diarios= loadImage('assets/img/diarios.svg');
  Terapia= loadImage('assets/img/terapia.jpg');
  FondoSotano1= loadImage('assets/img/fondoSotano1.jpg');
  SigueSuVida= loadImage('assets/img/sigueconsuvida.jpg');
  Amenaza= loadImage('assets/img/amenaza.jpg');
  Corazones= loadImage('assets/giff/heart-hearts.gif');
  FacultadDerecho= loadImage('assets/img/UBAderecho.jpg');
  TommyTraumado= loadImage('assets/img/tommyabrumado.svg');
  MuerteDeTommy= loadImage('assets/img/peleacontommy.svg');
  Carcel= loadImage('assets/img/carcel.jpg');
  FondoBuzon= loadImage('assets/img/fondoBuzon.jpg');
  MamayBb= loadImage('assets/img/mamaybebe.svg');
  EvanInvalido= loadImage('assets/img/evansillaruedas.svg');
  LennyMataTommy = loadImage('assets/img/lennymatatommy.svg');
  KayleighAddicta = loadImage('assets/img/kaydrogadicta.svg');
  PerroBolsa = loadImage('assets/img/bloqueperro.jpg');
  FondoReflexion = loadImage('assets/img/fondoreflexion.svg');
  Utero = loadImage('assets/giff/fetoU.gif');
  LennyLoco = loadImage('assets/img/LennyTraumado.jpg');
  Cumpleaños = loadImage('assets/img/cumple.jpg');
  Peli1 = loadImage('assets/img/finalpeli1.jpg');
  Peli2 = loadImage('assets/img/finalpeli2.jpg');
  Puchos = loadImage('assets/img/puchos.svg');
  Aviones = loadImage('assets/img/lennytraumaaviones.svg');
}

function setup() {
  createCanvas(600, 400);
  textFont('Georgia');
  initParticles();
  // botones pantalla 5 — funeral
  btnCambiarPasado = new Button(180, 140, 180, 44, 'Cambiar el pasado');
  btnSigueConSuVida = new Button(420, 140, 180, 44, 'Sigue con su vida');
  // botones pantalla 8 — sótano
  btnAmenazarMiller = new Button(180, 340, 180, 44, 'Amenazar a Miller');
  btnAsumirTrauma   = new Button(420, 340, 180, 44, 'Asumir el trauma');
  // botones pantalla 16 — buzón
  btnSalvar = new Button(180, 340, 180, 44, 'Salvar');
  btnQuedarse = new Button(420, 340, 180, 44, 'Quedarse Viendo');

  // botones pantalla 17 — Evan futuro inválido
  btnVolveraVijar = new Button(180, 340, 180, 44, 'Volver a Viajar');
  FinDelJuegoEI = new Button(420, 340, 180, 44, 'Fin del juego');

  // botones pantalla 19 — bloque perro
  btnSalvarPerro = new Button(180, 340, 180, 44, 'Salvar al perro');
  btnDejarPerro = new Button(420, 340, 180, 44, 'Dejar al perro');

  // botones pantalla 23 — reflexión
  btnViajarAlComienzo = new Button(100, 340, 170, 44, 'Viajar al comienzo de todo');
  btnDesconocerKayleigh = new Button(300, 340, 160, 44, 'Desconocer a Kayleigh');
  btnBancateEseDefecto = new Button(500, 340, 160, 44, 'Bancar ese defecto');
}

function draw() {
fc++;

if      (screen === 0) drawScreen0_Cover();
else if (screen === 1) drawScreen1_Dorm();
else if (screen === 31) drawScreen31_Dorm();
else if (screen === 2) drawScreen2_Basement();
else if (screen === 3) drawScreen3_KayleighStreet();
else if (screen === 4) drawScreen4_KayleighSuicide();
else if (screen === 5) drawScreen5_Funeral();
else if (screen === 6) drawScreen6_EndEarly();
else if (screen === 7) drawScreen7_Journal();
else if (screen === 8) drawScreen8_BasementMemory();
else if (screen === 9)  drawScreen9_MillerThreat();
else if (screen === 10) drawScreen10_KayleighBoyfriend();
else if (screen === 11) drawScreen11_Context();
else if (screen === 12) drawScreen12_TommyDies();
else if (screen === 13) drawScreen13_Prison();
else if (screen === 14) drawScreen14_Therapy();
else if (screen === 15) drawScreen15_EndBasement();
else if (screen === 16) drawScreen16_MailboxMemory();
else if (screen === 17) drawScreen17_EndInvalid();
else if (screen === 18) drawScreen18_EndMailbox2();
else if (screen === 19) drawScreen19_DogMemory();
else if (screen === 20) drawScreen20_LennyKillsTommy();
else if (screen === 21) drawScreen21_LennyAsylum();
else if (screen === 22) drawScreen22_KayleighAddict();
else if (screen === 23) drawScreen23_Reflection();
else if (screen === 24) drawScreen24_EndUtero();
else if (screen === 25) drawScreen25_GameOver();
else if (screen === 26) drawScreen26_Credits();
else if (screen === 27) drawScreen27_KayleighBirthday();
else if (screen === 28) drawScreen28_Pelicula();
else if (screen === 32) drawScreen32_BancateEseDefecto();
 
  drawTransition();
}



// NAVEGACIÓN
function goToScreen(n) {
  inTransition = true;
  nextScreen   = n;
  transAlpha   = 0;
}


function mousePressed() {
  if (inTransition) return;
if      (screen === 0) handleClick_Cover();
else if (screen === 1) handleClick_Dorm();
else if (screen === 2) handleClick_Basement();
else if (screen === 3) handleClick_KayleighStreet();
else if (screen === 4) handleClick_KayleighSuicide();
else if (screen === 5) handleClick_Funeral();
else if (screen === 6) handleClick_EndEarly();
else if (screen === 7) handleClick_Journal();
else if (screen === 8) handleClick_BasementMemory();
else if (screen === 9) handleClick_MillerThreat();
else if (screen === 10) handleClick_KayleighBoyfriend();
else if (screen === 11) handleClick_Context();
else if (screen === 12) handleClick_TommyDies();
else if (screen === 13) handleClick_Prison();
else if (screen === 14) handleClick_Therapy();
else if (screen === 15) handleClick_EndBasement();
else if (screen === 16) handleClick_MailboxMemory();
else if (screen === 17) handleClick_EndInvalid();
else if (screen === 18) handleClick_EndMailbox2();
else if (screen === 19) handleClick_DogMemory();
else if (screen === 20) handleClick_LennyKillsTommy();
else if (screen === 21) handleClick_LennyAsylum();
else if (screen === 22) handleClick_KayleighAddict();
else if (screen === 23) handleClick_Reflection();
else if (screen === 24) handleClick_EndUtero();
else if (screen === 25) handleClick_GameOver();
else if (screen === 26) handleClick_Credits();
else if (screen === 27) handleClick_KayleighBirthday();
else if (screen === 28) handleClick_Pelicula();
else if (screen === 31) handleClick_DormZoom();   // zoom dormitorio
else if (screen === 32) handleClick_BancateEseDefecto(); // bancate ese defecto
}

function keyPressed() {
  if (key === ' ') mousePressed();
}

// UTILIDADES COMPARTIDAS
// crea un array de 20 objetos, cada uno representando una "mariposa"
function initParticles() {
  particles = [];
  for (let i = 0; i < 20; i++) {
    particles.push({
      x:     random(width),
      y:     random(height),
      vx:    random(-0.5, 0.5),
      vy:    random(-0.9, -0.3),
      size:  random(5, 10),
      alpha: random(80, 180),
      phase: random(TWO_PI)
    });
  }
}

function drawBackground(r1, g1, b1, r2, g2, b2) {
  noStroke();
  for (let y = 0; y < height; y++) {
    let t = y / height;
    fill(lerp(r1, r2, t), lerp(g1, g2, t), lerp(b1, b2, t));
    rect(0, y, width, 1);
  }
}

function drawTransition() {
  if (!inTransition && transAlpha <= 0) return;
  if (inTransition) {
    transAlpha += 12;
    if (transAlpha >= 255) {
      transAlpha   = 255;
      screen       = nextScreen;
      inTransition = false;
    }
  } else {
    transAlpha -= 12;
    if (transAlpha < 0) transAlpha = 0;
  }
  fill(0, transAlpha);
  noStroke();
  rect(0, 0, width, height);
}

function drawInstruction(txt) {
  let alpha = map(sin(fc * 0.04), -1, 1, 120, 255);
  noStroke();
  fill(255, 255, 200, alpha);
  textSize(16);
  textAlign(CENTER, CENTER);
  textStyle(NORMAL);
  text(txt, width / 2, height - 16);
}

//se ejecuta en cada frame
//si sale por arriba de la pantalla, la manda abajo y le asigna una x nueva.
// Si sale por los costados, aparece del lado opuesto
function drawButterflies(r, g, b) {
  noStroke();
  for (let p of particles) {
    p.x += p.vx + sin(fc * 0.02 + p.phase) * 0.5;
    p.y += p.vy;
    if (p.y < -10)        { p.y = height + 10; p.x = random(width); }
    if (p.x < -10)        p.x = width + 10;
    if (p.x > width + 10) p.x = -10;
    fill(r, g, b, p.alpha);
    ellipse(p.x - p.size * 0.8, p.y, p.size * 1.6, p.size * 1.1);
    ellipse(p.x + p.size * 0.8, p.y, p.size * 1.6, p.size * 1.1);
    fill(r * 0.3, g * 0.3, b * 0.3, p.alpha);
    ellipse(p.x, p.y, p.size * 0.25, p.size * 1.2);
  }
}

function drawSceneTitle(txt) {
  noStroke();
  fill(255);
  textSize(12);
  textStyle(ITALIC);
  textAlign(LEFT, TOP);
  text(txt, 20, 18);
  textStyle(NORMAL);
}

function drawContext(txt) {
  noStroke();
  fill(255);
  textSize(12);
  textStyle(ITALIC);
  textAlign(RIGHT, TOP);
  text(txt, width - 20, 18);
  textStyle(NORMAL);
}

// PANTALLA 0 — PORTADA
function drawScreen0_Cover() {
  drawBackground(5, 0, 18, 28, 8, 55);
  drawButterflies(180, 100, 255);

  stroke(160, 90, 255, 120); strokeWeight(1);
  fill(220, 185, 255);
  textSize(40); textStyle(BOLD); textAlign(CENTER, CENTER);
  text('EFECTO MARIPOSA', width / 2, 118);

  line(90, 142, 510, 142); noStroke();

  fill(190, 155, 240, 210);
  textSize(11); textStyle(ITALIC); textAlign(CENTER, CENTER);
  text(
    '"Se dice que algo tan pequeño como el aleteo\n' +
    'de una mariposa puede, en última instancia,\n' +
    'causar un tifón."',
    width / 2, 188
  );

  textStyle(NORMAL);
  fill(150, 115, 200, 160); textSize(10);
  text('Basado en la película de Eric Bress y J. Mackye Gruber (2004)', width / 2, 232);

  fill(190, 155, 240, 210);
  textSize(11); textStyle(ITALIC); textAlign(CENTER, CENTER);
  text(
    'Informática Aplicada — Trabajo Práctico 2\nUNA 2026\nMicaela Videla Melo\n Romina Burgos \n Bruno Maltese ',
    width / 2, 280
  );
  drawSceneTitle('Portada');
  drawInstruction('Click para comenzar');
}
function handleClick_Cover() { goToScreen(1); }

// PANTALLA 1 — UNIVERSIDAD / DORMITORIO
function drawScreen1_Dorm() {
  image(dormitorio, 0, 0, width, height);
  drawSceneTitle('Universidad — Dormitorio');
  drawInstruction('Examina la habitación con el mouse');
  let evan = new Evan(300, 360, 'dorm');
  evan.draw(); 
  drawContext('Toda mi vida tuve vacíos\n' + 'en mi memoria.\n' +
              'Como si momentos completos\n' +
              'de mi historia\n' + 
              'hubieran desaparecido\n' +
              'o siquiera existido');

  let algunHover = false;

  const objetos = [
    { dx: 7,  dy: 16,  dw: 50, dh: 90, label: 'los ricos deberian pagar mas' },
    { dx: 324, dy: 10,  dw: 60, dh: 68, label: 'Donde van los perros cuando mueren' },
    { dx: 464, dy: 164, dw: 60, dh: 34, label: 'Que sera de la vida de Lenny' }, 
    { dx: 546, dy: 290, dw: 32, dh: 48, label: 'No fumo desde adolecente' },
  ];

   for (let obj of objetos) {
    let hovering = mouseX > obj.dx && mouseX < obj.dx + obj.dw &&
                   mouseY > obj.dy && mouseY < obj.dy + obj.dh;
    if (hovering) {
      noStroke();
      fill(255, 255, 180, 80);
      rect(obj.dx, obj.dy, obj.dw, obj.dh, 4);
      cursor(HAND);
      fill(255);
      textSize(11);
      textAlign(CENTER, CENTER);

      let textY = obj.dy < height / 2 ? obj.dy + obj.dh + 14 : obj.dy - 12;
      let textX = constrain(obj.dx + obj.dw / 2, 80, width - 80);
      text(obj.label, textX, textY);
      algunHover = true;
    }
  }

  if (!algunHover) cursor(ARROW);
}


function handleClick_Dorm() { 
  goToScreen(31);
}

// PANTALLA 31 — UNIVERSIDAD / Dormitorio, zoom bibloteca diario 
function drawScreen31_Dorm() {
  image(zoombiblioteca, 0, 0, width, height);

  // área del diario 
  let dx = 284, dy = 96, dw = 38, dh = 54;

  let hovering = mouseX > dx && mouseX < dx + dw &&
                 mouseY > dy && mouseY < dy + dh;

  if (hovering) {
    noStroke();
    fill(255, 255, 180, 80);
    rect(dx, dy, dw, dh, 4);
    cursor(HAND);
    fill(255);
    noStroke();
    textSize(11);
    textAlign(CENTER, CENTER);
    text('ooo mis diarios de la infancia...', dx + dw / 2, dy - 12);
  } else {
    cursor(ARROW);
  }
}

function handleClick_DormZoom() {
  // solo avanza si hizo click sobre el diario
  let dx = 286, dy = 96, dw = 38, dh = 54;
  if (mouseX > dx && mouseX < dx + dw &&
      mouseY > dy && mouseY < dy + dh) {
    goToScreen(2);
  }
}

// PANTALLA 2 — SÓTANO (primer plano Evan adulto)
function drawScreen2_Basement() { 
  image(sotano, 0, 0, width, height);
  drawButterflies(180, 100, 255);
  //image(imgevan1er, 0, 0, width, height);
  drawSceneTitle('El sótano');
  drawContext('No entiendo nada,\n' + 
  '¿Cómo llegué acá?');
  drawInstruction('Que empiece el viaje'); // no se aca algun chiste puede ir bueno

  angleMode(DEGREES);

  let leftX  = 250, leftY  = 230;
  let rightX = 347, rightY = 230;

  let distLeft = dist(mouseX, mouseY, leftX, leftY);

  // ojo izquierdo
  let leftSize = map(distLeft, 0, 150, 70, 38);
  leftSize = constrain(leftSize, 38, 70); 

  // ojo izquierdo se agranda la pupila
  let leftAngle = atan2(mouseY - leftY, mouseX - leftX);
  push();
    translate(leftX, leftY);
    fill(255); 
    noStroke();
    ellipse(0, 0, 38, 38);
    rotate(leftAngle);
    fill(20, 14, 11);
    ellipse(0, 0, leftSize * 0.5, leftSize * 0.5);
    // texto "click" solo si el mouse está sobre la pupila
  if (distLeft < 9) {
  //rotate(-leftAngle);
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(9);
  text('click', 0, 0);
}
  pop();

  // ojo derecho
  let rightAngle = atan2(mouseY - rightY, mouseX - rightX);
  push();
    translate(rightX, rightY);
    fill(255); noStroke();
    ellipse(0, 0, 38, 38);
    rotate(rightAngle);
    fill(20, 14, 11);
    ellipse(9, 0, 19, 19);
  pop();

  angleMode(RADIANS); 
}

function handleClick_Basement() {
  // avanza solo si hizo click dentro del ojo izquierdo
  //hay que calcularlo un poco mejor 
  let leftX = 257, leftY = 227;
  let d = dist(mouseX, mouseY, leftX, leftY);
  if (d < 35) {
    goToScreen(3);
  }
}


// PANTALLA 3 — KAYLEIGH Y EVAN EN LA CALLE

function drawScreen3_KayleighStreet() {
  image(talkKyE, 0, 0, width, height);
  drawSceneTitle('Kayleigh y Evan');
  drawContext('Así me di cuenta que leyendo mis diarios\n'+ 
              'podría volver a los recuerdos perdidos.\n' + 
              '¿Pero podría cambiar algo\n' + 
              'y así modificar mi futuro?');
  
  let txt = dialogos3[dialogoIndex3];
  let bx = 20, bw = 360, bh = 44;
  let by = height - 70;
  noStroke();
  fill(0, 0, 0, 160);
  rect(bx, by, bw, bh, 8);
  fill(220, 200, 255);
  textSize(12);
  textStyle(NORMAL);
  textAlign(LEFT, CENTER);
  text(txt, bx + 10, by + bh / 2, bw - 20);

  let instruccion = (dialogoIndex3 < dialogos3.length - 1)
    ? 'Click para seguir el diálogo'
    : 'Click para seguir el diálogo';
  drawInstruction(instruccion);

  let kayleigh = new Kayleigh(155, 310, 'adult', true);
  let evan     = new Evan(300, 310, 'adult');
  kayleigh.draw();
  evan.draw();
}
function handleClick_KayleighStreet() {
  if (dialogoIndex3 < dialogos3.length - 1) {
    dialogoIndex3++;
  } else {
    dialogoIndex3 = 0;
    goToScreen(4);
  }
}

// PANTALLA 4 — KAYLEIGH SUICIDIO
function drawScreen4_KayleighSuicide() {
  image(Ksui, 0, 0, width, height);
  drawSceneTitle('Kayleigh');

  // caja de contexto
  let bx = 20, bw = 560, bh = 52, by = height - 78;
  noStroke();
  fill(0, 0, 0, 170);
  rect(bx, by, bw, bh, 8);
  fill(220, 200, 255);
  textSize(12);
  textStyle(NORMAL);
  textAlign(LEFT, CENTER);
  text(
    'Kay no aguantó el peso de sus traumas y terminó con todo.\n' +
    'Si tenés un amigo en una situación parecida, pedí ayuda. Centro de Asistencia al Suicida: 135',
    bx + 10, by + bh / 2, bw - 20
  );

  drawInstruction('Click para continuar');
}
function handleClick_KayleighSuicide() { goToScreen(5); }



// PANTALLA 5 — FUNERAL

function drawScreen5_Funeral() {
  image(Funeral, 0, 0, width, height);
  drawSceneTitle('Funeral');
  btnCambiarPasado.draw();
  btnSigueConSuVida.draw();
  drawInstruction('¿Qué hace Evan?');
  drawContext('Perdoname Kayleigh, todo esto es mi culpa.\n' + 
               'Me siento protagonista de mi propia película de ficción.\n' + 
               'Si tan solo hubiera una forma de cambiar el destinon');
}
function handleClick_Funeral() {
  if (btnCambiarPasado.isClicked()) goToScreen(7);
  if (btnSigueConSuVida.isClicked())  goToScreen(6);
}

// PANTALLA 6 — FIN DEL JUEGO (bloque comienzo)
function drawScreen6_EndEarly() {
  image(SigueSuVida, 0, 0, width, height);
  drawSceneTitle('Fin');
  drawContext('Evan siguió con su vida, termino la universidad' + '\n' + 
    'pero siempre se quedó con la duda de qué hubiera pasado si...');
}
function handleClick_EndEarly() { goToScreen(26); }

// PANTALLA 7 — EL DIARIO (HUB)
// zonas de los tres diarios 
const diarios7 = [
  { x: 21,  y: 93, w: 160, h: 215, label: 'El sótano',  target: 8  },
  { x: 223, y: 93, w: 160, h: 215, label: 'El buzón',   target: 16 },
  { x: 419, y: 93, w: 160, h: 215, label: 'El perro',   target: 19 },
];

function diario7Hovered(d) {
  return mouseX > d.x && mouseX < d.x + d.w &&
         mouseY > d.y && mouseY < d.y + d.h;
}

function drawScreen7_Journal() {
  drawBackground(5, 0, 18, 28, 8, 55);
  drawButterflies(180, 100, 255);
  image(Diarios, 0, 0, width, height);
  drawSceneTitle('El Diario');

  let anyHover = false;
  for (let d of diarios7) {
    if (diario7Hovered(d)) {
      anyHover = true;
      cursor(HAND);
      noStroke();
      fill(255, 255, 180, 60);
      rect(d.x, d.y, d.w, d.h, 6);
    }
  }
  if (!anyHover) cursor(ARROW);

  drawInstruction('Hacé click en un diario para viajar');
}

function handleClick_Journal() {
  for (let d of diarios7) {
    if (diario7Hovered(d)) {
      goToScreen(d.target);
      return;
    }
  }
}

// BLOQUE SÓTANO — pantallas 8 a 15
// 8 — El sótano con conciencia de Evan
// Bifurcación: amenazar a Miller → 9 | asumir trauma → 14
function drawScreen8_BasementMemory() {
  image(FondoSotano1, 0, 0, width, height);
  let evan = new Evan(300, 310, 'child',);
  let kayleigh = new Kayleigh(240, 310, 'child',);
  evan.draw();
  kayleigh.draw();
  btnAmenazarMiller.draw();
  btnAsumirTrauma.draw();
  drawSceneTitle('El sótano');
  drawInstruction('¿Qué hace Evan?');
  drawContext('Todavía tengo flashbacks de ese dia en el sótano,\n' + 
              'pero simplemente no se que hacer con mis recuerdos…')
}
function handleClick_BasementMemory() {
  if (btnAmenazarMiller.isClicked()) goToScreen(9);
  if (btnAsumirTrauma.isClicked())  goToScreen(14);
}

// 9 — Contexto: amenaza a Miller
function drawScreen9_MillerThreat() {
  image(Amenaza, 0, 0, width, height);
  drawSceneTitle('Amenaza a Miller');
   // caja de diálogo
  let txt = dialogos9[dialogoIndex9];
  let bx = 20, bw = 360, bh = 44;
  let by = height - 70;
  noStroke();
  fill(0, 0, 0, 160);
  rect(bx, by, bw, bh, 8);
  fill(220, 200, 255);
  textSize(12);
  textStyle(NORMAL);
  textAlign(LEFT, CENTER);
  text(txt, bx + 10, by + bh / 2, bw - 20);

  let instruccion = (dialogoIndex9 < dialogos9.length - 1)
    ? 'Click para seguir el diálogo'
    : 'Click para seguir el diálogo';
  drawInstruction(instruccion);

}
function handleClick_MillerThreat() { 
    if (dialogoIndex9 < dialogos9.length - 1) {
    dialogoIndex9++;
  } else {
    dialogoIndex9 = 0;
    goToScreen(10); 
  }
   }

// 10 — Presente: Evan novio de Kayleigh
// mas adelante, podemos hacer un minijuego como el office-kissing 
function drawScreen10_KayleighBoyfriend() {
  image(FacultadDerecho, 0, 0, width, height);
  image(Corazones, 0, 0, width, height);
  drawSceneTitle('Presente — Novio de Kayleigh');
  drawInstruction('Click para continuar');
  let evan = new Evan(300, 310, 'adult',);
  let kayleigh = new Kayleigh(240, 310, 'adult',);
  evan.draw();
  kayleigh.draw();
  drawContext('Genial en este presente\n' +
              'estás en una hermosa\n' +
              'relación con Kayleigh')
}
function handleClick_KayleighBoyfriend() { goToScreen(11); }

// 11 — Pantalla de contexto (Tommy se volvió violento)
function drawScreen11_Context() {
  drawBackground(5, 0, 18, 28, 8, 55);
  image(TommyTraumado, 0, 0, width, height);
  drawButterflies(180, 100, 255);
  drawSceneTitle('Contexto');
  drawContext('Evan amenazo a Miller una sola vez y no se volvio a acercar a Kay \n' + 
    'El turbio pero \n' + 'agarró toda esa bronca y la descargó en Tommy. \n' + 
    'El pibe creció tragándose cada puteada, callado...\n' + 
    'hasta que un día empezó a explotar y ya no hubo forma de pararlo.')
  drawInstruction('Click para continuar');
}
function handleClick_Context() { goToScreen(12); }

// 12 — Mata a Tommy
//Hay que mejorar esta escena, queda rari
function drawScreen12_TommyDies() {
  image(FacultadDerecho, 0, 0, width, height);
  image(MuerteDeTommy, 0, 0, width, height);
  drawSceneTitle(' Pelea con Tommy');
  drawInstruction('Click para continuar');
  drawContext('Tommy: te estuve buscando,\n'+ 
              'devolveme a mi hermana\n' +
              'o te mato\n'+
              'Evan:Pero yo luche\n' +
              'mucho por ella,\n' + 
              'mi destino es terminar juntos'
  )
}
function handleClick_TommyDies() { goToScreen(13); }

// 13 — Evan en la cárcel
// Botón "Volver al diario" - 7
function drawScreen13_Prison() {
  image(Carcel, 0, 0, width, height);
  drawSceneTitle('Cárcel');
  drawInstruction('Click para volver a viajar');
  drawContext('No puedo creer como termine aca, mi vida era perfecta')
}
function handleClick_Prison() { goToScreen(7); }

// 14 — Asume su trauma / va a terapia
// Lleva a fin del juego total - 27
function drawScreen14_Therapy() {
  image(Terapia, 0, 0, width, height);
  drawSceneTitle('Terapia');
  drawInstruction('Click para continuar');
}
function handleClick_Therapy() { goToScreen(25); }
// 15 — Fin del juego (bloque sótano)
function drawScreen15_EndBasement() {
  drawSceneTitle('Fin');
  drawInstruction('Click para continuar');
}
function handleClick_EndBasement() { goToScreen(25); }

// BLOQUE BUZÓN — pantallas 16 a 20

// Bifurcación: salvar al bebé - 17 | quedarse viendo - 18
function drawScreen16_MailboxMemory() {
  image(FondoBuzon, 0, 0, width, height);
  let mailboxScene = new MailboxScene();
  mailboxScene.draw();
  image(MamayBb, 0, 0, width, height);
  drawSceneTitle('El buzón');
  drawInstruction('¿Qué hace Evan?');
  drawContext('¿Pero qué hacen acá? no queda tiempo,\n'+ 
              'tengo que decidir');
  btnSalvar.draw();
  btnQuedarse.draw();
}
function handleClick_MailboxMemory() {
  if (btnSalvar.isClicked()) goToScreen(17);
  if (btnQuedarse.isClicked()) goToScreen(18);
}

// 17 — Despierta en el futuro inválido
function drawScreen17_EndInvalid() {
  drawBackground(5, 0, 18, 28, 8, 55);
  image(EvanInvalido, 0, 0, width, height);
  let lenny = new Lenny(120, 300, 'adult');
  lenny.draw();
  let kayleigh = new Kayleigh(180, 300, 'adult',);
  kayleigh.draw(); 
  image(Corazones, 70, 150, 150, 150);
  drawSceneTitle('El futuro');
  drawButterflies(180, 100, 255);
  drawContext('Evan salvó al bebé pero perdió a Kayleigh, ahora esta con Lenny, su  mejor amigo \n'
     + 'También sus piernas y un brazo, pero eso es lo de menos... \n'
     + 'Su vieja enfermo' + '\n' + 'Tommy desperto su espiritualidad, al saber a esa madre y su bebe\n');

  btnVolveraVijar.draw();
  FinDelJuegoEI.draw();
}
function handleClick_EndInvalid() { 
  if (btnVolveraVijar.isClicked()) goToScreen(7);
  if (FinDelJuegoEI.isClicked()) goToScreen(26);
}

// 18 — Fin del juego (bloque buzón) — se quedó viendo, Lenny trauma aviones
function drawScreen18_EndMailbox2() {
  drawBackground(5, 0, 18, 28, 8, 55);
  image(Aviones, 0, 0, width, height);
  drawButterflies(180, 100, 255);
  drawSceneTitle('Lenny quedo Traumatizado');
  drawContext('La exploción y la muerte,\n' + 
              'le dejaron paralizado\n'+ 
              'Crecio y tiene una obseción\n' +
               'los aviones de madera');
  drawInstruction('Click para continuar');
}
function handleClick_EndMailbox2() { goToScreen(26); }

//----------------------------------------- puse esta linea porque me estaba confundiendo 

// BLOQUE PERRO — pantallas 19 a 23
// 19 — El perro con conciencia de Evan
// Bifurcación: salvar al perro con palabras - 22  quedarse viendo - 24
function drawScreen19_DogMemory() {
  if (transAlpha > 200) {
    dialogoIndex19 = 0;
    dialogoPerroActivo = false;
  }
  image(PerroBolsa, 0, 0, width, height);
  let evan = new Evan(500, 310, 'teen',);
  evan.draw();
  let kayleigh = new Kayleigh(560, 330, 'teen',);
  kayleigh.draw();
  let tommy = new Tommy(180, 310, 'teen',);
  tommy.draw();
  let lenny = new Lenny(80, 260, 'teen');
  lenny.draw();
  image(Puchos, 0, 0, width, height);
  if (!dialogoPerroActivo) {
    btnSalvarPerro.draw();
    btnDejarPerro.draw();
  }
  drawSceneTitle('El perro');
  drawInstruction('¿Qué hace Evan?');
  drawContext('Tengo que salvar a mi perro, Tommy está loco y quiere prenderlo fuego vivo');
  // caja de diálogo — solo si ya eligió "Salvar al perro"
  if (dialogoPerroActivo) {
    let txt19 = dialogos19[dialogoIndex19];
    let bx = 20, bw = 360, bh = 44;
    let by = height - 70;
    noStroke();
    fill(0, 0, 0, 160);
    rect(bx, by, bw, bh, 8);
    fill(220, 200, 255);
    textSize(12);
    textStyle(NORMAL);
    textAlign(LEFT, CENTER);
    text(txt19, bx + 10, by + bh / 2, bw - 20);
    textStyle(NORMAL);
  }
}
function handleClick_DogMemory() {
  if (dialogoPerroActivo) {
    if (dialogoIndex19 < dialogos19.length - 1) {
      dialogoIndex19++;
    } else {
      goToScreen(23);
    }
    return; 
  }
  if (btnSalvarPerro.isClicked()) {
    dialogoPerroActivo = true;
    dialogoIndex19 = 0;
  }
  if (btnDejarPerro.isClicked()) {
    goToScreen(20);
  }
}


// 22 — Lenny mata a Tommy
function drawScreen20_LennyKillsTommy() {
  image(PerroBolsa, 0, 0, width, height);
  image(LennyMataTommy, 0, 0, width, height);
  drawSceneTitle('Lenny');
  drawInstruction('Click para continuar');
  drawButterflies(180, 100, 255);
  drawContext('Lenny se vengo de Tommy\n'+ 
              'Por maltarar al perro de Evan\n'+
              'Le clavo un fierro en la espalda\n'+
              'Lo mato accidentalmente');
}
function handleClick_LennyKillsTommy() { goToScreen(21); }

// 23 — Lenny en el manicomio
function drawScreen21_LennyAsylum() {
  image(LennyLoco, 0, 0, width, height);
  drawButterflies(180, 100, 255);
  drawSceneTitle('Manicomio');
  drawInstruction('Click para continuar');
  drawContext('Metieron a Lenny en un manicomio, por matar a Tommy')
}
function handleClick_LennyAsylum() { goToScreen(22); }

// 22 — Kayleigh drogadicta
function drawScreen22_KayleighAddict() {
  drawBackground(5, 0, 18, 28, 8, 55);
  image(KayleighAddicta, 0, 0, width, height);
  drawSceneTitle('Kayleigh');
  drawInstruction('Click para continuar');
  drawButterflies(180, 100, 255);
  drawContext('Kayleigh quedo sola con su padre\n'+
              'Ahogada en el duelo por perder a su hermano\n'+
              'Desarrolló comportamientos autodestructivos\n'+
              'y se volvió adicta a las drogas') 
}
function handleClick_KayleighAddict() { goToScreen(25); }

// ------------------------------------------------------------
// BLOQUE REFLEXIÓN — pantallas 25 a 31

// 25 — Reflexión — bifurcación
// "Viajar al comienzo" - 26  "Desconocer a Kayleigh" - 29 "Bancate ese defecto" - 31
function drawScreen23_Reflection() {
  drawBackground(5, 0, 18, 28, 8, 55);
  image(FondoReflexion, 0, 0, width, height);
  drawButterflies(180, 100, 255);
  drawSceneTitle('Reflexión');
  drawInstruction('¿Qué elige Evan?');

  // hover: cambia el texto del botón cuando el mouse está encima
  btnViajarAlComienzo.label   = btnViajarAlComienzo.isHovered()
    ? '¿Seré yo el problema?'
    : 'Viajar al comienzo de todo';
  btnDesconocerKayleigh.label = btnDesconocerKayleigh.isHovered()
    ? '¿Kay estará mejor sin mí?'
    : 'Desconocer a Kayleigh';
  btnBancateEseDefecto.label  = btnBancateEseDefecto.isHovered()
    ? '¿Tendré que afrontar mis\nproblemas solo?'
    : 'Bancar ese defecto';

  btnViajarAlComienzo.draw();
  btnDesconocerKayleigh.draw();
  btnBancateEseDefecto.draw();
}
function handleClick_Reflection() {
  if (btnViajarAlComienzo.isClicked())   goToScreen(24); // → EndUtero
  if (btnDesconocerKayleigh.isClicked()) goToScreen(27); // → KayleighBirthday
  if (btnBancateEseDefecto.isClicked())  goToScreen(32); // → BancateEseDefecto
}

// 24 — Final del guion: Evan viaja al útero y se autoaborta
function drawScreen24_EndUtero() {
  drawBackground(5, 0, 18, 28, 8, 55);
  image(Utero, 0, 0, width, height);
  drawButterflies(180, 100, 255);
  drawSceneTitle('Final del guion');
  drawInstruction('Click para continuar');
  drawContext('Creo que solo hay una salida a esta maldición\n'+
              'Evan, volvió al día de su nacimiento, nunca nació\n' +
              'Sin el Kayleigh no sufrió\n'+ 
              'Tommy no se volvió violento\n'+
              'Lenny tuvo una vida feliz')
        
}
function handleClick_EndUtero() { goToScreen(25); }

// 25— Fin del juego total
function drawScreen25_GameOver() {
  drawBackground(5, 0, 18, 28, 8, 55);
  drawButterflies(180, 100, 255);

  stroke(160, 90, 255, 120); strokeWeight(1);
  fill(220, 185, 255);
  textSize(40); textStyle(BOLD); textAlign(CENTER, CENTER);
  text('FIN DEL JUEGO', width / 2, 118);

  drawSceneTitle('Fin');
  drawInstruction('Click para ver créditos');
}
function handleClick_GameOver() { goToScreen(26); }

// 26 — Créditos
function drawScreen26_Credits() {
  drawBackground(5, 0, 18, 28, 8, 55);
  drawButterflies(180, 100, 255);

  stroke(160, 90, 255, 120); strokeWeight(1);
  fill(220, 185, 255);
  textSize(40); textStyle(BOLD); textAlign(CENTER, CENTER);
  text('EFECTO MARIPOSA', width / 2, 118);

  line(90, 142, 510, 142); noStroke();

  fill(190, 155, 240, 210);
  textSize(11); textStyle(ITALIC); textAlign(CENTER, CENTER);
  text(
    'Micaela Videla Melo\n'
    +'Romina Burgos\n'
    +'Bruno Maltese',
    width / 2, 188
  );

  fill(190, 155, 240, 210);
  textSize(11); textStyle(ITALIC); textAlign(CENTER, CENTER);
  text(
    'Informática Aplicada — Trabajo Práctico 2\nUNA 2026',
    width / 2, 280
  );
  drawSceneTitle('Créditos') 
  drawInstruction('Click para comenzar');
}
function handleClick_Credits() {
  screen = 0;
  initParticles();
}

//esto me quedo mal ordenado, tendrian que ir todas las escenas y al final
//el final total y los creditos 

// 27 — Viaja al cumple de Kayleigh niña y le dice que la odia
function drawScreen27_KayleighBirthday() {
  image(Cumpleaños, 0, 0, width, height);
  let evan = new Evan(500, 310, 'child',);
  evan.draw();
  let kayleigh = new Kayleigh(560, 310, 'child',);
  kayleigh.draw();
  let tommy = new Tommy(180, 310, 'child',);
  tommy.draw();
  let lenny = new Lenny(120, 310, 'child');
  lenny.draw();
  drawSceneTitle('Cumpleaños 6 de Kayleigh');
  drawContext('Estoy en el cumpleaños de Kayleigh\n'+
              'A lo mejor tengo que seguir mi camino');

  // caja de diálogo
  let txt27 = dialogos27[dialogoIndex27];
  let bx = 20, bw = 360, bh = 44;
  let by = height - 70;
  noStroke();
  fill(0, 0, 0, 160);
  rect(bx, by, bw, bh, 8);
  fill(220, 200, 255);
  textSize(12);
  textStyle(NORMAL);
  textAlign(LEFT, CENTER);
  text(txt27, bx + 10, by + bh / 2, bw - 20);
  textStyle(NORMAL);

  let instruccion = (dialogoIndex27 < dialogos27.length - 1)
    ? 'Click para seguir el diálogo'
    : 'Click para continuar';
  drawInstruction(instruccion);
}
function handleClick_KayleighBirthday() { 
  if (dialogoIndex27 < dialogos27.length - 1) {
    dialogoIndex27++;
  } else {
    dialogoIndex27 = 0;
    goToScreen(28); 
  }
 }

// 28— Escena pelicula: se cruza con Kayleigh y sigue caminando
function drawScreen28_Pelicula() {
  if (transAlpha > 200) peliculaSlide = 0;

  if (peliculaSlide === 0) {
    image(Peli1, 0, 0, width, height);
    drawContext('¿Esa es Kayleigh');
  } else {
    image(Peli2, 0, 0, width, height);
    drawContext('Tal vez lo mejor sea no entrometerse,\n'+
                'voy seguir por mi camino')
  }
  drawSceneTitle('10 años más tarde');
  drawInstruction('Click para continuar');
}
function handleClick_Pelicula() {
  if (peliculaSlide === 0) {
    peliculaSlide = 1;
  } else {
    goToScreen(25);
  }
}

// 31 — Bancate ese defecto 
function drawScreen32_BancateEseDefecto() {
  image(Terapia, 0, 0, width, height);
  drawSceneTitle('Bancate ese defecto');
  drawInstruction('Click para continuar');
  drawContext('No puedo seguir huyendo de mis problemas\n'+
              'Tengo que aprender a convivir con mis traumas\n'+
              'y no dejar que me controlen')
}
function handleClick_BancateEseDefecto() { goToScreen(26); }


