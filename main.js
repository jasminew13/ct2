import { products } from './array.js'
const DOMselectors = {
    container: document.querySelector(".container"),
    result: document.querySelector(".result"),
  }
 // const correctanswer = products.price;

function personsguess(){
    document.getElementById("submitting").addEventListener("submit", function (e) {
    e.preventDefault();
    const personguess = document.getElementById("priceright").value;
    const guess = parseInt(personguess.value);
    console.log(personguess);
    for (let i = 0; i < products.length; i++) {
      if (guess === products[i].price) {
        return DOMselectors.result.textContent = "correct";
      }
      else if (guess > products[i].price){
        return DOMselectors.result.textContent = "too high";
      }
      else {
        return DOMselectors.result.textContent = "too low";
      }
    }
    });
} 
/* let running = true
while (running) {
  if (personsguess == correctanswer) {
        DOMselectors.result.textContent = "correct!"
       } 
    else if (personsguess > correctanswer) {
           DOMselectors.result.textContent = `wrong! too high. the answer was $${item.price}`;
       } 
       else (personsguess < correctanswer) ;{
        DOMselectors.result.textContent = `wrong! too low. the answer was $${item.price}`;
       }
}
(running) = false  */

for (var i = 1; i < 8; i++) {
    var item = products.splice(Math.floor(Math.random() * (products.length)), 1)[0];

    var el = document.querySelector(".card");
        el.innerHTML= "   " + `name: ${item.item}` + `<img class="itemimage" src="${item.img}" alt="">`;
}
document.addEventListener('change', e => e.target?.matches('item price') && validateAnswer());
  
    function priceGuess() {

   for (let i = 0; i < products.length; i++) {
      if (personsguess === products[i].price) {
        return DOMselectors.result.textContent = "correct";
      }
      else if (personsguess > products[i].price){
        return DOMselectors.result.textContent = "too high";
      }
      else {
        return DOMselectors.result.textContent = "too low";
      }
    }
  }
  priceGuess()