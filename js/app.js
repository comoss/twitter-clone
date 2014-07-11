$(document).ready(function(){
		$('#tweet-controls').hide();

var toggleComposeHeight = function(){
	var compose = $('#toggle');

	if (compose.height() == 21){
		compose.height('42px');
		}else{
			compose.height('21px');
		}
	}

	$('.tweet-compose').click(function(){
		toggleComposeHeight();
		$('#tweet-controls').show();
		});

var maxCharacters = 140;
 
  $('#count').text(maxCharacters);
$('textarea').bind('keyup keydown', function(){
  var count = $('#count');
  var characters = $(this).val().length;

   if (characters > maxCharacters - 11) {
   	count.addClass('over');
   } else {
   	count.removeClass('over');
   }

   if (characters > maxCharacters) {
   	$('button').addClass('disabled');
   } else {
   	$('button').removeClass('disabled');
   }

   count.text(maxCharacters - characters);

 


});
   $('#tweet-submit').click(function(){
 	var newTweet = $('#toggle').val();
 	console.log(newTweet);
 	$('#myTweet').prepend(newTweet);

 });
 
$('#myImput').hide();
$('#tweet-submit').click(function(){
		toggleComposeHeight();
		$('#myImput').show();
	
	});

$('.tweet').mouseenter(function(){
  $('.tweet-actions').show()
}).mouseleave(function(){
	$('.tweet-actions').hide()
})


});
