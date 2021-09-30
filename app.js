const privateIdentity = document.querySelector("#privateIdentity");
const publicIdentity = document.querySelector("#publicIdentity");
const password = document.querySelector("#password");
const realm = document.querySelector("#realm");
const madatory = document.querySelector("#madatory");
const forbidden = document.querySelector("#forbidden");
const logIn = document.querySelector("#logIn");
const header = document.querySelector("#header");
const title = document.querySelector("#title");
const bg = document.querySelector("#bg");
const telephoneInput = document.querySelector("#telephoneInput");
const phoneHold = document.querySelector("#phoneHold");
const holdLabel = document.querySelector("#holdLabel");
const microphone = document.querySelector("#microphone");
const call = document.querySelector("#call");
const end_call = document.querySelector("#end-call");
const phoneContainer = document.querySelector("#phoneContainer");
const clearInput = document.querySelector("#clearInput");
const formContainer = document.querySelector("#formContainer");
const logOut = document.querySelector("#logOut");

document.addEventListener("DOMContentLoaded", () => {
  const privateIdentityLS = localStorage.getItem("privateIdentity");
  const publicIdentityLS = localStorage.getItem("publicIdentity");
  const realmLS = localStorage.getItem("realm");
  const passwordLS = localStorage.getItem("password");
  privateIdentity.value = privateIdentityLS;
  publicIdentity.value = publicIdentityLS;
  realm.value = realmLS;
  password.value = passwordLS;
});

logIn.addEventListener("click", () => {
  if (
    privateIdentity.value === "" ||
    publicIdentity.value === "" ||
    realm.value === ""
  ) {
    title.textContent = "Please fill madatory fields (*)";
    title.className = "text-red-600 ";
  } else if (password.value === "") {
    title.textContent = "Forbidden";
    title.className = "text-red-600 ";
  } else {
    title.textContent = "Connect";
    title.className = "text-green-600 ";
    logIn.setAttribute("disabled", "");
    localStorage.setItem("privateIdentity", privateIdentity.value);
    localStorage.setItem("publicIdentity", publicIdentity.value);
    localStorage.setItem("realm", realm.value);
    localStorage.setItem("password", password.value);
    phoneContainer.classList.remove("hidden");
    formContainer.classList.add("hidden");
  }
});

function myFunction(event) {
  console.log(event.target.value);
  telephoneInput.value += event.target.value;
}
phoneHold.addEventListener("click", () => {
  if (holdLabel.classList.value.includes("text-red-500")) {
    holdLabel.classList.remove("text-red-500");
    holdLabel.classList.add("text-green-500");
    holdLabel.textContent = "True";
  } else {
    holdLabel.classList.add("text-red-500");
    holdLabel.classList.remove("text-green-500");
    holdLabel.textContent = "False";
  }
});

microphone.addEventListener("click", () => {
  const icon = microphone.children[0].classList;
  if (icon[1] === "fa-microphone-slash") {
    icon.add("fa-microphone");
    icon.remove("fa-microphone-slash");
  } else {
    icon.remove("fa-microphone");
    icon.add("fa-microphone-slash");
  }
});

call.addEventListener("click", () => {
  if (telephoneInput.value !== "") {
    call.classList.add("hidden");
    end_call.classList.remove("hidden");
  }
});

end_call.addEventListener("click", () => {
  call.classList.remove("hidden");
  end_call.classList.add("hidden");
  telephoneInput.value = "";
});

clearInput.addEventListener("click", () => {
  if (end_call.classList.value.includes("hidden")) {
    telephoneInput.value = "";
  }
});
logOut.addEventListener("click", () => {
  phoneContainer.classList.add("hidden");
  formContainer.classList.remove("hidden");
  logIn.removeAttribute("disabled");
  title.textContent = "Disconnect";
  title.className = "text-red-600 ";
});
