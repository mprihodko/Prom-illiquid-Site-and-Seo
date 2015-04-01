$(document).ready(function() {
	
	/* Navigation dropdowns */
	
	$('#main-nav > li').hover(
		function() {
			
			var subNavOut = $( this ).find('.sub-nav.out-level');
			
			$( subNavOut ).css('visibility', 'visible').animate({
				opacity: .9
			}, 300);
			
		},
		function() {
			
			var subNavOut = $( this ).find('.sub-nav.out-level');
			
			$( subNavOut ).css('visibility', 'hidden').animate({
				opacity: 0
			}, 300);
			
		}
	);
	
	$('.downItem').hover(
		function() {
		
			var subNavInn = $( this ).find('.inn-level');
			
			$( subNavInn ).css('visibility', 'visible').animate({
				opacity: .9
			}, 300);
		
		},
		function() {
			
			var subNavInn = $( this ).find('.inn-level');
			
			$( subNavInn ).css('visibility', 'hidden').animate({
				opacity: 0
			}, 300);
			
		}
	);
	
	/* Searching dropdown */
	
	$('#location-select-button').click(searchDropDown);
	
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
		var helpInput = $( this ).find('[name="searchCityName"]');
		
		console.log( helpInput );
		
		if( $( subNav ).css('opacity') == 0 ) {
			$( subNav ).css('visibility', 'visible');
			$( subNav ).animate({
				opacity: .8,
				top: '100%',
				width: $('#location-select-button').width() + 40 + 'px'
			}, 300);
			
			$( helpInput ).val('');
			
			if( $( this ).has('.promptDiv') ) {
				$( this ).find('.promptDiv').remove();
			}
			
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
	
	// AJAX
	var cities = ['Винница', 'Луцк', 'Днепропетровск', 'Житомир', 'Ужгород', 'Запорожье',
	'Ивано-Франковск', 'Киев', 'Кировоград', 'Львов', 'Николаев', 'Одесса', 'Полтава',
	'Ровно', 'Сумы', 'Тернополь', 'Харьков', 'Херсон', 'Черкассы', 'Чернигов', 'Черновцы'
	];
	
	(function fillInSearchDropDown() {
		
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
	
	/* Autocomplete */
	
		
	var search = document.getElementsByName('searchCityName')[0];
	
	autoComplete(search, cities);
		

	
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
	
	/* Fancybox Gallery */
	
	$('.fancy').fancybox();
	
	/* Product Tabs */
	
	try {
		var prodTabs = document.querySelector('.product-tabs .tabs'),
			descrPanel = document.getElementById('description_panel'),
			addPanel = document.getElementById('add_info_panel'),
			revPanel = document.getElementById('reviews_panel');
	} catch(err) {
		console.log( err.typr + ' ' + err.message );
	}
	
	prodTabs.addEventListener('click', function(ev) {
		ev.preventDefault();
		
		[].forEach.call(prodTabs.children, function(tab) {
			tab.classList.remove('active');
		});
		
		var target = ev.target;
		
		if( target.parentNode.className.indexOf('description_tab') != -1 ) {
			target.parentNode.classList.add('active');
			changeProdPanel( 'description_tab' );
		} else if( target.parentNode.className.indexOf('add_info_tab') != -1 ) {
			target.parentNode.classList.add('active');
			changeProdPanel( 'add_info_tab' );
		} else if( target.parentNode.className.indexOf('reviews_tab') != -1 ) {
			target.parentNode.classList.add('active');
			changeProdPanel( 'reviews_tab' );
		} else {
			return;
		}
		
		function changeProdPanel( tab ) {
			switch( tab ) {
				case 'description_tab':
					descrPanel.style.display = 'block';
					addPanel.style.display = 'none';
					revPanel.style.display = 'none';
					break;
				case 'add_info_tab':
					descrPanel.style.display = 'none';
					addPanel.style.display = 'block';
					revPanel.style.display = 'none';
					break;
				case 'reviews_tab':
					descrPanel.style.display = 'none';
					addPanel.style.display = 'none';
					revPanel.style.display = 'block';
					break;
				default:
					break;
			}
		}
		
	});
	
	/* Stars Rating */
	
	var starSpans = document.querySelectorAll('.add-review .stars span');
	[].forEach.call(starSpans, function(span) {
		span.addEventListener('mouseover', function() {
			var stars = this.children;
			for(var i = 0; i<stars.length; i++) {
				stars[i].classList.remove('fa-star-o');
				stars[i].classList.add('fa-star');
			}
		});
		
		span.addEventListener('mouseout', function() {
			var stars = this.children;
			for(var i = 0; i<stars.length; i++) {
				stars[i].classList.remove('fa-star');
				stars[i].classList.add('fa-star-o');
			}
		});
	});
	
	
	
	
});