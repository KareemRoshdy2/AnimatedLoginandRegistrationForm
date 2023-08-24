const loginForm = document.querySelector("#loginForm");
const loginHeading = document.querySelector("#loginHeading");
const signUpHeading = document.querySelector("#signUpHeading");

loginHeading.addEventListener("click", () => {
  loginForm.classList.add("open");
});

signUpHeading.addEventListener("click", () => {
  loginForm.classList.remove("open");
});
