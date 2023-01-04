const notesContainer = document.getElementById('notes-page');


const addNoteBtn = notesContainer.querySelector('.add-note');
const editBtn = notesContainer.querySelector('.edit-btn');
const delBtn = notesContainer.querySelector('.del-btn');


//get notes and display
getNotes().forEach(note => {
    const noteEl = createNoteElement(note.id, note.noteContent);
    
});


//retrive all the notes from LS
function getNotes() {
    return JSON.parse(localStorage.getItem('note') || '[]');

}


//save the new notes to LS
function saveNotes(notes) {
    localStorage.setItem('note', JSON.stringify(notes))
}

//create new note from HTML
function createNoteElement(id, noteContent) {
    const element = document.createElement('textarea');


    

    element.classList.add('note-body');
    element.value = noteContent;

    editBtn.addEventListener('click', () => {
        updateNote(id, element.value)
    });

    delBtn.addEventListener('click', () => {
        deleteNote(id, element);
    })

    return element;
}

//add a new note 
function addNote() {

}


//udating notes
function updateNote(id, newNoteContent) {
    console.log('update note')
    console.log(id, newNoteContent)

}

//deleting a note
function deleteNote(id, element) {
    console.log('delete note')
    console.log(id, newNoteContent)
}