class Lenny {
  constructor(x, y, age) {
    this.x   = x;
    this.y   = y;
    this.age = age; // 'child' | 'teen' | 'adult'
  }
 
  draw() {
    let x = this.x;
    let y = this.y;
 
    let s;
    if      (this.age === 'child') s = 1.5;
    else if (this.age === 'teen')  s = 1.7;
    else                           s = 1.8;
 
    let skinColor  = color(254, 221, 190);
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
 
    // remera
    fill(255);
    rect(x - 14 * s, y - 58 * s, 28 * s, 32 * s, 3);
    if (this.age !== 'adult') {
      stroke(0); strokeWeight(1.5 * s);
      for (let i = -10 * s; i <= 10 * s; i += 5 * s) {
        line(x + i, y - 55 * s, x + i, y - 30 * s);
      }
      stroke(0); strokeWeight(2);
    }
 
    // brazos
    fill(255);
    rect(x - 22 * s, y - 56 * s, 9 * s, 22 * s, 3);
    rect(x + 13 * s, y - 56 * s, 9 * s, 22 * s, 3);
    if (this.age !== 'adult') {
      stroke(0); strokeWeight(1.5 * s);
      line(x - 18 * s, y - 52 * s, x - 18 * s, y - 38 * s);
      line(x + 17 * s, y - 52 * s, x + 17 * s, y - 38 * s);
    }
    stroke(0); strokeWeight(2);
 
    // manos
    fill(skinColor);
    ellipse(x - 17 * s, y - 34 * s, 9 * s, 9 * s);
    ellipse(x + 17 * s, y - 34 * s, 9 * s, 9 * s);
 
    // pelo largo (solo adult)
    if (this.age === 'adult') {
      fill(210, 180, 140);
      rect(x - 16 * s, y - 72 * s, 10 * s, 30 * s, 2);
      rect(x + 6 * s,  y - 72 * s, 10 * s, 30 * s, 2);
    }
 
    // cabeza
    fill(skinColor); stroke(0); strokeWeight(2);
    ellipse(x, y - 70 * s, 32 * s, 32 * s);
 
    // flequillo y tapa cabeza 
    if (this.age === 'adult') {
      fill(210, 180, 140);
      arc(x, y - 72 * s, 32 * s, 32 * s, PI, TWO_PI);
      fill(skinColor);
      arc(x, y - 72 * s, 28 * s, 22 * s, PI, TWO_PI);
    }
 
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
 
    // gorra (child y teen)
    if (this.age === 'child' || this.age === 'teen') {
      fill(210, 180, 140);
      stroke(0); strokeWeight(2 * s);
      rect(x - 18 * s, y - 79 * s, 36 * s, 7 * s, 4 * s);
      strokeWeight(3 * s);
      arc(x, y - 79 * s, 36 * s, 24 * s, PI, TWO_PI, CHORD);
    }
 
    noStroke();
  }
}
 
// Para usar:
// let lenny = new Lenny(110, 320, 'child');
// lenny.draw();
 