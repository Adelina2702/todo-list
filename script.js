let input = document.querySelector('.input-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks')

//  Добавление кнопки 'отключено'


input.addEventListener('keyup', () => {
    if(input.value.trim() != 0){
        addBtn.classList.add('active')
    }else{
        addBtn.classList.remove('active')
    }
})


// Добавление нового элемента в список 

addBtn.addEventListener('click', () => {
    if(input.value.trim() != 0){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p> ${input.value} </p>
        <div class="item-btn">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-trash-can"></i>
            <i class="fa-solid fa-square-check"></i>
        </div>
        `
        tasks.appendChild(newItem);
        input.value = ' ';
        console.log(input.value)
    }else{
        alert('Пожалуйста, введите вашу задачу')
    }
})


// Изменение элемента


tasks.addEventListener('click', (newItem) => {
    if(newItem.classList.contains('fa-pen-to-square')) {
        newItem.classList.remove(`${input.value}`)
        newItem.parentElement.parentElement.focus()
    } else{
        newItem.set(`${input.value}, ${input.value}`)
        newItem.classList.contains('fa-pen-to-square')
    }
})
 


// Удаления нового элемента из списка


tasks.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-trash-can')) {
        e.target.parentElement.parentElement.remove()

    }
})


// Пометить как выполнено

tasks.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-square-check')
    ) {
        e.target.parentElement.parentElement.classList.toggle('completed');

    }
})


