const main = ()=>{
    const btnOpen = document.querySelector('#open');
    const coverEl = document.querySelector('#cover');

    btnOpen.addEventListener('click',()=>{
        coverEl.classList.replace('h-screen','h-0');
    })
    // AOS.init();
}

document.addEventListener('DOMContentLoaded',main);