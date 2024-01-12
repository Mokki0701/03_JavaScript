// ---------------------------------
let i = 0;
let k = 0;
let strNum = Array(101).fill(0);
let strCal = Array(101).fill(0);

function num(c){
    str[i] += c;
}

function cal(a){
    i++;
    strCal[k] = a;
}

function result(){
    let numbers = str.map((value) => Number(value));
    
}




/* 
    구상중인 방안1)
    일단 숫자 버튼 누르면 String으로 나열시켜서 수를 완성 시켜
    그리고 bottomcontainer > .cal 에 있는 버튼을 누르면 string 초기화
    시키고 지금까지 string 연산자 배열에 넣고 연산자 들어갈 배열 번호
    저장시켜놔
    그리고 
*/