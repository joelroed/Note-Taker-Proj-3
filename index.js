let form = document.querySelector('#form');
let counterValue = 0;






form.addEventListener('submit',function(event) {
    event.preventDefault()
    counterValue += 1;
    document.querySelector('#output__pre').style.opacity = "0";

    var note = document.querySelector('#input__note--id').value;
    document.querySelector("#output__main").innerHTML += `<div class="output__wrapper"><div class="output__note">
    <h3 class="output__note--title">Note ${counterValue}</h3>
    <p class="output__note--act">${note}</p>
    <div>
    <button class="button open-button"> View Details </button>
    </div>
    <dialog class="modal" id="modal">${note}</dialog>
  </div>
  </div>
  `

})

