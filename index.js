let form = document.querySelector('#form');
let counterValue = 0;


form.addEventListener('submit',function(event) {
    event.preventDefault()
    counterValue += 1;
    document.querySelector('#output__pre').style.opacity = "0";

    var note = document.querySelector('#input__note--id').value;
    document.querySelector("#output__main").innerHTML += `<div class="output__note">
    <h3>Note ${counterValue}</h3>
    <p>${note}</p>
    BTN
  </div>`

})