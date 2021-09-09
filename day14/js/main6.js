//String
//indexOf
const result = 'Hello World!'.indexOf('World')
console.log(result);
//
const str = 'kangkangkang@naver.com'
console.log(str.match(/.+(?=@)/)[0])
//length, trim()
const msg = '      Hello world      '
console.log(msg.length);
console.log(msg.trim().length);

//toFixed, typeof, 형변환 parseInt parseFloat
const pi = 3.141592747
console.log(pi);

const s1 = pi.toFixed(5);
console.log(s1);
console.log(typeof(s1)); //string

const integer = parseInt(s1)
const float = parseFloat(s1)

console.log(integer);
console.log(float);
console.log(typeof integer, typeof float);

//-----------------------------------
//배열
const cars = ['BMW', 'Volvo', 'Saab']
const numbers = [1,2,3];
console.log();
console.log();
console.log();
console.log();

