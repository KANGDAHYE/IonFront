function guguFunc(params) {
    for(let i=2; i<=9; i++){
        document.write("<div>")
        document.write("<div class = 'dan'>" + i + "단</div>")
        
        for(let j=1; j<=9; j++){
            document.write(i + "x" + j + "=" + i*j + "<br>")
        }
        document.write("<br>")
        document.write("<div>")
    }
}
function oddEven(){
    let num = Number(prompt('숫자 입력해봐', ))
    if(num % 2 == 0){
        num += 77;
    }else{
        num += 55;
    }
    document.write(num);
}

function line() {
    document.write('-------------<br>')
}

function inputNum(){
    let num = Number(prompt('숫자?', ))
    document.write(num*2)
}

function doubleFunc(data) {
    
}



