const container = document.querySelector(".container");

document.querySelector("#upButton").addEventListener("click",()=>{
    const input = document.createElement("input");
    input.type = "text";

    const x = document.createElement("button")
    x.type = "button"

    input.classList.add("numbers");
    x.classList.add("x");

    container.append(x);
    container.append(input);
});

document.querySelector("#calButton").addEventListener("click",()=>{
    const numbers = document.querySelectorAll(".numbers");

    let sum = 0;
    
    for(let i = 0; i < numbers.length; i++){
        sum += Number(numbers[i].value);
    }

    alert(sum);
});