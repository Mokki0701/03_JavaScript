function check1(){

    let result = "";
    for(let num = 1; num <= 5  ; num++){
        result += num; 
    }

    console.log("resilt : ", result);
}

function check2(){
    // 1부터 10까지 출력하기

    for(let num = 1; num <= 10; num++){
        console.log("num : ",num);
    }
}

function check3(){
    for(let num = 1; num <= 20; num++){
        console.log("num : ",num);
    }
}

function check4(){
    for(let num = 5; num <= 15; num++){
        console.log("num : ",num);
    }
}

function check5(){
    for(let num = 1; num <= 30; num += 2){
        console.log("num : ", num);
    }
}

function check6(){
    let sum = 0; // 합계를 저장하기 위한 변수
    // 0을 대입한 이유 : 0은 더해도 아무런 영향이 없기 때문에 

    for(let num = 1; num <= 10; num++){
        sum += num;
    }
    console.log("sum : ", sum); // 55

}



function sumFn(){
    const result = document.getElementById("result1");
    let sum = 0

    let start = Number(document.getElementById("inputNumber1-1").value);
    const end = Number(document.getElementById("inputNumber1-2").value);

    for(start; start <= end; start++){
        sum += start;
    }

    result.innerText = sum;
}

function executeFn2 (){
    const start = Number(document.getElementById("inputNumber2-1").value);
    const end   = Number(document.getElementById("inputNumber2-2").value);
    
    // 증가값
    const val   = Number(document.getElementById("inputNumber2-3").value);
  
    // 결과 출력할 ul 요소
    const ul = document.getElementById("result2");
    let ul2 = document.getElementById("result2");
  
    ul.innerHTML = ""; // 이전 ul에 작성된 내용을 모두 삭제

    /* start 부터 end 까지 val 씩 증가 */
    for(let num = start ; num <= end ; num += val){
  
      // ul 요소 내부에 li 요소를 누적
/*       ul.innerHTML += `<li>${num}</li>`; */

      ul2.innerText += num;
    }
  
  }

  function check7(){
    for(let num = 1; num <= 9; num++){
        console.log(`2 x ${num} = ${2*num}`);
    }
}

function executeFn3(){
    const num1 = Number(document.getElementById("input3").value);
    
    const result3 = document.getElementById("result3");
    
    result3.innerHTML = "";

    /* 입력 받은 단이 2 ~ 9 사이가 아닐 경우
        "2~9 사이만 입력해 주세요" 알림창 띄우기
    */
    if(num1 <= 1 || num1 >= 10){
        alert("2~9 사이만 입력해 주세요");

        return; // 함수를 종료하고 호출한 곳으로 돌아감
                // (지금은 함수 종료 정도로만 인식)
    }
    for(let num = 1; num <= 9; num++){
        result3.innerHTML += `<li>${num*num1}</li>`;
        console.log(`${num*num1}'`);
    }


  }
  
  function executeFn4(){
    const input = Number(document.getElementById("input4").value);
    const output = document.getElementById("output4").value;
    const result = document.getElementById("result4");

    let str = "";

    for(let x = 1; x <= 50; x++){
        if(x%input == 0){ // x가 input의 배수인 경우
            str += output + " ";
        } else{
            str += x + " ";            
        }

        if(x%10 == 0){
            str += "<br>";
        }

    }

    result.innerHTML = str;
  }

  function check8(){
      for(let num1 = 1; num1 <= 4; num1++){
        let str = "";
        for(let num2 = 1; num2 <= 5; num2++){
            str += num2;
        }
        console.log(str); 
    }
  }

  function check9(){
    for(let x = 1; x <= 5; x++){
        let str = "";
        for(let y = 1; y <= x; y++){
            str += y;
        }
        console.log(str);
    }
  }



// 요소.innerText "문자열";      ul.innerHTML  = " ";
// -> 요소의 내용으로 문자열을 대입
//    (HTML 태그를 해석하지 않고 그대로 보여줌)


// 요소.innerHTML = "<h2>문자열</h2>"
// -> 요소의 내용으로 준자열을 대입
//    (HTML 태그를 해석해서 화면에 출력)