const baseURL = "https://kaymanda.github.io/wdd230/chamber/";
const url = "https://kaymanda.github.io/wdd230/chamber/data/members.json";

const membersHolder = document.querySelector('#members-holder');

async function getMembersData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error('There is an Error:', error);
    }
}

getMembersData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('div');
        card.classList.add('member-card');

        let businessName = document.createElement('h2');
        businessName.textContent = member.name;

        let businessAddress = document.createElement('p');
        businessAddress.textContent = `Address: ${member.address}`;

        let businessPhone = document.createElement('p');
        businessPhone.textContent = `Phone: ${member.phoneNumber}`;

        let businessWebsite = document.createElement('a');
        businessWebsite.textContent = 'Website';
        businessWebsite.href = member.website;
        businessWebsite.target = '_blank';

        let businessImage = document.createElement('img');
        businessImage.src = member.image;
        businessImage.alt = member.name;
        businessImage.setAttribute("width", "120");
        businessImage.setAttribute("height", "100")

        let membershipLevel = document.createElement('p');
        membershipLevel.textContent = `Membership Level: ${member.memberLevel}`;

        card.appendChild(businessName);
        card.appendChild(businessAddress);
        card.appendChild(businessPhone);
        card.appendChild(businessWebsite);
        card.appendChild(businessImage);
        card.appendChild(membershipLevel);
        
        membersHolder.appendChild(card);
    });
}

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

function toggleView(view) {
    membersHolder.classList.toggle("grid", view === "grid");
    membersHolder.classList.toggle("list", view === "list");
}

gridButton.addEventListener("click", () => toggleView("grid"));
listButton.addEventListener("click", () => toggleView("list"));

toggleView("grid");