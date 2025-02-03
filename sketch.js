let img;
let bgMusic;
let voice;
let voice2;

// Load an image and create a p5.Image object.
function preload() {
  img = loadImage('dark space.png');
  soundFormats ( 'mp3');
bgMusic = loadSound ('Angel Music 1.m4a');
voice = loadSound ('Angel voice #1.mp3');
voice2 = loadSound ('Angel voice #2.mp3');

}

function setup() {
  createCanvas(windowWidth ,windowHeight ,WEBGL);
  

}

function draw() {
  // Add the panorama.
  panorama(img);

  // Enable orbiting with the mouse.
  orbitControl();

  // Use the image as a light source.//////TORUS SECTION
 
  imageLight(img);

  // Style the sphere.
  noStroke();
  specularMaterial(100);
  shininess(300);
  metalness(100);
  color(0)

  // Draw the torus and spin it.
  
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.05);
  rotateZ(frameCount * 0.05);
        torus(300,50,50);
    translate(30, 10, 0);   

  
  
  ////////
  
  // Use the image as a light source. SPHERE SECTION
  imageLight(img);
  
  

  // Style the sphere.
  noStroke();
  specularMaterial(50);
  shininess(200);
  metalness(100);

  // Draw the sphere.
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.05);
  rotateZ(frameCount * 0.05);
        sphere(100);
  
  
  ////new atoms
    // Style the sphere.
  noStroke();
  specularMaterial(100);
  shininess(300);
  metalness(100);
  color(0)

  // Draw the torus and spin it.
  
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.05);
  rotateZ(frameCount * 0.05);
        torus(300,50,50);
    translate(30, 10, 0);   

  
  
  ////////
  
  // Use the image as a light source. SPHERE SECTION
  imageLight(img);

  // Style the sphere.
  noStroke();
  specularMaterial(50);
  shininess(200);
  metalness(100);

  // Draw the sphere.
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.05);
  rotateZ(frameCount * 0.01);
        sphere(100);
  translate(100, -30, 20)
}


function mouseMoved(){
    if (bgMusic.isLoaded()) {
    bgMusic.play();
    bgMusic.loop();
  }
  
      if (voice.isLoaded()) {
    voice.play();
    voice.loop();
  }
  
        if (voice2.isLoaded()) {
    voice2.play();
    voice2.loop();
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);}