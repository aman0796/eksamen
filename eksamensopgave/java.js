document.querySelector("#open").addEventListener("click", openMenu);
document.querySelector("#close").addEventListener("click", closeMenu);

function openMenu() {
  document.querySelector(".menu").style.transform = "translateY(0)";
  document.querySelector("#open").classList.add("hide");
  document.querySelector("#close").classList.remove("hide");
}

function closeMenu() {
  document.querySelector(".menu").style.transform = "translateY(-100%)";
  document.querySelector("#open").classList.remove("hide");
  document.querySelector("#close").classList.add("hide");
}
