const container = document.querySelector(".container");

document.querySelector("#upButton").addEventListener("click",()=>{

    const input = document.createElement("input");
    input.type = ("number");
    input.classList.add("numbers");
    
    const x = document.createElement("button")
    x.type = "button"
    x.classList.add("x");
    
    container.append(input,x);
    
    x.addEventListener("click", e=>{
        const x2 = x.previousElementSibling;
        
        x2.remove();
        x.remove();
    });
    
    
    // const a = document.createElement("div");
    // a.classList.add("a");
    

    // x.addEventListener("click", e=>{
    //     const div2 = e.target.parentElement;

    //     div2.remove();
    // })

    // a.append(input,x);
    // container.append(a);


});

document.querySelector("#calButton").addEventListener("click",()=>{
    const numbers = document.querySelectorAll(".numbers");

    let sum = 0;
    
    for(let i = 0; i < numbers.length; i++){
        sum += Number(numbers[i].value);
    }

    alert(sum);
});



/* 
    1. 로딩, 이벤트 발생등 시점에 따라서 선택되는 요소가 달라진다.
    2. x버튼 처럼 새롭게 만들어지는 요소(동적 추가 요소)
       에 이벤트를 추가하는 방법
       -> 만들어지는 시점에 이벤트 추가 코드 작성
*/