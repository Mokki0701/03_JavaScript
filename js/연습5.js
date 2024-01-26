const kan = document.querySelector("#kan");
const win = document.querySelector("#win");
const winButton = document.querySelector(".winButton");
const bingoBox = document.querySelector("#bingoBox");

winButton.addEventListener("click",()=>{
    const su2 = kan.value;
    const su = kan.value*kan.value;
    const su3 = win.value;

    var bingo = createBingo(su2, su);
    var result = createResult(su3,su2,su);

    for(let i = 0; i < kan.value; i++){
        const number2 = document.createElement("div");
        number2.classList.add("number2");
        for(let j = 0; j < kan.value; j++){
            const number = document.createElement("div");

            number.classList.add("number");

            number2.append(number);
            number.textContent = bingo[i][j];// 이제 여기에 난수 생성해서 숫자 넣자
        }
        bingoBox.append(number2);
    }

    const number = document.querySelectorAll(".number");
    number.addEventListener("click",e=>{
        const count = document.querySelectorAll(".active").length;

        e.target.classList.toggle("active");
    })
    
})

function shuffleArray(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
}

function createBingo(n, n2){ // NxN 빙고
    var numbers = [];
    for(var i = 1; i <= n2; i++){
        numbers.push(i);
    }

    numbers = shuffleArray(numbers);

    var bingo = [];
    var index = 0;
    for(let i = 0; i < n; i++){
        bingo[i] = [];
        for(let j = 0; j < n; j++){
            bingo[i][j] = numbers[index];
            index++;
        }
    }
    return bingo;
}

function createResult(n, n2, n3){ // NxM 정답판
    var numbers = [];
    for(var i = 1; i <= n3; i++){
        numbers.push(i);
    }

    numbers = shuffleArray(numbers);

    var bingo = [];
    var index = 0;
    for(let i = 0; i < n; i++){
        bingo[i] = [];
        for(let j = 0; j < n2; j++){
            bingo[i][j] = numbers[index];
            index++;
        }
    }
    return bingo;
}