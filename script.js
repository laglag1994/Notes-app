const notesContainer=document.getElementById('notes-page');
const addNoteBtn=notesContainer.querySelector('.add-note')

//retrive all the notes from LS

function getNotes(){
return JSON.parse(localStorage.getItem('notes')|| '[]');
}
console.log(getNotes)


//save the new notes to LS
function saveNotes (notes){
     
}

//create new note from HTML
function createNoteElement(id, noteContent){

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