let bookmarkForm = document.getElementById("bookmarkForm");
let siteNameInput = document.getElementById("siteNameInput");
let siteUrlInput = document.getElementById("siteUrlInput");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let submitBtn = document.getElementById("submitBtn");
let bookmarksList = document.getElementById("bookmarksList");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");

function addBookmark() {
    let siteName = siteNameInput.value;
    let siteURL = siteUrlInput.value;
    let listItem = document.createElement("li");
    bookmarksList.appendChild(listItem);
    let bookmarkName = document.createElement("p");
    let bookmarkUrl = document.createElement("a");
    bookmarkName.textContent = siteName;
    bookmarkUrl.textContent = siteURL;
    bookmarkUrl.href = siteURL;
    bookmarkUrl.setAttribute("target", "_blank");
    bookmarksList.classList.toggle("d-none");
    listItem.appendChild(bookmarkName);
    listItem.appendChild(bookmarkUrl);

}

siteUrlInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsg.textContent = "Required";
    } else {
        siteUrlErrMsg.textContent = "";
    }
});


siteNameInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsg.textContent = "Required";
    } else {
        siteNameErrMsg.textContent = "";
    }
});

bookmarkForm.addEventListener("submit", function(event) {
    event.preventDefault();
    addBookmark();
});
