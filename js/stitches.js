$(document).ready(function() {
  $(document).keypress(function(event) {
    if (event.which === 32) {
      $('#row').text('1');
      $.cookie('stitches', '1');
    }
  });  
  $(function() {
    if ($.cookie('stitches') != null) {
      $('#row').text($.cookie('stitches'));    
    }
  });
  $(function() {
  	$.extend($.fn.disableTextSelect = function() {
  		return this.each(function(){
  			if($.browser.mozilla){//Firefox
  				$(this).css('MozUserSelect','none');
  			}else if($.browser.msie){//IE
  				$(this).bind('selectstart',function(){return false;});
  			}else{//Opera, etc.
  				$(this).mousedown(function(){return false;});
  			}
  		});
  	});
  	$('#row').disableTextSelect();
  });  
  $('body').click(function() {
    var newValue = parseInt($('#row').text()) + 1;
    $('#row').text(newValue);
    $.cookie('stitches', newValue);
  });
  $(function() {
      $(this).bind("contextmenu", function(e) {
          e.preventDefault();
          var newValue = parseInt($('#row').text()) - 1;
          $('#row').text(newValue);          
          $.cookie('stitches', newValue);          
      });
  });  
});