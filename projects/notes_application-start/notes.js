let notes;

if (localStorage.getItem("notes") === null) {
  notes = [];
} else {
  notes = JSON.parse(localStorage.getItem("notes"));
}

//call display notes to see the notes
displayNotes();

//selectors and event listeners
const deleteAllBtn = document.querySelector("#deleteNotes");
deleteAllBtn.addEventListener("click", deleteNotes);
const filterField = document.querySelector(".filter");
filterField.addEventListener("click", () => (filterField.value = ""));
const saveBtn = document.querySelector(".add-note");
saveBtn.addEventListener("click", grabNote);
const exportBTN = document.querySelector("#exportBtn");
const importBTN = document.querySelector("#importBtn");
exportBTN.addEventListener("click", exportNotes);
importBTN.addEventListener("click", importNotes);

/*
 * Deletes a note
 */
const deleteNote = (e) => {};

/*
 * saves note after edit
 */
const saveNote = (e) => {};

/*
 * Allows note editing
 */
const editNote = (e) => {};

/*
 * Grabs notes from localStorage
 * API and displays them to UI
 */
function displayNotes() {}

/*
 * Filters notes by title/date
 */
const filter = () => {};

/*
 * Delete all notes
 */
function deleteNotes() {}

/*
 * Grabs user note and saves to localStorage API
 */
function grabNote(e) {}

/*
 * Export  notes as JSON
 */

function exportNotes() {}

/*
 * Import JSON with  notes
 */
function importNotes(e) {}
