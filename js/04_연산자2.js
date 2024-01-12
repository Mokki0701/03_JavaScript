/* 두 수가 같은지 비교 */
const cv1 = document.getElementById("compareValue1");
const cv2 = document.getElementById("compareValue2");
const result1 = document.getElementById("result1");

function compareFn1(){
    const v1 = cv1.value;
    const v2 = cv2.value;
    
    result1.innerText = v1 == v2;
}

const num1 = document.getElementById("compareVal1");
const num2 = document.getElementById("compareVal2");
const res1 = document.getElementById("res1");

function bigFn(){

    // 문자열 비교 시 원하는 결과가 출력되지 않음!
    // -> 숫자로 변환
    const v1 = Number(num1.value);
    const v2 = Number(num2.value);

    console.log(v1, v2 , typeof v1, typeof v2);

    res1.innerText = v1 > v2;
}

/* 배수 확인 */

const num3 = document.getElementById("input1");
const num4 = document.getElementById("input2");
const result3 = document.getElementById("result3");

function checkFn3(){
    const v1 = Number(num3.value);
    const v2 = Number(num4.value);

    /* A가 B의 배수 == A를 B로 나눴을 때 나머지가 0 */
    // result3.innerText = v1 + "은/는 "+ v2 +"의 배수 : " + (v1 % v2 == 0)  ;

    /* 백틱(`)을 이용한 문자열 작성하기 */

    // - 문자열 전체를 백틸(`)으로 감싼 후
    //   변수, 연산결과 등이 출력되는 자리에
    //   ${변수명} 또는 ${연산식} 을 작성 

    result3.innerText = `${v1}은/는 ${v2}의 배수 : ${v1 % v2 == 0}`;
}

let count = 0;

const num5 = document.getElementById("su1");
const result4 = document.getElementById("result4");

function minus4(){
    const v1 = Number(num5.value);
    count -= v1;
    result4.innerText = count;
}

function plus4(){
    const v1 = Number(num5.value);
    count += v1;
    result4.innerText = count;
}

function checkFn5(){

    const bool1 = (104 >= 100) && (104%2) ==0;
    const bool2 = (50 <= 70) && (50%4 == 0);
    const bool3 = (3 > 1) && (3 < 10);
    console.log(`104는 100 이상의 수 이면서, 짝수인가? ${bool1}`);
    console.log(`50은 70 이하이고, 4의 배수인가? ${bool2}`);
    console.log(`30은 1부터 10사이의 수가 맞는가? ${bool3}`);
    
    //-----------------------------------------------------------
    const bool4 = (4>10) || (4%2 == 0);
    const bool5 = (50 <= 0) || (50 >=40);
    console.log(`4는 10을 초과 하거나, 짝수인가? ${bool4}`);
    console.log(`50은 0 이하 또는 40 이상인가? ${bool5}`);

   //-----------------------------------------------------------

   console.log(`!true = ${!true}`); // false
   console.log(`!false = ${!false}`); // true

   const bool6 = false;
   console.log(!(bool6 != true)); // false
}



/* - ex) 104는 100 이상의 수 이면서, 짝수인가?
- ex) 50은 70 이하이고, 4의 배수인가?
- ex) 30은 1부터 10사이의 수가 맞는가? */

/* - ex) 4는 10을 초과 하거나, 짝수인가?
- ex) 50은 0 이하 또는 40 이상인가? */

function login(){
    const v1 = document.getElementById("inputID");
    const v2 = document.getElementById("inputPW");

    const id = v1.value;
    const pw = v2.value;

    const success = "로그인 성공!";
    const fail = "아이디 또는 비밀번호가 일치하지 않습니다.";

    const message = (id == 'member01') && (pw == 'pass01!') ? success : fail;


    alert(message);
}

