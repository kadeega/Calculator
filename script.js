const text = document.querySelector('.text');
const input = document.querySelector('#in');

const n0 = document.querySelector('.num0');
const n1 = document.querySelector('.num1');
const n2 = document.querySelector('.num2');
const n3 = document.querySelector('.num3');
const n4 = document.querySelector('.num4');
const n5 = document.querySelector('.num5');
const n6 = document.querySelector('.num6');
const n7 = document.querySelector('.num7');
const n8 = document.querySelector('.num8');
const n9 = document.querySelector('.num9');

const del = document.querySelector('.del');
const delAll = document.querySelector('.delAll');

const div = document.querySelector('.division');
const mul = document.querySelector('.mul');
const plus = document.querySelector('.plus');
const subb = document.querySelector('.sub');

const equal = document.querySelector('.equal');
const point = document.querySelector('.point');

let number1;
let number2;
let operation;
let result;

function screen(num){
    input.value += num.textContent;
}

function delFun(t){
    if(t === 'undefined'){
        delAllFun();
    }
    else{
        input.value = t.substring(0, t.length-1);
    }
}

function delAllFun(){
    input.value = "";
}

document.addEventListener("keydown", (event) => {
    if (event.key === "0") {
        screen(n0);
    }
    else if (event.key === "1") {
        screen(n1);
    }
    else if (event.key === "2") {
        screen(n2);
    }
    else if (event.key === "3") {
        screen(n3);
    }
    else if (event.key === "4") {
        screen(n4);
    }
    else if (event.key === "5") {
        screen(n5);
    }
    else if (event.key === "6") {
        screen(n6);
    }
    else if (event.key === "7") {
        screen(n7);
    }
    else if (event.key === "8") {
        screen(n8);
    }
    else if (event.key === "9") {
        screen(n9);
    }
    else if (event.key === "=") {
        number2 = Number(input.value);
        // screen(equal);
        console.log(number1);
        console.log(number2);
        console.log(operation);
        switch (operation){
        case '+':
            result = number1 + number2;
            plus.style.backgroundColor = "#F0F0F0";
            break;
        case '-':
            result = number1 - number2;
            subb.style.backgroundColor = "#F0F0F0";
            break;
        case '*':
            result = number1 * number2;
            mul.style.backgroundColor = "#F0F0F0";
            break;
        case '/':
            result = number1 / number2;
            div.style.backgroundColor = "#F0F0F0";
            break;
        default:
            break;
    }
        input.value = result;
    }
    else if (event.key === "+") {
        number1 =  Number(input.value);
        operation = '+'; 
        plus.style.backgroundColor = "rgb(232, 226, 115)";
        // screen(plus);
        input.value = "";
    }
    else if (event.key === "-") {
        if(input.value === ""){
        screen(subb);
        }
        else{
            number1 =  Number(input.value);
            operation = '-'; 
            subb.style.backgroundColor = "rgb(232, 226, 115)";
            input.value = "";
        }
    }
    else if (event.key === "*" || event.key === "x" || event.key === "X") {
        number1 =  Number(input.value);
        operation = '*'; 
        mul.style.backgroundColor = "rgb(232, 226, 115)";
        input.value = "";
    }
    else if (event.key === "/") {
        number1 =  Number(input.value);
        operation = '/'; 
        div.style.backgroundColor = "rgb(232, 226, 115)";
        input.value = "";
    }
    else if (event.key === ".") {
        screen(point);
        div.style.backgroundColor = "rgb(232, 226, 115)";
    }
    else if (event.key === "Backspace") {
        delFun(input.value);
    }
    else if (event.key === "Escape") {
        delAllFun();
    }
    
});


n0.addEventListener('click', () => {
    screen(n0);
});
n1.addEventListener('click', () => {
    screen(n1);
});
n2.addEventListener('click', () => {
    screen(n2);
});
n3.addEventListener('click', () => {
    screen(n3);
});
n4.addEventListener('click', () => {
    screen(n4);
});
n5.addEventListener('click', () => {
    screen(n5);
});
n6.addEventListener('click', () => {
    screen(n6);
});
n7.addEventListener('click', () => {
    screen(n7);
});
n8.addEventListener('click', () => {
    screen(n8);
});
n9.addEventListener('click', () => {
    screen(n9);
});
point.addEventListener('click', () => {
    screen(point);
});
equal.addEventListener('click', () => {
    number2 = Number(input.value);
    // screen(equal);
    console.log(number1);
    console.log(number2);
    console.log(operation);
    switch (operation){
        case '+':
            result = number1 + number2;
            plus.style.backgroundColor = "#F0F0F0";
            break;
        case '-':
            result = number1 - number2;
            subb.style.backgroundColor = "#F0F0F0";
            break;
        case '*':
            result = number1 * number2;
            mul.style.backgroundColor = "#F0F0F0";
            break;
        case '/':
            result = number1 / number2;
            div.style.backgroundColor = "#F0F0F0";
            break;
        default:
            break;
    }
    input.value = result;
});
mul.addEventListener('click', () => {
    number1 =  Number(input.value);
    operation = '*'; 
    mul.style.backgroundColor = "rgb(232, 226, 115)";
    input.value = "";
    
});
div.addEventListener('click', () => {
    number1 =  Number(input.value);
    operation = '/'; 
    div.style.backgroundColor = "rgb(232, 226, 115)";
    input.value = "";
    
});
plus.addEventListener('click', () => {
    number1 =  Number(input.value);
    operation = '+'; 
    plus.style.backgroundColor = "rgb(232, 226, 115)";
    input.value = "";
    
});
subb.addEventListener('click', () => {
    if(input.value === ""){
        screen(subb);
    }
    else{
        number1 =  Number(input.value);
        operation = '-'; 
        subb.style.backgroundColor = "rgb(232, 226, 115)";
        
        input.value = "";
    }
});


del.addEventListener('click', () => {
    delFun(input.value);
});
delAll.addEventListener('click', () => {
    delAllFun();
});

