const kan = document.querySelector("#kan");
const win = document.querySelector("#win");
const winButton = document.querySelector(".winButton");
const bingoBox = document.querySelector("#bingoBox");

winButton.addEventListener("click",()=>{
    for(let i = 0; i < kan.value; i++){
        const number2 = document.createElement("div");
        for(let j = 0; j < kan.value; j++){
            const number = document.createElement("div");
            number.classList.add("number");
            number2.append(number);
            // 이제 여기에 난수 생성해서 숫자 넣자
        }
        bingoBox.append(number2);
    }
})