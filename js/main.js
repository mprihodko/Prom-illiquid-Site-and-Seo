$(document).ready(function() {
	
	/* Navigation dropdowns */
	
	$('#main-nav > li').hover(
		function() {
			$( this ).find('.topItem + .sub-nav').animate({
				opacity: .8
			}, 300);
		},
		function() {
			$( this ).find('.topItem + .sub-nav').animate({
				opacity: 0
			}, 300);
		}
	);
	
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
		var catList = document.querySelector('.tabs-content-category-list');
		
		catList.innerHTML = '';
		
		for(var i=0; i<arr.length; i++) {
			
			var li = document.createElement('li');
			var link = document.createElement('a');
			link.setAttribute('href', '#');
			link.innerHTML = arr[i];
			li.appendChild(link);
			
			catList.appendChild( li );
			
		}
		
	}
	
	// Default list
	createCategoryList( ajaxCatList_Home );
	
	
});