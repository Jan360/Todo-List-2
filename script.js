const input = document.querySelector('#input')
const list = document.querySelector('#list')

if(localStorage.getItem('data')){
  list.innerHTML = localStorage.getItem("data")
}

function addTask() {
  if(input.value === ''){
    return
  }else{
    list.innerHTML += `<li>${input.value}<span>${'\u00d7'}</span></li>`
  }
  input.value = ''
  saveData()
}

list.onclick = (e) => {
  if(e.target.tagName === "LI") {
    e.target.classList.toggle("checked")
  }else if(e.target.tagName === "SPAN") {
    e.target.parentElement.remove()
  }
  saveData()
}

function saveData() {
  localStorage.setItem("data", list.innerHTML)
}