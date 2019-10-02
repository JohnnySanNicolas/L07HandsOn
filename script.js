function regexChecker() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let nameRegex = /^[A-Z][a-zA-Z]+$/;
    if (firstName.match(nameRegex) && lastName.match(nameRegex)) {
        alert('Yay, your inputs were all correct!');
        console.log(true);
    }
    else {
        alert('Oh No! Thats an invalid format.');
        console.log(false);
    }
}