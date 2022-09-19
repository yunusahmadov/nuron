// $('.multiple-items').slick({
//     dots: false,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 824,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 651,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//     ]
//   });

//   let prev=document.querySelector('.slick-prev')

//   prev.innerHTML=`
//   <i class="fa-solid fa-arrow-left"></i>
//   `
//   let next=document.querySelector('.slick-next')
//   next.innerHTML=`
//   <i class="fa-solid fa-arrow-right"></i>
//   `
// $(window).scroll(function () {
//     var $this = $(this),
//         $head = $('#head');
//     if ($this.scrollTop() > 20) {
//     $('.to_top').show()
//     }
//     else if($this.scrollTop() < 20){
//         $('.to_top').hide()
//     }
// });