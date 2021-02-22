let myList = document.querySelector('.todo-list')
let myInp = document.querySelector('.input1')

let addTodo = (e) => {
    if (e.keyCode == 13) {
        // Ma div
        let newDiv = document.createElement('div');
        newDiv.classList.add('todo')
        // Ma liste
        let newList = document.createElement('li')
        newList.innerText = myInp.value
        newList.classList.add('todo-item')
        newDiv.appendChild(newList)
        // bouton de check
        let checkBtn = document.createElement('button');
        checkBtn.innerHTML = '<i class="fas fa-check"></i>';
        checkBtn.classList.add('check-btn')
        newDiv.appendChild(checkBtn)
        // bouton de supprimer
        let suprBtn = document.createElement('button');
        suprBtn.innerHTML = '<i class="fas fa-trash"></i>';
        suprBtn.classList.add('supr-btn')
        newDiv.appendChild(suprBtn)
        // bouton modif
        let modif = document.createElement('button');
        modif.classList.add('modifTache')
        modif.innerHTML = '<i class="pen fas fa-edit"></i>'
        newDiv.appendChild(modif);
        // liste 
        myList.appendChild(newDiv)
        // effacer ce qui est dans l'input
        myInp.value = ''
    }
}