
// Personaje Evan Treborn

// Al final subimos una imagen en la version de carcel y no lo usamos desde el personaje 
class Evan {
  constructor(x, y, age,) {
    this.x     = x;
    this.y     = y;
    this.age   = age;    // 'child' | 'teen' | 'adult'
  }

  draw() {
    let x = this.x;
    let y = this.y;

    let s;
    if      (this.age === 'child') s = 1.6;
    else if (this.age === 'teen')  s = 1.8;
    else if (this.age === 'adult') s = 2.0;
    else if (this.age === "dorm") s = 2.6; 

    let shirtColor;
    if      (this.style === 'prison') shirtColor = color(255, 125, 0);
    else if (this.age === 'child')    shirtColor = color(204, 0, 0);
    else if (this.age === 'teen')     shirtColor = color(2, 12, 69);
    else                              shirtColor = color(108, 143, 181);

    let skinColor  = color(211, 149, 105);
    let hairColor  = color(60, 31, 10);
    let pantsColor = color(74, 84, 104);

    stroke(0); strokeWeight(2);

    // sombra
    fill(0, 0, 0, 80); noStroke();
    ellipse(x, y + 2, 38 * s, 10 * s);

    stroke(0); strokeWeight(2);

    // piernas
    fill(pantsColor);
    rect(x - 11 * s, y - 28 * s, 9 * s, 28 * s, 2);
    rect(x + 2 * s,  y - 28 * s, 9 * s, 28 * s, 2);

    // cuerpo
    fill(shirtColor);
    rect(x - 14 * s, y - 58 * s, 28 * s, 32 * s, 3);

    // brazos
    fill(shirtColor);
    rect(x - 22 * s, y - 56 * s, 9 * s, 22 * s, 3);
    rect(x + 13 * s, y - 56 * s, 9 * s, 22 * s, 3);

    // manos
    fill(skinColor);
    ellipse(x - 17 * s, y - 34 * s, 9 * s, 9 * s);
    ellipse(x + 17 * s, y - 34 * s, 9 * s, 9 * s);

    // cabeza
    fill(skinColor);
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

//para usar el personaje 
// let evan = new Evan(200, 310, 'child', 'standing', 'normal');
// evan.draw();