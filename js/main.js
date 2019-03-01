// Build a simple slot machine with minimum 5
// items per reel and 3 reels - user should be
// able to bet min or max and have their total update
var total = 1000;

//when we click the min button it called the
//randomReel function
document.getElementById('clickMin').addEventListener("click", function(){
  var reel1 = randomReel()
  var reel2 = randomReel()
  var reel3 = randomReel()
  console.log(reel1,reel2,reel3)
  // conditional to upadate total values

  var results = checkMatch( el3)
  if(results==='winner!'){
    total = total + 25;
  }else{
    total = total - 1;

  }

  //update the dom with new total
  document.getElementById('finalResult').innerHTML = total
  document.getElementById('response').innerHTML = results
  document.getElementById('reel1').innerHTML = reel1
  document.getElementById('reel2').innerHTML = reel2
  document.getElementById('reel3').innerHTML = reel3
});

document.getElementById('clickMax').addEventListener("click", function(){
  var reel1 = randomReel()
  var reel2 = randomReel()
  var reel3 = randomReel()
  console.log(reel1,reel2,reel3)

  // conditional to upadate total values

  var results = checkMatch(reel1, reel2, reel3)
  if(results==='winner!'){
    total = total + 100;
  }else{
    total = total - 50;

  }

  //update the dom with new total
  document.getElementById('finalResult').innerHTML = total
  document.getElementById('response').innerHTML = results
  document.getElementById('reel1').innerHTML = reel1
  document.getElementById('reel2').innerHTML = reel2
  document.getElementById('reel3').innerHTML = reel3
});

document.getElementById('clickMax').addEventListener("click", function(){

});

//choose random value for the reel

function randomReel(){

  var choice = Math.random()
  if (choice <= .2){
    return 'cherry';
  }else if(choice <=.4){
    return 'mango';
  }else if(choice <=.6){
    return 'carrot';
  }else if(choice <=.8){
    return 'orange';
  }else{
    return 'money';

  }
  return choice;

//1 ut of 5
// return the value

}

//compare reels to find if there are a winner
function checkMatch(a, b, c){
  if (a == b && b == c){
    return 'winner!';
  }else{
    return 'loser!'
  }

}

//compare reels find
