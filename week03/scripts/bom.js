

const input= document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
//Make an array
let chaptersArray = getChapterList() || [];

//display list of chapters use forEach and arrow function
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

//button add click event listener
button.addEventListener("click", () => {
    if (input.value != "") { //not empty
        displayList(input.value); //call display with input value
        chaptersArray.push(input.value); //push input value into chapterArray
        setChapterList(); //update localStorage
        input.value = ""; //clear input
        input.focus(); //set focus back to input
    }
});

//Create displayList and used last weeks button click event listener but using let instead of const
function displayList(item) {
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");
    
    li.textContent = input.value;
        deleteButton.textContent = "❌";
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener("click", function() {
            list.removeChild(li);
            input.focus();
        });
       
}

//Define & Set Chapter list
function setChapterList() {
    localStorage.setItem("favBOMList", JSON.stringify(chaptersArray))
}

//Define  and return getChapterList
function getChapterList() {
    return JSON.parse(localStorage.getItem("favBOMList"))
}

//Define delete chapter 
function deleteChapter(chapter) {
chapter = chapter.slice(0, chapter.length - 1); //Reformat chapter parameter(use string.slice)
chaptersArray = chaptersArray.filter((item) => item !== chapter); //Redefine chapterArray
setChapterList(); //Call setChapter
}