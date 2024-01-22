//apppear menu clicking toggle button
const toggleButton = document.getElementById('toggle');
const dropdownMenu = document.getElementById('menu');
const menuAppearence = () => {
    dropdownMenu.classList.remove('hidden');
    document.body.classList.toggle("overflow-hidden");
}

toggleButton.addEventListener("click", menuAppearence);

//disappear menu clicking clicking close button
const closeButton = document.getElementById('close')
const menuDisappearence = () => {
    dropdownMenu.classList.add('hidden');
    document.body.classList.remove("overflow-hidden");

}


closeButton.addEventListener("click", menuDisappearence);