function message() {
  let nom = document.getElementById("nom").value;
  let email = document.getElementById("email")?.value;

  if (nom === "") {
    alert("Veuillez entrer votre nom");
    return;
  }

  if (email !== undefined && email === "") {
    alert("Veuillez entrer votre email");
    return;
  }

  alert("Message envoyé avec succès ✅");
}