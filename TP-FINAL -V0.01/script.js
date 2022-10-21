 
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

function SendDateTo() {
  let CheckIn = document.getElementById("checkin").value;
  let CheckOut = document.getElementById("checkout").value;

      window.open('./resv.html')
      localStorage.setItem("Entrada",CheckIn)
      localStorage.setItem("Salida",CheckOut)
      localStorage.setItem("Verify",true)
      window.open('resv.html','_blank')
      
}