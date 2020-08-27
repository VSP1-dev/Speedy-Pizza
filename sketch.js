var player;
var house1, house2, house3, house4;
var rand;
var score = 100;
var text_ready;
var dog;
var order, order1, order2, order3, order4;

function setup() {
  createCanvas(800,400);
  player = createSprite(400, 200, 50, 50);
  house1 = createSprite(100,390,100,100);
  house2 = createSprite(700,390,100,100);
  house3 = createSprite(700,10,100,100);
  house4 = createSprite(100,10,100,100);
  order = createSprite(200,290,30,30);
  order.shapeColor = "yellow";
  
}

function draw() {
  background(255,255,255);
  textSize (20);
  text("Score: " + score , 400,30);
  textSize (30);
  text_ready = text("Ready Set Go!",400,100 );

  if (keyDown("UP_ARROW")) {
  
    player.velocityX=0;
    player.velocityY=-8;
    }
    if (keyDown(DOWN_ARROW)) {
      
    player.velocityX=0;
    player.velocityY=8;
    }
    if (keyDown(LEFT_ARROW)) {
      
    player.velocityX=-8;
    player.velocityY=0;
    }
    if (keyDown(RIGHT_ARROW)) {
      
    player.velocityX=8;
    player.velocityY=0;
    
    }
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
      text_ready.visible = false;
    if(rand === 1)
    {
      house1.shapeColor = "red";
    }
    else
    {
      house1.shapeColor = "green";
    }

    if(rand === 2)
    {
      house2.shapeColor = "red";
    }
    else
    {
      house2.shapeColor = "green";
    }

    if(rand === 3)
    {
      house3.shapeColor = "red";
    }
    else
    {
      house3.shapeColor = "green";
    }

    if(rand === 4)
    {
      house4.shapeColor = "red";
    }
    else
    {
      house4.shapeColor = "green";
    }
  }
 
  if(player.collide(house1) && house1.shapeColor === "red")
  {
    score = score + 10;
  }
  else if(player.collide(house1) && house1.shapeColor === "green")
  {
    score = score -10;
  }

  if(player.collide(house2) && house2.shapeColor === "red")
  {
    score = score + 10;
  }
  else if(player.collide(house2) && house2.shapeColor === "green")
  {
    score = score -10;
  }

  if(player.collide(house3) && house3.shapeColor === "red")
  {
    score = score + 10;
  }
  else if(player.collide(house3) && house3.shapeColor === "green")
  {
    score = score -10;
  }

  if(player.collide(house4) && house4.shapeColor === "red")
  {
    score = score + 10;
  }
  else if(player.collide(house4) && house4.shapeColor === "green")
  {
    score = score -10;
  }

  if(frameCount % 230 === 0)
  {
    console.log("YAY");
  }
  
  if(player.isTouching(order))
  {
    order.x = player.x;
    order.y = player.y;
  }

  drawSprites();
}