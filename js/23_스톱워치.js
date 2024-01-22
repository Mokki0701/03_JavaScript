const display = document.querySelector("#display");
const list = document.querySelectorAll("#display > span");
const startBtn = document.querySelector("#startBtn");
const recordBtn = document.querySelector("#recordBtn");
const resetBtn = document.querySelector("#resetBtn");
const recordContainer = document.querySelector("#recordContainer");

let count = 0; // 1/100 초마다 1씩 증가한 값을 저장할 변수
// 1/100 초자리 : count % 100
// 1초          : count / 100 %60
// 1분          : count / 100 / 60
let currInterval;

let abc = 0;

startBtn.addEventListener("click",e=>{

    if(abc == 0){
        currInterval = window.setInterval(()=>{
            count++;
            // document.querySelectorAll("#display > span")[2].innerText = count%100;
            output();
        },10);
        abc++;
    }
    else if(abc == 1){
        window.clearInterval(currInterval);
        output();
        abc--;
    }


        
        
    
    


})


/* 시계 출력 함수 */
function output(){
    let minute = Math.floor(((count / 100) / 60));
    let second = Math.floor((count / 100) %60);
    let ms = count % 100;

    // 0 붙여서 문자열로 변환해서 반환
    minute = attachZero(minute);
    second = attachZero(second);
    ms = attachZero(ms);

    // minute의 값과 화면에 출력된분이 다를 경우
    if(list[0].innerText != minute) list[0].innerText = minute;

    // second의 값과 화면에 출력된 초가 다를 경우
    if(list[1].innertext != second) list[1].innerText = second;
    list[2].innerText = ms;

    // console.log(minute,second,ms);
}

/* 한 자리 숫자인 경우 앞에 0붙여서 반환하는 함수 */
function attachZero(num){
    if(num < 10){ //한자리수
        return "0"+num;
    }

    return "" + num;
}

/* RESET 버튼이 클릭 되었을 때 */
resetBtn.addEventListener("click", ()=>{

    // currInterval 제거
    window.clearInterval(currInterval);

    count = 0;
    output();

    startBtn.disabled = false;
})