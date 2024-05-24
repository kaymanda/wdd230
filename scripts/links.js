
const baseURL = "https://kaymanda.github.io/wdd230/";
const linksURL = "https://kaymanda.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json;
    displayLinks(data);
}

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        const li = document.createElement("li");
        li.textContent = `${week.week} :`;

        links.forEach((link) => {
            const a = document.createElement("a");
            a.setAttribute("href",link.url);
            a.textContent = `${link.title}`;

            li.appendChild(a);
            URL.appendChild(li);
        
        });

    });
};

getLinks();