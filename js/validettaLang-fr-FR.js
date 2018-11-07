(function($){
	$.fn.validettaLanguage = {};
	$.validettaLanguage = {
		init : function(){
			$.validettaLanguage.messages = {
				required	: 'Ce champ est requis.',
				email		: 'Adresse e-mail non valide',
				number		: 'Ce champ accepte seulement des valeurs numériques.',
				maxLength	: 'Veuillez saisir au maximum {count} caractères.',
				minLength	: 'Veuillez saisir au minimum {count} caractères.',
				maxChecked  : 'Vous ne pouvez cocher pas plus de {count} cases.',
				minChecked  : 'Veuillez cocher au moins {count} cases.',
				maxSelected : 'Vous ne pouvez sélectionner plus de {count} options.',
				minSelected : 'Veuillez sélectionner au moins {count} options.',
				notEqual	: 'Les valeurs ne correspondent pas.',
				different   : 'Fields cannot be the same as each other',
				creditCard  : 'Numéro de carte de crédit pas valide.'
			};
		}
	};
	$.validettaLanguage.init();
})(jQuery);