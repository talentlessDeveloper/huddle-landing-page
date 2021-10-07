const form = document.querySelector(".form");
const email = document.querySelector("#email");
const error = document.querySelector(".error");
const success = document.querySelector(".success");
const submit = document.querySelector("#submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
});

function validate() {
  let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let value = email.value.trim();
  //error
  if (!value.match(emailFormat)) {
    success.classList.add("hide");
    error.classList.remove("hide");
  } // success
  else {
    error.classList.add("hide");
    success.classList.remove("hide");
    email.value = "";
  }
}

// inline validation

// const formInput = document.querySelector(".form__input");

// email.addEventListener("input", () => {
//   let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   let value = email.value.trim();
//   if (!value.match(emailFormat)) {
//     formInput.classList.remove("border-success");
//     formInput.classList.add("border-error");
//   } else {
//     formInput.classList.add("border-success");
//     formInput.classList.remove("border-error");
//   }
// });
