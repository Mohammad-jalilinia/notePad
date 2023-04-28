
// variables

const noteList = document.querySelector('#note-list')



// Event listener

eventListeners();
function eventListeners(){
    document.querySelector('#form').addEventListener("submit",newNote);

    document.querySelector('#note-list').addEventListener("click",removeNote);

    document.addEventListener('DOMContentLoaded',localStorageOnload);
}


// functions

function newNote(e){ // e stands for event !
    e.preventDefault();
    const note = document.querySelector("#note").value;

    const removeBtn = document.createElement('a');
    removeBtn.textContent = ' X '
    removeBtn.className = 'remove-note'

    //console.log(note)
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(note));
    li.appendChild(removeBtn);
   // noteList.innerHTML = li.innerHTML;
    noteList.appendChild(li);

    addNoteToLocalStorage(note);

}

function removeNote(e){
    if(e.target.classList.contains('remove-note')){
        e.target.parentElement.remove(); // parentElement is li that contains X !
    }
}

function addNoteToLocalStorage(note){
    const notes = getNotesFromLocalStorage();
    notes.push(note);
    localStorage.setItem('notes',JSON.stringify(notes))
}

function getNotesFromLocalStorage(){
    let notes;
    let getFromLS = localStorage.getItem('notes');
    if(getFromLS === null){
        notes = [];
    }
    else{
        notes = JSON.parse(getFromLS);  // parse means convert it to array !
    }
    return notes;
}

function localStorageOnload(){
    const notes = getNotesFromLocalStorage();
    for(i in notes){
        const removeBtn = document.createElement('a');
        removeBtn.textContent = ' X '
        removeBtn.className = 'remove-note'

        //console.log(note)
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(note));
        li.appendChild(removeBtn);
        // noteList.innerHTML = li.innerHTML;
        noteList.appendChild(li);
    }
}



