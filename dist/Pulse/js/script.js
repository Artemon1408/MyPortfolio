// $(document).ready(function(){
// 	$('.carousel__inner').slick({
// 		speed: 1200,
// 		// adaptiveHeight: true,
// 		prevArrow: '<button type="button" class="slick-prev"><img src="../images/logo/chevron_left_solid.png"></button>',
// 		nextArrow: '<button type="button" class="slick-next"><img src="../images/logo/chevron_right_solid.png"></button>',
// 		responsive: [
// 				{
// 					breakpoint: 768,
// 					settings: {
// 						dots: true,
// 						arrows: false
// 				}
// 			}
// 		],
		
// 	});
// });

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
	controls: false,
	nav: false,

	responsive : {
		320: {
			edgePadding: 20,
			gutter: 20,
			items: 1, 
			nav: true
		},
		
		575: {
			edgePadding: 20,
			gutter: 20,
			items: 1,
			
			
			
		},
		991: {
			gutter: 30,
			items: 1,
			nav: true
			
		},
		992: {
			items: 1,
			nav: false
			

		}
} 
	
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});

const tabContent = document.querySelectorAll('.catalog__content'),
          tabWrapper = document.querySelector('.catalog__tabs'),
          tabs = document.querySelectorAll('.catalog__tab');
		  
   
	
	
	
	function hideTabContent() {
        tabContent.forEach(item => {
            item.style.display = 'none';
        });
        tabs.forEach(item => {
            item.classList.remove('catalog__tab_active');
        });
    }
 
    function showTabContent(i=0) {
        tabContent[i].style.display = 'flex';
        tabs[i].classList.add('catalog__tab_active');
    }
 
    hideTabContent();
    showTabContent();

	tabWrapper.addEventListener('click', (e) => {
  const target = e.target;
  console.log(target);
  if (target && target.closest('.catalog__tab')) { // 1
      console.log('2click');
      tabs.forEach((item, i) => {
          if (target == item || target.parentElement == item ) {  // 2
              hideTabContent();
              showTabContent(i);
          }
      });
  }
});

const links = document.querySelectorAll('.catalog-item__link'),
      backs = document.querySelectorAll('.catalog-item__back');
          
function toggle(elems) {
  elems.forEach((elem, i) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.catalog-item__content')[i].classList.toggle('catalog-item__content_active');
      document.querySelectorAll('.catalog-item__list')[i].classList.toggle('catalog-item__list_active');
     });
  });
}
 
toggle(links);
toggle(backs);
