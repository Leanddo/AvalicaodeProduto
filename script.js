function switchpage(numpage) {
  switch (numpage) {
    case 2:
      document.getElementById("reviewstars").style.display = "none";
      document.getElementById("review").style.display = "flex";
      document.getElementById("back").style.display = "block";

      break;

    case 1:
      document.getElementById("reviewstars").style.display = "block";
      document.getElementById("review").style.display = "none";
      document.getElementById("back").style.display = "none";
      break;
  }
}

function submit() {
  var radioInputs = document.querySelectorAll(".radio-input");
  var coment = document.getElementById("Textarea").value;
  var selectedValue = null;

  radioInputs.forEach(function (input) {
    if (input.checked) {
      selectedValue = input.value;
    }
  });

  console.log( "Selected Rating: " + selectedValue + "\n" + "Client coment: " + coment);
}
