// User Interface Logic

function hideResults() {
    document.getElementById("conservative").setAttribute("class", "hidden");
    document.getElementById("liberal").setAttribute("class", "hidden");
  }
  
  window.onload = function() {
    hideResults();
  
    document.querySelector("form").onsubmit = function(event) {
      event.preventDefault();
      hideResults();
      const age = parseInt(document.querySelector("input#age").value);
      const question = document.querySelector("input#question");
  
      if (age && question) {
        if (age <= 30 && answer === "no") {
            document.getElementById("conservative").removeAttribute("class");
        } else if (age > 30 && answer === "yes") {
            document.getElementById("conservative").removeAttribute("class");
        } else if (age <= 30 && answer === "yes")
            document.getElementById("liberal").removeAttribute("class");
    } else {
        document.getElementById("liberal").removeAttribute("class");
    }
    };
  };