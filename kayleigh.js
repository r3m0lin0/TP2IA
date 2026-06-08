
// Personaje Kayleigh Miller


class Kayleigh {
  constructor(x, y, age, isUniform = false) {
  this.x         = x;
  this.y         = y;
  this.age       = age;
  this.isUniform = isUniform; 
}

  draw() {
    let x = this.x;
    let y = this.y;

    let s;
    if      (this.age === 'child') s = 1.5;
    else if (this.age === 'teen')  s = 1.5;
    else                           s = 1.7;

    let shirtColor = (this.age === 'child')
      ? color(232, 144, 144)  // #e89090 rosa niña
      : color(28, 5, 55);     // #1c0537 violeta adulta/teen

    let skinColor  = color(232, 192, 154); // #e8c09a
    let hairColor  = color(200, 160, 80);  // #c8a050
    let pantsColor = color(74, 53, 32);    // #4a3520

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

  // pelo fondo
  fill(hairColor); stroke(0); strokeWeight(2);
  if (this.isUniform) {
  ellipse(x, y - 76 * s, 20 * s, 12 * s); 
  } else if (this.age === 'child' || this.age === 'teen') {
  rect(x - 16 * s, y - 76 * s, 32 * s, 20 * s, 2);
  } else {
  rect(x - 18 * s, y - 80 * s, 16 * s, 46 * s, 2);
  rect(x + 2 * s,  y - 80 * s, 16 * s, 46 * s, 2);
  }

    // cabeza
    fill(skinColor); stroke(0); strokeWeight(2);
    ellipse(x, y - 70 * s, 32 * s, 32 * s);

    // flequillo o tapa adulta
    fill(hairColor);
    if (this.age === 'child' || this.age === 'teen') {
      arc(x, y - 76 * s, 32 * s, 18 * s, PI, TWO_PI);
    } else {
      arc(x, y - 76 * s, 36 * s, 24 * s, PI, TWO_PI);
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

    noStroke();
    //esto carga el gorrito que tiene, lo complique cambiandole el pelo porque
    //queria ponerle un uniforme tipo vestido, pero al final fue lo que es jiji
    if (this.isUniform) {
      image(uniformeKayleigh, 0, 0, 600, 400);
    }
  } 
}

//para usar 
// let kayleigh = new Kayleigh(155, 310, 'child', 'happy'); 
// kayleigh.draw();
//let kayleigh = new Kayleigh(155, 310, 'adult', 'happy', true);