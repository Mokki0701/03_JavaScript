// ---------------------------------
let numbers = ["0","0"]; // 처음 입력받는 수(Number)
let a2 = ""; // 처음 입력받는 수 (화면에 띄우는 String)
let a3 = 0; // 처음 입력받는 수를 임시저장소(Number)
let i = 0; // 입력받을 수 구분하는 수
let word = "";
let totalMiddle = document.getElementById("total"); // 첫 수 화면과 연결
let check = 1;

function num(number){
    check = 1;
    var conNumber = Number(number);
    numbers[i] += number;
    a2 += conNumber;
    totalMiddle.textContent = a2;
}

function middle(sym){
    check = 1;
    word = sym;

    if(i == 0){
        i++;
    }

    if(totalMiddle != ""){
        totalMiddle.textContent = "";
        a2 = "";
    }


}

function result(){
    check = 0;
    let sum = 0;
    let total = document.getElementById("total");

    let num1 = parseInt(numbers[0]);
    let num2 = parseInt(numbers[1]);

    if(word == '+'){
        sum = num1 + num2; 
    }else if(word == '-'){
        sum = num1 - num2;  
    }else if(word == '*'){
        sum = num1 * num2; 
    }else if(word == '/'){
        sum = num1 / num2; 
    }else if(word == '%'){
        sum = num1 % num2; 
    }

    total.innerText = sum;
    numbers[0] = sum; // 계산 후 결과값이 다시 계산되는 첫 요소로 결정
    numbers[1] = 0;
    i = 1; // 만약 지우기가 있다면 if/else if로 다시 처음부터 시작할지 결정
}

function delet(){

    if(check == 0){
        i = 0;
        a2 = "";
        totalMiddle.textContent = a2;
        numbers[0] = 0;
        numbers[1] = 0;
    }
    if(a2 != null){
        a2 = a2.slice(0, -1);
        totalMiddle.textContent = a2;
    }
    if(numbers[i] != null){
        numbers[i] = numbers[i].toString();
        numbers[i] = numbers[i].slice(0,-1);
        numbers[i] = Number(numbers[i]);
    }
    /* 
        1. 입력하는 숫자 지우기
        2. 결과값 지우기
    */
}

/* 
    1. 지우기
    2. 
*/