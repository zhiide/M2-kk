const body = document.body;
body.style.backgroundColor = "hsl(217, 54%, 11%)";
body.style.fontFamily = "'Outfit', sans-serif";
body.style.marginTop = "100px";

// Бэкграун, Основное фото, Заголовок и  абзац

let main = document.getElementById("wrapper");
main.style.backgroundColor = "hsl(216, 50%, 16%)";
main.style.width = "300px";
main.style.borderRadius = "20px";
main.style.padding = "20px";
main.style.margin = "auto";

let mainPhoto = document.createElement("img");
mainPhoto.setAttribute("src", "./img/image-equilibrium.jpg");
main.appendChild(mainPhoto);

main.firstChild.style.width = "100%";
main.firstChild.style.borderRadius = "20px";

let h3 = document.createElement("h3");
h3.innerHTML = "Equilibrium #3429";
main.appendChild(h3);
h3.style.color = "white";

let pOne = document.createElement("p");
pOne.innerHTML = "Our Equilibrium collection promotes balance and calm.";
main.appendChild(pOne);
pOne.style.color = "rgba(161, 181, 214, 0.80)";

// Див и внутри два индикатора, валюта и время

let wrapp = document.createElement("div");
main.appendChild(wrapp);

wrapp.style.display = "flex";
wrapp.style.justifyContent = "space-between";

let indicateOne = document.createElement("div");
wrapp.appendChild(indicateOne);
let arrowPhoto = document.createElement("img");
arrowPhoto.setAttribute("src", "./img/icon-ethereum.svg");
indicateOne.appendChild(arrowPhoto);
arrowPhoto.style.width = "10px";
let pTwo = document.createElement("p");
pTwo.innerHTML = "0.041ETH";
indicateOne.appendChild(pTwo);
indicateOne.style.display = "flex";
indicateOne.style.justifyContent = "space-between";
indicateOne.style.alignItems = "center";
indicateOne.firstElementChild.style.width = "10px";
indicateOne.firstElementChild.style.marginRight = "10px";
indicateOne.lastElementChild.style.color = "rgb(26, 238, 220)";

let indicateTwo = document.createElement("div");
wrapp.appendChild(indicateTwo);
let clockPhoto = document.createElement("img");
clockPhoto.setAttribute("src", "./img/icon-clock.svg");
indicateTwo.appendChild(clockPhoto);
let pThree = document.createElement("p");
pThree.innerHTML = "3 days left";
indicateTwo.appendChild(pThree);
indicateTwo.style.display = "flex";
indicateTwo.style.justifyContent = "space-between";
indicateTwo.style.alignItems = "center";
indicateTwo.firstElementChild.style.width = "20px";
indicateTwo.firstElementChild.style.marginRight = "10px";
indicateTwo.lastElementChild.style.color = "rgba(161, 181, 214, 0.80)";

// Это разделитель, граница

let border = document.createElement("div");
main.appendChild(border);
border.style.borderBottom = "0.1px solid rgba(161, 200, 214, 0.20)";
border.style.marginBottom = "20px";

// Это аватар автора и его имя

let indicateThree = document.createElement("div");
main.appendChild(indicateThree);
let avatar = document.createElement("img");
avatar.setAttribute("src", "./img/image-avatar.png");
indicateThree.appendChild(avatar);

let span = document.createElement("span");
span.innerHTML = "Creation of Jules Wyvern";
indicateThree.appendChild(span);

span.style.alignItems = "center";
indicateThree.style.display = "flex";
indicateThree.style.alignItems = "center";
indicateThree.firstElementChild.style.width = "30px";
indicateThree.firstElementChild.style.border = "1.5px solid white";
indicateThree.firstElementChild.style.borderRadius = "50%";
indicateThree.lastElementChild.style.color = "rgb(161, 181, 214, 0.80)";
indicateThree.lastElementChild.style.marginLeft = "20px";

alert("Привет! Я оцениваю свою работу на 110 баллов");
