function openPage(page) {
    document.querySelector(".menu").classList.remove("active");
    document.getElementById(page + "Page").classList.add("active");
}

function goBack() {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.querySelector(".menu").classList.add("active");
}

document.getElementById("regForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let age = document.getElementById("age").value.trim();
    let dept = document.getElementById("dept").value.trim();
    let msg = document.getElementById("msg");

    let namePattern = /^[A-Za-z\s]+$/;
    let phonePattern = /^\d{10}$/;
    let emailPattern = /^[A-Za-z]{2}\d{4}@srmist\.edu\.in$/;

    if (!namePattern.test(name)) {
        msg.style.color = "red";
        msg.innerText = "Invalid Name";
        return;
    }
    if (!phonePattern.test(phone)) {
        msg.style.color = "red";
        msg.innerText = "Invalid Phone Number";
        return;
    }
    if (!emailPattern.test(email)) {
        msg.style.color = "red";
        msg.innerText = "Invalid Email";
        return;
    }
    if (age === "" || age <= 0) {
        msg.style.color = "red";
        msg.innerText = "Enter valid age";
        return;
    }
    if (dept === "") {
        msg.style.color = "red";
        msg.innerText = "Select department";
        return;
    }

    msg.style.color = "green";
    msg.innerText = "Form Submitted Successfully!";
});