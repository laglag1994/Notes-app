

const addNoteBtn = document.querySelector('.add-note');

const baba = document.getElementById('baba-flex');

//get and display notes
getNotes().forEach(note => {
    createNoteElement(note.id, note.noteContent);
});


//retrive all the notes from LS
function getNotes() {
    return JSON.parse(localStorage.getItem('note') || '[]');

}


//save the new notes to LS
function saveNotes(notes) {
    localStorage.setItem('note', JSON.stringify(notes))
}

function oneNote(one) {
    const allNotes = getNotes();
    allNotes.push(one);

    saveNotes(allNotes);
}

//create new note from HTML
function createNoteElement(id, noteContent) {

    const notepage = document.createElement("div");
    notepage.classList.add("notes-page");

    const noteHead = document.createElement('div');
    noteHead.classList.add("note-head");

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");


    const delBtn = document.createElement("button");
    editBtn.classList.add("del-btn");

    const delIcon = document.createElement("i");
    delIcon.classList.add("fa-solid", "fa-trash");

    const editIcon = document.createElement("i");
    editIcon.classList.add("fa-solid", "fa-pen-to-square")

    const element = document.createElement('textarea');
    element.classList.add('note-body');
    element.value = noteContent;

    editBtn.addEventListener('click', () => {
        updateNote(id, element.value)
    });

    delBtn.addEventListener('click', () => {
        deleteNote(id, notepage);
    })


    delBtn.append(delIcon)
    editBtn.append(editIcon)
    noteHead.append(editBtn)
    noteHead.append(delBtn)
    notepage.append(noteHead)
    notepage.append(element)
    baba.append(notepage)



    return element;

}

//add a new note 
function addNote() {
    const id = Math.round(Math.random() * 10000)
    createNoteElement(id, '')
    const one = {
        content: "",
        id
    };
    oneNote(one);
}


//udating notes
function updateNote(id, newNoteContent) {


}

//deleting a note
function deleteNote(id, element) {
    element.remove();
    const allNotes = getNotes().filter(note => {
        if (note.id == id) {
            return false
        }
        return true
    })

    saveNotes(allNotes);

}