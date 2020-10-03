var ball, ball_img, img, paddle;

function preload() {
  img = loadImage("paddle.png");
  ball_img = loadImage("ball.png");
}
function setup() {
  createCanvas(400, 400);
  ball = createSprite(200,200,20,20);
  paddle = createSprite(380,200,10,50);
  paddle.addImage(img);
  ball.addImage(ball_img);
  ball.velocityX = -5;
  ball.velocityY = -3;
}

function draw() {
  background(205,153,0);
   
  edges = createEdgeSprites();
  
   ball.bounceOff(edges[0]);
   ball.bounceOff(edges[3]);
   ball.bounceOff(edges[2]);
   paddle.collide(edges[2]);
   paddle.collide(edges[3])
  
  ball.bounceOff(paddle);
  
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
    paddle.velocityY = -10;
  }
  
  if(keyDown(DOWN_ARROW))
  {
     paddle.velocityY = 10;
  }
  drawSprites();
  
}

function randomVelocity()
{
  if(ball.bounceOff(edges[0]) || ball.bouceOff(edges[2]) || ball.bounceOff(edges[3]) || ball.bounceOff(paddle))
  {
    ball.velocityX = randomNumber(3,10);
    ball.velocityY = randomNumber(3,10);
    
  }
}

