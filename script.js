
// NAV BAR //

const navbar = document.createElement("nav");
const about = document.createElement("a");
const github = document.createElement("a");
const linkedIn = document.createElement("a");
const spotify = document.createElement("a");
navbar.classname = "navbar";
about.href = "./index.html";
about.innerText = "About";
github.href = "https://github.com/benlimpic";
github.innerText = "Github";
linkedIn.href = "https://www.linkedin.com/in/benlimpic/";
linkedIn.innerText = "LinkedIn";
spotify.href = "https://open.spotify.com/artist/71faWKaZNj32iQoXE2j3jn?si=1RNNOJ-nQIS_zyPR5vem0A";
spotify.innerText = "Spotify";

navbar.append(about)
navbar.append(github)
navbar.append(linkedIn)
navbar.append(spotify)
document.body.querySelector(".container").prepend(navbar)

//FOOTER//
const thisYear = new Date().getFullYear();
const footer = document.createElement("div");
const footerLink = document.createElement("a")
footer.className = "footer"
footerLink.href = "mailto:benlimpic@gmail.com"
footerLink.innerText = `Copyright © ${thisYear} Ben Limpic`
footer.append(footerLink)
document.body.querySelector(".container").append(footer)