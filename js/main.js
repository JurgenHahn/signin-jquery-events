$(function(){

  $('.signin').on('click', function(){
    $('.modal').fadeIn('400');
  })

  $('form').on('click', '.close', function(){
    $('.modal').fadeOut('400');
  })

  $('.submit').on('click', function(){
    event.stopPropagation()
    $('input').attr('class', 'error');
  })

  $('form').on('click', function(){
    event.stopPropagation()
  })

  $('input').on('click', function(){
    event.stopPropagation()
    $(this).removeClass('error');
  })

  $('.modal').on('click', function(){
    $('.modal').fadeOut('400');

  })


})
