// Escena del buzón
class MailboxScene {
  constructor() {
  }

  draw() {
    // pasto y vereda
    fill(72, 108, 58);
    rect(0, 270, width, 130);
    fill(180, 172, 158);
    rect(0, 318, width, 20);
    fill(165, 158, 144);
    stroke(0); strokeWeight(1);
    quad(245, 318, 295, 318, 285, 270, 255, 270);
    noStroke();

    // --- Casa principal ---
    fill(235, 232, 220); stroke(0); strokeWeight(1.5);
    rect(150, 145, 240, 130);
    fill(145, 110, 72);
    triangle(140, 145, 270, 88, 400, 145);

    // ventana izquierda
    fill(235, 232, 220); stroke(0); strokeWeight(1);
    rect(195, 118, 34, 28);
    fill(145, 110, 72); triangle(192, 118, 212, 100, 232, 118);
    fill(235, 232, 220); triangle(196, 118, 212, 104, 228, 118);
    fill(200, 215, 230); stroke(0); strokeWeight(1); rect(198, 120, 28, 22);

    // ventana derecha
    fill(235, 232, 220); stroke(0); strokeWeight(1); rect(315, 118, 34, 28);
    fill(145, 110, 72); triangle(312, 118, 332, 100, 352, 118);
    fill(235, 232, 220); triangle(316, 118, 332, 104, 348, 118);
    fill(200, 215, 230); stroke(0); strokeWeight(1); rect(318, 120, 28, 22);

    // puerta principal
    fill(80, 55, 35); stroke(0); strokeWeight(1.5); rect(248, 218, 44, 57);
    fill(145, 110, 72); triangle(238, 218, 270, 200, 302, 218);
    ellipse(284, 242, 8, 8);
    fill(190, 182, 168); stroke(0); strokeWeight(1);
    rect(242, 272, 56, 6); rect(246, 266, 48, 6);

    // ventanas frontales
    stroke(0); strokeWeight(1.5);
    fill(30, 30, 35); rect(180, 170, 56, 80); rect(300, 170, 56, 80);
    fill(200, 215, 230); rect(183, 174, 50, 70); rect(303, 174, 50, 70);

    // --- Casa secundaria (derecha) ---
    fill(235, 232, 220); stroke(0); strokeWeight(1.5); rect(390, 175, 130, 100);
    fill(145, 110, 72); triangle(378, 175, 455, 130, 532, 175);
    fill(30, 30, 35); rect(422, 195, 68, 26);
    fill(200, 215, 230); stroke(0); strokeWeight(1.5); rect(426, 195, 60, 26);

    // --- Buzón con llama animada ---
    // palo
    fill(80, 65, 45); stroke(0); strokeWeight(1.5); rect(88, 258, 10, 62);

    // tallo animado
    stroke(139, 105, 20); strokeWeight(2.5); noFill();
    beginShape();
    for (let i = 0; i < 7; i++) vertex(90 + sin(i * 0.8 + frameCount * 0.05) * 5, 240 - i * 7);
    endShape();

    // llamas
    noStroke();
    for (let [r, g, b, w, h] of [[255,109,0,12,20],[255,214,0,8,14],[255,255,255,4,7]]) {
      fill(r, g, b);
      ellipse(90 + sin(6 * 0.8 + frameCount * 0.05) * 5, 240 - 6 * 7, w + sin(frameCount * 0.2) * 2, h + sin(frameCount * 0.2) * 2);
    }

    // chispas
    for (let i = 0; i < 5; i++) {
      let a = (frameCount * 0.15 + i * 1.2) % TWO_PI;
      fill(i % 2 === 0 ? color(255,241,118) : color(255,171,64));
      ellipse(90 + sin(6*0.8 + frameCount*0.05)*5 + cos(a)*5, 198 + sin(a)*3, random(2,4), random(2,4));
    }

    // --- Casa miniatura (izquierda) ---
    fill(235, 232, 220); stroke(0); strokeWeight(0.75); rect(46, 226, 60, 33);
    fill(145, 110, 72); triangle(43, 226, 76, 212, 108, 226);

    // ventana izq mini
    fill(235, 232, 220); stroke(0); strokeWeight(0.5); rect(56, 219, 9, 7);
    fill(145, 110, 72); triangle(56, 219, 61, 215, 66, 219);
    fill(235, 232, 220); triangle(57, 219, 61, 216, 65, 219);
    fill(200, 215, 230); stroke(0); strokeWeight(0.5); rect(57, 220, 7, 6);

    // ventana der mini
    fill(235, 232, 220); stroke(0); strokeWeight(0.5); rect(86, 219, 9, 7);
    fill(145, 110, 72); triangle(86, 219, 91, 215, 96, 219);
    fill(235, 232, 220); triangle(87, 219, 91, 216, 95, 219);
    fill(200, 215, 230); stroke(0); strokeWeight(0.5); rect(87, 220, 7, 6);

    // puerta mini
    fill(80, 55, 35); stroke(0); strokeWeight(0.75); rect(70, 245, 11, 14);
    fill(145, 110, 72); triangle(68, 245, 76, 240, 84, 245);
    ellipse(79, 251, 2, 2);
    fill(190, 182, 168); stroke(0); strokeWeight(0.25);
    rect(69, 258, 14, 2); rect(70, 257, 12, 2);

    // ventanas frontales mini
    stroke(0); strokeWeight(0.75);
    fill(30, 30, 35); rect(53, 233, 14, 20); rect(83, 233, 14, 20);
    fill(200, 215, 230); rect(54, 234, 12, 18); rect(84, 234, 12, 18);

    // casita extra (extremo izq)
    fill(235, 232, 220); stroke(0); strokeWeight(0.75); rect(106, 234, 33, 25);
    fill(145, 110, 72); triangle(103, 234, 122, 222, 141, 234);
    fill(30, 30, 35); rect(114, 239, 17, 7);
    fill(200, 215, 230); stroke(0); strokeWeight(0.5); rect(115, 239, 15, 7);
  }
}

// para usar
// let mailboxScene = new MailboxScene();
// mailboxScene.draw();