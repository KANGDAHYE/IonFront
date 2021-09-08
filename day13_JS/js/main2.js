// import random from "./test2";

// 비교연산자(comparison operator)
const a = 1;
const b = 3;
console.log(a === b); //false

function isEqual(x,y){
    return x === y;
}
console.log(isEqual(1,1));//true
console.log(isEqual(2,'2'));//false

function isEqual(x,y){
    return x == y;
}
console.log(isEqual(1,1));//true
console.log(isEqual(2,'2'));//true

const c = 1===1;//true false 에 대한 결과
const d = 'AB' === 'AB';
const e = true;

console.log(c === d);//true
console.log(c !== d);//false
console.log('&& : ' , c && d && e);//true
console.log();
console.log();
console.log();
console.log();


console.log(a>b);

const f = 1<2;
if(f){
    console.log('참');
}else{
    console.log('거짓');
}
console.log(a? '참' : '거짓');

// 
// let rand = (Math.random()*10);
// console.log('rand : ', rand);
// console.log(Math.floor(rand));
// console.log(Math.floor(Math.random()*10));

// console.log('-------------------------------');
// const e = random();

// if(e === 0){
//     console.log('a is 0');
// }else{
//     console.log(e ,' rest......');
// }

// switch ~ case
switch (e) {
    case 0:
        console.log('a is 0');
        break;
    case 2:
        console.log('a is 2');
        break;
    case 4:
        console.log('a is 4');
        break;
    default:
        console.log(e ,' rest......');
        break;
}

for(let i=0; i<3; i+=1){
    console.log(i);
}

// const ulEl = document.querySelector('ul')
// for(let i=0; i<10; i+=1){
//     const li = document.createElement('li')
//     li.textContent= `list-${i+1}`;

//     li.addEventListener('click', function(){
//         console.log(li.textContent);
//     });

//     // ulEl.appendChild(li);
// }

let yourName = prompt('name ? ')
alert(yourName);