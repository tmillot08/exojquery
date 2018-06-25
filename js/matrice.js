$(document).ready(function() {

  $('#plein').on('click', function() {
    $('.carre').addClass('plein');
    $('.rond').addClass('plein');
    $('.losange').addClass('plein');

  })

  $('#vide').on('click', function() {
    $('.carre').removeClass('plein');
    $('.rond').removeClass('plein');
    $('.losange').removeClass('plein');

  })

  $('.rond').on('click', function(){
    $(this).toggleClass('plein')
  })

  $('.l1').on('click', function(){
    if ($('.li').hasClass('plein')) {
      $(this).removeClass('plein');
      $('div:eq(2)').removeClass('plein');
      $('div:eq(3)').removeClass('plein');
      $('div:eq(4)').removeClass('plein');
      $('div:eq(5)').removeClass('plein');
      return "coucou";

    }else {
    $(this).addClass('plein');
    $('div').eq((2)(3) (4) (5)).addClass('plein');
    return "pokemon";
    }
  })

  $('.l2').on('click', function(){
    $(this).addClass('plein');
    $('div:eq(6)').addClass('plein');
    $('div:eq(8)').addClass('plein');
    $('div:eq(9)').addClass('plein');
    $('div:eq(10)').addClass('plein');
  })
  $('.l3').on('click', function(){
    $(this).addClass('plein');
    $('div:eq(16)').addClass('plein');
    $('div:eq(17)').addClass('plein');
    $('div:eq(18)').addClass('plein');
    $('div:eq(20)').addClass('plein');
  })
  $('.l4').on('click', function(){
    $(this).addClass('plein');
    $('div:eq(16)').addClass('plein');
    $('div:eq(17)').addClass('plein');
    $('div:eq(18)').addClass('plein');
    $('div:eq(20)').addClass('plein');
  })
  $('div:eq(13)').on('click', function(){
    $(this).addClass('plein');
    $('div:eq(3)').addClass('plein');
    $('div:eq(8)').addClass('plein');
    $('div:eq(18)').addClass('plein');
    $('div:eq(23)').addClass('plein');
    $('div:eq(11)').addClass('plein');
    $('div:eq(12)').addClass('plein');
    $('div:eq(14)').addClass('plein');
    $('div:eq(15)').addClass('plein');

  })

 })
