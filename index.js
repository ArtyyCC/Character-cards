let characters = [];
let charactersPreview = [];
let displayedObject = 0;
function displayCharacter() {
  let characterContainer = document.getElementById("container");
  for (displayedObject; displayedObject < characters.length; displayedObject++) {
    let characterDiv = document.createElement("div");
    characterDiv.innerHTML = `<div class="preview_gradient_card"><h3>${characters[displayedObject][0]}</h3><p>${characters[displayedObject][1]}</p></div>`;
    characterDiv.classList.add('CharacterCard');
    characterDiv.style.background = "url(" + charactersPreview[displayedObject] + ")";
    characterDiv.style.backgroundSize = `cover`;
    characterContainer.appendChild(characterDiv);
    characterContainer.style.setProperty('--count-anim', `${displayedObject}`);
  }
}

displayCharacter();

function addCharacter() {
  let nameInput = document.getElementById("characterName");
  let classInput = document.getElementById("characterClass");
  let trackImage = document.getElementById('character_file_input');
  if ((nameInput.value !== "" && classInput.value !== "") && (trackImage.value !== "")) {
    let newCharacter = [nameInput.value, classInput.value];
    characters.push(newCharacter);
    addImage();
    displayCharacter();
    nameChange();
    classChange();
    nameInput.value = "";
    classInput.value = "";
  }
}

function addImage() {
  let trackImage = document.getElementById('character_file_input');
    let imageUrl = URL.createObjectURL(trackImage.files[0]);
    charactersPreview.push(imageUrl);
    trackImage.value = "";
}

// custom character block

// find the activation button
const sendingUserCharacter = document.getElementById("addButton");
// call the function that adds the user's character when pressed
sendingUserCharacter.addEventListener("click", addCharacter);

// clear array block
let refreshButton = document.getElementById("refresh_button");
refreshButton.addEventListener("click", clearArray);

function clearArray() {
  let characterContainer = document.getElementById("container");
  characters = [];
  charactersPreview = [];
  characterContainer.innerHTML = '';
  displayedObject = 0;
}




