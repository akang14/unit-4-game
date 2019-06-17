$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    $('#random').text(Random);

    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
 
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
   
  $('#wins').text(wins);
  $('#loss').text(losses);
  
  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#random').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#final').text(userTotal);
        } 
 
  function yeet(){
  alert("You won!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }
  
  function yaga(){
  alert ("You lose!");
    losses++;
    $('#loss').text(losses);
    reset()
  }
  
    $('#one').on ('click', function(){
      userTotal = userTotal + num1;
      console.log("New userTotal= " + userTotal);
      $('#final').text(userTotal); 
            
          if (userTotal == Random){
            yeet();
          }
          else if ( userTotal > Random){
            yaga();
          }   
    })  
    $('#two').on ('click', function(){
      userTotal = userTotal + num2;
      console.log("New userTotal= " + userTotal);
      $('#final').text(userTotal); 
          if (userTotal == Random){
            yeet();
          }
          else if ( userTotal > Random){
            yaga();
          } 
    })  
    $('#three').on ('click', function(){
      userTotal = userTotal + num3;
      console.log("New userTotal= " + userTotal);
      $('#final').text(userTotal);
  
            if (userTotal == Random){
            yeet();
          }
          else if ( userTotal > Random){
            yaga();
          } 
    })  
    $('#four').on ('click', function(){
      userTotal = userTotal + num4;
      console.log("New userTotal= " + userTotal);
      $('#final').text(userTotal); 
        
            if (userTotal == Random){
            yeet();
          }
          else if ( userTotal > Random){
            yaga();
          }
    });   
  }); 