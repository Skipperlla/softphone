const privateIdentity = document.querySelector("#privateIdentity");
const publicIdentity = document.querySelector("#publicIdentity");
const password = document.querySelector("#password");
const realm = document.querySelector("#realm");
const madatory = document.querySelector("#madatory");
const forbidden = document.querySelector("#forbidden");
const logIn = document.querySelector("#logIn");
const logOut = document.querySelector("#logOut");
const header = document.querySelector("#header");
const title = document.querySelector("#title");
const bg = document.querySelector("#bg");

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
    logOut.removeAttribute("disabled");
    localStorage.setItem("privateIdentity", privateIdentity.value);
    localStorage.setItem("publicIdentity", publicIdentity.value);
    localStorage.setItem("realm", realm.value);
    localStorage.setItem("password", password.value);
    bg.classList.add("hidden");
  }
});
logOut.addEventListener("click", () => {
  title.textContent = "Disconnect";
  title.className = "text-red-600 ";
  logOut.setAttribute("disabled", "");
  logIn.removeAttribute("disabled");
});
