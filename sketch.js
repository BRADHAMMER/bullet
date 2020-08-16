var wall , thickness;
var bullet , speed , weight;


function setup() {
  
  createCanvas(1350,400);
  thickness = random(22,83);
  
bullet.shapeColor = color(255);

 wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor =color(80,80,80);

}

function draw() {
  background(0); 
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/thickness*thickness*thickness;
if(damage > 180)
  {
    bullet.shapeColor=color(255,0,0);
  }
  if(damage<180 && damage>100)
  {
    bullet.shapeColor=color(0,255,0);
  }

  if(damage<100)
  {
    bullet.shapeColor=color(0,255,0);
  }
  }

 
  drawSprites();
}


function hasCollided(lbullet,lwall)
{

  bulletRightEdge=lbullet.x + lbullet.speed
  wallLeftEdge = lwall.x
  if(bulletRightEdge >= wallLeftEdge )
  {
    return true
  } 
     return false;

}
if (hasCollided(bullet, wall))
{
   bullet.velocityX = 0;
   var damage = 0.5* weight *speed *speed/(thickness*thickness*thickness);

   if(damage > 10)
   {
     wall.shapeColor = color(255,0,0);
   }
   
   if(damage<10)
   {
     wall.shapecolor = color(0,255,0);
   }
}































