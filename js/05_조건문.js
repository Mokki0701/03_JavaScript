/* if - 양수인지 검사 */
function check1(){
    const num1 = document.getElementById("input1");
    const value = num1.value;

    if(value > 0){ // value가 0보다 커서 true인 경우
        alert("양수 입니다.");
    }

    // value가 0보다 작거나 같아서 true인 경우
    // -> value가 양수가 아닌경우
    if(value <= 0){ 
        alert("양수가 아닙니다.");
    }    
}


/* if - else -> 홀/짝 판별하기 */
function check2(){

    // 난수 발생 : Math.random()
    // 난수 범위 : 0 <= Math.random() < 1
    // Math.floor(Math.random()*101) : 0 ~ 100 사이의 난수 발생

    const randomNum = Math.floor(Math.random()*101);

    if(randomNum%2 == 0){
        alert(`${randomNum} 은/는 짝수 입니다`);
        console.log(randomNum);
    }
    else{
        alert(`${randomNum} 은/는 홀수 입니다`);
        console.log(randomNum);
    }
}

function check3(){
    const ranNum = Math.floor(Math.random()*7) - 3;

    let message = ranNum + "은/는 ";

    if(ranNum > 0){
        message += "양수입니다.";
    }
    else if(ranNum == 0){
        message += "0입니다.";
        
    }
    else{
        message += "음수입니다.";
    }
    alert(message);
}

function check4(){
    const age = document.getElementById("inputAge");
    const value1 = age.value;

    /* 빈 문자열 ("", '') : 내용이 없는 문자열 */

    /*  "문자열".length : 문자열의 길이*/

    // 입력된 나이의 길이가 0인 경우 == 입력 안한 경우
    if(inputAge.value.length == 0){
        alert("미입력");
    } else{
        if(0 > value1 || 150 < value1){
            alert("잘못 입력 하셨습니다");
        }
    
        else if(0 <= value1 && value1 <= 13){
            alert("어린이");
        } else if(value1 <= 19){
            alert("청소년");
        }
        else{
            alert("성인");
        }
    }
}



// 나이를 입력 받아
// 0세 ~ 13세 : 어린이
// 14세 ~ 19세 : 청소년
// 20세 ~ 150세 : 성인
// 0 미만 150초과 : 잘못 입력 하셨습니다
// 미입력 : 값을 입력해주세여



/* switch문을 이용한 계산기 */

function calc(op){

    // 매개변수(Parameter) op
    // - 함수 호출 시 전달되는 값을 저장하는 변수

    // ex) calc('+') // 함수 호출
    // '+' 값이 op 변수에 저장되어짐

    const num1 = document.getElementById("number1"); // input
    const num2 = document.getElementById("number2"); // input
    const calcResult = document.getElementById("calcResult"); // span

    const v1 = Number(num1.value);
    const v2 = Number(num2.value);

    /* switch 버전 */

    // switch(식) 에서 식은
    // "식" 은 다양한 값이 나타날 수 있는 변수 또는 계산식
    let result;

    switch(op){

        /* op 값에 따른 처리 case 작성 */

        /* break(멈추다) : switch문을 멈춤
      -> case에 break;를 작성하지 않으면
        멈추지 않고 다음 case로 넘어가진다!!!
    */

        case '+': result = v1 + v2; break;
        
        case '-': result = v1 - v2; break;
        
        case '*': result = v1 * v2; break;
        
        case '/': result = v1 / v2; break;
        
        case '%': result = v1 % v2; break;
        
        /* 맞는 case가 없을 경우에 적용할 기본값 (else) */
        default : result = "잘못된 연산자"; break;
        
    }
    console.log(typeof result);
    calcResult.innerText = result;
}


    // if문 버전
    // op가 '+'인 경우
    // if(op == '+'){  // op가 '+'인 경우
    //     calcResult.innerText = v1 + v2;
    //   } else if(op == '-'){ // op가 '-' 경우
    //     calcResult.innerText = v1 - v2;
    //   } else if(op == '*'){
    //     calcResult.innerText = v1 * v2;
    //   } else if(op == '/'){
    //     calcResult.innerText = v1 / v2;
    //   } else if(op == '%'){
    //     calcResult.innerText = v1 % v2;
    //   } else{
    //     calcResult.innerText = "잘못된 연산자";
    //   }

