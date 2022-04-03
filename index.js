let count = 10;

let randomGenerator = Math.floor(Math.random()*100) + 1;

const formId = document.querySelector("#formId");

let inputValue = document.querySelector("#numberInput");
let text = document.querySelector("#divId");

formId.addEventListener('submit', (e) => {
 e.preventDefault();
 console.log(randomGenerator, inputValue.value)
 
 if(count == 0){
 		text.innerHTML="Load page and try again";
 }else if(randomGenerator == inputValue.value){
 		text.innerHTML="You guessed the number";
 }else if(inputValue.value < randomGenerator){
 		text.innerHTML="To low, try again";
 }else if(inputValue.value > randomGenerator){
 		text.innerHTML="To high, try again";
 }
 	count--;
  inputValue.value = "";
})
