// flex-container display

/* $(".fc-display").change(function() {
  var fcDisplay = $( ".fc-display option:selected" ).text();
  $('.flex-container').css('display', fcDisplay);
});

// flex-container flex-direction
$(".fc-direction").change(function() {
  var fcDirection = $( ".fc-direction option:selected" ).text();
  $('.flex-container').css('flex-direction', fcDirection);
});

// flex-container justify-content
$(".fc-justify-content").change(function() {
  var fcJustifyContent = $( ".fc-justify-content option:selected" ).text();
  $('.flex-container').css('justify-content', fcJustifyContent);
});

// flex-container flex-wrap
$(".fc-flex-wrap").change(function() {
  var fcFlexWrap = $( ".fc-flex-wrap option:selected" ).text();
  $('.flex-container').css('flex-wrap', fcFlexWrap);
});

// flex-container align-items
$(".fc-align-items").change(function() {
  var fcAlignItems = $( ".fc-align-items option:selected" ).text();
  $('.flex-container').css('align-items', fcAlignItems);
});

// flex-container align-content
$(".fc-align-content").change(function() {
  var fcAlignContent = $( ".fc-align-content option:selected" ).text();
  $('.flex-container').css('align-content', fcAlignContent);
});
*/

$('select').change(function(){
  var selected = $( this ).find(":selected").val();
  var selectedParent = $( this ).className;

  // remove the classes associated with this particular property select
  $( this ).find( " option" ).each(function(){
    n = $( this ).val();
    $( ".flex-container" ).removeClass( n );
  });

  // add the new class
  $( ".flex-container" ).addClass( selected );

});
