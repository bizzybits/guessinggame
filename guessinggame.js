


      function showGreat() {
          //alert("Great Job!");
         var great = document.getElementById("great");
         console.log(great)
         great.innerHTML += '<span class="large">Great Job!</span>';
         console.log(great)
       }

       function showNope() {
          alert("Nope!");
        // var wrongContainer = document.getElementById("wrong");
        // wrongContainer.innerHTML = "Wrong!";
       }
      //function showAnswer(answer) {
      //  var container = document.getElementById(answer+"-container");
      //  container.innerHTML += '<span class="large">' + answer + '!</span>';
    //  }
