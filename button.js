
// Objeto botón reutilizable

class Button {
  constructor(x, y, w, h, label) {
    this.x     = x;      // posición x del centro
    this.y     = y;      // posición y del centro
    this.w     = w;      // ancho
    this.h     = h;      // alto
    this.label = label;  // texto
  }

  isHovered() {
    return mouseX > this.x - this.w / 2 &&
           mouseX < this.x + this.w / 2 &&
           mouseY > this.y - this.h / 2 &&
           mouseY < this.y + this.h / 2;
  }

  isClicked() {
    return this.isHovered();
  }

  draw() {
    let hover = this.isHovered();

    // fondo
    fill(hover ? color(80, 40, 130) : color(40, 20, 80));
    stroke(hover ? color(200, 160, 255) : color(130, 90, 200));
    strokeWeight(1.5);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h, 10);
    rectMode(CORNER);

    // texto
    fill(hover ? color(255, 230, 255) : color(200, 170, 240));
    noStroke();
    textSize(12);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text(this.label, this.x, this.y);
    textStyle(NORMAL);
  }
}