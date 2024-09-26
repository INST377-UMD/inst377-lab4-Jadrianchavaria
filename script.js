let isBlue = true;

function alertMe() {
    const name = document.getElementById('nameInput').value;
    alert(`Hi ${name}!`);
}

function changeColor() {
    document.body.style.backgroundColor = isBlue ? 'green' : 'blue';
    isBlue = !isBlue;
}

function validateText() {
    const text = document.getElementById('textInput').value;
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(text)) {
        alert('Special character detected!');
    } else {
        alert('Text is valid.');
    }
}

function addText() {
    const title = document.getElementById('pageTitle');
    title.innerHTML += ' Add Text';
}
