//recieves data from the form
function handleData(event) {
  console.log("handling data");
  event.preventDefault();
  const side1 = parseInt(document.getElementById("side1").value)
  const side2 = parseInt(document.getElementById("side2").value)
  const side3 = parseInt(document.getElementById("side3").value)
  
  //obj to store paragraph we will output to
  let outputObj = document.getElementById("output");
  outputObj.setAttribute("class", "hidden");
  console.log("side1: " + side1);
  console.log("side2: " + side2);
  console.log("side3: " + side3);

  //only run code if input is valid
  if (side1 > 0 && side2 > 0 && side3 > 0) {
    outputObj.innerText = evalTriangle(side1, side2, side3);
    outputObj.removeAttribute("class");
  }
  else { //error message if invlaid input
    console.log("not valid input");
    outputObj.innerText = "Not valid input";
    outputObj.removeAttribute("class");
  }

}

//evaluate what kind of triangle 
function evalTriangle(side1, side2, side3) {
  if(side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
    return "Not a trianlge";
  }
  else if(side1 === side2 && side2 === side3) {
    return "You have an equilateral triangle";
  }
  else if(side1 === side2 || side2 === side3 || side3 === side1){
    return "You have an isoceles triangle";
  }
  else {
    return "You have a scalene triangle";
  }
}

//waits for elements to load to run functions
window.addEventListener("load", function () {
  document.getElementById("triangleInput").addEventListener("submit", handleData)
});