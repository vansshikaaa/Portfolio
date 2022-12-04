let btnRock, btnPaper, btnScissors, btnGame, btn3Game, btn5Game ;

let RndNumber ;

// variable for text
let notes = "Welcome to My game , plz choose  your option."
let result = ""

function setup()
{
  createCanvas(600, 600);
 
  RndNumber = round ( random( 0.5, 3.5) )
 
  btnGame = createButton("Single Game")
  btnGame.position (75, 190)
  btnGame.style("width" , "100px")
  btnGame.mousePressed(showRPS)
  //btnGame.hide()
   
  btn3Game = createButton("Best Of Three")
  btn3Game.position (250, 190)
  btn3Game.style("width" , "100px")
  //btn3Game.hide()
 
  btn5Game = createButton("Best of Five")
  btn5Game.position (425, 190)
  btn5Game.style("width" , "100px")
  //btn5Game.hide()
 
  btnRock = createButton("Rock")
  btnRock.position (75, 190)
  btnRock.style("width" , "100px")
  btnRock.mousePressed(CompRock)
  btnRock.hide()
   
  btnPaper = createButton("Paper")
  btnPaper.position (250, 190)
  btnPaper.style("width" , "100px")
  btnPaper.hide()
 
  btnScissors = createButton("Scissors")
  btnScissors.position (425, 190)
  btnScissors.style("width" , "100px")
  btnScissors.hide()
 
}

function draw()
{
 
  background(220);
  //  increase the size of the text
 
  text("My Game Rock Paper Scissors", 220, 50)
 
  text( notes, 180, 120);
 
  text (result , 150, 300)
 
  text (RndNumber , 300, 300)
}


function showRPS()
{
  notes = "plz choose one out of Rock, paper, scissors"
  btnGame.hide()
  btn3Game.hide()
  btn5Game.hide()
  btnScissors.show()
  btnPaper.show()
  btnRock.show()
}

function CompRock()
{

   if(RndNumber == 2)
        {
         result = 'You Won !!'
        }
    else if (RndNumber == 3)
        {
          result = 'Computer Won !!'
        }
    else
        {
          reslut = "It's Tie"
        }
 
 
}

// crete function for comparing against paper

// create function for comparing against scissors