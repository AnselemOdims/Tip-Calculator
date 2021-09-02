import {getValue, removeClass, addClass,showError, showSuccess, calcTip, displayAmount, calcTotal} from './helper.js';

const billInput = document.querySelector("input#bill");
const peopleInput = document.querySelector("input#people");
const tip = document.querySelector('#tip');
const total = document.querySelector('#total');
const customInput = document.querySelector('.customInput')

export const handleCalc = e=>{
    let target = e.currentTarget
    removeClass('section.input-section > input', 'active')
    addClass(target, 'active')
    const bill = getValue(billInput);
    const people = getValue(peopleInput)
    displayAmount(calcTip(bill, people, target), tip)
    displayAmount(calcTotal(bill, people, target), total)
    customInput.value = '';
}

export const customHandler = e =>{
    let target = e.currentTarget
    const bill = getValue(billInput);
    const people = getValue(peopleInput)
    if(bill===0 || people === 0){
        return;
    }
    displayAmount(calcTip(bill, people, target), tip)
    displayAmount(calcTotal(bill, people, target), total)
}

export const handleReset = e =>{
    billInput.value = '';
    peopleInput.value = '';
    let num = 0
    displayAmount(num, tip )
    displayAmount(num, total )
    customInput.value = '';
}
export const focusError = e=>{
    if(e.type === 'blur' && e.currentTarget.value === ''){
        showError(e)
    }
    else if(e.type === 'focus'){
        showSuccess(e)
    }
}