/*
Class
1. 리터럴 방식
2. 함수 방식
3. 프로토타입 방식
*/ 
//1. 리터럴 방식
/* 
const 인스턴스 = {
    프로퍼티1 : 초기값,
    프로퍼티2 : 초기값,
    메소드1 : function(){

    },
    메소드2 : function(){

    }

}
*/

const names = {
    firstName : 'dahye',
    lastName : 'kang',
    getFullName : function(){
        return `${this.firstName} ${this.lastName}`
    }
}
// console.log(names);
console.log(names.getFullName());

const names2 = {
    firstName : 'dawon',
    lastName : 'kang',
    getFullName : function(){
        return `${this.firstName} ${this.lastName}`
    }
}
// console.log(names2);
console.log(names2.getFullName());

//--------------------------

//2. 함수 방식
/* 
function 클래스이름(){
    this.프로퍼티1 = 초기값;
    this.프로퍼티2 = 초기값;

    this.메소드1 = function(){
        
    }
    this.메소드2 = function(){

    }
}
const 인스턴스 = new 클래스이름();
*/

function user(first, last){
    this.firstName = first
    this.lastName = last
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}
const yuan = new user('yuna','kim')
// console.log(yuan);
console.log(yuan.getFullName());

//--------------------------

/* 
//3. 프로토타입 방식

function 클래스이름(){
    this.프로퍼티1 = 초기값;
    this.프로퍼티2 = 초기값;

    클래스이름.prototype.메소드1 = function(){

    }
}
*/
function person(first, last){
    this.firstName = first
    this.lastName = last
    // this.getFullName = () =>{
    //     return `${this.firstName} ${this.lastName} 우우훗`
    // }
    this.getFullName = () => '${this.firstName} ${this.lastName} 우우훗'
}

// person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`
// }
person.prototype.getFullName = () => `${this.firstName} ${this.lastName}`


const person1 = new person('dahye', 'kang')
const person2 = new person('dahye2', 'kang2')
const person3 = new person('dahye3', 'kang3')
console.log(person1);
console.log(person1.getFullName());
console.log(person2.getFullName());
console.log(person3.getFullName());

//--------------------------
//자바 방식 상속

class Vehicle{
    constructor(name,wheel){
        this.name = name
        this.wheel = wheel
    }
}
const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle);

class Bicycle extends Vehicle{
    constructor(name,wheel, license){
        super(name, wheel)
        this.license = license
    }
}
const myBicycle = new Bicycle('운송수단2', 3, 'dd')
console.log(myBicycle);
