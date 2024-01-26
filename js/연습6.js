const resName = document.querySelector("#resName");
const nameInput = document.querySelector("#nameInput");
const changeBtn = document.querySelector(".changeBtn");
const overBtn = document.querySelector(".overBtn");
const addBtn = document.querySelector(".addBtn");
const delBtn = document.querySelector(".delBtn");
const midContainer = document.querySelector(".midContainer");


// 상단부

resName.addEventListener("click",()=>{
    nameInput.style.display = "block";
    resName.style.display = "none";
})

nameInput.addEventListener("blur",()=>{
    resName.textContent = nameInput.value;

    console.log(resName.textContent);
    nameInput.style.display = "none";
    resName.style.display = "block";
})

nameInput.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
      // Enter 키를 눌렀을 때
      resName.textContent = nameInput.value;
  
      console.log(resName.textContent);
      nameInput.style.display = "none";
      resName.style.display = "block";
    }
  });

  // ----------------------------------------------------------

  // 중,하단부

  changeBtn.addEventListener("click", ()=>{
    changeBtn.style.display = "none";
    overBtn.style.display = "block";
    addBtn.style.display = "block";
    delBtn.style.display = "block";

    // 메뉴 내용도 바꾸는거 적기
  });

  addBtn.addEventListener("click", e=>{
    const li = document.createElement("li");
    const span = document.createElement("span");
    const input1 = document.createElement("input");
    const input2 = document.createElement("input");

    li.classList.add("menuList");
    span.classList.add("remove");

    li.appendChild(span);
    li.appendChild(input1);
    li.appendChild(input2);

    midContainer.appendChild(li);

    span.addEventListener("click", ()=>{
        if(span.textContent !== "x"){
            span.textContent = "x";
        } else if(span.textContent === "x"){
            span.textContent = "";
        }
    });


    delBtn.addEventListener("click",()=>{
      const x = document.querySelectorAll(".remove");
      for(let i = 0; i < x.length; i++){
          if(x[i].textContent == "x"){
              const parent = x[i].parentElement;
  
              parent.remove();
          }
      }
    });

    overBtn.addEventListener("click",()=>{    
        const menuPan = document.querySelectorAll(".menuList");
        const arr = [];
    
        for(let i = 0; i < menuPan.length; i++){
            arr[i] = [];
            arr[i][0] = menuPan.children[1].value;
            arr[i][1] = menuPan.children[2].value;
            menuPan[i].innerHTML = "";
            console.log(menuPan[i]);
        }

        
        for(let i = 0; i < menuPan.length; i++){
            const li2 = document.createElement("li");
            const span1 = document.createElement("span");
            const span2 = document.createElement("span");
            li2.classList.add("menuList2");
            span1.textContent = arr[i][0];
            span2.textContent = arr[i][1];
            li2.appendChild(span1);
            li2.appendChild(span2);
            midContainer.appendChild(li);
        }
      });

      changeBtn.style.display = "block";
      overBtn.style.display = "none";
      addBtn.style.display = "none";
      delBtn.style.display = "none";
  });

