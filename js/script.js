console.log("Hello World");

function formValidation() {

    let nameInput = document.getElementById("tap").value;
    console.log(nameInput)
}

document.getElementById("tap").addEventListener("click", formValidation);



// Message form
function submitForm() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const message = document.getElementById('message').value;

    const output = document.getElementById('output');

    if (name && dob && gender && message) {
        output.innerHTML = `<strong>Current time:</strong> ${new Date().toString()}<br><br>` +
                          `<strong>Nama:</strong> ${name}<br>` +
                          `<strong>Tanggal Lahir:</strong> ${dob}<br>` +
                          `<strong>Jenis Kelamin:</strong> ${gender}<br>` +
                          `<strong>Pesan:</strong> ${message}`;
    } else {
        alert('Mohon lengkapi semua data!');
    }
}

// Set current time on load
document.getElementById('currentTime').textContent = new Date().toString();