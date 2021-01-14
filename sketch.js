
function preload() {
    //load the images here
    tomimg1=loadImage(tomOne.png);
    tomimg3=loadAnimation(tomThree.png);
    tomimg2=loadImage(tomTwo.png);

    jerryimg1=loadImage(jerryOne.png);
    jerryimg3=loadAnimation(jerryThree.png);
    jerryimg2=loadImage(jerryTwo.png);
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     tom=createSprite(200,200,20,20);
     tom.addImage(tomimg1);

     jerry=createSprite(100,200,20,20);
     jerry.addImage(jerryimg1);


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x===jerry.width/2+tom.width/2){
       jerry.addImage(jerryimg2);
       tom.addImage(tomimg2);
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===lEFT_ARROW){
    tom.velocityX=-5;
    tom.addAnimation(tomimg3);
    tom.chaneAnimation("tomRunning");
    jerry.addAnimation(jerryimg3);
    jerry.chaneAnimatioin("jerry teasing");
}

}
