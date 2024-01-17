// break 확인
function check1(){
    for(let i = 1; i <= 10; i++){

        console.log("i : ", i);

        if(i == 5) break;
    }
}

/* 무한 반복하는  while문 멈추기 */
function check2(){
    let i = 1;
    while(true){
        console.log("i : ", i++)

        if(i>10) breakl
    }
}

/* continue 확인하기 */
function check3(){

    /* 1부터 20까지 출력. 단, 3의 배수는 건너뛰기 */
  
    for(let i=1 ; i<=20 ; i++){
  
      // 3의 배수인 경우
      if(i % 3 == 0) continue;
  
      console.log("i : ", i);
    }
  
  }

  function check4(){
    for(let i = 1; i <= 30; i++){
        if(i%2 == 1 || i%10 == 0 ) continue;
        console.log("i : ", i);
    }
  }

    /* 0~9까지 5줄 출력
     - 각 줄에서 4의 배수는 건너뛰기
     - 3번째 줄 출력 후 멈추기
    */
  function check5(){
      for(let i = 1; i <= 5; i++){
        let str = ""
        for(let i2 = 0; i2 <= 9; i2++){
            // 0을 제외한 4의 배수인 경우
            if(i2 != 0 && i2%4 == 0)continue;
            str += i2;
        }
        console.log(str);

        // 3번째 줄 출력 후 멈춤


        if(i == 3) break;
    }
  }

  function gameStart(){
    let val;
    let count = 0;
    let str = "1 ~ 100 숫자를 입력하세요";

    // 1~100 사이 난수
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    while(true){
        let input = prompt(str);
        
        
    // 취소를 누른 경우 -> "게임 포기" 알림을 띄운 뒤 반복 종료


    // 확인을 누른 경우 숫자로 변환
    // NaN (Nat a Number) : "숫자가 아니다" 를 나타내는 값

        if(input === null){
            alert("게임 포기");
            break;
        }
     // NaN인 경우 다시 입력 받도록 하기
    // -> isNaN(변수/값)  : 변수/값이 NaN이면 true, 아니면 false 반환
        input = Number(input);

        if(isNaN(input)){
                alert("숫자만 입력해 주세요");
                continue;
            }
        count++;

        if(input == randomNumber){
                    alert(`정답 !! count : ${count}`);
                    break;
                } 
        if(input > randomNumber){
                    str = `DOWN count : ${count}`;
                } else {
                    str = `UP count : ${count}`;
                }
            }
        }
    
  