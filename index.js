
const incrementBtn = document.getElementById("increment-btn")
const decrementBtn = document.getElementById("decrement-btn")
const saveBtn = document.getElementById("save-btn")
const saveEl = document.getElementById("save-el")
const clearBtn = document.getElementById("clear-btn")
const countEl = document.getElementById("count-el")
let count = 0
 

incrementBtn.onclick = increment
decrementBtn.onclick = decrement
saveBtn.onclick = save
clearBtn.onclick = clear


function increment() {
    count ++
    countEl.textContent = count
}

function decrement(){
    if(count > 0){
        count --
        countEl.textContent = count   
    }
    
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function clear(){
    let countStr = "Previous entries: "
    saveEl.textContent = countStr
}

