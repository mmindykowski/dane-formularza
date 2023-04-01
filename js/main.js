let firstName = document.getElementById('name');

let myButton = document.getElementById('guzik');

let surname = document.getElementById('surname');

let phoneNumber = document.getElementById('phone');




document.getElementById('guzik').onclick = function() {
    firstName.textContent = fname.value;
    surname.textContent = sname.value;
    phoneNumber.textContent = phone1.value;
}

