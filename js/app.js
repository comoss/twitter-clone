$(document).ready(function(){
		$('#tweet-controls').hide();
		$('.reply').hide(); 
		$('.stats').hide();

  $('.tweet').click(function(){
  $(this).find('.reply').slideDown();
  $(this).find('#tweet-controls').slideDown();
  $(this).find('.stats').slideDown();
});
  
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
		$('#tweet-controls').slideDown();
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


// var myTweet = $(	);


//  $('#tweet-submit').click(function(){
//  	var newTweet = $('#toggle').val();
//  	myTweet.find('#tw').text(newTweet);
//  	myTweet.prependTo('#stream');
//  	$('.tweet-compose').val("");



//  });

 $('#tweet-submit').click(function(){
	var newTweet = $('#toggle').val();
 	var newTweetBox = $('#stream > .tweet').first().clone();
 	$(newTweetBox).find('p').first().text(newTweet);
 	$(newTweetBox).find('img').first().attr('src', 'img/alagoon.jpg');
	$(newTweetBox).find('.fullname').first().text('Cody Moss');
	$(newTweetBox).find('.username').first().text('@moss_cody');
 	$(newTweetBox).prependTo('#stream');
	$('.tweet-compose').val("");
 });



$( "#tweet" ).click(function() {
  $( "#tweet-controls, .tweet-actions" ).slideDown( "slow", function() {
    // Animation complete.
  });
});
















});

