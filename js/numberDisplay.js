const digits = document.querySelectorAll('.digit');

let total = 0;

// setInterval(() => {
//     reduceNUmber(digits[digits.length-1],digits.length-1);
// }, 1000);

const calculate = (amount) => {
    if(amount>0){
        addNUmber(digits[digits.length-1],digits.length-1);
    }else{
        reduceNUmber(digits[digits.length-1],digits.length-1);
    }
}


const addNUmber = (digit,num)=>{
    const divs = digit.querySelectorAll('span');
    const newSpan = document.createElement('span');
    newSpan.classList.add('new');
    newSpan.innerHTML =Number(divs[divs.length-1].innerText)<9 ? Number(divs[divs.length-1].innerText)+1:0;
    digit.appendChild(newSpan);
    setTimeout(() => {
        divs.forEach(div => {
            div.remove();
        });
    }, 1000);

    if(Number(divs[divs.length-1].innerText)==9){
        addNUmber(digits[num-1],num-1);
    }
}

const reduceNUmber = (digit,num)=>{
    const divs = digit.querySelectorAll('span');
    const newSpan = document.createElement('span');
    newSpan.classList.add('new');
    newSpan.innerHTML =Number(divs[divs.length-1].innerText)>0 ? Number(divs[divs.length-1].innerText)-1:9;
    digit.appendChild(newSpan);
    setTimeout(() => {
        divs.forEach(div => {
            div.remove();
        });
    }, 1000);

    if(Number(divs[divs.length-1].innerText)==1){
        reduceNUmber(digits[num-1],num-1);
    }
}