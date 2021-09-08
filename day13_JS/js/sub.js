// import getType from './test.js';

console.log('Hello World');
console.log(typeof 123);//number type
console.log(typeof true);//boolean type
console.log(typeof undefined); //undefined type
console.log(typeof null); //objcet type *
console.log(typeof {}); //objcet type
console.log(typeof []); //objcet type

function getType(data){
    return Object.prototype.toString.call(data); //결과>[object Number] [object Boolean] 
    // return Object.prototype.toString.call(data).slice(8, -1);//8개를 자르고, - 뒤에서부터, 결과> Number Boolean
}

console.log(getType(123));
console.log(getType(false));