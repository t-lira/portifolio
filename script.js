/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function showMenu() {
  const menu = document.getElementsByClassName("navigation__menu");
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}