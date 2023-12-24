const trackName = document.getElementById("characterName");
trackName.addEventListener('change', nameChange);

function nameChange() {
  let trackNameInput = document.getElementById("characterName");
  if ((trackNameInput.value).length > 0) {
    document.getElementById("CharacterNamePreview").textContent = `${trackNameInput.value}`;
  }
  else {
    document.getElementById("CharacterNamePreview").textContent = "Name";
  }
  
}

const trackClass = document.getElementById("characterClass");
trackClass.addEventListener('change', classChange);

function classChange(){
  let trackClassInput = document.getElementById("characterClass");
  if ((trackClassInput.value).length > 0) {
    document.getElementById("CharacterClassPreview").textContent = `${trackClassInput.value}`;
  }
  else {
    document.getElementById("CharacterClassPreview").textContent = "Class";
  }
}
// do not touch magic code here
// I don't know how it works, but it works.
let trackImagePreview = document.getElementById('character_file_input');
trackImagePreview.addEventListener('change', imageChangePreview); 
function imageChangePreview(event) {
  let image = URL.createObjectURL(event.target.files[0]);
  let characterAvater = document.getElementById("character_preview");
  characterAvater.style.background = "url(" + image + ")";
  characterAvater.style.backgroundSize = "cover";
}




