
const addBtn = document.getElementById('add-btn');
const delBtn = document.getElementById('del-btn');
const editBtn = document.getElementById('edit-btn');
const textArea = document.getElementById('text-area');
const noteBody = document.getElementById('note-body')



function addNote(note) {
    const notes = document.createElement('div')
    notes.classList.add('notes')
    notes.innerHTML = `
    
<div class="notes-page">

    <div class="note-head">
        <button id="del-btn"><i class="fa-solid fa-trash"></i></button>
        <button id="edit-btn"><i class="fa-solid fa-pen-to-square"></i></button>
    </i></div>

    
    <div class="note-body">
        <textarea id="text-area"></textarea>
    </div>

</div>
    
    `
}

function deleteNote();


function editNote();


function addToLS();


function removeFromLS();
