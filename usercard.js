let btn = document.getElementById('btn');
let phoneno = document.getElementById('phonenumber');
let notify = document.getElementById('notification');

const click = btn.addEventListener('click', () => {
    btn.classList.toggle('btn');
    phoneno.classList.toggle('phoneno');
    btn.classList.remove('animation');
    notify.style.visibility = "hidden";

});