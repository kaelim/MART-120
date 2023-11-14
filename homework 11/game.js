//character 
var characterx = 100;
var charctery = 100;
//key codes
var w = 87;
var s = 83;
var a = 65;
var d = 68;
//shape
var shapex = 20;
var shapey = 42;
var shapea = 70;
var shapeb = 35;
var shapeXspeed;
var shapeYspeed;
var shapeaspeed;
var shapebspeed;

//mouse shape
var mouseshapex;
var mouseshapey;
var diameter;
var width;

var mousex = 0;
var mousey = 0;


function setup()
{
    createCanvas(500, 600);

    shapeaspeed = Math.floor(Math.random() * (Math.floor(Math.random()* 7))+1);
    shapebspeed = Math.floor(Math.random() * (Math.floor(Math.random()* 7))+1); 
    shapeXspeed = Math.floor(Math.random() * (Math.floor(Math.random()* 5))+1);
    shapeYspeed = Math.floor(Math.random() * (Math.floor(Math.random()* 5))+1);
    createCharacter(200,350);
}

function draw()
 {
 background(250,45,78);
 stroke(0);
 fill(0);

 
 if (diameter < 200) {
    diameter += 2;
  } else if (diameter >= 200) {
    diameter = 25;
  } 
    
ellipse(mousex,mousey,15,40);




 createBorders(10);

 //exit
 textSize(13);
 text("EXIT", width-50, height-50);

 //createCharacter(200,350)
drawCharacter();
characterMovement();

//enemy
fill (70,160,30);
circle(shapea, shapeb, 10);

shapeaspeed = Math.floor(Math.random() * (Math.floor(Math.random()* 7))+1);
shapebspeed = Math.floor(Math.random() * (Math.floor(Math.random()* 7))+1);

fill (90,160,200);
circle(shapex, shapey, 15);

shapeXspeed = Math.floor(Math.random() * (Math.floor(Math.random()* 5))+1);
shapeYspeed = Math.floor(Math.random() * (Math.floor(Math.random()* 5))+1);

//move shape
shapex += shapeXspeed;
shapey += shapeYspeed;
shapea += shapeaspeed;
shapeb += shapebspeed;

//in bounds?
if(shapex > width)
{
    shapex = 0;
}
if(shapex < 0)
{
    shapex = width;
}
if(shapey > height)
{
    shapey = 0;
}
if(shapey < 0)
{
    shapey = height;
}
if(shapea > width)
{
    shapea = 0;
}
if(shapea < 0)
{
    shapea = width;
}
if(shapeb > height)
{
    shapeb = 0;
}
if(shapeb < 0)
{
    shapeb = height;
}



}


//exit?
if(characterx > width && charactery > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }

//mouse click
 {
fill(140,130,120);
circle(mouseshapex, mouseshapey, 25);
 }

function characterMovement()
{
    if(keyIsDown(w))
    {
        charctery -= 10;
    }
    if(keyIsDown(s))
    {
        charctery += 10;
    }
    if(keyIsDown(a))
    {
        characterx -= 10;
        console.log("movement: " + characterx);
    }
    if(keyIsDown(d))
    {
        characterx += 10;
    }
}

function createCharacter(x,y)
{
    characterx = x;
    charactery = y;
    console.log(characterx);
}

function drawCharacter()
{
    fill(25,70,180);
    circle(characterx,charctery,25);
}

function createBorders(thickness)
{
    //top
    rect(0,0,width,thickness);
    //left
    rect(0,0,thickness,height);
    //bottom
    rect(0,height-thickness,width,thickness);
    //right
    rect(width-thickness,0,thickness,height-50);
}

function mouseClicked()
{
    mouseshapex = mousex;
    mouseshapey = mousey;

}

function mouseMoved() {
    mousex = mouseX;
    mousey = mouseY;
  }

  function keyPressed() 
   { if (65 === LEFT_ARROW) {
        characterX -= 10;
    } 
    else if (68 === RIGHT_ARROW) {
        characterX += 10;
    }
    else if (87 === UP_ARROW) {
        characterY -= 10;
    }
    else if (83 === DOWN_ARROW) {
        characterY += 10;
    }
}
