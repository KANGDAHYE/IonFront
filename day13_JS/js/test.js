export default function getType(data){
    return Object.prototype.toString.call(data);
}
// console.log(getType(123));
// console.log(getType(false));