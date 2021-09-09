//티이머 함수
// setTimeout(함수, 시간)//일정 시간 후 함수 실행
// setInterval(함수, 시간)//특정시간마다 실행
// clearTimeout()//설정된 Timeout 함수를 종료
// clearInterval()//설정된 Interval 함수를 종료

//  1/1000 <-- 1초

// setTimeout(() => {
//     console.log('dahye');
// }, 1000)

const timer = setTimeout(() => {
    console.log('kangKang');
}, 1000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
    clearTimeout(timer)
})

// 콜백함수(CallBack) : 함수의 인수로 사용되는 함수
function timeout(call){
    setTimeout(() =>{
        console.log('dahye');
        call()
    },3000)
}

timeout(() => {
    console.log('Done');
})
