
        
        
         playgame = () =>{
            
            var no= Math.floor(Math.random()*6) +1;   // Player1:for random number from(1-6) 
            var Player1=`img/dice${no}.png`;
            document.getElementById("Player1").setAttribute("src",Player1);
        
        var no2= Math.floor(Math.random()*6) +1;     // Player2:for random number from(1-6)
        var Player2=`img/dice${no2}.png`;
        document.getElementById("Player2").setAttribute("src",Player2);
        

        if(no>no2){
           document.querySelector("h1").innerHTML="Player1 Wins :) ";
        }
        else if(no<no2){
            document.querySelector("h1").innerHTML="Player2 Wins :)";
        }
        else{
            document.querySelector("h1").innerHTML="It's Draw!!!";
        }
    }
   