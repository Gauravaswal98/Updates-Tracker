document.getElementById("flipToAdmin").addEventListener("click", function () {
  document.querySelector(".card-container").classList.add("flip");
});

document.getElementById("flipToAgent").addEventListener("click", function () {
  document.querySelector(".card-container").classList.remove("flip");
});

document
  .getElementById("toggleAgentPassword")
  .addEventListener("click", function () {
    const passwordField = document.getElementById("agentPassword");
    const passwordFieldType =
      passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", passwordFieldType);

    const icon = this.querySelector("i");
    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
  });

document
  .getElementById("toggleAdminPassword")
  .addEventListener("click", function () {
    const passwordField = document.getElementById("adminPassword");
    const passwordFieldType =
      passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", passwordFieldType);

    const icon = this.querySelector("i");
    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
  });
