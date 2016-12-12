$('.flex-container-wrap select').change(function(){
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

$('.flex-item-wrap select').change(function(){
  var selected = $( this ).find(":selected").val();
  var selectedParent = $( this ).className;

  // remove the classes associated with this particular property select
  $( this ).find( " option" ).each(function(){
    n = $( this ).val();
    $( ".flex-item" ).removeClass( n );
  });

  // add the new class
  $( ".flex-item" ).addClass( selected );

});

$('.fi-align-self-1').change(function(){
  var selected = $( this ).find(":selected").val();
  var selectedParent = $( this ).className;

  // remove the classes associated with this particular property select
  $( this ).find( " option" ).each(function(){
    n = $( this ).val();
    $( ".flex-item-1" ).removeClass( n );
  });

  // add the new class
  $( ".flex-item-1" ).addClass( selected );

});

$('.fi-order-1').change(function(){
  var order = $( this ).find(":selected").val();
  // change the order
  $( ".flex-item-1" ).css( 'order', order );
});

$('.fi-order-2').change(function(){
  var order = $( this ).find(":selected").val();
  // change the order
  $( ".flex-item-2" ).css( 'order', order );
});

$('.fi-order-3').change(function(){
  var order = $( this ).find(":selected").val();
  // change the order
  $( ".flex-item-3" ).css( 'order', order );
});

$('.fi-order-4').change(function(){
  var order = $( this ).find(":selected").val();
  // change the order
  $( ".flex-item-4" ).css( 'order', order );
});

$('.fi-order-5').change(function(){
  var order = $( this ).find(":selected").val();
  // change the order
  $( ".flex-item-5" ).css( 'order', order );
});

$('.fi-order-6').change(function(){
  var order = $( this ).find(":selected").val();
  // change the order
  $( ".flex-item-6" ).css( 'order', order );
});
