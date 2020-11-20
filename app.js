/* Selectores */
const divExterior = document.querySelector("#div__ext");
const divInterior = document.querySelector("#div__int");
const check = document.querySelector("#check");

/* Eventos */

eventListerners();

function eventListerners() {
  divExterior.addEventListener("click", () => {
    if (check.classList.contains("invisible")) {
      check.classList.remove("invisible");
      check.classList.add("visible");
      divExterior.classList.add("div__ext__hover");
      divInterior.classList.add("div__int__hover");
    } else {
      check.classList.remove("visible");
      check.classList.add("invisible");
      divExterior.classList.remove("div__ext__hover");
      divInterior.classList.remove("div__int__hover");
    }
  });
}
