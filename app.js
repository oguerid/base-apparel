let input = document.querySelector(".main__email");
let btn = document.querySelector(".main__error-arrow-btn");
let icon = document.querySelector(".main__error-icon");
let respond = document.querySelector(".main__email-incorrect");

function ValidateEmail(inputText) {
  let mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}

btn.addEventListener("click", () => {
  if (ValidateEmail(input)) {
  } else {
    icon.classList.add("main__error-icon--active");
    respond.classList.add("main__email-incorrect--active");
  }
});
