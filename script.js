// Site configuration — update these values when links are ready.
const SITE_CONFIG = {
  DOWNLOAD_URL: "",
  ROBLOX_PROFILE_URL: "",
  LATEST_VERSION: "Coming soon",
};

function configureAction(selector, url, readyLabel) {
  const current = document.querySelector(selector);
  if (!current || !url) return;

  const link = document.createElement("a");
  link.className = current.className;
  link.href = url;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.innerHTML = current.innerHTML;
  link.removeAttribute("disabled");
  link.querySelector("small")?.remove();
  const label = link.querySelector("span");
  if (label && readyLabel) label.firstChild.textContent = readyLabel;
  current.replaceWith(link);
}

configureAction(".download-button", SITE_CONFIG.DOWNLOAD_URL, "Download for Windows");
configureAction(".roblox-button", SITE_CONFIG.ROBLOX_PROFILE_URL, "Follow me on Roblox");

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  navLinks.classList.toggle("open", !open);
});
navLinks?.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuButton.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("open");
  }
});
