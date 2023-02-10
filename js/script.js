const noEncrypted = document.getElementById("no-encrypted");
const encrypted = document.getElementById("encrypted");
const message = document.getElementById("message");
const result = document.getElementById("result");

function encrypt() {
  if (this.message.value.length) {
    this.result.innerHTML = this.message.value
      .toLowerCase()
      .split("")
      .map((letter) => change(letter))
      .toString()
      .replaceAll(",", "");
  } else {
    this.result.innerHTML = "No has introducido ningún mensaje.";
  }

  noEncrypted.classList.remove("no-encrypted-active");
  encrypted.classList.add("encrypted-active");
}

function change(letter) {
  switch (letter) {
    case "a":
      return "ai";
    case "e":
      return "enter";
    case "i":
      return "imes";
    case "o":
      return "ober";
    case "u":
      return "ufat";
    default:
      return letter;
  }
}

function decrypt() {
  if (this.message.value.length) {
    this.result.innerHTML = this.message.value.toLowerCase()
      .replaceAll("ai", "a")
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");
  } else {
    this.result.innerHTML = "No has introducido ningún mensaje.";
  }
  noEncrypted.classList.remove("no-encrypted-active");
  encrypted.classList.add("encrypted-active");
}

function copy(){
  navigator.clipboard.writeText(this.result.innerHTML)
}