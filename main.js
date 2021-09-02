import { focusError, handleCalc, customHandler, handleReset} from './utils.js';


const billInput = document.querySelector("input#bill");
const amount = document.querySelectorAll('.input-amount');
const customInput = document.querySelector('.customInput')
const resetButton = document.querySelector('#reset-btn')
try{

    try{
        billInput.focus();
        amount.forEach(item=>{
            item.addEventListener('blur', focusError)
            item.addEventListener('focus', focusError)
        })
    }
   catch(err){
       console.log(new Error(err))
   }

    try{
        [...document.querySelectorAll(".percentInput")].forEach(item=>{
            item.addEventListener('click', handleCalc)      
    })
    }
    catch(err){
        console.log(new Error(err))
    }

   try{
        customInput.addEventListener('input', customHandler)
        resetButton.addEventListener('click', handleReset)
   }
   catch(err){
        console.log(new Error(err))
   }
}
catch(err){
    console.log(new Error(err))
}