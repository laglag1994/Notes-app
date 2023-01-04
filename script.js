const notesContainer=document.getElementById('notes-page');


const addNoteBtn=notesContainer.querySelector('.add-note');
const editBtn=notesContainer.querySelector('.edit-btn');
const delBtn=notesContainer.querySelector('.del-btn');

//retrive all the notes from LS
console.log(getNotes)


function getNotes(){
return JSON.parse(localStorage.getItem('note')|| '[]');
 
}


//save the new notes to LS
function saveNotes (notes){
    localStorage.setItem('note', JSON.stringify(notes))
}

//create new note from HTML
function createNoteElement(id, noteContent){
const element=document.createElement('textarea');
element.classList.add('note-body');
element.value=noteContent;

element.addEventListener('edit',()=>{
updateNote(id, element.value)
});

return element;
}

//add a new note 
function addNote (){

}


//udating notes
function updateNote(id, newNoteContent){

}

//deleting a note
function deleteNote (id, element){

}