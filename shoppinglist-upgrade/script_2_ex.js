const list = document.querySelector(".list")
const input = document.querySelector(".footer-input")
const addBtn = document.querySelector(".add-btn")

function onAdd(){
    // 1. 사용자가 입력한 텍스트 받아오기
    const text = input.value;
    if (text === ''){
        input.focus();
        return;
    }
    // 2. 새로운 아이템 만들기 (텍스트 + 삭제)
    const item = createItem(text);
    // 3. list 안에 새로운 아이템 추가하기
    list.appendChild(item);
    // 4. 새로 추가된 아이템 스크롤링
    item.scrollIntoView({
        block : 'center'
    });
    // 5. 인풋 초기화하기
    input.value = '';
    input.focus();
}

let id = 0;
function createItem(text){
    const itemRow = document.createElement("li");
    itemRow.setAttribute("class", "item-row");
    itemRow.setAttribute("data-id", id)
    itemRow.innerHTML = `
        <div class="item" data-id=${id}>
            <span class="item-name">${text}</span>
            <button class="item-delete"><img data-id=${id} src="img/bin.png" alt=""></button>
        </div>
        <div class="divider"></div>
    `

    return itemRow
}

// addBtn.addEventListener("click", () => {
//     onAdd();
// })

// input.addEventListener("keydown", (event) => {
//     if(event.isComposing){
//         return;
//     }
//     // console.log("key")
//     if (event.key === "Enter"){
//         onAdd();
//     }
// })

list.addEventListener("click", (event) => {
    const id = event.target.dataset.id
    if(id){
        const toBeDeleted = document.querySelector(`.item-row[data-id='${id}']`)
        toBeDeleted.remove()
    }

})