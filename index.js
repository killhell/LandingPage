const body = document.body;
const navLink = document.getElementById("links");
const icon = document.getElementById("navIcon");

function iconhandler() {
  const open = navLink.getAttribute("data-open");

  if (open === "flase") {
    navLink.setAttribute("data-open", "true");
    body.classList.add("navOpen");
    icon.classList.add("fa-x");
  } else if (open === "true") {
    navLink.setAttribute("data-open", "flase");
    body.classList.remove("navOpen");
    icon.classList.remove("fa-x");
  }
}

function bodyListner() {
  if (body.classList.contains("navOpen")) {
    document.addEventListener("click", () => {
      console.log("okkk");
    });
  }
}

icon.addEventListener("click", iconhandler);
