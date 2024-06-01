let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro /2;

let velocidadeXbolinha = 6;
let velocidadeYbolinha = 6;

let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

let xRaquete2 = 585;
let yRaquete2 = 150;
let raquete2Comprimento = 10;
let raquete2Altura = 90;

let meusPontos = 0;
let delePontos = 0;

let raquetada;
let ponto;
let trilha;

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  
  mostraBolinha()
  movimentaBolinha()
  verificaColisaoBorda()
  mostraRaquete()
  movimentaMinhaRaquete()
  mostraRaquete2()
  movimentaRaqueteDele()
  verificaColisaoRaquete()
  verificaColisaoRaquete2()
  incluiPlacar()
  marcaPonto()
}

function mostraBolinha(){
 circle(xBolinha, yBolinha, diametro); 
}

function movimentaBolinha(){
  
  xBolinha += velocidadeXbolinha;
  yBolinha += velocidadeYbolinha;
}

function verificaColisaoBorda(){
  
   if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXbolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYbolinha *= -1;
  }
}

function mostraRaquete(){
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}

function mostraRaquete2(){
  rect(xRaquete2, yRaquete2, raquete2Comprimento, raquete2Altura)
}

function movimentaMinhaRaquete(){
  if(keyIsDown(87) === true) {
    yRaquete -= 10;
  }
  if(keyIsDown(83) === true) {
    yRaquete += 10;
  }
}

function movimentaRaqueteDele(){
  if(keyIsDown(UP_ARROW)) {
    yRaquete2 -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete2 += 10;
  }
}

function verificaColisaoRaquete(){
if (xBolinha - raio < xRaquete + raqueteComprimento && 
      yBolinha > yRaquete && 
      yBolinha < yRaquete + raqueteAltura) {
    velocidadeXbolinha *= -1;
    xBolinha = xRaquete + raqueteComprimento + raio;
  }
}

function verificaColisaoRaquete2(){
  if (xBolinha + raio > xRaquete2 && 
      yBolinha > yRaquete2 && 
      yBolinha < yRaquete2 + raquete2Altura) {
    velocidadeXbolinha *= -1;
    xBolinha = xRaquete2 - raio; 
  }
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255,140,0));
  rect(450, 10, 40, 20);
  fill(255);
  text(delePontos, 470, 26);
}

function marcaPonto(){
  
  if(xBolinha > 590){
    meusPontos += 1;
  }
  if(xBolinha < 10){
    delePontos += 1;
  }
}

function preload(){
  trilha = loadSound("trilha.mp3");
  raquetada = loadSound("raquetada.mp3")
  ponto = loadSound("ponto.mp3")
}