const resources = document.querySelector("#resources");
const showResources = document.querySelector("#show-resources");

showResources.addEventListener("click", displayHiddenResources);

resources.addEventListener("mouseover", boldHoveredItem);
resources.addEventListener("mouseout", removeBoldFromItem);
resources.addEventListener("click", italicizeClickedItem);
resources.addEventListener("mouseout", removeItalicsFromItem);

function boldHoveredItem(e) {
    const listItem = e.target.closest(".list-group-item"); //returns true if the hovered item is within range of group.
    if (listItem) {
        listItem.classList.add("fw-bold");
    }
}

function removeBoldFromItem(e) {
    const listItem = e.target.closest(".list-group-item");
    if (listItem) {
        listItem.classList.remove("fw-bold");
    }
}

function italicizeClickedItem(e){
    const listItem = e.target.closest(".list-group-item");
    if (listItem){
        listItem.classList.add("fst-italic")
    }
}

function removeItalicsFromItem(e){
    const listItem = e.target.closest(".list-group-item");
    if (listItem){
        listItem.classList.remove("fst-italic")
    }
}

function displayHiddenResources(e) {
    resources.classList.remove("d-none");
}