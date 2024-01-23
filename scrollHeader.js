const header = document.querySelector('header');

window.addEventListener("scroll", function() {
    const scrollHeight = this.window.scrollY;

    if(scrollHeight > 100) {
        header.classList.add('bg-red-600');
        header.classList.add('shadow-md')
    } else {
        header.classList.remove('bg-red-600');
        header.classList.remove('shadow-md');
    }
});