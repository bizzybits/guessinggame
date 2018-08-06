
      var counter = 0



      function showGreat() {
          //alert("Great Job!");
         var great = document.getElementById("result");
         console.log(great)
         great.innerHTML = '<span class="large">Great Job!</span>'
         great.innerHTML += "<br><img src='trash.png'>";
         console.log(great)
         var numberCorrect = document.getElementById("counter")
         counter++;
         numberCorrect.innerHTML = counter ;
       }

       function showNope() {
          //alert("Nope!");
         var nope = document.getElementById("result")
         nope.innerHTML = "Nope!";
       }
      //function showAnswer(answer) {
      //  var container = document.getElementById(answer+"-container");
      //  container.innerHTML += '<span class="large">' + answer + '!</span>';
    //  }
