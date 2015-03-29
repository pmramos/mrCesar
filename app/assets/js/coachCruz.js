$(document).ready(function(){
	resetNavOnSelection();
	activeCardInit();
});

function resetNavOnSelection(){
	$('.navbar-collapse').on('click', 'a', function(event){
        var $navItem = $(event.delegateTarget);

        if ($navItem.hasClass('in')){
            $navItem.removeClass('in');
        }
    })
}

function activeCardInit(){
	$('.card').on('click', '.card-header .glyphicon', function(event){
		var $cardElement = $(event.delegateTarget);
		
		if ($cardElement.hasClass("selected")){
			$cardElement.removeClass("selected");
		} else {
			$cardElement.addClass("selected");
		}
	});
}