
const DOMselectors = {
    img: document.querySelector(".itemimg"),
    container: document.querySelector(".container"),
    result: document.querySelector(".result"),
  }
  
  const URLk = `https://dummyjson.com/products`

function personsguess(){
    document.getElementById("submitting").addEventListener("submit", function (e) {
    e.preventDefault();
    const personguess = document.getElementById("priceright").value;
    console.log(personguess)
});
} 

function newimg(a){
            DOMselectors.container.insertAdjacentHTML('beforebegin', `<div class="card">
        <p class="itemimage"><img src="${a.thumbnail}" alt="${a.title}"></p>
        </div>`)
        };
personsguess = Number(personsguess);
  async function getData(){
    try {
        const response = await fetch(URLk);
        if (response.status != 200) {
            throw new Error (response.statusText);
        }
        const newcards = await response.json();
        const correctanswer = newcards.price;
   newimg(newcards)
    

    let running = true;
    while (running){
        function priceisright() {
    if (personsguess == correctanswer) {
     DOMselectors.result.textContent = "correct!"
      newimg()
    } else {
        DOMselectors.result.textContent = "wrong!"
        newimg()
    }
    running = false;
  }
  
    }
  priceisright()
  
  return newcards;
    } catch (error) {
        console.log(error,"uh oh");
    }
}

let amtcorrect = 0
for(let i = 0; i < personsguess.length; i++){
    if (personsguess[i] === 'correct!')
    amtcorrect++
    i++
}
    
  getData(URLk)
  newimg()