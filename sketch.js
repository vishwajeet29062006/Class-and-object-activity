var box1,box2;

function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(100,200,20,40);
   box2 = new Box(10,10,60,29)
}

function draw() 
{
  background(220);
  box1.show()
  box2.show()
}

