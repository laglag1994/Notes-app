const notePage = document.getElementById('.note-page')


//buttons
const addBtn = document.getElementById('add-btn');
const delBtn = document.querySelector('.del-btn');
const editBtn = document.querySelector('.edit-btn');


const noteBody =notePage.querySelector('.note-body')
const textArea = notePage.querySelector('text-area');



editBtn.addEventListener('click',()=>{
    notePage.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
});

textArea.addEventListener('input' ,(e) => {
const {value}= e.target;
noteBody.innerHTML=marked(value);

console.log(textArea)
})






function addNote(note) {

}

function deleteNote(){

}


function editNote(){

}


function addToLS(){

}


function removeFromLS(){

}
