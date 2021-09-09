function emp(empNo, empName){
    this.empno = empNo
    this.empname = empName
    this.getEmpTable = () =>  `사원번호 : ${this.empno}, 사원명: ${this.empname}`
}
// emp.prototype.getEmpTable = () => `사원번호 : ${this.empno}, 사원명 : ${this.empname}`

// const emp1 = new emp(1, 'kang')
// const emp2 = new emp(2, 'dodo')
// const emp3 = new emp(3, 'hehe')
// console.log(emp1.getEmpTable());
// console.log(emp2.getEmpTable());
// console.log(emp3.getEmpTable());

let count = 0;
let names = ['kang','dodo','hehe']
const timer = setInterval(()=>{
    for(let i = 0; i<3; i++){
        if(i<3){
            console.log(new emp(i, names[i]).getEmpTable());
        }
    }
    ++count;
    if(count == 5){
        clearInterval(timer)
    }
},1000)




// const timer = {
//     for(let i=0; i<){

//     }
//     if(){

//     }
// }

// timer.timeout(
//     clearInterval(timer)
// )

// const