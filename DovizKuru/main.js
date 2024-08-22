const Miktarinput= document.querySelector("#miktar")
const exchange1= document.querySelector("#firstoption")
const exchange2= document.querySelector("#secondoption")
const valueInput= document.querySelector("#result")
runEventListeners();
function runEventListeners(){
Miktarinput.addEventListener("input",exchange)
}
const currency = new Currency();
function exchange(){
const amount = Number(Miktarinput.value.trim());
const firstoption= exchange1.options[exchange1.selectedIndex].textContent
const secondoption= exchange2.options[exchange2.selectedIndex].textContent


currency.exchange(amount,firstoption,secondoption)
.then((result)=>{
    valueInput.value= result.toFixed(3) 
})
}






