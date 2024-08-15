let palavra;
let musica;
let imagem;

function setup() {
  createCanvas(1000, 800);

  palavra = baunilha();
  musica.loop();
}

function preload(){
  imagem = loadImage("foto.jpg");
  musica = loadSound("musica.mp3");
}

function draw() {
  chocolate();
  baunilha();
  
  let maximo = width;
  let minimo = 0;
  
let aparecer=map(mouseX, 0,width,1,palavra.length);
let inicio=palavra.substring(0,aparecer);
text(inicio, 500, 400);
}

function chocolate(){
background("pink");
  image(imagem,0,0,500,500);
  fill("-lightpurple");
  textSize(64);
  textAlign(CENTER,CENTER);
}

function baunilha(){
  let palavras = ["Portals", "K-12", "After School", "Cry Baby", "Melanie"];
return random(palavras);
}