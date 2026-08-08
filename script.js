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
const sub = document.querySelector('.sub');

const equal = document.querySelector('.equal');
const poinputt = document.querySelector('.poinputt');

function result(num){
    input.value += num.textContent;
}

function delFun(t){
    input.value = t.substrinputg(0, t.length-1);
}

function delAllFun(){
    input.value = "";
}

// n0.addEventListener('click', result(n0));
n0.addEventListener('click', () => {
    result(n0);
});
n1.addEventListener('click', () => {
    result(n1);
});
n2.addEventListener('click', () => {
    result(n2);
});
n3.addEventListener('click', () => {
    result(n3);
});
n4.addEventListener('click', () => {
    result(n4);
});
n5.addEventListener('click', () => {
    result(n5);
});
n6.addEventListener('click', () => {
    result(n6);
});
n7.addEventListener('click', () => {
    result(n7);
});
n8.addEventListener('click', () => {
    result(n8);
});
n9.addEventListener('click', () => {
    result(n9);
});
poinputt.addEventListener('click', () => {
    result(poinputt);
});
equal.addEventListener('click', () => {
    result(equal);
});
mul.addEventListener('click', () => {
    result(mul);
});
div.addEventListener('click', () => {
    result(div);
});
plus.addEventListener('click', () => {
    result(plus);
});
sub.addEventListener('click', () => {
    result(sub);
});


del.addEventListener('click', () => {
    delFun(input.value);
});
delAll.addEventListener('click', () => {
    delAllFun();
});
