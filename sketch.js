var cat,catimg
var mouce,mouceimg
var garden
function preload() {
    //load the images here
    garden = loadImage("images/garden.png")
    mouceimg = loadImage("images/mouse1.png")
    catimg = loadImage("images/cat1.png")
    mouceimg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png")
    

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   cat = createSprite(600,600)
   mouce = createSprite(150,600)
   cat.addAnimation("cat",catimg)
   mouce.addAnimation("moucce",mouceimg)


}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouce.x < (cat.width/2 + mouce.width/2)){
        cat.addAnimation("cati",catimg2)


mouce.addAnimation("ouc",mouceimg2)

cat.changeAnimation("cati")
mouce.changeAnimation("ouc")
cat.velocityX = 0
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    cat.addAnimation("cati",catimg2)
    cat.velocityX = -5
    cat.changeAnimation("cati")
    mouce.addAnimation("mo",mouceimg2)
    mouce.changeAnimation("mo")
    mouce.frameDelay = 25
}

}
