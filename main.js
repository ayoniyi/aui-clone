const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const formBtn = document.getElementById("formBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
// form.addEventListener("change", () => {
//   alert("typing");
//   checkInputs();
// });
username.addEventListener("change", () => {
  checkInputs();
});
email.addEventListener("change", () => {
  checkInputs();
});

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

const checkInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();

  if (usernameValue !== "" && emailValue !== "") {
    formBtn.classList.add("activeBtn");
    // formBtn.classList.remove()
  } else {
    formBtn.classList.remove("activeBtn");
    // formBtn.classList.add("")
  }
};
