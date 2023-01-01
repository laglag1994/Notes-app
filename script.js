const notePage = document.getElementById('.note-page')


//buttons
// const addBtn = document.getElementById('add-btn');
const delBtn = document.querySelector('.del-btn');
const editBtn = document.querySelector('.edit-btn');


const noteBody =document.querySelector('.note-body')
const textArea = document.querySelector('textarea');


textArea.value=text;
noteBody.innerHTML=marked(text)


editBtn.addEventListener('click',()=>{
    notePage.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
    alert(notePage)
});

textArea.addEventListener('input' ,(e) => {
const {value}= e.target;
notePage.innerHTML=marked(value);

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
