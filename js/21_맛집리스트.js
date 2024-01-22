function Restuarant(name, address, menu){
    this.name = name;
    this.address = address;
    this.menu = menu.split(", ");

    this.info = function(){

        return `${this.name} / [${this.menu}] / ${this.address}`;
    }
}

/* 전역 변수로 식당을 저장할 배열을 선언 */
const resList = [];

const addBtn = document.querySelector("#addBtn");
const selectBtn = document.querySelector("#selectBtn");
const resName = document.querySelector("#resName");
const resAddress = document.querySelector("#resAddress");
const resMenu = document.querySelector("#resMenu");

addBtn.addEventListener("click", ()=>{

    /* 유효성 검사 */
    // -> 전달된 데이터가 형식, 크기, 작성법 등이 맞는지 검사
    // ex) 입력되 값이 없을 경우
    //     비밀번호 형식이 맞지 않을 경우
    //     입력된 값의 범위가 옳지 않을 경우

    // 빈킨 검사
    if(resName.value.trim().length == 0){
        alert("식당명을 입력해 주세요");
        resName.focus();
        return;
    }
    if(resAddress.value.trim().length == 0){
        alert("주소를 입력해 주세요");
        resName.focus();
        return;
    }
    if(resMenu.value.trim().length == 0){
        alert("메뉴를 입력해 주세요");
        resName.focus();
        return;
    }


    resList.push(new Restuarant(resName.value, resMenu.value, resAddress.value));

    // 이전 input에 작성된 내용 삭제
    resAddress.value = "";
    resMenu.value = "";
    resName.value = "";
    
    alert("추가 성공")

    // 가게명 input 요소에 focus 맞추기
    resName.focus();

});

const printList = document.querySelector("#printList");

selectBtn.addEventListener("click", ()=>{

    printList.innerHTML= "";

    for(let i = 0; i < resList.length; i++){
        const li = document.createElement("li");
        li.innerText = resList[i].info();
        
        printList.append(li);
    }
})


/* 문자열.split("구분자") */
// -> 문자열을 "구분자"로 쪼개서 배열로 반환

