var text;
$(document).ready(function(e) {
    $('#1,#2,#3,#4,#5,#6,#7,#8,#9,#0,#dot').click(function(){
		var screenValue = $(this).text();
    $('#screen').text($('#screen').text() + screenValue);
    text = $('#screen').text();
	});
  $('#plus, #minus, #divide, #multiply').click(function(e) {
    if($('#screen').text() === ''){
      return false;
    }
    else{
      hiddenInput($(this).text());
    }
  });
  $('#equal').click(function(){
    if($('#equal').attr('onclick') != 'return false'){
      var b = $('#hiddenInput').val();
      var c = b.concat(text);
      $('#screen').text(eval(c).toFixed(6).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1'));
      $('#hiddenInput').val(eval(c).toFixed(6).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1'));
      $('#hiddenInput').val('');
      $('#equal').attr('onclick','return false');
    }
  });
  $('#clear').click(function(){
		$('#screen').text('');
		$('#hiddenInput').val('');
		$('#equal').attr('onclick','');
	});
});
function hiddenInput(buttonPressed){
  $('#hiddenInput').val( $('#hiddenInput').val() + $('#screen').text() + buttonPressed);
  $('#screen').text('');
  $('#equal').attr('onclick','');
}
