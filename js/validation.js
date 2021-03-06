﻿/* ---------------------
		VALIDATION
-----------------------*/ 

var form = document.forms.registform,
	inputName = form.elements.name,
	inputPass = form.elements.password,
	inputEmail = form.elements.email,
	inputCompany = form.elements.company,
	inputSubmit = form.elements.register
	
	namePattern = /[^a-zA-Zа-яА-Я]/gi,
	passwordPattern = /[^a-zA-Zа-яА-Я0-9]/gi,
	emailPattern = /\w+\@\w+\.\w+/,
	
	required = [inputName, inputPass, inputEmail, inputCompany];
	
	required.forEach(function(input) {
		input.addEventListener('blur', function() {
			ifEveryIsValid( this );
		});
	});


// Validation
function validate( self, str, pattern ) {
	
	switch( self.getAttribute('name') ) {
		case 'name':
			if( !namePattern.test( str ) && self.value.length ) {
				lightAccept();
			} else {
				lightDenied();
			}
		break;
		case 'password':
			if( !passwordPattern.test( str ) && self.value.length >= 8 ) {
				lightAccept();
			} else {
				lightDenied();
			}
		break;
		case 'company':
			if( self.value.length ) {
				lightAccept();
			} else {
				lightDenied();
			}
		break;
		case 'email':
			if( emailPattern.test( str ) && self.value.length ) {
				lightAccept();
			} else {
				lightDenied();
			}
		break;
		default:
			break;
	}
	
	function lightAccept() {
		// true
		if( self.classList.contains('validateInputFalse') ) {
			self.classList.remove('validateInputFalse');
		}
		
		if( !self.classList.contains('validateInputTrue') ) {
			self.classList.add('validateInputTrue');
		}
		
		if( self.nextElementSibling.classList.contains('validateIconFalse') ) {
			self.nextElementSibling.classList.remove('validateIconFalse');
		}
		
		if( !self.nextElementSibling.classList.contains('validateIconTrue') ) {
			self.nextElementSibling.classList.add('validateIconTrue');
		}
		
		if( self.nextElementSibling.children[0].classList.contains('fa-times') ) {
			self.nextElementSibling.children[0].classList.remove('fa-times');
		}
		
		if( !self.nextElementSibling.children[0].classList.contains('fa-check') ) {
			self.nextElementSibling.children[0].classList.add('fa-check');
		}
		
	}
	
	function lightDenied() {
		// false
		if( self.classList.contains('validateInputTrue') ) {
			self.classList.remove('validateInputTrue');
		}
		
		if( !self.classList.contains('validateInputFalse') ) {
			self.classList.add('validateInputFalse');
		}
		
		if( self.nextElementSibling.classList.contains('validateIconTrue') ) {
			self.nextElementSibling.classList.remove('validateIconTrue');
		}
		
		if( !self.nextElementSibling.classList.contains('validateIconFalse') ) {
			self.nextElementSibling.classList.add('validateIconFalse')
		}
		
		if( self.nextElementSibling.children[0].classList.contains('fa-check') ) {
			self.nextElementSibling.children[0].classList.remove('fa-check');
		}
		
		if( !self.nextElementSibling.children[0].classList.contains('fa-times') ) {
			self.nextElementSibling.children[0].classList.add('fa-times');
		}
		
	}
	
};

function ifEveryIsValid( self ) {
	switch( self.name ) {
		case 'name':
				validate( self, self.value );
			break;
		case 'email':
				validate( self, self.value );
			break;
		case 'password':
				validate( self, self.value );
			break;
		case 'company':
				validate( self, self.value );
			break;
		default:
			break;
	}
}

inputSubmit.addEventListener('click', function() {
	required.forEach(function(input) {
		validate( input, input.value );
	});
	
	var isAnyFalse = required.some(function(input) {
		return input.classList.contains('validateInputFalse');
	});
	
	console.log( isAnyFalse );
	
	if( isAnyFalse ) {
		form.onsubmit = function() {
			return false;
		}
	} else {
		form.submit();
	}
	
	
});
		