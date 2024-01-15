const main = ()=>{
    const btnOpen = document.querySelector('#open');
    const coverEl = document.querySelector('#cover');

    // btn open
    btnOpen.addEventListener('click',()=>{
        coverEl.classList.replace('h-full','h-0');
        var audio = document.getElementById('myAudio');
        audio.play();
    })
    // aos
    AOS.init();

    // copy to clipboard
      function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
          .then(() => {
            alert('Teks Berhasil Disalin !');
          })
          .catch(err => {
            console.error('Unable to copy to clipboard', err);
          });
      }
      const btnSalin = document.querySelectorAll('.salin');
      btnSalin.forEach((btn,index) => {
        btn.addEventListener('click',function(){
            let value = document.querySelectorAll('.teks-copy');
            this.innerText = 'copied';
            copyToClipboard(value[index].innerText);
          })
      })

}

document.addEventListener('DOMContentLoaded',main);