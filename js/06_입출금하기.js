// /* prompt 사용 연습 */

// function test(){
//     const password = prompt("비밀번호를 입력하세요");

//     // 확인 -> 입력한 문자열
//     // 취소 -> null

//     if(password == null){
//         alert("cancel");
//     }else{
//         // 입력한 비밀번호가 '1234'가 맞는지 확인
//         if(password == '1234'){
//           alert("비밀번호 일치");
//         }
//         else{
//             alert("비밀번호가 일치하지 않습니다");
//         }
//     }
// }




// 변수 선언 및 대입
// - const amount = [빈칸 작성];  // 금액 입력 input
// - const balance = 10000;       // 잔액 기록 변수 (초기값 10000)
// - const password = '1234';     //비밀번호 저장 변수(초기 비밀번호 1234)


// 함수 작성
// 1. 입금 ->  function deposit(){}
// * 입금 버튼 클릭 시 
//   input에 입력된 금액 만큼 잔액(balance)에 추가

// 2. 출금 ->  function withdrawal(){}
// * 출금 버튼 클릭 시 prompt를 이용해 비밀번호를 입력 받기

// * 비밀번호가 일치할 경우
//   1) 출금할 금액이 잔액(balance) 보다 큰 경우 
//     -> alert("출금 금액이 잔액보다 클 수 없습니다") 출력
  
//   2) 출금할 금액이 잔액(balance) 보다 작거나 같은 경우
//     -> 잔액(balance)에서 출금 금액만큼 감소 시킨 후
//       alert("OOO원이 출금 되었습니다. 남은 잔액 : OOO원") 출력

// * 비밀번호가 일치하지 않을 경우
//   -> alert("비밀번호가 일치하지 않습니다") 출력









let result = document.getElementById("result");
let input = document.getElementById("inMoney");
let balance = 10000;

function deposit(){
    let num1 = Number(input.value);
    balance += num1;
    result.innerText = balance;
}

function withdrawal(){
    let num1 = Number(input.value);
    const password = prompt("비밀번호를 입력")

    if(password != '1234'){
        alert("비밀번호가 일치하지 않습니다.")
    }else{
        if(num1 > balance){
            alert("출금 금액이 잔액보다 클 수 없습니다.")
        }else{
            balance -= num1;
            alert(`${num1}이 출금 되었습니다. 남은 잔액 : ${balance}원`)
        }
    }
    result.innerText = balance;
}
