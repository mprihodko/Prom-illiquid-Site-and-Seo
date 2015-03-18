$(document).ready(function() {
	
	/* Navigation dropdowns */
	
	$('#main-nav > li').hover(
		function() {
			
			$( this ).find('.sub-nav').css('visibility', 'visible');
			$( this ).find('.sub-nav').animate({
				opacity: .8
			}, 300);
			
		},
		function() {
			
			$( this ).find('.sub-nav').css('visibility', 'hidden');
			$( this ).find('.sub-nav').animate({
				opacity: 0
			}, 300);
			
		}
	);
	
	/* Searching dropdown */
	
	$('#location-select-button').click(searchDropDown);
	
	//document.querySelector('#location-select-button .sub-nav').addEventListener('click', function(ev) {});
	
	$('#location-select-button .sub-nav').click(function(ev) {
		
		var self = this;
		
		if( ev.target.tagName == 'SPAN' ) {
			this.previousElementSibling.previousElementSibling.innerHTML = ev.target.innerHTML;
		} else if( ev.target.tagName == 'INPUT' ) {
			ev.stopPropagation();
		}
		
	});
	
	
	function searchDropDown() {
		var iconSpan = $( this ).find('.search-select-icon i');
		
		if( $( iconSpan ).hasClass('fa fa-angle-down') ) {
			$( iconSpan ).removeClass('fa fa-angle-down');
			$( iconSpan ).addClass('fa fa-angle-up');
		} else {
			$( iconSpan ).removeClass('fa fa-angle-up');
			$( iconSpan ).addClass('fa fa-angle-down');
		}
		
		var subNav = $( this ).find('.sub-nav');
		
		if( $( subNav ).css('opacity') == 0 ) {
			$( subNav ).css('visibility', 'visible');
			$( subNav ).animate({
				opacity: .8,
				top: '100%'
			}, 300);
		} else {
			$( subNav ).animate({
				opacity: 0,
				top: '110%'
			}, 300, function() {
				$( this ).css('visibility', 'hidden');
			});
		}
	}
	
	
	/* Fill in search dropdown */
	
	(function fillInSearchDropDown() {
		// AJAX
		var cities = ['Винница', 'Луцк', 'Днепропетровск', 'Житомир', 'Ужгород', 'Запорожье',
		'Ивано-Франковск', 'Киев', 'Кировоград', 'Львов', 'Николаев', 'Одесса', 'Полтава',
		'Ровно', 'Сумы', 'Тернополь', 'Харьков', 'Херсон', 'Черкассы', 'Чернигов', 'Черновцы'];
		
		try {
			var dropDownUl = document.querySelector('#location-select-button .sub-nav ul');
			dropDownUl.innerHTML = '';
			
			fill();
		} catch(err) {
			console.log( err.type + ' ' + err.message );
		}
		
		function fill() {
			for(var i=0; i<cities.length; i++) {
				var li = document.createElement('li');
				
				var a = document.createElement('a');
				a.setAttribute('href', '#');
				
				var span = document.createElement('span');
				span.innerHTML = cities[i];
				
				a.appendChild(span);
				li.appendChild(a);
				
				dropDownUl.appendChild(li);
			}
		}
		
	})();
	
	
	/* Perfect scrollbar */
	
	$('#location-select-button .sub-nav ul').perfectScrollbar();

	
	/* Accordion */
	
	$('.foot-accordion').accordion({
      collapsible: true
    });
	
	$('.foot-accordion a').click(function() {
		if ( $( this ).find('.accor-toggle-icon i').hasClass('fa fa-angle-down') ) {
			
			$( this ).find('.accor-toggle-icon i').removeClass('fa fa-angle-down');
			$( this ).find('.accor-toggle-icon i').addClass('fa fa-angle-up');
			
		} else {
			
			$( this ).find('.accor-toggle-icon i').removeClass('fa fa-angle-up');
			$( this ).find('.accor-toggle-icon i').addClass('fa fa-angle-down');
			
		}
	});
	
	/* Top Fixed Menu & Mobile Responsive Menu */
	
	var	header = document.getElementById('header'),
		carousel = document.getElementById('main-carousel'),
		mobileMenu = document.getElementById('dl-menu'),
		mainNav = document.getElementById('main-nav'),
		topBar = document.getElementById('top-bar'),
		topBarArrow = document.querySelector('.top-bar-arrow ');
		
	window.addEventListener('scroll', function(ev) {
		ev.preventDefault();
		
		if ( document.documentElement.clientWidth > 900 ) {
		
			if( window.pageYOffset > 110 ) {
				header.classList.add('fixed-header');
				topBar.style.display = 'none';
				
				try {
					carousel.classList.add('fixed-carousel');
				} catch(err) {
					console.log( err.type + ' ' + err.message );
				}
				
			} else {
				header.classList.remove('fixed-header');
				topBar.style.display = 'block';
				
				try {
					carousel.classList.remove('fixed-carousel');
				} catch(err) {
					console.log( err.type + ' ' + err.message );
				}
				
			}
			
			return;
		} 
		
	});
	
	window.addEventListener('resize', function() {
		if( document.documentElement.clientWidth <= 900 ) {
			mobile.turnOn();
		} else {
			mobile.turnOff();
		}
	});
	
	var mobile = {
		turnOn: function() {
			
			mainNav.style.display = 'none';
			
			mobileMenu.style.display = 'inline-block';
			
			topBar.style.display = 'none';
			topBar.classList.remove('full-width-line');
			
			topBarArrow.style.display = 'block';
			
		},
		turnOff: function() {
			
			mainNav.style.display = 'inline-block';
			
			mobileMenu.style.display = 'none';
			
			topBar.style.display = 'block';
			topBar.classList.add('full-width-line');
			
			topBarArrow.style.display = 'none';
			
		}
	};
	
	//
	
	
	$(document).on('click', '.top-bar-arrow', function() {
		
		if( $(this).find('i').hasClass('fa-angle-down') ) {
			$(this).find('i').removeClass('fa-angle-down');
			$(this).find('i').addClass('fa-angle-up');
		} else {
			$(this).find('i').removeClass('fa-angle-up');
			$(this).find('i').addClass('fa-angle-down');
		}
		
		$( '#top-bar' ).slideToggle();
		
	});
	
	
	//
	
	if (  document.documentElement.clientWidth <= 900 ) {
		mobile.turnOn();
	} else {
		mobile.turnOff();
	}
	
	//
	
	mobileMenu.addEventListener('click', function() {
		
		if( this.querySelector('.menu-open').style.display == 'inline' ) {
			this.querySelector('.menu-open').style.display = 'none';
			this.querySelector('.menu-back').style.display = 'inline';
		} else {
			this.querySelector('.menu-open').style.display = 'inline';
			this.querySelector('.menu-back').style.display = 'none';
		}
		
		this.querySelector('.dl-menu').classList.toggle('dl-menu-open');
		
	});
	
	
	/* Arrow Up */
	
	var arrow = document.querySelector('.scroll-top');
	
	window.addEventListener('scroll', function() {
		if( window.pageYOffset > 250 ) {
			arrow.classList.add('scroll-on');
		} else {
			arrow.classList.remove('scroll-on');
		}	
	});
	
	arrow.addEventListener('click', function(ev) {
		ev.preventDefault();
		
		var top = setInterval(function() {
			if ( window.pageYOffset > 0 ) {
				document.body.scrollTop ? document.body.scrollTop -= 20 : document.documentElement.scrollTop -= 20;
			} else {
				clearInterval( top );
			}
		}, 10);
	});
	
	/* Tabs */
	
	$('.tabs-buttons li').click(function(ev) {
		ev.preventDefault();
		
		$( this ).parent().find('.activeTab').removeClass('activeTab');
		$( this ).addClass('activeTab');
		
		if( ev.target.tagName == 'LI' ) {
			
			switch( ev.target.id ) {
				case 'tab-home':
					changeTabTo( ev.target.id );
					break;
				case 'tab-pages':
					changeTabTo( ev.target.id );
					break;
				case 'tab-blog':
					changeTabTo( ev.target.id );
					break;
				default:
					break;
			}
			
		} else if ( ev.target.tagName == 'A' ) {
			
			switch( ev.target.parentNode.id ) {
				case 'tab-home':
					changeTabTo( ev.target.parentNode.id );
					break;
				case 'tab-pages':
					changeTabTo( ev.target.parentNode.id );
					break;
				case 'tab-blog':
					changeTabTo( ev.target.parentNode.id );
					break;
				default:
					break;
			}  
			
		}
	});
	
	
	// AJAX
	var ajaxCatList_Home = ['Отопление', 'Строительство', 'Промышленное оборудование', 'Оборудование для предоставления услуг', 'Электрооборудование',
	'Инструмент', 'Сельхозпродукция и техника', 'Металл, пластик, резина', 'Безопасность и защита',
	'Грузовики, автобусы, спецтехника', 'Контрольно-измерительные приборы', 'Сырье и материалы'];
	
	var ajaxCatList_Pages = ['Подарки на 8 марта', 'Купуй украинське', 'Одежда, обувь, аксессуары', 'Авто-, мото-',
	'Техника и электроника', 'Мобильные телефоны, смартфоны', 'Товары для детей', 'Спорт', 'Развлечение', 'Хобби',
	'Товары для дома', 'Мебель и фрунитура', 'Строительство'];
	
	var ajaxCatList_Blog = ['Инженерно-строительные услуги', 'Ремонт и обслуживание техники', 'Деловые услуги',
	'Бытовые услуги', 'Услуги проката и аренды', 'Промышленные услуги', 'Услуги досуга и отдыха', 'Полиграфия и дизайн',
	'Логистические и складские услуги', 'Медицина', 'Красота', 'Здоровье', 'Образование и тренинги'];

	
	
	function changeTabTo( tab ) {
	
		switch( tab ) {
			case 'tab-home':
				createCategoryList( ajaxCatList_Home );
				break;
			case 'tab-pages':
				createCategoryList( ajaxCatList_Pages );
				break;
			case 'tab-blog':
				createCategoryList( ajaxCatList_Blog );
				break;
			default:
				break;
		}
		
	}
	
	
	function createCategoryList( arr ) {
		
		try {
			var catList = document.querySelector('.tabs-content-category-list');
			catList.innerHTML = '';
			
			fill();
		} catch(err) {
			console.log( err.type + ' ' + err.message );
		}
		
		function fill() {
			for(var i=0; i<arr.length; i++) {
				var li = document.createElement('li');
				var link = document.createElement('a');
				link.setAttribute('href', '#');
				link.innerHTML = arr[i];
				li.appendChild(link);
				
				catList.appendChild( li );
			}
		}
		
	}
	
	// Default list
	createCategoryList( ajaxCatList_Home );
	
	
});