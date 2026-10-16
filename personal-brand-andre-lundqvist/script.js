const temaknapp = document.querySelector("#tema");
if (temaknapp) {
  temaknapp.hidden = false;

  function bytTema() {
    document.body.classList.toggle("morkt");
    if (document.body.classList.contains("morkt")) {
      temaknapp.textContent = "Byt till ljust läge";
    } else {
      temaknapp.textContent = "Byt till mörkt läge";
    }
  }

  temaknapp.addEventListener("click", bytTema);
}

// Mobilmenyhantering
const mobilKnapp = document.querySelector(".mobil-meny-knapp");
const navMeny = document.querySelector(".nav-meny");
const navLankar = document.querySelectorAll(".nav-meny a");

if (mobilKnapp && navMeny) {
  mobilKnapp.addEventListener("click", () => {
    const oppen = mobilKnapp.getAttribute("aria-expanded") === "true";
    mobilKnapp.setAttribute("aria-expanded", String(!oppen));
    navMeny.classList.toggle("aktiv");
  });

  // Stäng mobilmenyn vid klick på en navigationslänk
  navLankar.forEach((lank) => {
    lank.addEventListener("click", () => {
      mobilKnapp.setAttribute("aria-expanded", "false");
      navMeny.classList.remove("aktiv");
    });
  });

  // Stäng vid klick utanför sidhuvudet
  document.addEventListener("click", (handelse) => {
    if (!mobilKnapp.contains(handelse.target) && !navMeny.contains(handelse.target)) {
      mobilKnapp.setAttribute("aria-expanded", "false");
      navMeny.classList.remove("aktiv");
    }
  });

  // Stäng vid tryck på Escape för tillgänglighet
  document.addEventListener("keydown", (handelse) => {
    if (handelse.key === "Escape" && navMeny.classList.contains("aktiv")) {
      mobilKnapp.setAttribute("aria-expanded", "false");
      navMeny.classList.remove("aktiv");
      mobilKnapp.focus();
    }
  });
}
