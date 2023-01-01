
const addBtn = document.getElementById('add-btn');
const delBtn = document.getElementById('del-btn');
const editBtn = document.getElementById('edit-btn');
const textArea = document.getElementById('text-area');
const noteBody = document.getElementById('note-body')



function addNote(note) {
    const notes = document.createElement('div')
    notes.classList.add('note-body')
    notes.innerHTML = `
    
    <div class="note-body" id="note-body">
    <textarea id="text-area">${textArea}</textarea>
    </div>
    
    `
}

function deleteNote();


function editNote();


function addToLS();


function removeFromLS();
