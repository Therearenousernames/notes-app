const notes = document.getElementById('app');
const addButton = notes.querySelector('.add-note');

getNotes().forEach((note) => {
    const noteElement = createNoteElement(note.id, note.content);
    notes.insertBefore(noteElement, addButton);
});

addButton.addEventListener('click', () => addNote());

function getNotes() {
    return JSON.parse(localStorage.getItem('stickynotes-notes') || '[]');
}

function saveNotes(notes) {
    localStorage.setItem('stickynotes-notes', JSON.stringify(notes));
}

function createNoteElement(id, content) {
    const element = document.createElement('textarea');

    element.classList.add('note');
    element.value = content;
    element.placeholder = "Empty Sticky Note";
}