const outText = document.querySelector(".outText");
const textSize = document.querySelector(".textSize");
const myvalue = document.querySelector("#textValue");
const outPut = document.querySelector(".outPut");
const textColor = document.querySelector(".textColor");
const bgc = document.querySelector(".bgc");

outText.addEventListener("click",()=>{
    var a = textSize.value;
    myvalue.style.fontSize = a + 'px';
    myvalue.style.backgroundColor = bgc.value;
    myvalue.style.color = textColor.value;

    const textBold = document.querySelector("[name='bold']:checked");
    if (textBold === null) {
        alert("굵기를 선택하세요.");
      } else {
        if (textBold.value === "O") {
          myvalue.style.fontWeight = 'bold';
        } else if (textBold.value === "X") {
          myvalue.style.fontWeight = 'normal';
        }
      }

    const textRow = document.querySelector("[name='row']:checked");
    if(textRow.value === null){
        alert("가로정렬을 선택해주세요");
    } else{
        if(textRow.value == "L") myvalue.style.justifyContent = 'flex-start';
        else if(textRow.value == "M") myvalue.style.justifyContent = 'center';
        else if(textRow.value == "R") myvalue.style.justifyContent = 'flex-end';
    }

    
    const textHeight = document.querySelector("[name='heigh']:checked");
    if(textHeight.value == "T") myvalue.style.alignItems = 'flex-start';
    else if(textHeight.value == "M") myvalue.style.alignItems = 'center';
    else if(textHeight.value == "B") myvalue.style.alignItems = 'flex-end';

    const row1 = document.querySelector(".row");
    const height1 = document.querySelector(".height");

    myvalue.style.width = row1.value + "px";
    
    myvalue.style.height = height1.value + "px";




    myvalue.innerHTML = outPut.value;
})



// 너비 : <input type="text" class="row">px <br>
// 높이 : <input type="text" class="height">px <br>
// 글자크기 : <input type="text" class="textSize">px <br>
// 굵기 : 보통 <input type="radio"  name="middle" value="M"> 굵게 <input type="radio" name="bold" value="bold"> <br>
// 글자색 : <input type="text" class="textColor"> 배경색 : <input type="text" class="bgc"> <br>
// 가로정렬 : 왼쪽 <input type="radio"> 가운데 <input type="radio"> 오른쪽 <input type="radio"> <br>
// 세로정렬 : 위 <input type="radio"> 가운데 <input type="radio"> 아래 <input type="radio"> <br>
// 출력 문자열 : <input type="text" class="outPut"><br>
// <button class="outText">적용하기</button>