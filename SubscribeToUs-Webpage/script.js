let nameEl = document.getElementById("name");
let nameErrorEl = document.getElementById("nameErrMsg");
let emailEl = document.getElementById("email");
let emailErrorEl = document.getElementById("emailErrMsg");
let subscribeFormEl = document.getElementById("subscribeForm");
let errorMsg = "Required*";

nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrorEl.textContent = errorMsg;
    } else {
        nameErrorEl.textContent = "";
    }
});

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrorEl.textContent = errorMsg;
    } else {
        emailErrorEl.textContent = "";
    }
});

subscribeFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
})
