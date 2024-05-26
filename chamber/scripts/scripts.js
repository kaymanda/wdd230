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

const memberholder = document.querySelector("#members-holder");

async function getMembers() {
    try {
        const response = await fetch(url)
        const data = response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error("There is an error:", error);
    }
}

getMembers();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("div");
        card.classList.add("member-card");
        
        let busiName = document.createElement("h2");
        busiName.textContent = member.name;

        let busiAddress = document.createElement("p");
        busiAddress.textContent =`Address: ${member.address}`;

        let busiPhone = document.createElement("p");
        busiPhone.textContent =`Phone: ${member.phoneNumber}`;

        let busiUrl = document.createElement("a");
        busiUrl.textContent = `Website: ${member.urlweb}`;

        let membership = document.createElement("p");
        membership.textContent = `Memebership Level: ${member.memberLevel}`;

        let logo = document.createElement("img");
        logo.setAttribute("src", member.imageurl);
        logo.setAttribute("alt", `${member.name}`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "170");
        logo.setAttribute("height", "50");

        card.appendChild(busiName);
        card.appendChild(busiAddress);
        card.appendChild(busiPhone);
        card.appendChild(membership);
        card.appendChild(logo);
        card.appendChild(busiUrl);

        memberholder.appendChild(card);

    });
}

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

function toggleView(view) {
    membersContainer.classList.toggle("grid", view === "grid");
    membersContainer.classList.toggle("list", view === "list");
}

gridButton.addEventListener("click", () => toggleView("grid"));
listButton.addEventListener("click", () => toggleView("list"));

toggleView("grid");