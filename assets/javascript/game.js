$(document).ready(function(){
    var Random=Math.floor(Math.random()*100+20)
    

    $('#randomNumber').text(Random);
    

    var num1= Math.floor(Math.random()*12+1)
    var num2= Math.floor(Math.random()*12+1)
    var num3= Math.floor(Math.random()*12+1)
    var num4= Math.floor(Math.random()*12+1)
  
    
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    
  $('#wins').text(wins);
  $('#losses').text(losses);
  //Reset Game
  function reset(){
        Random=Math.floor(Math.random()*100+20);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*12+1);
        num2= Math.floor(Math.random()*12+1);
        num3= Math.floor(Math.random()*12+1);
        num4= Math.floor(Math.random()*12+1);
        userTotal= 0;
        $('#totalScore').text(userTotal);
        } 
  //Function for Wins
  function win(){
  alert("Yaaaaay! You win!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }
  //Function for Losses
  function lose(){
  alert ("Oh No! You lose!");
    losses++;
    $('#losses').text(losses);
    reset()
  }
  //Crystal 1 
    $('#one').on ('click', function(){
      userTotal = userTotal + num1;
      console.log("New userTotal= " + userTotal);
      $('#totalScore').text(userTotal); 
            
          if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            lose();
          }   
    })  
    //Crystal 2
    $('#two').on ('click', function(){
      userTotal = userTotal + num2;
      console.log("New userTotal= " + userTotal);
      $('#totalScore').text(userTotal); 
          if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            lose();
          } 
    }) 
    //Crystal 3
    $('#three').on ('click', function(){
      userTotal = userTotal + num3;
      console.log("New userTotal= " + userTotal);
      $('#totalScore').text(userTotal);
  
            if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            lose();
          } 
    })  
    //Crystal 4
    $('#four').on ('click', function(){
      userTotal = userTotal + num4;
      console.log("New userTotal= " + userTotal);
      $('#totalScore').text(userTotal); 
        
            if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            lose();
          }
    });   
  }); 