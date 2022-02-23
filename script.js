
// NAV BAR //

const newNavbar = document.createElement("nav");
const githLink = document.createElement("a");
const spotLink = document.createElement("a");
const linkLink = document.createElement("a");
const homeLink = document.createElement("a");

newNavbar.className = "navbar";
githLink.href = "https://github.com/benlimpic";
githLink.innerText = "Github";
githLink.target = "_blank";
spotLink.href = "https://open.spotify.com/artist/71faWKaZNj32iQoXE2j3jn?si=1RNNOJ-nQIS_zyPR5vem0A";
spotLink.innerText = "Spotify";
spotLink.target = "_blank";
linkLink.href = "https://www.linkedin.com/in/benlimpic/";
linkLink.innerText = "LinkedIn";
linkLink.target = "_blank";
homeLink.href = "./index.html";
homeLink.innerText = "Home";

newNavbar.append(homeLink)
newNavbar.append(githLink)
newNavbar.append(spotLink)
newNavbar.append(linkLink)
document.body.querySelector(".container").prepend(newNavbar)

//FOOTER//
const thisYear = new Date().getFullYear();
const footer = document.createElement("div");
const footerLink = document.createElement("a")
footer.className = "footer"
footerLink.href = "mailto:benlimpic@gmail.com"
footerLink.innerText = `Copyright © ${thisYear} Ben Limpic`
footer.append(footerLink)
document.body.querySelector(".container").append(footer)