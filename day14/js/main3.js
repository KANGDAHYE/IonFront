function scope(){
    //let, const 블록레벨(블록을 벗어나면 이해 못함)
    //var 함수레벨
    // console.log(a); // var는 됨. 
    if(true){
        // var a = 123
        // let a = 123
        const a = 123

        console.log(a);
    }
}
scope()

//--------------------------

//매개변수 있는 함수
function hap(x,y){
    console.log(x+y)
}
hap(1,2)//매개변수 있는, 값 안들어가 있으면 NaN

//--------------------------

//리턴타입 함수 //선언
function hap2(x,y){
    return x+y
}
hap2(2,3) //호출
console.log(hap2);

//--------------------------

const sum = function(x,y){
    return x+y;
}
const plus = sum(30, 50)
console.log(plus);

//--------------------------

function hap3(x,y){
    if(x<2){
        return x+2;
    }
    return x+y;
}
console.log(hap3(5,10))

//--------------------------
//java 가변길이
function sum2(){
    console.log(arguments);
    return arguments[5]
}
console.log(sum2(7,3,6,9,14,45,2,2,46,11,42))

//--------------------------
//화살표 함수
const doubleFn = function(x,y){
    return x*2
}
console.log('doubleFn : ', doubleFn(7))
console.log('doubleFn : ', doubleFn(1,2,7))

// const doubleArrow = (x,y) =>{
const doubleArrow = (x) =>{
return x*2
}
console.log('doubleArrow : ', doubleArrow(1,2,7))

//인자값 => 리턴타입
const doubleArrow2 = x => x*2
console.log('doubleArrow2 : ', doubleArrow2(4))

//내 결과값으로 , 정수123, 배열[1,2,3], 객체({name : 'dahye'})
const doubleArrow3 = x => ({name : 'dahye', age:25})
console.log('doubleArrow3 : ', doubleArrow3(4))

//--------------------------
//즉시실행함수
//1. (x)()
//2. ((x))
const d = 10
function doubleFunc(){
    // console.log(d*2);
}
// doubleFunc()

(function() {
    console.log(d*2);
}())