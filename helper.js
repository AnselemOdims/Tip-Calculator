export const getValue = (el)=>{
    return Number(el.value)
}

export const removeClass = (el, cl)=>{
    return document.querySelector(`${el}`).classList.remove(`${cl}`) 
}

export const addClass = (el, cl) => {
    return el.classList.add(`${cl}`)
}
export const showError = (e)=>{
    e.currentTarget.parentElement.insertAdjacentHTML('afterend', `<p class="error">Input can not be empty</p>`)
    e.currentTarget.parentElement.style.border = 'solid 2px red'
}

export const showSuccess  = (e)=>{
    e.currentTarget.parentElement.style.border = 'solid 2px green'
    document.querySelectorAll('main p').forEach(item=>{
        item.style.display = 'none'
    })
   
}
export const calcTip = (input1, input2, input3) =>{
    let percent = Number(input3.value.replace('%', ''));
    return (input1*percent)/(input2*100)
}

export const calcTotal = (input1, input2, input3) =>{
    return calcTip(input1, input2, input3) + (input1/input2)
}

export const displayAmount = (amount, el)=>{
    return el.textContent = `${amount.toFixed(2)}`
}