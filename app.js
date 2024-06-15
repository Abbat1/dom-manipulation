const mainEl =document.querySelector("main");

console.log("mainEl");

mainEl.style.backgroundColor = "var(--main-bg)";

const h1 =document.createElement("hi");

h1.innerHTML = "DOM Manipulation";
//setting backgroumd color using var
mainEl.appendChild(h1);
//creating html Element
mainEl.appendChild(h1);
//attach text to h1 we created
mainEl.classList.add("flec-ctr");
//add class to html elelment
const topMenuEl = document.querySelector("#top-menu");

//set the ehight to 100%
topMenuEl.style.height = "100%";

topMenuEl.style.background = "var(--top-meni-bg";

const menuLinks = [
{ text: "about", href: "/about" },
{ text: "catalog", href: "/catalog" },
{ text: "orders", href: "/orders" },
{ text: "account", href: "/account" },
];

menuLinks.forEach((link) => {
    //create anchor element
    const aElement = document.createElement("a");
    //added href
    aElement.textContent = link.text;
    //append to 
    topMenuEl.appendaChild(aElement);
});

