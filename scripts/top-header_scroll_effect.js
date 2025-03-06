const topHeader = document.getElementById('top-header');
// console.log(topHeader);

document.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        topHeader.style.backgroundColor = '#222222cc';
    } else {
        topHeader.style.backgroundColor = '';
    }
})

