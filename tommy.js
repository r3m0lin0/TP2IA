
// Tommy.js — Personaje Tommy Miller


class Tommy {
  constructor(x, y, age, mood) {
    this.x    = x;
    this.y    = y;
    this.age  = age;   // 'child' | 'teen' | 'adult'
  }

  draw() {
    let x = this.x;
    let y = this.y;

    let s;
    if      (this.age === 'child') s = 1.6;
    else if (this.age === 'teen')  s = 1.8;
    else                           s = 2.0;

    let skinColor   = color(232, 192, 154); // #E8C09A
    let hairColor   = color(200, 160, 80);  // #C8A050
    let pantsColor  = color(74, 84, 104);   // #4a5468
    let shirtColor  = color(0, 0, 0);       // negro
    let jacketColor = color(78, 129, 162);  // #4e81a2

    stroke(0); strokeWeight(2);

    // sombra
    fill(0, 0, 0, 80); noStroke();
    ellipse(x, y + 2, 38 * s, 10 * s);

    stroke(0); strokeWeight(2);

    // piernas
    fill(pantsColor);
    rect(x - 11 * s, y - 28 * s, 9 * s, 28 * s, 2);
    rect(x + 2 * s,  y - 28 * s, 9 * s, 28 * s, 2);

    // campera
    fill(jacketColor);
    rect(x - 18 * s, y - 58 * s, 36 * s, 32 * s, 3);

    // remera negra
    fill(shirtColor);
    rect(x - 6 * s, y - 58 * s, 12 * s, 32 * s, 3);

    // solapas campera
    fill(pantsColor);
   // izquierda
  triangle(
  x - 18 * s, y - 58 * s,
  x - 2 * s,  y - 58 * s,
  x - 2 * s,  y - 26 * s
  );
  // derecha  
  triangle(
  x + 18 * s, y - 58 * s,
  x + 2 * s,  y - 58 * s,
  x + 2 * s,  y - 26 * s
  );


    // brazos
    fill(jacketColor); stroke(0); strokeWeight(2);
    rect(x - 22 * s, y - 56 * s, 9 * s, 22 * s, 3);
    rect(x + 13 * s, y - 56 * s, 9 * s, 22 * s, 3);

    // manos
    fill(skinColor);
    ellipse(x - 17 * s, y - 34 * s, 9 * s, 9 * s);
    ellipse(x + 17 * s, y - 34 * s, 9 * s, 9 * s);

    // cabeza
    fill(skinColor); stroke(0); strokeWeight(2);
    ellipse(x, y - 70 * s, 32 * s, 32 * s);

    // pelo
    fill(hairColor);
    arc(x, y - 72 * s, 32 * s, 32 * s, PI, TWO_PI);

    // ojos
    fill(0); noStroke();
    ellipse(x - 7 * s, y - 68 * s, 5 * s, 5 * s);
    ellipse(x + 7 * s, y - 68 * s, 5 * s, 5 * s);
    fill(255);
    ellipse(x - 6 * s, y - 68 * s, 2 * s, 2 * s);
    ellipse(x + 8 * s, y - 68 * s, 2 * s, 2 * s);

    // boca
    stroke(0); strokeWeight(1.5);
    line(x - 5 * s, y - 62 * s, x + 5 * s, y - 62 * s);

    noStroke();
  }
}

//para usar 
// let tommy = new Tommy(420, 310, 'child', 'neutral');
// tommy.draw();