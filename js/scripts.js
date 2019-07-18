window.onload = () => {
	new Swiper('.swiper-container', {
		direction: 'horizontal',
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			hiddenClass: 'hide',
			progressbarOpposite: true
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
			disabledClass: 'disabled',
			hiddenClass: 'hide'
		},

		on: {
			init: () => {
				let container = document.querySelector('.swiper-container');

				document.querySelectorAll('.swiper-navigation-button').forEach(button => button.classList.add('hide'));
				document.querySelector('.swiper-pagination').classList.add('hide');
				console.log(window.offsetHeight);
				container.style.minHeight = window.innerHeight - 20 + 'px';

				// container.addEventListener('mouseover', () => {
				// 	document.querySelectorAll('.swiper-navigation-button').forEach(button => button.classList.remove('hide'));
				// 	document.querySelector('.swiper-pagination').classList.remove('hide');
				// });
				//
				// container.addEventListener('mouseout', () => {
				// 	document.querySelectorAll('.swiper-navigation-button').forEach(button => button.classList.add('hide'));
				// 	document.querySelector('.swiper-pagination').classList.add('hide');
				// });
			},
			slideNextTransitionStart: () => {
				if('first_transition_start' in window) {
					let container = document.querySelector('.swiper-container');
					console.log('slideNextTransitionStart');
					if(container.hasAttribute('next_page')) {
						window.next_page = container.getAttribute('next_page');
					}
				}
				window.first_transition_start = true;
			},
			slideNextTransitionEnd: () => {
				if('first_transition_end' in window) {
					console.log('slideNextTransitionEnd');
					if('next_page' in window) window.location.href = window.next_page === '#' ? '' : window.next_page;
				}
				window.first_transition_end = true;
			},
			slidePrevTransitionStart: () => {
				let container = document.querySelector('.swiper-container');
				console.log('slidePrevTransitionStart');
				if(container.hasAttribute('prev_page')) {
					window.prev_page = container.getAttribute('prev_page');
				}
			},
			slidePrevTransitionEnd: () => {
				console.log('slidePrevTransitionEnd');
				if('prev_page' in window) window.location.href = window.prev_page === '#' ? '' : window.prev_page;
			}
		}
	});
};
