var immunity, covid;
var slingShot;
var immunityImage, covidImage, slingShotImage, backGround;

function preload(){
slingShotImage=loadImage("images/slingshot.png");
immunityImage=loadImage("images/immunity.png");
covidImage=loadImage("images/covid.png");
backGround=loadImage("images/bg.jpeg")
}

function setup(){
createCanvas(1200,800);

slingShot=createSprite(600,400);
slingShot.addImage(slingShotImage);
slingShot.scale=0.9;

immunity=createSprite(600,400);
immunity.addImage(immunityImage);
immunity.scale=0.2;
immunity.depth=slingShot.depth-10;
console.log(slingShot.depth);
console.log(immunity.depth);
}

function draw(){
    background(backGround);
    immunity.display();
    slingShot.display();
}

