// ---------------------------------
let numbers = [0,0]; // 처음 입력받는 수(Number)
let a2 = ""; // 처음 입력받는 수 (화면에 띄우는 String)
let a3 = 0; // 처음 입력받는 수를 임시저장소(Number)
let i = 0; // 입력받을 수 구분하는 수
let word = "";
let totalMiddle = document.getElementById("total"); // 첫 수 화면과 연결

function num(number){
    var conNumber = Number(number);
    numbers[i] += conNumber;
    a2 += conNumber;
    totalMiddle.textContent = a2;
    
}

function middle(sym){
    word = sym;

    if(i == 0){
        i++;
    }

    totalMiddle.textContent = "";
    a2 = "";


}

function result(){

    let sum = 0;
    let total = document.getElementById("total");

    if(word == '+'){
        sum = numbers[0] + numbers[1]; 
    }else if(word == '-'){
        sum = numbers[0] - numbers[1];  
    }else if(word == '*'){
        sum = numbers[0] * numbers[1]; 
    }else if(word == '/'){
        sum = numbers[0] / numbers[1]; 
    }else if(word == '%'){
        sum = numbers[0] % numbers[1]; 
    }
    total.innerText = sum;
}


/* 
    let a;

*/




/* 
    구상중인 방안1)
    일단 숫자 버튼 누르면 String으로 나열시켜서 수를 완성 시켜
    그리고 bottomcontainer > .cal 에 있는 버튼을 누르면 string 초기화
    시키고 지금까지 string 연산자 배열에 넣고 연산자 들어갈 배열 번호
    저장시켜놔
    그리고 
*/