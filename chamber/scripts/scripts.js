const hamburgerButton = document.querySelector("#theButton");
const navMenu = document.querySelector(".menu");

hamburgerButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    hamburgerButton.classList.toggle("open");
});

const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-1s")) || 0;
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
}


document.querySelector('.today').textContent = Date.now();

numVisits++;

localStorage.setItem("numVisits-1s", numVisits);

/*Time Stamp*/

function setTimeStamp() {
    const timeElement = document.getElementById("timestamp");
    const currentDate = new Date();
    const formattedTimeStamp = currentDate.toLocaleString();
}
setTimeStamp();

/*Member/Directory*/

const url = "https://kaymanda.github.io/wdd230/chamber/data/members.json";

const cards = document.querySelector("#cards");

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members); 
};


const displayMembers = (members) => {

    members.forEach((member) => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let address = document.createElement("p");
        let phoneNumber = document.createElement("p");
        let urlweb = document.createElement("a");
        let memberLevel = document.createElement("h4");
        let image = document.createElement("img");

        name.textContent =`${member.name}`;
        address.textContent =`${member.address}`;
        phoneNumber.textContent =`${member.phoneNumber}`;
        urlweb.textContent =`${member.urlweb}`;
        memberLevel.textContent =`${member.memberLevel}`;

        image.setAttribute("src", member.image);
        image.setAttribute("alt", `${member.name}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "125");
        image.setAttribute("height", "50");

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(urlweb);
        card.appendChild(memberLevel);

        cards.appendChild(card);

    });
};

getMembersData();
